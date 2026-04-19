import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProgressBar from './ProgressBar'

const LABELS = ['A', 'B', 'C', 'D']

export default function QuizScreen({ questions, onComplete }) {
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const [answered, setAnswered] = useState(false)
  const [score, setScore] = useState(0)
  const [results, setResults] = useState([])

  const q = questions[current]
  const isCorrect = selected === q.correct

  function handleSelect(idx) {
    if (answered) return
    setSelected(idx)
    setAnswered(true)
    const correct = idx === q.correct
    if (correct) setScore(s => s + 1)
    setResults(r => [...r, { questionIdx: current, selected: idx, correct }])
  }

  function handleNext() {
    if (current + 1 >= questions.length) {
      onComplete(score + (isCorrect ? 1 : 0) - (isCorrect ? 1 : 0), results)
      // Use updated score
      onComplete(
        results.filter(r => r.correct).length + (isCorrect ? 0 : 0),
        results
      )
      return
    }
    setCurrent(c => c + 1)
    setSelected(null)
    setAnswered(false)
  }

  const finalScore = results.filter(r => r.correct).length + (answered && isCorrect ? 0 : 0)

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.3 }}
      style={{ paddingBottom: '40px' }}
    >
      {/* Progress */}
      <div style={{ marginBottom: '20px' }}>
        <ProgressBar current={current} total={questions.length} />
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '8px',
        }}>
          <span className="mono" style={{ color: 'var(--muted)', fontSize: '0.65rem' }}>
            Question {current + 1} of {questions.length}
          </span>
          <span className="mono" style={{ color: 'var(--gold)', fontSize: '0.65rem' }}>
            {score} correct
          </span>
        </div>
      </div>

      {/* Question card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.25 }}
        >
          <div className="card" style={{ marginBottom: '16px' }}>
            <p style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.05rem',
              color: 'var(--cream)',
              lineHeight: 1.5,
            }}>
              {q.question}
            </p>
          </div>

          {/* Options */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '16px' }}>
            {q.options.map((opt, i) => {
              let bg = 'var(--bg-card)'
              let border = 'var(--border)'
              let color = 'var(--text)'
              let labelColor = 'var(--muted)'

              if (answered) {
                if (i === q.correct) {
                  bg = 'var(--correct-bg)'
                  border = 'var(--correct-border)'
                  color = 'var(--correct)'
                  labelColor = 'var(--correct)'
                } else if (i === selected && !isCorrect) {
                  bg = 'var(--wrong-bg)'
                  border = 'var(--wrong-border)'
                  color = 'var(--wrong)'
                  labelColor = 'var(--wrong)'
                }
              } else if (selected === i) {
                border = 'var(--gold)'
              }

              return (
                <button
                  key={i}
                  onClick={() => handleSelect(i)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '14px 16px',
                    background: bg,
                    border: `1px solid ${border}`,
                    borderRadius: 'var(--radius-sm)',
                    cursor: answered ? 'default' : 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.15s',
                    width: '100%',
                  }}
                >
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    color: labelColor,
                    letterSpacing: '0.06em',
                    flexShrink: 0,
                    width: '16px',
                    transition: 'color 0.15s',
                  }}>
                    {LABELS[i]}
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9rem',
                    color,
                    lineHeight: 1.4,
                    transition: 'color 0.15s',
                  }}>
                    {opt}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Explanation */}
          <AnimatePresence>
            {answered && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                style={{
                  padding: '14px 16px',
                  background: isCorrect ? 'var(--correct-bg)' : 'var(--wrong-bg)',
                  border: `1px solid ${isCorrect ? 'var(--correct-border)' : 'var(--wrong-border)'}`,
                  borderRadius: 'var(--radius-sm)',
                  marginBottom: '16px',
                }}
              >
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: isCorrect ? 'var(--correct)' : 'var(--wrong)',
                  marginBottom: '6px',
                }}>
                  {isCorrect ? '✓ Correct' : '✗ Incorrect'}
                </div>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.875rem',
                  color: 'var(--text)',
                  lineHeight: 1.6,
                }}>
                  {q.explanation}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Next button */}
          {answered && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="btn-primary"
              onClick={handleNext}
            >
              {current + 1 >= questions.length ? 'See Results →' : 'Next Question →'}
            </motion.button>
          )}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  )
}
