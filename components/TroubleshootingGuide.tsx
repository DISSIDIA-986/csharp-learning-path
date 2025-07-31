'use client'

import { useState } from 'react'
import { ChevronDown, ChevronRight, AlertTriangle, CheckCircle, Info } from 'lucide-react'

interface FAQItem {
  id: string
  question: string
  answer: string
  category: 'environment' | 'vscode' | 'dotnet' | 'database'
  level: 'beginner' | 'intermediate' | 'advanced'
}

const faqItems: FAQItem[] = [
  {
    id: 'dotnet-version',
    question: '我应该安装哪个版本的 .NET？',
    answer: `推荐安装最新的 .NET 8 LTS 版本。LTS (Long Term Support) 版本提供 3 年的官方支持，是生产环境的最佳选择。

使用 Homebrew 安装：
\`brew install dotnet\`

验证版本：
\`dotnet --version\`

.NET 8 完全向后兼容，可以运行为早期版本编写的项目。`,
    category: 'dotnet',
    level: 'beginner'
  },
  {
    id: 'vs-for-mac-alternatives',
    question: 'Visual Studio for Mac 停止支持了，我还能在 Mac 上开发 C# 吗？',
    answer: `完全可以！实际上现在的体验更好了。微软已经将重心转移到 VS Code + C# Dev Kit 的组合上，这提供了：

✅ 更快的性能和启动速度
✅ 更频繁的功能更新
✅ 更好的跨平台一致性
✅ 更丰富的扩展生态

C# Dev Kit 提供了与 Visual Studio 相似的功能，包括解决方案资源管理器、调试器、智能感知等。`,
    category: 'environment',
    level: 'beginner'
  },
  {
    id: 'csharp-devkit-license',
    question: 'C# Dev Kit 需要付费吗？',
    answer: `C# Dev Kit 对以下用户完全免费：
• 个人开发者
• 学术用途
• 开源项目贡献者
• 小型商业项目（少于250台PC和年收入低于100万美元的组织）

对于大型企业，需要 Visual Studio Professional 或 Enterprise 订阅。条款与 Visual Studio Community 版本相同。`,
    category: 'vscode',
    level: 'beginner'
  },
  {
    id: 'm1-mac-compatibility',
    question: 'Apple Silicon (M1/M2/M3) Mac 兼容性如何？',
    answer: `.NET 对 Apple Silicon 提供原生支持！

• .NET 6+ 版本对 ARM64 (Apple Silicon) 有原生支持
• 性能优异，没有兼容性问题
• Docker 容器也支持 ARM64 架构
• 所有主要的 NuGet 包都支持 ARM64

运行 \`dotnet --info\` 可以确认您运行的是 ARM64 版本。`,
    category: 'environment',
    level: 'intermediate'
  },
  {
    id: 'database-options',
    question: '在 macOS 上应该使用什么数据库？',
    answer: `有几个很好的选择：

**推荐方案（按优先级）：**

1. **Docker + SQL Server**: 与生产环境最一致
   \`docker run -e "ACCEPT_EULA=Y" -e "MSSQL_SA_PASSWORD=YourPassword!" -p 1433:1433 -d mcr.microsoft.com/mssql/server:2022-latest\`

2. **PostgreSQL**: 开源，性能优秀，EF Core 支持完善
   \`brew install postgresql\`

3. **SQLite**: 适合开发和原型，无需额外安装
   \`dotnet add package Microsoft.EntityFrameworkCore.Sqlite\`

大多数项目都可以通过更改连接字符串在不同数据库间切换。`,
    category: 'database',
    level: 'intermediate'
  },
  {
    id: 'hot-reload-not-working',
    question: '热重载 (Hot Reload) 功能不工作怎么办？',
    answer: `检查以下几点：

1. **确保使用 .NET 6+**: 热重载是较新的功能
2. **检查启动方式**: 使用 \`dotnet watch\` 而不是 \`dotnet run\`
3. **VS Code 配置**: 确保 C# Dev Kit 扩展已正确安装并启用
4. **项目类型**: 确认项目支持热重载（Web 应用、API 等）

启用热重载的命令：
\`dotnet watch run\`

如果仍有问题，检查输出面板中的 C# 扩展日志。`,
    category: 'dotnet',
    level: 'intermediate'
  },
  {
    id: 'intellisense-slow',
    question: 'IntelliSense 反应很慢或不工作？',
    answer: `常见解决方案：

1. **重启 OmniSharp**: 打开命令面板 (Cmd+Shift+P)，运行 "OmniSharp: Restart OmniSharp"
2. **清理缓存**: 删除 \`bin\` 和 \`obj\` 文件夹，然后运行 \`dotnet restore\`
3. **检查项目文件**: 确保 \`.csproj\` 文件格式正确
4. **内存设置**: 在大型项目中，可能需要增加 VS Code 的内存限制

在 settings.json 中添加：
\`"omnisharp.maxProjectResults": 250\`
\`"omnisharp.useModernNet": true\``,
    category: 'vscode',
    level: 'advanced'
  }
]

