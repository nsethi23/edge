import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import NavBar from '../components/NavBar'
import {
  getRFIResult,
  getFORResult,
  getF3BResult,
  getMatrixCellColor,
  VALID_FOR_MATCHUPS,
  VALID_F3B_MATCHUPS,
  RANKS,
  getCombo,
  getExplanation,
} from '../../range-lookup/rangeData'

const POSITIONS = ['UTG', 'HJ', 'CO', 'BTN', 'SB', 'BB']
const SITUATIONS = ['RFI', 'FOR', 'F3B']

const CELL_STYLES = {
  raise: {
    background: 'oklch(67% 0.16 145)',
    color: 'oklch(14% 0.025 145)',
    border: '1px solid oklch(75% 0.13 145)',
  },
  call: {
    background: 'oklch(61% 0.12 225)',
    color: 'oklch(96% 0.012 95)',
    border: '1px solid oklch(69% 0.1 225)',
  },
  'mixed-raise': {
    background: 'oklch(78% 0.12 145)',
    color: 'oklch(24% 0.07 145)',
    border: '1px solid oklch(70% 0.1 145)',
  },
  'mixed-call': {
    background: 'oklch(76% 0.08 225)',
    color: 'oklch(25% 0.065 225)',
    border: '1px solid oklch(68% 0.08 225)',
  },
  fold: {
    background: 'rgba(255,255,255,0.035)',
    color: 'rgba(245,240,232,0.26)',
    border: '1px solid rgba(255,255,255,0.035)',
  },
}

const ACTION_COLORS = {
  Open: 'var(--correct)',
  '3-Bet': 'var(--correct)',
  '4-Bet': 'var(--correct)',
  Call: 'oklch(72% 0.09 225)',
  Fold: 'var(--muted)',
  'N/A': 'var(--muted)',
}

const RANK_LABELS = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2']

function pct(frequency) {
  return `${Math.round(frequency * 100)}%`
}

function situationLabel(situation) {
  if (situation === 'RFI') return 'RFI'
  if (situation === 'FOR') return 'Facing Open'
  return 'Facing 3-Bet'
}

function buildCombo(rank1, rank2, type) {
  if (type === 'p') return `${rank1}${rank1}`
  const idx1 = RANK_LABELS.indexOf(rank1)
  const idx2 = RANK_LABELS.indexOf(rank2)
  const high = idx1 <= idx2 ? rank1 : rank2
  const low = idx1 <= idx2 ? rank2 : rank1
  return `${high}${low}${type}`
}

function SelectButton({ active, disabled, onClick, children, style }) {
  return (
    <button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      style={{
        minHeight: '44px',
        padding: '9px 10px',
        borderRadius: 'var(--radius-sm)',
        border: `1px solid ${active ? 'var(--gold)' : 'var(--border-subtle)'}`,
        background: active ? 'var(--gold)' : 'var(--bg-card)',
        color: active ? 'var(--bg)' : disabled ? 'rgba(138,128,112,0.45)' : 'var(--text)',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.68rem',
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'background 0.15s, border-color 0.15s, color 0.15s',
        ...style,
      }}
    >
      {children}
    </button>
  )
}

function HandSelector({ selected, onSelect }) {
  const [rank1, setRank1] = useState('A')
  const [rank2, setRank2] = useState('K')
  const [suitType, setSuitType] = useState('s')

  function handleChange(nextRank1, nextRank2, nextType) {
    setRank1(nextRank1)
    setRank2(nextRank2)
    setSuitType(nextType)
    onSelect(buildCombo(nextRank1, nextRank2, nextType))
  }

  const preview = buildCombo(rank1, rank2, suitType)

  return (
    <section style={{
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius)',
      padding: 'var(--space-md)',
      background: 'var(--bg-card)',
    }}>
      <div className="mono" style={{ color: 'var(--muted)', fontSize: '0.58rem', marginBottom: 'var(--space-sm)' }}>
        Your Hand
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-sm)', marginBottom: 'var(--space-md)' }}>
        {[
          ['s', 'Suited'],
          ['o', 'Offsuit'],
          ['p', 'Pair'],
        ].map(([value, label]) => (
          <SelectButton key={value} active={suitType === value} onClick={() => handleChange(rank1, rank2, value)}>
            {label}
          </SelectButton>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: suitType === 'p' ? '1fr' : '1fr 1fr', gap: 'var(--space-sm)' }}>
        <label style={{ display: 'grid', gap: '4px' }}>
          <span style={{ color: 'var(--muted)', fontSize: '0.72rem' }}>{suitType === 'p' ? 'Rank' : 'First card'}</span>
          <select
            value={rank1}
            onChange={event => handleChange(event.target.value, rank2, suitType)}
            style={selectStyle}
          >
            {RANK_LABELS.map(rank => <option key={rank} value={rank}>{rank}</option>)}
          </select>
        </label>

        {suitType !== 'p' && (
          <label style={{ display: 'grid', gap: '4px' }}>
            <span style={{ color: 'var(--muted)', fontSize: '0.72rem' }}>Second card</span>
            <select
              value={rank2}
              onChange={event => handleChange(rank1, event.target.value, suitType)}
              style={selectStyle}
            >
              {RANK_LABELS.filter(rank => rank !== rank1).map(rank => <option key={rank} value={rank}>{rank}</option>)}
            </select>
          </label>
        )}
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 'var(--space-md)',
        borderTop: '1px solid var(--border-subtle)',
        paddingTop: 'var(--space-sm)',
      }}>
        <span style={{ color: 'var(--muted)', fontSize: '0.78rem' }}>Selected</span>
        <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--cream)', fontWeight: 600 }}>{preview}</span>
      </div>
    </section>
  )
}

