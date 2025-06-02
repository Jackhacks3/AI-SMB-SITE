'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { StarIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/solid'

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "San Francisco, CA",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "LocalDiscover helped me find the perfect wedding venue! The AI recommendations were spot-on and saved me hours of research. The filtering system is incredibly intuitive.",
      business: "Golden Gate Gardens"
    },
    {
      id: 2,
      name: "Mike Chen",
      location: "Austin, TX",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "As a foodie, I love how LocalDiscover understands my preferences. It consistently recommends amazing restaurants I wouldn't have found otherwise. The reviews are authentic and helpful.",
      business: "Tacos El Mundo"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      location: "Miami, FL",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The voice search feature is a game-changer! I can search for businesses while driving. Found an excellent urgent care center when I needed it most. Lifesaver!",
      business: "Miami Care Center"
    },
    {
      id: 4,
      name: "David Park",
      location: "Seattle, WA",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "LocalDiscover's business insights helped me choose the right gym. The real-time availability and crowd predictions are incredibly accurate. Best local discovery app ever!",
      business: "PowerFit Gym"
    }
  ]

  const stats = [
    { label: "Customer Satisfaction", value: "98%" },
    { label: "Average Rating", value: "4.9/5" },
    { label: "Success Rate", value: "96%" },
    { label: "Monthly Users", value: "1M+" }
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Users Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Join thousands of satisfied users who've discovered their favorite local businesses through our platform.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-card"
            >
              <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-4">
                <ChatBubbleLeftIcon className="w-8 h-8 text-blue-600 dark:text-blue-400 opacity-60" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Business Mention */}
              <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <p className="text-sm text-blue-800 dark:text-blue-400">
                  Found through LocalDiscover: <span className="font-semibold">{testimonial.business}</span>
                </p>
              </div>

              {/* User Info */}
              <div className="flex items-center space-x-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to discover your next favorite business?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Join our community and start exploring amazing local businesses with AI-powered recommendations.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
              Start Exploring
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 