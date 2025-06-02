'use client'

import Link from 'next/link'
import { MapPinIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    discover: [
      { name: 'Browse Businesses', href: '/browse' },
      { name: 'Categories', href: '/categories' },
      { name: 'Near Me', href: '/near-me' },
      { name: 'Top Rated', href: '/top-rated' },
      { name: 'New Businesses', href: '/new' }
    ],
    business: [
      { name: 'List Your Business', href: '/business/add' },
      { name: 'Business Login', href: '/business/login' },
      { name: 'Advertising', href: '/business/advertising' },
      { name: 'Business App', href: '/business/app' },
      { name: 'Success Stories', href: '/business/success' }
    ],
    support: [
      { name: 'Help Center', href: '/help' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'Safety Guidelines', href: '/safety' },
      { name: 'Report Business', href: '/report' },
      { name: 'Accessibility', href: '/accessibility' }
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Press', href: '/press' },
      { name: 'Blog', href: '/blog' },
      { name: 'Investor Relations', href: '/investors' }
    ]
  }

  const socialLinks = [
    { name: 'Facebook', href: 'https://facebook.com', icon: 'facebook' },
    { name: 'Twitter', href: 'https://twitter.com', icon: 'twitter' },
    { name: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <MapPinIcon className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">LocalDiscover</span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Discover amazing local businesses with AI-powered recommendations. 
              Your trusted companion for finding the best restaurants, services, and shops in your area.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-400">
                <PhoneIcon className="w-4 h-4" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <EnvelopeIcon className="w-4 h-4" />
                <span>hello@localdiscover.com</span>
              </div>
            </div>
          </div>

          {/* Discover Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Discover</h3>
            <ul className="space-y-2">
              {footerLinks.discover.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For Business Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">For Business</h3>
            <ul className="space-y-2">
              {footerLinks.business.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="py-8 border-t border-gray-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-lg font-semibold mb-2">Stay in the loop</h3>
              <p className="text-gray-400">
                Get the latest updates on new businesses and exclusive offers.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {currentYear} LocalDiscover. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={social.name}
                >
                  <div className="w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors duration-200">
                    <span className="text-xs font-semibold">
                      {social.icon.charAt(0).toUpperCase()}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 