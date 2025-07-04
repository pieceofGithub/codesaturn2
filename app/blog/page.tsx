'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  ArrowRight, 
  Tag,
  User,
  BookOpen,
  TrendingUp,
  Search
} from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of AI in Web Development: Beyond Traditional Coding',
    excerpt: 'Exploring how artificial intelligence is revolutionizing the way we build web applications, from automated code generation to intelligent user experiences.',
    content: 'Full article content would go here...',
    author: 'Alex Nebula',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'AI & Machine Learning',
    tags: ['AI', 'Web Development', 'Future Tech', 'Automation'],
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true
  },
  {
    id: 2,
    title: 'Building Scalable Applications with Next.js 14: A Cosmic Guide',
    excerpt: 'Deep dive into Next.js 14 features and best practices for building applications that can scale to serve millions of users across the galaxy.',
    content: 'Full article content would go here...',
    author: 'Sarah Cosmos',
    date: '2024-01-12',
    readTime: '12 min read',
    category: 'Web Development',
    tags: ['Next.js', 'React', 'Scalability', 'Performance'],
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false
  },
  {
    id: 3,
    title: 'Decentralized Finance: The Cosmic Revolution in Blockchain',
    excerpt: 'Understanding the DeFi ecosystem and how smart contracts are reshaping traditional financial systems with transparency and accessibility.',
    content: 'Full article content would go here...',
    author: 'Marcus Stellar',
    date: '2024-01-10',
    readTime: '10 min read',
    category: 'Blockchain',
    tags: ['DeFi', 'Blockchain', 'Smart Contracts', 'Finance'],
    image: 'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false
  },
  {
    id: 4,
    title: 'Mobile-First Design: Creating Stellar User Experiences',
    excerpt: 'Best practices for designing mobile applications that provide exceptional user experiences while maintaining performance and accessibility.',
    content: 'Full article content would go here...',
    author: 'Luna Galaxy',
    date: '2024-01-08',
    readTime: '6 min read',
    category: 'Mobile Development',
    tags: ['Mobile Design', 'UX/UI', 'React Native', 'Flutter'],
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false
  },
  {
    id: 5,
    title: 'Cloud Architecture Patterns for Modern Applications',
    excerpt: 'Exploring proven cloud architecture patterns that ensure reliability, scalability, and cost-effectiveness in the cosmic cloud.',
    content: 'Full article content would go here...',
    author: 'Alex Nebula',
    date: '2024-01-05',
    readTime: '15 min read',
    category: 'Cloud Computing',
    tags: ['Cloud Architecture', 'AWS', 'Microservices', 'DevOps'],
    image: 'https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false
  },
  {
    id: 6,
    title: 'Cybersecurity in the Age of Quantum Computing',
    excerpt: 'Preparing for the quantum revolution and understanding how it will impact current cybersecurity practices and protocols.',
    content: 'Full article content would go here...',
    author: 'Sarah Cosmos',
    date: '2024-01-03',
    readTime: '11 min read',
    category: 'Cybersecurity',
    tags: ['Cybersecurity', 'Quantum Computing', 'Encryption', 'Security'],
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false
  }
];

const categories = [
  'All',
  'AI & Machine Learning',
  'Web Development',
  'Mobile Development',
  'Blockchain',
  'Cloud Computing',
  'Cybersecurity'
];

