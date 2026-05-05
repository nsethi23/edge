import { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { ProgressProvider } from './context/ProgressContext'
import ProtectedRoute from './components/ProtectedRoute'
import BottomNav from './components/BottomNav'
import Home from './pages/Home'
import Lesson from './pages/Lesson'
import Drills from './pages/Drills'
import Glossary from './pages/Glossary'
import Login from './pages/Login'

const Results = lazy(() => import('./pages/Results'))
const RangeLookup = lazy(() => import('./pages/RangeLookup'))
const Coach = lazy(() => import('./pages/Coach'))

function LoadingRoute() {
  return (
    <div className="page" style={{ minHeight: '100dvh', justifyContent: 'center' }}>
      <div className="mono" style={{ color: 'var(--gold)', fontSize: '0.62rem' }}>
        Loading
      </div>
    </div>
  )
}

function AppRoutes() {
  const location = useLocation()
  const hideNav = location.pathname === '/login' || location.pathname.startsWith('/lesson/')

  return (
    <>
      <div style={hideNav ? undefined : { paddingBottom: 'var(--bottom-nav-h)' }}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={
            <ProtectedRoute><Home /></ProtectedRoute>
          } />
          <Route path="/lesson/:lessonId" element={
            <ProtectedRoute><Lesson /></ProtectedRoute>
          } />
          <Route path="/drills" element={
            <ProtectedRoute><Drills /></ProtectedRoute>
          } />
          <Route path="/glossary" element={
            <ProtectedRoute><Glossary /></ProtectedRoute>
          } />
          <Route path="/results" element={
            <ProtectedRoute>
              <Suspense fallback={<LoadingRoute />}>
                <Results />
              </Suspense>
            </ProtectedRoute>
          } />
          <Route path="/ranges" element={
            <ProtectedRoute>
              <Suspense fallback={<LoadingRoute />}>
                <RangeLookup />
              </Suspense>
            </ProtectedRoute>
          } />
          <Route path="/coach" element={
            <ProtectedRoute>
              <Suspense fallback={<LoadingRoute />}>
                <Coach />
              </Suspense>
            </ProtectedRoute>
          } />
        </Routes>
      </div>
      {!hideNav && <BottomNav />}
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ProgressProvider>
          <AppRoutes />
        </ProgressProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}
