import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import NavBar from '../components/NavBar'
import WinLossChart from '../components/WinLossChart'

const SESSION_STORAGE_KEY = 'edge.sessionResults'

const STARTER_ENTRIES = [
  { id: 'sample-1', date: '2026-04-18', value: 145, note: '2/5 NL, stayed disciplined river' },
  { id: 'sample-2', date: '2026-04-20', value: -220, note: 'Overcalled in 3-bet pots' },
  { id: 'sample-3', date: '2026-04-23', value: 310, note: 'Good table selection' },
  { id: 'sample-4', date: '2026-04-27', value: 80, note: 'Short session' },
  { id: 'sample-5', date: '2026-05-01', value: -95, note: 'Thin value missed' },
]

function loadEntries() {
  try {
    const stored = window.localStorage.getItem(SESSION_STORAGE_KEY)
    return stored ? JSON.parse(stored) : STARTER_ENTRIES
  } catch {
    return STARTER_ENTRIES
  }
}

function todayInputValue() {
  return new Date().toISOString().slice(0, 10)
}

function formatCurrency(value) {
  const prefix = value > 0 ? '+$' : value < 0 ? '-$' : '$'
  return `${prefix}${Math.abs(value).toLocaleString()}`
}

function sessionTime(entry) {
  if (!entry.date) return Number.NEGATIVE_INFINITY
  const time = new Date(`${entry.date}T00:00:00`).getTime()
  return Number.isNaN(time) ? Number.NEGATIVE_INFINITY : time
}

