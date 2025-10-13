import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Filter, Search, AlertCircle, Download } from 'lucide-react'

interface Village {
  id: number
  name: string
  district: string
  state: string
  adarshScore: number
  status: 'declared' | 'implementing' | 'not-started'
  population: number
  indicators: {
    sanitation: number
    education: number
    healthcare: number
    infrastructure: number
    water: number
  }
  officer: string
  lastUpdate: string
  coordinates: { lat: number; lng: number }
}

const VillageMapPage: React.FC = () => {
  const [selectedDistrict, setSelectedDistrict] = useState('')
  const [selectedState, setSelectedState] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedVillage, setSelectedVillage] = useState<Village | null>(null)

  // Mock data for demonstration
  const mockVillages: Village[] = [
    {
      id: 1,
      name: 'Ludas',
      district: 'Hisar',
      state: 'Haryana',
      adarshScore: 85,
      status: 'declared',
      population: 2500,
      indicators: {
        sanitation: 90,
        education: 80,
        healthcare: 75,
        infrastructure: 85,
        water: 95
      },
      officer: 'Rajesh Kumar',
      lastUpdate: '2024-01-15',
      coordinates: { lat: 29.1492, lng: 75.7217 }
    },
    {
      id: 2,
      name: 'Bir Hansi',
      district: 'Hisar',
      state: 'Haryana',
      adarshScore: 65,
      status: 'implementing',
      population: 1800,
      indicators: {
        sanitation: 70,
        education: 60,
        healthcare: 65,
        infrastructure: 60,
        water: 75
      },
      officer: 'Priya Sharma',
      lastUpdate: '2024-01-12',
      coordinates: { lat: 29.1667, lng: 75.7000 }
    },
    {
      id: 3,
      name: 'Mangali Kimri',
      district: 'Hisar',
      state: 'Haryana',
      adarshScore: 45,
      status: 'not-started',
      population: 3200,
      indicators: {
        sanitation: 40,
        education: 50,
        healthcare: 45,
        infrastructure: 35,
        water: 55
      },
      officer: 'Amit Singh',
      lastUpdate: '2024-01-10',
      coordinates: { lat: 29.1333, lng: 75.7500 }
    },
    {
      id: 4,
      name: 'Ramayana',
      district: 'Hisar',
      state: 'Haryana',
      adarshScore: 70,
      status: 'implementing',
      population: 2100,
      indicators: {
        sanitation: 75,
        education: 65,
        healthcare: 70,
        infrastructure: 70,
        water: 80
      },
      officer: 'Sunita Patel',
      lastUpdate: '2024-01-14',
      coordinates: { lat: 29.1000, lng: 75.8000 }
    },
    {
      id: 5,
      name: 'Balsamand',
      district: 'Hisar',
      state: 'Haryana',
      adarshScore: 78,
      status: 'implementing',
      population: 1900,
      indicators: {
        sanitation: 80,
        education: 75,
        healthcare: 70,
        infrastructure: 75,
        water: 85
      },
      officer: 'Vikram Mehta',
      lastUpdate: '2024-01-13',
      coordinates: { lat: 29.1200, lng: 75.7200 }
    },
    {
      id: 6,
      name: 'Bawani Khera',
      district: 'Hisar',
      state: 'Haryana',
      adarshScore: 55,
      status: 'not-started',
      population: 2800,
      indicators: {
        sanitation: 50,
        education: 55,
        healthcare: 50,
        infrastructure: 45,
        water: 65
      },
      officer: 'Ravi Kumar',
      lastUpdate: '2024-01-11',
      coordinates: { lat: 29.1400, lng: 75.6800 }
    }
  ]

  const states = ['Haryana', 'Maharashtra', 'Madhya Pradesh', 'Uttar Pradesh', 'Gujarat', 'Karnataka']
  const districts = ['Hisar', 'Mumbai', 'Pune', 'Indore', 'Lucknow', 'Ahmedabad', 'Bangalore']
  const statusOptions = [
    { value: 'all', label: 'All Villages', color: 'text-secondary-600' },
    { value: 'declared', label: 'Declared Adarsh', color: 'text-success-600' },
    { value: 'implementing', label: 'Implementing', color: 'text-warning-600' },
    { value: 'not-started', label: 'Not Started', color: 'text-danger-600' }
  ]

  const getStatusColor = (status: string): string => {
    switch (status) {
      case 'declared': return 'bg-success-500'
      case 'implementing': return 'bg-warning-500'
      case 'not-started': return 'bg-danger-500'
      default: return 'bg-secondary-500'
    }
  }

  const getScoreColor = (score: number): string => {
    if (score >= 80) return 'text-success-600'
    if (score >= 60) return 'text-warning-600'
    return 'text-danger-600'
  }

  const filteredVillages = mockVillages.filter(village => {
    const matchesState = !selectedState || village.state === selectedState
    const matchesDistrict = !selectedDistrict || village.district === selectedDistrict
    const matchesStatus = filterStatus === 'all' || village.status === filterStatus
    const matchesSearch = !searchQuery || village.name.toLowerCase().includes(searchQuery.toLowerCase())
    
    return matchesState && matchesDistrict && matchesStatus && matchesSearch
  })

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
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold text-secondary-900 mb-2">
                Village Progress Map
              </h1>
              <p className="text-xl text-secondary-600 max-w-3xl">
                Interactive visualization of Adarsh Gram development progress across India. 
                Explore villages, track indicators, and monitor real-time updates.
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <button className="btn-outline px-4 py-2 text-sm">
                <Download className="w-4 h-4 mr-2" />
                Export Data
              </button>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <div className="card p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-secondary-900 mb-6 flex items-center">
                <Filter className="w-5 h-5 mr-2" />
                Filters
              </h3>

              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Search Villages
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-secondary-400" />
                  </div>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                    className="input pl-10"
                    placeholder="Enter village name..."
                  />
                </div>
              </div>

              {/* State Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  State
                </label>
                <select
                  value={selectedState}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedState(e.target.value)}
                  className="input"
                >
                  <option value="">All States</option>
                  {states.map(state => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>

              {/* District Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  District
                </label>
                <select
                  value={selectedDistrict}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedDistrict(e.target.value)}
                  className="input"
                >
                  <option value="">All Districts</option>
                  {districts.map(district => (
                    <option key={district} value={district}>{district}</option>
                  ))}
                </select>
              </div>

              {/* Status Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Status
                </label>
                <div className="space-y-2">
                  {statusOptions.map(option => (
                    <label key={option.value} className="flex items-center">
                      <input
                        type="radio"
                        name="status"
                        value={option.value}
                        checked={filterStatus === option.value}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterStatus(e.target.value)}
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-secondary-300"
                      />
                      <span className={`ml-2 text-sm ${option.color}`}>
                        {option.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Summary Stats */}
              <div className="border-t border-secondary-200 pt-6">
                <h4 className="text-sm font-medium text-secondary-700 mb-4">Summary</h4>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-secondary-600">Total Villages</span>
                    <span className="font-medium">{filteredVillages.length}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-success-600">Declared Adarsh</span>
                    <span className="font-medium">
                      {filteredVillages.filter(v => v.status === 'declared').length}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-warning-600">Implementing</span>
                    <span className="font-medium">
                      {filteredVillages.filter(v => v.status === 'implementing').length}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-danger-600">Not Started</span>
                    <span className="font-medium">
                      {filteredVillages.filter(v => v.status === 'not-started').length}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map and Village List */}
          <div className="lg:col-span-3">
            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card p-6 mb-6"
            >
              <div className="h-96 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-lg flex items-center justify-center border-2 border-dashed border-secondary-300">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-primary-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-secondary-700 mb-2">Interactive Map</h3>
                  <p className="text-secondary-500 max-w-md">
                    This would be an interactive map showing village locations with color-coded development scores.
                    Click on villages to view detailed information.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Village List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-secondary-900">
                  Villages ({filteredVillages.length})
                </h3>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-secondary-500">Sort by:</span>
                  <select className="text-sm border border-secondary-300 rounded px-2 py-1">
                    <option>Adarsh Score</option>
                    <option>Population</option>
                    <option>Last Update</option>
                  </select>
                </div>
              </div>
              
              {filteredVillages.map((village, index) => (
                <motion.div
                  key={village.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`card p-6 cursor-pointer transition-all duration-200 hover:shadow-medium ${
                    selectedVillage?.id === village.id ? 'ring-2 ring-primary-500' : ''
                  }`}
                  onClick={() => setSelectedVillage(village)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <h4 className="text-lg font-semibold text-secondary-900">{village.name}</h4>
                        <div className={`w-3 h-3 rounded-full ${getStatusColor(village.status)}`}></div>
                        <span className={`text-sm font-medium ${
                          village.status === 'declared' ? 'text-success-600' :
                          village.status === 'implementing' ? 'text-warning-600' :
                          'text-danger-600'
                        }`}>
                          {village.status.replace('-', ' ').toUpperCase()}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-secondary-500">District</p>
                          <p className="font-medium text-secondary-900">{village.district}</p>
                        </div>
                        <div>
                          <p className="text-sm text-secondary-500">State</p>
                          <p className="font-medium text-secondary-900">{village.state}</p>
                        </div>
                        <div>
                          <p className="text-sm text-secondary-500">Population</p>
                          <p className="font-medium text-secondary-900">{village.population.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-sm text-secondary-500">Officer</p>
                          <p className="font-medium text-secondary-900">{village.officer}</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-6">
                          <div className="text-center">
                            <p className="text-sm text-secondary-500">Adarsh Score</p>
                            <p className={`text-2xl font-bold ${getScoreColor(village.adarshScore)}`}>
                              {village.adarshScore}
                            </p>
                          </div>
                          
                          <div className="flex space-x-4">
                            {Object.entries(village.indicators).map(([key, value]) => (
                              <div key={key} className="text-center">
                                <p className="text-xs text-secondary-500 capitalize">{key}</p>
                                <p className={`text-sm font-medium ${getScoreColor(value)}`}>{value}%</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="text-right">
                          <p className="text-sm text-secondary-500">Last Update</p>
                          <p className="text-sm font-medium text-secondary-900">{village.lastUpdate}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {filteredVillages.length === 0 && (
                <div className="card p-12 text-center">
                  <AlertCircle className="w-16 h-16 text-secondary-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-secondary-700 mb-2">No villages found</h3>
                  <p className="text-secondary-500">Try adjusting your filters to see more results.</p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VillageMapPage