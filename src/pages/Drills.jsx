import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import NavBar from '../components/NavBar'

const DRILL_DURATION = 15

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function generateDrill() {
  const type = randomInt(0, 3)

  if (type === 0) {
    const pot = randomInt(1, 10) * 10
    const bet = randomInt(1, 8) * 10
    const correct = Math.round((bet / (bet + pot)) * 100)
    return {
      type: 'pot-odds',
      question: `Pot is $${pot}. Villain bets $${bet}. What are your pot odds?`,
      answer: correct,
      tolerance: 2,
      unit: '%',
      hint: `Risk ÷ (Risk + Reward) = ${bet} ÷ ${bet + pot}`,
    }
  }

  if (type === 1) {
    const outs = randomInt(2, 15)
    const street = Math.random() > 0.5 ? 'flop' : 'turn'
    const multiplier = street === 'flop' ? 4 : 2
    const correct = outs * multiplier
    return {
      type: 'rule-2-4',
      question: `You have ${outs} outs on the ${street}. What is your approximate equity?`,
      answer: correct,
      tolerance: 2,
      unit: '%',
      hint: `Rule of ${multiplier}: ${outs} × ${multiplier} = ${correct}%`,
    }
  }

  if (type === 2) {
    const pot = randomInt(1, 8) * 20
    const bet = randomInt(1, 6) * 20
    const correct = Math.round((bet / (bet + pot)) * 100)
    return {
      type: 'alpha',
      question: `You bet $${bet} into a $${pot} pot. What % of the time does villain need to fold for your bluff to break even?`,
      answer: correct,
      tolerance: 2,
      unit: '%',
      hint: `Alpha = Bet ÷ (Bet + Pot) = ${bet} ÷ ${bet + pot}`,
    }
  }

  const pot = randomInt(1, 8) * 20
  const bet = randomInt(1, 6) * 20
  const alpha = Math.round((bet / (bet + pot)) * 100)
  const correct = 100 - alpha
  return {
    type: 'mdf',
    question: `Villain bets $${bet} into a $${pot} pot. What is the Minimum Defense Frequency?`,
    answer: correct,
    tolerance: 2,
    unit: '%',
    hint: `MDF = 1 − Alpha = 1 − (${bet} ÷ ${bet + pot}) = ${correct}%`,
  }
}

const FORMULAS = [
  { label: 'Pot Odds',     desc: 'Risk ÷ (Risk + Reward)' },
  { label: 'Rule of 2 & 4', desc: 'Outs × 4 on flop, × 2 on turn' },
  { label: 'Alpha',        desc: 'Bet ÷ (Bet + Pot) — break-even fold %' },
  { label: 'MDF',          desc: '1 − Alpha — minimum you must defend' },
]

