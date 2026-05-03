import { motion } from 'framer-motion'
import NavBar from '../components/NavBar'
import { GLOSSARY } from '../data/glossary'

// ── Terminology categories ───────────────────────────────────────────────────

const CATEGORIES = [
  { label: 'Positions',         keys: ['LJ','HJ','CO','BN','SB','BB','EP','MP','LP','UTG'] },
  { label: 'Position Concepts', keys: ['IP','OOP'] },
  { label: 'Actions',           keys: ['RFI','PFR','VPIP','3bet','4bet','Cbet','DK','Sqz','CC'] },
  { label: 'Hand Types',        keys: ['PP','TPTK','OESD','FD','BDFD','NFD','GS'] },
  { label: 'Math & Metrics',    keys: ['EV','Eq','MDF','Alpha','Combos','PotOdds','Implied','RevImplied'] },
  { label: 'Hand Concepts',     keys: ['Nuts','Air','SDV','NutAdv','Blocker'] },
  { label: 'GTO & Strategy',    keys: ['GTO','MES','Range','Polarized','Merged'] },
  { label: 'Streets & Game',    keys: ['Preflop','Flop','Turn','River','Hero','Villain','Rake','bb','SPR'] },
]

// ── Component ────────────────────────────────────────────────────────────────

export default function Glossary() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100dvh' }}>
      <div className="page">
        <NavBar chapter="Glossary · Reference" />

        {/* Header */}
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
            Reference
          </h1>
          <p style={{
            color: 'var(--text)',
            fontSize: '0.925rem',
            lineHeight: 1.65,
            maxWidth: '42ch',
            marginBottom: 'var(--space-3xl)',
          }}>
            Terminology for 6-max 100bb cash games.
          </p>
        </motion.div>

        {/* ── Terminology ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{ paddingBottom: 'var(--space-4xl)' }}
        >
          <div className="mono" style={{
            color: 'var(--muted)',
            fontSize: '0.62rem',
            paddingBottom: 'var(--space-md)',
            borderBottom: '1px solid var(--border-subtle)',
            marginBottom: 'var(--space-2xl)',
          }}>
            Terminology
          </div>

          {CATEGORIES.map((cat) => (
            <div key={cat.label} style={{ marginBottom: 'var(--space-2xl)' }}>

              {/* Category label */}
              <div className="mono" style={{
                color: 'var(--gold)',
                fontSize: '0.58rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: 'var(--space-sm)',
              }}>
                {cat.label}
              </div>

              {/* Term rows */}
              <div style={{ borderTop: '1px solid var(--border-subtle)' }}>
                {cat.keys.filter(k => GLOSSARY[k]).map((key) => (
                  <div
                    key={key}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '52px 1fr',
                      gap: '0 var(--space-md)',
                      padding: 'var(--space-sm) 0',
                      borderBottom: '1px solid var(--border-subtle)',
                      alignItems: 'start',
                    }}
                  >
                    <span className="mono" style={{
                      color: 'var(--gold)',
                      fontSize: '0.68rem',
                      paddingTop: '2px',
                      letterSpacing: '0.04em',
                    }}>
                      {key}
                    </span>
                    <span style={{
                      fontSize: '0.82rem',
                      color: 'var(--text)',
                      lineHeight: 1.55,
                      fontFamily: 'var(--font-body)',
                    }}>
                      {GLOSSARY[key]}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </motion.div>

      </div>
    </div>
  )
}
