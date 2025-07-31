'use client'

import { ExternalLink, BookOpen, Video, Code, Users, Zap } from 'lucide-react'

interface Resource {
  id: string
  title: string
  description: string
  url: string
  category: 'official' | 'tutorial' | 'tool' | 'community' | 'practice'
  level: 'beginner' | 'intermediate' | 'advanced'
  type: 'documentation' | 'video' | 'tool' | 'course' | 'article'
  free: boolean
}

const resources: Resource[] = [
  {
    id: 'dotnet-docs',
    title: '.NET 官方文档',
    description: '微软官方的 .NET 文档，最权威的学习资源',
    url: 'https://learn.microsoft.com/en-us/dotnet/',
    category: 'official',
    level: 'beginner',
    type: 'documentation',
    free: true
  },
  {
    id: 'csharp-docs',
    title: 'C# 编程指南',
    description: 'C# 语言的官方编程指南和参考',
    url: 'https://learn.microsoft.com/en-us/dotnet/csharp/',
    category: 'official',
    level: 'beginner',
    type: 'documentation',
    free: true
  },
  {
    id: 'aspnet-core-docs',
    title: 'ASP.NET Core 文档',
    description: 'ASP.NET Core Web 开发的完整指南',
    url: 'https://learn.microsoft.com/en-us/aspnet/core/',
    category: 'official',
    level: 'intermediate',
    type: 'documentation',
    free: true
  },
  {
    id: 'ef-core-docs',
    title: 'Entity Framework Core 文档',
    description: '现代 .NET 数据访问技术的官方文档',
    url: 'https://learn.microsoft.com/en-us/ef/core/',
    category: 'official',
    level: 'intermediate',
    type: 'documentation',
    free: true
  },
  {
    id: 'dotnet-youtube',
    title: '.NET 官方 YouTube 频道',
    description: '官方视频教程、会议演讲和最新技术分享',
    url: 'https://www.youtube.com/c/dotNET',
    category: 'official',
    level: 'beginner',
    type: 'video',
    free: true
  },
  {
    id: 'pluralsight-csharp',
    title: 'Pluralsight C# 路径',
    description: '结构化的 C# 学习路径，适合系统性学习',
    url: 'https://www.pluralsight.com/paths/csharp',
    category: 'tutorial',
    level: 'beginner',
    type: 'course',
    free: false
  },
  {
    id: 'dotnet-fiddle',
    title: '.NET Fiddle',
    description: '在线 C# 代码运行环境，无需安装即可练习',
    url: 'https://dotnetfiddle.net/',
    category: 'tool',
    level: 'beginner',
    type: 'tool',
    free: true
  },
  {
    id: 'linqpad',
    title: 'LINQPad',
    description: 'C# 和 LINQ 查询的强大测试工具',
    url: 'https://www.linqpad.net/',
    category: 'tool',
    level: 'intermediate',
    type: 'tool',
    free: false
  },
  {
    id: 'vscode-csharp',
    title: 'VS Code C# 开发指南',
    description: '在 VS Code 中进行 C# 开发的完整设置指南',
    url: 'https://code.visualstudio.com/docs/languages/csharp',
    category: 'official',
    level: 'beginner',
    type: 'documentation',
    free: true
  },
  {
    id: 'github-dotnet',
    title: '.NET GitHub 仓库',
    description: '.NET 运行时和库的开源代码',
    url: 'https://github.com/dotnet/core',
    category: 'community',
    level: 'advanced',
    type: 'tool',
    free: true
  },
  {
    id: 'stackoverflow-csharp',
    title: 'Stack Overflow C# 标签',
    description: 'C# 相关问题的最大问答社区',
    url: 'https://stackoverflow.com/questions/tagged/c%23',
    category: 'community',
    level: 'beginner',
    type: 'article',
    free: true
  },
  {
    id: 'reddit-csharp',
    title: 'Reddit r/csharp',
    description: 'C# 开发者社区，讨论和分享最新动态',
    url: 'https://www.reddit.com/r/csharp/',
    category: 'community',
    level: 'beginner',
    type: 'article',
    free: true
  },
  {
    id: 'exercism-csharp',
    title: 'Exercism C# Track',
    description: '通过编程练习学习 C#，有导师指导',
    url: 'https://exercism.org/tracks/csharp',
    category: 'practice',
    level: 'beginner',
    type: 'course',
    free: true
  },
  {
    id: 'codewars-csharp',
    title: 'Codewars C# 题库',
    description: '通过解决编程挑战来提高 C# 技能',
    url: 'https://www.codewars.com/?language=csharp',
    category: 'practice',
    level: 'intermediate',
    type: 'course',
    free: true
  },
  {
    id: 'tim-corey',
    title: 'Tim Corey YouTube 频道',
    description: '高质量的 C# 和 .NET 教程视频',
    url: 'https://www.youtube.com/user/IAmTimCorey',
    category: 'tutorial',
    level: 'intermediate',
    type: 'video',
    free: true
  }
]

