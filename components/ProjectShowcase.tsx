'use client'

import { useState } from 'react'
import { Github, ExternalLink, Star, GitFork, Calendar, User, Code, Database, Server, Globe } from 'lucide-react'

interface Project {
  id: string
  title: string
  description: string
  detailedDescription: string
  image: string
  technologies: string[]
  category: 'web-api' | 'desktop' | 'web-app' | 'microservice' | 'game' | 'tool'
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  githubUrl?: string
  liveUrl?: string
  featured: boolean
  learningGoals: string[]
  keyFeatures: string[]
}

const projects: Project[] = [
  {
    id: 'building-management-api',
    title: '智能楼宇管理系统 API',
    description: '基于 ASP.NET Core 的 RESTful API，管理楼宇设备、租户和维护工单',
    detailedDescription: '这是一个企业级的智能楼宇管理系统后端 API，演示了现代 .NET 开发的最佳实践。系统包含设备监控、租户管理、工单系统、报表生成等功能模块。',
    image: '/api/placeholder/400/250',
    technologies: ['ASP.NET Core 8', 'Entity Framework Core', 'SQL Server', 'JWT', 'Swagger', 'Docker'],
    category: 'web-api',
    difficulty: 'intermediate',
    githubUrl: 'https://github.com/example/building-management-api',
    featured: true,
    learningGoals: [
      '掌握 ASP.NET Core Web API 开发',
      '学习 Entity Framework Core ORM 使用',
      '实现 JWT 身份验证和授权',
      '理解 RESTful API 设计原则',
      '掌握数据库迁移和种子数据'
    ],
    keyFeatures: [
      '完整的 CRUD 操作',
      'JWT 身份验证',
      '分页和过滤',
      'Swagger API 文档',
      '数据验证和错误处理',
      'Docker 容器化部署'
    ]
  },
  {
    id: 'ecommerce-blazor',
    title: '电商管理系统',
    description: '使用 Blazor Server 构建的电商后台管理系统，包含商品、订单、用户管理',
    detailedDescription: '基于 Blazor Server 技术构建的全功能电商后台管理系统，展示了如何使用 C# 进行全栈开发。系统采用模块化设计，支持实时数据更新。',
    image: '/api/placeholder/400/250',
    technologies: ['Blazor Server', 'Entity Framework Core', 'Bootstrap', 'SignalR', 'Azure SQL'],
    category: 'web-app',
    difficulty: 'intermediate',
    githubUrl: 'https://github.com/example/ecommerce-blazor',
    liveUrl: 'https://ecommerce-demo.azurewebsites.net',
    featured: true,
    learningGoals: [
      '学习 Blazor Server 开发模式',
      '掌握组件化开发思维',
      '实现实时数据同步',
      '学习状态管理模式',
      '掌握 Azure 部署流程'
    ],
    keyFeatures: [
      '实时数据更新',
      '响应式设计',
      '角色权限管理',
      '数据导出功能',
      '图表统计面板',
      'Azure 云部署'
    ]
  },
  {
    id: 'task-manager-wpf',
    title: '任务管理器桌面应用',
    description: '基于 WPF 和 MVVM 模式的任务管理桌面应用，支持项目分组和时间追踪',
    detailedDescription: '这是一个功能完整的任务管理桌面应用，展示了 WPF 的强大功能和 MVVM 架构模式。应用支持任务分类、时间追踪、数据导出等高级功能。',
    image: '/api/placeholder/400/250',
    technologies: ['WPF', 'MVVM', 'Entity Framework Core', 'SQLite', 'Prism', 'MaterialDesignInXaml'],
    category: 'desktop',
    difficulty: 'advanced',
    githubUrl: 'https://github.com/example/task-manager-wpf',
    featured: false,
    learningGoals: [
      '掌握 WPF 桌面应用开发',
      '理解 MVVM 架构模式',
      '学习数据绑定和命令模式',
      '掌握依赖注入在桌面应用中的使用',
      '学习用户体验设计'
    ],
    keyFeatures: [
      'MVVM 架构',
      '数据绑定',
      '自定义控件',
      '主题切换',
      '数据导出',
      '键盘快捷键'
    ]
  },
  {
    id: 'microservice-demo',
    title: '微服务架构演示',
    description: '基于 .NET 的微服务架构示例，包含 API Gateway、服务发现和分布式追踪',
    detailedDescription: '这个项目展示了如何使用 .NET 构建现代微服务架构。包含多个独立服务、API 网关、服务注册与发现、分布式追踪等企业级功能。',
    image: '/api/placeholder/400/250',
    technologies: ['ASP.NET Core', 'Docker', 'Kubernetes', 'Consul', 'Ocelot', 'Serilog', 'Prometheus'],
    category: 'microservice',
    difficulty: 'advanced',
    githubUrl: 'https://github.com/example/microservice-demo',
    featured: true,
    learningGoals: [
      '理解微服务架构设计',
      '学习服务间通信模式',
      '掌握容器化部署',
      '学习分布式系统监控',
      '掌握 API 网关模式'
    ],
    keyFeatures: [
      '服务拆分设计',
      'API Gateway',
      '服务发现',
      '分布式追踪',
      '健康检查',
      'Kubernetes 部署'
    ]
  },
  {
    id: 'game-engine',
    title: '2D 游戏引擎',
    description: '使用 C# 和 MonoGame 框架开发的 2D 游戏引擎，支持精灵动画和物理系统',
    detailedDescription: '基于 MonoGame 框架的 2D 游戏引擎，展示了 C# 在游戏开发领域的应用。引擎包含场景管理、精灵系统、物理引擎、音效系统等核心功能。',
    image: '/api/placeholder/400/250',
    technologies: ['MonoGame', 'C#', '2D Graphics', 'Physics Engine', 'Audio System'],
    category: 'game',
    difficulty: 'advanced',
    githubUrl: 'https://github.com/example/2d-game-engine',
    featured: false,
    learningGoals: [
      '学习游戏引擎架构',
      '掌握 2D 图形编程',
      '理解游戏循环机制',
      '学习物理引擎集成',
      '掌握性能优化技巧'
    ],
    keyFeatures: [
      '场景管理系统',
      '精灵动画',
      '物理引擎',
      '音效系统',
      '资源管理',
      '跨平台支持'
    ]
  },
  {
    id: 'data-analyzer',
    title: '数据分析工具',
    description: '基于 C# 的数据分析和可视化工具，支持 CSV、Excel 文件处理和图表生成',
    detailedDescription: '这是一个功能强大的数据分析工具，展示了 C# 在数据处理领域的能力。工具支持多种数据格式导入、数据清洗、统计分析和可视化展示。',
    image: '/api/placeholder/400/250',
    technologies: ['C#', 'ClosedXML', 'OxyPlot', 'CsvHelper', 'Newtonsoft.Json', 'WinForms'],
    category: 'tool',
    difficulty: 'intermediate',
    githubUrl: 'https://github.com/example/data-analyzer',
    featured: false,
    learningGoals: [
      '学习文件处理和数据解析',
      '掌握数据可视化技术',
      '理解统计算法实现',
      '学习大数据量处理',
      '掌握报表生成技术'
    ],
    keyFeatures: [
      '多格式数据导入',
      '数据清洗工具',
      '统计分析功能',
      '图表可视化',
      '报表导出',
      '批量处理'
    ]
  }
]

