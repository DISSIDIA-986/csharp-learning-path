import { Github, Heart, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-secondary-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* 关于部分 */}
            <div>
              <h3 className="text-lg font-semibold mb-4">关于本课程</h3>
              <p className="text-secondary-300 text-sm leading-relaxed">
                这份学习指南专为有经验的Java开发者设计，帮助您快速掌握C#/.NET技术栈，
                并在新的项目中快速上手贡献代码。
              </p>
            </div>
            
            {/* 快速链接 */}
            <div>
              <h3 className="text-lg font-semibold mb-4">快速链接</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#table-of-contents" className="text-secondary-300 hover:text-white transition-colors">
                    课程目录
                  </a>
                </li>
                <li>
                  <a href="#course-content" className="text-secondary-300 hover:text-white transition-colors">
                    开始学习
                  </a>
                </li>
                <li>
                  <a href="/setup" className="text-secondary-300 hover:text-white transition-colors">
                    环境搭建指南
                  </a>
                </li>
                <li>
                              <a href="/examples" className="text-secondary-600 hover:text-primary-600 transition-colors">
              代码示例库
            </a>
            <a href="/resources" className="text-secondary-600 hover:text-primary-600 transition-colors">
              学习资源库
            </a>
            <a href="/projects" className="text-secondary-600 hover:text-primary-600 transition-colors">
              项目展示
            </a>
                </li>
                <li>
                  <a href="/troubleshooting" className="text-secondary-300 hover:text-white transition-colors">
                    故障排除
                  </a>
                </li>
                <li>
                  <a href="https://learn.microsoft.com/en-us/dotnet/" target="_blank" rel="noopener noreferrer" className="text-secondary-300 hover:text-white transition-colors">
                    .NET 官方文档
                  </a>
                </li>
                <li>
                  <a href="https://code.visualstudio.com/docs/csharp/get-started" target="_blank" rel="noopener noreferrer" className="text-secondary-300 hover:text-white transition-colors">
                    VS Code C# 入门
                  </a>
                </li>
              </ul>
            </div>
            
            {/* 联系信息 */}
            <div>
              <h3 className="text-lg font-semibold mb-4">联系我们</h3>
              <div className="space-y-3">
                <a 
                  href="https://github.com/DISSIDIA-986/csharp-learning-path" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-secondary-300 hover:text-white transition-colors text-sm"
                >
                  <Github className="w-4 h-4 mr-2" />
                  项目仓库
                </a>
                <a 
                  href="mailto:contact@example.com"
                  className="flex items-center text-secondary-300 hover:text-white transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  联系邮箱
                </a>
              </div>
            </div>
          </div>
          
          {/* 底部版权 */}
          <div className="border-t border-secondary-700 pt-8 text-center">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-secondary-400 text-sm mb-4 md:mb-0">
                © 2025 C# Learning Path. 专为Java开发者设计的.NET学习指南.
              </p>
              <div className="flex items-center text-secondary-400 text-sm">
                Made with <Heart className="w-4 h-4 mx-1 text-red-400" /> for developers
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
