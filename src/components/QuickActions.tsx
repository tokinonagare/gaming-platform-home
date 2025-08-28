import React from 'react'

interface QuickAction {
  id: string
  name: string
  icon: string
  action: () => void
}

export const QuickActions: React.FC = () => {
  const quickActions: QuickAction[] = [
    {
      id: 'browse-games',
      name: '浏览游戏',
      icon: '🎮',
      action: () => console.log('🎮 Navigating to games...')
    },
    {
      id: 'view-profile',
      name: '个人资料',
      icon: '👤',
      action: () => console.log('👤 Navigating to profile...')
    },
    {
      id: 'leaderboard',
      name: '排行榜',
      icon: '🏆',
      action: () => console.log('🏆 Viewing leaderboard...')
    },
    {
      id: 'achievements',
      name: '成就系统',
      icon: '🏅',
      action: () => console.log('🏅 Viewing achievements...')
    },
    {
      id: 'friends',
      name: '好友列表',
      icon: '👥',
      action: () => console.log('👥 Viewing friends...')
    },
    {
      id: 'settings',
      name: '游戏设置',
      icon: '⚙️',
      action: () => console.log('⚙️ Opening settings...')
    }
  ]

  return (
    <section className="quick-actions">
      <h3>⚡ 快速操作</h3>
      <div className="actions-grid">
        {quickActions.map((action) => (
          <button
            key={action.id}
            className="action-button"
            onClick={action.action}
          >
            <span className="action-icon">{action.icon}</span>
            {action.name}
          </button>
        ))}
      </div>
    </section>
  )
}