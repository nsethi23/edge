import { useState } from 'react'
import { motion } from 'framer-motion'
import NavBar from '../components/NavBar'

const STARTER = {
  role: 'assistant',
  content: 'Paste a hand history or describe the spot. Include position, stack depth, preflop action, board, bet sizes, and your question.',
}

const textareaStyle = {
  width: '100%',
  resize: 'vertical',
  background: 'var(--bg-card)',
  border: '1px solid var(--border)',
  borderRadius: 'var(--radius-sm)',
  color: 'var(--cream)',
  fontFamily: 'var(--font-body)',
  fontSize: '0.9rem',
  lineHeight: 1.55,
  outline: 'none',
  padding: '13px 14px',
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

export default function Coach() {
  const [messages, setMessages] = useState([STARTER])
  const [handContext, setHandContext] = useState('')
  const [question, setQuestion] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()
    const trimmedQuestion = question.trim()
    const trimmedHand = handContext.trim()
    if (!trimmedQuestion && !trimmedHand) return

    const userMessage = {
      role: 'user',
      content: trimmedQuestion || 'Review this hand.',
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
          handContext: trimmedHand,
          messages: nextMessages.filter(message => message !== STARTER),
        }),
      })

      const data = await response.json()
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
          content: 'I could not reach the coach endpoint. Make sure `/api/coach` is deployed and `GROQ_API_KEY` is set server-side.',
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

          <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 'var(--space-md)' }}>
            <label style={{ display: 'grid', gap: 'var(--space-sm)' }}>
              <span className="mono" style={{ color: 'var(--muted)', fontSize: '0.58rem' }}>Hand History</span>
              <textarea
                value={handContext}
                onChange={event => setHandContext(event.target.value)}
                placeholder="Example: 100bb, Hero BTN AhJh. CO opens 2.5bb, Hero calls, blinds fold. Flop Jd 8d 4c..."
                rows={8}
                style={textareaStyle}
              />
            </label>

            <label style={{ display: 'grid', gap: 'var(--space-sm)' }}>
              <span className="mono" style={{ color: 'var(--muted)', fontSize: '0.58rem' }}>Question</span>
              <textarea
                value={question}
                onChange={event => setQuestion(event.target.value)}
                placeholder="What should I have done on the turn?"
                rows={3}
                style={textareaStyle}
              />
            </label>

            <button className="btn-primary" type="submit" disabled={loading || (!question.trim() && !handContext.trim())}>
              {loading ? 'Thinking' : 'Ask Coach'}
            </button>
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
