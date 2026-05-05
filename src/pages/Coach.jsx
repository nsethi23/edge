import { useState } from 'react'
import { motion } from 'framer-motion'
import NavBar from '../components/NavBar'

const POSITIONS = ['UTG', 'HJ', 'CO', 'BTN', 'SB', 'BB']

const STARTER = {
  role: 'assistant',
  content: 'Fill in the hand details above and ask your question.',
}

const SAMPLE_HANDS = [
  {
    game: '2/5 NL',
    stacks: '100',
    heroPos: 'BTN',
    heroHand: 'AhJh',
    preflop: 'CO opens 2.5BB, Hero calls on the Button, blinds fold.',
    board: 'Jd 8d 4c / Ks / 2h',
    postflop: 'Flop: CO bets 3BB into 6.5BB, Hero calls. Turn: CO bets 11BB into 12.5BB, Hero calls. River: CO shoves 84BB into 34.5BB.',
    question: 'Should I call river with top pair, or should I have folded earlier?',
  },
  {
    game: '1/2 NL',
    stacks: '120',
    heroPos: 'CO',
    heroHand: 'As5s',
    preflop: 'HJ opens 3BB, Hero 3-bets to 9BB, Button and blinds fold, HJ calls.',
    board: 'Kc 7s 2d / 4s / Qh',
    postflop: 'Flop: HJ checks, Hero bets 6BB into 21BB, HJ calls. Turn: HJ checks, Hero bets 22BB with the nut flush draw and gutshot, HJ calls. River: HJ checks.',
    question: 'Is this a good triple barrel bluff candidate, or should I give up river?',
  },
  {
    game: '5/10 NL',
    stacks: '100',
    heroPos: 'BB',
    heroHand: 'QhQs',
    preflop: 'BTN opens 2.5BB, SB folds, Hero 3-bets to 11BB, BTN calls.',
    board: 'Td 7c 3s / 9d / Ac',
    postflop: 'Flop: Hero bets 8BB into 22.5BB, BTN calls. Turn: Hero checks, BTN bets 18BB, Hero calls. River: Hero checks, BTN bets 55BB.',
    question: 'How should I think about this river decision after the ace arrives?',
  },
  {
    game: '2/5 NL',
    stacks: '85',
    heroPos: 'SB',
    heroHand: '9c9d',
    preflop: 'UTG opens 2.5BB, folds to Hero in SB, Hero calls, BB folds.',
    board: '8h 6h 2s / 5c / Jd',
    postflop: 'Flop: Hero checks, UTG bets 3BB into 6BB, Hero calls. Turn: Hero checks, UTG bets 9BB into 12BB.',
    question: 'Should I continue turn with an overpair plus straight draw, or is this too weak versus UTG?',
  },
  {
    game: '1/3 NL',
    stacks: '150',
    heroPos: 'HJ',
    heroHand: 'KdQd',
    preflop: 'Hero opens 2.5BB, BTN calls, BB calls.',
    board: 'Qc 9d 4d / 2s / 9h',
    postflop: 'Flop: BB checks, Hero bets 4BB into 8BB, BTN calls, BB folds. Turn: Hero bets 13BB into 16BB, BTN calls. River: Hero checks, BTN bets 38BB.',
    question: 'Did I overplay top pair, and what should my river plan be?',
  },
]

const fieldStyle = {
  width: '100%',
  background: 'var(--bg-card)',
  border: '1px solid var(--border)',
  borderRadius: 'var(--radius-sm)',
  color: 'var(--cream)',
  fontFamily: 'var(--font-body)',
  fontSize: '0.9rem',
  outline: 'none',
  padding: '12px 14px',
  transition: 'border-color 0.15s',
}

const textareaStyle = {
  ...fieldStyle,
  resize: 'vertical',
  lineHeight: 1.55,
}

function SectionLabel({ children }) {
  return (
    <div className="mono" style={{
      color: 'var(--gold)',
      fontSize: '0.58rem',
      paddingBottom: 'var(--space-sm)',
      borderBottom: '1px solid var(--border-subtle)',
      marginBottom: 'var(--space-md)',
    }}>
      {children}
    </div>
  )
}

function FieldLabel({ children }) {
  return (
    <span className="mono" style={{ color: 'var(--muted)', fontSize: '0.58rem' }}>
      {children}
    </span>
  )
}

function PosButton({ pos, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        flex: 1,
        padding: '9px 6px',
        minHeight: '38px',
        borderRadius: 'var(--radius-sm)',
        border: `1px solid ${active ? 'var(--gold)' : 'var(--border-subtle)'}`,
        background: active ? 'var(--gold)' : 'var(--bg-card)',
        color: active ? 'var(--bg)' : 'var(--muted)',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.65rem',
        letterSpacing: '0.04em',
        cursor: 'pointer',
        transition: 'background 0.15s, border-color 0.15s, color 0.15s',
      }}
    >
      {pos}
    </button>
  )
}

