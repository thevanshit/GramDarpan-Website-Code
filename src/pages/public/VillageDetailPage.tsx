import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  MapPin, 
  Users, 
  Calendar, 
  TrendingUp, 
  Camera, 
  FileText,
  CheckCircle,
  Clock,
  AlertCircle,
  ArrowLeft,
  Download,
  Share
} from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts'

const VillageDetailPage: React.FC = () => {
  const { id } = useParams()
  const [activeTab, setActiveTab] = useState('overview')

  // Mock data for the village
  const villageData = {
    id: id || '1',
    name: 'Ludas',
    district: 'Hisar',
    state: 'Haryana',
    population: 2500,
    area: '12.5 sq km',
    officer: 'Rajesh Kumar',
    status: 'declared',
    adarshScore: 85,
    lastUpdate: '2024-01-15',
    nextVisit: '2024-01-22',
    indicators: {
      sanitation: 90,
      education: 80,
      healthcare: 75,
      infrastructure: 85,
      water: 95,
      electricity: 88,
      roads: 82,
      housing: 78
    },
    progress: [
      { month: 'Jan', score: 65 },
      { month: 'Feb', score: 68 },
      { month: 'Mar', score: 72 },
      { month: 'Apr', score: 75 },
      { month: 'May', score: 78 },
      { month: 'Jun', score: 85 }
    ],
    photos: [
      { id: 1, url: 'https://images.unsplash.com/photo-1581578731548-c6d0f3e4d4b0?w=300&h=200&fit=crop', caption: 'Sanitation facilities', date: '2024-01-15' },
      { id: 2, url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop', caption: 'School building', date: '2024-01-12' },
      { id: 3, url: 'https://images.unsplash.com/photo-1581578731548-c6d0f3e4d4b0?w=300&h=200&fit=crop', caption: 'Water supply', date: '2024-01-10' }
    ],
    milestones: [
      { date: '2024-01-15', title: 'Sanitation Target Achieved', status: 'completed' },
      { date: '2024-01-12', title: 'School Infrastructure Completed', status: 'completed' },
      { date: '2024-01-10', title: 'Water Supply System Installed', status: 'completed' },
      { date: '2024-01-22', title: 'Healthcare Center Inauguration', status: 'pending' }
    ]
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: TrendingUp },
    { id: 'indicators', label: 'Indicators', icon: CheckCircle },
    { id: 'progress', label: 'Progress', icon: Calendar },
    { id: 'gallery', label: 'Gallery', icon: Camera },
    { id: 'reports', label: 'Reports', icon: FileText }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'declared': return 'text-success-600 bg-success-100'
      case 'implementing': return 'text-warning-600 bg-warning-100'
      case 'not-started': return 'text-danger-600 bg-danger-100'
      case 'completed': return 'text-success-600 bg-success-100'
      case 'pending': return 'text-warning-600 bg-warning-100'
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
              <MapPin className="w-6 h-6 text-primary-600" />
              <span className="text-sm text-secondary-500">Village Details</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-secondary-900 mb-2">{villageData.name}</h1>
              <p className="text-xl text-secondary-600">{villageData.district}, {villageData.state}</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="btn-outline px-4 py-2 text-sm">
                <Share className="w-4 h-4 mr-2" />
                Share
              </button>
              <button className="btn-primary px-4 py-2 text-sm">
                <Download className="w-4 h-4 mr-2" />
                Export
              </button>
            </div>
          </div>
        </motion.div>

        {/* Village Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="card p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-secondary-600 mb-1">Adarsh Score</p>
                <p className={`text-3xl font-bold ${getScoreColor(villageData.adarshScore)}`}>
                  {villageData.adarshScore}
                </p>
              </div>
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary-600" />
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
                <p className="text-sm font-medium text-secondary-600 mb-1">Population</p>
                <p className="text-3xl font-bold text-secondary-900">{villageData.population.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-success-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-success-600" />
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
                <p className="text-sm font-medium text-secondary-600 mb-1">Area</p>
                <p className="text-3xl font-bold text-secondary-900">{villageData.area}</p>
              </div>
              <div className="w-12 h-12 bg-warning-100 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-warning-600" />
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
                <p className="text-sm font-medium text-secondary-600 mb-1">Status</p>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(villageData.status)}`}>
                  {villageData.status.replace('-', ' ').toUpperCase()}
                </span>
              </div>
              <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-secondary-600" />
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
                <h3 className="text-lg font-semibold text-secondary-900 mb-6">Progress Trend</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={villageData.progress}>
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
                        dataKey="score" 
                        stroke="#3B82F6" 
                        strokeWidth={3}
                        dot={{ fill: '#3B82F6', strokeWidth: 2, r: 6 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="card p-6">
                <h3 className="text-lg font-semibold text-secondary-900 mb-6">Village Information</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-secondary-500">Officer Assigned</span>
                    <span className="text-sm font-medium text-secondary-900">{villageData.officer}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-secondary-500">Last Update</span>
                    <span className="text-sm font-medium text-secondary-900">{villageData.lastUpdate}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-secondary-500">Next Visit</span>
                    <span className="text-sm font-medium text-secondary-900">{villageData.nextVisit}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-secondary-500">Photos Uploaded</span>
                    <span className="text-sm font-medium text-secondary-900">{villageData.photos.length}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-lg font-semibold text-secondary-900 mb-6">Recent Milestones</h3>
              <div className="space-y-4">
                {villageData.milestones.map((milestone, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 border border-secondary-200 rounded-lg">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      milestone.status === 'completed' ? 'bg-success-100' : 'bg-warning-100'
                    }`}>
                      {milestone.status === 'completed' ? (
                        <CheckCircle className="w-4 h-4 text-success-600" />
                      ) : (
                        <Clock className="w-4 h-4 text-warning-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-secondary-900">{milestone.title}</h4>
                      <p className="text-sm text-secondary-500">{milestone.date}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(milestone.status)}`}>
                      {milestone.status.toUpperCase()}
                    </span>
                  </div>
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
              <h3 className="text-lg font-semibold text-secondary-900 mb-6">Development Indicators</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(villageData.indicators).map(([key, value]) => (
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

        {activeTab === 'gallery' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-secondary-900 mb-6">Progress Photos</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {villageData.photos.map((photo) => (
                  <div key={photo.id} className="border border-secondary-200 rounded-lg overflow-hidden">
                    <img 
                      src={photo.url} 
                      alt={photo.caption}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h4 className="font-medium text-secondary-900 mb-1">{photo.caption}</h4>
                      <p className="text-sm text-secondary-500">{photo.date}</p>
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
              <h3 className="text-lg font-semibold text-secondary-900 mb-6">Generate Reports</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button className="p-4 border border-secondary-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-all duration-200 text-left">
                  <FileText className="w-6 h-6 text-primary-600 mb-2" />
                  <p className="text-sm font-medium text-secondary-900">Village Progress Report</p>
                  <p className="text-xs text-secondary-500">Comprehensive village overview</p>
                </button>
                
                <button className="p-4 border border-secondary-200 rounded-lg hover:border-success-300 hover:bg-success-50 transition-all duration-200 text-left">
                  <TrendingUp className="w-6 h-6 text-success-600 mb-2" />
                  <p className="text-sm font-medium text-secondary-900">Indicator Analysis</p>
                  <p className="text-xs text-secondary-500">Detailed indicator performance</p>
                </button>
                
                <button className="p-4 border border-secondary-200 rounded-lg hover:border-warning-300 hover:bg-warning-50 transition-all duration-200 text-left">
                  <Camera className="w-6 h-6 text-warning-600 mb-2" />
                  <p className="text-sm font-medium text-secondary-900">Photo Report</p>
                  <p className="text-xs text-secondary-500">Visual progress documentation</p>
                </button>
                
                <button className="p-4 border border-secondary-200 rounded-lg hover:border-danger-300 hover:bg-danger-50 transition-all duration-200 text-left">
                  <Calendar className="w-6 h-6 text-danger-600 mb-2" />
                  <p className="text-sm font-medium text-secondary-900">Timeline Report</p>
                  <p className="text-xs text-secondary-500">Project timeline and milestones</p>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default VillageDetailPage
