# 🏠 Gaming Platform Home App

Gaming Platform的首页微应用，提供热门游戏展示、快捷操作和个性化内容推荐功能。

## 🎯 功能特性

### ✨ 核心功能
- 🔥 **热门游戏展示**: 精选推荐游戏，实时更新热度
- ⚡ **快捷操作面板**: 搜索、分类、收藏等快捷入口
- 🎮 **游戏统计**: 实时平台数据和用户活跃度
- 🎨 **Hero Banner**: 精美的主视觉区域

### 🔗 API集成
- **Home API Service**: 专用的首页数据服务
- **共享API客户端**: 使用sharedLib统一API管理
- **实时数据**: WebSocket连接获取实时统计

## 🏗️ Module Federation 配置

### Remote应用设置
```typescript
name: 'homeApp',
filename: 'remoteEntry.js',
exposes: {
  './App': './src/App.tsx'
},
shared: {
  'react': { singleton: true },
  'react-dom': { singleton: true }
}
```

### 依赖关系
- **Host**: gaming-platform-container
- **Shared**: gaming-platform-shared (API客户端和类型)
- **Runtime**: 独立运行在端口3001

## 📦 项目结构

```
src/
├── components/          # 首页专用组件
│   ├── HeroBanner.tsx      # 主视觉横幅
│   ├── FeaturedGames.tsx   # 热门游戏列表
│   ├── GameStats.tsx       # 游戏统计面板
│   └── QuickActions.tsx    # 快捷操作
├── services/            # 业务逻辑层
│   └── homeApi.ts          # 首页API服务
├── App.tsx              # 应用主组件
├── App.css              # 样式定义
└── main.tsx             # 应用入口
```

## 🔌 组件说明

### 🎭 HeroBanner
**主视觉横幅组件**
- 展示精选游戏的大图和介绍
- 支持轮播和自动切换
- 响应式设计，适配移动端

### 🎮 FeaturedGames
**热门游戏展示组件**
- 网格布局展示推荐游戏
- 游戏评分、下载量等信息
- 点击跳转到游戏详情页

### 📊 GameStats
**平台统计组件**  
- 实时在线用户数
- 游戏库总量统计
- 热门分类排行

### ⚡ QuickActions
**快捷操作面板**
- 搜索游戏入口
- 分类浏览按钮
- 个人收藏快速访问

## 🚀 开发

### 本地开发
```bash
# 安装依赖
npm install

# 开发模式 (用于独立开发)
npm run dev
# 访问: http://localhost:3001

# Module Federation模式 (用于集成测试)
npm run build && npm run preview
```

### 环境要求
- Node.js 16+
- 需要gaming-platform-shared运行在3100端口
- 可选：后端API服务提供真实数据

## 🎨 UI设计

### 设计系统
- **颜色主题**: 与Container App保持一致
- **组件规范**: 遵循平台设计语言
- **响应式**: 移动优先设计理念

### 布局结构
```
┌─────────────────────┐
│   Hero Banner       │  ← 主视觉区域
├─────────────────────┤
│  Quick Actions      │  ← 快捷操作栏
├─────────────────────┤
│  Featured Games     │  ← 热门游戏网格
├─────────────────────┤
│   Game Stats        │  ← 统计信息
└─────────────────────┘
```

## 📡 API集成

### HomeAPI服务
```typescript
class HomeApiService {
  private api = createApiClient('home')
  
  // 获取热门游戏
  async getFeaturedGames(): Promise<Game[]>
  
  // 获取平台统计
  async getGameStats(): Promise<GameStats>
  
  // 获取个性化推荐
  async getRecommendations(userId: string): Promise<Game[]>
  
  // 搜索游戏
  async searchGames(query: string): Promise<Game[]>
}
```

### 共享库集成
```typescript
// 使用共享API客户端
import { createApiClient } from 'sharedLib/apiClient'
import type { Game, GameStats } from 'sharedLib/apiTypes'

const homeApi = createApiClient('home')
```

## 📈 性能优化

### 加载策略
- **懒加载**: 组件级懒加载
- **图片优化**: WebP格式和响应式图片
- **缓存策略**: API响应缓存
- **预加载**: 关键资源预加载

### Module Federation优化
- **代码分割**: 按功能模块分割
- **共享依赖**: 复用Container App的React
- **打包优化**: Tree shaking和压缩

## 🧪 测试

### 测试策略
- **单元测试**: 组件和服务的单元测试
- **集成测试**: API集成测试
- **端到端**: 用户流程测试

```bash
# 运行测试
npm run test

# 测试覆盖率
npm run test:coverage
```

## 🚀 部署

### 构建流程
```bash
# 生产构建
npm run build

# 预览构建结果
npm run preview

# 部署到CDN
npm run deploy
```

### 环境变量
```bash
# 开发环境
RSBUILD_PUBLIC_API_BASE_URL=http://localhost:3101

# 生产环境
RSBUILD_PUBLIC_API_BASE_URL=https://api.gaming-platform.com
```

## 🔗 相关项目

- [Gaming Platform Container](https://github.com/tokinonagare/gaming-platform-container) - 主容器应用
- [Gaming Platform Shared](https://github.com/tokinonagare/gaming-platform-shared) - 共享库
- [Gaming Platform Game](https://github.com/tokinonagare/gaming-platform-game) - 游戏库微应用
- [Gaming Platform User](https://github.com/tokinonagare/gaming-platform-user) - 用户微应用

## 📋 开发计划

### 已完成 ✅
- [x] 基础组件开发
- [x] API服务集成
- [x] Module Federation配置
- [x] 响应式设计

### 计划中 📋
- [ ] 个性化推荐算法
- [ ] 实时通知系统
- [ ] PWA支持
- [ ] 国际化支持

---

**🏠 首页微应用 - 用户的第一印象！**