function CoachMessage({ message }) {
  const isUser = message.role === 'user'
  return (
    <div style={{
      alignSelf: isUser ? 'flex-end' : 'flex-start',
      maxWidth: '92%',
      border: `1px solid ${isUser ? 'var(--border)' : 'var(--border-subtle)'}`,
      background: isUser ? 'rgba(200,168,75,0.08)' : 'var(--bg-card)',
      borderRadius: 'var(--radius)',
      padding: 'var(--space-md)',
      color: isUser ? 'var(--cream)' : 'var(--text)',
      fontSize: '0.9rem',
      lineHeight: 1.6,
      whiteSpace: 'pre-wrap',
    }}>
      {message.content}
    </div>
  )
}

function buildHandContext({ game, stacks, heroPos, heroHand, preflop, board, postflop }) {
  const lines = []

  const setup = [game.trim(), stacks.trim() ? `${stacks.trim()}BB effective` : ''].filter(Boolean)
  if (setup.length) lines.push(setup.join(' · '))

  const hero = [heroPos ? `Hero ${heroPos}` : '', heroHand.trim() ? `holding ${heroHand.trim()}` : ''].filter(Boolean)
  if (hero.length) lines.push(hero.join(' '))

  if (preflop.trim()) lines.push(`Preflop: ${preflop.trim()}`)
  if (board.trim()) lines.push(`Board: ${board.trim()}`)
  if (postflop.trim()) lines.push(postflop.trim())

  return lines.join('\n')
}

async function readCoachResponse(response) {
  const text = await response.text()
  if (!text.trim()) return {}

  try {
    return JSON.parse(text)
  } catch {
    return {
      error: response.ok
        ? 'Coach endpoint returned a non-JSON response.'
        : `Coach endpoint returned ${response.status} ${response.statusText || 'without JSON'}.`,
    }
  }
}

