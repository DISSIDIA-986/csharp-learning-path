#!/bin/bash

# C# 学习课程网站 - GitHub Pages 部署脚本
# 作者: GitHub Copilot
# 创建时间: 2025-07-31

set -e  # 出现错误时立即退出

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 日志函数
log_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

log_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

log_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

log_error() {
    echo -e "${RED}❌ $1${NC}"
}

# 清理函数
cleanup() {
    if [ "$ORIGINAL_BRANCH" != "" ] && [ "$(git rev-parse --abbrev-ref HEAD)" != "$ORIGINAL_BRANCH" ]; then
        log_info "恢复到原始分支: $ORIGINAL_BRANCH"
        git checkout "$ORIGINAL_BRANCH"
    fi
}

# 设置清理陷阱
trap cleanup EXIT

echo "🚀 开始部署 C# 学习课程网站到 GitHub Pages..."

# 记录原始分支
ORIGINAL_BRANCH=$(git rev-parse --abbrev-ref HEAD)
log_info "当前分支: $ORIGINAL_BRANCH"

# 检查是否在正确的目录
if [ ! -f "package.json" ]; then
    log_error "未找到 package.json 文件，请确保在 course-website 目录中运行此脚本"
    exit 1
fi

# 检查是否有未提交的更改
if [ -n "$(git status --porcelain)" ]; then
    log_warning "检测到未提交的更改，请先提交所有更改再进行部署"
    echo "运行以下命令来提交更改："
    echo "  git add ."
    echo "  git commit -m 'Update course content'"
    echo "  git push origin main"
    exit 1
fi

# 确保在正确的分支上
if [ "$ORIGINAL_BRANCH" != "main" ]; then
    log_warning "当前不在 main 分支，切换到 main 分支..."
    git checkout main
fi

# 拉取最新代码
log_info "拉取最新代码..."
if ! git pull origin main; then
    log_error "拉取代码失败"
    exit 1
fi

# 检查 Node.js 和 npm
if ! command -v node &> /dev/null; then
    log_error "未找到 Node.js，请先安装 Node.js"
    exit 1
fi

if ! command -v npm &> /dev/null; then
    log_error "未找到 npm，请先安装 npm"
    exit 1
fi

log_info "Node.js 版本: $(node --version)"
log_info "npm 版本: $(npm --version)"

# 安装依赖
log_info "安装项目依赖..."
if ! npm ci; then
    log_error "依赖安装失败"
    exit 1
fi

# 构建项目
log_info "构建 Next.js 项目..."
if ! npm run build; then
    log_error "项目构建失败"
    exit 1
fi

# 检查构建是否成功
if [ ! -d "out" ]; then
    log_error "构建失败：未找到 out 目录"
    exit 1
fi

log_success "项目构建成功"

# 获取构建文件数量
BUILD_FILES=$(find out -type f | wc -l)
log_info "构建文件数量: $BUILD_FILES"

# 创建临时目录保存构建文件
TEMP_DIR=$(mktemp -d)
log_info "创建临时目录: $TEMP_DIR"
cp -r out/* "$TEMP_DIR/"

# 检查是否已经有 gh-pages 分支
if git show-ref --verify --quiet refs/heads/gh-pages; then
    log_info "切换到 gh-pages 分支..."
    git checkout gh-pages
    
    # 清理旧文件（保留 .git 和隐藏文件）
    log_info "清理旧的部署文件..."
    find . -maxdepth 1 \( -name '.git' -o -name '.github' -o -name '.gitignore' \) -prune -o -name '.*' -prune -o -type f -exec rm -f {} \;
    find . -maxdepth 1 \( -name '.git' -o -name '.github' -o -name '.gitignore' \) -prune -o -name '.*' -prune -o -type d -exec rm -rf {} \; 2>/dev/null || true
else
    log_info "创建新的 gh-pages 分支..."
    git checkout --orphan gh-pages
    
    # 清理所有文件
    git rm -rf . 2>/dev/null || true
    # 清理未跟踪的文件
    git clean -fd
fi

# 复制构建文件到根目录
log_info "复制构建文件到 gh-pages 分支..."
cp -r "$TEMP_DIR"/* .

# 添加 .nojekyll 文件以禁用 Jekyll 处理
log_info "添加 .nojekyll 文件..."
touch .nojekyll

# 添加自定义域名文件（如果需要）
# echo "yourdomain.com" > CNAME

# 创建 README 文件
cat > README.md << EOF
# C# 学习课程网站

这是从 main 分支自动部署的静态网站。

- � 部署时间: $(date +'%Y-%m-%d %H:%M:%S')
- 📦 构建文件数量: $BUILD_FILES
- 🌐 访问地址: [GitHub Pages](https://$(git config --get remote.origin.url | sed 's/.*github.com[\/:]//;s/.git$//' | tr '[:upper:]' '[:lower:]' | sed 's/\//.github.io\//')/)

请勿直接修改此分支，所有更改应在 main 分支进行。
EOF

# 检查是否有文件变更
if [ -z "$(git status --porcelain)" ]; then
    log_info "没有文件变更，跳过部署"
    # 清理临时目录
    rm -rf "$TEMP_DIR"
    exit 0
fi

# 提交更改
log_info "提交部署文件..."
git add .
COMMIT_MSG="Deploy: $(date +'%Y-%m-%d %H:%M:%S')

- Build files: $BUILD_FILES
- Source commit: $(git rev-parse main | cut -c1-8)"

if ! git commit -m "$COMMIT_MSG"; then
    log_error "提交失败"
    rm -rf "$TEMP_DIR"
    exit 1
fi

# 推送到 GitHub
log_info "推送到 GitHub Pages..."
if ! git push -f origin gh-pages; then
    log_error "推送失败"
    rm -rf "$TEMP_DIR"
    exit 1
fi

# 清理临时目录
rm -rf "$TEMP_DIR"

# 切换回原始分支
log_info "切换回 $ORIGINAL_BRANCH 分支..."
git checkout "$ORIGINAL_BRANCH"

# 获取仓库信息
REPO_URL=$(git config --get remote.origin.url)
REPO_NAME=$(echo "$REPO_URL" | sed 's/.*github.com[\/:]//;s/.git$//')
PAGES_URL="https://$(echo "$REPO_NAME" | tr '[:upper:]' '[:lower:]' | sed 's/\//.github.io\//')"

log_success "部署完成！"
echo ""
echo "🌐 您的网站将在几分钟内在以下地址可用："
echo "   $PAGES_URL"
echo ""
echo "📋 要启用 GitHub Pages，请确保："
echo "   1. 在 GitHub 仓库中进入 Settings > Pages"
echo "   2. 选择 Source: Deploy from a branch"
echo "   3. 选择 Branch: gh-pages"
echo "   4. 点击 Save"
echo ""
echo "📊 部署统计："
echo "   - 构建文件数量: $BUILD_FILES"
echo "   - 部署分支: gh-pages"
echo "   - 源分支: main"
echo ""
log_success "部署脚本执行完成！"
