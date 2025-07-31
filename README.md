# 从Java到C#: 资深开发者的.NET学习蓝图

这是一个为有经验的Java开发者设计的C#/.NET学习课程网站，提供系统性的学习路径和实践指导。

## 🎯 项目特色

- 📚 **系统化学习路径**：4周完整的学习计划，从基础语法到项目实战
- 💻 **macOS原生支持**：专为MacBook Pro用户优化的开发环境配置
- 🛠️ **实践导向**：基于智能楼宇管理系统的真实项目场景
- 🎨 **现代化界面**：使用Next.js + TailwindCSS构建的响应式网站
- 📖 **丰富资源**：包含代码示例、学习资源、项目展示等完整内容

## 🚀 快速开始

### 前置要求

- Node.js 18+ 
- npm 或 yarn

### 安装依赖

```bash
npm install
# 或
yarn install
```

### 启动开发服务器

```bash
npm run dev
# 或
yarn dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看网站。

## 📁 项目结构

```
csharp-learning-path/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions自动部署
├── app/                        # Next.js 13+ App Router
│   ├── examples/              # 代码示例页面
│   ├── projects/              # 项目展示页面
│   ├── resources/             # 学习资源页面
│   ├── setup/                 # 环境设置页面
│   ├── troubleshooting/       # 故障排除页面
│   ├── layout.tsx             # 根布局
│   └── page.tsx               # 主页
├── components/                 # React组件
│   ├── CodeExamples.tsx       # 代码示例组件
│   ├── CourseContent.tsx      # 课程内容组件
│   ├── Footer.tsx             # 页脚组件
│   ├── Hero.tsx               # 英雄区域组件
│   ├── LearningResources.tsx  # 学习资源组件
│   ├── ProjectShowcase.tsx    # 项目展示组件
│   ├── SetupGuide.tsx         # 设置指南组件
│   ├── TableOfContents.tsx    # 目录组件
│   └── TroubleshootingGuide.tsx # 故障排除组件
├── docs/                       # 文档
│   └── csharp_course_plan.md  # 原始课程计划
├── scripts/                    # 脚本
│   ├── deploy-gh-pages.sh     # GitHub Pages部署脚本
│   └── README.md              # 脚本使用说明
├── package.json               # 项目配置
├── next.config.js             # Next.js配置
├── tailwind.config.js         # TailwindCSS配置
└── tsconfig.json              # TypeScript配置
```

## 🛠 技术栈

- **Next.js 14** - React 全栈框架
- **TypeScript** - 类型安全
- **TailwindCSS** - 实用优先的CSS框架
- **Lucide React** - 图标库

## 📚 课程内容

这个网站展示了一个完整的C#/.NET学习课程，包括：

### 第一部分：macOS开发环境
- Visual Studio for Mac 退役解读
- VS Code + C# Dev Kit 工具链
- **完整的环境搭建指南** - 包括 .NET SDK、VS Code 扩展、数据库等
- **实践演练** - 创建第一个 .NET 项目
- **故障排除指南** - 常见问题和解决方案

### 第二部分：核心技术学习
- Java到C#的技术栈转换矩阵
- C#语言特性（属性、LINQ、async/await）
- ASP.NET Core Web API开发
- Entity Framework Core 数据访问

### 第三部分：实践指南
- 四周学习计划
- 成功转型清单

## 🎨 设计特色

- **响应式设计**，适配各种设备
- **现代化的UI设计**，使用TailwindCSS
- **交互式环境搭建指南** - 带进度跟踪的分步指南
- **可折叠的内容区域**，便于浏览
- **语法高亮的代码示例**
- **平滑的动画和交互效果**
- **分类筛选的故障排除指南**

## 🌟 新增功能

### 环境搭建指南 (`/setup`)
- 分步骤的交互式安装指南
- 进度跟踪
- 终端命令展示
- 完成状态管理

### 故障排除页面 (`/troubleshooting`)
- 按分类和难度筛选的FAQ
- 常见问题解答
- 详细的解决方案
- 针对macOS的特殊说明

## 🚀 部署

### 构建项目

```bash
npm run build
```

### 本地预览构建结果

```bash
npm run start
```

### Vercel 部署 (推荐)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/DISSIDIA-986/csharp-learning-path)

## 🧪 开发指南

### 添加新的课程内容

1. 编辑 `components/CourseContent.tsx` 中的 `courseData` 对象
2. 在 `components/TableOfContents.tsx` 中更新目录结构
3. 重启开发服务器查看更改

### 添加新的故障排除项目

编辑 `components/TroubleshootingGuide.tsx` 中的 `faqItems` 数组。

### 自定义样式

主要样式在 `app/globals.css` 中定义，使用 TailwindCSS 的 `@apply` 指令。

## 📄 许可证

MIT License - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

特别欢迎：
- 改进课程内容
- 添加更多故障排除案例
- 优化用户体验
- 修复 bug

## 📞 联系

- GitHub: [DISSIDIA-986](https://github.com/DISSIDIA-986)
- 项目链接: [https://github.com/DISSIDIA-986/csharp-learning-path](https://github.com/DISSIDIA-986/csharp-learning-path)
