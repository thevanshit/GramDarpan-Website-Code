import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Building2, 
  MapPin, 
  Users, 
  TrendingUp, 
  CheckCircle,
  Clock,
  AlertCircle,
  ArrowLeft,
  Download,
  Filter,
  Eye
} from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

const DistrictOverviewPage: React.FC = () => {
  const { id } = useParams()
  const [activeTab, setActiveTab] = useState('overview')

  // Mock data for the district
  const districtData = {
    id: id || 'hisar',
    name: 'Hisar',
    state: 'Haryana',
    totalVillages: 6,
    declared: 1,
    implementing: 3,
    notStarted: 2,
    avgScore: 66,
    population: 125000,
    area: '435 sq km',
    budget: '₹2.5 Cr',
    spent: '₹1.8 Cr',
    villages: [
      {
        id: 1,
        name: 'Ludas',
        status: 'declared',
        adarshScore: 85,
        population: 2500,
        officer: 'Rajesh Kumar',
        lastUpdate: '2024-01-15'
      },
      {
        id: 2,
        name: 'Bir Hansi',
        status: 'implementing',
        adarshScore: 65,
        population: 1800,
        officer: 'Priya Sharma',
        lastUpdate: '2024-01-12'
      },
      {
        id: 3,
        name: 'Mangali Kimri',
        status: 'not-started',
        adarshScore: 45,
        population: 3200,
        officer: 'Amit Singh',
        lastUpdate: '2024-01-10'
      },
      {
        id: 4,
        name: 'Ramayana',
        status: 'implementing',
        adarshScore: 70,
        population: 2100,
        officer: 'Sunita Patel',
        lastUpdate: '2024-01-14'
      },
      {
        id: 5,
        name: 'Balsamand',
        status: 'implementing',
        adarshScore: 78,
        population: 1900,
        officer: 'Vikram Mehta',
        lastUpdate: '2024-01-13'
      },
      {
        id: 6,
        name: 'Bawani Khera',
        status: 'not-started',
        adarshScore: 55,
        population: 2800,
        officer: 'Ravi Kumar',
        lastUpdate: '2024-01-11'
      }
    ],
    indicators: {
      sanitation: 78,
      education: 72,
      healthcare: 68,
      infrastructure: 65,
      water: 85,
      electricity: 80,
      roads: 75,
      housing: 70
    },
    progress: [
      { month: 'Jan', villages: 40, completed: 28 },
      { month: 'Feb', villages: 42, completed: 30 },
      { month: 'Mar', villages: 43, completed: 32 },
      { month: 'Apr', villages: 44, completed: 35 },
      { month: 'May', villages: 45, completed: 38 },
      { month: 'Jun', villages: 45, completed: 40 }
    ]
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Building2 },
    { id: 'villages', label: 'Villages', icon: MapPin },
    { id: 'indicators', label: 'Indicators', icon: TrendingUp },
    { id: 'reports', label: 'Reports', icon: Download }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'declared': return 'text-success-600 bg-success-100'
      case 'implementing': return 'text-warning-600 bg-warning-100'
      case 'not-started': return 'text-danger-600 bg-danger-100'
      default: return 'text-secondary-600 bg-secondary-100'
    }
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-success-600'
    if (score >= 60) return 'text-warning-600'
    return 'text-danger-600'
  }

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
          <div className="flex items-center space-x-4 mb-6">
            <button className="btn-outline px-4 py-2 text-sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Map
            </button>
            <div className="flex items-center space-x-2">
              <Building2 className="w-6 h-6 text-primary-600" />
              <span className="text-sm text-secondary-500">District Overview</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-secondary-900 mb-2">{districtData.name} District</h1>
              <p className="text-xl text-secondary-600">{districtData.state}</p>
            </div>
            <div className="flex items-center space-x-4">
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
        </motion.div>

        {/* District Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="card p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-secondary-600 mb-1">Total Villages</p>
                <p className="text-3xl font-bold text-secondary-900">{districtData.totalVillages}</p>
              </div>
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary-600" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-secondary-600 mb-1">Declared Adarsh</p>
                <p className="text-3xl font-bold text-success-600">{districtData.declared}</p>
              </div>
              <div className="w-12 h-12 bg-success-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-success-600" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="card p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-secondary-600 mb-1">Implementing</p>
                <p className="text-3xl font-bold text-warning-600">{districtData.implementing}</p>
              </div>
              <div className="w-12 h-12 bg-warning-100 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-warning-600" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="card p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-secondary-600 mb-1">Avg Score</p>
                <p className={`text-3xl font-bold ${getScoreColor(districtData.avgScore)}`}>
                  {districtData.avgScore}
                </p>
              </div>
              <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-secondary-600" />
              </div>
            </div>
          </motion.div>
        </div>

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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-secondary-900 mb-6">District Progress Trend</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={districtData.progress}>
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
                      <Bar dataKey="villages" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="completed" fill="#10B981" radius={[4, 4, 0, 0]} />
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
                          { name: 'Declared', value: districtData.declared, color: '#10B981' },
                          { name: 'Implementing', value: districtData.implementing, color: '#F59E0B' },
                          { name: 'Not Started', value: districtData.notStarted, color: '#EF4444' }
                        ]}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {[
                          { name: 'Declared', value: districtData.declared, color: '#10B981' },
                          { name: 'Implementing', value: districtData.implementing, color: '#F59E0B' },
                          { name: 'Not Started', value: districtData.notStarted, color: '#EF4444' }
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-secondary-900 mb-4">District Information</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-secondary-500">Population</span>
                    <span className="text-sm font-medium text-secondary-900">{districtData.population.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-secondary-500">Area</span>
                    <span className="text-sm font-medium text-secondary-900">{districtData.area}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-secondary-500">Budget</span>
                    <span className="text-sm font-medium text-secondary-900">{districtData.budget}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-secondary-500">Spent</span>
                    <span className="text-sm font-medium text-secondary-900">{districtData.spent}</span>
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <h3 className="text-lg font-semibold text-secondary-900 mb-4">Quick Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-secondary-500">Completion Rate</span>
                    <span className="text-sm font-semibold text-success-600">27%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-secondary-500">Implementation Rate</span>
                    <span className="text-sm font-semibold text-warning-600">56%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-secondary-500">Pending Rate</span>
                    <span className="text-sm font-semibold text-danger-600">18%</span>
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <h3 className="text-lg font-semibold text-secondary-900 mb-4">Budget Utilization</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-secondary-500">Allocated</span>
                    <span className="text-sm font-medium text-secondary-900">{districtData.budget}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-secondary-500">Utilized</span>
                    <span className="text-sm font-medium text-secondary-900">{districtData.spent}</span>
                  </div>
                  <div className="w-full bg-secondary-200 rounded-full h-2 mt-4">
                    <div className="bg-primary-600 h-2 rounded-full" style={{ width: '72%' }}></div>
                  </div>
                  <p className="text-xs text-secondary-500 text-center">72% utilized</p>
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
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-secondary-900 mb-6">Villages in {districtData.name}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {districtData.villages.map((village, index) => (
                  <motion.div
                    key={village.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="border border-secondary-200 rounded-lg p-4 hover:border-primary-300 transition-colors duration-200"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-secondary-900">{village.name}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(village.status)}`}>
                        {village.status.replace('-', ' ').toUpperCase()}
                      </span>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-secondary-500">Adarsh Score</span>
                        <span className={`text-sm font-semibold ${getScoreColor(village.adarshScore)}`}>
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

                    <button className="btn-primary w-full px-4 py-2 text-sm">
                      <Eye className="w-4 h-4 mr-2" />
                      View Details
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'indicators' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-secondary-900 mb-6">District-wide Indicators</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(districtData.indicators).map(([key, value]) => (
                  <div key={key} className="p-4 border border-secondary-200 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium text-secondary-900 capitalize">{key.replace(/([A-Z])/g, ' $1')}</h4>
                      <span className={`text-lg font-bold ${getScoreColor(value)}`}>{value}%</span>
                    </div>
                    <div className="w-full bg-secondary-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-500 ${
                          value >= 80 ? 'bg-success-500' : 
                          value >= 60 ? 'bg-warning-500' : 'bg-danger-500'
                        }`}
                        style={{ width: `${value}%` }}
                      ></div>
                    </div>
                  </div>
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
              <h3 className="text-lg font-semibold text-secondary-900 mb-6">Generate District Reports</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button className="p-4 border border-secondary-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-all duration-200 text-left">
                  <Download className="w-6 h-6 text-primary-600 mb-2" />
                  <p className="text-sm font-medium text-secondary-900">District Progress Report</p>
                  <p className="text-xs text-secondary-500">Comprehensive district overview</p>
                </button>
                
                <button className="p-4 border border-secondary-200 rounded-lg hover:border-success-300 hover:bg-success-50 transition-all duration-200 text-left">
                  <TrendingUp className="w-6 h-6 text-success-600 mb-2" />
                  <p className="text-sm font-medium text-secondary-900">Performance Analytics</p>
                  <p className="text-xs text-secondary-500">Village performance metrics</p>
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

export default DistrictOverviewPage
