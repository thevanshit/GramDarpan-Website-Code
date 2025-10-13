import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Globe, 
  TrendingUp, 
  Building2, 
  MapPin,
  BarChart3,
  FileText,
  Download,
  Filter,
  AlertCircle,
  CheckCircle,
  Clock,
  Users,
  Target
} from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts'

const MinistryDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview')
  
  const states = [
    {
      id: 1,
      name: 'Maharashtra',
      districts: 36,
      villages: 1250,
      declared: 312,
      implementing: 685,
      notStarted: 253,
      avgScore: 72,
      budget: '₹45 Cr',
      spent: '₹32 Cr'
    },
    {
      id: 2,
      name: 'Uttar Pradesh',
      districts: 75,
      villages: 2100,
      declared: 420,
      implementing: 1150,
      notStarted: 530,
      avgScore: 68,
      budget: '₹75 Cr',
      spent: '₹48 Cr'
    },
    {
      id: 3,
      name: 'Gujarat',
      districts: 33,
      villages: 980,
      declared: 245,
      implementing: 520,
      notStarted: 215,
      avgScore: 75,
      budget: '₹35 Cr',
      spent: '₹28 Cr'
    },
    {
      id: 4,
      name: 'Karnataka',
      districts: 31,
      villages: 850,
      declared: 180,
      implementing: 450,
      notStarted: 220,
      avgScore: 70,
      budget: '₹30 Cr',
      spent: '₹22 Cr'
    }
  ]

  const nationalStats = [
    { label: 'Total States', value: '28', icon: Globe },
    { label: 'Total Districts', value: '750', icon: Building2 },
    { label: 'Total Villages', value: '2,50,000', icon: MapPin },
    { label: 'Declared Adarsh', value: '62,500', icon: CheckCircle },
    { label: 'Implementing', value: '1,25,000', icon: Clock },
    { label: 'Not Started', value: '62,500', icon: AlertCircle },
    { label: 'Total Budget', value: '₹1,200 Cr', icon: TrendingUp },
    { label: 'Active Users', value: '15,000', icon: Users }
  ]

  const nationalProgress = [
    { month: 'Jan', villages: 1200, completed: 850 },
    { month: 'Feb', villages: 1350, completed: 950 },
    { month: 'Mar', villages: 1500, completed: 1100 },
    { month: 'Apr', villages: 1650, completed: 1250 },
    { month: 'May', villages: 1800, completed: 1400 },
    { month: 'Jun', villages: 1950, completed: 1550 }
  ]

  const tabs = [
    { id: 'overview', label: 'National Overview', icon: Globe },
    { id: 'states', label: 'State-wise', icon: Building2 },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
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
            Ministry Dashboard
          </h1>
          <p className="text-xl text-secondary-600">
            National-level oversight and cross-state analytics for Adarsh Gram development
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
            {/* National Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {nationalStats.map((stat, index) => {
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

            {/* National Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-secondary-900 mb-6">National Progress Trend</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={nationalProgress}>
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
                <h3 className="text-lg font-semibold text-secondary-900 mb-6">State Performance Comparison</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={states}>
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

            {/* Key Insights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card p-6 bg-success-50 border-success-200">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-success-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-success-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-success-900">Top Performers</h3>
                </div>
                <p className="text-sm text-success-700 mb-4">States exceeding targets and showing exceptional progress</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-success-600">Gujarat</span>
                    <span className="text-sm font-semibold text-success-900">75%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-success-600">Maharashtra</span>
                    <span className="text-sm font-semibold text-success-900">72%</span>
                  </div>
                </div>
              </div>

              <div className="card p-6 bg-warning-50 border-warning-200">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-warning-100 rounded-lg flex items-center justify-center">
                    <AlertCircle className="w-6 h-6 text-warning-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-warning-900">Need Attention</h3>
                </div>
                <p className="text-sm text-warning-700 mb-4">States requiring immediate intervention and support</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-warning-600">Bihar</span>
                    <span className="text-sm font-semibold text-warning-900">45%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-warning-600">Jharkhand</span>
                    <span className="text-sm font-semibold text-warning-900">52%</span>
                  </div>
                </div>
              </div>

              <div className="card p-6 bg-primary-50 border-primary-200">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary-900">Target Status</h3>
                </div>
                <p className="text-sm text-primary-700 mb-4">Overall progress towards national targets</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-primary-600">Target 2024</span>
                    <span className="text-sm font-semibold text-primary-900">70%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-primary-600">Current</span>
                    <span className="text-sm font-semibold text-primary-900">68%</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'states' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-secondary-900">State-wise Performance</h3>
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
              {states.map((state, index) => (
                <motion.div
                  key={state.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="card p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-secondary-900">{state.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      state.avgScore >= 70 ? 'text-success-600 bg-success-100' :
                      state.avgScore >= 60 ? 'text-warning-600 bg-warning-100' :
                      'text-danger-600 bg-danger-100'
                    }`}>
                      Score: {state.avgScore}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="text-sm text-secondary-500 mb-1">Districts</p>
                      <p className="text-lg font-semibold text-secondary-900">{state.districts}</p>
                    </div>
                    <div>
                      <p className="text-sm text-secondary-500 mb-1">Villages</p>
                      <p className="text-lg font-semibold text-secondary-900">{state.villages.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-secondary-500 mb-1">Declared</p>
                      <p className="text-lg font-semibold text-success-600">{state.declared}</p>
                    </div>
                    <div>
                      <p className="text-sm text-secondary-500 mb-1">Implementing</p>
                      <p className="text-lg font-semibold text-warning-600">{state.implementing}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-secondary-500">Budget Utilization</span>
                      <span className="text-sm font-medium text-secondary-900">
                        {state.spent} / {state.budget}
                      </span>
                    </div>
                    <div className="w-full bg-secondary-200 rounded-full h-2">
                      <div 
                        className="bg-primary-600 h-2 rounded-full transition-all duration-500"
                        style={{ width: '71%' }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <button className="btn-primary px-4 py-2 text-sm">
                      <Building2 className="w-4 h-4 mr-2" />
                      View Details
                    </button>
                    <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                      Analytics →
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
                <h3 className="text-lg font-semibold text-secondary-900 mb-6">National Progress Distribution</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={[
                          { name: 'Declared', value: 62500, color: '#10B981' },
                          { name: 'Implementing', value: 125000, color: '#F59E0B' },
                          { name: 'Not Started', value: 62500, color: '#EF4444' }
                        ]}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={120}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {[
                          { name: 'Declared', value: 62500, color: '#10B981' },
                          { name: 'Implementing', value: 125000, color: '#F59E0B' },
                          { name: 'Not Started', value: 62500, color: '#EF4444' }
                        ].map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="card p-6">
                <h3 className="text-lg font-semibold text-secondary-900 mb-6">Budget Utilization by State</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={states}>
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
                      <Bar dataKey="avgScore" fill="#10B981" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
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
              <h3 className="text-lg font-semibold text-secondary-900 mb-6">Generate National Reports</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button className="p-4 border border-secondary-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-all duration-200 text-left">
                  <FileText className="w-6 h-6 text-primary-600 mb-2" />
                  <p className="text-sm font-medium text-secondary-900">National Progress Report</p>
                  <p className="text-xs text-secondary-500">Comprehensive national overview</p>
                </button>
                
                <button className="p-4 border border-secondary-200 rounded-lg hover:border-success-300 hover:bg-success-50 transition-all duration-200 text-left">
                  <TrendingUp className="w-6 h-6 text-success-600 mb-2" />
                  <p className="text-sm font-medium text-secondary-900">Cross-State Analytics</p>
                  <p className="text-xs text-secondary-500">State-wise performance comparison</p>
                </button>
                
                <button className="p-4 border border-secondary-200 rounded-lg hover:border-warning-300 hover:bg-warning-50 transition-all duration-200 text-left">
                  <Building2 className="w-6 h-6 text-warning-600 mb-2" />
                  <p className="text-sm font-medium text-secondary-900">Budget Analysis</p>
                  <p className="text-xs text-secondary-500">National budget utilization report</p>
                </button>
                
                <button className="p-4 border border-secondary-200 rounded-lg hover:border-danger-300 hover:bg-danger-50 transition-all duration-200 text-left">
                  <AlertCircle className="w-6 h-6 text-danger-600 mb-2" />
                  <p className="text-sm font-medium text-secondary-900">Policy Recommendations</p>
                  <p className="text-xs text-secondary-500">Strategic insights and recommendations</p>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default MinistryDashboard
