import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import NavBar from '../components/NavBar'
import RangeChart from '../components/RangeChart'
import { GLOSSARY } from '../data/glossary'

// ── Position opening ranges (6-max 100bb, GTO solver) ───────────────────────

const POSITION_RANGES = [
  {
    pos: 'LJ',
    full: 'Lojack · UTG',
    pct: '17.6%',
    note: '5 players left to act. Only hands strong enough to withstand a 3-bet and play profitably OOP.',
    hands: '66+,A3s+,K8s+,Q9s+,J9s+,T9s,ATo+,KJo+,QJo',
  },
  {
    pos: 'HJ',
    full: 'Hijack',
    pct: '21.4%',
    note: '4 players left to act. Adds medium pairs, more suited connectors, and offsuit broadways.',
    hands: '55+,A2s+,K6s+,Q9s+,J9s+,T9s,98s,87s,76s,ATo+,KTo+,QTo+',
  },
  {
    pos: 'CO',
    full: 'Cutoff',
    pct: '27.8%',
    note: 'Only BN and blinds remain. Range expands to weaker suited kings, one-gappers, and more offsuit hands.',
    hands: '33+,A2s+,K3s+,Q6s+,J8s+,T7s+,97s+,87s,76s,A8o+,KTo+,QTo+,JTo',
  },
  {
    pos: 'BTN',
    full: 'Button',
    pct: '43.5%',
    note: 'Acts last on every postflop street. Nearly any hand with playability is profitable — position compensates for raw card strength.',
    hands: '33+,A2s+,K2s+,Q3s+,J4s+,T6s+,96s+,85s+,75s+,64s+,53s+,A4o+,K8o+,Q9o+,J9o+,T8o+,98o',
  },
  {
    pos: 'SB',
    full: 'Small Blind',
    pct: '62.3%',
    note: 'Heads up vs BB. Very wide — raise or call. Flatting is fine HU. Includes almost all playable hands.',
    hands: '22+,A2s+,K2s+,Q2s+,J2s+,T3s+,94s+,84s+,74s+,63s+,53s+,43s,A2o+,K4o+,Q5o+,J7o+,T7o+,96o+,86o+,76o',
  },
]

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
  const [selectedPos, setSelectedPos] = useState(0)
  const pos = POSITION_RANGES[selectedPos]

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
            Opening ranges and terminology for 6-max 100bb cash games.
          </p>
        </motion.div>

        {/* ── Opening Ranges ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: 'var(--space-3xl)' }}
        >
          <div className="mono" style={{
            color: 'var(--muted)',
            fontSize: '0.62rem',
            paddingBottom: 'var(--space-md)',
            borderBottom: '1px solid var(--border-subtle)',
            marginBottom: 'var(--space-lg)',
          }}>
            Opening Ranges
          </div>

          {/* Position tab bar */}
          <div style={{
            display: 'flex',
            gap: '2px',
            marginBottom: 'var(--space-lg)',
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-sm)',
            padding: '3px',
          }}>
            {POSITION_RANGES.map((p, i) => (
              <button
                key={p.pos}
                onClick={() => setSelectedPos(i)}
                style={{
                  flex: 1,
                  padding: '8px 4px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  letterSpacing: '0.06em',
                  color: selectedPos === i ? '#0b150b' : 'var(--muted)',
                  background: selectedPos === i ? 'var(--gold)' : 'transparent',
                  borderRadius: '5px',
                  transition: 'all 0.15s',
                  fontWeight: selectedPos === i ? 600 : 400,
                  cursor: 'pointer',
                }}
                onMouseEnter={e => {
                  if (selectedPos !== i) e.currentTarget.style.color = 'var(--text)'
                }}
                onMouseLeave={e => {
                  if (selectedPos !== i) e.currentTarget.style.color = 'var(--muted)'
                }}
              >
                {p.pos}
              </button>
            ))}
          </div>

          {/* Position info + chart */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedPos}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Position header row */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                marginBottom: 'var(--space-xs)',
              }}>
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.05rem',
                  color: 'var(--cream)',
                  fontWeight: 600,
                }}>
                  {pos.full}
                </span>
                <span className="mono" style={{ color: 'var(--gold)', fontSize: '0.68rem' }}>
                  {pos.pct} of hands
                </span>
              </div>

              {/* Position note */}
              <p style={{
                fontSize: '0.8rem',
                color: 'var(--muted)',
                lineHeight: 1.55,
                fontFamily: 'var(--font-body)',
                marginBottom: 'var(--space-sm)',
                maxWidth: '52ch',
              }}>
                {pos.note}
              </p>

              {/* Chart */}
              <RangeChart
                ranges={[{
                  hands: pos.hands,
                  color: '#C8A84B',
                  label: `${pos.pos} open (${pos.pct})`,
                }]}
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* ── Terminology ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
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
