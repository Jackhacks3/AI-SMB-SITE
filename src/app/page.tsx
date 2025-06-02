import { Metadata } from 'next'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import SearchSection from '@/components/SearchSection'
import FeaturedBusinesses from '@/components/FeaturedBusinesses'
import TrendingSearches from '@/components/TrendingSearches'
import CategoryGrid from '@/components/CategoryGrid'
import TestimonialsSection from '@/components/TestimonialsSection'
import Footer from '@/components/Footer'
import AIAssistant from '@/components/AIAssistant'

export const metadata: Metadata = {
  title: 'LocalDiscover - Find the Best Local Businesses Near You',
  description: 'Discover amazing local businesses with AI-powered recommendations. Search restaurants, services, and shops with intelligent filters and personalized suggestions.',
  openGraph: {
    title: 'LocalDiscover - Find the Best Local Businesses Near You',
    description: 'Discover amazing local businesses with AI-powered recommendations.',
    url: '/',
    images: ['/og-home.jpg'],
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Header />
      
      <main>
        {/* Hero Section with Search */}
        <HeroSection />
        
        {/* Advanced Search Section */}
        <SearchSection />
        
        {/* Trending Searches */}
        <TrendingSearches />
        
        {/* Category Grid */}
        <CategoryGrid />
        
        {/* Featured Businesses */}
        <FeaturedBusinesses />
        
        {/* Testimonials */}
        <TestimonialsSection />
      </main>
      
      <Footer />
      
      {/* AI Assistant Chatbot */}
      <AIAssistant />
    </div>
  )
} 