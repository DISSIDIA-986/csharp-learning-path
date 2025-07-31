'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, Code2, Database, Settings, BookOpen } from 'lucide-react'

// 从文档中提取的主要内容
const courseData = {
  part1: {
    title: "第一部分: macOS上的现代C#开发环境：您的MacBook Pro已准备就绪",
    content: [
      {
        id: "1.1",
        title: "战略转型，而非平台放弃：Visual Studio for Mac的退役解读",
        content: `首先，需要正视一个事实：独立的Visual Studio for Mac IDE已于2024年8月31日正式退役，此后微软将不再为其提供支持或维护更新。然而，将此举解读为微软放弃macOS开发者是一个普遍的误解。实际上，这代表了一次深思熟虑的战略整合，其目标是将开发资源集中到一个真正统一的、跨平台的工具链上：Visual Studio Code。

这一决策背后蕴含着对开发者生态更长远的积极信号。过去，维护两个功能齐全但代码库不同的IDE（Windows上的Visual Studio和独立的Visual Studio for Mac）耗费了大量资源，并且常常导致Mac版本的功能更新滞后。通过将资源全面投入到为VS Code打造的C#开发工具包（C# Dev Kit）中，微软正在使其工具策略与现代.NET的跨平台本质保持高度一致。`,
        icon: <Settings className="w-6 h-6" />
      },
      {
        id: "1.2", 
        title: "首选工具链：Visual Studio Code与C# Dev Kit",
        content: `您在macOS上进行专业C#开发的现代化核心工具，是一个由多个扩展组成的强大套件，统称为C# Dev Kit。它并非单个插件，而是一整套协同工作的工具，旨在将VS Code提升为一个功能丰富的.NET集成开发环境。

其核心组件包括：

• **C# 扩展 (C# extension):** 这是基础，提供了核心的语言服务，如语法高亮、代码片段和基础的智能感知（IntelliSense）。
• **C# Dev Kit 扩展 (C# Dev Kit extension):** 这是全新体验的核心。它借鉴了完整版Visual Studio的成熟理念，为VS Code带来了"解决方案资源管理器"（Solution Explorer）视图。
• **IntelliCode for C# Dev Kit 扩展:** 这是一个可选但强烈推荐安装的AI辅助开发工具。`,
        icon: <Code2 className="w-6 h-6" />
      },
      {
        id: "1.3",
        title: "macOS开发环境完整搭建指南",
        content: `在macOS上搭建.NET开发环境非常方便。如果您已经有了Homebrew和VS Code，这已经完成了一半的工作。以下是完整的步骤指南：

**第1步：安装 .NET SDK**

这是最核心的部分，包含了运行和构建C#项目所需的一切（编译器、运行时等）。

通过 Homebrew 安装 .NET SDK (推荐):
\`\`\`bash
brew install dotnet
\`\`\`

验证安装:
\`\`\`bash
dotnet --version
\`\`\`
您应该会看到类似 8.0.100 这样的输出。

**第2步：为 VS Code 安装必要的扩展**

打开VS Code，进入扩展市场，搜索并安装以下扩展：

1. **C# Dev Kit (Microsoft 出品)**: 最重要的扩展包，会自动安装：
   • C# 扩展: 提供核心的语言支持
   • IntelliCode for C# Dev Kit: AI辅助的智能代码补全
   • Solution Explorer: 项目解决方案视图

2. **NuGet Gallery (可选，但推荐)**: 在VS Code中方便地搜索和管理项目依赖

3. **REST Client (Humao 出品)**: 可以直接在VS Code里运行.http文件测试API接口

**第3步：准备本地数据库**

推荐方案：使用Docker运行SQL Server

1. 安装 Docker Desktop for Mac
2. 启动SQL Server容器:
\`\`\`bash
docker run -e "ACCEPT_EULA=Y" -e "MSSQL_SA_PASSWORD=YourStrongPassword!" \\
   -p 1433:1433 --name sql1 -d \\
   mcr.microsoft.com/mssql/server:2022-latest
\`\`\`

备选方案：使用PostgreSQL或SQLite
\`\`\`bash
# PostgreSQL
brew install postgresql

# SQLite (macOS通常自带)
sqlite3 --version
\`\`\`

**第4步：安装数据库管理工具**

Azure Data Studio (推荐):
\`\`\`bash
brew install --cask azure-data-studio
\`\`\`

**完整环境清单**
✅ Homebrew (已安装)
✅ VS Code (已安装)  
➡️ 安装 .NET SDK: \`brew install dotnet\`
➡️ 安装 VS Code 扩展: C# Dev Kit, REST Client
➡️ 安装和运行数据库: 推荐用 Docker 启动 SQL Server
➡️ 安装数据库GUI工具: 推荐 Azure Data Studio`,
        icon: <Settings className="w-6 h-6" />
      },
      {
        id: "1.4",
        title: "实践演练：创建第一个.NET项目",
        content: `完成环境搭建后，让我们立即创建一个简单的项目来验证环境是否工作正常。这个练习将让您熟悉.NET CLI和VS Code的基本工作流程。

**步骤1：创建新的Web API项目**

在终端中运行以下命令：
\`\`\`bash
# 创建项目目录
mkdir MyFirstDotNetApp
cd MyFirstDotNetApp

# 创建Web API项目
dotnet new webapi -n MyFirstApi
cd MyFirstApi
\`\`\`

**步骤2：在VS Code中打开项目**

\`\`\`bash
code .
\`\`\`

当VS Code打开后，您应该会看到：
• 左侧出现"解决方案资源管理器"视图
• C# Dev Kit自动识别项目结构
• 底部状态栏显示项目信息

**步骤3：运行项目**

在VS Code的终端中运行：
\`\`\`bash
dotnet run
\`\`\`

您应该会看到类似这样的输出：
\`\`\`
info: Microsoft.Hosting.Lifetime[14]
      Now listening on: http://localhost:5000
      Now listening on: https://localhost:5001
info: Microsoft.Hosting.Lifetime[0]
      Application started. Press Ctrl+C to shutdown.
\`\`\`

**步骤4：测试API**

打开浏览器访问：
• https://localhost:5001/swagger - Swagger UI界面
• https://localhost:5001/weatherforecast - 示例API端点

**步骤5：探索项目结构**

您会看到以下关键文件：
• \`Program.cs\` - 应用程序入口点
• \`Controllers/WeatherForecastController.cs\` - 示例控制器
• \`appsettings.json\` - 配置文件
• \`MyFirstApi.csproj\` - 项目文件

**步骤6：修改代码并观察热重载**

打开 \`Controllers/WeatherForecastController.cs\`，修改 \`Summaries\` 数组，添加一些新的天气描述。保存文件后，应用会自动重载，刷新浏览器即可看到变化。

**故障排除提示**

如果遇到问题：
1. 确保.NET SDK已正确安装：\`dotnet --version\`
2. 检查VS Code是否已安装C# Dev Kit扩展
3. 确保项目文件夹在VS Code中正确打开
4. 查看VS Code的"输出"面板获取详细错误信息

这个简单的练习确认了您的macOS开发环境已经完全准备就绪，可以开始真正的C#/.NET开发之旅了！`,
        icon: <Code2 className="w-6 h-6" />
      }
    ]
  },
  part2: {
    title: "第二部分: 为资深Java开发者量身定制的C#/.NET课程",
    content: [
      {
        id: "tech-matrix",
        title: "技术栈转换矩阵",
        content: `以下是Java/Spring到C#/.NET的核心概念映射：

| Java/Spring 概念 | C#/.NET 对等物 | 注释与解读 |
|------------------|----------------|-----------|
| Java Development Kit (JDK) | .NET SDK | 两者都是包含编译器、运行时和标准库的核心开发工具包 |
| Maven / Gradle | NuGet | .NET的包管理器，用于管理项目依赖的第三方库 |
| Spring Boot | ASP.NET Core | 用于构建Web应用和API的核心框架，理念高度相似 |
| Spring @RestController | ASP.NET Core [ApiController] | 用于标记API控制器的类级别注解/特性 |
| JPA / Hibernate | Entity Framework (EF) Core | .NET生态中占主导地位的对象关系映射（ORM）框架 |
| JUnit / Mockito | xUnit / NUnit / Moq | .NET中主流的单元测试和模拟（Mock）框架 |`,
        icon: <BookOpen className="w-6 h-6" />
      },
      {
        id: "csharp-features",
        title: "模块一：精通C#语言——超越Java的语法边界",
        content: `本模块将集中火力攻克C#语言中三个最具颠覆性、且在Java中没有直接对等物的核心特性：

**1. C#风格的封装：深入理解属性（Properties）**

您在Java中早已习惯通过getX()和setX()方法来封装私有字段，这是一种遵循JavaBeans规范的命名约定。C#则将这一模式提升到了语言特性的层面：

\`\`\`csharp
public class Device
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    
    // 包含逻辑的属性
    private string _location;
    public string Location
    {
        get { return _location; }
        set
        {
            if (string.IsNullOrWhiteSpace(value))
                throw new ArgumentException("Location cannot be empty.");
            _location = value;
        }
    }
    
    // 只读属性
    public string Description => $"Device: {Name} (ID: {Id})";
}
\`\`\`

**2. LINQ：您的全新超能力数据语言**

LINQ（Language Integrated Query）是Java Streams API的究极进化版：

\`\`\`csharp
// 查询语法 (类似SQL)
var highVoltageReadings = from r in readings
                         where r.Voltage > 240.0
                         orderby r.Timestamp descending
                         select new { r.DeviceId, r.Voltage };

// 方法语法 (流式API)
var highVoltageReadings = readings
                        .Where(r => r.Voltage > 240.0)
                        .OrderByDescending(r => r.Timestamp)
                        .Select(r => new { r.DeviceId, r.Voltage });
\`\`\`

**3. 异步编程范式：async 和 await**

C#通过async和await关键字，提供了一套语言级的异步编程模型：

\`\`\`csharp
[HttpGet("{id}")]
public async Task<ActionResult<AcurevReading>> GetReading(int id)
{
    // 这里的调用不会阻塞请求处理线程
    var reading = await _context.AcurevReadings.FindAsync(id);
    
    if (reading == null)
        return NotFound();
        
    return reading;
}
\`\`\``,
        icon: <Code2 className="w-6 h-6" />
      },
      {
        id: "aspnet-core",
        title: "模块二：使用ASP.NET Core构建Web API", 
        content: `本模块将您丰富的Spring Boot经验直接映射到ASP.NET Core：

**应用程序的心跳：Program.cs与中间件管道**

在现代.NET中，Program.cs是应用程序的唯一入口点，其角色非常类似于Spring Boot的main Application类：

\`\`\`csharp
var builder = WebApplication.CreateBuilder(args);

// 服务注册 (依赖注入)
builder.Services.AddDbContext<BMSDataContext>(options =>
    options.UseNpgsql(connectionString));
builder.Services.AddScoped<IGenericRepository<Device>, GenericRepository<Device>>();

var app = builder.Build();

// 中间件管道 (类似Servlet过滤器链)
app.UseExceptionHandler("/Error");
app.UseHttpsRedirection();
app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();

app.Run();
\`\`\`

**API端点：从@RestController到[ApiController]**

\`\`\`csharp
[ApiController]
[Route("api/[controller]")]
public class DevicesController : ControllerBase
{
    private readonly IGenericRepository<Device> _repository;
    
    public DevicesController(IGenericRepository<Device> repository)
    {
        _repository = repository;
    }
    
    [HttpGet("{id}")]
    public async Task<ActionResult<Device>> GetDevice(int id)
    {
        var device = await _repository.GetByIdAsync(id);
        return device == null ? NotFound() : Ok(device);
    }
    
    [HttpPost]
    public async Task<ActionResult<Device>> CreateDevice(Device device)
    {
        await _repository.AddAsync(device);
        return CreatedAtAction(nameof(GetDevice), new { id = device.Id }, device);
    }
}
\`\`\``,
        icon: <Settings className="w-6 h-6" />
      },
      {
        id: "entity-framework",
        title: "模块三：使用Entity Framework Core与PostgreSQL进行数据持久化",
        content: `**DbContext：您通往数据库的门户**

在EF Core中，DbContext类是您与数据库交互的核心，扮演着JPA中EntityManager的角色：

\`\`\`csharp
public class BMSDataContext : DbContext
{
    public BMSDataContext(DbContextOptions<BMSDataContext> options) : base(options) { }
    
    public DbSet<AcurevReading> AcurevReadings { get; set; }
    public DbSet<Device> Devices { get; set; }
}
\`\`\`

**代码即模式：EF Core迁移工作流**

EF Core提供了强大的迁移工具来版本控制数据库模式：

\`\`\`bash
# 创建迁移
dotnet ef migrations add AddDeviceLocation

# 应用迁移
dotnet ef database update
\`\`\`

**强大且类型安全的查询：LINQ to Entities**

\`\`\`csharp
// 按ID查找
var device = await _context.Devices.FindAsync(id);

// 条件过滤与排序
var recentReadings = await _context.AcurevReadings
                               .Where(r => r.Timestamp > DateTime.UtcNow.AddHours(-1))
                               .OrderBy(r => r.Timestamp)
                               .ToListAsync();

// 关联查询 (自动JOIN)
var readingsInBuilding = await _context.AcurevReadings
                                     .Where(r => r.Device.Building.Name == "Main Tower" &&
                                                r.Timestamp > DateTime.UtcNow.AddHours(-1))
                                     .ToListAsync();
\`\`\``,
        icon: <Database className="w-6 h-6" />
      }
    ]
  },
  part3: {
    title: "第三部分: 战略路线图与建议",
    content: [
      {
        id: "4-week-plan",
        title: "四周贡献计划",
        content: `**第一周：环境搭建与代码探索**
• 目标：成功在MacBook Pro上配置好开发环境，并能够运行和调试整个项目
• 行动：专注于模块一的学习，特别是属性、LINQ和async/await

**第二周：您的第一个只读功能**
• 目标：实现一个新的GET端点，例如获取某个设备的历史读数统计
• 行动：重点实践模块二和模块三，使用LINQ to Entities编写类型安全的数据库查询

**第三周：您的第一个写入功能**
• 目标：实现一个POST或PUT端点，例如更新设备元数据或记录新的手动操作
• 行动：巩固对EF Core的理解，关注变更跟踪机制和工作单元模式

**第四周：测试与深化**
• 目标：为前两周开发的新功能编写单元测试，并深化对核心概念的理解
• 行动：使用xUnit和Moq等工具，编写单元测试，模拟仓储层的依赖`,
        icon: <BookOpen className="w-6 h-6" />
      },
      {
        id: "checklist",
        title: "成功转型的最终核对清单",
        content: `✅ **环境：** 您的Mac是完美的工作伙伴，VS Code + C# Dev Kit是您的首选利器

✅ **语言核心：** 优先精通C#的"三大法宝"：属性（Properties）、LINQ和async/await

✅ **框架入口：** Program.cs是新的配置中心，中间件的顺序至关重要

✅ **数据库：** EF Core Migrations让您的数据库模式与代码同步，纳入版本控制

✅ **设计模式：** 理解您项目中仓储模式的真正意图——为了解耦与可测试性

✅ **心态：** 拥抱相似之处，它们能让您快速上手；但更要专注于学习那些强大的不同之处，它们将是您技术能力的新增长点`,
        icon: <Settings className="w-6 h-6" />
      }
    ]
  }
}

