import { useState, useEffect, useRef } from 'react'
import katex from 'katex'
import 'katex/dist/katex.min.css'
import { GLOSSARY } from '../data/glossary'

export function GlossaryTerm({ term, children }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const definition = GLOSSARY[term]

  useEffect(() => {
    if (!open) return
    function handle(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handle)
    return () => document.removeEventListener('mousedown', handle)
  }, [open])

  if (!definition) return <span>{children || term}</span>

  const tooltipId = `glossary-${term}`

  return (
    <span ref={ref} style={{ position: 'relative', display: 'inline' }}>
      <button
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        aria-controls={tooltipId}
        style={{
          color: 'var(--gold)',
          cursor: 'pointer',
          transition: 'color 0.15s',
          background: 'none',
          border: 'none',
          borderBottom: '1px dashed var(--gold-dim)',
          padding: 0,
          font: 'inherit',
          display: 'inline',
        }}
        onMouseEnter={e => e.currentTarget.style.color = 'var(--gold-light)'}
        onMouseLeave={e => e.currentTarget.style.color = 'var(--gold)'}
      >
        {children || term}
      </button>

      {open && (
        <span
          id={tooltipId}
          role="tooltip"
          style={{
            position: 'absolute',
            bottom: 'calc(100% + 8px)',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 100,
            background: 'var(--bg-tooltip)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-sm)',
            padding: '10px 14px',
            width: '240px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
            animation: 'fadeUp 0.15s ease',
            display: 'block',
          }}>
          <span style={{
            display: 'block',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            marginBottom: '6px',
          }}>
            {term}
          </span>
          <span style={{
            display: 'block',
            fontFamily: 'var(--font-body)',
            fontSize: '0.8rem',
            color: 'var(--text)',
            lineHeight: '1.5',
          }}>
            {definition}
          </span>
          {/* Arrow */}
          <span style={{
            position: 'absolute',
            bottom: '-5px',
            left: '50%',
            transform: 'translateX(-50%) rotate(45deg)',
            width: '8px',
            height: '8px',
            background: 'var(--bg-tooltip)',
            borderRight: '1px solid var(--border)',
            borderBottom: '1px solid var(--border)',
          }} />
        </span>
      )}
    </span>
  )
}

function renderKatex(latex, displayMode) {
  try {
    return katex.renderToString(latex, {
      throwOnError: false,
      displayMode,
      output: 'html',
    })
  } catch {
    return latex
  }
}

// Parses body text, handling:
//   $$...$$ — display (block) math
//   $...$   — inline math  (avoid conflict: dollar amounts like $100 won't match
//             because they are followed by digits, not a closing $)
//   {{TERM}} — glossary tooltips
//   **bold** — bold text
//   \n       — line breaks
export function parseGlossaryText(text, seenTerms = new Set()) {
  if (!text) return null

  // Step 1: split on $$...$$ (display math)
  const segments = text.split(/(\\$\\$[\s\S]*?\\$\\$|\$\$[\s\S]*?\$\$)/g)

  return segments.flatMap((seg, si) => {
    // Display math block
    const displayMatch = seg.match(/^\$\$([\s\S]*?)\$\$$/)
    if (displayMatch) {
      const html = renderKatex(displayMatch[1].trim(), true)
      return [
        <span
          key={`dm-${si}`}
          className="katex-display-block"
          dangerouslySetInnerHTML={{ __html: html }}
          style={{ display: 'block', margin: 'var(--space-md) 0', textAlign: 'center' }}
        />
      ]
    }

    // Step 2: within plain text, split on $...$ inline math
    // Only match $...$ where the content has no spaces at edges and no $ inside
    // This prevents matching "$100" (digit follows $) — pattern requires non-digit after $
    const inlineParts = seg.split(/(\$(?!\d)[^$\n]+?\$)/g)

    return inlineParts.flatMap((part, pi) => {
      const inlineMatch = part.match(/^\$(?!\d)([^$\n]+?)\$$/)
      if (inlineMatch) {
        const html = renderKatex(inlineMatch[1], false)
        return [
          <span
            key={`im-${si}-${pi}`}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        ]
      }

      // Step 3: glossary terms {{TERM}}
      const glossaryParts = part.split(/(\{\{[^}]+\}\})/g)
      return glossaryParts.flatMap((gp, gi) => {
        const glossaryMatch = gp.match(/^\{\{([^}]+)\}\}$/)
        if (glossaryMatch) {
          const termKey = glossaryMatch[1]
          if (seenTerms.has(termKey)) {
            return [<span key={`gt-${si}-${pi}-${gi}`}>{termKey}</span>]
          }
          seenTerms.add(termKey)
          return [
            <GlossaryTerm key={`gt-${si}-${pi}-${gi}`} term={termKey}>
              {termKey}
            </GlossaryTerm>
          ]
        }

        // Step 4: **bold**
        const boldParts = gp.split(/(\*\*[^*]+\*\*)/g)
        return boldParts.flatMap((bp, bi) => {
          const boldMatch = bp.match(/^\*\*([^*]+)\*\*$/)
          if (boldMatch) {
            return [
              <strong
                key={`b-${si}-${pi}-${gi}-${bi}`}
                style={{ color: 'var(--cream)', fontWeight: 600 }}
              >
                {boldMatch[1]}
              </strong>
            ]
          }

          // Step 5: line breaks
          return bp.split('\n').map((line, li, arr) => (
            <span key={`t-${si}-${pi}-${gi}-${bi}-${li}`}>
              {line}
              {li < arr.length - 1 && <br />}
            </span>
          ))
        })
      })
    })
  })
}
