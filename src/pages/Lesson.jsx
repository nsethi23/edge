import { useState, useEffect } from 'react'
import { useParams, useNavigate, Navigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { CURRICULUM } from '../data/curriculum'
import { useProgress } from '../context/ProgressContext'
import NavBar from '../components/NavBar'
import LessonScreen from '../components/LessonScreen'
import QuizScreen from '../components/QuizScreen'
import CompleteScreen from '../components/CompleteScreen'

function findLesson(lessonId) {
  for (const chapter of CURRICULUM) {
    for (const lesson of chapter.lessons) {
      if (lesson.id === lessonId) return { lesson, chapter }
    }
  }
  return null
}

function findNextLesson(lessonId) {
  for (let ci = 0; ci < CURRICULUM.length; ci++) {
    const ch = CURRICULUM[ci]
    for (let li = 0; li < ch.lessons.length; li++) {
      if (ch.lessons[li].id === lessonId) {
        if (li + 1 < ch.lessons.length) return ch.lessons[li + 1].id
        if (ci + 1 < CURRICULUM.length) return CURRICULUM[ci + 1].lessons[0].id
        return null
      }
    }
  }
  return null
}

export default function Lesson() {
  const { lessonId } = useParams()
  const navigate = useNavigate()
  const { isUnlocked, completeLesson, progressLoading } = useProgress()
  const [phase, setPhase] = useState('lesson')
  const [quizResults, setQuizResults] = useState([])

  useEffect(() => {
    setPhase('lesson')
    setQuizResults([])
  }, [lessonId])

  const found = findLesson(lessonId)

  if (progressLoading) return null

  if (found && !isUnlocked(lessonId)) {
    return <Navigate to="/" replace />
  }

  if (!found) {
    return (
      <div className="page" style={{ paddingTop: '40px', alignItems: 'center' }}>
        <p style={{ color: 'var(--muted)' }}>Lesson not found.</p>
        <button
          className="btn-secondary"
          style={{ marginTop: '16px', width: 'auto', padding: '10px 24px' }}
          onClick={() => navigate('/')}
        >
          ← Back to Home
        </button>
      </div>
    )
  }

  const { lesson } = found
  const nextLessonId = findNextLesson(lessonId)

  async function handleQuizComplete(score, results) {
    setQuizResults(results)
    setPhase('complete')
    if (score === lesson.quiz.length) {
      await completeLesson(lessonId)
    }
  }

  function handleRetry() {
    setPhase('quiz')
    setQuizResults([])
  }

  function handleNext() {
    if (nextLessonId) {
      navigate(`/lesson/${nextLessonId}`)
    } else {
      navigate('/')
    }
  }

  const phaseIndex = { lesson: 0, quiz: 1, complete: 2 }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100dvh' }}>
      <div className="page">
        <NavBar
          chapter={lesson.chapter}
          lesson={lesson.title}
          phase={phase}
          total={3}
          current={phaseIndex[phase]}
        />

        <AnimatePresence mode="wait">
          {phase === 'lesson' && (
            <LessonScreen
              key="lesson"
              lesson={lesson}
              onStartQuiz={() => setPhase('quiz')}
            />
          )}
          {phase === 'quiz' && (
            <QuizScreen
              key="quiz"
              questions={lesson.quiz}
              onComplete={handleQuizComplete}
            />
          )}
          {phase === 'complete' && (
            <CompleteScreen
              key="complete"
              score={quizResults.filter(r => r.correct).length}
              total={lesson.quiz.length}
              lessonTitle={lesson.title}
              onRetry={handleRetry}
              onNext={quizResults.filter(r => r.correct).length === lesson.quiz.length && nextLessonId ? handleNext : null}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