export default function Coach() {
  const [messages, setMessages] = useState([STARTER])
  const [game, setGame] = useState('')
  const [stacks, setStacks] = useState('')
  const [heroPos, setHeroPos] = useState('')
  const [heroHand, setHeroHand] = useState('')
  const [preflop, setPreflop] = useState('')
  const [board, setBoard] = useState('')
  const [postflop, setPostflop] = useState('')
  const [question, setQuestion] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handContext = buildHandContext({ game, stacks, heroPos, heroHand, preflop, board, postflop })
  const canSubmit = !loading && (question.trim() || handContext.trim())
  const hasHandData = game || stacks || heroPos || heroHand || preflop || board || postflop

  function fillRandomExample() {
    const sample = SAMPLE_HANDS[Math.floor(Math.random() * SAMPLE_HANDS.length)]
    setGame(sample.game)
    setStacks(sample.stacks)
    setHeroPos(sample.heroPos)
    setHeroHand(sample.heroHand)
    setPreflop(sample.preflop)
    setBoard(sample.board)
    setPostflop(sample.postflop)
    setQuestion(sample.question)
    setError('')
  }

  function clearHand() {
    setGame('')
    setStacks('')
    setHeroPos('')
    setHeroHand('')
    setPreflop('')
    setBoard('')
    setPostflop('')
  }

  async function handleSubmit(event) {
    event.preventDefault()
    if (!canSubmit) return

    const userMessage = {
      role: 'user',
      content: question.trim() || 'Review this hand.',
    }
    const nextMessages = [...messages, userMessage]
    setMessages(nextMessages)
    setQuestion('')
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/coach', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          handContext,
          messages: nextMessages.filter(m => m !== STARTER),
        }),
      })

      const data = await readCoachResponse(response)
      if (!response.ok) throw new Error(data.error || 'Coach request failed.')

      setMessages(current => [
        ...current,
        { role: 'assistant', content: data.reply },
      ])
    } catch (err) {
      setError(err.message)
      setMessages(current => [
        ...current,
        {
          role: 'assistant',
          content: 'Could not reach the coach endpoint. Make sure `/api/coach` is deployed and `GROQ_API_KEY` is set server-side.',
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100dvh' }}>
      <div className="page" style={{ maxWidth: '760px' }}>
        <NavBar chapter="Tools · Coach" />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{ paddingTop: 'var(--space-xl)', paddingBottom: 'var(--space-4xl)' }}
        >
          <div className="mono" style={{ color: 'var(--gold)', fontSize: '0.62rem', marginBottom: 'var(--space-md)' }}>
            Hand Review
          </div>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 7vw, 2.5rem)',
            color: 'var(--cream)',
            lineHeight: 1.1,
            marginBottom: 'var(--space-md)',
          }}>
            Edge Coach
          </h1>
          <p style={{
            color: 'var(--text)',
            fontSize: '0.925rem',
            lineHeight: 1.65,
            maxWidth: '52ch',
            marginBottom: 'var(--space-2xl)',
          }}>
            Ask how you should play a spot or review a hand you already played.
          </p>

          <button
            type="button"
            className="btn-secondary"
            onClick={fillRandomExample}
            style={{
              width: 'auto',
              justifySelf: 'start',
              padding: '12px 18px',
              marginBottom: 'var(--space-2xl)',
            }}
          >
            Random Example
          </button>

          <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 'var(--space-2xl)' }}>

            {/* ── Setup ── */}
            <div>
              <SectionLabel>Setup</SectionLabel>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-sm)' }}>
                <label style={{ display: 'grid', gap: 'var(--space-xs)' }}>
                  <FieldLabel>Game / Stakes</FieldLabel>
                  <input
                    type="text"
                    value={game}
                    onChange={e => setGame(e.target.value)}
                    placeholder="2/5 NL"
                    style={fieldStyle}
                    onFocus={e => e.target.style.borderColor = 'var(--gold)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </label>
                <label style={{ display: 'grid', gap: 'var(--space-xs)' }}>
                  <FieldLabel>Effective Stacks (BB)</FieldLabel>
                  <input
                    type="text"
                    value={stacks}
                    onChange={e => setStacks(e.target.value)}
                    placeholder="100"
                    style={fieldStyle}
                    onFocus={e => e.target.style.borderColor = 'var(--gold)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </label>
              </div>
            </div>

            {/* ── Hero ── */}
            <div>
              <SectionLabel>Hero</SectionLabel>
              <div style={{ display: 'grid', gap: 'var(--space-sm)' }}>
                <div style={{ display: 'grid', gap: 'var(--space-xs)' }}>
                  <FieldLabel>Position</FieldLabel>
                  <div style={{ display: 'flex', gap: 'var(--space-xs)' }}>
                    {POSITIONS.map(pos => (
                      <PosButton
                        key={pos}
                        pos={pos}
                        active={heroPos === pos}
                        onClick={() => setHeroPos(p => p === pos ? '' : pos)}
                      />
                    ))}
                  </div>
                </div>
                <label style={{ display: 'grid', gap: 'var(--space-xs)' }}>
                  <FieldLabel>Hole Cards</FieldLabel>
                  <input
                    type="text"
                    value={heroHand}
                    onChange={e => setHeroHand(e.target.value)}
                    placeholder="AhJh"
                    style={{
                      ...fieldStyle,
                      fontFamily: 'var(--font-mono)',
                      letterSpacing: '0.06em',
                    }}
                    onFocus={e => e.target.style.borderColor = 'var(--gold)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </label>
              </div>
            </div>

            {/* ── Action ── */}
            <div>
              <SectionLabel>Action</SectionLabel>
              <div style={{ display: 'grid', gap: 'var(--space-sm)' }}>
                <label style={{ display: 'grid', gap: 'var(--space-xs)' }}>
                  <FieldLabel>Preflop</FieldLabel>
                  <textarea
                    value={preflop}
                    onChange={e => setPreflop(e.target.value)}
                    placeholder="CO opens 2.5BB, Hero calls, blinds fold."
                    rows={2}
                    style={textareaStyle}
                    onFocus={e => e.target.style.borderColor = 'var(--gold)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </label>
                <label style={{ display: 'grid', gap: 'var(--space-xs)' }}>
                  <FieldLabel>Board</FieldLabel>
                  <input
                    type="text"
                    value={board}
                    onChange={e => setBoard(e.target.value)}
                    placeholder="Jd 8d 4c / Ks / 2h"
                    style={{
                      ...fieldStyle,
                      fontFamily: 'var(--font-mono)',
                      letterSpacing: '0.06em',
                    }}
                    onFocus={e => e.target.style.borderColor = 'var(--gold)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </label>
                <label style={{ display: 'grid', gap: 'var(--space-xs)' }}>
                  <FieldLabel>Postflop Action</FieldLabel>
                  <textarea
                    value={postflop}
                    onChange={e => setPostflop(e.target.value)}
                    placeholder="CO checks, Hero bets 6BB, CO raises to 18BB, Hero..."
                    rows={3}
                    style={textareaStyle}
                    onFocus={e => e.target.style.borderColor = 'var(--gold)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </label>
              </div>
            </div>

            {/* ── Question ── */}
            <div>
              <SectionLabel>Question</SectionLabel>
              <label style={{ display: 'grid', gap: 'var(--space-xs)' }}>
                <FieldLabel>What do you want to know?</FieldLabel>
                <textarea
                  value={question}
                  onChange={e => setQuestion(e.target.value)}
                  placeholder="Was my bet sizing correct? Should I have folded to the raise?"
                  rows={3}
                  style={textareaStyle}
                  onFocus={e => e.target.style.borderColor = 'var(--gold)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'}
                />
              </label>
            </div>

            <button className="btn-primary" type="submit" disabled={!canSubmit}>
              {loading ? 'Thinking' : 'Ask Coach'}
            </button>
            {hasHandData && (
              <button
                type="button"
                className="btn-secondary"
                onClick={clearHand}
                style={{ marginTop: 'var(--space-sm)' }}
              >
                Clear Hand
              </button>
            )}
          </form>

          {error && (
            <div style={{
              marginTop: 'var(--space-md)',
              color: 'var(--wrong)',
              fontSize: '0.82rem',
              lineHeight: 1.5,
            }}>
              {error}
            </div>
          )}

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-sm)',
            marginTop: 'var(--space-2xl)',
          }}>
            {messages.map((message, index) => (
              <CoachMessage key={`${message.role}-${index}`} message={message} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
