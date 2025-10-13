import React from 'react'
import { motion } from 'framer-motion'
import { 
  Target, 
  Users, 
  MapPin, 
  BarChart3, 
  Shield, 
  Globe, 
  Award,
  CheckCircle,
  ArrowRight,
  Building2,
  Heart,
  Lightbulb
} from 'lucide-react'

const AboutPage: React.FC = () => {
  const objectives = [
    {
      icon: Target,
      title: 'Transparency',
      description: 'Public access to village development progress and government spending',
      color: 'text-primary-600',
      bgColor: 'bg-primary-100'
    },
    {
      icon: Users,
      title: 'Accountability',
      description: 'Clear tracking of responsibilities and progress across all stakeholders',
      color: 'text-success-600',
      bgColor: 'bg-success-100'
    },
    {
      icon: BarChart3,
      title: 'Data-Driven Decisions',
      description: 'Evidence-based planning and resource allocation using real-time data',
      color: 'text-warning-600',
      bgColor: 'bg-warning-100'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Systematic monitoring and verification of development outcomes',
      color: 'text-danger-600',
      bgColor: 'bg-danger-100'
    }
  ]

  const features = [
    {
      title: '50+ Development Indicators',
      description: 'Comprehensive tracking across sanitation, education, healthcare, infrastructure, and more',
      icon: BarChart3
    },
    {
      title: 'Real-Time Monitoring',
      description: 'Live updates from field workers, agencies, and government officials',
      icon: Globe
    },
    {
      title: 'Role-Based Access',
      description: 'Customized dashboards for different user types and responsibilities',
      icon: Users
    },
    {
      title: 'Mobile-First Design',
      description: 'Optimized for field workers with GPS tagging and offline capabilities',
      icon: MapPin
    },
    {
      title: 'AI Integration',
      description: 'Machine learning for budget prediction and auto-prioritization',
      icon: Lightbulb
    },
    {
      title: 'Government Integration',
      description: 'Seamless data flow with PMAGY and other government schemes',
      icon: Building2
    }
  ]

  const milestones = [
    { year: '2025', title: 'Platform Launch', description: 'GramDarpan launched with initial 10,000 villages' },
    { year: '2026', title: 'Mobile App Release', description: 'Field worker mobile application launched' },
    { year: '2027', title: 'AI Integration', description: 'Machine learning features added for predictions' },
    { year: '2028', title: 'National Expansion', description: 'Coverage expanded to all 28 states' },
    { year: '2029', title: 'Advanced Analytics', description: 'Real-time dashboards and cross-state analytics' }
  ]

  const stats = [
    { label: 'Villages Monitored', value: '2,50,000+', icon: MapPin },
    { label: 'Active Users', value: '15,000+', icon: Users },
    { label: 'Data Points', value: '12.5M+', icon: BarChart3 },
    { label: 'States Covered', value: '28', icon: Globe }
  ]

  return (
    <div className="min-h-screen gradient-bg">
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About GramDarpan
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              A comprehensive platform revolutionizing rural development monitoring through transparency, 
              accountability, and data-driven decision making across India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-secondary-600 max-w-4xl mx-auto leading-relaxed">
              To transform rural India by providing a centralized, transparent, and efficient platform 
              for monitoring Adarsh Gram development progress, ensuring accountability and accelerating 
              the pace of rural transformation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {objectives.map((objective, index) => {
              const Icon = objective.icon
              return (
                <motion.div
                  key={objective.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card-hover p-6 text-center"
                >
                  <div className={`w-16 h-16 ${objective.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <Icon className={`w-8 h-8 ${objective.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-900 mb-4">{objective.title}</h3>
                  <p className="text-secondary-600 leading-relaxed">{objective.description}</p>
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
              Key Features
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Comprehensive tools and capabilities designed to streamline rural development monitoring
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card p-6"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-secondary-900 mb-2">{feature.title}</h3>
                      <p className="text-secondary-600 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Impact by Numbers
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Real impact across India's rural landscape
            </p>
          </motion.div>

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
                  <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-10 h-10 text-primary-600" />
                  </div>
                  <div className="text-4xl font-bold text-secondary-900 mb-2">{stat.value}</div>
                  <div className="text-secondary-600 font-medium">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Key milestones in our mission to transform rural India
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-200"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="card p-6">
                      <div className="text-2xl font-bold text-primary-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-secondary-900 mb-2">{milestone.title}</h3>
                      <p className="text-secondary-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center relative z-10">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
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
              Join the Rural Transformation
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Be part of India's journey towards comprehensive rural development. 
              Together, we can build a better future for millions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn bg-white text-primary-700 hover:bg-white/90 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                <Heart className="w-5 h-5 mr-2" />
                Get Involved
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="btn border-2 border-white text-white hover:bg-white hover:text-primary-700 px-8 py-4 text-lg font-semibold transition-all duration-300">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
