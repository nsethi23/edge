import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function NavBar({ chapter, lesson, phase, total, current }) {
  const navigate = useNavigate()
  const { logout } = useAuth()

  return (
    <nav style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 0 12px',
      borderBottom: '1px solid var(--border-subtle)',
      marginBottom: '24px',
      gap: '12px',
    }}>
      <button
        onClick={() => navigate('/')}
        style={{
          color: 'var(--muted)',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.7rem',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          padding: '4px 0',
          flexShrink: 0,
          transition: 'color 0.15s',
        }}
        onMouseEnter={e => e.target.style.color = 'var(--gold)'}
        onMouseLeave={e => e.target.style.color = 'var(--muted)'}
      >
        ← Home
      </button>

      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.65rem',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: 'var(--gold)',
        textAlign: 'center',
        flex: 1,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      }}>
        {chapter}
      </div>

      {/* Phase dots during a lesson; sign-out elsewhere (e.g. Drills) */}
      {phase && total > 0 ? (
        <div style={{
          display: 'flex',
          gap: '5px',
          alignItems: 'center',
          flexShrink: 0,
        }}>
          {Array.from({ length: total }).map((_, i) => (
            <div
              key={i}
              style={{
                width: i < current ? '6px' : '5px',
                height: i < current ? '6px' : '5px',
                borderRadius: '50%',
                background: i < current ? 'var(--gold)' : 'rgba(255,255,255,0.15)',
                transition: 'all 0.2s',
              }}
            />
          ))}
        </div>
      ) : (
        <button
          onClick={logout}
          style={{
            color: 'var(--muted)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.62rem',
            letterSpacing: '0.06em',
            flexShrink: 0,
            transition: 'color 0.15s',
          }}
          onMouseEnter={e => e.target.style.color = 'var(--text)'}
          onMouseLeave={e => e.target.style.color = 'var(--muted)'}
        >
          Sign out
        </button>
      )}
    </nav>
  )
}
