import { createContext, useContext, useEffect, useState } from 'react'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'
import { auth } from '../firebase'

const MASTER_EMAIL = import.meta.env.VITE_MASTER_EMAIL

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  // undefined = auth still initializing, null = logged out, object = logged in
  const [user, setUser] = useState(undefined)

  useEffect(() => {
    return onAuthStateChanged(auth, u => setUser(u ?? null))
  }, [])

  const login  = (email, password) => signInWithEmailAndPassword(auth, email, password)
  const signup = (email, password) => createUserWithEmailAndPassword(auth, email, password)
  const logout = () => signOut(auth)

  const isMaster = Boolean(MASTER_EMAIL && user?.email === MASTER_EMAIL)

  return (
    <AuthContext.Provider value={{
      user,
      loading: user === undefined,
      isMaster,
      login,
      signup,
      logout,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
