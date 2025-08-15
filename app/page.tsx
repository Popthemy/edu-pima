import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Users, Clock, Shield, Heart, BookOpen, Globe, Award } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-cyan-600" />
              <span className="font-serif font-black text-xl text-gray-900">EduConnect</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-gray-600 hover:text-cyan-600 transition-colors">
                Features
              </Link>
              <Link href="#testimonials" className="text-gray-600 hover:text-cyan-600 transition-colors">
                Reviews
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-cyan-600 transition-colors">
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
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-violet-100 text-violet-700 hover:bg-violet-200">
                Quality Education for Every Child
              </Badge>
              <h1 className="font-serif font-black text-4xl md:text-6xl text-gray-900 leading-tight">
                Give Your Child the <span className="text-cyan-600">Future They Deserve</span> — Without Breaking the
                Bank
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                We connect caring, qualified teachers with your child — anywhere, anytime — at a fraction of the cost.
                Our remote learning platform makes personalized education accessible to every family.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-cyan-600 hover:bg-violet-500 text-white text-lg px-8 py-4 transition-all duration-300 transform hover:scale-105"
                >
                  Start Learning Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-cyan-600 text-cyan-600 hover:bg-cyan-50 text-lg px-8 py-4 bg-transparent"
                >
                  Watch Demo
                </Button>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span>4.9/5 rating</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="h-4 w-4" />
                  <span>10,000+ happy families</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=600&width=500"
                alt="Children learning online with qualified teachers"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-cyan-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Certified Teachers</p>
                    <p className="text-sm text-gray-500">Qualified & Passionate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl md:text-3xl font-serif font-bold text-white leading-relaxed">
            "Education is the most powerful weapon which you can use to change the world."
          </blockquote>
          <cite className="block mt-4 text-cyan-100 text-lg">— Nelson Mandela</cite>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif font-black text-3xl md:text-4xl text-gray-900 mb-4">
              Because Every Child Deserves
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We believe quality education should be accessible to all. Here's how we make it possible.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="font-serif font-bold text-xl text-gray-900 mb-4">A Strong Foundation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Build confidence and skills that last a lifetime with personalized learning paths designed for your
                  child's unique needs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-violet-600" />
                </div>
                <h3 className="font-serif font-bold text-xl text-gray-900 mb-4">Personal Attention</h3>
                <p className="text-gray-600 leading-relaxed">
                  Connect with passionate educators who care about your child's success and provide one-on-one guidance.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-serif font-bold text-xl text-gray-900 mb-4">Equal Opportunity</h3>
                <p className="text-gray-600 leading-relaxed">
                  No matter where you start, every child gets the same chance to succeed with our accessible platform.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">$</span>
              </div>
              <h4 className="font-serif font-bold text-lg text-gray-900 mb-2">Affordable</h4>
              <p className="text-gray-600">Quality education for every budget</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-violet-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-serif font-bold text-lg text-gray-900 mb-2">Flexible</h4>
              <p className="text-gray-600">Learning from home, on your schedule</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-serif font-bold text-lg text-gray-900 mb-2">Trusted</h4>
              <p className="text-gray-600">Qualified teachers you can rely on</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif font-black text-3xl md:text-4xl text-gray-900 mb-4">What Families Are Saying</h2>
            <p className="text-xl text-gray-600">Real stories from real families</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "My daughter went from struggling with math to loving it! Her teacher is so patient and makes learning
                  fun."
                </p>
                <div className="flex items-center">
                  <img
                    src="/placeholder.svg?height=40&width=40"
                    alt="Sarah M."
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">Sarah M.</p>
                    <p className="text-sm text-gray-500">Mother of Emma, 8</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "Finally, quality education we can afford! The teachers are amazing and my son looks forward to every
                  lesson."
                </p>
                <div className="flex items-center">
                  <img
                    src="/placeholder.svg?height=40&width=40"
                    alt="Michael R."
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">Michael R.</p>
                    <p className="text-sm text-gray-500">Father of Alex, 12</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "The flexibility is perfect for our busy schedule. My kids are learning so much and having fun doing
                  it!"
                </p>
                <div className="flex items-center">
                  <img
                    src="/placeholder.svg?height=40&width=40"
                    alt="Lisa K."
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">Lisa K.</p>
                    <p className="text-sm text-gray-500">Mother of twins, 10</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-violet-600 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif font-black text-3xl md:text-4xl text-white mb-6">
            Give Your Child the Gift of Education Today
          </h2>
          <p className="text-xl text-cyan-100 mb-8 leading-relaxed">
            Because their future starts now. Join thousands of families who've already discovered the power of quality,
            affordable education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-cyan-600 hover:bg-gray-100 text-lg px-8 py-4 transition-all duration-300 transform hover:scale-105"
            >
              Start Learning Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-cyan-600 text-lg px-8 py-4 bg-transparent"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <BookOpen className="h-8 w-8 text-cyan-400" />
                <span className="font-serif font-black text-xl">EduConnect</span>
              </div>
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
