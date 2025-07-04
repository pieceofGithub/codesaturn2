'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Globe, 
  Smartphone, 
  Brain, 
  Database, 
  Cloud, 
  Shield, 
  Zap,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';

const services = [
  {
    id: 'web',
    icon: Code,
    title: 'Web Development',
    subtitle: 'Modern, Scalable Web Applications',
    description: 'We craft exceptional web experiences using cutting-edge technologies and frameworks that ensure your digital presence stands out in the cosmic web.',
    features: [
      'React & Next.js Applications',
      'Progressive Web Apps (PWA)',
      'E-commerce Solutions',
      'Content Management Systems',
      'API Development & Integration',
      'Performance Optimization'
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'GraphQL', 'MongoDB', 'PostgreSQL'],
    startingPrice: '$5,000'
  },
  {
    id: 'mobile',
    icon: Smartphone,
    title: 'Mobile App Development',
    subtitle: 'Native & Cross-Platform Solutions',
    description: 'From concept to deployment, we build mobile applications that deliver stellar user experiences across all devices and platforms.',
    features: [
      'iOS & Android Native Apps',
      'Cross-Platform Development',
      'App Store Optimization',
      'Push Notifications',
      'Offline Functionality',
      'App Analytics & Monitoring'
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'Expo'],
    startingPrice: '$8,000'
  },
  {
    id: 'ai',
    icon: Brain,
    title: 'AI & Machine Learning',
    subtitle: 'Intelligent Solutions for Tomorrow',
    description: 'Harness the power of artificial intelligence to transform your business processes and unlock new possibilities with our cosmic AI solutions.',
    features: [
      'Custom AI Model Development',
      'Natural Language Processing',
      'Computer Vision Solutions',
      'Predictive Analytics',
      'Chatbots & Virtual Assistants',
      'AI Integration & Deployment'
    ],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI API', 'Hugging Face', 'AWS SageMaker'],
    startingPrice: '$12,000'
  },
  {
    id: 'blockchain',
    icon: Database,
    title: 'Blockchain Development',
    subtitle: 'Decentralized Applications & Smart Contracts',
    description: 'Build the future of decentralized technology with our blockchain expertise, creating secure and transparent solutions.',
    features: [
      'Smart Contract Development',
      'DeFi Applications',
      'NFT Marketplaces',
      'Cryptocurrency Exchanges',
      'Blockchain Integration',
      'Security Audits'
    ],
    technologies: ['Solidity', 'Ethereum', 'Polygon', 'Web3.js', 'Hardhat', 'IPFS'],
    startingPrice: '$15,000'
  },
  {
    id: 'cloud',
    icon: Cloud,
    title: 'Cloud Solutions',
    subtitle: 'Scalable Infrastructure & DevOps',
    description: 'Migrate to the cloud and optimize your infrastructure with our comprehensive cloud solutions and DevOps expertise.',
    features: [
      'Cloud Migration',
      'Infrastructure as Code',
      'CI/CD Pipeline Setup',
      'Container Orchestration',
      'Monitoring & Logging',
      'Cost Optimization'
    ],
    technologies: ['AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes', 'Terraform'],
    startingPrice: '$7,000'
  },
  {
    id: 'security',
    icon: Shield,
    title: 'Cybersecurity',
    subtitle: 'Protect Your Digital Assets',
    description: 'Safeguard your applications and data with our comprehensive cybersecurity solutions and best practices.',
    features: [
      'Security Audits',
      'Penetration Testing',
      'Vulnerability Assessments',
      'Security Architecture',
      'Compliance Consulting',
      'Incident Response'
    ],
    technologies: ['OWASP', 'Nessus', 'Burp Suite', 'Metasploit', 'Wireshark', 'Splunk'],
    startingPrice: '$6,000'
  }
];

const processSteps = [
  {
    number: '01',
    title: 'Discovery & Planning',
    description: 'We dive deep into your requirements, analyze your goals, and create a comprehensive project roadmap.'
  },
  {
    number: '02',
    title: 'Design & Architecture',
    description: 'Our team designs the user experience and system architecture that will bring your vision to life.'
  },
  {
    number: '03',
    title: 'Development & Testing',
    description: 'We build your solution using agile methodologies with continuous testing and quality assurance.'
  },
  {
    number: '04',
    title: 'Deployment & Launch',
    description: 'We deploy your solution to production and ensure a smooth launch with comprehensive monitoring.'
  },
  {
    number: '05',
    title: 'Support & Maintenance',
    description: 'Ongoing support, updates, and enhancements to keep your solution running at cosmic performance.'
  }
];

