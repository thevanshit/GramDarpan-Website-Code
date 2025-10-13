import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Building2, 
  TrendingUp, 
  Users, 
  MapPin,
  BarChart3,
  FileText,
  Download,
  Filter,
  AlertCircle,
  CheckCircle,
  Clock
} from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts'

const StateDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview')
  
  const districts = [
    {
      id: 1,
      name: 'Mumbai',
      villages: 45,
      declared: 12,
      implementing: 25,
      notStarted: 8,
      avgScore: 72,
      budget: '₹2.5 Cr',
      spent: '₹1.8 Cr'
    },
    {
      id: 2,
      name: 'Pune',
      villages: 38,
      declared: 8,
      implementing: 22,
      notStarted: 8,
      avgScore: 68,
      budget: '₹2.1 Cr',
      spent: '₹1.5 Cr'
    },
    {
      id: 3,
      name: 'Nagpur',
      villages: 42,
      declared: 15,
      implementing: 20,
      notStarted: 7,
      avgScore: 75,
      budget: '₹2.8 Cr',
      spent: '₹2.0 Cr'
    },
    {
      id: 4,
      name: 'Aurangabad',
      villages: 35,
      declared: 6,
      implementing: 18,
      notStarted: 11,
      avgScore: 58,
      budget: '₹1.9 Cr',
      spent: '₹1.2 Cr'
    }
  ]

  const stateStats = [
    { label: 'Total Districts', value: '36', icon: Building2 },
    { label: 'Total Villages', value: '1,250', icon: MapPin },
    { label: 'Declared Adarsh', value: '312', icon: CheckCircle },
    { label: 'Implementing', value: '685', icon: Clock },
    { label: 'Not Started', value: '253', icon: AlertCircle },
    { label: 'Budget Allocated', value: '₹45 Cr', icon: TrendingUp }
  ]

  const progressData = [
    { month: 'Jan', villages: 120, completed: 85 },
    { month: 'Feb', villages: 135, completed: 95 },
    { month: 'Mar', villages: 150, completed: 110 },
    { month: 'Apr', villages: 165, completed: 125 },
    { month: 'May', villages: 180, completed: 140 },
    { month: 'Jun', villages: 195, completed: 155 }
  ]

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'districts', label: 'Districts', icon: Building2 },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp },
    { id: 'reports', label: 'Reports', icon: FileText }
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
          <h1 className="text-4xl font-bold text-secondary-900 mb-2">
            State Dashboard
          </h1>
          <p className="text-xl text-secondary-600">
            Monitor district-level progress and state-wide analytics
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="border-b border-secondary-200">
            <nav className="-mb-px flex space-x-8">
              {tabs.map((tab) => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                      activeTab === tab.id
                        ? 'border-primary-500 text-primary-600'
                        : 'border-transparent text-secondary-500 hover:text-secondary-700 hover:border-secondary-300'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                )
              })}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stateStats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="card p-6"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-secondary-600 mb-1">{stat.label}</p>
                        <p className="text-3xl font-bold text-secondary-900">{stat.value}</p>
                      </div>
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary-600" />
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-secondary-900 mb-6">State Progress Trend</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={progressData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                      <XAxis dataKey="month" stroke="#6B7280" />
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

              <div className="card p-6">
                <h3 className="text-lg font-semibold text-secondary-900 mb-6">District Performance</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={districts}>
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
                      <Bar dataKey="avgScore" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'districts' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-secondary-900">District Overview</h3>
              <div className="flex items-center space-x-3">
                <button className="btn-outline px-4 py-2 text-sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </button>
                <button className="btn-primary px-4 py-2 text-sm">
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {districts.map((district, index) => (
                <motion.div
                  key={district.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="card p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-secondary-900">{district.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      district.avgScore >= 70 ? 'text-success-600 bg-success-100' :
                      district.avgScore >= 60 ? 'text-warning-600 bg-warning-100' :
                      'text-danger-600 bg-danger-100'
                    }`}>
                      Score: {district.avgScore}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="text-sm text-secondary-500 mb-1">Total Villages</p>
                      <p className="text-lg font-semibold text-secondary-900">{district.villages}</p>
                    </div>
                    <div>
                      <p className="text-sm text-secondary-500 mb-1">Declared</p>
                      <p className="text-lg font-semibold text-success-600">{district.declared}</p>
                    </div>
                    <div>
                      <p className="text-sm text-secondary-500 mb-1">Implementing</p>
                      <p className="text-lg font-semibold text-warning-600">{district.implementing}</p>
                    </div>
                    <div>
                      <p className="text-sm text-secondary-500 mb-1">Not Started</p>
                      <p className="text-lg font-semibold text-danger-600">{district.notStarted}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-secondary-500">Budget Utilization</span>
                      <span className="text-sm font-medium text-secondary-900">
                        {district.spent} / {district.budget}
                      </span>
                    </div>
                    <div className="w-full bg-secondary-200 rounded-full h-2">
                      <div 
                        className="bg-primary-600 h-2 rounded-full transition-all duration-500"
                        style={{ width: '72%' }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <button className="btn-primary px-4 py-2 text-sm">
                      <MapPin className="w-4 h-4 mr-2" />
                      View Details
                    </button>
                    <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                      Reports →
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === 'analytics' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-secondary-900 mb-6">Top Performing Districts</h3>
                <div className="space-y-4">
                  {districts.sort((a, b) => b.avgScore - a.avgScore).map((district, index) => (
                    <div key={district.id} className="flex items-center justify-between p-3 bg-secondary-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                          <span className="text-sm font-semibold text-primary-600">{index + 1}</span>
                        </div>
                        <div>
                          <p className="font-medium text-secondary-900">{district.name}</p>
                          <p className="text-sm text-secondary-500">{district.villages} villages</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-secondary-900">{district.avgScore}</p>
                        <p className="text-xs text-secondary-500">Avg Score</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card p-6">
                <h3 className="text-lg font-semibold text-secondary-900 mb-6">Priority Areas</h3>
                <div className="space-y-4">
                  <div className="p-4 border border-danger-200 bg-danger-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-danger-900">Districts Needing Attention</h4>
                      <span className="text-sm font-semibold text-danger-600">3</span>
                    </div>
                    <p className="text-sm text-danger-700">Districts with low progress scores requiring immediate intervention</p>
                  </div>
                  
                  <div className="p-4 border border-warning-200 bg-warning-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-warning-900">Budget Underutilization</h4>
                      <span className="text-sm font-semibold text-warning-600">2</span>
                    </div>
                    <p className="text-sm text-warning-700">Districts with significant unutilized budget allocation</p>
                  </div>
                  
                  <div className="p-4 border border-success-200 bg-success-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-success-900">Exemplary Performance</h4>
                      <span className="text-sm font-semibold text-success-600">1</span>
                    </div>
                    <p className="text-sm text-success-700">Districts exceeding targets and showing exceptional progress</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'reports' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-secondary-900 mb-6">Generate State Reports</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button className="p-4 border border-secondary-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-all duration-200 text-left">
                  <FileText className="w-6 h-6 text-primary-600 mb-2" />
                  <p className="text-sm font-medium text-secondary-900">State Progress Report</p>
                  <p className="text-xs text-secondary-500">Comprehensive state overview</p>
                </button>
                
                <button className="p-4 border border-secondary-200 rounded-lg hover:border-success-300 hover:bg-success-50 transition-all duration-200 text-left">
                  <TrendingUp className="w-6 h-6 text-success-600 mb-2" />
                  <p className="text-sm font-medium text-secondary-900">Performance Analytics</p>
                  <p className="text-xs text-secondary-500">District-wise performance metrics</p>
                </button>
                
                <button className="p-4 border border-secondary-200 rounded-lg hover:border-warning-300 hover:bg-warning-50 transition-all duration-200 text-left">
                  <Building2 className="w-6 h-6 text-warning-600 mb-2" />
                  <p className="text-sm font-medium text-secondary-900">Budget Utilization</p>
                  <p className="text-xs text-secondary-500">Financial expenditure analysis</p>
                </button>
                
                <button className="p-4 border border-secondary-200 rounded-lg hover:border-danger-300 hover:bg-danger-50 transition-all duration-200 text-left">
                  <AlertCircle className="w-6 h-6 text-danger-600 mb-2" />
                  <p className="text-sm font-medium text-secondary-900">Issue Analysis</p>
                  <p className="text-xs text-secondary-500">Problems and recommendations</p>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default StateDashboard
