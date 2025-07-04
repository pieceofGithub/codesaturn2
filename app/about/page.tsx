"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Target,
  Award,
  Lightbulb,
  Rocket,
  Globe,
  Code,
  Zap,
  Star,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We push the boundaries of what's possible, constantly exploring new technologies and methodologies.",
  },
  {
    icon: Target,
    title: "Excellence",
    description:
      "Every project is crafted with meticulous attention to detail and unwavering commitment to quality.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We believe in the power of teamwork, both within our cosmic crew and with our valued clients.",
  },
  {
    icon: Rocket,
    title: "Growth",
    description:
      "Continuous learning and adaptation drive us to reach new heights in the digital universe.",
  },
];

const team = [
  {
    name: "Ramazan Demiroğlu",
    role: "CEO & Founder",
    bio: "Visionary leader with 15+ years of experience in building stellar software solutions.",
    specialties: [
      "Strategic Planning",
      "Team Leadership",
      "Business Development",
    ],
  },
  {
    name: "Emre Han",
    role: "CTO",
    bio: "Technical mastermind who architets the impossible and makes it reality.",
    specialties: ["System Architecture", "AI/ML", "Cloud Computing"],
  },
  {
    name: "Elif Keskin",
    role: "Lead Developer",
    bio: "Full-stack wizard who brings designs to life with cosmic precision.",
    specialties: ["React/Next.js", "Node.js", "Database Design"],
  },
  {
    name: "Sena Mutlu",
    role: "UX/UI Designer",
    bio: "Creative genius who designs experiences that are truly out of this world.",
    specialties: ["User Experience", "Interface Design", "Prototyping"],
  },
];

const achievements = [
  {
    year: "2019",
    title: "Company Founded",
    description:
      "CODESATURN launched with a mission to revolutionize software development",
  },
  {
    year: "2020",
    title: "First Major Client",
    description:
      "Secured partnership with leading tech unicorn for AI platform development",
  },
  {
    year: "2021",
    title: "100 Projects Milestone",
    description:
      "Successfully delivered 100+ projects across various industries",
  },
  {
    year: "2022",
    title: "Industry Recognition",
    description:
      'Won "Innovation in Tech" award at the Global Developer Summit',
  },
  {
    year: "2023",
    title: "International Expansion",
    description: "Opened offices in 3 countries, serving clients globally",
  },
  {
    year: "2024",
    title: "AI Breakthrough",
    description:
      "Launched proprietary AI development framework used by Fortune 500 companies",
  },
];

export default function About() {
  return (
    <div className="relative pt-20">
      {/* Hero Section */}
      <section className="py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge
                variant="outline"
                className="mb-4 border-[#1A58FF]/30 text-[#1A58FF]"
              >
                🌌 Our Cosmic Story
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold font-space mb-6">
                Building the Future,{" "}
                <span className="gradient-text">One Project at a Time</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Founded in the digital cosmos of 2019, CODESATURN emerged from a
                vision to bridge the gap between earthly limitations and
                infinite possibilities. We're not just developers—we're cosmic
                architects of tomorrow's technology.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">500+</div>
                  <div className="text-sm text-slate-400">
                    Projects Delivered
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">200+</div>
                  <div className="text-sm text-slate-400">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">50+</div>
                  <div className="text-sm text-slate-400">Team Members</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden glass-card p-8">
                {/* Animated background elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1A58FF]/20 to-[#5E1EFF]/20" />
                <div className="absolute top-4 left-4 w-32 h-32 bg-[#1A58FF]/30 rounded-full blur-xl animate-pulse" />
                <div className="absolute bottom-4 right-4 w-24 h-24 bg-[#00C3FF]/30 rounded-full blur-xl animate-pulse" />

                {/* Content */}
                <div className="relative z-10 text-center">
                  <div className="mb-6">
                    <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-[#1A58FF] to-[#5E1EFF] flex items-center justify-center mb-4 animate-pulse-glow">
                      <Rocket className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold font-space mb-2">
                      Our Mission
                    </h3>
                    <p className="text-slate-300">
                      To revolutionize the digital landscape by creating
                      innovative solutions that transcend traditional boundaries
                      and propel businesses into the future.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our <span className="gradient-text">Core Values</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              The principles that guide us through every project and fuel our
              cosmic mission.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="glass-card h-full text-center hover:neon-border transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="mx-auto w-16 h-16 rounded-full bg-[#1A58FF]/10 border border-[#1A58FF]/20 flex items-center justify-center mb-4 group-hover:bg-[#1A58FF]/20 transition-colors">
                        <Icon className="h-8 w-8 text-[#1A58FF]" />
                      </div>
                      <h3 className="text-xl font-bold font-space mb-3">
                        {value.title}
                      </h3>
                      <p className="text-slate-300 text-sm">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
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
              Our <span className="gradient-text">Journey Through Time</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Milestones that mark our evolution from a startup to a cosmic
              force in software development.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#1A58FF] to-[#5E1EFF] opacity-30" />

            <div className="space-y-12">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-1/2 ${
                      index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                    }`}
                  >
                    <Card className="glass-card">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold gradient-text mb-2">
                          {achievement.year}
                        </div>
                        <h3 className="text-xl font-bold font-space mb-2">
                          {achievement.title}
                        </h3>
                        <p className="text-slate-300">
                          {achievement.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Center dot */}
                  <div className="relative w-4 h-4 bg-[#1A58FF] rounded-full border-4 border-black z-10 cosmic-glow" />

                  <div className="w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet Our <span className="gradient-text">Cosmic Crew</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              The stellar minds behind CODESATURN's success, each bringing
              unique expertise to our cosmic mission.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card h-full hover:neon-border transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#1A58FF] to-[#5E1EFF] flex items-center justify-center mb-4 animate-pulse-glow">
                      <Users className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold font-space mb-1">
                      {member.name}
                    </h3>
                    <div className="text-[#1A58FF] font-medium mb-3">
                      {member.role}
                    </div>
                    <p className="text-slate-300 text-sm mb-4">{member.bio}</p>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {member.specialties.map((specialty) => (
                        <Badge
                          key={specialty}
                          variant="secondary"
                          className="bg-white/5 text-slate-300 text-xs"
                        >
                          {specialty}
                        </Badge>
                      ))}
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
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-[#1A58FF]/10 border border-[#1A58FF]/20">
                <Star className="h-8 w-8 text-[#1A58FF]" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-space mb-4">
              Ready to Join Our{" "}
              <span className="gradient-text">Cosmic Journey</span>?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Whether you're looking to build something extraordinary or join
              our stellar team, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#1A58FF] to-[#5E1EFF] hover:from-[#00C3FF] hover:to-[#1A58FF] text-lg px-8 py-3 cosmic-glow"
              >
                <Link href="/contact">Start a Project</Link>
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
