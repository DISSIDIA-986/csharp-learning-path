'use client'

import { useState } from 'react'
import { Copy, Check, Code2 } from 'lucide-react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface CodeExample {
  id: string
  title: string
  description: string
  language: string
  code: string
  category: 'csharp' | 'java' | 'comparison'
}

const codeExamples: CodeExample[] = [
  {
    id: 'properties-comparison',
    title: 'Properties vs Getters/Setters',
    description: 'C# 属性与 Java getters/setters 的对比',
    language: 'csharp',
    category: 'comparison',
    code: `// Java 风格
public class JavaDevice {
    private String name;
    private boolean active;
    
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    
    public boolean isActive() { return active; }
    public void setActive(boolean active) { this.active = active; }
}

// C# 风格
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
}`
  },
  {
    id: 'linq-vs-streams',
    title: 'LINQ vs Java Streams',
    description: '数据查询操作的对比',
    language: 'csharp',
    category: 'comparison',
    code: `// Java Streams
List<Device> activeDevices = devices.stream()
    .filter(d -> d.isActive())
    .sorted(Comparator.comparing(Device::getName))
    .collect(Collectors.toList());

Map<String, Long> devicesByLocation = devices.stream()
    .collect(Collectors.groupingBy(
        Device::getLocation, 
        Collectors.counting()));

// C# LINQ - 方法语法
var activeDevices = devices
    .Where(d => d.IsActive)
    .OrderBy(d => d.Name)
    .ToList();

var devicesByLocation = devices
    .GroupBy(d => d.Location)
    .ToDictionary(g => g.Key, g => g.Count());

// C# LINQ - 查询语法 (类似 SQL)
var activeDevices = from d in devices
                   where d.IsActive
                   orderby d.Name
                   select d;`
  },
  {
    id: 'async-comparison',
    title: '异步编程对比',
    description: 'Java CompletableFuture vs C# async/await',
    language: 'csharp',
    category: 'comparison',
    code: `// Java CompletableFuture
public CompletableFuture<Device> getDeviceAsync(int id) {
    return CompletableFuture.supplyAsync(() -> {
        return deviceRepository.findById(id);
    }).thenCompose(device -> {
        if (device.isPresent()) {
            return CompletableFuture.completedFuture(device.get());
        } else {
            throw new DeviceNotFoundException("Device not found");
        }
    });
}

// C# async/await
public async Task<Device> GetDeviceAsync(int id)
{
    var device = await _deviceRepository.FindAsync(id);
    
    if (device == null)
        throw new DeviceNotFoundException("Device not found");
        
    return device;
}

// 调用异步方法
// Java
deviceService.getDeviceAsync(1)
    .thenAccept(device -> System.out.println(device.getName()))
    .exceptionally(ex -> {
        System.err.println("Error: " + ex.getMessage());
        return null;
    });

// C#
try 
{
    var device = await deviceService.GetDeviceAsync(1);
    Console.WriteLine(device.Name);
}
catch (DeviceNotFoundException ex)
{
    Console.WriteLine($"Error: {ex.Message}");
}`
  },
  {
    id: 'controller-comparison',
    title: 'Web API Controller 对比',
    description: 'Spring Boot vs ASP.NET Core Controller',
    language: 'csharp',
    category: 'comparison',
    code: `// Spring Boot Controller
@RestController
@RequestMapping("/api/devices")
public class DeviceController {
    
    @Autowired
    private DeviceService deviceService;
    
    @GetMapping("/{id}")
    public ResponseEntity<Device> getDevice(@PathVariable Long id) {
        Device device = deviceService.findById(id);
        return device != null ? 
            ResponseEntity.ok(device) : 
            ResponseEntity.notFound().build();
    }
    
    @PostMapping
    public ResponseEntity<Device> createDevice(@RequestBody @Valid CreateDeviceRequest request) {
        Device device = deviceService.create(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(device);
    }
}

// ASP.NET Core Controller
[ApiController]
[Route("api/[controller]")]
public class DevicesController : ControllerBase
{
    private readonly IDeviceService _deviceService;
    
    public DevicesController(IDeviceService deviceService)
    {
        _deviceService = deviceService;
    }
    
    [HttpGet("{id}")]
    public async Task<ActionResult<Device>> GetDevice(int id)
    {
        var device = await _deviceService.GetByIdAsync(id);
        return device == null ? NotFound() : Ok(device);
    }
    
    [HttpPost]
    public async Task<ActionResult<Device>> CreateDevice([FromBody] CreateDeviceRequest request)
    {
        var device = await _deviceService.CreateAsync(request);
        return CreatedAtAction(nameof(GetDevice), new { id = device.Id }, device);
    }
}`
  },
  {
    id: 'ef-core-example',
    title: 'Entity Framework Core 查询',
    description: '复杂的数据库查询示例',
    language: 'csharp',
    category: 'csharp',
    code: `public class DeviceService
{
    private readonly BMSDataContext _context;
    
    public DeviceService(BMSDataContext context)
    {
        _context = context;
    }
    
    // 基础查询
    public async Task<Device?> GetDeviceAsync(int id)
    {
        return await _context.Devices.FindAsync(id);
    }
    
    // 复杂查询与投影
    public async Task<List<DeviceStatsDto>> GetDeviceStatsAsync()
    {
        return await _context.Devices
            .Where(d => d.IsActive)
            .Select(d => new DeviceStatsDto
            {
                Id = d.Id,
                Name = d.Name,
                TotalReadings = d.AcurevReadings.Count(),
                AverageVoltage = d.AcurevReadings.Average(r => r.Voltage),
                LastReading = d.AcurevReadings
                    .OrderByDescending(r => r.Timestamp)
                    .Select(r => r.Timestamp)
                    .FirstOrDefault()
            })
            .ToListAsync();
    }
    
    // 关联查询
    public async Task<List<Device>> GetDevicesWithBuildingAsync(string buildingName)
    {
        return await _context.Devices
            .Include(d => d.Building)
            .Include(d => d.AcurevReadings.Take(10))
            .Where(d => d.Building.Name == buildingName)
            .ToListAsync();
    }
    
    // 分页查询
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
            PageSize = pageSize,
            TotalPages = (int)Math.Ceiling(totalCount / (double)pageSize)
        };
    }
    
    // 批量操作
    public async Task UpdateDeviceStatusAsync(List<int> deviceIds, bool isActive)
    {
        await _context.Devices
            .Where(d => deviceIds.Contains(d.Id))
            .ExecuteUpdateAsync(d => d.SetProperty(p => p.IsActive, isActive));
    }
}`
  },
  {
    id: 'testing-example',
    title: 'xUnit 测试示例',
    description: '单元测试和集成测试的实际例子',
    language: 'csharp',
    category: 'csharp',
    code: `public class DeviceServiceTests
{
    private readonly Mock<IGenericRepository<Device>> _mockRepository;
    private readonly Mock<ILogger<DeviceService>> _mockLogger;
    private readonly DeviceService _service;

    public DeviceServiceTests()
    {
        _mockRepository = new Mock<IGenericRepository<Device>>();
        _mockLogger = new Mock<ILogger<DeviceService>>();
        _service = new DeviceService(_mockRepository.Object, _mockLogger.Object);
    }

    [Fact]
    public async Task GetDeviceAsync_WithValidId_ReturnsDevice()
    {
        // Arrange
        var deviceId = 1;
        var expectedDevice = new Device 
        { 
            Id = deviceId, 
            Name = "Test Device",
            IsActive = true
        };

        _mockRepository
            .Setup(r => r.GetByIdAsync(deviceId))
            .ReturnsAsync(expectedDevice);

        // Act
        var result = await _service.GetDeviceAsync(deviceId);

        // Assert
        Assert.NotNull(result);
        Assert.Equal(deviceId, result.Id);
        Assert.Equal("Test Device", result.Name);
        Assert.True(result.IsActive);
    }

    [Fact]
    public async Task GetDeviceAsync_WithInvalidId_ThrowsException()
    {
        // Arrange
        var deviceId = 999;
        _mockRepository
            .Setup(r => r.GetByIdAsync(deviceId))
            .ReturnsAsync((Device?)null);

        // Act & Assert
        await Assert.ThrowsAsync<DeviceNotFoundException>(
            () => _service.GetDeviceAsync(deviceId));
    }

    [Theory]
    [InlineData(true, "在线")]
    [InlineData(false, "离线")]
    public void GetDeviceStatus_ReturnsCorrectStatus(bool isActive, string expectedStatus)
    {
        // Arrange
        var device = new Device { IsActive = isActive };

        // Act
        var status = device.Status;

        // Assert
        Assert.Equal(expectedStatus, status);
    }
}

// 集成测试示例
public class DeviceControllerIntegrationTests : IClassFixture<WebApplicationFactory<Program>>
{
    private readonly WebApplicationFactory<Program> _factory;
    private readonly HttpClient _client;

    public DeviceControllerIntegrationTests(WebApplicationFactory<Program> factory)
    {
        _factory = factory;
        _client = _factory.CreateClient();
    }

    [Fact]
    public async Task GetDevices_ReturnsSuccessStatusCode()
    {
        // Act
        var response = await _client.GetAsync("/api/devices");

        // Assert
        response.EnsureSuccessStatusCode();
        
        var content = await response.Content.ReadAsStringAsync();
        var devices = JsonSerializer.Deserialize<List<Device>>(content);
        
        Assert.NotNull(devices);
    }
}`
  }
]