export default function TroubleshootingGuide() {
  const [expandedItems, setExpandedItems] = useState<string[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedLevel, setSelectedLevel] = useState<string>('all')

  const toggleItem = (itemId: string) => {
    setExpandedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    )
  }

  const filteredItems = faqItems.filter(item => {
    const categoryMatch = selectedCategory === 'all' || item.category === selectedCategory
    const levelMatch = selectedLevel === 'all' || item.level === selectedLevel
    return categoryMatch && levelMatch
  })

  const categoryNames = {
    all: '全部',
    environment: '环境搭建',
    vscode: 'VS Code',
    dotnet: '.NET',
    database: '数据库'
  }

  const levelNames = {
    all: '全部',
    beginner: '初学者',
    intermediate: '中级',
    advanced: '高级'
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'environment': return <AlertTriangle className="w-4 h-4" />
      case 'vscode': return <Info className="w-4 h-4" />
      case 'dotnet': return <CheckCircle className="w-4 h-4" />
      case 'database': return <AlertTriangle className="w-4 h-4" />
      default: return <Info className="w-4 h-4" />
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'environment': return 'bg-orange-100 text-orange-700'
      case 'vscode': return 'bg-blue-100 text-blue-700'
      case 'dotnet': return 'bg-green-100 text-green-700'
      case 'database': return 'bg-purple-100 text-purple-700'
      default: return 'bg-secondary-100 text-secondary-700'
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-secondary-900 mb-4">
          故障排除 & 常见问题
        </h2>
        <p className="text-lg text-secondary-600">
          在 macOS 上进行 C# 开发时的常见问题和解决方案
        </p>
      </div>

      {/* 筛选器 */}
      <div className="mb-8 flex flex-wrap gap-4">
        <div>
          <label className="block text-sm font-medium text-secondary-700 mb-2">
            分类筛选
          </label>
          <select 
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border border-secondary-300 rounded-lg px-3 py-2 bg-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          >
            {Object.entries(categoryNames).map(([value, label]) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-secondary-700 mb-2">
            难度筛选
          </label>
          <select 
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
            className="border border-secondary-300 rounded-lg px-3 py-2 bg-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          >
            {Object.entries(levelNames).map(([value, label]) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* FAQ列表 */}
      <div className="space-y-4">
        {filteredItems.map((item) => (
          <div key={item.id} className="border border-secondary-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full p-6 text-left hover:bg-secondary-50 transition-colors flex items-center justify-between"
            >
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium mr-3 ${getCategoryColor(item.category)}`}>
                    {getCategoryIcon(item.category)}
                    {categoryNames[item.category]}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    item.level === 'beginner' ? 'bg-green-100 text-green-700' :
                    item.level === 'intermediate' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {levelNames[item.level]}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-secondary-900">
                  {item.question}
                </h3>
              </div>
              <div className="flex-shrink-0 ml-4">
                {expandedItems.includes(item.id) ? (
                  <ChevronDown className="w-5 h-5 text-secondary-400" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-secondary-400" />
                )}
              </div>
            </button>
            
            {expandedItems.includes(item.id) && (
              <div className="border-t border-secondary-200 bg-white">
                <div className="p-6 prose-custom">
                  <div dangerouslySetInnerHTML={{ 
                    __html: item.answer.replace(/\n/g, '<br>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                  }} />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <Info className="w-12 h-12 text-secondary-400 mx-auto mb-4" />
          <p className="text-secondary-600">没有找到匹配的问题。请尝试调整筛选条件。</p>
        </div>
      )}
    </div>
  )
}
