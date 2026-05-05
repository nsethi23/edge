import { useLocation, useNavigate } from 'react-router-dom'

const NAV_ITEMS = [
  { label: 'Lessons', path: '/' },
  { label: 'Drills', path: '/drills' },
  { label: 'Gloss', path: '/glossary' },
  { label: 'Results', path: '/results' },
  { label: 'Ranges', path: '/ranges' },
  { label: 'Coach', path: '/coach' },
]

export default function BottomNav() {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <nav
      aria-label="Main navigation"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        height: 'var(--bottom-nav-h)',
        background: 'rgba(11, 21, 11, 0.96)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderTop: '1px solid var(--border-subtle)',
        display: 'flex',
        alignItems: 'stretch',
        zIndex: 200,
      }}
    >
      {NAV_ITEMS.map(item => {
        const isActive = item.path === '/'
          ? location.pathname === '/'
          : location.pathname.startsWith(item.path)
        return (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            aria-current={isActive ? 'page' : undefined}
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px 2px',
              position: 'relative',
              minWidth: 0,
            }}
          >
            {isActive && (
              <span style={{
                position: 'absolute',
                top: 0,
                left: '25%',
                right: '25%',
                height: '2px',
                background: 'var(--gold)',
                borderRadius: '0 0 2px 2px',
              }} />
            )}
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.5rem',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                color: isActive ? 'var(--gold)' : 'var(--muted)',
                lineHeight: 1,
                transition: 'color 0.15s',
                whiteSpace: 'nowrap',
              }}
            >
              {item.label}
            </span>
          </button>
        )
      })}
    </nav>
  )
}
