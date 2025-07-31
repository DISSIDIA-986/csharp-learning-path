# 部署脚本使用指南

## 📦 GitHub Pages 部署

### 自动部署脚本

项目包含一个自动化部署脚本 `scripts/deploy-gh-pages.sh`，可以一键将网站部署到 GitHub Pages。

### 使用方法

1. **确保所有更改已提交**
   ```bash
   git add .
   git commit -m "Update course content"
   git push origin main
   ```

2. **运行部署脚本**
   ```bash
   npm run deploy
   # 或者直接运行
   ./scripts/deploy-gh-pages.sh
   ```

3. **在 GitHub 上启用 Pages**
   - 前往仓库的 Settings > Pages
   - Source 选择 "Deploy from a branch"
   - Branch 选择 "gh-pages"
   - 点击 Save

### 脚本功能

部署脚本会自动完成以下操作：

- ✅ 检查未提交的更改
- ✅ 切换到 main 分支并拉取最新代码
- ✅ 安装项目依赖
- ✅ 构建 Next.js 项目（静态导出）
- ✅ 创建或切换到 gh-pages 分支
- ✅ 复制构建文件到分支根目录
- ✅ 添加 .nojekyll 文件
- ✅ 提交并推送到 GitHub
- ✅ 切换回 main 分支

### 注意事项

1. **首次部署**：脚本会自动创建 `gh-pages` 分支
2. **后续部署**：会覆盖 `gh-pages` 分支的内容
3. **域名配置**：如需自定义域名，可在脚本中取消注释 CNAME 相关行
4. **子路径部署**：如果仓库名不是用户名，需要在 `next.config.js` 中配置 `basePath`

### 本地测试

在部署前，建议先本地测试构建：

```bash
# 构建项目
npm run build

# 预览构建结果
npm run start
```

### 故障排除

1. **构建失败**：检查代码是否有语法错误
2. **推送失败**：确保有仓库写入权限
3. **页面不显示**：检查 GitHub Pages 设置是否正确
4. **路径问题**：检查 `next.config.js` 中的路径配置

### 手动部署

如果自动脚本遇到问题，也可以手动部署：

```bash
# 1. 构建项目
npm run build

# 2. 切换到 gh-pages 分支
git checkout gh-pages

# 3. 复制 out 目录内容到根目录
cp -r out/* .

# 4. 提交并推送
git add .
git commit -m "Deploy website"
git push origin gh-pages

# 5. 切换回 main 分支
git checkout main
```

## 🚀 其他部署选项

### Vercel 部署

1. 连接 GitHub 仓库到 Vercel
2. 自动部署，支持预览和生产环境

### Netlify 部署

1. 连接 GitHub 仓库到 Netlify
2. 设置构建命令：`npm run build`
3. 设置发布目录：`out`

---

**提示**：建议使用 GitHub Actions 进行自动化 CI/CD 部署，可以在每次推送到 main 分支时自动部署网站。
