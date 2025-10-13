import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  MapPin, 
  BarChart3, 
  Info, 
  LogIn, 
  LogOut, 
  Menu, 
  X,
  Home,
  Map,
  Building2,
  Users,
  Settings
} from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const { isAuthenticated, user, logout } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
    setIsProfileOpen(false)
  }

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Village Map', path: '/map', icon: Map },
    { name: 'Districts', path: '/district/overview', icon: Building2 },
    { name: 'About', path: '/about', icon: Info },
  ]

  const dashboardItems = [
    { name: 'Dashboard', path: '/dashboard', icon: BarChart3 },
    { name: 'Field Worker', path: '/dashboard/field-worker', icon: Users },
    { name: 'Agency', path: '/dashboard/agency', icon: Building2 },
    { name: 'District', path: '/dashboard/district', icon: MapPin },
    { name: 'State', path: '/dashboard/state', icon: BarChart3 },
    { name: 'Ministry', path: '/dashboard/ministry', icon: Settings },
  ]

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-secondary-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg flex items-center justify-center">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gradient">GramDarpan</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.path
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-secondary-600 hover:text-primary-600 hover:bg-secondary-50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                {/* Dashboard Dropdown */}
                <div className="relative hidden lg:block">
                  <button className="flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium text-secondary-600 hover:text-primary-600 hover:bg-secondary-50 transition-all duration-200">
                    <BarChart3 className="w-4 h-4" />
                    <span>Dashboard</span>
                  </button>
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-medium border border-secondary-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-1">
                      {dashboardItems.map((item) => {
                        const Icon = item.icon
                        return (
                          <Link
                            key={item.name}
                            to={item.path}
                            className="flex items-center space-x-2 px-4 py-2 text-sm text-secondary-700 hover:bg-secondary-50 hover:text-primary-600 transition-colors duration-200"
                          >
                            <Icon className="w-4 h-4" />
                            <span>{item.name}</span>
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                </div>

                {/* Profile Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-secondary-50 transition-all duration-200"
                  >
                    <img
                      src={user?.avatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face'}
                      alt={user?.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="hidden sm:block text-sm font-medium text-secondary-700">
                      {user?.name}
                    </span>
                  </button>

                  <AnimatePresence>
                    {isProfileOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-medium border border-secondary-200"
                      >
                        <div className="py-1">
                          <div className="px-4 py-2 border-b border-secondary-100">
                            <p className="text-sm font-medium text-secondary-900">{user?.name}</p>
                            <p className="text-xs text-secondary-500">{user?.email}</p>
                            <p className="text-xs text-primary-600 capitalize">{user?.role?.replace('-', ' ')}</p>
                          </div>
                          <button
                            onClick={handleLogout}
                            className="flex items-center space-x-2 w-full px-4 py-2 text-sm text-secondary-700 hover:bg-secondary-50 hover:text-danger-600 transition-colors duration-200"
                          >
                            <LogOut className="w-4 h-4" />
                            <span>Logout</span>
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </>
            ) : (
              <Link
                to="/login"
                className="btn-primary px-4 py-2 text-sm"
              >
                <LogIn className="w-4 h-4 mr-2" />
                Login
              </Link>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-secondary-50 transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-secondary-600" />
              ) : (
                <Menu className="w-5 h-5 text-secondary-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-secondary-200 py-4"
            >
              <div className="space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon
                  const isActive = location.pathname === item.path
                  return (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? 'text-primary-600 bg-primary-50'
                          : 'text-secondary-600 hover:text-primary-600 hover:bg-secondary-50'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </Link>
                  )
                })}
                
                {isAuthenticated && (
                  <>
                    <div className="border-t border-secondary-200 pt-2 mt-2">
                      <p className="px-3 py-2 text-xs font-medium text-secondary-500 uppercase tracking-wider">
                        Dashboard
                      </p>
                      {dashboardItems.map((item) => {
                        const Icon = item.icon
                        return (
                          <Link
                            key={item.name}
                            to={item.path}
                            onClick={() => setIsMenuOpen(false)}
                            className="flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium text-secondary-600 hover:text-primary-600 hover:bg-secondary-50 transition-all duration-200"
                          >
                            <Icon className="w-4 h-4" />
                            <span>{item.name}</span>
                          </Link>
                        )
                      })}
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar
