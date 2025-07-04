'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Zap, Globe, Rocket, Star, Users, Award } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Cutting-edge web applications with modern frameworks and cosmic performance.',
    features: ['React/Next.js', 'TypeScript', 'Tailwind CSS', 'Progressive Web Apps']
  },
  {
    icon: Globe,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile solutions that reach beyond the stars.',
    features: ['React Native', 'Flutter', 'iOS/Android', 'Cross-platform']
  },
  {
    icon: Zap,
    title: 'AI Solutions',
    description: 'Intelligent systems powered by machine learning from the cosmos.',
    features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'AI Integration']
  },
  {
    icon: Rocket,
    title: 'Blockchain',
    description: 'Decentralized applications and smart contracts for the future economy.',
    features: ['Smart Contracts', 'DeFi Solutions', 'NFT Platforms', 'Web3 Integration']
  }
];

const stats = [
  { icon: Users, value: '200+', label: 'Happy Clients' },
  { icon: Code, value: '500+', label: 'Projects Completed' },
  { icon: Award, value: '15+', label: 'Awards Won' },
  { icon: Star, value: '99%', label: 'Client Satisfaction' }
];

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CTO, TechNova',
    content: 'CODESATURN transformed our vision into reality with their cosmic-level expertise.',
    rating: 5
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Founder, StartupX',
    content: 'Their innovative approach and stellar results exceeded all our expectations.',
    rating: 5
  },
  {
    name: 'Emily Johnson',
    role: 'Product Manager, InnovateCorp',
    content: 'Professional, efficient, and truly out of this world. Highly recommended!',
    rating: 5
  }
];

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-2 h-2 bg-[#1A58FF] rounded-full animate-pulse" />
          <div className="absolute top-40 right-32 w-1 h-1 bg-[#00C3FF] rounded-full animate-pulse" />
          <div className="absolute bottom-32 left-16 w-1 h-1 bg-[#5E1EFF] rounded-full animate-pulse" />
          <div className="absolute bottom-20 right-20 w-2 h-2 bg-[#1A58FF] rounded-full animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            {/* Saturn Planet Animation */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative mx-auto w-32 h-32 mb-8"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#1A58FF] via-[#5E1EFF] to-[#00C3FF] animate-pulse-glow" />
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-[#1A58FF]/80 to-[#5E1EFF]/80 animate-float" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-[#00C3FF] to-transparent rounded-full" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-[#1A58FF]/60 to-transparent rounded-full" />
            </motion.div>

            <Badge variant="outline" className="mb-6 border-[#1A58FF]/30 text-[#1A58FF]">
              🚀 Launching Innovation Beyond Earth
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-space mb-6"
          >
            Build the Future with{' '}
            <span className="gradient-text">CODESATURN</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            We craft extraordinary software solutions that transcend earthly limitations. 
            From web development to AI, we bring cosmic innovation to your digital universe.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#1A58FF] to-[#5E1EFF] hover:from-[#00C3FF] hover:to-[#1A58FF] text-lg px-8 py-3 cosmic-glow"
            >
              <Link href="/contact">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/20 hover:border-[#1A58FF] hover:bg-[#1A58FF]/10 text-lg px-8 py-3"
            >
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-[#1A58FF]/10 border border-[#1A58FF]/20">
                      <Icon className="h-6 w-6 text-[#1A58FF]" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold font-space gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-slate-400 text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-space mb-4">
              Our <span className="gradient-text">Cosmic Services</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Explore our comprehensive suite of development services designed to propel your business into the digital stratosphere.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="glass-card hover:neon-border transition-all duration-300 h-full group">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="p-3 rounded-full bg-[#1A58FF]/10 border border-[#1A58FF]/20 mr-4 group-hover:bg-[#1A58FF]/20 transition-colors">
                          <Icon className="h-6 w-6 text-[#1A58FF]" />
                        </div>
                        <h3 className="text-xl font-bold font-space">{service.title}</h3>
                      </div>
                      <p className="text-slate-300 mb-4">{service.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature) => (
                          <Badge
                            key={feature}
                            variant="secondary"
                            className="bg-white/5 text-slate-300 hover:bg-[#1A58FF]/20 hover:text-white"
                          >
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-[#1A58FF]/30 hover:border-[#1A58FF] hover:bg-[#1A58FF]/10"
            >
              <Link href="/services">
                Explore All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-transparent to-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-space mb-4">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Don't just take our word for it. See what our satisfied clients have to say about their cosmic journey with us.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card h-full">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-[#1A58FF] fill-current" />
                      ))}
                    </div>
                    <p className="text-slate-300 mb-4 italic">"{testimonial.content}"</p>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-slate-400">{testimonial.role}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
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
              Ready to Launch Your <span className="gradient-text">Digital Journey</span>?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join the cosmic revolution and transform your ideas into stellar digital experiences. 
              Let's build something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#1A58FF] to-[#5E1EFF] hover:from-[#00C3FF] hover:to-[#1A58FF] text-lg px-8 py-3 cosmic-glow"
              >
                <Link href="/contact">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/20 hover:border-[#1A58FF] hover:bg-[#1A58FF]/10 text-lg px-8 py-3"
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}