const categoryConfig = {
  official: { name: '官方资源', icon: <BookOpen className="w-4 h-4" />, color: 'bg-blue-100 text-blue-700' },
  tutorial: { name: '教程课程', icon: <Video className="w-4 h-4" />, color: 'bg-green-100 text-green-700' },
  tool: { name: '开发工具', icon: <Code className="w-4 h-4" />, color: 'bg-purple-100 text-purple-700' },
  community: { name: '社区资源', icon: <Users className="w-4 h-4" />, color: 'bg-orange-100 text-orange-700' },
  practice: { name: '练习平台', icon: <Zap className="w-4 h-4" />, color: 'bg-red-100 text-red-700' }
}

const levelConfig = {
  beginner: { name: '初学者', color: 'bg-green-100 text-green-700' },
  intermediate: { name: '中级', color: 'bg-yellow-100 text-yellow-700' },
  advanced: { name: '高级', color: 'bg-red-100 text-red-700' }
}

export default function LearningResources() {
  const categories = Object.keys(categoryConfig) as Array<keyof typeof categoryConfig>

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-secondary-900 mb-4">
          学习资源库
        </h2>
        <p className="text-lg text-secondary-600">
          精选的 C#/.NET 学习资源，助您深入掌握技术栈
        </p>
      </div>

      {categories.map(categoryKey => {
        const categoryResources = resources.filter(resource => resource.category === categoryKey)
        const category = categoryConfig[categoryKey]
        
        return (
          <div key={categoryKey} className="mb-12">
            <div className="flex items-center mb-6">
              <div className={`p-2 rounded-lg ${category.color} mr-3`}>
                {category.icon}
              </div>
              <h3 className="text-2xl font-semibold text-secondary-900">
                {category.name}
              </h3>
              <span className="ml-3 text-sm text-secondary-500">
                ({categoryResources.length} 个资源)
              </span>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryResources.map(resource => (
                <div key={resource.id} className="bg-white rounded-lg border border-secondary-200 p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-semibold text-secondary-900 pr-2">
                      {resource.title}
                    </h4>
                    <div className="flex items-center gap-2">
                      {resource.free ? (
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                          免费
                        </span>
                      ) : (
                        <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full">
                          付费
                        </span>
                      )}
                      <span className={`text-xs px-2 py-1 rounded-full ${levelConfig[resource.level].color}`}>
                        {levelConfig[resource.level].name}
                      </span>
                    </div>
                  </div>

                  <p className="text-secondary-600 text-sm mb-4 leading-relaxed">
                    {resource.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-secondary-500 capitalize">
                      {resource.type}
                    </span>
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm rounded-lg transition-colors"
                    >
                      访问
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      })}

      {/* 学习建议 */}
      <div className="mt-12 bg-primary-50 rounded-lg p-8">
        <h3 className="text-xl font-semibold text-primary-900 mb-4">
          💡 学习建议
        </h3>
        <div className="grid md:grid-cols-2 gap-6 text-primary-800">
          <div>
            <h4 className="font-medium mb-2">对于初学者：</h4>
            <ul className="text-sm space-y-1 list-disc list-inside">
              <li>从官方文档开始，建立扎实的基础</li>
              <li>使用 .NET Fiddle 进行在线练习</li>
              <li>观看 .NET 官方 YouTube 频道的入门视频</li>
              <li>在 Exercism 上完成编程练习</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">对于有经验的开发者：</h4>
            <ul className="text-sm space-y-1 list-disc list-inside">
              <li>深入研究 ASP.NET Core 和 EF Core 文档</li>
              <li>参与 GitHub 上的开源项目</li>
              <li>关注社区动态，了解最新技术趋势</li>
              <li>使用 LINQPad 进行高级查询练习</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
