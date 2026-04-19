import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { ProgressProvider } from './context/ProgressContext'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'
import Lesson from './pages/Lesson'
import Drills from './pages/Drills'
import Glossary from './pages/Glossary'
import Login from './pages/Login'

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ProgressProvider>
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
          </Routes>
        </ProgressProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}
