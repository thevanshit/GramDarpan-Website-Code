import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  MapPin, 
  CheckCircle, 
  Clock, 
  AlertCircle,
  Users,
  Building2,
  TrendingUp,
  FileText,
  Eye,
  Download,
  Filter
} from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

const DistrictDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview')
  
  const villages = [
    {
      id: 1,
      name: 'Rampur',
      status: 'declared',
      adarshScore: 85,
      population: 2500,
      officer: 'Rajesh Kumar',
      lastUpdate: '2024-01-15',
      progress: 90
    },
    {
      id: 2,
      name: 'Devgarh',
      status: 'implementing',
      adarshScore: 65,
      population: 1800,
      officer: 'Priya Sharma',
      lastUpdate: '2024-01-12',
      progress: 70
    },
    {
      id: 3,
      name: 'Khandwa',
      status: 'not-started',
      adarshScore: 45,
      population: 3200,
      officer: 'Amit Singh',
      lastUpdate: '2024-01-10',
      progress: 30
    },
    {
      id: 4,
      name: 'Sitapur',
      status: 'implementing',
      adarshScore: 70,
      population: 2100,
      officer: 'Sunita Patel',
      lastUpdate: '2024-01-14',
      progress: 75
    }
  ]

  const pendingApprovals = [
    {
      id: 1,
      village: 'Rampur',
      type: 'Sanitation Progress',
      submittedBy: 'Rajesh Kumar',
      date: '2024-01-15',
      status: 'pending'
    },
    {
      id: 2,
      village: 'Devgarh',
      type: 'Education Infrastructure',
      submittedBy: 'Priya Sharma',
      date: '2024-01-12',
      status: 'pending'
    },
    {
      id: 3,
      village: 'Sitapur',
      type: 'Water Supply Update',
      submittedBy: 'Sunita Patel',
      date: '2024-01-14',
      status: 'pending'
    }
  ]

  const chartData = [
    { name: 'Sanitation', value: 78, color: '#10B981' },
    { name: 'Education', value: 72, color: '#3B82F6' },
    { name: 'Healthcare', value: 68, color: '#F59E0B' },
    { name: 'Infrastructure', value: 65, color: '#EF4444' },
    { name: 'Water Supply', value: 85, color: '#06B6D4' }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'declared': return 'text-success-600 bg-success-100'
      case 'implementing': return 'text-warning-600 bg-warning-100'
      case 'not-started': return 'text-danger-600 bg-danger-100'
      case 'pending': return 'text-warning-600 bg-warning-100'
      default: return 'text-secondary-600 bg-secondary-100'
    }
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-success-600'
    if (score >= 60) return 'text-warning-600'
    return 'text-danger-600'
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Building2 },
    { id: 'villages', label: 'Villages', icon: MapPin },
    { id: 'approvals', label: 'Approvals', icon: CheckCircle },
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
            District Dashboard
          </h1>
          <p className="text-xl text-secondary-600">
            Monitor all villages in your district and manage approvals
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
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="card p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-secondary-600 mb-1">Total Villages</p>
                    <p className="text-3xl font-bold text-secondary-900">4</p>
                  </div>
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary-600" />
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-secondary-600 mb-1">Declared Adarsh</p>
                    <p className="text-3xl font-bold text-secondary-900">1</p>
                  </div>
                  <div className="w-12 h-12 bg-success-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-success-600" />
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-secondary-600 mb-1">Implementing</p>
                    <p className="text-3xl font-bold text-secondary-900">2</p>
                  </div>
                  <div className="w-12 h-12 bg-warning-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-warning-600" />
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-secondary-600 mb-1">Pending Approvals</p>
                    <p className="text-3xl font-bold text-secondary-900">3</p>
                  </div>
                  <div className="w-12 h-12 bg-danger-100 rounded-lg flex items-center justify-center">
                    <AlertCircle className="w-6 h-6 text-danger-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-secondary-900 mb-6">District Progress by Indicator</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData}>
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
                      <Bar dataKey="value" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="card p-6">
                <h3 className="text-lg font-semibold text-secondary-900 mb-6">Village Status Distribution</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={[
                          { name: 'Declared', value: 1, color: '#10B981' },
                          { name: 'Implementing', value: 2, color: '#F59E0B' },
                          { name: 'Not Started', value: 1, color: '#EF4444' }
                        ]}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {[
                          { name: 'Declared', value: 1, color: '#10B981' },
                          { name: 'Implementing', value: 2, color: '#F59E0B' },
                          { name: 'Not Started', value: 1, color: '#EF4444' }
                        ].map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'villages' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-secondary-900">Village Overview</h3>
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {villages.map((village, index) => (
                <motion.div
                  key={village.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="card p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-secondary-900">{village.name}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(village.status)}`}>
                      {village.status.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-secondary-500">Adarsh Score</span>
                      <span className={`text-lg font-bold ${getScoreColor(village.adarshScore)}`}>
                        {village.adarshScore}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-secondary-500">Population</span>
                      <span className="text-sm font-medium text-secondary-900">{village.population.toLocaleString()}</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-secondary-500">Officer</span>
                      <span className="text-sm font-medium text-secondary-900">{village.officer}</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-secondary-500">Last Update</span>
                      <span className="text-sm font-medium text-secondary-900">{village.lastUpdate}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-secondary-500">Progress</span>
                      <span className="text-sm font-medium text-secondary-900">{village.progress}%</span>
                    </div>
                    <div className="w-full bg-secondary-200 rounded-full h-2">
                      <div 
                        className="bg-primary-600 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${village.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <button className="btn-primary px-4 py-2 text-sm">
                      <Eye className="w-4 h-4 mr-2" />
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

        {activeTab === 'approvals' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="card p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-secondary-900">Pending Approvals</h3>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-secondary-500">3 pending</span>
                </div>
              </div>

              <div className="space-y-4">
                {pendingApprovals.map((approval, index) => (
                  <motion.div
                    key={approval.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="p-4 border border-secondary-200 rounded-lg hover:border-secondary-300 transition-colors duration-200"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="font-medium text-secondary-900">{approval.type}</h4>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(approval.status)}`}>
                            {approval.status.toUpperCase()}
                          </span>
                        </div>
                        <p className="text-sm text-secondary-600 mb-2">{approval.village} • Submitted by {approval.submittedBy}</p>
                        <p className="text-xs text-secondary-500">{approval.date}</p>
                      </div>
                      <div className="flex space-x-2">
                        <button className="btn-outline px-3 py-1 text-xs">
                          <Eye className="w-3 h-3 mr-1" />
                          Review
                        </button>
                        <button className="btn-success px-3 py-1 text-xs">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Approve
                        </button>
                        <button className="btn-danger px-3 py-1 text-xs">
                          <AlertCircle className="w-3 h-3 mr-1" />
                          Reject
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
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
              <h3 className="text-lg font-semibold text-secondary-900 mb-6">Generate Reports</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button className="p-4 border border-secondary-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-all duration-200 text-left">
                  <FileText className="w-6 h-6 text-primary-600 mb-2" />
                  <p className="text-sm font-medium text-secondary-900">District Progress Report</p>
                  <p className="text-xs text-secondary-500">Comprehensive district overview</p>
                </button>
                
                <button className="p-4 border border-secondary-200 rounded-lg hover:border-success-300 hover:bg-success-50 transition-all duration-200 text-left">
                  <TrendingUp className="w-6 h-6 text-success-600 mb-2" />
                  <p className="text-sm font-medium text-secondary-900">Performance Analytics</p>
                  <p className="text-xs text-secondary-500">Village performance metrics</p>
                </button>
                
                <button className="p-4 border border-secondary-200 rounded-lg hover:border-warning-300 hover:bg-warning-50 transition-all duration-200 text-left">
                  <Users className="w-6 h-6 text-warning-600 mb-2" />
                  <p className="text-sm font-medium text-secondary-900">Officer Performance</p>
                  <p className="text-xs text-secondary-500">Field worker assessments</p>
                </button>
                
                <button className="p-4 border border-secondary-200 rounded-lg hover:border-danger-300 hover:bg-danger-50 transition-all duration-200 text-left">
                  <AlertCircle className="w-6 h-6 text-danger-600 mb-2" />
                  <p className="text-sm font-medium text-secondary-900">Issue Report</p>
                  <p className="text-xs text-secondary-500">Problems and resolutions</p>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default DistrictDashboard