export default function Services() {
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
              🚀 Comprehensive Solutions
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold font-space mb-6">
              Our <span className="gradient-text">Cosmic Services</span>
            </h1>
            <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              From web development to AI solutions, we offer a complete suite of services 
              to propel your business into the digital stratosphere. Every solution is 
              crafted with precision and designed for the future.
            </p>
          </motion.div>

          {/* Service Categories */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-12"
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.a
                  key={service.id}
                  href={`#${service.id}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass-card p-4 text-center hover:neon-border transition-all duration-300 group"
                >
                  <Icon className="h-8 w-8 text-[#1A58FF] mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <div className="text-sm font-medium">{service.title.split(' ')[0]}</div>
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="scroll-mt-20"
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}>
                    <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                      <Card className="glass-card p-8 neon-border">
                        <CardHeader className="p-0 mb-6">
                          <div className="flex items-center mb-4">
                            <div className="p-3 rounded-full bg-[#1A58FF]/10 border border-[#1A58FF]/20 mr-4">
                              <Icon className="h-8 w-8 text-[#1A58FF]" />
                            </div>
                            <div>
                              <CardTitle className="text-2xl font-space">{service.title}</CardTitle>
                              <p className="text-[#1A58FF] font-medium">{service.subtitle}</p>
                            </div>
                          </div>
                          <p className="text-slate-300 text-lg">{service.description}</p>
                        </CardHeader>
                        
                        <CardContent className="p-0">
                          <Tabs defaultValue="features" className="w-full">
                            <TabsList className="grid w-full grid-cols-3 mb-6">
                              <TabsTrigger value="features">Features</TabsTrigger>
                              <TabsTrigger value="tech">Technologies</TabsTrigger>
                              <TabsTrigger value="pricing">Pricing</TabsTrigger>
                            </TabsList>
                            
                            <TabsContent value="features" className="space-y-3">
                              {service.features.map((feature) => (
                                <div key={feature} className="flex items-center space-x-3">
                                  <CheckCircle className="h-5 w-5 text-[#1A58FF] flex-shrink-0" />
                                  <span className="text-slate-300">{feature}</span>
                                </div>
                              ))}
                            </TabsContent>
                            
                            <TabsContent value="tech" className="space-y-3">
                              <div className="flex flex-wrap gap-2">
                                {service.technologies.map((tech) => (
                                  <Badge
                                    key={tech}
                                    variant="secondary"
                                    className="bg-[#1A58FF]/10 text-[#1A58FF] border border-[#1A58FF]/20"
                                  >
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </TabsContent>
                            
                            <TabsContent value="pricing" className="space-y-3">
                              <div className="text-center">
                                <div className="text-3xl font-bold gradient-text mb-2">
                                  Starting from {service.startingPrice}
                                </div>
                                <p className="text-slate-400 mb-4">
                                  Pricing varies based on project complexity and requirements
                                </p>
                                <Button
                                  asChild
                                  className="bg-gradient-to-r from-[#1A58FF] to-[#5E1EFF] hover:from-[#00C3FF] hover:to-[#1A58FF] cosmic-glow"
                                >
                                  <Link href="/contact">Get Quote</Link>
                                </Button>
                              </div>
                            </TabsContent>
                          </Tabs>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                      <div className="relative">
                        <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#1A58FF]/20 to-[#5E1EFF]/20 p-8 flex items-center justify-center glass-card">
                          <Icon className="h-32 w-32 text-[#1A58FF] animate-pulse-glow" />
                        </div>
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#00C3FF]/20 rounded-full blur-xl" />
                        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#5E1EFF]/20 rounded-full blur-xl" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Our <span className="gradient-text">Development Process</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              A proven methodology that ensures stellar results and client satisfaction at every stage.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Card className="glass-card h-full hover:neon-border transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl font-bold gradient-text mb-4 font-space">
                      {step.number}
                    </div>
                    <h3 className="text-lg font-bold font-space mb-3">{step.title}</h3>
                    <p className="text-slate-300 text-sm">{step.description}</p>
                  </CardContent>
                </Card>
                
                {/* Connection line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#1A58FF] to-[#5E1EFF] opacity-30" />
                )}
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
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-[#1A58FF]/10 border border-[#1A58FF]/20">
                <Zap className="h-8 w-8 text-[#1A58FF]" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-space mb-4">
              Ready to Launch Your <span className="gradient-text">Next Project</span>?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your requirements and create a custom solution that propels 
              your business to new cosmic heights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#1A58FF] to-[#5E1EFF] hover:from-[#00C3FF] hover:to-[#1A58FF] text-lg px-8 py-3 cosmic-glow"
              >
                <Link href="/contact">
                  Start Project Discussion
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
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}