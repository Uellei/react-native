import { createContext, useContext, useEffect, useState } from "react";

import { onAuthStateChanged, User } from "firebase/auth"
import { auth } from "../services/firebaseConfig"; 

type AuthContextType = {
  currentUser: User | null
}

// CONTEXTO COM TIPO DEFINIDO
const AuthContext = createContext<AuthContextType | undefined>(undefined)

// HOOK PRA FACILITAR O USO DO CONTEXTO
export const useAuth = () => {
  const context = useContext(AuthContext)
  if(context === undefined)
    throw new Error("useAuth must be used within an AuthProvider")
  return context
}

export default function AuthProvider({children}: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  useEffect(() => {
    // AUTH COMO PRIMEIRO ARGUMENTO
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })

    return unsubscribe
  }, [])

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  )
}