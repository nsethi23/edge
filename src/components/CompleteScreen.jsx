import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const MESSAGES = [
  { threshold: 1.0, title: 'Perfect Hand', sub: 'Flawless. Every concept locked in.' },
  { threshold: 0.75, title: 'Close', sub: 'One or two slipped through. Retry to move on.' },
  { threshold: 0.5,  title: 'Not Yet', sub: 'A few gaps to close. Re-read the lesson and try again.' },
  { threshold: 0,    title: 'Study Up', sub: 'Go back to the lesson — these concepts will click with another pass.' },
]

export default function CompleteScreen({ score, total, lessonTitle, onRetry, onNext }) {
  const pct = total > 0 ? score / total : 0
  const msg = MESSAGES.find(m => pct >= m.threshold) || MESSAGES[MESSAGES.length - 1]

  // SVG ring animation
  const radius = 40
  const circumference = 2 * Math.PI * radius
  const offset = circumference * (1 - pct)

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.35 }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: '40px',
        paddingTop: '16px',
      }}
    >
      {/* Score ring */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1, type: 'spring', stiffness: 200, damping: 18 }}
        style={{ marginBottom: '28px', position: 'relative' }}
      >
        <svg width="110" height="110" viewBox="0 0 110 110">
          {/* Track */}
          <circle
            cx="55" cy="55" r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="6"
          />
          {/* Progress */}
          <motion.circle
            cx="55" cy="55" r={radius}
            fill="none"
            stroke={pct === 1 ? 'var(--correct)' : pct >= 0.75 ? 'var(--gold)' : 'var(--muted)'}
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
            transform="rotate(-90 55 55)"
          />
        </svg>
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <span style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.5rem',
            color: 'var(--cream)',
            lineHeight: 1,
          }}>
            {score}/{total}
          </span>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            color: 'var(--muted)',
            marginTop: '4px',
            letterSpacing: '0.06em',
          }}>
            {Math.round(pct * 100)}%
          </span>
        </div>
      </motion.div>

      {/* Message */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        style={{ textAlign: 'center', marginBottom: '32px' }}
      >
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.6rem',
          color: 'var(--cream)',
          marginBottom: '8px',
        }}>
          {msg.title}
        </h2>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.9rem',
          color: 'var(--muted)',
          maxWidth: '280px',
          margin: '0 auto',
          lineHeight: 1.5,
        }}>
          {msg.sub}
        </p>
        {lessonTitle && (
          <div className="mono" style={{
            color: 'var(--gold)',
            fontSize: '0.65rem',
            marginTop: '12px',
            opacity: 0.7,
          }}>
            {lessonTitle}
          </div>
        )}
      </motion.div>

      {/* Actions */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '12px' }}
      >
        {onNext && (
          <button className="btn-primary" onClick={onNext}>
            Next Lesson →
          </button>
        )}
        <button className="btn-secondary" onClick={onRetry}>
          Retry Quiz
        </button>
      </motion.div>
    </motion.div>
  )
}
