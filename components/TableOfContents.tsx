'use client'

import { useState } from 'react'
import { ChevronRight, ChevronDown, Clock, Users, Target } from 'lucide-react'

interface Section {
  id: string
  title: string
  duration: string
  subsections?: {
    id: string
    title: string
  }[]
}

const sections: Section[] = [
  {
    id: 'part1',
    title: '第一部分: macOS上的现代C#开发环境',
    duration: '1周',
    subsections: [
      { id: '1.1', title: 'Visual Studio for Mac的退役解读' },
      { id: '1.2', title: 'Visual Studio Code与C# Dev Kit' },
      { id: '1.3', title: 'macOS开发环境完整搭建指南' },
      { id: '1.4', title: '实践演练：创建第一个.NET项目' },
      { id: '1.5', title: 'macOS是现代.NET开发的一等公民平台' }
    ]
  },
  {
    id: 'part2',
    title: '第二部分: 为资深Java开发者量身定制的C#/.NET课程',
    duration: '2-3周',
    subsections: [
      { id: 'intro', title: '技术栈转换矩阵 (Java/Spring 到 C#/.NET)' },
      { id: 'module1', title: '模块一：精通C#语言——超越Java的语法边界' },
      { id: 'module2', title: '模块二：使用ASP.NET Core构建Web API' },
      { id: 'module3', title: '模块三：Entity Framework Core与PostgreSQL' },
      { id: 'module4', title: '模块四：实现项目中的核心模式' }
    ]
  },
  {
    id: 'part3',
    title: '第三部分: 战略路线图与建议',
    duration: '持续',
    subsections: [
      { id: '5.1', title: '四周贡献计划' },
      { id: '5.2', title: '成功转型的最终核对清单' }
    ]
  }
]

export default function TableOfContents() {
  const [expandedSections, setExpandedSections] = useState<string[]>(['part1'])

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    )
  }

  return (
    <section id="table-of-contents" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* 标题部分 */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              课程目录
            </h2>
            <p className="text-lg text-secondary-600">
              系统性的学习路径，从环境搭建到实际项目贡献
            </p>
          </div>

          {/* 课程统计 */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-primary-50 p-6 rounded-xl text-center">
              <Clock className="w-8 h-8 text-primary-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-primary-700 mb-1">4周</div>
              <div className="text-sm text-primary-600">完整学习周期</div>
            </div>
            <div className="bg-green-50 p-6 rounded-xl text-center">
              <Target className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-green-700 mb-1">3大模块</div>
              <div className="text-sm text-green-600">核心技术领域</div>
            </div>
            <div className="bg-purple-50 p-6 rounded-xl text-center">
              <Users className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-purple-700 mb-1">Java开发者</div>
              <div className="text-sm text-purple-600">目标学习群体</div>
            </div>
          </div>

          {/* 目录列表 */}
          <div className="space-y-4">
            {sections.map((section) => (
              <div key={section.id} className="border border-secondary-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full p-6 text-left hover:bg-secondary-50 transition-colors flex items-center justify-between"
                >
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                      {section.title}
                    </h3>
                    <span className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                      {section.duration}
                    </span>
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    {expandedSections.includes(section.id) ? (
                      <ChevronDown className="w-5 h-5 text-secondary-400" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-secondary-400" />
                    )}
                  </div>
                </button>
                
                {expandedSections.includes(section.id) && section.subsections && (
                  <div className="border-t border-secondary-200 bg-secondary-50">
                    <div className="p-6 space-y-3">
                      {section.subsections.map((subsection) => (
                        <a
                          key={subsection.id}
                          href={`#${subsection.id}`}
                          className="block p-3 rounded-lg hover:bg-white transition-colors group"
                        >
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-primary-400 rounded-full mr-3 group-hover:bg-primary-600"></div>
                            <span className="text-secondary-700 group-hover:text-secondary-900">
                              {subsection.title}
                            </span>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
