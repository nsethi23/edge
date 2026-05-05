import { createContext, useContext, useEffect, useState } from 'react'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from '../firebase'
import { useAuth } from './AuthContext'
import { CURRICULUM } from '../data/curriculum'

const ALL_LESSON_IDS = CURRICULUM.flatMap(ch => ch.lessons.map(l => l.id))

const ProgressContext = createContext(null)

export function ProgressProvider({ children }) {
  const { user, loading: authLoading, isMaster } = useAuth()
  const [completedLessons, setCompletedLessons] = useState(new Set())
  const [progressLoading, setProgressLoading] = useState(true)

  useEffect(() => {
    if (authLoading) return

    if (!user) {
      setCompletedLessons(new Set())
      setProgressLoading(false)
      return
    }

    setProgressLoading(true)
    getDoc(doc(db, 'progress', user.uid)).then(snap => {
      if (snap.exists()) {
        setCompletedLessons(new Set(snap.data().completedLessons ?? []))
      } else {
        setCompletedLessons(new Set())
      }
      setProgressLoading(false)
    }).catch(() => {
      setCompletedLessons(new Set())
      setProgressLoading(false)
    })
  }, [user?.uid, authLoading])

  async function completeLesson(lessonId) {
    if (!user || completedLessons.has(lessonId)) return
    const next = new Set(completedLessons)
    next.add(lessonId)
    setCompletedLessons(next)
    await setDoc(
      doc(db, 'progress', user.uid),
      { completedLessons: Array.from(next) },
      { merge: true }
    )
  }

  function isUnlocked(lessonId) {
    if (isMaster) return true
    const idx = ALL_LESSON_IDS.indexOf(lessonId)
    if (idx <= 0) return true
    return completedLessons.has(ALL_LESSON_IDS[idx - 1])
  }

  return (
    <ProgressContext.Provider value={{
      completedLessons,
      progressLoading,
      completeLesson,
      isUnlocked,
      allLessonIds: ALL_LESSON_IDS,
    }}>
      {children}
    </ProgressContext.Provider>
  )
}

export const useProgress = () => useContext(ProgressContext)