export default function Drills() {
  const navigate = useNavigate()
  const [phase, setPhase] = useState('intro')
  const [drills, setDrills] = useState(() => Array.from({ length: 10 }, generateDrill))
  const [drillResults, setDrillResults] = useState([])
  const [current, setCurrent] = useState(0)
  const [input, setInput] = useState('')
  const [answered, setAnswered] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(DRILL_DURATION)
  const [timedOut, setTimedOut] = useState(false)
  const [paused, setPaused] = useState(false)
  const inputRef = useRef(null)
  const timerRef = useRef(null)

  useEffect(() => {
    if (phase !== 'drilling' || answered || paused) return
    timerRef.current = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          clearInterval(timerRef.current)
          setTimedOut(true)
          setAnswered(true)
          setIsCorrect(false)
          return 0
        }
        return t - 1
      })
    }, 1000)
    return () => clearInterval(timerRef.current)
  }, [phase, current, answered, paused])

  useEffect(() => {
    if (phase === 'drilling' && !answered) {
      inputRef.current?.focus()
    }
  }, [phase, current, answered])

  function startDrilling() {
    const newDrills = Array.from({ length: 10 }, generateDrill)
    setDrills(newDrills)
    setDrillResults([])
    setCurrent(0)
    setScore(0)
    setInput('')
    setAnswered(false)
    setIsCorrect(false)
    setTimedOut(false)
    setPaused(false)
    setTimeLeft(DRILL_DURATION)
    setPhase('drilling')
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (answered) return
    const val = parseInt(input, 10)
    const drill = drills[current]
    const correct = Math.abs(val - drill.answer) <= drill.tolerance
    clearInterval(timerRef.current)
    setIsCorrect(correct)
    setAnswered(true)
    if (correct) setScore(s => s + 1)
  }

  function handleNext() {
    const drill = drills[current]
    const val = parseInt(input, 10)
    const result = {
      question: drill.question,
      type: drill.type,
      answer: drill.answer,
      userAnswer: timedOut ? null : val,
      correct: isCorrect,
      timedOut,
      hint: drill.hint,
    }
    setDrillResults(r => [...r, result])

    if (current + 1 >= drills.length) {
      setPhase('review')
      return
    }
    setTimeLeft(DRILL_DURATION)
    setCurrent(c => c + 1)
    setInput('')
    setAnswered(false)
    setIsCorrect(false)
    setTimedOut(false)
    setPaused(false)
  }

  const drill = drills[current]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100dvh' }}>
      <div className="page">
        <NavBar chapter="Drills · Math Training" />

        {/* ── Intro ── */}
        {phase === 'intro' && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ paddingTop: 'var(--space-xl)' }}
          >
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 7vw, 2.5rem)',
              color: 'var(--cream)',
              lineHeight: 1.1,
              marginBottom: 'var(--space-md)',
            }}>
              Math Drills
            </h1>
            <p style={{
              color: 'var(--text)',
              fontSize: '0.925rem',
              lineHeight: 1.65,
              maxWidth: '42ch',
              marginBottom: 'var(--space-3xl)',
            }}>
              10 questions. 15 seconds each. The four formulas every player must know cold.
            </p>

            <div style={{
              borderTop: '1px solid var(--border-subtle)',
              marginBottom: 'var(--space-3xl)',
            }}>
              {FORMULAS.map(item => (
                <div
                  key={item.label}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    gap: 'var(--space-lg)',
                    padding: 'var(--space-md) 0',
                    borderBottom: '1px solid var(--border-subtle)',
                  }}
                >
                  <span className="mono" style={{
                    color: 'var(--gold)',
                    fontSize: '0.62rem',
                    flexShrink: 0,
                  }}>
                    {item.label}
                  </span>
                  <span style={{
                    fontSize: '0.85rem',
                    color: 'var(--muted)',
                    textAlign: 'right',
                  }}>
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>

            <button
              className="btn-primary"
              onClick={startDrilling}
            >
              Start Drills →
            </button>
          </motion.div>
        )}

        {/* ── Drilling ── */}
        {phase === 'drilling' && (
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.18 }}
              style={{ paddingTop: 'var(--space-lg)', paddingBottom: 'var(--space-3xl)' }}
            >
              {/* Progress + timer + pause */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 'var(--space-sm)',
              }}>
                <span className="mono" style={{ color: 'var(--muted)', fontSize: '0.65rem' }}>
                  {current + 1} / {drills.length}
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)' }}>
                  {!answered && (
                    <button
                      onClick={() => setPaused(p => !p)}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.58rem',
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        color: paused ? 'var(--gold)' : 'var(--muted)',
                        transition: 'color 0.15s',
                      }}
                    >
                      {paused ? 'Resume' : 'Pause'}
                    </button>
                  )}
                  <span className="mono" style={{
                    color: paused ? 'var(--muted)' : timeLeft <= 5 ? 'var(--wrong)' : 'var(--gold)',
                    fontSize: '0.75rem',
                    transition: 'color 0.3s',
                  }}>
                    {timeLeft}s
                  </span>
                </div>
              </div>

              {/* Timer bar */}
              <div style={{
                height: '2px',
                background: 'rgba(255,255,255,0.06)',
                borderRadius: '2px',
                marginBottom: 'var(--space-2xl)',
                overflow: 'hidden',
              }}>
                <motion.div
                  style={{
                    height: '100%',
                    width: '100%',
                    background: paused ? 'var(--muted)' : timeLeft <= 5 ? 'var(--wrong)' : 'var(--gold)',
                    borderRadius: '2px',
                    transformOrigin: 'left',
                  }}
                  animate={{ scaleX: timeLeft / DRILL_DURATION }}
                  transition={{ duration: paused ? 0 : 1, ease: 'linear' }}
                />
              </div>

              {/* Question */}
              <div style={{
                padding: 'var(--space-xl)',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                marginBottom: 'var(--space-xl)',
              }}>
                <div className="mono" style={{
                  color: 'var(--gold)',
                  fontSize: '0.62rem',
                  marginBottom: 'var(--space-md)',
                }}>
                  {drill.type.replace(/-/g, ' ')}
                </div>
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.1rem',
                  color: 'var(--cream)',
                  lineHeight: 1.55,
                }}>
                  {drill.question}
                </p>
              </div>

              {/* Input */}
              <form onSubmit={handleSubmit} style={{ marginBottom: 'var(--space-md)' }}>
                <div style={{
                  display: 'flex',
                  gap: 'var(--space-sm)',
                  alignItems: 'stretch',
                }}>
                  <div style={{
                    flex: 1,
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                  }}>
                    <input
                      ref={inputRef}
                      type="number"
                      value={input}
                      onChange={e => setInput(e.target.value)}
                      disabled={answered || paused}
                      placeholder="0"
                      style={{
                        width: '100%',
                        background: 'var(--bg-card)',
                        border: `1px solid ${
                          answered
                            ? isCorrect ? 'var(--correct-border)' : 'var(--wrong-border)'
                            : 'var(--border)'
                        }`,
                        borderRadius: 'var(--radius-sm)',
                        padding: '14px 40px 14px 16px',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '1.25rem',
                        color: answered
                          ? isCorrect ? 'var(--correct)' : 'var(--wrong)'
                          : 'var(--cream)',
                        outline: 'none',
                        textAlign: 'center',
                        transition: 'border-color 0.15s, color 0.15s',
                      }}
                    />
                    <span style={{
                      position: 'absolute',
                      right: '14px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.85rem',
                      color: 'var(--muted)',
                      pointerEvents: 'none',
                    }}>
                      %
                    </span>
                  </div>
                  {!answered && !paused && (
                    <button
                      type="submit"
                      style={{
                        padding: '14px var(--space-lg)',
                        background: 'var(--gold)',
                        color: 'var(--bg)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        letterSpacing: '0.06em',
                        borderRadius: 'var(--radius-sm)',
                        fontWeight: 500,
                        transition: 'background 0.15s',
                        flexShrink: 0,
                        textTransform: 'uppercase',
                      }}
                      onMouseEnter={e => e.currentTarget.style.background = 'var(--gold-light)'}
                      onMouseLeave={e => e.currentTarget.style.background = 'var(--gold)'}
                    >
                      Check
                    </button>
                  )}
                </div>
              </form>

              {/* Feedback */}
              <AnimatePresence>
                {answered && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      padding: 'var(--space-md) var(--space-lg)',
                      background: (timedOut || !isCorrect) ? 'var(--wrong-bg)' : 'var(--correct-bg)',
                      border: `1px solid ${(timedOut || !isCorrect) ? 'var(--wrong-border)' : 'var(--correct-border)'}`,
                      borderRadius: 'var(--radius-sm)',
                      marginBottom: 'var(--space-lg)',
                    }}
                  >
                    <div className="mono" style={{
                      color: (timedOut || !isCorrect) ? 'var(--wrong)' : 'var(--correct)',
                      fontSize: '0.65rem',
                      marginBottom: 'var(--space-xs)',
                    }}>
                      {timedOut ? '⏱ Time' : isCorrect ? '✓ Correct' : '✗ Incorrect'}
                    </div>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text)', lineHeight: 1.5 }}>
                      Answer: <strong style={{ color: 'var(--cream)', fontFamily: 'var(--font-mono)' }}>{drill.answer}%</strong>
                      {' · '}{drill.hint}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {answered && (
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <button className="btn-primary" onClick={handleNext}>
                    {current + 1 >= drills.length ? 'Review →' : 'Next →'}
                  </button>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        )}

        {/* ── Review ── */}
        {phase === 'review' && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ paddingTop: 'var(--space-xl)', paddingBottom: 'var(--space-4xl)' }}
          >
            <div className="mono" style={{
              color: 'var(--gold)',
              fontSize: '0.62rem',
              marginBottom: 'var(--space-md)',
            }}>
              Review
            </div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.6rem',
              color: 'var(--cream)',
              lineHeight: 1.1,
              marginBottom: 'var(--space-2xl)',
            }}>
              {score} / 10 correct
            </h2>

            <div style={{
              borderTop: '1px solid var(--border-subtle)',
              marginBottom: 'var(--space-2xl)',
            }}>
              {drillResults.map((result, i) => (
                <div
                  key={i}
                  style={{
                    padding: 'var(--space-md) 0',
                    borderBottom: '1px solid var(--border-subtle)',
                  }}
                >
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: 'var(--space-md)',
                    marginBottom: 'var(--space-xs)',
                  }}>
                    <div className="mono" style={{
                      color: result.correct ? 'var(--correct)' : 'var(--wrong)',
                      fontSize: '0.58rem',
                      flexShrink: 0,
                    }}>
                      {i + 1}. {result.timedOut ? '⏱ Time' : result.correct ? '✓' : '✗'}
                    </div>
                    <div style={{ display: 'flex', gap: 'var(--space-sm)', alignItems: 'center' }}>
                      {!result.correct && result.userAnswer !== null && (
                        <span style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.75rem',
                          color: 'var(--wrong)',
                          textDecoration: 'line-through',
                          opacity: 0.7,
                        }}>
                          {result.userAnswer}%
                        </span>
                      )}
                      <span style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        color: 'var(--cream)',
                      }}>
                        {result.answer}%
                      </span>
                    </div>
                  </div>
                  <p style={{
                    fontSize: '0.82rem',
                    color: 'var(--muted)',
                    lineHeight: 1.5,
                    marginBottom: '4px',
                  }}>
                    {result.question}
                  </p>
                  <p style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.62rem',
                    color: 'var(--gold)',
                    opacity: 0.7,
                  }}>
                    {result.hint}
                  </p>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
              <button className="btn-primary" onClick={() => setPhase('summary')}>
                See Score →
              </button>
              <button className="btn-secondary" onClick={startDrilling}>
                Drill Again
              </button>
            </div>
          </motion.div>
        )}

        {/* ── Summary ── */}
        {phase === 'summary' && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ paddingTop: 'var(--space-3xl)', paddingBottom: 'var(--space-4xl)' }}
          >
            <div className="mono" style={{
              color: 'var(--gold)',
              fontSize: '0.62rem',
              marginBottom: 'var(--space-lg)',
            }}>
              {score >= 9 ? '♠ Sharp' : score >= 7 ? '♦ Solid' : '♣ Keep drilling'}
            </div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 10vw, 3.5rem)',
              color: 'var(--cream)',
              lineHeight: 1,
              marginBottom: 'var(--space-lg)',
            }}>
              {score} / 10
            </h2>
            <p style={{
              color: 'var(--muted)',
              fontSize: '0.9rem',
              lineHeight: 1.65,
              maxWidth: '36ch',
              marginBottom: 'var(--space-3xl)',
            }}>
              {score === 10 ? 'Perfect. The math is automatic.' :
               score >= 7  ? 'Strong session. Keep the reps up.' :
               'The math takes reps. Come back tomorrow.'}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
              <button className="btn-primary" onClick={() => navigate('/')}>
                Back to Lessons →
              </button>
              <button className="btn-secondary" onClick={startDrilling}>
                Drill Again
              </button>
            </div>
          </motion.div>
        )}

      </div>
    </div>
  )
}