interface ContentSectionProps {
  section: {
    id: string
    title: string
    content: string
    icon: React.ReactNode
  }
  isExpanded: boolean
  onToggle: () => void
}

function ContentSection({ section, isExpanded, onToggle }: ContentSectionProps) {
  return (
    <div className="border border-secondary-200 rounded-lg overflow-hidden mb-6">
      <button
        onClick={onToggle}
        className="w-full p-6 text-left hover:bg-secondary-50 transition-colors flex items-center justify-between"
      >
        <div className="flex items-center">
          <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mr-4 text-primary-600">
            {section.icon}
          </div>
          <h3 className="text-lg font-semibold text-secondary-900">
            {section.title}
          </h3>
        </div>
        <div className="flex-shrink-0 ml-4">
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-secondary-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-secondary-400" />
          )}
        </div>
      </button>
      
      {isExpanded && (
        <div className="border-t border-secondary-200 bg-white">
          <div className="p-6 prose-custom">
            <div dangerouslySetInnerHTML={{ 
              __html: section.content.replace(/\n/g, '<br>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            }} />
          </div>
        </div>
      )}
    </div>
  )
}

export default function CourseContent() {
  const [expandedSections, setExpandedSections] = useState<string[]>(['1.1'])

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    )
  }

  return (
    <section id="course-content" className="py-16 bg-secondary-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              课程内容
            </h2>
            <p className="text-lg text-secondary-600">
              深入浅出，从Java开发者的视角学习C#/.NET
            </p>
          </div>

          {/* 第一部分 */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-secondary-900 mb-6 border-l-4 border-primary-500 pl-4">
              {courseData.part1.title}
            </h2>
            {courseData.part1.content.map((section) => (
              <ContentSection
                key={section.id}
                section={section}
                isExpanded={expandedSections.includes(section.id)}
                onToggle={() => toggleSection(section.id)}
              />
            ))}
          </div>

          {/* 第二部分 */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-secondary-900 mb-6 border-l-4 border-primary-500 pl-4">
              {courseData.part2.title}
            </h2>
            {courseData.part2.content.map((section) => (
              <ContentSection
                key={section.id}
                section={section}
                isExpanded={expandedSections.includes(section.id)}
                onToggle={() => toggleSection(section.id)}
              />
            ))}
          </div>

          {/* 第三部分 */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-secondary-900 mb-6 border-l-4 border-primary-500 pl-4">
              {courseData.part3.title}
            </h2>
            {courseData.part3.content.map((section) => (
              <ContentSection
                key={section.id}
                section={section}
                isExpanded={expandedSections.includes(section.id)}
                onToggle={() => toggleSection(section.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
