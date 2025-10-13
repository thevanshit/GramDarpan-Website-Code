import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  MapPin, 
  AlertCircle, 
  CheckCircle, 
  Clock,
  Target,
  Award,
  Activity,
  Calendar,
  FileText
} from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const DashboardPage: React.FC = () => {
  const { user } = useAuth()
  const [selectedPeriod, setSelectedPeriod] = useState('30d')

  // Mock data for charts
  const progressData = [
    { name: 'Jan', villages: 120, completed: 85 },
    { name: 'Feb', villages: 135, completed: 95 },
    { name: 'Mar', villages: 150, completed: 110 },
    { name: 'Apr', villages: 165, completed: 125 },
    { name: 'May', villages: 180, completed: 140 },
    { name: 'Jun', villages: 195, completed: 155 }
  ]

  const indicatorData = [
    { name: 'Sanitation', value: 85, color: '#10B981' },
    { name: 'Education', value: 78, color: '#3B82F6' },
    { name: 'Healthcare', value: 72, color: '#F59E0B' },
    { name: 'Infrastructure', value: 68, color: '#EF4444' },
    { name: 'Water Supply', value: 90, color: '#06B6D4' }
  ]

  const recentActivities = [
    { id: 1, type: 'update', message: 'Village Rampur updated sanitation progress', time: '2 hours ago', status: 'success' },
    { id: 2, type: 'approval', message: 'Devgarh project approved by district official', time: '4 hours ago', status: 'success' },
    { id: 3, type: 'alert', message: 'Khandwa project delayed - requires attention', time: '6 hours ago', status: 'warning' },
    { id: 4, type: 'submission', message: 'New survey data submitted for Sitapur', time: '8 hours ago', status: 'info' }
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success': return <CheckCircle className="w-4 h-4 text-success-600" />
      case 'warning': return <AlertCircle className="w-4 h-4 text-warning-600" />
      case 'info': return <Activity className="w-4 h-4 text-primary-600" />
      default: return <Activity className="w-4 h-4 text-secondary-600" />
    }
  }

  const stats = [
    {
      title: 'Total Villages',
      value: '2,847',
      change: '+12%',
      changeType: 'positive',
      icon: MapPin,
      color: 'text-primary-600',
      bgColor: 'bg-primary-100'
    },
    {
      title: 'Active Projects',
      value: '1,234',
      change: '+8%',
      changeType: 'positive',
      icon: Target,
      color: 'text-success-600',
      bgColor: 'bg-success-100'
    },
    {
      title: 'Completed This Month',
      value: '156',
      change: '+23%',
      changeType: 'positive',
      icon: Award,
      color: 'text-warning-600',
      bgColor: 'bg-warning-100'
    },
    {
      title: 'Pending Approvals',
      value: '89',
      change: '-5%',
      changeType: 'negative',
      icon: Clock,
      color: 'text-danger-600',
      bgColor: 'bg-danger-100'
    }
  ]

  return (
    <div className="min-h-screen gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-secondary-900 mb-2">
                Welcome back, {user?.name}!
              </h1>
              <p className="text-xl text-secondary-600">
                Here's what's happening with Adarsh Gram development
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="input w-32"
              >
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
                <option value="90d">Last 90 days</option>
                <option value="1y">Last year</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="card p-6"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-secondary-600 mb-1">{stat.title}</p>
                    <p className="text-3xl font-bold text-secondary-900 mb-2">{stat.value}</p>
                    <div className="flex items-center">
                      <TrendingUp className={`w-4 h-4 mr-1 ${
                        stat.changeType === 'positive' ? 'text-success-600' : 'text-danger-600'
                      }`} />
                      <span className={`text-sm font-medium ${
                        stat.changeType === 'positive' ? 'text-success-600' : 'text-danger-600'
                      }`}>
                        {stat.change}
                      </span>
                      <span className="text-sm text-secondary-500 ml-1">vs last month</span>
                    </div>
                  </div>
                  <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Progress Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="card p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-secondary-900">Village Progress Trend</h3>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                    <span className="text-sm text-secondary-600">Total Villages</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-3 h-3 bg-success-500 rounded-full"></div>
                    <span className="text-sm text-secondary-600">Completed</span>
                  </div>
                </div>
              </div>
              
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={progressData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                    <XAxis dataKey="name" stroke="#6B7280" />
                    <YAxis stroke="#6B7280" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'white', 
                        border: '1px solid #E5E7EB',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                      }} 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="villages" 
                      stroke="#3B82F6" 
                      strokeWidth={3}
                      dot={{ fill: '#3B82F6', strokeWidth: 2, r: 6 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="completed" 
                      stroke="#10B981" 
                      strokeWidth={3}
                      dot={{ fill: '#10B981', strokeWidth: 2, r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </motion.div>

          {/* Indicator Progress */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-1"
          >
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-secondary-900 mb-6">Development Indicators</h3>
              
              <div className="space-y-4">
                {indicatorData.map((indicator) => (
                  <div key={indicator.name}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-secondary-700">{indicator.name}</span>
                      <span className="text-sm font-semibold text-secondary-900">{indicator.value}%</span>
                    </div>
                    <div className="w-full bg-secondary-200 rounded-full h-2">
                      <div 
                        className="h-2 rounded-full transition-all duration-500"
                        style={{ 
                          width: `${indicator.value}%`,
                          backgroundColor: indicator.color
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          {/* Recent Activities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="card p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-secondary-900">Recent Activities</h3>
                <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                  View All
                </button>
              </div>
              
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-secondary-50 transition-colors duration-200">
                    <div className="flex-shrink-0 mt-0.5">
                      {getStatusIcon(activity.status)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-secondary-900">{activity.message}</p>
                      <p className="text-xs text-secondary-500 mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-secondary-900 mb-6">Quick Actions</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <button className="p-4 border border-secondary-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-all duration-200 text-left">
                  <FileText className="w-6 h-6 text-primary-600 mb-2" />
                  <p className="text-sm font-medium text-secondary-900">Submit Report</p>
                  <p className="text-xs text-secondary-500">Upload progress data</p>
                </button>
                
                <button className="p-4 border border-secondary-200 rounded-lg hover:border-success-300 hover:bg-success-50 transition-all duration-200 text-left">
                  <MapPin className="w-6 h-6 text-success-600 mb-2" />
                  <p className="text-sm font-medium text-secondary-900">View Map</p>
                  <p className="text-xs text-secondary-500">Explore villages</p>
                </button>
                
                <button className="p-4 border border-secondary-200 rounded-lg hover:border-warning-300 hover:bg-warning-50 transition-all duration-200 text-left">
                  <Calendar className="w-6 h-6 text-warning-600 mb-2" />
                  <p className="text-sm font-medium text-secondary-900">Schedule Visit</p>
                  <p className="text-xs text-secondary-500">Plan field work</p>
                </button>
                
                <button className="p-4 border border-secondary-200 rounded-lg hover:border-danger-300 hover:bg-danger-50 transition-all duration-200 text-left">
                  <AlertCircle className="w-6 h-6 text-danger-600 mb-2" />
                  <p className="text-sm font-medium text-secondary-900">Report Issue</p>
                  <p className="text-xs text-secondary-500">Flag problems</p>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage