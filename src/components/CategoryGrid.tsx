'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  BuildingStorefrontIcon,
  CakeIcon,
  HeartIcon,
  WrenchScrewdriverIcon,
  ScissorsIcon,
  AcademicCapIcon,
  HomeIcon,
  LifebuoyIcon,
  ShoppingBagIcon,
  UserGroupIcon,
  TruckIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

export default function CategoryGrid() {
  const categories = [
    {
      name: "Restaurants",
      icon: BuildingStorefrontIcon,
      count: "2,340",
      gradient: "from-red-500 to-orange-500",
      href: "/category/restaurants"
    },
    {
      name: "Food & Drink",
      icon: CakeIcon,
      count: "1,250",
      gradient: "from-yellow-500 to-red-500",
      href: "/category/food-drink"
    },
    {
      name: "Health & Medical",
      icon: HeartIcon,
      count: "890",
      gradient: "from-pink-500 to-red-500",
      href: "/category/health-medical"
    },
    {
      name: "Auto Services",
      icon: WrenchScrewdriverIcon,
      count: "567",
      gradient: "from-gray-500 to-blue-500",
      href: "/category/auto-services"
    },
    {
      name: "Beauty & Spas",
      icon: ScissorsIcon,
      count: "1,123",
      gradient: "from-purple-500 to-pink-500",
      href: "/category/beauty-spas"
    },
    {
      name: "Education",
      icon: AcademicCapIcon,
      count: "445",
      gradient: "from-blue-500 to-indigo-500",
      href: "/category/education"
    },
    {
      name: "Home Services",
      icon: HomeIcon,
      count: "678",
      gradient: "from-green-500 to-teal-500",
      href: "/category/home-services"
    },
    {
      name: "Professional",
      icon: LifebuoyIcon,
      count: "789",
      gradient: "from-indigo-500 to-purple-500",
      href: "/category/professional"
    },
    {
      name: "Shopping",
      icon: ShoppingBagIcon,
      count: "1,567",
      gradient: "from-teal-500 to-cyan-500",
      href: "/category/shopping"
    },
    {
      name: "Events & Entertainment",
      icon: UserGroupIcon,
      count: "234",
      gradient: "from-orange-500 to-yellow-500",
      href: "/category/events"
    },
    {
      name: "Local Services",
      icon: TruckIcon,
      count: "923",
      gradient: "from-cyan-500 to-blue-500",
      href: "/category/local-services"
    },
    {
      name: "More Categories",
      icon: SparklesIcon,
      count: "500+",
      gradient: "from-violet-500 to-purple-500",
      href: "/categories"
    }
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
            Browse by Category
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore thousands of local businesses organized by category to find exactly what you need.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon
            
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 300
                }}
              >
                <Link
                  href={category.href}
                  className="block group"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600">
                    {/* Icon with gradient background */}
                    <div className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center transform group-hover:rotate-3 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    
                    {/* Category name */}
                    <h3 className="text-sm md:text-base font-semibold text-gray-900 dark:text-white text-center mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                      {category.name}
                    </h3>
                    
                    {/* Business count */}
                    <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 text-center">
                      {category.count} businesses
                    </p>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* Popular Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4">Most searched categories this week:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Restaurants", "Coffee Shops", "Hair Salons", "Auto Repair", "Gyms"].map((category, index) => (
              <motion.span
                key={category}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 rounded-full text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors duration-200 cursor-pointer"
              >
                {category}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 