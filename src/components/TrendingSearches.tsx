'use client'

import { motion } from 'framer-motion'
import { ChartBarIcon, FireIcon, MapPinIcon } from '@heroicons/react/24/outline'

export default function TrendingSearches() {
  const trendingSearches = [
    { term: "Brunch spots", category: "Restaurants", trend: "+25%", hot: true },
    { term: "Coffee shops with WiFi", category: "Cafés", trend: "+18%", hot: false },
    { term: "Auto repair near me", category: "Services", trend: "+32%", hot: true },
    { term: "Hair salons", category: "Beauty", trend: "+15%", hot: false },
    { term: "Pet grooming", category: "Pets", trend: "+28%", hot: true },
    { term: "Italian restaurants", category: "Restaurants", trend: "+12%", hot: false }
  ]

  const localTrends = [
    { location: "Downtown", searches: ["Rooftop bars", "Sushi restaurants", "Art galleries"] },
    { location: "Midtown", searches: ["Coffee shops", "Gyms", "Lunch spots"] },
    { location: "Suburbs", searches: ["Family restaurants", "Auto services", "Shopping centers"] }
  ]

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
            What's Trending
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover what others are searching for in your area and find the hottest new businesses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Trending Searches */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-6"
          >
            <div className="flex items-center space-x-2 mb-6">
              <ChartBarIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Trending Now
              </h3>
            </div>

            <div className="space-y-3">
              {trendingSearches.map((search, index) => (
                <motion.div
                  key={search.term}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow duration-200 cursor-pointer group"
                >
                  <div className="flex items-center space-x-3">
                    {search.hot && (
                      <FireIcon className="w-4 h-4 text-orange-500 animate-pulse" />
                    )}
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                        {search.term}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {search.category}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-green-600 dark:text-green-400">
                      {search.trend}
                    </span>
                    <ChartBarIcon className="w-4 h-4 text-green-600 dark:text-green-400" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Local Trends */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-6"
          >
            <div className="flex items-center space-x-2 mb-6">
              <MapPinIcon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Popular by Area
              </h3>
            </div>

            <div className="space-y-6">
              {localTrends.map((area, index) => (
                <motion.div
                  key={area.location}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-lg p-4"
                >
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    {area.location}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {area.searches.map((search, searchIndex) => (
                      <span
                        key={searchIndex}
                        className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-400 text-sm rounded-full hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-colors duration-200 cursor-pointer"
                      >
                        {search}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* AI Insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-2xl p-6 text-center"
        >
          <div className="inline-flex items-center space-x-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400 px-4 py-2 rounded-full mb-4">
            <FireIcon className="w-4 h-4" />
            <span className="text-sm font-medium">AI Insight</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Weekend brunch spots are 40% more popular this month
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Based on search patterns, users are particularly interested in brunch spots with outdoor seating and bottomless mimosas.
          </p>
        </motion.div>
      </div>
    </section>
  )
} 