import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Building2, 
  CheckCircle, 
  Clock, 
  AlertCircle,
  FileText,
  Calendar,
  Users,
  Target,
  TrendingUp,
  Upload,
  Eye
} from 'lucide-react'

const AgencyDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('tasks')
  
  const assignedTasks = [
    {
      id: 1,
      title: 'Sanitation Infrastructure - Rampur',
      village: 'Rampur',
      district: 'Mumbai',
      deadline: '2024-02-15',
      status: 'in-progress',
      progress: 65,
      budget: '₹2,50,000',
      spent: '₹1,62,500',
      priority: 'high'
    },
    {
      id: 2,
      title: 'School Building Construction - Devgarh',
      village: 'Devgarh',
      district: 'Pune',
      deadline: '2024-03-20',
      status: 'pending',
      progress: 0,
      budget: '₹5,00,000',
      spent: '₹0',
      priority: 'medium'
    },
    {
      id: 3,
      title: 'Water Supply System - Khandwa',
      village: 'Khandwa',
      district: 'Indore',
      deadline: '2024-01-30',
      status: 'completed',
      progress: 100,
      budget: '₹3,75,000',
      spent: '₹3,75,000',
      priority: 'high'
    }
  ]

  const recentUpdates = [
    {
      id: 1,
      task: 'Sanitation Infrastructure - Rampur',
      type: 'Progress Update',
      date: '2024-01-15',
      status: 'approved',
      attachments: 3
    },
    {
      id: 2,
      task: 'School Building Construction - Devgarh',
      type: 'Budget Request',
      date: '2024-01-12',
      status: 'pending',
      attachments: 1
    },
    {
      id: 3,
      task: 'Water Supply System - Khandwa',
      type: 'Completion Report',
      date: '2024-01-10',
      status: 'approved',
      attachments: 5
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-success-600 bg-success-100'
      case 'in-progress': return 'text-primary-600 bg-primary-100'
      case 'pending': return 'text-warning-600 bg-warning-100'
      case 'overdue': return 'text-danger-600 bg-danger-100'
      case 'approved': return 'text-success-600 bg-success-100'
      default: return 'text-secondary-600 bg-secondary-100'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-danger-600'
      case 'medium': return 'text-warning-600'
      case 'low': return 'text-success-600'
      default: return 'text-secondary-600'
    }
  }

  const tabs = [
    { id: 'tasks', label: 'Assigned Tasks', icon: Target },
    { id: 'updates', label: 'Updates', icon: FileText },
    { id: 'budget', label: 'Budget', icon: TrendingUp },
    { id: 'reports', label: 'Reports', icon: Building2 }
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
            Agency Dashboard
          </h1>
          <p className="text-xl text-secondary-600">
            Manage assigned tasks and track project progress
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
        {activeTab === 'tasks' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="card p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-secondary-600 mb-1">Total Tasks</p>
                    <p className="text-3xl font-bold text-secondary-900">3</p>
                  </div>
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary-600" />
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-secondary-600 mb-1">In Progress</p>
                    <p className="text-3xl font-bold text-secondary-900">1</p>
                  </div>
                  <div className="w-12 h-12 bg-warning-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-warning-600" />
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-secondary-600 mb-1">Completed</p>
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
                    <p className="text-sm font-medium text-secondary-600 mb-1">Budget Used</p>
                    <p className="text-3xl font-bold text-secondary-900">65%</p>
                  </div>
                  <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-secondary-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* Task List */}
            <div className="space-y-4">
              {assignedTasks.map((task, index) => (
                <motion.div
                  key={task.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="card p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-secondary-900">{task.title}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(task.status)}`}>
                          {task.status.replace('-', ' ').toUpperCase()}
                        </span>
                        <span className={`text-xs font-medium ${getPriorityColor(task.priority)}`}>
                          {task.priority.toUpperCase()} PRIORITY
                        </span>
                      </div>
                      <p className="text-secondary-600 mb-2">{task.village}, {task.district}</p>
                      <p className="text-sm text-secondary-500">Deadline: {task.deadline}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div>
                      <p className="text-sm text-secondary-500 mb-2">Progress</p>
                      <div className="flex items-center space-x-2">
                        <div className="flex-1 bg-secondary-200 rounded-full h-2">
                          <div 
                            className="bg-primary-600 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${task.progress}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium text-secondary-900">{task.progress}%</span>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm text-secondary-500 mb-1">Budget</p>
                      <p className="text-sm font-medium text-secondary-900">{task.budget}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-secondary-500 mb-1">Spent</p>
                      <p className="text-sm font-medium text-secondary-900">{task.spent}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex space-x-3">
                      <button className="btn-primary px-4 py-2 text-sm">
                        <Upload className="w-4 h-4 mr-2" />
                        Update Progress
                      </button>
                      <button className="btn-outline px-4 py-2 text-sm">
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                      </button>
                    </div>
                    <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                      View Reports →
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === 'updates' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="card p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-secondary-900">Recent Updates</h3>
                <button className="btn-primary px-4 py-2 text-sm">
                  <Upload className="w-4 h-4 mr-2" />
                  Submit Update
                </button>
              </div>

              <div className="space-y-4">
                {recentUpdates.map((update, index) => (
                  <motion.div
                    key={update.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="p-4 border border-secondary-200 rounded-lg hover:border-secondary-300 transition-colors duration-200"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="font-medium text-secondary-900">{update.type}</h4>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(update.status)}`}>
                            {update.status.toUpperCase()}
                          </span>
                        </div>
                        <p className="text-sm text-secondary-600 mb-2">{update.task}</p>
                        <div className="flex items-center space-x-4 text-xs text-secondary-500">
                          <span>{update.date}</span>
                          <span className="flex items-center">
                            <FileText className="w-3 h-3 mr-1" />
                            {update.attachments} attachments
                          </span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button className="btn-outline px-3 py-1 text-xs">View</button>
                        {update.status === 'pending' && (
                          <button className="btn-primary px-3 py-1 text-xs">Edit</button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'budget' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-secondary-900 mb-6">Budget Overview</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-secondary-600">Total Allocated</span>
                    <span className="font-semibold text-secondary-900">₹11,25,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-secondary-600">Amount Spent</span>
                    <span className="font-semibold text-secondary-900">₹5,37,500</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-secondary-600">Remaining</span>
                    <span className="font-semibold text-success-600">₹5,87,500</span>
                  </div>
                  <div className="w-full bg-secondary-200 rounded-full h-2 mt-4">
                    <div className="bg-primary-600 h-2 rounded-full" style={{ width: '48%' }}></div>
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <h3 className="text-lg font-semibold text-secondary-900 mb-6">Budget by Project</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-secondary-600">Sanitation Infrastructure</span>
                    <span className="text-sm font-medium text-secondary-900">₹2,50,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-secondary-600">School Building</span>
                    <span className="text-sm font-medium text-secondary-900">₹5,00,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-secondary-600">Water Supply</span>
                    <span className="text-sm font-medium text-secondary-900">₹3,75,000</span>
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
              <h3 className="text-lg font-semibold text-secondary-900 mb-6">Generate Reports</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button className="p-4 border border-secondary-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-all duration-200 text-left">
                  <FileText className="w-6 h-6 text-primary-600 mb-2" />
                  <p className="text-sm font-medium text-secondary-900">Progress Report</p>
                  <p className="text-xs text-secondary-500">Monthly progress summary</p>
                </button>
                
                <button className="p-4 border border-secondary-200 rounded-lg hover:border-success-300 hover:bg-success-50 transition-all duration-200 text-left">
                  <TrendingUp className="w-6 h-6 text-success-600 mb-2" />
                  <p className="text-sm font-medium text-secondary-900">Budget Report</p>
                  <p className="text-xs text-secondary-500">Financial expenditure details</p>
                </button>
                
                <button className="p-4 border border-secondary-200 rounded-lg hover:border-warning-300 hover:bg-warning-50 transition-all duration-200 text-left">
                  <Calendar className="w-6 h-6 text-warning-600 mb-2" />
                  <p className="text-sm font-medium text-secondary-900">Timeline Report</p>
                  <p className="text-xs text-secondary-500">Project timeline and milestones</p>
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

export default AgencyDashboard
