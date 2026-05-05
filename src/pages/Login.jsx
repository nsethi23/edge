import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useAuth } from '../context/AuthContext'

function friendlyError(code) {
  switch (code) {
    case 'auth/user-not-found':
    case 'auth/wrong-password':
    case 'auth/invalid-credential':
      return 'Email or password is incorrect.'
    case 'auth/email-already-in-use':
      return 'An account with this email already exists.'
    case 'auth/weak-password':
      return 'Password must be at least 6 characters.'
    case 'auth/invalid-email':
      return 'Please enter a valid email address.'
    case 'auth/too-many-requests':
      return 'Too many attempts. Try again in a few minutes.'
    default:
      return 'Something went wrong. Try again.'
  }
}

const inputStyle = {
  width: '100%',
  background: 'var(--bg-card)',
  border: '1px solid var(--border)',
  borderRadius: 'var(--radius-sm)',
  padding: '12px 14px',
  fontFamily: 'var(--font-body)',
  fontSize: '0.9rem',
  color: 'var(--cream)',
  outline: 'none',
  boxSizing: 'border-box',
  transition: 'border-color 0.15s',
}

const labelStyle = {
  display: 'block',
  fontFamily: 'var(--font-mono)',
  fontSize: '0.62rem',
  letterSpacing: '0.1em',
  color: 'var(--muted)',
  textTransform: 'uppercase',
  marginBottom: '6px',
}

export default function Login() {
  const [mode, setMode]       = useState('signin')
  const [email, setEmail]     = useState('')
  const [password, setPassword] = useState('')
  const [error, setError]     = useState('')
  const [submitting, setSubmitting] = useState(false)
  const { user, login, signup } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (user) navigate('/', { replace: true })
  }, [user])

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setSubmitting(true)
    try {
      if (mode === 'signin') {
        await login(email, password)
      } else {
        await signup(email, password)
      }
      navigate('/')
    } catch (err) {
      setError(friendlyError(err.code))
    } finally {
      setSubmitting(false)
    }
  }

  function switchMode() {
    setMode(m => m === 'signin' ? 'signup' : 'signin')
    setError('')
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100dvh',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 24px',
    }}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        style={{ width: '100%', maxWidth: '380px' }}
      >
        <div className="mono" style={{
          color: 'var(--gold)',
          fontSize: '0.65rem',
          letterSpacing: '0.15em',
          marginBottom: 'var(--space-2xl)',
        }}>
          EDGE
        </div>

        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.8rem, 6vw, 2.4rem)',
          color: 'var(--cream)',
          lineHeight: 1.15,
          marginBottom: '8px',
        }}>
          {mode === 'signin' ? 'Sign in' : 'Create account'}
        </h1>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.9rem',
          color: 'var(--muted)',
          marginBottom: 'var(--space-2xl)',
          lineHeight: 1.5,
        }}>
          {mode === 'signin'
            ? 'Continue where you left off.'
            : 'Start learning poker theory.'}
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div>
            <label htmlFor="login-email" style={labelStyle}>Email</label>
            <input
              id="login-email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              autoComplete="email"
              style={inputStyle}
              onFocus={e => e.target.style.borderColor = 'var(--gold)'}
              onBlur={e => e.target.style.borderColor = 'var(--border)'}
            />
          </div>

          <div>
            <label htmlFor="login-password" style={labelStyle}>Password</label>
            <input
              id="login-password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              minLength={6}
              autoComplete={mode === 'signin' ? 'current-password' : 'new-password'}
              style={inputStyle}
              onFocus={e => e.target.style.borderColor = 'var(--gold)'}
              onBlur={e => e.target.style.borderColor = 'var(--border)'}
            />
          </div>

          {error && (
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.82rem',
              color: 'var(--wrong)',
              margin: 0,
              lineHeight: 1.4,
            }}>
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="btn-primary"
            style={{ marginTop: '4px', opacity: submitting ? 0.6 : 1 }}
          >
            {submitting ? '···' : mode === 'signin' ? 'Sign In →' : 'Create Account →'}
          </button>
        </form>

        <div style={{ marginTop: 'var(--space-xl)', textAlign: 'center' }}>
          <button
            onClick={switchMode}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.85rem',
              color: 'var(--muted)',
              transition: 'color 0.15s',
            }}
            onMouseEnter={e => e.target.style.color = 'var(--text)'}
            onMouseLeave={e => e.target.style.color = 'var(--muted)'}
          >
            {mode === 'signin'
              ? "Don't have an account? Create one"
              : 'Already have an account? Sign in'}
          </button>
        </div>
      </motion.div>
    </div>
  )
}
