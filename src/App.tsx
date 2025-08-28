import React, { useEffect, useState } from 'react'
import { HeroBanner } from './components/HeroBanner'
import { FeaturedGames } from './components/FeaturedGames'
import { QuickActions } from './components/QuickActions'
import { GameStats } from './components/GameStats'
import './App.css'

const App: React.FC = () => {
  const [loadTime, setLoadTime] = useState<number>(0)
  
  useEffect(() => {
    // 记录Home服务加载时间
    const startTime = performance.now()
    
    // 模拟异步加载
    requestAnimationFrame(() => {
      const endTime = performance.now()
      setLoadTime(endTime - startTime)
      
      console.log(`🏠 Home Service loaded in ${(endTime - startTime).toFixed(2)}ms`)
    })
  }, [])

  return (
    <div className="home-app">
      <div className="home-header">
        <h1>🏠 游戏首页服务</h1>
        <div className="performance-badge">
          Rsbuild ⚡ {loadTime.toFixed(1)}ms
        </div>
      </div>
      
      <div className="home-content">
        <HeroBanner />
        <FeaturedGames />
        <GameStats />
        <QuickActions />
      </div>
    </div>
  )
}

export default App