'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, 
  Github, 
  Code, 
  Smartphone, 
  Brain, 
  Database,
  Filter,
  ArrowRight
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const categories = [
  { id: 'all', name: 'All Projects', icon: Filter },
  { id: 'web', name: 'Web Apps', icon: Code },
  { id: 'mobile', name: 'Mobile Apps', icon: Smartphone },
  { id: 'ai', name: 'AI/ML', icon: Brain },
  { id: 'blockchain', name: 'Blockchain', icon: Database }
];

const projects = [
  {
    id: 1,
    title: 'NeuroVault',
    subtitle: 'AI-Powered Knowledge Management',
    category: 'ai',
    description: 'Revolutionary knowledge management platform using advanced AI to organize, search, and connect information across enterprise systems.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Next.js', 'Python', 'TensorFlow', 'PostgreSQL', 'Redis'],
    features: ['Natural Language Processing', 'Smart Search', 'Auto-categorization', 'Analytics Dashboard'],
    liveUrl: '#',
    githubUrl: '#',
    year: '2024'
  },
  {
    id: 2,
    title: 'CosmicCommerce',
    subtitle: 'Next-Gen E-commerce Platform',
    category: 'web',
    description: 'Cutting-edge e-commerce solution with advanced analytics, AI-powered recommendations, and seamless user experience.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Node.js', 'GraphQL', 'MongoDB', 'Stripe'],
    features: ['Real-time Analytics', 'AI Recommendations', 'Multi-vendor Support', 'Advanced SEO'],
    liveUrl: '#',
    githubUrl: '#',
    year: '2024'
  },
  {
    id: 3,
    title: 'CryptoSphere',
    subtitle: 'DeFi Trading Platform',
    category: 'blockchain',
    description: 'Decentralized finance platform enabling secure trading, yield farming, and liquidity provision with advanced security features.',
    image: 'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Solidity', 'Web3.js', 'Ethereum', 'IPFS'],
    features: ['Smart Contracts', 'Yield Farming', 'Liquidity Pools', 'Security Audits'],
    liveUrl: '#',
    githubUrl: '#',
    year: '2023'
  },
  {
    id: 4,
    title: 'MindfulSpace',
    subtitle: 'Mental Wellness Mobile App',
    category: 'mobile',
    description: 'Comprehensive mental wellness application with AI-guided meditation, mood tracking, and personalized wellness plans.',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React Native', 'Firebase', 'TensorFlow Lite', 'Redux'],
    features: ['Mood Tracking', 'AI Meditation Guide', 'Progress Analytics', 'Community Support'],
    liveUrl: '#',
    githubUrl: '#',
    year: '2023'
  },
  {
    id: 5,
    title: 'DataPulse',
    subtitle: 'Real-time Analytics Dashboard',
    category: 'web',
    description: 'Advanced analytics platform providing real-time insights and predictive analytics for business intelligence.',
    image: 'https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Vue.js', 'D3.js', 'Python', 'Apache Kafka', 'ClickHouse'],
    features: ['Real-time Processing', 'Custom Dashboards', 'Predictive Analytics', 'API Integration'],
    liveUrl: '#',
    githubUrl: '#',
    year: '2023'
  },
  {
    id: 6,
    title: 'FitTracker Pro',
    subtitle: 'AI Fitness Companion',
    category: 'mobile',
    description: 'Smart fitness tracking app with AI-powered workout recommendations, form analysis, and progress optimization.',
    image: 'https://images.pexels.com/photos/4164808/pexels-photo-4164808.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Flutter', 'TensorFlow', 'Firebase', 'Apple HealthKit'],
    features: ['AI Form Analysis', 'Workout Planning', 'Progress Tracking', 'Social Features'],
    liveUrl: '#',
    githubUrl: '#',
    year: '2024'
  }
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="relative pt-20">
      {/* Hero Section */}
      <section className="py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="outline" className="mb-4 border-[#1A58FF]/30 text-[#1A58FF]">
              🌟 Our Stellar Work
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold font-space mb-6">
              Portfolio of <span className="gradient-text">Cosmic Creations</span>
            </h1>
            <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Explore our universe of innovative projects that showcase the power of cutting-edge 
              technology and stellar design. Each project represents a unique journey from concept to cosmic reality.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  onClick={() => setActiveCategory(category.id)}
                  className={`
                    ${activeCategory === category.id 
                      ? 'bg-gradient-to-r from-[#1A58FF] to-[#5E1EFF] cosmic-glow' 
                      : 'border-white/20 hover:border-[#1A58FF] hover:bg-[#1A58FF]/10'
                    }
                  `}
                >
                  <Icon className="h-4 w-4 mr-2" />
                  {category.name}
                </Button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                  className="group"
                >
                  <Card className="glass-card overflow-hidden h-full hover:neon-border transition-all duration-300">
                    {/* Project Image */}
                    <div className="relative overflow-hidden">
                      <div 
                        className="aspect-video bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                        style={{ backgroundImage: `url(${project.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute top-4 right-4">
                        <Badge variant="secondary" className="bg-black/50 text-white">
                          {project.year}
                        </Badge>
                      </div>
                      
                      {/* Hover Overlay */}
                      <AnimatePresence>
                        {hoveredProject === project.id && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/80 flex items-center justify-center"
                          >
                            <div className="flex space-x-4">
                              <Button
                                size="sm"
                                asChild
                                className="bg-[#1A58FF] hover:bg-[#00C3FF]"
                              >
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="h-4 w-4 mr-1" />
                                  Live
                                </a>
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                asChild
                                className="border-white/30 hover:border-[#1A58FF]"
                              >
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                  <Github className="h-4 w-4 mr-1" />
                                  Code
                                </a>
                              </Button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Project Content */}
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-2">
                        <Badge 
                          variant="outline" 
                          className="border-[#1A58FF]/30 text-[#1A58FF] text-xs"
                        >
                          {categories.find(cat => cat.id === project.category)?.name}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl font-space">{project.title}</CardTitle>
                      <p className="text-[#1A58FF] font-medium text-sm">{project.subtitle}</p>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <p className="text-slate-300 text-sm mb-4 line-clamp-3">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-white/5 text-slate-300 text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge
                            variant="secondary"
                            className="bg-white/5 text-slate-300 text-xs"
                          >
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>

                      {/* Key Features */}
                      <div className="space-y-1 mb-4">
                        {project.features.slice(0, 2).map((feature) => (
                          <div key={feature} className="flex items-center text-xs text-slate-400">
                            <div className="w-1 h-1 rounded-full bg-[#1A58FF] mr-2" />
                            {feature}
                          </div>
                        ))}
                      </div>

                      {/* Action Links */}
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          asChild
                          className="flex-1 bg-gradient-to-r from-[#1A58FF] to-[#5E1EFF] hover:from-[#00C3FF] hover:to-[#1A58FF] text-xs"
                        >
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            View Project
                          </a>
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          asChild
                          className="border-white/20 hover:border-[#1A58FF] hover:bg-[#1A58FF]/10 text-xs"
                        >
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-3 w-3" />
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Load More / View All */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="glass-card p-8 inline-block">
              <h3 className="text-xl font-bold font-space mb-2">
                Want to See More?
              </h3>
              <p className="text-slate-300 mb-4">
                These are just a few highlights from our cosmic portfolio.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#1A58FF] to-[#5E1EFF] hover:from-[#00C3FF] hover:to-[#1A58FF] cosmic-glow"
              >
                <Link href="/contact">
                  Discuss Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gradient-to-b from-transparent to-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-space mb-4">
              Technologies We <span className="gradient-text">Master</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Our cosmic toolkit includes the latest and greatest technologies from across the digital universe.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
          >
            {[
              'React', 'Next.js', 'Vue.js', 'Angular', 'Node.js', 'Python',
              'TensorFlow', 'PyTorch', 'Solidity', 'Flutter', 'React Native', 'TypeScript',
              'GraphQL', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker', 'Kubernetes'
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="glass-card p-4 hover:neon-border transition-all duration-300"
              >
                <div className="text-sm font-medium">{tech}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 neon-border"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-space mb-4">
              Ready to Create Your <span className="gradient-text">Masterpiece</span>?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Let's collaborate to bring your vision to life with the same cosmic precision 
              and innovation showcased in our portfolio.
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
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}