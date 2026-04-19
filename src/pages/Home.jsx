import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { CURRICULUM } from '../data/curriculum'
import { useAuth } from '../context/AuthContext'
import { useProgress } from '../context/ProgressContext'

export default function Home() {
  const navigate = useNavigate()
  const { logout, isMaster } = useAuth()
  const { completedLessons, isUnlocked, progressLoading } = useProgress()
  const [expanded, setExpanded] = useState({ ch0: true })

  const firstLesson = CURRICULUM[0]?.lessons[0]

  // CTA navigates to the first uncompleted lesson, or first lesson for master/new users
  const allIds = CURRICULUM.flatMap(ch => ch.lessons.map(l => l.id))
  const ctaLessonId = isMaster
    ? firstLesson?.id
    : (allIds.find(id => !completedLessons.has(id)) ?? firstLesson?.id)
  const hasProgress = completedLessons.size > 0 && !isMaster

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100dvh' }}>
      <div className="page">

        {/* ── Hero zone ── */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          style={{
            paddingTop: 'var(--space-3xl)',
            paddingBottom: 'var(--space-3xl)',
          }}
        >
          {/* Top row: brand + sign out */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 'var(--space-lg)',
          }}>
            <div className="mono" style={{ color: 'var(--gold)', fontSize: '0.62rem' }}>
              Edge{isMaster && <span style={{ color: 'var(--muted)', marginLeft: '8px' }}>· master</span>}
            </div>
            <button
              onClick={logout}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.62rem',
                letterSpacing: '0.08em',
                color: 'var(--muted)',
                transition: 'color 0.15s',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--text)'}
              onMouseLeave={e => e.target.style.color = 'var(--muted)'}
            >
              Sign out
            </button>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.2rem, 8vw, 3rem)',
            lineHeight: 1.1,
            color: 'var(--cream)',
            fontWeight: 700,
            marginBottom: 'var(--space-lg)',
          }}>
            Poker Theory
          </h1>
          <p style={{
            fontSize: '1rem',
            color: 'var(--text)',
            lineHeight: 1.7,
            maxWidth: '38ch',
          }}>
            You know the rules. This covers what they don't teach you — why you're bleeding chips, and how to stop.
          </p>
        </motion.div>

        {/* ── CTA zone ── */}
        {ctaLessonId && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: 'flex',
              gap: 'var(--space-sm)',
              alignItems: 'center',
              paddingBottom: 'var(--space-3xl)',
            }}
          >
            <button
              className="btn-primary"
              onClick={() => navigate(`/lesson/${ctaLessonId}`)}
              style={{ width: 'auto', padding: '14px 28px', flexShrink: 0 }}
            >
              {hasProgress ? 'Continue →' : 'Start Learning →'}
            </button>
            <button
              onClick={() => navigate('/drills')}
              className="btn-secondary"
              style={{ width: 'auto', padding: '13px 20px', flexShrink: 0 }}
            >
              Drills
            </button>
            <button
              onClick={() => navigate('/glossary')}
              className="btn-secondary"
              style={{ width: 'auto', padding: '13px 20px', flexShrink: 0 }}
            >
              Glossary
            </button>
          </motion.div>
        )}

        {/* ── Curriculum zone ── */}
        <div style={{ flex: 1, paddingBottom: 'var(--space-4xl)' }}>

          <div className="mono" style={{
            color: 'var(--muted)',
            fontSize: '0.62rem',
            marginBottom: 'var(--space-xl)',
            paddingBottom: 'var(--space-md)',
            borderBottom: '1px solid var(--border-subtle)',
          }}>
            Curriculum
          </div>

          {CURRICULUM.map((chapter, ci) => (
            <motion.div
              key={chapter.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22 + ci * 0.08, ease: [0.16, 1, 0.3, 1] }}
              style={{ marginBottom: 'var(--space-sm)' }}
            >
              {/* Chapter header */}
              <button
                onClick={() => setExpanded(e => ({ ...e, [chapter.id]: !e[chapter.id] }))}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: 'var(--space-md)',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: expanded[chapter.id]
                    ? 'var(--radius) var(--radius) 0 0'
                    : 'var(--radius)',
                  cursor: 'pointer',
                  transition: 'background 0.15s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--bg-card-hover)'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--bg-card)'}
              >
                <div style={{ textAlign: 'left' }}>
                  <div className="mono" style={{
                    color: 'var(--gold)',
                    fontSize: '0.62rem',
                    marginBottom: 'var(--space-xs)',
                  }}>
                    Chapter {ci + 1}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1rem',
                    color: 'var(--cream)',
                    fontWeight: 600,
                  }}>
                    {chapter.title}
                  </div>
                </div>
                <div style={{
                  color: 'var(--muted)',
                  fontSize: '0.75rem',
                  flexShrink: 0,
                  transform: expanded[chapter.id] ? 'rotate(180deg)' : 'none',
                  transition: 'transform 0.2s ease',
                }}>
                  ▾
                </div>
              </button>

              {/* Lessons */}
              <AnimatePresence>
                {expanded[chapter.id] && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      overflow: 'hidden',
                      border: '1px solid var(--border)',
                      borderTop: 'none',
                      borderRadius: '0 0 var(--radius) var(--radius)',
                    }}
                  >
                    {chapter.lessons.map((lesson, li) => {
                      const unlocked = progressLoading ? false : isUnlocked(lesson.id)
                      const completed = completedLessons.has(lesson.id)

                      return (
                        <button
                          key={lesson.id}
                          onClick={() => unlocked && navigate(`/lesson/${lesson.id}`)}
                          style={{
                            width: '100%',
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: 'var(--space-md)',
                            padding: 'var(--space-md)',
                            background: 'transparent',
                            borderTop: li > 0 ? '1px solid var(--border-subtle)' : 'none',
                            cursor: unlocked ? 'pointer' : 'default',
                            textAlign: 'left',
                            transition: 'background 0.15s',
                            opacity: unlocked ? 1 : 0.35,
                          }}
                          onMouseEnter={e => {
                            if (unlocked) e.currentTarget.style.background = 'var(--bg-card-hover)'
                          }}
                          onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                        >
                          {/* Lesson number */}
                          <div className="mono" style={{
                            color: 'var(--muted)',
                            fontSize: '0.6rem',
                            paddingTop: '3px',
                            flexShrink: 0,
                            width: '1.25rem',
                            textAlign: 'right',
                          }}>
                            {li + 1}
                          </div>

                          <div style={{ flex: 1 }}>
                            <div style={{
                              fontFamily: 'var(--font-body)',
                              fontSize: '0.9rem',
                              color: unlocked ? 'var(--text)' : 'var(--muted)',
                              fontWeight: 500,
                              lineHeight: 1.4,
                              marginBottom: 'var(--space-xs)',
                            }}>
                              {lesson.title}
                            </div>
                            <div style={{
                              fontFamily: 'var(--font-body)',
                              fontSize: '0.78rem',
                              color: 'var(--muted)',
                              lineHeight: 1.5,
                            }}>
                              {lesson.concept.length > 80
                                ? lesson.concept.slice(0, 77) + '…'
                                : lesson.concept}
                            </div>
                          </div>

                          {/* Status indicator */}
                          <div style={{
                            color: completed ? 'var(--gold)' : 'var(--muted)',
                            fontSize: completed ? '0.7rem' : '0.75rem',
                            flexShrink: 0,
                            paddingTop: '2px',
                            opacity: unlocked ? 1 : 0,
                          }}>
                            {completed ? '✓' : '→'}
                          </div>
                        </button>
                      )
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  )
}