const categoryConfig = {
  'web-api': { name: 'Web API', icon: <Server className="w-4 h-4" />, color: 'bg-blue-100 text-blue-700' },
  'web-app': { name: 'Web 应用', icon: <Globe className="w-4 h-4" />, color: 'bg-green-100 text-green-700' },
  'desktop': { name: '桌面应用', icon: <Code className="w-4 h-4" />, color: 'bg-purple-100 text-purple-700' },
  'microservice': { name: '微服务', icon: <Database className="w-4 h-4" />, color: 'bg-orange-100 text-orange-700' },
  'game': { name: '游戏开发', icon: <Star className="w-4 h-4" />, color: 'bg-pink-100 text-pink-700' },
  'tool': { name: '工具软件', icon: <User className="w-4 h-4" />, color: 'bg-gray-100 text-gray-700' }
}

const difficultyConfig = {
  beginner: { name: '初级', color: 'bg-green-100 text-green-700' },
  intermediate: { name: '中级', color: 'bg-yellow-100 text-yellow-700' },
  advanced: { name: '高级', color: 'bg-red-100 text-red-700' }
}

export default function ProjectShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  const featuredProjects = projects.filter(project => project.featured)

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* 标题区域 */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-secondary-900 mb-4">
          项目展示
        </h2>
        <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
          通过真实项目学习 C#/.NET 开发，每个项目都包含完整的源代码、详细说明和学习指导
        </p>
      </div>

      {/* 精选项目 */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-secondary-900 mb-6">
          🌟 精选项目
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map(project => {
            const category = categoryConfig[project.category]
            const difficulty = difficultyConfig[project.difficulty]
            
            return (
              <div 
                key={project.id} 
                className="bg-white rounded-lg border border-secondary-200 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="h-48 bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                  <div className="text-6xl">{category.icon}</div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs px-2 py-1 rounded-full ${category.color}`}>
                      {category.name}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded-full ${difficulty.color}`}>
                      {difficulty.name}
                    </span>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-secondary-900 mb-2">
                    {project.title}
                  </h4>
                  
                  <p className="text-secondary-600 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map(tech => (
                      <span key={tech} className="text-xs bg-secondary-100 text-secondary-700 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs text-secondary-500">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                      查看详情
                    </button>
                    <div className="flex gap-2">
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-secondary-500 hover:text-secondary-700"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-secondary-500 hover:text-secondary-700"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* 分类过滤 */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-secondary-900 mb-6">
          所有项目
        </h3>
        <div className="flex flex-wrap gap-3 mb-6">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedCategory === 'all'
                ? 'bg-primary-600 text-white'
                : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
            }`}
          >
            全部
          </button>
          {Object.entries(categoryConfig).map(([key, config]) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 ${
                selectedCategory === key
                  ? 'bg-primary-600 text-white'
                  : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
              }`}
            >
              {config.icon}
              {config.name}
            </button>
          ))}
        </div>
      </div>

      {/* 项目网格 */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map(project => {
          const category = categoryConfig[project.category]
          const difficulty = difficultyConfig[project.difficulty]
          
          return (
            <div 
              key={project.id} 
              className="bg-white rounded-lg border border-secondary-200 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="h-48 bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                <div className="text-6xl">{category.icon}</div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs px-2 py-1 rounded-full ${category.color}`}>
                    {category.name}
                  </span>
                  <span className={`text-xs px-2 py-1 rounded-full ${difficulty.color}`}>
                    {difficulty.name}
                  </span>
                </div>
                
                <h4 className="text-lg font-semibold text-secondary-900 mb-2">
                  {project.title}
                </h4>
                
                <p className="text-secondary-600 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map(tech => (
                    <span key={tech} className="text-xs bg-secondary-100 text-secondary-700 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs text-secondary-500">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                
                <div className="flex items-center justify-between">
                  <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                    查看详情
                  </button>
                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-secondary-500 hover:text-secondary-700"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-secondary-500 hover:text-secondary-700"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* 项目详情弹窗 */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-secondary-900 mb-2">
                    {selectedProject.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className={`text-sm px-3 py-1 rounded-full ${categoryConfig[selectedProject.category].color}`}>
                      {categoryConfig[selectedProject.category].name}
                    </span>
                    <span className={`text-sm px-3 py-1 rounded-full ${difficultyConfig[selectedProject.difficulty].color}`}>
                      {difficultyConfig[selectedProject.difficulty].name}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-secondary-500 hover:text-secondary-700 text-2xl"
                >
                  ×
                </button>
              </div>

              <p className="text-secondary-600 mb-6 leading-relaxed">
                {selectedProject.detailedDescription}
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-secondary-900 mb-3">学习目标</h4>
                  <ul className="space-y-2">
                    {selectedProject.learningGoals.map((goal, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-secondary-600">
                        <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0"></span>
                        {goal}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-secondary-900 mb-3">核心功能</h4>
                  <ul className="space-y-2">
                    {selectedProject.keyFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-secondary-600">
                        <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-secondary-900 mb-3">技术栈</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map(tech => (
                    <span key={tech} className="bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-secondary-900 text-white px-6 py-3 rounded-lg hover:bg-secondary-800 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    查看源码
                  </a>
                )}
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    在线演示
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
