'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { AdjustmentsHorizontalIcon, StarIcon, ClockIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'

export default function SearchSection() {
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState({
    rating: 0,
    priceRange: '',
    distance: '',
    openNow: false,
    features: [] as string[]
  })

  const priceRanges = ['$', '$$', '$$$', '$$$$']
  const distances = ['1 mile', '5 miles', '10 miles', '25 miles']
  const features = ['Delivery', 'Takeout', 'Reservations', 'Wheelchair Accessible', 'Outdoor Seating', 'Wi-Fi', 'Parking']

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Smart Search Filters
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Refine your search with intelligent filters powered by AI to find exactly what you're looking for.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6"
        >
          {/* Filter Toggle */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Advanced Filters</h3>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <AdjustmentsHorizontalIcon className="w-5 h-5" />
              <span>{showFilters ? 'Hide' : 'Show'} Filters</span>
            </button>
          </div>

          {/* Filter Content */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {/* Rating Filter */}
              <div className="space-y-3">
                <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  <StarIcon className="w-4 h-4" />
                  <span>Minimum Rating</span>
                </label>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                      key={rating}
                      onClick={() => setFilters(prev => ({ ...prev, rating }))}
                      className={`p-1 rounded ${
                        filters.rating >= rating
                          ? 'text-yellow-500'
                          : 'text-gray-300 dark:text-gray-600'
                      }`}
                    >
                      <StarIcon className="w-6 h-6 fill-current" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="space-y-3">
                <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  <CurrencyDollarIcon className="w-4 h-4" />
                  <span>Price Range</span>
                </label>
                <div className="flex space-x-2">
                  {priceRanges.map((price) => (
                    <button
                      key={price}
                      onClick={() => setFilters(prev => ({ ...prev, priceRange: price }))}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                        filters.priceRange === price
                          ? 'bg-blue-600 text-white'
                          : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600'
                      }`}
                    >
                      {price}
                    </button>
                  ))}
                </div>
              </div>

              {/* Distance */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Distance
                </label>
                <select
                  value={filters.distance}
                  onChange={(e) => setFilters(prev => ({ ...prev, distance: e.target.value }))}
                  className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white"
                >
                  <option value="">Any distance</option>
                  {distances.map((distance) => (
                    <option key={distance} value={distance}>
                      Within {distance}
                    </option>
                  ))}
                </select>
              </div>

              {/* Open Now */}
              <div className="space-y-3">
                <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  <ClockIcon className="w-4 h-4" />
                  <span>Availability</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={filters.openNow}
                    onChange={(e) => setFilters(prev => ({ ...prev, openNow: e.target.checked }))}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-gray-700 dark:text-gray-300">Open now</span>
                </label>
              </div>
            </motion.div>
          )}

          {/* Features */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700"
            >
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Features</h4>
              <div className="flex flex-wrap gap-2">
                {features.map((feature) => (
                  <button
                    key={feature}
                    onClick={() => {
                      setFilters(prev => ({
                        ...prev,
                        features: prev.features.includes(feature)
                          ? prev.features.filter(f => f !== feature)
                          : [...prev.features, feature]
                      }))
                    }}
                    className={`px-3 py-1 rounded-full text-sm transition-colors duration-200 ${
                      filters.features.includes(feature)
                        ? 'bg-blue-600 text-white'
                        : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600'
                    }`}
                  >
                    {feature}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
} 