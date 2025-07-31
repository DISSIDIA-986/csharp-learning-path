#!/bin/bash

# C# 学习课程网站 - 开发工具脚本
# 作者: GitHub Copilot
# 创建时间: 2025-07-31

set -e

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
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

log_header() {
    echo -e "${PURPLE}🔧 $1${NC}"
}

# 显示帮助信息
show_help() {
    echo "C# 学习课程网站开发工具"
    echo ""
    echo "用法: $0 [命令]"
    echo ""
    echo "可用命令:"
    echo "  dev       启动开发服务器"
    echo "  build     构建项目"
    echo "  preview   构建并预览生产版本"
    echo "  lint      运行代码检查"
    echo "  clean     清理构建文件和依赖"
    echo "  install   安装/更新依赖"
    echo "  check     检查项目健康状态"
    echo "  deploy    部署到 GitHub Pages"
    echo "  help      显示此帮助信息"
    echo ""
    echo "示例:"
    echo "  $0 dev      # 启动开发服务器"
    echo "  $0 build    # 构建生产版本"
    echo "  $0 deploy   # 部署到 GitHub Pages"
}

# 检查环境
check_environment() {
    log_header "检查开发环境"
    
    # 检查 Node.js
    if command -v node &> /dev/null; then
        log_success "Node.js: $(node --version)"
    else
        log_error "未安装 Node.js"
        return 1
    fi
    
    # 检查 npm
    if command -v npm &> /dev/null; then
        log_success "npm: $(npm --version)"
    else
        log_error "未安装 npm"
        return 1
    fi
    
    # 检查 git
    if command -v git &> /dev/null; then
        log_success "Git: $(git --version)"
    else
        log_error "未安装 Git"
        return 1
    fi
    
    # 检查项目文件
    if [ -f "package.json" ]; then
        log_success "找到 package.json"
    else
        log_error "未找到 package.json，请确保在正确的目录中运行"
        return 1
    fi
    
    # 检查依赖
    if [ -d "node_modules" ]; then
        log_success "依赖已安装"
    else
        log_warning "依赖未安装，运行 'npm install' 安装依赖"
    fi
}

# 安装依赖
install_dependencies() {
    log_header "安装项目依赖"
    
    if [ -f "package-lock.json" ]; then
        log_info "使用 npm ci 安装依赖（基于 package-lock.json）"
        npm ci
    else
        log_info "使用 npm install 安装依赖"
        npm install
    fi
    
    log_success "依赖安装完成"
}

# 启动开发服务器
start_dev() {
    log_header "启动开发服务器"
    
    check_environment || exit 1
    
    if [ ! -d "node_modules" ]; then
        log_info "依赖未安装，正在安装..."
        install_dependencies
    fi
    
    log_info "启动 Next.js 开发服务器..."
    npm run dev
}

# 构建项目
build_project() {
    log_header "构建项目"
    
    check_environment || exit 1
    
    if [ ! -d "node_modules" ]; then
        log_info "依赖未安装，正在安装..."
        install_dependencies
    fi
    
    log_info "清理旧的构建文件..."
    rm -rf .next out
    
    log_info "构建 Next.js 项目..."
    npm run build
    
    if [ -d "out" ]; then
        FILES_COUNT=$(find out -type f | wc -l)
        log_success "构建完成！生成了 $FILES_COUNT 个文件"
        
        # 显示构建统计
        if command -v du &> /dev/null; then
            SIZE=$(du -sh out | cut -f1)
            log_info "构建大小: $SIZE"
        fi
    else
        log_error "构建失败"
        exit 1
    fi
}

# 预览构建结果
preview_build() {
    log_header "预览构建结果"
    
    if [ ! -d "out" ]; then
        log_info "未找到构建文件，正在构建..."
        build_project
    fi
    
    log_info "启动静态文件服务器..."
    
    # 使用 Python 或 Node.js 启动简单的静态服务器
    if command -v python3 &> /dev/null; then
        log_info "使用 Python3 启动服务器 (http://localhost:8000)"
        cd out && python3 -m http.server 8000
    elif command -v python &> /dev/null; then
        log_info "使用 Python 启动服务器 (http://localhost:8000)"
        cd out && python -m SimpleHTTPServer 8000
    elif command -v npx &> /dev/null; then
        log_info "使用 serve 启动服务器 (http://localhost:3000)"
        npx serve out
    else
        log_error "未找到可用的静态服务器"
        exit 1
    fi
}

# 运行代码检查
lint_code() {
    log_header "运行代码检查"
    
    check_environment || exit 1
    
    if [ ! -d "node_modules" ]; then
        install_dependencies
    fi
    
    if npm run lint; then
        log_success "代码检查通过"
    else
        log_error "代码检查失败"
        exit 1
    fi
}

# 清理项目
clean_project() {
    log_header "清理项目文件"
    
    log_info "清理构建文件..."
    rm -rf .next out
    
    log_info "清理依赖..."
    rm -rf node_modules
    
    log_info "清理 npm 缓存..."
    npm cache clean --force
    
    log_success "清理完成"
}

# 检查项目健康状态
check_health() {
    log_header "检查项目健康状态"
    
    check_environment || exit 1
    
    # 检查过时的依赖
    log_info "检查过时的依赖..."
    npm outdated || true
    
    # 检查安全漏洞
    log_info "检查安全漏洞..."
    npm audit || true
    
    # 检查 TypeScript 类型
    if [ -f "tsconfig.json" ]; then
        log_info "检查 TypeScript 类型..."
        npx tsc --noEmit || true
    fi
    
    log_success "健康检查完成"
}

# 部署到 GitHub Pages
deploy_site() {
    log_header "部署到 GitHub Pages"
    
    if [ -f "scripts/deploy-gh-pages.sh" ]; then
        ./scripts/deploy-gh-pages.sh
    else
        log_error "未找到部署脚本"
        exit 1
    fi
}

# 主逻辑
case "${1:-help}" in
    "dev")
        start_dev
        ;;
    "build")
        build_project
        ;;
    "preview")
        preview_build
        ;;
    "lint")
        lint_code
        ;;
    "clean")
        clean_project
        ;;
    "install")
        install_dependencies
        ;;
    "check")
        check_health
        ;;
    "deploy")
        deploy_site
        ;;
    "help"|*)
        show_help
        ;;
esac
