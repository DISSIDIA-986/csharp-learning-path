'use client'

import { useState } from 'react'
import { CheckCircle, Circle, Terminal, Download, Code, Database, Settings } from 'lucide-react'

interface Step {
  id: string
  title: string
  description: string
  commands?: string[]
  completed: boolean
  icon: React.ReactNode
}

export default function SetupGuide() {
  const [steps, setSteps] = useState<Step[]>([
    {
      id: 'homebrew',
      title: '验证 Homebrew 安装',
      description: '确保您的Mac上已安装包管理器 Homebrew',
      commands: ['brew --version'],
      completed: false,
      icon: <Terminal className="w-5 h-5" />
    },
    {
      id: 'dotnet-sdk',
      title: '安装 .NET SDK',
      description: '通过 Homebrew 安装最新的 .NET SDK',
      commands: ['brew install dotnet', 'dotnet --version'],
      completed: false,
      icon: <Download className="w-5 h-5" />
    },
    {
      id: 'vscode-extensions',
      title: '安装 VS Code 扩展',
      description: '在 VS Code 中安装 C# 开发必需的扩展',
      completed: false,
      icon: <Code className="w-5 h-5" />
    },
    {
      id: 'docker',
      title: '安装 Docker Desktop',
      description: '为数据库开发准备容器化环境',
      commands: ['brew install --cask docker'],
      completed: false,
      icon: <Database className="w-5 h-5" />
    },
    {
      id: 'database-tools',
      title: '安装数据库管理工具',
      description: '安装 Azure Data Studio 用于数据库管理',
      commands: ['brew install --cask azure-data-studio'],
      completed: false,
      icon: <Settings className="w-5 h-5" />
    },
    {
      id: 'first-project',
      title: '创建第一个项目',
      description: '验证环境搭建是否成功',
      commands: [
        'mkdir MyFirstDotNetApp',
        'cd MyFirstDotNetApp',
        'dotnet new webapi -n MyFirstApi',
        'cd MyFirstApi',
        'code .',
        'dotnet run'
      ],
      completed: false,
      icon: <Code className="w-5 h-5" />
    }
  ])

  const toggleStep = (stepId: string) => {
    setSteps(prevSteps => 
      prevSteps.map(step => 
        step.id === stepId ? { ...step, completed: !step.completed } : step
      )
    )
  }

  const completedSteps = steps.filter(step => step.completed).length
  const progress = (completedSteps / steps.length) * 100

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* 进度条 */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-2xl font-bold text-secondary-900">macOS 开发环境搭建</h2>
          <span className="text-sm text-secondary-600">
            {completedSteps}/{steps.length} 完成
          </span>
        </div>
        <div className="w-full bg-secondary-200 rounded-full h-2">
          <div 
            className="bg-primary-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* 步骤列表 */}
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={step.id} className="border border-secondary-200 rounded-lg overflow-hidden">
            <div 
              className={`p-6 ${step.completed ? 'bg-green-50' : 'bg-white'} transition-colors`}
            >
              <div className="flex items-start">
                {/* 步骤序号和图标 */}
                <div className="flex-shrink-0 mr-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    step.completed ? 'bg-green-100 text-green-600' : 'bg-secondary-100 text-secondary-600'
                  }`}>
                    {step.icon}
                  </div>
                </div>

                {/* 步骤内容 */}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-secondary-900">
                      步骤 {index + 1}: {step.title}
                    </h3>
                    <button
                      onClick={() => toggleStep(step.id)}
                      className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                        step.completed 
                          ? 'bg-green-100 text-green-700 hover:bg-green-200' 
                          : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
                      }`}
                    >
                      {step.completed ? (
                        <>
                          <CheckCircle className="w-4 h-4" />
                          已完成
                        </>
                      ) : (
                        <>
                          <Circle className="w-4 h-4" />
                          标记完成
                        </>
                      )}
                    </button>
                  </div>
                  
                  <p className="text-secondary-600 mb-4">
                    {step.description}
                  </p>

                  {/* 命令展示 */}
                  {step.commands && (
                    <div className="bg-secondary-900 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <Terminal className="w-4 h-4 text-secondary-400 mr-2" />
                        <span className="text-secondary-400 text-sm">终端命令</span>
                      </div>
                      <div className="space-y-2">
                        {step.commands.map((command, cmdIndex) => (
                          <div key={cmdIndex} className="flex items-center">
                            <span className="text-secondary-500 text-sm mr-2">$</span>
                            <code className="text-secondary-100 font-mono text-sm">{command}</code>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* VS Code 扩展特殊说明 */}
                  {step.id === 'vscode-extensions' && (
                    <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-medium text-blue-900 mb-2">必需扩展列表：</h4>
                      <ul className="text-sm text-blue-800 space-y-1">
                        <li>• <strong>C# Dev Kit</strong> (Microsoft) - 核心开发工具包</li>
                        <li>• <strong>REST Client</strong> (Humao) - API测试工具</li>
                        <li>• <strong>NuGet Gallery</strong> (pcislo) - 包管理器界面</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 完成提示 */}
      {completedSteps === steps.length && (
        <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center mb-3">
            <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
            <h3 className="text-lg font-semibold text-green-900">
              🎉 恭喜！环境搭建完成
            </h3>
          </div>
          <p className="text-green-800 mb-4">
            您的 macOS C# 开发环境已经完全准备就绪。现在可以开始学习 C#/.NET 的核心概念了！
          </p>
          <div className="space-y-2 text-sm text-green-700">
            <p>✅ .NET SDK 已安装并可用</p>
            <p>✅ VS Code 开发环境已配置</p>
            <p>✅ 数据库开发工具已准备</p>
            <p>✅ 第一个项目创建成功</p>
          </div>
        </div>
      )}
    </div>
  )
}
