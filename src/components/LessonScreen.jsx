import { motion } from 'framer-motion'
import { parseGlossaryText } from './GlossaryTooltip'
import RangeChart from './RangeChart'

export default function LessonScreen({ lesson, onStartQuiz }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.3 }}
      style={{ paddingBottom: '40px' }}
    >
      {/* Chapter label */}
      <div className="mono" style={{ color: 'var(--gold)', marginBottom: '10px', fontSize: '0.68rem' }}>
        {lesson.chapter}
      </div>

      {/* Title */}
      <h1 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(1.6rem, 5vw, 2.2rem)',
        color: 'var(--cream)',
        marginBottom: '12px',
        lineHeight: 1.2,
      }}>
        {lesson.title}
      </h1>

      {/* Concept */}
      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: '1rem',
        color: 'var(--gold-dim)',
        fontStyle: 'italic',
        lineHeight: 1.6,
        marginBottom: '32px',
        background: 'rgba(200, 168, 75, 0.04)',
        borderRadius: 'var(--radius-sm)',
        padding: '12px 16px',
      }}>
        {lesson.concept}
      </p>

      {/* Content sections */}
      {(() => {
        const seenTerms = new Set()
        return lesson.content.map((section, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 + i * 0.07 }}
          className="card"
          style={{ marginBottom: '16px' }}
        >
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.05rem',
            color: 'var(--cream)',
            marginBottom: '12px',
            fontWeight: 600,
          }}>
            {section.heading}
          </h3>

          {section.body && (
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.925rem',
              color: 'var(--text)',
              lineHeight: 1.7,
              marginBottom: (section.table || section.rangeChart) ? '16px' : 0,
            }}>
              {parseGlossaryText(section.body, seenTerms)}
            </p>
          )}

          {section.rangeChart && (
            <RangeChart
              ranges={section.rangeChart.ranges}
              title={section.rangeChart.title}
            />
          )}

          {section.table && (
            <div style={{ marginTop: section.body ? '12px' : 0 }}>
              {section.table.map((row, j) => (
                <div
                  key={j}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '48px 1fr',
                    gap: '0 12px',
                    padding: '10px 0',
                    borderBottom: j < section.table.length - 1
                      ? '1px solid var(--border-subtle)'
                      : 'none',
                    alignItems: 'start',
                  }}
                >
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--gold)',
                    letterSpacing: '0.08em',
                    paddingTop: '1px',
                  }}>
                    {row.pos}
                  </div>
                  <div>
                    {row.full && (
                      <div style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.875rem',
                        color: 'var(--cream)',
                        fontWeight: 500,
                        marginBottom: '2px',
                      }}>
                        {row.full}
                      </div>
                    )}
                    <div style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.8rem',
                      color: 'var(--muted)',
                      lineHeight: 1.5,
                    }}>
                      {row.note}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      ))
      })()}

      {/* Start Quiz CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 + lesson.content.length * 0.07 }}
        style={{ marginTop: '8px' }}
      >
        <button className="btn-primary" onClick={onStartQuiz}>
          Start Quiz →
        </button>
      </motion.div>
    </motion.div>
  )
}
