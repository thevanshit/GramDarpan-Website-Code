import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  MapPin, 
  BarChart3, 
  Users, 
  Building2, 
  ArrowRight, 
  CheckCircle,
  TrendingUp,
  Shield,
  Eye,
  Globe,
  Smartphone,
  Database
} from 'lucide-react'

const HomePage: React.FC = () => {
  const features = [
    {
      icon: MapPin,
      title: 'Interactive Village Map',
      description: 'Real-time visualization of village development progress with color-coded heatmaps and detailed analytics.',
      color: 'text-primary-600'
    },
    {
      icon: BarChart3,
      title: 'Comprehensive Dashboards',
      description: 'Role-based dashboards for field workers, agencies, district officials, and ministry personnel.',
      color: 'text-success-600'
    },
    {
      icon: Users,
      title: 'Multi-Stakeholder Access',
      description: 'Secure access for different user types with customized features and permissions.',
      color: 'text-warning-600'
    },
    {
      icon: Building2,
      title: '50+ Development Indicators',
      description: 'Track progress across sanitation, education, healthcare, infrastructure, and more.',
      color: 'text-danger-600'
    }
  ]

  const stats = [
    { label: 'Villages Monitored', value: '2,50,000+', icon: MapPin },
    { label: 'Active Users', value: '15,000+', icon: Users },
    { label: 'Development Indicators', value: '50+', icon: BarChart3 },
    { label: 'States Covered', value: '28', icon: Building2 }
  ]

  const userTypes = [
    {
      role: 'Field Workers',
      description: 'Submit survey data, upload photos with GPS, update indicator progress',
      access: 'Half Access',
      color: 'bg-primary-100 text-primary-800'
    },
    {
      role: 'Agencies',
      description: 'View assigned tasks, update work progress, attach proofs, track milestones',
      access: 'Full Access',
      color: 'bg-success-100 text-success-800'
    },
    {
      role: 'District Officials',
      description: 'Approve/reject submissions, monitor villages, generate reports',
      access: 'Full Access',
      color: 'bg-warning-100 text-warning-800'
    },
    {
      role: 'State Officials',
      description: 'View district dashboards, monitor fund utilization, identify priority villages',
      access: 'Full Access',
      color: 'bg-danger-100 text-danger-800'
    },
    {
      role: 'Ministry Team',
      description: 'National-level dashboards, cross-state analytics, decision support',
      access: 'Full Access',
      color: 'bg-secondary-100 text-secondary-800'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden hero-gradient">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                <span className="block">Transforming</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                  Rural India
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                GramDarpan - The comprehensive platform for monitoring Adarsh Gram development progress with transparency and accountability.
                <br />
                <span className="text-lg text-white/80">Starting with Haryana's Hisar District</span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                to="/map"
                className="btn bg-white text-primary-700 hover:bg-white/90 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Explore Village Map
              </Link>
              <Link
                to="/about"
                className="btn border-2 border-white text-white hover:bg-white hover:text-primary-700 px-8 py-4 text-lg font-semibold transition-all duration-300"
              >
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-yellow-300/20 rounded-full blur-xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-orange-300/20 rounded-full blur-xl animate-bounce-slow"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <div className="text-3xl font-bold text-secondary-900 mb-2">{stat.value}</div>
                  <div className="text-secondary-600 font-medium">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Powerful Features for
              <span className="text-gradient"> Rural Development</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Comprehensive tools and insights to monitor, track, and accelerate Adarsh Gram development across India.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card-hover p-6 text-center"
                >
                  <div className={`w-16 h-16 ${feature.color.replace('text-', 'bg-').replace('-600', '-100')} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <Icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-900 mb-4">{feature.title}</h3>
                  <p className="text-secondary-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* User Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Role-Based Access for
              <span className="text-gradient"> Every Stakeholder</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Customized dashboards and features designed for different user types in the Adarsh Gram ecosystem.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userTypes.map((userType, index) => (
              <motion.div
                key={userType.role}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-6 hover:shadow-medium transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-secondary-900">{userType.role}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${userType.color}`}>
                    {userType.access}
                  </span>
                </div>
                <p className="text-secondary-600 text-sm leading-relaxed">{userType.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Built with
              <span className="text-gradient"> Modern Technology</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Leveraging cutting-edge technology for seamless data integration and real-time monitoring.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Database className="w-10 h-10 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">Data Integration</h3>
              <p className="text-secondary-600">
                Seamless integration with PMAGY Portal, Swachh Bharat Mission, PMAY, Jal Jeevan Mission, and other government schemes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Smartphone className="w-10 h-10 text-success-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">Mobile-First</h3>
              <p className="text-secondary-600">
                Optimized for field workers with mobile-friendly interfaces, GPS tagging, and offline capabilities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-warning-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-warning-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">AI & Analytics</h3>
              <p className="text-secondary-600">
                Machine learning integration for budget prediction, auto-prioritization, and deadline forecasting.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Rural India?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of stakeholders already using GramDarpan to monitor and accelerate Adarsh Gram development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/login"
                className="btn bg-white text-primary-700 hover:bg-white/90 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/map"
                className="btn border-2 border-white text-white hover:bg-white hover:text-primary-700 px-8 py-4 text-lg font-semibold transition-all duration-300"
              >
                Explore Platform
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