const trendingTopics = [
  'Next.js 14',
  'AI Development',
  'DeFi Protocols',
  'React Native',
  'Cloud Security',
  'Web3 Integration'
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="relative pt-20">
      {/* Hero Section */}
      <section className="py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <Badge variant="outline" className="mb-4 border-[#1A58FF]/30 text-[#1A58FF]">
              🚀 Cosmic Insights
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold font-space mb-6">
              The <span className="gradient-text">CODESATURN</span> Blog
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Dive into the cosmic depths of technology with insights, tutorials, and thought-provoking 
              articles from our stellar team of developers and innovators.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white/5 border-white/20 focus:border-[#1A58FF]"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && (
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="mb-8">
                <h2 className="text-2xl font-bold font-space mb-4 flex items-center">
                  <TrendingUp className="h-6 w-6 text-[#1A58FF] mr-2" />
                  Featured Article
                </h2>
              </div>
              
              <Card className="glass-card overflow-hidden neon-border hover:shadow-2xl transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div 
                    className="aspect-video lg:aspect-auto bg-cover bg-center"
                    style={{ backgroundImage: `url(${featuredPost.image})` }}
                  />
                  <CardContent className="p-8 flex flex-col justify-center">
                    <div className="flex items-center space-x-4 mb-4">
                      <Badge variant="outline" className="border-[#1A58FF]/30 text-[#1A58FF]">
                        {featuredPost.category}
                      </Badge>
                      <div className="flex items-center text-sm text-slate-400">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(featuredPost.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center text-sm text-slate-400">
                        <Clock className="h-4 w-4 mr-1" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold font-space mb-4 leading-tight">
                      {featuredPost.title}
                    </h3>
                    
                    <p className="text-slate-300 mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredPost.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="bg-white/5 text-slate-300">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4 text-[#1A58FF]" />
                        <span className="text-sm text-slate-300">{featuredPost.author}</span>
                      </div>
                      
                      <Button
                        asChild
                        className="bg-gradient-to-r from-[#1A58FF] to-[#5E1EFF] hover:from-[#00C3FF] hover:to-[#1A58FF] cosmic-glow"
                      >
                        <Link href={`/blog/${featuredPost.id}`}>
                          Read Article
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`
                  ${selectedCategory === category 
                    ? 'bg-gradient-to-r from-[#1A58FF] to-[#5E1EFF] cosmic-glow' 
                    : 'border-white/20 hover:border-[#1A58FF] hover:bg-[#1A58FF]/10'
                  }
                `}
              >
                {category}
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Articles Column */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {regularPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="glass-card h-full hover:neon-border transition-all duration-300 group">
                      <div className="aspect-video overflow-hidden rounded-t-xl">
                        <div 
                          className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                          style={{ backgroundImage: `url(${post.image})` }}
                        />
                      </div>
                      
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4 mb-3">
                          <Badge variant="outline" className="border-[#1A58FF]/30 text-[#1A58FF] text-xs">
                            {post.category}
                          </Badge>
                          <div className="flex items-center text-xs text-slate-400">
                            <Calendar className="h-3 w-3 mr-1" />
                            {new Date(post.date).toLocaleDateString()}
                          </div>
                        </div>
                        
                        <h3 className="text-lg font-bold font-space mb-2 leading-tight line-clamp-2">
                          {post.title}
                        </h3>
                        
                        <p className="text-slate-300 text-sm mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex flex-wrap gap-1 mb-4">
                          {post.tags.slice(0, 2).map(tag => (
                            <Badge key={tag} variant="secondary" className="bg-white/5 text-slate-300 text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <User className="h-3 w-3 text-[#1A58FF]" />
                            <span className="text-xs text-slate-300">{post.author}</span>
                            <Clock className="h-3 w-3 text-slate-400 ml-2" />
                            <span className="text-xs text-slate-400">{post.readTime}</span>
                          </div>
                          
                          <Button
                            asChild
                            size="sm"
                            variant="ghost"
                            className="hover:bg-[#1A58FF]/10 hover:text-[#1A58FF] p-1"
                          >
                            <Link href={`/blog/${post.id}`}>
                              <ArrowRight className="h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Trending Topics */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card">
                  <CardHeader>
                    <h3 className="text-lg font-bold font-space flex items-center">
                      <TrendingUp className="h-5 w-5 text-[#1A58FF] mr-2" />
                      Trending Topics
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {trendingTopics.map(topic => (
                        <button
                          key={topic}
                          onClick={() => setSearchQuery(topic)}
                          className="block w-full text-left px-3 py-2 text-sm text-slate-300 hover:text-[#1A58FF] hover:bg-[#1A58FF]/10 rounded-md transition-colors"
                        >
                          <Tag className="h-3 w-3 inline mr-2" />
                          {topic}
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Newsletter Signup */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card neon-border">
                  <CardContent className="p-6 text-center">
                    <BookOpen className="h-8 w-8 text-[#1A58FF] mx-auto mb-4" />
                    <h3 className="text-lg font-bold font-space mb-2">
                      Cosmic Newsletter
                    </h3>
                    <p className="text-slate-300 text-sm mb-4">
                      Subscribe to receive the latest insights from the cosmic frontier of technology.
                    </p>
                    <div className="space-y-3">
                      <Input 
                        type="email" 
                        placeholder="Enter your email"
                        className="bg-white/5 border-white/20 focus:border-[#1A58FF]"
                      />
                      <Button 
                        className="w-full bg-gradient-to-r from-[#1A58FF] to-[#5E1EFF] hover:from-[#00C3FF] hover:to-[#1A58FF] cosmic-glow"
                      >
                        Subscribe
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-transparent to-gray-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 neon-border"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-space mb-4">
              Ready to Build Something <span className="gradient-text">Extraordinary</span>?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              From concept to cosmic reality, let's collaborate to create innovative solutions 
              that push the boundaries of what's possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#1A58FF] to-[#5E1EFF] hover:from-[#00C3FF] hover:to-[#1A58FF] text-lg px-8 py-3 cosmic-glow"
              >
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/20 hover:border-[#1A58FF] hover:bg-[#1A58FF]/10 text-lg px-8 py-3"
              >
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}