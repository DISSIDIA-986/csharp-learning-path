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
\`\`\`

**模型绑定与验证**

ASP.NET Core的模型绑定系统会自动将请求数据绑定到C#对象：

\`\`\`csharp
public class CreateDeviceRequest
{
    [Required(ErrorMessage = "设备名称不能为空")]
    [StringLength(100, ErrorMessage = "设备名称不能超过100个字符")]
    public string Name { get; set; } = string.Empty;
    
    [Range(1, int.MaxValue, ErrorMessage = "楼层必须大于0")]
    public int Floor { get; set; }
    
    [EmailAddress(ErrorMessage = "请输入有效的邮箱地址")]
    public string? ContactEmail { get; set; }
}

[HttpPost]
public async Task<ActionResult<Device>> CreateDevice([FromBody] CreateDeviceRequest request)
{
    // 如果模型验证失败，会自动返回400 Bad Request
    if (!ModelState.IsValid)
        return BadRequest(ModelState);
        
    var device = new Device
    {
        Name = request.Name,
        Floor = request.Floor,
        ContactEmail = request.ContactEmail
    };
    
    await _repository.AddAsync(device);
    return CreatedAtAction(nameof(GetDevice), new { id = device.Id }, device);
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
    public DbSet<Building> Buildings { get; set; }
    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        // 配置实体关系
        modelBuilder.Entity<Device>()
            .HasOne(d => d.Building)
            .WithMany(b => b.Devices)
            .HasForeignKey(d => d.BuildingId);
            
        // 配置索引
        modelBuilder.Entity<AcurevReading>()
            .HasIndex(r => r.Timestamp)
            .HasDatabaseName("IX_AcurevReading_Timestamp");
            
        // 配置数据类型
        modelBuilder.Entity<AcurevReading>()
            .Property(r => r.Voltage)
            .HasPrecision(18, 2);
    }
}
\`\`\`

**代码即模式：EF Core迁移工作流**

EF Core提供了强大的迁移工具来版本控制数据库模式：

\`\`\`bash
# 创建迁移
dotnet ef migrations add AddDeviceLocation

# 预览SQL脚本
dotnet ef migrations script

# 应用迁移
dotnet ef database update

# 回滚到特定迁移
dotnet ef database update PreviousMigrationName
\`\`\`

**强大且类型安全的查询：LINQ to Entities**

\`\`\`csharp
// 基础查询
var device = await _context.Devices.FindAsync(id);

// 复杂查询与投影
var deviceSummary = await _context.Devices
    .Where(d => d.IsActive)
    .Select(d => new DeviceSummaryDto
    {
        Id = d.Id,
        Name = d.Name,
        LastReading = d.AcurevReadings
            .OrderByDescending(r => r.Timestamp)
            .Select(r => r.Voltage)
            .FirstOrDefault(),
        ReadingCount = d.AcurevReadings.Count()
    })
    .ToListAsync();

// 聚合查询
var buildingStats = await _context.Buildings
    .GroupJoin(_context.Devices,
        b => b.Id,
        d => d.BuildingId,
        (building, devices) => new
        {
            BuildingName = building.Name,
            DeviceCount = devices.Count(),
            ActiveDevices = devices.Count(d => d.IsActive)
        })
    .ToListAsync();

// 分页查询
var pagedDevices = await _context.Devices
    .OrderBy(d => d.Name)
    .Skip((pageNumber - 1) * pageSize)
    .Take(pageSize)
    .ToListAsync();
\`\`\`

**性能优化技巧**

\`\`\`csharp
// 预加载相关数据 (Eager Loading)
var devicesWithBuildings = await _context.Devices
    .Include(d => d.Building)
    .Include(d => d.AcurevReadings.Take(10))
    .ToListAsync();

// 显式加载 (Explicit Loading)
var device = await _context.Devices.FindAsync(id);
await _context.Entry(device)
    .Collection(d => d.AcurevReadings)
    .LoadAsync();

// 无跟踪查询 (提高只读查询性能)
var deviceNames = await _context.Devices
    .AsNoTracking()
    .Select(d => d.Name)
    .ToListAsync();

// 原始SQL查询 (复杂场景)
var result = await _context.AcurevReadings
    .FromSqlRaw("SELECT * FROM AcurevReadings WHERE Voltage > {0}", threshold)
    .ToListAsync();
\`\`\``,
        icon: <Database className="w-6 h-6" />
      },
      {
        id: "core-patterns",
        title: "模块四：实现项目中的核心模式",
        content: `**解构泛型仓储模式 (Generic Repository Pattern)**

\`\`\`csharp
public interface IGenericRepository<T> where T : class
{
    Task<T?> GetByIdAsync(int id);
    Task<IEnumerable<T>> GetAllAsync();
    Task<IEnumerable<T>> FindAsync(Expression<Func<T, bool>> predicate);
    Task AddAsync(T entity);
    Task UpdateAsync(T entity);
    Task RemoveAsync(T entity);
    Task<int> CountAsync(Expression<Func<T, bool>>? predicate = null);
}

public class GenericRepository<T> : IGenericRepository<T> where T : class
{
    private readonly BMSDataContext _context;
    private readonly DbSet<T> _dbSet;

    public GenericRepository(BMSDataContext context)
    {
        _context = context;
        _dbSet = _context.Set<T>();
    }

    public async Task<T?> GetByIdAsync(int id)
    {
        return await _dbSet.FindAsync(id);
    }

    public async Task<IEnumerable<T>> GetAllAsync()
    {
        return await _dbSet.ToListAsync();
    }

    public async Task<IEnumerable<T>> FindAsync(Expression<Func<T, bool>> predicate)
    {
        return await _dbSet.Where(predicate).ToListAsync();
    }

    public async Task AddAsync(T entity)
    {
        await _dbSet.AddAsync(entity);
        await _context.SaveChangesAsync();
    }

    public async Task UpdateAsync(T entity)
    {
        _dbSet.Update(entity);
        await _context.SaveChangesAsync();
    }

    public async Task RemoveAsync(T entity)
    {
        _dbSet.Remove(entity);
        await _context.SaveChangesAsync();
    }

    public async Task<int> CountAsync(Expression<Func<T, bool>>? predicate = null)
    {
        return predicate == null 
            ? await _dbSet.CountAsync() 
            : await _dbSet.CountAsync(predicate);
    }
}
\`\`\`

**服务层模式与业务逻辑**

\`\`\`csharp
public interface IDeviceService
{
    Task<DeviceDto> GetDeviceAsync(int id);
    Task<IEnumerable<DeviceDto>> GetActiveDevicesAsync();
    Task<DeviceDto> CreateDeviceAsync(CreateDeviceRequest request);
    Task<bool> UpdateDeviceStatusAsync(int id, bool isActive);
}

public class DeviceService : IDeviceService
{
    private readonly IGenericRepository<Device> _deviceRepository;
    private readonly ILogger<DeviceService> _logger;
    private readonly IMapper _mapper;

    public DeviceService(
        IGenericRepository<Device> deviceRepository,
        ILogger<DeviceService> logger,
        IMapper mapper)
    {
        _deviceRepository = deviceRepository;
        _logger = logger;
        _mapper = mapper;
    }

    public async Task<DeviceDto> GetDeviceAsync(int id)
    {
        var device = await _deviceRepository.GetByIdAsync(id);
        if (device == null)
        {
            _logger.LogWarning("Device with ID {DeviceId} not found", id);
            throw new DeviceNotFoundException($"Device with ID {id} not found");
        }

        return _mapper.Map<DeviceDto>(device);
    }

    public async Task<IEnumerable<DeviceDto>> GetActiveDevicesAsync()
    {
        var devices = await _deviceRepository.FindAsync(d => d.IsActive);
        return _mapper.Map<IEnumerable<DeviceDto>>(devices);
    }

    public async Task<DeviceDto> CreateDeviceAsync(CreateDeviceRequest request)
    {
        var device = _mapper.Map<Device>(request);
        device.CreatedAt = DateTime.UtcNow;
        device.IsActive = true;

        await _deviceRepository.AddAsync(device);
        _logger.LogInformation("Created new device: {DeviceName}", device.Name);

        return _mapper.Map<DeviceDto>(device);
    }
}
\`\`\`

**配置管理与选项模式**

\`\`\`csharp
// appsettings.json
{
  "ConnectionStrings": {
    "DefaultConnection": "Host=localhost;Database=BMS;Username=postgres;Password=password"
  },
  "BmsSettings": {
    "MaxDevicesPerBuilding": 100,
    "ReadingRetentionDays": 365,
    "AlertThresholds": {
      "HighVoltage": 250.0,
      "LowVoltage": 200.0
    }
  }
}

// 配置类
public class BmsSettings
{
    public int MaxDevicesPerBuilding { get; set; }
    public int ReadingRetentionDays { get; set; }
    public AlertThresholds AlertThresholds { get; set; } = new();
}

public class AlertThresholds
{
    public double HighVoltage { get; set; }
    public double LowVoltage { get; set; }
}

// Program.cs 中注册
builder.Services.Configure<BmsSettings>(
    builder.Configuration.GetSection("BmsSettings"));

// 在服务中使用
public class AlertService
{
    private readonly BmsSettings _settings;
    
    public AlertService(IOptions<BmsSettings> options)
    {
        _settings = options.Value;
    }
    
    public bool IsVoltageHigh(double voltage)
    {
        return voltage > _settings.AlertThresholds.HighVoltage;
    }
}
\`\`\`

**测试基础：xUnit与模拟**

\`\`\`csharp
public class DeviceServiceTests
{
    private readonly Mock<IGenericRepository<Device>> _mockRepository;
    private readonly Mock<ILogger<DeviceService>> _mockLogger;
    private readonly Mock<IMapper> _mockMapper;
    private readonly DeviceService _service;

    public DeviceServiceTests()
    {
        _mockRepository = new Mock<IGenericRepository<Device>>();
        _mockLogger = new Mock<ILogger<DeviceService>>();
        _mockMapper = new Mock<IMapper>();
        _service = new DeviceService(_mockRepository.Object, _mockLogger.Object, _mockMapper.Object);
    }

    [Fact]
    public async Task GetDeviceAsync_WithValidId_ReturnsDevice()
    {
        // Arrange
        var deviceId = 1;
        var device = new Device { Id = deviceId, Name = "Test Device" };
        var deviceDto = new DeviceDto { Id = deviceId, Name = "Test Device" };

        _mockRepository.Setup(r => r.GetByIdAsync(deviceId))
            .ReturnsAsync(device);
        _mockMapper.Setup(m => m.Map<DeviceDto>(device))
            .Returns(deviceDto);

        // Act
        var result = await _service.GetDeviceAsync(deviceId);

        // Assert
        Assert.NotNull(result);
        Assert.Equal(deviceId, result.Id);
        Assert.Equal("Test Device", result.Name);
    }

    [Fact]
    public async Task GetDeviceAsync_WithInvalidId_ThrowsException()
    {
        // Arrange
        var deviceId = 999;
        _mockRepository.Setup(r => r.GetByIdAsync(deviceId))
            .ReturnsAsync((Device?)null);

        // Act & Assert
        await Assert.ThrowsAsync<DeviceNotFoundException>(
            () => _service.GetDeviceAsync(deviceId));
    }
}
\`\`\``,
        icon: <Code2 className="w-6 h-6" />
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

**目标：** 成功在MacBook Pro上配置好开发环境，并能够运行和调试整个项目

**具体任务：**
• 完成 [环境搭建指南](/setup) 中的所有步骤
• 克隆项目仓库并成功运行项目
• 熟悉 VS Code + C# Dev Kit 的基本操作
• 理解项目的整体架构和文件结构

**学习重点：**
• C# 属性 (Properties) vs Java getters/setters
• LINQ 基础语法和概念
• async/await 异步编程模式

**实践练习：**
\`\`\`csharp
// 练习1: 理解属性
public class Device
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    
    // 计算属性
    public string DisplayName => $"设备: {Name} (ID: {Id})";
    
    // 带验证的属性
    private int _floor;
    public int Floor 
    { 
        get => _floor;
        set => _floor = value > 0 ? value : throw new ArgumentException("楼层必须大于0");
    }
}

// 练习2: LINQ 查询
var activeDevices = devices
    .Where(d => d.IsActive)
    .OrderBy(d => d.Name)
    .Select(d => new { d.Id, d.Name, d.Floor })
    .ToList();

// 练习3: 异步方法
public async Task<Device?> GetDeviceAsync(int id)
{
    return await _context.Devices.FindAsync(id);
}
\`\`\`

**本周目标：** 能够运行项目，理解基本的 C# 语法，并在现有代码中设置断点进行调试。

---

**第二周：您的第一个只读功能**

**目标：** 实现一个新的GET端点，例如获取某个设备的历史读数统计

**具体任务：**
• 创建新的 DTO 类
• 在 Controller 中添加新的 Action 方法
• 使用 LINQ to Entities 编写数据库查询
• 编写简单的单元测试

**实践项目：设备统计API**
\`\`\`csharp
// 1. 创建 DTO
public class DeviceStatsDto
{
    public int DeviceId { get; set; }
    public string DeviceName { get; set; } = string.Empty;
    public int TotalReadings { get; set; }
    public double AverageVoltage { get; set; }
    public double MaxVoltage { get; set; }
    public double MinVoltage { get; set; }
    public DateTime LastReading { get; set; }
}

// 2. 在 Controller 中添加端点
[HttpGet("{id}/stats")]
public async Task<ActionResult<DeviceStatsDto>> GetDeviceStats(int id)
{
    var device = await _context.Devices
        .Include(d => d.AcurevReadings)
        .FirstOrDefaultAsync(d => d.Id == id);
        
    if (device == null)
        return NotFound();
        
    var readings = device.AcurevReadings;
    
    var stats = new DeviceStatsDto
    {
        DeviceId = device.Id,
        DeviceName = device.Name,
        TotalReadings = readings.Count,
        AverageVoltage = readings.Any() ? readings.Average(r => r.Voltage) : 0,
        MaxVoltage = readings.Any() ? readings.Max(r => r.Voltage) : 0,
        MinVoltage = readings.Any() ? readings.Min(r => r.Voltage) : 0,
        LastReading = readings.Any() ? readings.Max(r => r.Timestamp) : DateTime.MinValue
    };
    
    return Ok(stats);
}

// 3. 测试端点
// GET /api/devices/1/stats
\`\`\`

**学习重点：**
• ASP.NET Core 路由系统
• Entity Framework Include 和预加载
• DTO 模式和数据映射
• HTTP 状态码的正确使用

---

**第三周：您的第一个写入功能**

**目标：** 实现一个POST或PUT端点，例如更新设备元数据或记录新的手动操作

**具体任务：**
• 实现数据验证和模型绑定
• 理解 EF Core 的变更跟踪机制
• 掌握事务和工作单元模式
• 处理并发和异常情况

**实践项目：设备维护记录API**
\`\`\`csharp
// 1. 创建请求模型
public class CreateMaintenanceRequest
{
    [Required(ErrorMessage = "设备ID不能为空")]
    public int DeviceId { get; set; }
    
    [Required(ErrorMessage = "维护类型不能为空")]
    [StringLength(100, ErrorMessage = "维护类型不能超过100个字符")]
    public string MaintenanceType { get; set; } = string.Empty;
    
    [StringLength(500, ErrorMessage = "描述不能超过500个字符")]
    public string? Description { get; set; }
    
    [Required(ErrorMessage = "维护人员不能为空")]
    public string Technician { get; set; } = string.Empty;
}

// 2. 创建实体
public class MaintenanceRecord
{
    public int Id { get; set; }
    public int DeviceId { get; set; }
    public string MaintenanceType { get; set; } = string.Empty;
    public string? Description { get; set; }
    public string Technician { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; }
    
    // 导航属性
    public Device Device { get; set; } = null!;
}

// 3. 实现 POST 端点
[HttpPost("maintenance")]
public async Task<ActionResult<MaintenanceRecord>> CreateMaintenanceRecord(
    [FromBody] CreateMaintenanceRequest request)
{
    // 验证设备是否存在
    var device = await _context.Devices.FindAsync(request.DeviceId);
    if (device == null)
        return BadRequest($"设备 ID {request.DeviceId} 不存在");
    
    var record = new MaintenanceRecord
    {
        DeviceId = request.DeviceId,
        MaintenanceType = request.MaintenanceType,
        Description = request.Description,
        Technician = request.Technician,
        CreatedAt = DateTime.UtcNow
    };
    
    _context.MaintenanceRecords.Add(record);
    await _context.SaveChangesAsync();
    
    return CreatedAtAction(
        nameof(GetMaintenanceRecord), 
        new { id = record.Id }, 
        record);
}

// 4. 实现 PUT 端点
[HttpPut("{id}")]
public async Task<IActionResult> UpdateDevice(int id, [FromBody] UpdateDeviceRequest request)
{
    var device = await _context.Devices.FindAsync(id);
    if (device == null)
        return NotFound();
    
    // 更新属性
    device.Name = request.Name;
    device.Location = request.Location;
    device.UpdatedAt = DateTime.UtcNow;
    
    // EF Core 自动跟踪更改
    await _context.SaveChangesAsync();
    
    return NoContent();
}
\`\`\`

**学习重点：**
• 数据验证特性 (Data Annotations)
• EF Core 变更跟踪和 SaveChanges
• HTTP 动词的正确使用 (POST vs PUT vs PATCH)
• 错误处理和用户友好的错误消息

---

**第四周：测试与深化**

**目标：** 为前两周开发的新功能编写单元测试，并深化对核心概念的理解

**具体任务：**
• 编写控制器和服务的单元测试
• 理解依赖注入和模拟 (Mocking)
• 学习集成测试的基础
• 代码重构和性能优化

**测试实践：**
\`\`\`csharp
public class DeviceControllerTests : IClassFixture<WebApplicationFactory<Program>>
{
    private readonly WebApplicationFactory<Program> _factory;
    private readonly HttpClient _client;

    public DeviceControllerTests(WebApplicationFactory<Program> factory)
    {
        _factory = factory;
        _client = _factory.CreateClient();
    }

    [Fact]
    public async Task GetDevice_WithValidId_ReturnsDevice()
    {
        // Arrange
        var deviceId = 1;

        // Act
        var response = await _client.GetAsync($"/api/devices/{deviceId}");

        // Assert
        response.EnsureSuccessStatusCode();
        var content = await response.Content.ReadAsStringAsync();
        var device = JsonSerializer.Deserialize<Device>(content);
        
        Assert.NotNull(device);
        Assert.Equal(deviceId, device.Id);
    }

    [Fact]
    public async Task CreateDevice_WithValidData_ReturnsCreated()
    {
        // Arrange
        var newDevice = new CreateDeviceRequest
        {
            Name = "Test Device",
            Location = "Test Location"
        };
        
        var json = JsonSerializer.Serialize(newDevice);
        var content = new StringContent(json, Encoding.UTF8, "application/json");

        // Act
        var response = await _client.PostAsync("/api/devices", content);

        // Assert
        Assert.Equal(HttpStatusCode.Created, response.StatusCode);
    }
}
\`\`\`

**性能优化技巧：**
\`\`\`csharp
// 1. 使用 AsNoTracking 进行只读查询
public async Task<IEnumerable<DeviceDto>> GetDevicesAsync()
{
    return await _context.Devices
        .AsNoTracking()  // 提高性能
        .Select(d => new DeviceDto
        {
            Id = d.Id,
            Name = d.Name,
            IsActive = d.IsActive
        })
        .ToListAsync();
}

// 2. 分页查询
public async Task<PagedResult<Device>> GetDevicesPagedAsync(int page, int pageSize)
{
    var totalCount = await _context.Devices.CountAsync();
    
    var devices = await _context.Devices
        .OrderBy(d => d.Name)
        .Skip((page - 1) * pageSize)
        .Take(pageSize)
        .ToListAsync();
    
    return new PagedResult<Device>
    {
        Items = devices,
        TotalCount = totalCount,
        PageNumber = page,
        PageSize = pageSize
    };
}

// 3. 批量操作
public async Task UpdateDeviceStatusesAsync(IEnumerable<int> deviceIds, bool isActive)
{
    await _context.Devices
        .Where(d => deviceIds.Contains(d.Id))
        .ExecuteUpdateAsync(d => d.SetProperty(p => p.IsActive, isActive));
}
\`\`\`

**本周目标：** 编写完整的测试套件，掌握测试驱动开发 (TDD) 基础，能够独立完成小型功能的开发。

---

**评估标准**

每周结束时，您应该能够：
- 第一周：在 VS Code 中熟练调试 C# 代码
- 第二周：独立实现一个GET API端点
- 第三周：独立实现一个POST/PUT API端点
- 第四周：为自己的代码编写单元测试

完成四周计划后，您将具备在 .NET 项目中独立开发功能的能力！`,
        icon: <BookOpen className="w-6 h-6" />
      },
      {
        id: "checklist",
        title: "成功转型的最终核对清单",
        content: `**🔧 开发环境清单**

✅ **Homebrew 和 VS Code 已安装**
✅ **.NET SDK 已安装**: \`dotnet --version\` 显示 8.x.x
✅ **C# Dev Kit 扩展已安装**: VS Code 中有解决方案资源管理器
✅ **数据库环境已准备**: Docker + SQL Server 或 PostgreSQL
✅ **第一个项目能够运行**: \`dotnet run\` 成功启动

**📚 语言掌握清单**

✅ **属性 (Properties) 熟练运用**:
• 理解自动属性 \`{ get; set; }\`
• 会使用计算属性 \`=> expression\`
• 理解只读属性和 \`init\` 访问器

✅ **LINQ 查询熟练运用**:
• 掌握基础查询操作 (Where, Select, OrderBy)
• 理解延迟执行和立即执行
• 会使用聚合函数 (Count, Sum, Average)

✅ **异步编程熟练运用**:
• 所有 I/O 操作使用 async/await
• 理解 Task 和 Task<T>
• 避免异步陷阱 (避免 .Result 和 .Wait())

**🏗️ 框架掌握清单**

✅ **ASP.NET Core 控制器**:
• 能够创建基本的 CRUD 端点
• 理解路由和模型绑定
• 掌握状态码的正确使用

✅ **依赖注入**:
• 理解服务生命周期 (Singleton, Scoped, Transient)
• 会在 Program.cs 中注册服务
• 能够通过构造函数注入依赖

✅ **Entity Framework Core**:
• 能够定义 DbContext 和实体
• 熟练使用 LINQ to Entities
• 理解迁移工作流程

**🎯 实践能力清单**

✅ **阅读现有代码**:
• 能够理解项目结构和架构
• 会使用调试器跟踪代码执行
• 理解仓储模式的实现

✅ **编写新功能**:
• 能够独立实现 GET 端点
• 能够独立实现 POST/PUT 端点
• 会进行基本的数据验证

✅ **测试能力**:
• 会编写基本的单元测试
• 理解模拟 (Mocking) 的概念
• 能够使用 xUnit 测试框架

**🚀 进阶技能清单**

✅ **性能意识**:
• 使用 AsNoTracking 进行只读查询
• 实现分页查询
• 理解 N+1 查询问题

✅ **最佳实践**:
• 遵循 RESTful API 设计原则
• 使用 DTO 进行数据传输
• 正确处理异常和错误

✅ **团队协作**:
• 理解 Git 工作流程
• 会创建有意义的提交消息
• 能够进行代码审查

**🎓 学习态度清单**

✅ **持续学习心态**:
• 定期查阅微软官方文档
• 关注 .NET 社区和最新动态
• 积极参与代码审查和技术讨论

✅ **问题解决能力**:
• 会使用调试器定位问题
• 能够查找和理解错误消息
• 善于利用 Stack Overflow 和官方文档

✅ **实践驱动**:
• 通过编写代码来学习概念
• 不怕犯错，从错误中学习
• 持续重构和改进代码质量

**🏆 最终目标**

完成所有清单项目后，您应该能够：

🎯 **独立开发小型功能**: 从需求分析到代码实现到测试
🎯 **参与代码审查**: 理解他人代码并提供建设性反馈
🎯 **解决常见问题**: 独立排查和解决开发中的问题
🎯 **持续学习**: 有能力学习更高级的 .NET 概念和框架

**恭喜您！** 🎉 完成这个清单意味着您已经成功从 Java 开发者转变为合格的 .NET 开发者。您现在拥有了在现代 .NET 项目中进行有效贡献的所有基础技能！

**下一步建议**:
• 深入学习 ASP.NET Core 高级特性 (中间件、过滤器等)
• 探索微服务架构和容器化部署
• 学习前端技术 (Blazor 或与 React/Vue 集成)
• 深入了解云平台 (Azure、AWS) 上的 .NET 部署`,
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
