import { COACH_KNOWLEDGE } from '../src/data/coachKnowledge.js'

const GROQ_URL = 'https://api.groq.com/openai/v1/chat/completions'
const DEFAULT_MODEL = 'llama-3.3-70b-versatile'

function sendJson(response, status, body) {
  response.statusCode = status
  response.setHeader('Content-Type', 'application/json')
  response.end(JSON.stringify(body))
}

async function readBody(request) {
  const chunks = []
  for await (const chunk of request) chunks.push(chunk)
  const raw = Buffer.concat(chunks).toString('utf8')
  return raw ? JSON.parse(raw) : {}
}

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    sendJson(response, 405, { error: 'Method not allowed' })
    return
  }

  const apiKey = process.env.GROQ_API_KEY
  if (!apiKey) {
    sendJson(response, 500, { error: 'GROQ_API_KEY is not configured on the server.' })
    return
  }

  let body
  try {
    body = await readBody(request)
  } catch {
    sendJson(response, 400, { error: 'Invalid JSON request body.' })
    return
  }

  const messages = Array.isArray(body.messages) ? body.messages.slice(-10) : []
  const handContext = typeof body.handContext === 'string' ? body.handContext.trim() : ''

  if (!messages.length && !handContext) {
    sendJson(response, 400, { error: 'Provide a hand history or a question.' })
    return
  }

  const systemPrompt = `
You are Edge Coach, a disciplined No-Limit Hold'em 6-max cash-game study coach.
Use the reference notes below as your strategic foundation.

${COACH_KNOWLEDGE}

Rules:
- Do not invent missing details. State assumptions clearly.
- Give poker strategy, not gambling encouragement.
- When reviewing a played hand, identify the main decision point and the best alternative line.
- When advising a future hand, give an action plan and what turns/rivers change it.
- Keep answers under 350 words unless the user asks for deeper analysis.
`

  const groqMessages = [
    { role: 'system', content: systemPrompt },
    ...(handContext
      ? [{ role: 'user', content: `Hand history / spot to analyze:\n${handContext}` }]
      : []),
    ...messages.map(message => ({
      role: message.role === 'assistant' ? 'assistant' : 'user',
      content: String(message.content ?? '').slice(0, 5000),
    })),
  ]

  try {
    const groqResponse = await fetch(GROQ_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: process.env.GROQ_MODEL || DEFAULT_MODEL,
        messages: groqMessages,
        temperature: 0.35,
        max_completion_tokens: 900,
      }),
    })

    const data = await groqResponse.json()
    if (!groqResponse.ok) {
      sendJson(response, groqResponse.status, {
        error: data?.error?.message || 'Groq request failed.',
      })
      return
    }

    sendJson(response, 200, {
      reply: data?.choices?.[0]?.message?.content || 'No response returned.',
      model: data?.model,
    })
  } catch (error) {
    sendJson(response, 500, { error: error.message || 'Coach request failed.' })
  }
}
