import { useMemo } from 'react'

const RANKS = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2']

function rankIdx(r) {
  return RANKS.indexOf(r)
}

function getHandName(row, col) {
  if (row === col) return RANKS[row] + RANKS[row]
  if (row < col) return RANKS[row] + RANKS[col] + 's'
  return RANKS[col] + RANKS[row] + 'o'
}

// Parses standard range notation (AA-66, AKs-ATs, 66+, A3s+, ATo+) into grid cell keys.
function parseToken(token) {
  token = token.trim()
  if (!token) return []
  const cells = []

  if (token.endsWith('+')) {
    const base = token.slice(0, -1)
    const suited = base.endsWith('s')
    const offsuit = base.endsWith('o')
    const isPair = base.length === 2 && !suited && !offsuit

    if (isPair) {
      const r = rankIdx(base[0])
      for (let i = 0; i <= r; i++) cells.push(`${i},${i}`)
    } else if (base.length === 3 && (suited || offsuit)) {
      const r1 = rankIdx(base[0])
      const r2 = rankIdx(base[1])
      for (let j = r1 + 1; j <= r2; j++) {
        if (suited) {
          cells.push(`${Math.min(r1, j)},${Math.max(r1, j)}`)
        } else {
          cells.push(`${Math.max(r1, j)},${Math.min(r1, j)}`)
        }
      }
    }
    return cells
  }

  if (token.includes('-')) {
    const dash = token.indexOf('-')
    const start = token.slice(0, dash)
    const end = token.slice(dash + 1)
    const startSuited = start.endsWith('s')
    const startOffsuit = start.endsWith('o')
    const isPairRange =
      start.length === 2 && end.length === 2 && !startSuited && !startOffsuit

    if (isPairRange) {
      const lo = Math.min(rankIdx(start[0]), rankIdx(end[0]))
      const hi = Math.max(rankIdx(start[0]), rankIdx(end[0]))
      for (let i = lo; i <= hi; i++) cells.push(`${i},${i}`)
    } else {
      const suited = startSuited
      const r1 = rankIdx(start[0])
      const r2a = rankIdx(start[1])
      const r2b = rankIdx(end[1])
      const lo = Math.min(r2a, r2b)
      const hi = Math.max(r2a, r2b)
      for (let j = lo; j <= hi; j++) {
        if (j === r1) continue
        if (suited) {
          cells.push(`${Math.min(r1, j)},${Math.max(r1, j)}`)
        } else {
          cells.push(`${Math.max(r1, j)},${Math.min(r1, j)}`)
        }
      }
    }
    return cells
  }

  if (token.length === 2) {
    const r = rankIdx(token[0])
    if (r >= 0) cells.push(`${r},${r}`)
  } else if (token.length === 3) {
    const r1 = rankIdx(token[0])
    const r2 = rankIdx(token[1])
    const suited = token[2] === 's'
    if (r1 >= 0 && r2 >= 0 && r1 !== r2) {
      if (suited) {
        cells.push(`${Math.min(r1, r2)},${Math.max(r1, r2)}`)
      } else {
        cells.push(`${Math.max(r1, r2)},${Math.min(r1, r2)}`)
      }
    }
  }

  return cells
}

function parseRangeString(str) {
  const cells = []
  str.split(',').forEach(t => cells.push(...parseToken(t)))
  return new Set(cells)
}

export default function RangeChart({ ranges = [], title }) {
  // ranges: [{ hands: string, color: string, label?: string }] — first match wins per cell
  const cellColors = useMemo(() => {
    const map = {}
    for (const range of ranges) {
      const cells = parseRangeString(range.hands)
      for (const cell of cells) {
        if (!map[cell]) map[cell] = range.color
      }
    }
    return map
  }, [ranges])

  return (
    <div style={{ marginTop: '16px' }}>
      {title && (
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.65rem',
          color: 'var(--gold)',
          letterSpacing: '0.08em',
          marginBottom: '8px',
          textTransform: 'uppercase',
        }}>
          {title}
        </div>
      )}

      {/* 13×13 grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(13, 1fr)',
        gap: '1.5px',
        width: '100%',
      }}>
        {Array.from({ length: 13 }, (_, row) =>
          Array.from({ length: 13 }, (_, col) => {
            const key = `${row},${col}`
            const color = cellColors[key]
            const name = getHandName(row, col)
            const isPair = row === col
            const isSuited = row < col

            let bg = 'rgba(255,255,255,0.035)'
            if (isPair) bg = 'rgba(255,255,255,0.06)'
            if (isSuited) bg = 'rgba(255,255,255,0.025)'

            return (
              <div
                key={key}
                title={name}
                style={{
                  backgroundColor: color || bg,
                  aspectRatio: '1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 'clamp(5px, 1.5vw, 7.5px)',
                  fontFamily: 'var(--font-mono)',
                  color: color ? 'rgba(0,0,0,0.75)' : 'rgba(255,255,255,0.18)',
                  fontWeight: color ? '600' : '400',
                  letterSpacing: '-0.03em',
                  borderRadius: '1px',
                  userSelect: 'none',
                  lineHeight: 1,
                }}
              >
                {name}
              </div>
            )
          })
        )}
      </div>

      {/* Legend */}
      {ranges.some(r => r.label) && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '10px' }}>
          {ranges.filter(r => r.label).map((r, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <div style={{
                width: '10px',
                height: '10px',
                backgroundColor: r.color,
                borderRadius: '2px',
                flexShrink: 0,
              }} />
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                color: 'var(--text)',
              }}>
                {r.label}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
