'use client'

import { BookOpen, Code, Laptop, ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* 主标题 */}
          <h1 className="text-4xl md:text-6xl font-bold text-secondary-900 mb-6 leading-tight">
            从Java到
            <span className="text-primary-600 bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">
              C#
            </span>
          </h1>
          
          {/* 副标题 */}
          <p className="text-xl md:text-2xl text-secondary-600 mb-8 leading-relaxed">
            为资深开发者量身定制的.NET后端学习蓝图与实践指南
          </p>
          
          {/* 描述 */}
          <p className="text-lg text-secondary-500 mb-12 max-w-3xl mx-auto">
            利用您的Java经验，快速掌握C#/.NET生态系统。从macOS开发环境搭建到ASP.NET Core Web API，
            从Entity Framework到现代异步编程模式，这份指南将助您平稳过渡到.NET世界。
          </p>
          
          {/* 特色功能 */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Laptop className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="font-semibold text-secondary-900 mb-2">macOS原生支持</h3>
              <p className="text-secondary-600 text-sm">
                无需切换到Windows，在您熟悉的MacBook Pro上进行专业C#开发
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Code className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="font-semibold text-secondary-900 mb-2">实践导向</h3>
              <p className="text-secondary-600 text-sm">
                基于真实项目场景，从智能楼宇管理系统学习.NET最佳实践
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <BookOpen className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="font-semibold text-secondary-900 mb-2">系统性学习</h3>
              <p className="text-secondary-600 text-sm">
                从语言特性到框架应用，四周计划助您快速上手并贡献代码
              </p>
            </div>
          </div>
          
          {/* CTA按钮 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#course-content"
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              开始学习
              <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="/setup"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              环境搭建指南
              <Laptop className="w-4 h-4" />
            </a>
            <a 
              href="/examples"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              代码示例
              <Code className="w-4 h-4" />
            </a>
            <a 
              href="#table-of-contents"
              className="border border-secondary-300 hover:border-secondary-400 text-secondary-700 px-8 py-4 rounded-lg font-medium transition-colors"
            >
              查看目录
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
