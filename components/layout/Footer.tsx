"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Plane,
  Github,
  Twitter,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ArrowUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const footerLinks = {
  Company: [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
  ],
  Services: [
    { name: "Web Development", href: "/services#web" },
    { name: "Mobile Apps", href: "/services#mobile" },
    { name: "AI Solutions", href: "/services#ai" },
    { name: "Blockchain", href: "/services#blockchain" },
  ],
  Resources: [
    { name: "Documentation", href: "#" },
    { name: "Support", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ],
};

const socialLinks = [
  { name: "GitHub", icon: Github, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
];

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-black to-gray-900 border-t border-white/10">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#1A58FF]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#5E1EFF]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <Plane className="h-8 w-8 text-[#1A58FF] saturn-glow" />
                <div className="absolute inset-0 rounded-full border-2 border-[#1A58FF]/30 animate-ping" />
              </motion.div>
              <span className="text-xl font-bold font-space gradient-text">
                CODESATURN
              </span>
            </Link>
            <p className="text-slate-400 mb-6 max-w-md">
              Pioneering the future of software development with cutting-edge
              solutions that transcend earthly limitations. We bring cosmic
              innovation to your digital world.
            </p>
            <div className="space-y-2 text-sm text-slate-400">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-[#1A58FF]" />
                <span>Başakşehir / İSTANBUL</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-[#1A58FF]" />
                <span>+90 (554) 177 55 01</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-[#1A58FF]" />
                <span>ramazan@codesaturn.com</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white font-semibold font-space mb-4">
                {title}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-[#1A58FF] transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="text-slate-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} CODESATURN. All rights reserved. Built
            with cosmic precision.
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-slate-400 hover:text-[#1A58FF] transition-colors"
                  aria-label={social.name}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              );
            })}
          </div>

          {/* Scroll to Top */}
          <Button
            onClick={scrollToTop}
            size="sm"
            variant="outline"
            className="border-white/20 hover:border-[#1A58FF] hover:bg-[#1A58FF]/10 text-slate-400 hover:text-white"
          >
            <ArrowUp className="h-4 w-4 mr-1" />
            Top
          </Button>
        </div>
      </div>
    </footer>
  );
}
