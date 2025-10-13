import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export type UserRole = 'field-worker' | 'agency' | 'district-official' | 'state-official' | 'ministry'

export interface User {
  id: string
  name: string
  email: string
  role: UserRole
  district?: string
  state?: string
  avatar?: string
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
  isLoading: boolean
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for existing session
    const savedUser = localStorage.getItem('gramdarpan_user')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Mock user data based on email
    const mockUsers: Record<string, User> = {
      'field@gramdarpan.com': {
        id: '1',
        name: 'Rajesh Kumar',
        email: 'field@gramdarpan.com',
        role: 'field-worker',
        district: 'Mumbai',
        state: 'Maharashtra',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
      },
      'agency@gramdarpan.com': {
        id: '2',
        name: 'Priya Sharma',
        email: 'agency@gramdarpan.com',
        role: 'agency',
        district: 'Delhi',
        state: 'Delhi',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
      },
      'district@gramdarpan.com': {
        id: '3',
        name: 'Amit Singh',
        email: 'district@gramdarpan.com',
        role: 'district-official',
        district: 'Bangalore',
        state: 'Karnataka',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
      },
      'state@gramdarpan.com': {
        id: '4',
        name: 'Dr. Sunita Patel',
        email: 'state@gramdarpan.com',
        role: 'state-official',
        state: 'Gujarat',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
      },
      'ministry@gramdarpan.com': {
        id: '5',
        name: 'Dr. Vikram Mehta',
        email: 'ministry@gramdarpan.com',
        role: 'ministry',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face'
      }
    }

    const mockUser = mockUsers[email]
    
    if (mockUser && password === 'password') {
      setUser(mockUser)
      localStorage.setItem('gramdarpan_user', JSON.stringify(mockUser))
      setIsLoading(false)
      return true
    }
    
    setIsLoading(false)
    return false
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('gramdarpan_user')
  }

  const value: AuthContextType = {
    user,
    login,
    logout,
    isLoading,
    isAuthenticated: !!user
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