export default function CodeExamples() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const filteredExamples = codeExamples.filter(example => 
    selectedCategory === 'all' || example.category === selectedCategory
  )

  const copyToClipboard = async (code: string, id: string) => {
    try {
      await navigator.clipboard.writeText(code)
      setCopiedId(id)
      setTimeout(() => setCopiedId(null), 2000)
    } catch (err) {
      console.error('Failed to copy code:', err)
    }
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-secondary-900 mb-4">
          代码示例库
        </h2>
        <p className="text-lg text-secondary-600 mb-6">
          Java 与 C# 的实际代码对比，以及 .NET 开发的最佳实践
        </p>

        {/* 分类筛选 */}
        <div className="flex flex-wrap gap-2">
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
      <div className="space-y-8">
        {filteredExamples.map((example) => (
          <div key={example.id} className="bg-white rounded-lg border border-secondary-200 overflow-hidden">
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
                  onClick={() => copyToClipboard(example.code, example.id)}
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

            {/* 代码区域 */}
            <div className="relative">
              <SyntaxHighlighter
                language={example.language === 'csharp' ? 'csharp' : example.language}
                style={oneDark}
                customStyle={{
                  margin: 0,
                  borderRadius: '0.5rem',
                  fontSize: '0.875rem',
                  lineHeight: '1.5'
                }}
                showLineNumbers={true}
                wrapLines={true}
              >
                {example.code}
              </SyntaxHighlighter>
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
