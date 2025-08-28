import React, { useState, useEffect } from 'react'

interface Stats {
  totalGames: number
  activeUsers: number
  gamesPlayed: number
  achievements: number
}

export const GameStats: React.FC = () => {
  const [stats, setStats] = useState<Stats>({
    totalGames: 0,
    activeUsers: 0,
    gamesPlayed: 0,
    achievements: 0
  })

  useEffect(() => {
    // 模拟数据加载和动画效果
    const targetStats: Stats = {
      totalGames: 150,
      activeUsers: 2847,
      gamesPlayed: 45623,
      achievements: 18934
    }

    const animateNumbers = () => {
      const duration = 2000 // 2秒动画
      const steps = 60
      const stepDuration = duration / steps

      let currentStep = 0
      
      const interval = setInterval(() => {
        currentStep++
        const progress = currentStep / steps
        
        setStats({
          totalGames: Math.floor(targetStats.totalGames * progress),
          activeUsers: Math.floor(targetStats.activeUsers * progress),
          gamesPlayed: Math.floor(targetStats.gamesPlayed * progress),
          achievements: Math.floor(targetStats.achievements * progress)
        })
        
        if (currentStep >= steps) {
          clearInterval(interval)
          setStats(targetStats)
        }
      }, stepDuration)
    }

    // 延迟开始动画
    setTimeout(animateNumbers, 500)
  }, [])

  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M'
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K'
    }
    return num.toLocaleString()
  }

  return (
    <section className="game-stats">
      <h3>📊 平台数据</h3>
      <div className="stats-grid">
        <div className="stat-item">
          <span className="stat-number">{stats.totalGames}</span>
          <span className="stat-label">游戏总数</span>
        </div>
        
        <div className="stat-item">
          <span className="stat-number">{formatNumber(stats.activeUsers)}</span>
          <span className="stat-label">活跃用户</span>
        </div>
        
        <div className="stat-item">
          <span className="stat-number">{formatNumber(stats.gamesPlayed)}</span>
          <span className="stat-label">游戏次数</span>
        </div>
        
        <div className="stat-item">
          <span className="stat-number">{formatNumber(stats.achievements)}</span>
          <span className="stat-label">解锁成就</span>
        </div>
      </div>
    </section>
  )
}