export default function Results() {
  const [entries, setEntries] = useState(loadEntries)
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState(todayInputValue)
  const [note, setNote] = useState('')

  useEffect(() => {
    window.localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(entries))
  }, [entries])

  const stats = useMemo(() => {
    const winningSessions = entries.filter(entry => entry.value > 0).length
    const losingSessions = entries.filter(entry => entry.value < 0).length
    const net = entries.reduce((sum, entry) => sum + entry.value, 0)
    const average = entries.length ? Math.round(net / entries.length) : 0
    return { winningSessions, losingSessions, net, average }
  }, [entries])

  function addEntry(event) {
    event.preventDefault()
    const value = Number(amount)
    if (!Number.isFinite(value) || value === 0) return

    setEntries(current => [
      ...current,
      {
        id: crypto.randomUUID(),
        value,
        date,
        note: note.trim(),
      },
    ])
    setAmount('')
    setNote('')
  }

  function clearEntries() {
    setEntries([])
    setAmount('')
    setNote('')
  }

  function removeEntry(id) {
    setEntries(current => current.filter(entry => entry.id !== id))
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100dvh' }}>
      <div className="page">
        <NavBar chapter="Results · Session Graph" />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{ paddingTop: 'var(--space-xl)', paddingBottom: 'var(--space-4xl)' }}
        >
          <div className="mono" style={{ color: 'var(--gold)', fontSize: '0.62rem', marginBottom: 'var(--space-md)' }}>
            Session Tracker
          </div>

          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 7vw, 2.5rem)',
            color: 'var(--cream)',
            lineHeight: 1.1,
            marginBottom: 'var(--space-md)',
          }}>
            Session Results
          </h1>

          <p style={{
            color: 'var(--text)',
            fontSize: '0.925rem',
            lineHeight: 1.65,
            maxWidth: '44ch',
            marginBottom: 'var(--space-2xl)',
          }}>
            Enter each poker session's net result. The line tracks cumulative profit and loss over time.
          </p>

          <section style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius)',
            padding: 'var(--space-md)',
            marginBottom: 'var(--space-xl)',
          }}>
            <WinLossChart entries={entries} />
          </section>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
            gap: 'var(--space-sm)',
            marginBottom: 'var(--space-xl)',
          }}>
            {[
              ['Wins', stats.winningSessions],
              ['Losses', stats.losingSessions],
              ['Net', formatCurrency(stats.net)],
              ['Avg', formatCurrency(stats.average)],
            ].map(([label, value]) => (
              <div
                key={label}
                style={{
                  borderTop: '1px solid var(--border-subtle)',
                  paddingTop: 'var(--space-sm)',
                  minWidth: 0,
                }}
              >
                <div className="mono" style={{ color: 'var(--muted)', fontSize: '0.55rem', marginBottom: '2px' }}>
                  {label}
                </div>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  color: label === 'Net' && stats.net < 0 ? 'var(--wrong)' : label === 'Net' && stats.net > 0 ? 'var(--correct)' : 'var(--cream)',
                  fontSize: '1rem',
                }}>
                  {value}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={addEntry} style={{ marginBottom: 'var(--space-2xl)' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: 'var(--space-sm)',
              marginBottom: 'var(--space-sm)',
            }}>
              <input
                type="number"
                step="1"
                value={amount}
                onChange={event => setAmount(event.target.value)}
                placeholder="Net result, e.g. -120"
                aria-label="Net result for this poker session"
                style={{
                  width: '100%',
                  minWidth: 0,
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-sm)',
                  color: 'var(--cream)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  outline: 'none',
                  padding: '13px 14px',
                }}
              />
              <input
                type="date"
                value={date}
                onChange={event => setDate(event.target.value)}
                aria-label="Session date"
                style={{
                  width: '100%',
                  minWidth: 0,
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-sm)',
                  color: 'var(--cream)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  outline: 'none',
                  padding: '13px 14px',
                }}
              />
            </div>

            <input
              value={note}
              onChange={event => setNote(event.target.value)}
              placeholder="Optional session note"
              aria-label="Optional note for this poker session"
              style={{
                width: '100%',
                minWidth: 0,
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-sm)',
                color: 'var(--cream)',
                fontFamily: 'var(--font-body)',
                fontSize: '0.85rem',
                outline: 'none',
                padding: '13px 14px',
                marginBottom: 'var(--space-sm)',
              }}
            />

            <button className="btn-primary" type="submit" disabled={!amount || Number(amount) === 0}>
              Add Session
            </button>
          </form>

          <div className="mono" style={{
            color: 'var(--muted)',
            fontSize: '0.62rem',
            paddingBottom: 'var(--space-md)',
            borderBottom: '1px solid var(--border-subtle)',
            marginBottom: 'var(--space-sm)',
          }}>
            Sessions
          </div>

          <div style={{ marginBottom: 'var(--space-lg)' }}>
            {entries.length === 0 ? (
              <div style={{
                color: 'var(--muted)',
                fontSize: '0.85rem',
                padding: 'var(--space-md) 0',
                borderBottom: '1px solid var(--border-subtle)',
              }}>
                No sessions logged yet.
              </div>
            ) : (
              entries
                .map((entry, originalIndex) => ({ ...entry, originalIndex }))
                .sort((a, b) => {
                  const timeDiff = sessionTime(b) - sessionTime(a)
                  if (timeDiff !== 0) return timeDiff
                  return b.originalIndex - a.originalIndex
                })
                .map((entry) => {
                const sessionNumber = entries.findIndex(item => item.id === entry.id) + 1
                return (
                  <div
                    key={entry.id}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      gap: 'var(--space-md)',
                      alignItems: 'center',
                      padding: 'var(--space-md) 0',
                      borderBottom: '1px solid var(--border-subtle)',
                    }}
                  >
                    <div style={{ minWidth: 0 }}>
                      <div className="mono" style={{
                        color: entry.value > 0 ? 'var(--correct)' : 'var(--wrong)',
                        fontSize: '0.62rem',
                        marginBottom: '2px',
                      }}>
                        Session {sessionNumber} · {formatCurrency(entry.value)}
                      </div>
                      <div className="mono" style={{
                        color: 'var(--muted)',
                        fontSize: '0.54rem',
                        marginBottom: entry.note ? '2px' : 0,
                      }}>
                        {entry.date || 'Undated'}
                      </div>
                      {entry.note && (
                        <div style={{
                          color: 'var(--text)',
                          fontSize: '0.8rem',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                        }}>
                          {entry.note}
                        </div>
                      )}
                    </div>
                    <button
                      onClick={() => removeEntry(entry.id)}
                      aria-label={`Remove session ${sessionNumber}`}
                      style={{
                        color: 'var(--muted)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.62rem',
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        flexShrink: 0,
                        padding: '6px 0',
                      }}
                    >
                      Remove
                    </button>
                  </div>
                )
              })
            )}
          </div>

          <button className="btn-secondary" onClick={clearEntries} disabled={entries.length === 0}>
            Clear Sessions
          </button>
        </motion.div>
      </div>
    </div>
  )
}
