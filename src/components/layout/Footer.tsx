import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Mail, Phone, ExternalLink } from 'lucide-react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    'Platform': [
      { name: 'Village Map', href: '/map' },
      { name: 'District Overview', href: '/district/overview' },
      { name: 'About Scheme', href: '/about' },
    ],
    'Resources': [
      { name: 'PMAGY Portal', href: 'https://pmagy.gov.in', external: true },
      { name: 'Swachh Bharat', href: 'https://swachhbharat.mygov.in', external: true },
      { name: 'Jal Jeevan Mission', href: 'https://jaljeevanmission.gov.in', external: true },
    ],
    'Support': [
      { name: 'Help Center', href: '/help' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'Privacy Policy', href: '/privacy' },
    ]
  }

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">GramDarpan</span>
            </div>
            <p className="text-secondary-300 text-sm leading-relaxed mb-6">
              Centralized platform for monitoring Adarsh Gram development progress with transparency and role-based access for all stakeholders.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-secondary-300">
                <Mail className="w-4 h-4" />
                <span>support@gramdarpan.gov.in</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-secondary-300">
                <Phone className="w-4 h-4" />
                <span>+91 1800-123-4567</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-lg font-semibold mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    {'external' in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary-300 hover:text-primary-400 transition-colors duration-200 text-sm flex items-center space-x-1"
                      >
                        <span>{link.name}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-secondary-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-secondary-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-secondary-400 mb-4 md:mb-0">
              © {currentYear} GramDarpan. All rights reserved. Developed for Adarsh Gram Yojana.
            </div>
            <div className="flex items-center space-x-6 text-sm text-secondary-400">
              <span>Powered by Government of India</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success-500 rounded-full animate-pulse"></div>
                <span>System Operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
