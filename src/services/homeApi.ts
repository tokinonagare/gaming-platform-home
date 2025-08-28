// Home服务专用API客户端
// 演示如何在微服务中使用共享API工具

// @ts-ignore - Module Federation运行时类型
import { createApiClient } from 'sharedLib/apiClient'
// @ts-ignore - Module Federation运行时类型  
import type { Game, GameStats, User, ApiEndpoints } from 'sharedLib/types'

// Home服务API类
class HomeApiService {
  private apiClient = createApiClient('home')
  
  // 获取精选游戏
  async getFeaturedGames(): Promise<Game[]> {
    try {
      console.log('🏠 Fetching featured games...')
      
      // 模拟API调用 - 实际项目中这里会调用真实API
      await new Promise(resolve => setTimeout(resolve, 500))
      
      // 返回模拟数据
      return [
        {
          id: 'game-001',
          title: '传奇英雄',
          description: '史诗级RPG冒险游戏，探索广阔的奇幻世界',
          thumbnail: '/images/game-001.jpg',
          category: 'adventure',
          rating: 4.8,
          downloads: 1250000,
          size: '2.5GB',
          version: '2.1.0',
          developer: 'Epic Studios',
          tags: ['RPG', '冒险', '多人'],
          screenshots: ['/images/game-001-1.jpg', '/images/game-001-2.jpg'],
          isNew: false,
          isFeatured: true,
          price: 99,
          currency: 'CNY',
          releaseDate: '2024-01-15'
        },
        {
          id: 'game-002', 
          title: '星际战争',
          description: '太空战略游戏，建立你的太空帝国',
          thumbnail: '/images/game-002.jpg',
          category: 'strategy',
          rating: 4.6,
          downloads: 890000,
          size: '1.8GB',
          version: '1.5.2',
          developer: 'Galaxy Games',
          tags: ['策略', '太空', '战争'],
          screenshots: ['/images/game-002-1.jpg', '/images/game-002-2.jpg'],
          isNew: true,
          isFeatured: true,
          price: 79,
          currency: 'CNY',
          releaseDate: '2024-08-01'
        },
        {
          id: 'game-003',
          title: '极速赛车',
          description: '最刺激的赛车竞速体验',
          thumbnail: '/images/game-003.jpg',
          category: 'racing',
          rating: 4.4,
          downloads: 2100000,
          size: '3.2GB',
          version: '3.0.1',
          developer: 'Speed Games',
          tags: ['赛车', '竞速', '多人'],
          screenshots: ['/images/game-003-1.jpg', '/images/game-003-2.jpg'],
          isNew: false,
          isFeatured: true,
          price: 0,
          currency: 'CNY',
          releaseDate: '2023-12-10'
        }
      ]
    } catch (error) {
      console.error('❌ Failed to fetch featured games:', error)
      throw error
    }
  }
  
  // 获取游戏统计数据
  async getGameStats(): Promise<GameStats> {
    try {
      console.log('📊 Fetching game statistics...')
      
      // 模拟API调用延迟
      await new Promise(resolve => setTimeout(resolve, 300))
      
      // 返回模拟统计数据
      const stats: GameStats = {
        totalGames: 1250,
        totalPlayers: 589432,
        activeGames: 89,
        topGame: {
          id: 'game-001',
          title: '传奇英雄',
          players: 45678
        },
        dailyStats: [
          { date: '2024-08-23', players: 523456, gameTime: 2340000 },
          { date: '2024-08-24', players: 534567, gameTime: 2450000 },
          { date: '2024-08-25', players: 545678, gameTime: 2560000 },
          { date: '2024-08-26', players: 567890, gameTime: 2670000 },
          { date: '2024-08-27', players: 589432, gameTime: 2780000 }
        ]
      }
      
      return stats
    } catch (error) {
      console.error('❌ Failed to fetch game stats:', error)
      throw error
    }
  }
  
  // 获取用户推荐游戏
  async getRecommendedGames(userId: string): Promise<Game[]> {
    try {
      console.log(`🎯 Fetching recommended games for user: ${userId}`)
      
      // 使用共享API客户端进行实际调用 (这里是示例)
      // const games = await this.apiClient.get<Game[]>(`/recommendations/${userId}`)
      
      // 模拟延迟
      await new Promise(resolve => setTimeout(resolve, 400))
      
      // 返回模拟推荐数据 (基于用户偏好的简化算法)
      return [
        {
          id: 'game-004',
          title: '魔法学院',
          description: '学习魔法，成为最强法师',
          thumbnail: '/images/game-004.jpg',
          category: 'adventure',
          rating: 4.7,
          downloads: 756000,
          size: '2.1GB',
          version: '1.8.0',
          developer: 'Magic Studios',
          tags: ['魔法', '学院', 'RPG'],
          screenshots: [],
          isNew: true,
          isFeatured: false,
          price: 59,
          currency: 'CNY',
          releaseDate: '2024-07-20'
        }
      ]
    } catch (error) {
      console.error('❌ Failed to fetch recommended games:', error)
      return [] // 推荐失败时返回空数组
    }
  }
  
  // 搜索游戏
  async searchGames(query: string, filters?: any): Promise<Game[]> {
    try {
      console.log(`🔍 Searching games: "${query}"`)
      
      // 实际API调用示例
      // const searchParams = new URLSearchParams({
      //   q: query,
      //   ...filters
      // })
      // return await this.apiClient.get<Game[]>(`/search?${searchParams}`)
      
      // 模拟搜索延迟
      await new Promise(resolve => setTimeout(resolve, 600))
      
      // 简单的模拟搜索结果
      const allGames = await this.getFeaturedGames()
      return allGames.filter(game => 
        game.title.toLowerCase().includes(query.toLowerCase()) ||
        game.description.toLowerCase().includes(query.toLowerCase()) ||
        game.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
      )
    } catch (error) {
      console.error('❌ Search failed:', error)
      return []
    }
  }
  
  // 健康检查
  async checkHealth(): Promise<boolean> {
    try {
      return await this.apiClient.healthCheck()
    } catch (error) {
      console.error('❌ Home service health check failed:', error)
      return false
    }
  }
  
  // 获取服务状态
  getServiceInfo() {
    return {
      serviceName: 'Home Service',
      version: '1.0.0',
      apiEndpoint: this.apiClient.constructor.name,
      features: [
        'Featured Games',
        'Game Statistics', 
        'User Recommendations',
        'Game Search',
        'Health Monitoring'
      ]
    }
  }
}

// 创建并导出服务实例
export const homeApi = new HomeApiService()

// 导出类型用于其他组件
export type { Game, GameStats } from 'gaming_container/types'

// React Hook 示例 - 在实际项目中可以使用React Query
export const useHomeApiData = () => {
  return {
    getFeaturedGames: () => homeApi.getFeaturedGames(),
    getGameStats: () => homeApi.getGameStats(), 
    searchGames: (query: string) => homeApi.searchGames(query),
    checkHealth: () => homeApi.checkHealth(),
    serviceInfo: homeApi.getServiceInfo()
  }
}