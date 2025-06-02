'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  MagnifyingGlassIcon, 
  MapPinIcon, 
  SparklesIcon,
  MicrophoneIcon 
} from '@heroicons/react/24/outline'

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('')
  const [location, setLocation] = useState('')
  const [isListening, setIsListening] = useState(false)

  const handleVoiceSearch = () => {
    setIsListening(!isListening)
    // Voice search implementation would go here
  }

  const quickSearches = [
    'Italian restaurants',
    'Coffee shops',
    'Hair salons',
    'Auto repair',
    'Dentists',
    'Gyms'
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Search implementation would go here
    console.log('Searching for:', searchQuery, 'in', location)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
      
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-full px-4 py-2 text-sm"
          >
            <SparklesIcon className="w-4 h-4 text-yellow-500" />
            <span className="text-gray-700 dark:text-gray-300">AI-Powered Business Discovery</span>
          </motion.div>

          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
              Discover Amazing
              <span className="block gradient-text">Local Businesses</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Find the perfect restaurants, services, and shops near you with our AI-powered recommendations and intelligent search.
            </p>
          </div>

          {/* Search Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <form onSubmit={handleSearch} className="relative">
              <div className="flex flex-col md:flex-row gap-4 p-2 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700">
                {/* Search Input */}
                <div className="flex-1 relative">
                  <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="What are you looking for?"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-12 py-4 bg-transparent border-none focus:outline-none text-gray-900 dark:text-white placeholder-gray-500 text-lg"
                  />
                  <button
                    type="button"
                    onClick={handleVoiceSearch}
                    className={`absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-lg transition-colors duration-200 ${
                      isListening 
                        ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400' 
                        : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-400'
                    }`}
                  >
                    <MicrophoneIcon className="w-5 h-5" />
                  </button>
                </div>

                {/* Location Input */}
                <div className="flex-1 relative md:border-l md:border-gray-200 dark:md:border-gray-700 md:pl-4">
                  <MapPinIcon className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full pl-12 md:pl-16 pr-4 py-4 bg-transparent border-none focus:outline-none text-gray-900 dark:text-white placeholder-gray-500 text-lg"
                  />
                </div>

                {/* Search Button */}
                <button
                  type="submit"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Search
                </button>
              </div>
            </form>
          </motion.div>

          {/* Quick Searches */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-4"
          >
            <p className="text-gray-600 dark:text-gray-400">Popular searches:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {quickSearches.map((search, index) => (
                <motion.button
                  key={search}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  onClick={() => setSearchQuery(search)}
                  className="px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-200"
                >
                  {search}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto pt-12"
          >
            {[
              { label: 'Businesses', value: '50K+' },
              { label: 'Reviews', value: '2M+' },
              { label: 'Cities', value: '500+' },
              { label: 'Users', value: '1M+' },
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 