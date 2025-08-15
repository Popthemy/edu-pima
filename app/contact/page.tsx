"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BookOpen, Mail, Phone, MessageCircle, Clock, Send } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    alert("Thank you! We'll get back to you within 24 hours.")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-cyan-600" />
              <span className="font-serif font-black text-xl text-gray-900">EduConnect</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/#features" className="text-gray-600 hover:text-cyan-600 transition-colors">
                Features
              </Link>
              <Link href="/#testimonials" className="text-gray-600 hover:text-cyan-600 transition-colors">
                Reviews
              </Link>
              <Link href="/contact" className="text-cyan-600 font-semibold">
                Contact
              </Link>
              <Button className="bg-cyan-600 hover:bg-violet-500 text-white transition-all duration-300 transform hover:scale-105">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif font-black text-4xl md:text-5xl text-gray-900 mb-6">We're Here to Help!</h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Have questions about our platform? Want to learn more about how we can help your child succeed? We'd love to
            hear from you!
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-cyan-600" />
              <span>Response within 24 hours</span>
            </div>
            <div className="flex items-center space-x-2">
              <MessageCircle className="h-4 w-4 text-cyan-600" />
              <span>Live chat available</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-cyan-600" />
              <span>Free consultation call</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="font-serif font-bold text-2xl text-gray-900">Send Us a Message</CardTitle>
                <p className="text-gray-600">Fill out the form below and we'll get back to you as soon as possible.</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        placeholder="Enter your first name"
                        required
                        className="border-gray-300 focus:border-cyan-500 focus:ring-cyan-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        placeholder="Enter your last name"
                        required
                        className="border-gray-300 focus:border-cyan-500 focus:ring-cyan-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                      className="border-gray-300 focus:border-cyan-500 focus:ring-cyan-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                      className="border-gray-300 focus:border-cyan-500 focus:ring-cyan-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="inquiryType">What can we help you with? *</Label>
                    <Select required>
                      <SelectTrigger className="border-gray-300 focus:border-cyan-500 focus:ring-cyan-500">
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Information</SelectItem>
                        <SelectItem value="pricing">Pricing & Plans</SelectItem>
                        <SelectItem value="teachers">Finding Teachers</SelectItem>
                        <SelectItem value="technical">Technical Support</SelectItem>
                        <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="childAge">Child's Age (if applicable)</Label>
                    <Select>
                      <SelectTrigger className="border-gray-300 focus:border-cyan-500 focus:ring-cyan-500">
                        <SelectValue placeholder="Select age range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="3-5">3-5 years</SelectItem>
                        <SelectItem value="6-8">6-8 years</SelectItem>
                        <SelectItem value="9-12">9-12 years</SelectItem>
                        <SelectItem value="13-15">13-15 years</SelectItem>
                        <SelectItem value="16-18">16-18 years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about how we can help you and your child..."
                      rows={5}
                      required
                      className="border-gray-300 focus:border-cyan-500 focus:ring-cyan-500"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-cyan-600 hover:bg-violet-500 text-white transition-all duration-300 transform hover:scale-105"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <Send className="h-4 w-4" />
                        <span>Send Message</span>
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-cyan-600" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-lg text-gray-900">Email Us</h3>
                      <p className="text-gray-600">Get a response within 24 hours</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-900 font-semibold">General Inquiries:</p>
                    <p className="text-cyan-600">hello@educonnect.com</p>
                    <p className="text-gray-900 font-semibold mt-4">Support:</p>
                    <p className="text-cyan-600">support@educonnect.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-violet-600" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-lg text-gray-900">Call Us</h3>
                      <p className="text-gray-600">Free consultation available</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-900 font-semibold">Phone:</p>
                    <p className="text-violet-600 text-lg">(555) 123-LEARN</p>
                    <p className="text-gray-500 text-sm">Monday - Friday: 8AM - 8PM EST</p>
                    <p className="text-gray-500 text-sm">Saturday: 10AM - 4PM EST</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <MessageCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-lg text-gray-900">Live Chat</h3>
                      <p className="text-gray-600">Instant support when you need it</p>
                    </div>
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">Start Live Chat</Button>
                  <p className="text-gray-500 text-sm mt-2 text-center">Available during business hours</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-r from-cyan-50 to-violet-50">
                <CardContent className="p-8 text-center">
                  <h3 className="font-serif font-bold text-xl text-gray-900 mb-4">Ready to Get Started?</h3>
                  <p className="text-gray-600 mb-6">Skip the wait and begin your child's learning journey today!</p>
                  <Button
                    size="lg"
                    className="bg-cyan-600 hover:bg-violet-500 text-white transition-all duration-300 transform hover:scale-105"
                  >
                    Start Learning Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif font-black text-3xl text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common questions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h4 className="font-serif font-bold text-lg text-gray-900 mb-3">How do I get started?</h4>
                <p className="text-gray-600">
                  Simply fill out our contact form or give us a call. We'll match you with the perfect teacher for your
                  child's needs and schedule a free consultation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h4 className="font-serif font-bold text-lg text-gray-900 mb-3">What subjects do you offer?</h4>
                <p className="text-gray-600">
                  We offer tutoring in all core subjects including Math, Science, English, Social Studies, and more. We
                  also provide test prep and specialized learning support.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h4 className="font-serif font-bold text-lg text-gray-900 mb-3">How much does it cost?</h4>
                <p className="text-gray-600">
                  Our pricing is designed to be affordable for every family. Contact us for a personalized quote based
                  on your child's needs and schedule.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h4 className="font-serif font-bold text-lg text-gray-900 mb-3">Are your teachers qualified?</h4>
                <p className="text-gray-600">
                  All our teachers are certified, background-checked, and passionate about education. We carefully vet
                  every educator on our platform.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <BookOpen className="h-8 w-8 text-cyan-400" />
                <span className="font-serif font-black text-xl">EduConnect</span>
              </Link>
              <p className="text-gray-400 leading-relaxed">
                Connecting children with qualified teachers for a brighter future.
              </p>
            </div>
            <div>
              <h4 className="font-serif font-bold text-lg mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-cyan-400 transition-colors">
                    How it Works
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-cyan-400 transition-colors">
                    Find Teachers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-cyan-400 transition-colors">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif font-bold text-lg mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/contact" className="hover:text-cyan-400 transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-cyan-400 transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-cyan-400 transition-colors">
                    Safety
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif font-bold text-lg mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-cyan-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-cyan-400 transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-cyan-400 transition-colors">
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 EduConnect. All rights reserved. Built with ❤️ for every child's future.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
