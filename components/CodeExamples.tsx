'use client'

import { useState } from 'react'
import { Copy, Check, Code2 } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import remarkGfm from 'remark-gfm'

interface CodeExample {
  id: string
  title: string
  description: string
  content: string
  category: 'csharp' | 'java' | 'comparison'
}

const codeExamples: CodeExample[] = [
  {
    id: 'properties-comparison',
    title: 'Properties vs Getters/Setters',
    description: 'C# 属性与 Java getters/setters 的对比',
    category: 'comparison',
    content: `## Java 风格

\`\`\`java
public class JavaDevice {
    private String name;
    private boolean active;
    
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    
    public boolean isActive() { return active; }
    public void setActive(boolean active) { this.active = active; }
}
\`\`\`

## C# 风格

\`\`\`csharp
public class CSharpDevice 
{
    public string Name { get; set; } = string.Empty;
    public bool IsActive { get; set; }
    
    // 计算属性
    public string Status => IsActive ? "在线" : "离线";
    
    // 带验证的属性
    private int _id;
    public int Id 
    { 
        get => _id;
        set => _id = value > 0 ? value : throw new ArgumentException("ID必须大于0");
    }
}
\`\`\`

**主要差异:**
- C# 属性语法更简洁
- 支持自动实现的属性 \`{ get; set; }\`
- 支持计算属性（只读）
- 支持初始化器`
  },
  {
    id: 'linq-vs-streams',
    title: 'LINQ vs Java Streams',
    description: '数据查询操作的对比',
    category: 'comparison',
    content: `## Java Streams

\`\`\`java
List<Device> activeDevices = devices.stream()
    .filter(d -> d.isActive())
    .sorted(Comparator.comparing(Device::getName))
    .collect(Collectors.toList());
\`\`\`

## C# LINQ - 方法语法

\`\`\`csharp
var activeDevices = devices
    .Where(d => d.IsActive)
    .OrderBy(d => d.Name)
    .ToList();
\`\`\`

## C# LINQ - 查询语法

\`\`\`csharp
var activeDevices = from d in devices
                   where d.IsActive
                   orderby d.Name
                   select d;
\`\`\`

**优势对比:**
- LINQ 提供两种语法：方法语法和查询语法
- 查询语法更接近 SQL，易于理解
- 方法语法更函数式，可以链式调用`
  },
  {
    id: 'async-comparison',
    title: '异步编程对比',
    description: 'Java CompletableFuture vs C# async/await',
    category: 'comparison',
    content: `## Java CompletableFuture

\`\`\`java
public CompletableFuture<Device> getDeviceAsync(int id) {
    return CompletableFuture.supplyAsync(() -> {
        return deviceRepository.findById(id);
    });
}

// 调用异步方法
deviceService.getDeviceAsync(1)
    .thenAccept(device -> System.out.println(device.getName()));
\`\`\`

## C# async/await

\`\`\`csharp
public async Task<Device> GetDeviceAsync(int id)
{
    var device = await _deviceRepository.FindAsync(id);
    
    if (device == null)
        throw new DeviceNotFoundException("Device not found");
        
    return device;
}

// 调用异步方法
try 
{
    var device = await deviceService.GetDeviceAsync(1);
    Console.WriteLine(device.Name);
}
catch (DeviceNotFoundException ex)
{
    Console.WriteLine($"Error: {ex.Message}");
}
\`\`\`

**C# 优势:**
- 语法更简洁，接近同步代码
- 异常处理更直观
- 编译器自动生成状态机`
  }
]

export default function CodeExamples() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const filteredExamples = selectedCategory === 'all' 
    ? codeExamples 
    : codeExamples.filter(example => example.category === selectedCategory)

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedId(id)
      setTimeout(() => setCopiedId(null), 2000)
    } catch (err) {
      console.error('复制失败:', err)
    }
  }

  // 自定义markdown组件
  const MarkdownComponents = {
    code({node, inline, className, children, ...props}: any) {
      const match = /language-(\w+)/.exec(className || '')
      return !inline && match ? (
        <SyntaxHighlighter
          style={oneDark}
          language={match[1]}
          PreTag="div"
          customStyle={{
            margin: '1rem 0',
            borderRadius: '0.5rem',
            fontSize: '0.875rem',
            lineHeight: '1.5'
          }}
          showLineNumbers={true}
          wrapLines={true}
          {...props}
        >
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      )
    }
  }

  return (
    <div className="py-12 bg-secondary-50" id="examples">
      {/* 标题区域 */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <h2 className="text-3xl font-bold text-center text-secondary-900 mb-4">
          代码示例库
        </h2>
        <p className="text-lg text-secondary-600 mb-6 text-center">
          Java 与 C# 的实际代码对比，以及 .NET 开发的最佳实践
        </p>

        {/* 分类筛选 */}
        <div className="flex flex-wrap gap-2 justify-center">
          {[
            { key: 'all', label: '全部示例' },
            { key: 'comparison', label: 'Java vs C#' },
            { key: 'csharp', label: 'C# 专用' }
          ].map(category => (
            <button
              key={category.key}
              onClick={() => setSelectedCategory(category.key)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === category.key
                  ? 'bg-primary-600 text-white'
                  : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* 代码示例列表 */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {filteredExamples.map((example) => (
          <div key={example.id} className="bg-white rounded-lg border border-secondary-200 overflow-hidden shadow-sm">
            {/* 标题区域 */}
            <div className="p-6 border-b border-secondary-200">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <Code2 className="w-5 h-5 text-primary-600 mr-2" />
                    <h3 className="text-xl font-semibold text-secondary-900">
                      {example.title}
                    </h3>
                    <span className={`ml-3 px-2 py-1 rounded-full text-xs font-medium ${
                      example.category === 'comparison' 
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-green-100 text-green-700'
                    }`}>
                      {example.category === 'comparison' ? '对比' : 'C# 示例'}
                    </span>
                  </div>
                  <p className="text-secondary-600">
                    {example.description}
                  </p>
                </div>
                <button
                  onClick={() => copyToClipboard(example.content, example.id)}
                  className="flex items-center gap-2 px-3 py-2 bg-secondary-100 hover:bg-secondary-200 rounded-lg transition-colors ml-4"
                >
                  {copiedId === example.id ? (
                    <>
                      <Check className="w-4 h-4 text-green-600" />
                      <span className="text-sm text-green-600">已复制</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-secondary-600" />
                      <span className="text-sm text-secondary-600">复制代码</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Markdown内容区域 */}
            <div className="p-6 prose prose-lg max-w-none prose-headings:text-secondary-900 prose-p:text-secondary-700 prose-strong:text-secondary-900">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={MarkdownComponents}
              >
                {example.content}
              </ReactMarkdown>
            </div>
          </div>
        ))}
      </div>

      {/* 空状态 */}
      {filteredExamples.length === 0 && (
        <div className="text-center py-12">
          <Code2 className="w-12 h-12 text-secondary-400 mx-auto mb-4" />
          <p className="text-secondary-600">该分类下暂无代码示例</p>
        </div>
      )}
    </div>
  )
}
