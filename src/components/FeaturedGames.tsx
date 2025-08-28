import React from 'react'

interface Game {
  id: string
  name: string
  icon: string
  description: string
}

const featuredGames: Game[] = [
  {
    id: 'rpg-adventure',
    name: 'RPG 冒险',
    icon: '⚔️',
    description: '史诗级角色扮演游戏，探索神秘世界'
  },
  {
    id: 'puzzle-master',
    name: '益智大师',
    icon: '🧩',
    description: '挑战智力极限，解锁创意思维'
  },
  {
    id: 'racing-fury',
    name: '极速狂飙',
    icon: '🏎️',
    description: '高速竞技赛车，体验肾上腺素飙升'
  },
  {
    id: 'space-explorer',
    name: '太空探索',
    icon: '🚀',
    description: '征服星辰大海，建立太空帝国'
  }
]

export const FeaturedGames: React.FC = () => {
  const handleGameClick = (game: Game) => {
    console.log(`🎮 Selected game: ${game.name}`)
    // 这里可以触发路由到游戏详情页或直接启动游戏
  }

  return (
    <section className="featured-games">
      <h3>🔥 精选游戏</h3>
      <div className="games-grid">
        {featuredGames.map((game) => (
          <div 
            key={game.id}
            className="game-card"
            onClick={() => handleGameClick(game)}
          >
            <span className="game-icon">{game.icon}</span>
            <h4>{game.name}</h4>
            <p>{game.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}