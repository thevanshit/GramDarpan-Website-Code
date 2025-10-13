import { Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

// Layout Components
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

// Public Pages
import HomePage from './pages/public/HomePage'
import VillageMapPage from './pages/public/VillageMapPage'
import VillageDetailPage from './pages/public/VillageDetailPage'
import DistrictOverviewPage from './pages/public/DistrictOverviewPage'
import AboutPage from './pages/public/AboutPage'

// Auth Pages
import LoginPage from './pages/auth/LoginPage'
import RegisterPage from './pages/auth/RegisterPage'

// Dashboard Pages
import DashboardPage from './pages/dashboard/DashboardPage'
import FieldWorkerDashboard from './pages/dashboard/FieldWorkerDashboard'
import AgencyDashboard from './pages/dashboard/AgencyDashboard'
import DistrictDashboard from './pages/dashboard/DistrictDashboard'
import StateDashboard from './pages/dashboard/StateDashboard'
import MinistryDashboard from './pages/dashboard/MinistryDashboard'

// Protected Route Component
import ProtectedRoute from './components/auth/ProtectedRoute'

// Context
import { AuthProvider } from './contexts/AuthContext'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen gradient-bg flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center"
        >
          <div className="w-16 h-16 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold text-gradient">GramDarpan</h2>
          <p className="text-secondary-600 mt-2">Loading...</p>
        </motion.div>
      </div>
    )
  }

  return (
    <AuthProvider>
      <div className="min-h-screen gradient-bg">
        <Navbar />
        
        <AnimatePresence mode="wait">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/map" element={<VillageMapPage />} />
            <Route path="/village/:id" element={<VillageDetailPage />} />
            <Route path="/district/:id" element={<DistrictOverviewPage />} />
            <Route path="/about" element={<AboutPage />} />
            
            {/* Auth Routes */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            
            {/* Protected Dashboard Routes */}
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            } />
            <Route path="/dashboard/field-worker" element={
              <ProtectedRoute requiredRole="field-worker">
                <FieldWorkerDashboard />
              </ProtectedRoute>
            } />
            <Route path="/dashboard/agency" element={
              <ProtectedRoute requiredRole="agency">
                <AgencyDashboard />
              </ProtectedRoute>
            } />
            <Route path="/dashboard/district" element={
              <ProtectedRoute requiredRole="district-official">
                <DistrictDashboard />
              </ProtectedRoute>
            } />
            <Route path="/dashboard/state" element={
              <ProtectedRoute requiredRole="state-official">
                <StateDashboard />
              </ProtectedRoute>
            } />
            <Route path="/dashboard/ministry" element={
              <ProtectedRoute requiredRole="ministry">
                <MinistryDashboard />
              </ProtectedRoute>
            } />
          </Routes>
        </AnimatePresence>
        
        <Footer />
      </div>
    </AuthProvider>
  )
}

export default App
