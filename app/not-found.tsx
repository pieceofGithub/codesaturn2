'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Search, Plane } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

export default function NotFound() {
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // In a real app, this would redirect to a search results page
      window.location.href = `/?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-[#1A58FF] rounded-full animate-pulse" />
        <div className="absolute top-40 right-32 w-1 h-1 bg-[#00C3FF] rounded-full animate-pulse" />
        <div className="absolute bottom-32 left-16 w-1 h-1 bg-[#5E1EFF] rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-[#1A58FF] rounded-full animate-pulse" />
        
        {/* Floating Saturn */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute top-1/4 right-1/4 w-64 h-64"
        >
          <div className="relative w-full h-full">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#1A58FF]/20 to-[#5E1EFF]/20 animate-float" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-2 bg-gradient-to-r from-transparent via-[#00C3FF]/20 to-transparent rounded-full" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-1 bg-gradient-to-r from-transparent via-[#1A58FF]/10 to-transparent rounded-full" />
          </div>
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          {/* Animated 404 */}
          <div className="mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-8xl md:text-9xl font-bold font-space gradient-text mb-4"
            >
              404
            </motion.div>
            
            {/* Glitchy Saturn */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative mx-auto w-24 h-24 mb-6"
            >
              <motion.div
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity }
                }}
                className="absolute inset-0 rounded-full bg-gradient-to-br from-[#1A58FF] to-[#5E1EFF] animate-pulse-glow"
              />
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-[#1A58FF]/80 to-[#5E1EFF]/80" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-0.5 bg-gradient-to-r from-transparent via-[#00C3FF] to-transparent rounded-full" />
              <Plane className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-6 w-6 text-white" />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold font-space mb-4">
            Lost in the <span className="gradient-text">Cosmic Void</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            It seems you've drifted into uncharted space. The page you're looking for 
            has either been moved to another galaxy or never existed in our cosmic database.
          </p>
        </motion.div>

        {/* Search Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-8"
        >
          <form onSubmit={handleSearch} className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
              <Input
                type="text"
                placeholder="Search our cosmic database..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-3 bg-white/5 border-white/20 focus:border-[#1A58FF] rounded-lg"
              />
              <Button
                type="submit"
                size="sm"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-[#1A58FF] to-[#5E1EFF] hover:from-[#00C3FF] hover:to-[#1A58FF]"
              >
                Search
              </Button>
            </div>
          </form>
        </motion.div>

        {/* Navigation Options */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-[#1A58FF] to-[#5E1EFF] hover:from-[#00C3FF] hover:to-[#1A58FF] text-lg px-8 py-3 cosmic-glow"
          >
            <Link href="/">
              <Home className="mr-2 h-5 w-5" />
              Return to Earth
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white/20 hover:border-[#1A58FF] hover:bg-[#1A58FF]/10 text-lg px-8 py-3"
            onClick={() => window.history.back()}
          >
            <span>
              <ArrowLeft className="mr-2 h-5 w-5" />
              Go Back
            </span>
          </Button>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="glass-card p-6 inline-block"
        >
          <h3 className="text-lg font-bold font-space mb-4">
            Popular <span className="gradient-text">Destinations</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <Link 
              href="/about" 
              className="text-slate-300 hover:text-[#1A58FF] transition-colors"
            >
              About Us
            </Link>
            <Link 
              href="/services" 
              className="text-slate-300 hover:text-[#1A58FF] transition-colors"
            >
              Services
            </Link>
            <Link 
              href="/portfolio" 
              className="text-slate-300 hover:text-[#1A58FF] transition-colors"
            >
              Portfolio
            </Link>
            <Link 
              href="/blog" 
              className="text-slate-300 hover:text-[#1A58FF] transition-colors"
            >
              Blog
            </Link>
            <Link 
              href="/contact" 
              className="text-slate-300 hover:text-[#1A58FF] transition-colors"
            >
              Contact
            </Link>
            <Link 
              href="/services#web" 
              className="text-slate-300 hover:text-[#1A58FF] transition-colors"
            >
              Web Dev
            </Link>
            <Link 
              href="/services#mobile" 
              className="text-slate-300 hover:text-[#1A58FF] transition-colors"
            >
              Mobile Apps
            </Link>
            <Link 
              href="/services#ai" 
              className="text-slate-300 hover:text-[#1A58FF] transition-colors"
            >
              AI Solutions
            </Link>
          </div>
        </motion.div>

        {/* Error Code */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-12 text-xs text-slate-500 font-mono"
        >
          ERROR_CODE: COSMIC_404_PAGE_NOT_FOUND_IN_SATURN_RING_DATABASE
        </motion.div>
      </div>
    </div>
  );
}