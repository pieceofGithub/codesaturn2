"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  User,
  Building,
  CheckCircle,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().min(1, "Please select a budget range"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

const services = [
  "Web Development",
  "Mobile App Development",
  "AI & Machine Learning",
  "Blockchain Development",
  "Cloud Solutions",
  "Cybersecurity",
  "UI/UX Design",
  "Consulting",
  "Other",
];

const budgetRanges = [
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000 - $100,000",
  "$100,000+",
  "Let's discuss",
];

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: "ramazan@codesaturn.com",
    description: "Send us an email and we'll respond within 24 hours",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "+90 (554) 177 55 01",
    description: "Speak directly with our cosmic team",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: "Başakşehir, İSTANBUL",
    description: "Our headquarters in the digital cosmos",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: "Mon-Fri: 9AM-6PM PST",
    description: "We're here when you need us most",
  },
];

const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on complexity, but most projects range from 4-16 weeks. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "Do you work with startups?",
    answer:
      "Absolutely! We love working with startups and have special packages designed to help early-stage companies build their MVP and scale efficiently.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "We specialize in modern web technologies (React, Next.js, Node.js), mobile development (React Native, Flutter), AI/ML, blockchain, and cloud solutions.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes, we offer comprehensive support and maintenance packages to ensure your application continues to perform optimally after launch.",
  },
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Form submitted:", data);
    toast.success(
      "Message sent successfully! We'll get back to you within 24 hours."
    );
    reset();
    setIsSubmitting(false);
  };

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
            <Badge
              variant="outline"
              className="mb-4 border-[#1A58FF]/30 text-[#1A58FF]"
            >
              🚀 Let's Connect
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold font-space mb-6">
              Ready to Launch Your{" "}
              <span className="gradient-text">Cosmic Project</span>?
            </h1>
            <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Whether you have a groundbreaking idea or need to enhance your
              existing digital presence, our cosmic team is here to transform
              your vision into stellar reality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Card className="glass-card neon-border">
                  <CardHeader>
                    <CardTitle className="text-2xl font-space flex items-center">
                      <MessageSquare className="h-6 w-6 text-[#1A58FF] mr-2" />
                      Tell Us About Your Project
                    </CardTitle>
                    <p className="text-slate-300">
                      Fill out the form below and we'll get back to you within
                      24 hours with a detailed proposal.
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="flex items-center">
                            <User className="h-4 w-4 mr-1" />
                            Full Name *
                          </Label>
                          <Input
                            id="name"
                            {...register("name")}
                            placeholder="John Doe"
                            className="bg-white/5 border-white/20 focus:border-[#1A58FF]"
                          />
                          {errors.name && (
                            <p className="text-red-400 text-sm">
                              {errors.name.message}
                            </p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email" className="flex items-center">
                            <Mail className="h-4 w-4 mr-1" />
                            Email Address *
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            {...register("email")}
                            placeholder="john@example.com"
                            className="bg-white/5 border-white/20 focus:border-[#1A58FF]"
                          />
                          {errors.email && (
                            <p className="text-red-400 text-sm">
                              {errors.email.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label
                            htmlFor="company"
                            className="flex items-center"
                          >
                            <Building className="h-4 w-4 mr-1" />
                            Company Name
                          </Label>
                          <Input
                            id="company"
                            {...register("company")}
                            placeholder="Acme Corp"
                            className="bg-white/5 border-white/20 focus:border-[#1A58FF]"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="phone" className="flex items-center">
                            <Phone className="h-4 w-4 mr-1" />
                            Phone Number
                          </Label>
                          <Input
                            id="phone"
                            {...register("phone")}
                            placeholder="+1 (555) 123-4567"
                            className="bg-white/5 border-white/20 focus:border-[#1A58FF]"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="service">Service Needed *</Label>
                          <Select
                            onValueChange={(value) =>
                              setValue("service", value)
                            }
                          >
                            <SelectTrigger className="bg-white/5 border-white/20 focus:border-[#1A58FF]">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              {services.map((service) => (
                                <SelectItem key={service} value={service}>
                                  {service}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          {errors.service && (
                            <p className="text-red-400 text-sm">
                              {errors.service.message}
                            </p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="budget">Budget Range *</Label>
                          <Select
                            onValueChange={(value) => setValue("budget", value)}
                          >
                            <SelectTrigger className="bg-white/5 border-white/20 focus:border-[#1A58FF]">
                              <SelectValue placeholder="Select budget range" />
                            </SelectTrigger>
                            <SelectContent>
                              {budgetRanges.map((range) => (
                                <SelectItem key={range} value={range}>
                                  {range}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          {errors.budget && (
                            <p className="text-red-400 text-sm">
                              {errors.budget.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Project Details *</Label>
                        <Textarea
                          id="message"
                          {...register("message")}
                          placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                          rows={6}
                          className="bg-white/5 border-white/20 focus:border-[#1A58FF] resize-none"
                        />
                        {errors.message && (
                          <p className="text-red-400 text-sm">
                            {errors.message.message}
                          </p>
                        )}
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-[#1A58FF] to-[#5E1EFF] hover:from-[#00C3FF] hover:to-[#1A58FF] text-lg py-3 cosmic-glow"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                            Sending Message...
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-8">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-xl font-space">
                      Get In Touch
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {contactInfo.map((info, index) => {
                      const Icon = info.icon;
                      return (
                        <div
                          key={info.title}
                          className="flex items-start space-x-3"
                        >
                          <div className="p-2 rounded-full bg-[#1A58FF]/10 border border-[#1A58FF]/20">
                            <Icon className="h-4 w-4 text-[#1A58FF]" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-sm">
                              {info.title}
                            </h4>
                            <p className="text-[#1A58FF] text-sm font-medium">
                              {info.details}
                            </p>
                            <p className="text-slate-400 text-xs">
                              {info.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </CardContent>
                </Card>
              </motion.div>

              {/* Quick Response Promise */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Card className="glass-card neon-border">
                  <CardContent className="p-6 text-center">
                    <CheckCircle className="h-8 w-8 text-[#1A58FF] mx-auto mb-4" />
                    <h3 className="text-lg font-bold font-space mb-2">
                      24-Hour Response Guarantee
                    </h3>
                    <p className="text-slate-300 text-sm">
                      We promise to respond to all inquiries within 24 hours.
                      For urgent matters, call us directly.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-transparent to-gray-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-space mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-xl text-slate-300">
              Quick answers to common questions about our cosmic services.
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card hover:neon-border transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold font-space mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-slate-300">{faq.answer}</p>
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
              Ready to Start Your{" "}
              <span className="gradient-text">Cosmic Journey</span>?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Don't wait for tomorrow's technology. Let's build it today and
              launch your business into the digital stratosphere.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#1A58FF] to-[#5E1EFF] hover:from-[#00C3FF] hover:to-[#1A58FF] text-lg px-8 py-3 cosmic-glow"
              >
                <a href="tel:+905541775501">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/20 hover:border-[#1A58FF] hover:bg-[#1A58FF]/10 text-lg px-8 py-3"
              >
                <a href="mailto:ramazan@codesaturn.dev">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Us
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
