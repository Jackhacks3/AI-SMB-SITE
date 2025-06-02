'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { StarIcon, MapPinIcon, PhoneIcon, ClockIcon } from '@heroicons/react/24/solid'
import { HeartIcon } from '@heroicons/react/24/outline'

export default function FeaturedBusinesses() {
  const businesses = [
    {
      id: 1,
      name: "Bella's Italian Kitchen",
      category: "Italian Restaurant",
      rating: 4.8,
      reviews: 342,
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop",
      address: "123 Main St, Downtown",
      phone: "(555) 123-4567",
      price: "$$",
      openNow: true,
      features: ["Outdoor Seating", "Delivery", "Reservations"]
    },
    {
      id: 2,
      name: "The Coffee Lab",
      category: "Coffee Shop",
      rating: 4.6,
      reviews: 189,
      image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=300&fit=crop",
      address: "456 Oak Ave, Midtown",
      phone: "(555) 987-6543",
      price: "$",
      openNow: true,
      features: ["Wi-Fi", "Takeout", "Outdoor Seating"]
    },
    {
      id: 3,
      name: "Elite Fitness Center",
      category: "Gym & Fitness",
      rating: 4.7,
      reviews: 256,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      address: "789 Fitness Blvd, Sports District",
      phone: "(555) 456-7890",
      price: "$$$",
      openNow: false,
      features: ["Personal Training", "Group Classes", "Pool"]
    },
    {
      id: 4,
      name: "Auto Care Plus",
      category: "Auto Repair",
      rating: 4.9,
      reviews: 167,
      image: "https://images.unsplash.com/photo-1486754735734-325b5831c3ad?w=400&h=300&fit=crop",
      address: "321 Service Rd, Industrial",
      phone: "(555) 234-5678",
      price: "$$",
      openNow: true,
      features: ["Same Day Service", "Warranty", "Free Estimates"]
    }
  ]

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Businesses
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover top-rated local businesses recommended by our AI and trusted by thousands of customers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {businesses.map((business, index) => (
            <motion.div
              key={business.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={business.image}
                  alt={business.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Status Badge */}
                <div className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-medium ${
                  business.openNow 
                    ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                    : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                }`}>
                  {business.openNow ? 'Open' : 'Closed'}
                </div>
                {/* Favorite Button */}
                <button className="absolute top-3 right-3 p-2 bg-white/90 dark:bg-gray-800/90 rounded-full hover:bg-white dark:hover:bg-gray-800 transition-colors duration-200">
                  <HeartIcon className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                </button>
              </div>

              {/* Content */}
              <div className="p-4">
                {/* Header */}
                <div className="mb-3">
                  <h3 className="font-semibold text-gray-900 dark:text-white text-lg mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    {business.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {business.category}
                  </p>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-2 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(business.rating)
                            ? 'text-yellow-400'
                            : 'text-gray-300 dark:text-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {business.rating}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    ({business.reviews})
                  </span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {business.price}
                  </span>
                </div>

                {/* Location */}
                <div className="flex items-start space-x-2 mb-3">
                  <MapPinIcon className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {business.address}
                  </p>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {business.features.slice(0, 2).map((feature) => (
                    <span
                      key={feature}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 text-xs rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                  {business.features.length > 2 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-full">
                      +{business.features.length - 2}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <button className="flex-1 px-3 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200">
                    View Details
                  </button>
                  <button className="p-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200">
                    <PhoneIcon className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button className="px-8 py-3 bg-white dark:bg-gray-900 text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-200">
            View All Businesses
          </button>
        </motion.div>
      </div>
    </section>
  )
} 