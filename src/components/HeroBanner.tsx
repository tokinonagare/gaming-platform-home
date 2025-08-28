import React from 'react'

export const HeroBanner: React.FC = () => {
  return (
    <section className="hero-banner">
      <div className="hero-content">
        <h2>🎮 欢迎来到游戏世界</h2>
        <p>探索无限可能，体验精彩游戏！基于 Rsbuild + Module Federation 构建的现代化游戏平台</p>
        <button className="hero-cta" onClick={() => console.log('🚀 开始游戏!')}>
          开始游戏
        </button>
      </div>
    </section>
  )
}