const selectStyle = {
  width: '100%',
  minHeight: '42px',
  background: 'var(--bg-card)',
  border: '1px solid var(--border)',
  borderRadius: 'var(--radius-sm)',
  color: 'var(--cream)',
  fontFamily: 'var(--font-mono)',
  fontSize: '0.85rem',
  padding: '0 10px',
  outline: 'none',
}

export default function RangeLookup() {
  const [situation, setSituation] = useState('RFI')
  const [heroPos, setHeroPos] = useState('BTN')
  const [villainPos, setVillainPos] = useState('CO')
  const [selectedCombo, setSelectedCombo] = useState('AKs')

  const availableVillains = useMemo(() => {
    if (situation === 'FOR') return VALID_FOR_MATCHUPS[heroPos] ?? []
    if (situation === 'F3B') return VALID_F3B_MATCHUPS[heroPos] ?? []
    return []
  }, [situation, heroPos])

  const effectiveVillain =
    situation !== 'RFI' && availableVillains.includes(villainPos)
      ? villainPos
      : availableVillains[0] ?? null

  const results = useMemo(() => {
    if (situation === 'RFI') return getRFIResult(heroPos, selectedCombo)
    if (situation === 'FOR' && effectiveVillain) return getFORResult(heroPos, effectiveVillain, selectedCombo)
    if (situation === 'F3B' && effectiveVillain) return getF3BResult(heroPos, effectiveVillain, selectedCombo)
    return []
  }, [situation, heroPos, effectiveVillain, selectedCombo])

  const explanation = useMemo(() => getExplanation(selectedCombo, results), [selectedCombo, results])
  const isPureFold = results.length === 1 && results[0].action === 'Fold'
  const isNA = results.length === 1 && results[0].action === 'N/A'
  const topAction = results[0]

  function handleHeroPosChange(pos) {
    setHeroPos(pos)
    const nextVillains =
      situation === 'FOR' ? VALID_FOR_MATCHUPS[pos] ?? []
      : situation === 'F3B' ? VALID_F3B_MATCHUPS[pos] ?? []
      : []
    if (nextVillains.length > 0 && !nextVillains.includes(villainPos)) {
      setVillainPos(nextVillains[0])
    }
  }

  function handleSituationChange(nextSituation) {
    setSituation(nextSituation)
    const nextVillains =
      nextSituation === 'FOR' ? VALID_FOR_MATCHUPS[heroPos] ?? []
      : nextSituation === 'F3B' ? VALID_F3B_MATCHUPS[heroPos] ?? []
      : []
    if (nextVillains.length > 0 && !nextVillains.includes(villainPos)) {
      setVillainPos(nextVillains[0])
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100dvh' }}>
      <div className="page" style={{ maxWidth: '980px' }}>
        <NavBar chapter="Tools · Range Lookup" />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{ paddingTop: 'var(--space-xl)', paddingBottom: 'var(--space-4xl)' }}
        >
          <div className="mono" style={{ color: 'var(--gold)', fontSize: '0.62rem', marginBottom: 'var(--space-md)' }}>
            6-Max 100BB
          </div>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 7vw, 2.5rem)',
            color: 'var(--cream)',
            lineHeight: 1.1,
            marginBottom: 'var(--space-md)',
          }}>
            Preflop Range Lookup
          </h1>
          <p style={{
            color: 'var(--text)',
            fontSize: '0.925rem',
            lineHeight: 1.65,
            maxWidth: '52ch',
            marginBottom: 'var(--space-2xl)',
          }}>
            Static GTO preflop ranges for raise first in, facing an open, and facing a 3-bet.
          </p>

          <div className="range-layout">
            <div style={{ display: 'grid', gap: 'var(--space-lg)' }}>
              <section>
                <div className="mono" style={{ color: 'var(--muted)', fontSize: '0.58rem', marginBottom: 'var(--space-sm)' }}>
                  Situation
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-sm)' }}>
                  {SITUATIONS.map(item => (
                    <SelectButton
                      key={item}
                      active={situation === item}
                      onClick={() => handleSituationChange(item)}
                    >
                      {situationLabel(item)}
                    </SelectButton>
                  ))}
                </div>
                <p style={{ color: 'var(--muted)', fontSize: '0.78rem', lineHeight: 1.5, marginTop: 'var(--space-sm)' }}>
                  {situation === 'RFI' && 'No one has opened yet.'}
                  {situation === 'FOR' && 'Someone opened before you.'}
                  {situation === 'F3B' && 'You raised and faced a 3-bet.'}
                </p>
              </section>

              <section>
                <div className="mono" style={{ color: 'var(--muted)', fontSize: '0.58rem', marginBottom: 'var(--space-sm)' }}>
                  Your Position
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 'var(--space-xs)' }}>
                  {POSITIONS.map(pos => {
                    const disabled =
                      (situation === 'FOR' && !VALID_FOR_MATCHUPS[pos]) ||
                      (situation === 'F3B' && !VALID_F3B_MATCHUPS[pos]) ||
                      (situation === 'RFI' && pos === 'BB')
                    return (
                      <SelectButton
                        key={pos}
                        active={heroPos === pos}
                        disabled={disabled}
                        onClick={() => handleHeroPosChange(pos)}
                        style={{ paddingInline: 4 }}
                      >
                        {pos}
                      </SelectButton>
                    )
                  })}
                </div>
              </section>

              {situation !== 'RFI' && (
                <section>
                  <div className="mono" style={{ color: 'var(--muted)', fontSize: '0.58rem', marginBottom: 'var(--space-sm)' }}>
                    {situation === 'FOR' ? 'Raiser Position' : '3-Better Position'}
                  </div>
                  {availableVillains.length === 0 ? (
                    <p style={{ color: 'var(--muted)', fontSize: '0.8rem' }}>No valid matchups for this position.</p>
                  ) : (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 'var(--space-xs)' }}>
                      {POSITIONS.map(pos => (
                        <SelectButton
                          key={pos}
                          active={effectiveVillain === pos}
                          disabled={!availableVillains.includes(pos)}
                          onClick={() => setVillainPos(pos)}
                          style={{ paddingInline: 4 }}
                        >
                          {pos}
                        </SelectButton>
                      ))}
                    </div>
                  )}
                </section>
              )}

              <HandSelector selected={selectedCombo} onSelect={setSelectedCombo} />

              <section style={{
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                padding: 'var(--space-md)',
                background: 'var(--bg-card)',
              }}>
                <div className="mono" style={{ color: 'var(--muted)', fontSize: '0.58rem', marginBottom: 'var(--space-sm)' }}>
                  Legend
                </div>
                {[
                  ['raise', 'Raise / open'],
                  ['call', 'Call'],
                  ['mixed-raise', 'Mixed raise'],
                  ['mixed-call', 'Mixed call'],
                  ['fold', 'Fold'],
                ].map(([key, label]) => (
                  <div key={key} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '7px' }}>
                    <span style={{
                      width: 12,
                      height: 12,
                      borderRadius: 2,
                      flexShrink: 0,
                      ...CELL_STYLES[key],
                    }} />
                    <span style={{ color: 'var(--text)', fontSize: '0.78rem' }}>{label}</span>
                  </div>
                ))}
              </section>
            </div>

            <div style={{ display: 'grid', gap: 'var(--space-lg)', minWidth: 0 }}>
              <section style={{
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                padding: 'var(--space-md)',
                background: 'var(--bg-card)',
                overflowX: 'auto',
              }}>
                <div className="mono" style={{ color: 'var(--muted)', fontSize: '0.58rem', marginBottom: 'var(--space-md)' }}>
                  Range Matrix
                </div>
                <div style={{ minWidth: 520 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '20px repeat(13, 1fr)', gap: 2, marginBottom: 2 }}>
                    <div />
                    {RANKS.map(rank => (
                      <div key={rank} style={{ textAlign: 'center', color: 'var(--muted)', fontFamily: 'var(--font-mono)', fontSize: '0.58rem' }}>
                        {rank}
                      </div>
                    ))}
                  </div>

                  {RANKS.map((rank, rowIdx) => (
                    <div key={rank} style={{ display: 'grid', gridTemplateColumns: '20px repeat(13, 1fr)', gap: 2, marginBottom: 2 }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--muted)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.58rem',
                      }}>
                        {rank}
                      </div>
                      {RANKS.map((_, colIdx) => {
                        const combo = getCombo(rowIdx, colIdx)
                        const cellColor = getMatrixCellColor(situation, heroPos, effectiveVillain, combo)
                        const isSelected = combo === selectedCombo
                        return (
                          <button
                            key={combo}
                            onClick={() => setSelectedCombo(combo)}
                            title={combo}
                            aria-label={`Select ${combo}`}
                            style={{
                              ...CELL_STYLES[cellColor],
                              aspectRatio: '1',
                              borderRadius: 3,
                              fontFamily: 'var(--font-mono)',
                              fontSize: '0.58rem',
                              fontWeight: 600,
                              lineHeight: 1,
                              outline: isSelected ? '2px solid var(--gold)' : 'none',
                              outlineOffset: isSelected ? 1 : 0,
                              transform: isSelected ? 'scale(1.04)' : 'none',
                              transition: 'transform 0.12s, outline-color 0.12s, opacity 0.12s',
                            }}
                          >
                            {combo.endsWith('s') || combo.endsWith('o') ? combo.slice(0, 2) : combo}
                          </button>
                        )
                      })}
                    </div>
                  ))}
                </div>
              </section>

              <section style={{
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                padding: 'var(--space-lg)',
                background: 'var(--bg-card)',
              }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-sm)', marginBottom: 'var(--space-md)' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--cream)', fontSize: '1.7rem', fontWeight: 700 }}>
                    {selectedCombo}
                  </span>
                  <span style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>
                    {situation === 'RFI' && `${heroPos} RFI`}
                    {situation === 'FOR' && effectiveVillain && `${heroPos} vs ${effectiveVillain} open`}
                    {situation === 'F3B' && effectiveVillain && `${heroPos} vs ${effectiveVillain} 3-bet`}
                  </span>
                </div>

                {isNA ? (
                  <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>BB has no RFI range.</p>
                ) : isPureFold ? (
                  <div className="mono" style={{ color: 'var(--muted)', fontSize: '0.7rem', marginBottom: 'var(--space-md)' }}>
                    Fold, not in range
                  </div>
                ) : (
                  <>
                    <div style={{ display: 'grid', gap: 'var(--space-sm)', marginBottom: 'var(--space-md)' }}>
                      {results.map(result => (
                        <div key={result.action}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                            <span className="mono" style={{ color: ACTION_COLORS[result.action] ?? 'var(--muted)', fontSize: '0.62rem' }}>
                              {result.action}
                            </span>
                            <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--cream)', fontSize: '0.76rem' }}>
                              {pct(result.frequency)}
                            </span>
                          </div>
                          <div style={{ height: 6, background: 'rgba(255,255,255,0.055)', borderRadius: 3, overflow: 'hidden' }}>
                            <div style={{
                              width: pct(result.frequency),
                              height: '100%',
                              background: ACTION_COLORS[result.action] ?? 'var(--muted)',
                              borderRadius: 3,
                            }} />
                          </div>
                        </div>
                      ))}
                    </div>

                    <div style={{
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-sm)',
                      padding: 'var(--space-sm) var(--space-md)',
                      color: topAction?.frequency >= 0.85 ? 'var(--correct)' : 'var(--gold)',
                      fontSize: '0.82rem',
                      marginBottom: 'var(--space-md)',
                    }}>
                      {topAction?.frequency >= 0.85
                        ? `Pure ${topAction.action}, always take this action.`
                        : 'Mixed strategy, use a randomizer.'}
                    </div>
                  </>
                )}

                {!isNA && (
                  <p style={{
                    borderTop: '1px solid var(--border-subtle)',
                    paddingTop: 'var(--space-md)',
                    color: 'var(--muted)',
                    fontSize: '0.85rem',
                    lineHeight: 1.6,
                  }}>
                    {explanation}
                  </p>
                )}
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
