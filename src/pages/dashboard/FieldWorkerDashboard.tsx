import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  MapPin, 
  Camera, 
  Upload, 
  CheckCircle, 
  Clock, 
  AlertCircle,
  Plus,
  FileText,
  Calendar,
  Users,
  Target,
  TrendingUp
} from 'lucide-react'

const FieldWorkerDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview')
  
  const assignedVillages = [
    {
      id: 1,
      name: 'Rampur',
      district: 'Mumbai',
      status: 'in-progress',
      progress: 75,
      lastVisit: '2024-01-15',
      nextVisit: '2024-01-22',
      indicators: {
        sanitation: 80,
        education: 70,
        healthcare: 65,
        infrastructure: 75,
        water: 90
      }
    },
    {
      id: 2,
      name: 'Devgarh',
      district: 'Pune',
      status: 'pending',
      progress: 45,
      lastVisit: '2024-01-10',
      nextVisit: '2024-01-20',
      indicators: {
        sanitation: 50,
        education: 40,
        healthcare: 45,
        infrastructure: 40,
        water: 60
      }
    }
  ]

  const recentSubmissions = [
    {
      id: 1,
      village: 'Rampur',
      type: 'Sanitation Survey',
      date: '2024-01-15',
      status: 'approved',
      photos: 12,
      gps: true
    },
    {
      id: 2,
      village: 'Devgarh',
      type: 'Education Assessment',
      date: '2024-01-12',
      status: 'pending',
      photos: 8,
      gps: true
    },
    {
      id: 3,
      village: 'Rampur',
      type: 'Infrastructure Update',
      date: '2024-01-10',
      status: 'rejected',
      photos: 15,
      gps: true
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'text-success-600 bg-success-100'
      case 'pending': return 'text-warning-600 bg-warning-100'
      case 'rejected': return 'text-danger-600 bg-danger-100'
      case 'in-progress': return 'text-primary-600 bg-primary-100'
      default: return 'text-secondary-600 bg-secondary-100'
    }
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Target },
    { id: 'villages', label: 'My Villages', icon: MapPin },
    { id: 'submissions', label: 'Submissions', icon: FileText },
    { id: 'schedule', label: 'Schedule', icon: Calendar }
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
            Field Worker Dashboard
          </h1>
          <p className="text-xl text-secondary-600">
            Monitor assigned villages and submit progress updates
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
                    <p className="text-sm font-medium text-secondary-600 mb-1">Assigned Villages</p>
                    <p className="text-3xl font-bold text-secondary-900">2</p>
                  </div>
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary-600" />
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-secondary-600 mb-1">Pending Submissions</p>
                    <p className="text-3xl font-bold text-secondary-900">3</p>
                  </div>
                  <div className="w-12 h-12 bg-warning-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-warning-600" />
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-secondary-600 mb-1">Approved This Month</p>
                    <p className="text-3xl font-bold text-secondary-900">8</p>
                  </div>
                  <div className="w-12 h-12 bg-success-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-success-600" />
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-secondary-600 mb-1">Photos Uploaded</p>
                    <p className="text-3xl font-bold text-secondary-900">156</p>
                  </div>
                  <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center">
                    <Camera className="w-6 h-6 text-secondary-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-secondary-900 mb-6">Quick Actions</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button className="p-4 border border-secondary-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-all duration-200 text-left">
                  <Plus className="w-6 h-6 text-primary-600 mb-2" />
                  <p className="text-sm font-medium text-secondary-900">New Survey</p>
                  <p className="text-xs text-secondary-500">Submit village survey data</p>
                </button>
                
                <button className="p-4 border border-secondary-200 rounded-lg hover:border-success-300 hover:bg-success-50 transition-all duration-200 text-left">
                  <Camera className="w-6 h-6 text-success-600 mb-2" />
                  <p className="text-sm font-medium text-secondary-900">Upload Photos</p>
                  <p className="text-xs text-secondary-500">Add progress photos</p>
                </button>
                
                <button className="p-4 border border-secondary-200 rounded-lg hover:border-warning-300 hover:bg-warning-50 transition-all duration-200 text-left">
                  <Calendar className="w-6 h-6 text-warning-600 mb-2" />
                  <p className="text-sm font-medium text-secondary-900">Schedule Visit</p>
                  <p className="text-xs text-secondary-500">Plan next field visit</p>
                </button>
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
            {assignedVillages.map((village, index) => (
              <motion.div
                key={village.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="card p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-secondary-900 mb-2">{village.name}</h3>
                    <p className="text-secondary-600">{village.district} District</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(village.status)}`}>
                      {village.status.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <p className="text-sm text-secondary-500 mb-2">Overall Progress</p>
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 bg-secondary-200 rounded-full h-2">
                        <div 
                          className="bg-primary-600 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${village.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-secondary-900">{village.progress}%</span>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm text-secondary-500 mb-1">Last Visit</p>
                    <p className="text-sm font-medium text-secondary-900">{village.lastVisit}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-secondary-500 mb-1">Next Visit</p>
                    <p className="text-sm font-medium text-secondary-900">{village.nextVisit}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-medium text-secondary-700 mb-3">Indicator Progress</h4>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {Object.entries(village.indicators).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <p className="text-xs text-secondary-500 capitalize mb-1">{key}</p>
                        <div className="w-full bg-secondary-200 rounded-full h-2 mb-1">
                          <div 
                            className={`h-2 rounded-full transition-all duration-500 ${
                              value >= 80 ? 'bg-success-500' : 
                              value >= 60 ? 'bg-warning-500' : 'bg-danger-500'
                            }`}
                            style={{ width: `${value}%` }}
                          ></div>
                        </div>
                        <p className="text-xs font-medium text-secondary-900">{value}%</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex space-x-3">
                    <button className="btn-primary px-4 py-2 text-sm">
                      <Plus className="w-4 h-4 mr-2" />
                      Submit Update
                    </button>
                    <button className="btn-outline px-4 py-2 text-sm">
                      <Camera className="w-4 h-4 mr-2" />
                      Add Photos
                    </button>
                  </div>
                  <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                    View Details →
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {activeTab === 'submissions' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="card p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-secondary-900">Recent Submissions</h3>
                <button className="btn-primary px-4 py-2 text-sm">
                  <Plus className="w-4 h-4 mr-2" />
                  New Submission
                </button>
              </div>

              <div className="space-y-4">
                {recentSubmissions.map((submission, index) => (
                  <motion.div
                    key={submission.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="p-4 border border-secondary-200 rounded-lg hover:border-secondary-300 transition-colors duration-200"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="font-medium text-secondary-900">{submission.type}</h4>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(submission.status)}`}>
                            {submission.status.toUpperCase()}
                          </span>
                        </div>
                        <p className="text-sm text-secondary-600 mb-2">{submission.village} • {submission.date}</p>
                        <div className="flex items-center space-x-4 text-xs text-secondary-500">
                          <span className="flex items-center">
                            <Camera className="w-3 h-3 mr-1" />
                            {submission.photos} photos
                          </span>
                          <span className="flex items-center">
                            <MapPin className="w-3 h-3 mr-1" />
                            GPS tagged
                          </span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button className="btn-outline px-3 py-1 text-xs">View</button>
                        {submission.status === 'rejected' && (
                          <button className="btn-primary px-3 py-1 text-xs">Resubmit</button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'schedule' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-secondary-900 mb-6">Upcoming Visits</h3>
              
              <div className="space-y-4">
                <div className="p-4 border border-secondary-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-secondary-900">Rampur Village</h4>
                    <span className="text-sm text-secondary-500">Jan 22, 2024</span>
                  </div>
                  <p className="text-sm text-secondary-600 mb-3">Sanitation progress assessment and photo documentation</p>
                  <div className="flex items-center space-x-2">
                    <button className="btn-primary px-3 py-1 text-xs">Start Visit</button>
                    <button className="btn-outline px-3 py-1 text-xs">Reschedule</button>
                  </div>
                </div>

                <div className="p-4 border border-secondary-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-secondary-900">Devgarh Village</h4>
                    <span className="text-sm text-secondary-500">Jan 25, 2024</span>
                  </div>
                  <p className="text-sm text-secondary-600 mb-3">Education infrastructure inspection and updates</p>
                  <div className="flex items-center space-x-2">
                    <button className="btn-primary px-3 py-1 text-xs">Start Visit</button>
                    <button className="btn-outline px-3 py-1 text-xs">Reschedule</button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default FieldWorkerDashboard
