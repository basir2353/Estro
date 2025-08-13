"use client"
import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Carousel } from "@/components/carousel"
import {
  Phone,
  Mail,
  MapPin,
  Star,
  Clock,
  Shield,
  Award,
  Users,
  Sparkles,
  Heart,
  CheckCircle2,
  Calendar,
  Gift,
  Leaf,
  HeadphonesIcon,
  MessageCircle,
  BookOpen,
  Stethoscope,
  ArrowRight,
  Zap,
} from "lucide-react"

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("home")
  const [isScrolled, setIsScrolled] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      setScrollY(window.scrollY)

      // Update active section based on scroll position
      const sections = ["home", "about", "services", "featured", "testimonials", "client-care", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })

      // Magnetic effect for hero elements
      const heroElements = document.querySelectorAll(".magnetic")
      heroElements.forEach((element) => {
        const rect = element.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2
        const distance = Math.sqrt(x * x + y * y)

        if (distance < 100) {
          const strength = (100 - distance) / 100
          ;(element as HTMLElement).style.transform = `translate(${x * strength * 0.1}px, ${y * strength * 0.1}px)`
        } else {
          ;(element as HTMLElement).style.transform = "translate(0px, 0px)"
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)

    // Trigger animations on load
    setTimeout(() => setIsVisible(true), 100)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 100
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  const services = [
    {
      name: "Hair GFC Treatment",
      price: "₹8,999",
      image: "/images/carsoule1.png",
      badge: "Popular",
      desc: "Advanced Growth Factor Concentrate therapy to stimulate hair growth and reduce hair fall naturally.",
      duration: "2 hours",
      results: "Visible results in 3-4 sessions",
      icon: Sparkles,
    },
    {
      name: "Vampire Facial",
      price: "₹12,999",
            image: "/images/carsoule2.png",
      badge: "Trending",
      desc: "Revolutionary PRP therapy for skin rejuvenation, reducing fine lines and achieving a natural glow.",
      duration: "1.5 hours",
      results: "Immediate glow, long-term benefits",
      icon: Heart,
    },
    {
      name: "Skin Brightening",
      price: "₹6,999",
         image: "/images/carsoule3.avif",
      badge: "",
      desc: "Professional treatments to reduce pigmentation, dark spots, and achieve an even, radiant complexion.",
      duration: "1 hour",
      results: "Noticeable improvement in 2-3 sessions",
      icon: Zap,
    },
    {
      name: "Anti-Aging Treatment",
      price: "₹15,999",
     image: "/images/carsoule4.jpg",
      badge: "Premium",
      desc: "Comprehensive anti-aging solutions including Botox, fillers, and advanced skin tightening procedures.",
      duration: "2.5 hours",
      results: "Youthful appearance for 6-12 months",
      icon: Award,
    },
  ]

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Bandra, Mumbai",
      treatment: "Hair GFC Treatment",
      review:
        "The Hair GFC treatment at home was incredibly convenient and effective. I've seen significant improvement in my hair density within 3 months! The team was professional and made me feel comfortable throughout.",
      image: "portrait of a smiling young Indian woman",
      rating: 5,
      beforeAfter: true,
    },
    {
      name: "Ananya Patel",
      location: "Juhu, Mumbai",
      treatment: "Vampire Facial",
      review:
        "The vampire facial gave me the most radiant skin I've ever had. The team was professional and the home service was perfect! My friends keep asking what I've done to my skin.",
      image: "/images/test1.jpg",
      rating: 5,
      beforeAfter: true,
    },
    {
      name: "Rajesh Kumar",
      location: "Powai, Mumbai",
      treatment: "Skin Brightening",
      review:
        "Excellent service and results! The skin brightening treatment has completely transformed my complexion. The dark spots are almost gone and my confidence has soared.",
image: "/images/test1.jpg",
      rating: 5,
      beforeAfter: false,
    },
    {
      name: "Meera Desai",
      location: "Worli, Mumbai",
      treatment: "Anti-Aging Treatment",
      review:
        "At 45, I was skeptical about treatments, but ERITO-Clinic changed my perspective. The anti-aging treatment made me look 10 years younger. The convenience of home service is unmatched!",
 image: "/images/test2.avif",
      rating: 5,
      beforeAfter: true,
    },
  ]

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Revolutionary Header */}
      <header
        className={`fixed top-0 w-full transition-all duration-700 z-50 ${
          isScrolled ? "bg-white/95 backdrop-blur-xl border-b border-emerald-100/50 shadow-2xl" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 magnetic">
              <div className="relative group">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800 rounded-2xl flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 animate-glow-pulse">
                  <span className="text-white font-bold text-xl font-serif">E</span>
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-500"></div>
              </div>
              <span className="text-3xl font-bold font-serif gradient-text">ERITO-Clinic</span>
            </div>

            <nav className="hidden lg:flex items-center space-x-8">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "services", label: "Services" },
                { id: "featured", label: "Featured" },
                { id: "testimonials", label: "Testimonials" },
                { id: "client-care", label: "Care" },
                { id: "contact", label: "Contact" },
              ].map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative text-gray-700 hover:text-emerald-600 transition-all duration-500 font-medium px-4 py-2 rounded-xl hover:bg-emerald-50 magnetic ${
                    activeSection === item.id ? "text-emerald-600 bg-emerald-50" : ""
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full transition-all duration-500 ${
                      activeSection === item.id ? "w-8" : "w-0"
                    }`}
                  ></span>
                </button>
              ))}
            </nav>

            <Link href="/book-now" className="magnetic">
              <Button className="btn-primary group ripple">
                <Calendar className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Book Now
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Revolutionary Hero Section */}
      <section
        ref={heroRef}
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        {/* Dynamic Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/5 via-transparent to-emerald-600/5 animate-gradient-wave"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large Floating Orbs with Parallax */}
          <div
            className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-emerald-400/20 to-teal-500/10 rounded-full blur-3xl animate-hero-float"
            style={{ transform: `translateY(${scrollY * 0.1}px) translateX(${scrollY * 0.05}px)` }}
          ></div>
          <div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-emerald-300/15 to-emerald-600/20 rounded-full blur-3xl animate-hero-float"
            style={{
              animationDelay: "3s",
              transform: `translateY(${scrollY * -0.08}px) translateX(${scrollY * -0.03}px)`,
            }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-teal-400/10 to-emerald-500/15 rounded-full blur-2xl animate-hero-float"
            style={{
              animationDelay: "6s",
              transform: `translate(-50%, -50%) translateY(${scrollY * 0.06}px) rotate(${scrollY * 0.02}deg)`,
            }}
          ></div>

          {/* Floating Particles with Parallax */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-emerald-400/60 rounded-full animate-particle-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${8 + Math.random() * 6}s`,
                transform: `translateY(${scrollY * (0.02 + Math.random() * 0.04)}px)`,
              }}
            />
          ))}

          {/* Geometric Shapes with Parallax */}
          <div
            className="absolute top-20 left-20 w-16 h-16 border-2 border-emerald-300/30 rotate-45 animate-infinite-rotate hidden lg:block"
            style={{ transform: `rotate(45deg) translateY(${scrollY * 0.15}px) rotate(${scrollY * 0.1}deg)` }}
          ></div>
          <div
            className="absolute bottom-32 right-32 w-12 h-12 bg-emerald-400/20 rounded-full animate-breathe hidden lg:block"
            style={{ transform: `translateY(${scrollY * -0.12}px) scale(${1 + Math.sin(scrollY * 0.01) * 0.1})` }}
          ></div>
          <div
            className="absolute top-1/3 right-20 w-8 h-8 bg-teal-400/30 transform rotate-45 animate-hero-float hidden lg:block"
            style={{ transform: `rotate(45deg) translateY(${scrollY * 0.08}px) translateX(${scrollY * 0.04}px)` }}
          ></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[calc(100vh-5rem)]">
            {/* Left Content - 7 columns on large screens */}
            <div className="lg:col-span-7 space-y-6 lg:space-y-8 text-center lg:text-left">
              {/* Premium Badge */}
              <div
                className={`inline-flex items-center space-x-3 bg-white/90 backdrop-blur-xl border border-emerald-200/50 rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-xl magnetic group ${isVisible ? "animate-scale-in-bounce" : "opacity-0"}`}
              >
                <div className="relative">
                  <div className="w-2 sm:w-3 h-2 sm:h-3 bg-emerald-500 rounded-full animate-glow-pulse"></div>
                  <div className="absolute inset-0 w-2 sm:w-3 h-2 sm:h-3 bg-emerald-400 rounded-full animate-ping"></div>
                </div>
                <span className="text-emerald-700 font-semibold text-xs sm:text-sm tracking-wide uppercase">
                  Premium Home Service
                </span>
                <div className="w-5 sm:w-6 h-5 sm:h-6 bg-emerald-100 rounded-full flex items-center justify-center group-hover:bg-emerald-200 transition-colors duration-300">
                  <Sparkles
                    className="w-3 sm:w-4 h-3 sm:h-4 text-emerald-600 animate-spin"
                    style={{ animationDuration: "3s" }}
                  />
                </div>
              </div>

              {/* Main Heading */}
              <div className="space-y-2 sm:space-y-4">
                <div className={`overflow-hidden ${isVisible ? "animate-text-reveal-stagger delay-200" : "opacity-0"}`}>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-serif leading-tight">
                    <span className="block text-gray-900 mb-1 sm:mb-2">Transform Your</span>
                    <span className="block gradient-text mb-1 sm:mb-2">Beauty Journey</span>
                    <span className="block text-gray-800">At Home</span>
                  </h1>
                </div>
              </div>

              {/* Subtitle */}
              <p
                className={`text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 ${isVisible ? "animate-slide-in-bottom delay-600" : "opacity-0"}`}
              >
                Experience world-class clinical skin and hair treatments in the comfort of your home. Our certified
                professionals bring luxury medical spa services directly to you across Mumbai.
              </p>

              {/* Key Benefits */}
              <div
                className={`flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-4 ${isVisible ? "animate-slide-in-bottom delay-800" : "opacity-0"}`}
              >
                {[
                  { icon: Shield, text: "100% Safe" },
                  { icon: Clock, text: "Flexible Timing" },
                  { icon: Award, text: "Certified Pros" },
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 bg-white/80 backdrop-blur-md px-3 sm:px-4 py-2 rounded-full border border-emerald-100 magnetic group"
                  >
                    <benefit.icon className="w-3 sm:w-4 h-3 sm:h-4 text-emerald-600 group-hover:animate-bounce" />
                    <span className="text-xs sm:text-sm font-medium text-gray-700">{benefit.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div
                className={`flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 justify-center lg:justify-start ${isVisible ? "animate-slide-in-bottom delay-1000" : "opacity-0"}`}
              >
                <Link href="/book-now" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 group magnetic ripple shadow-2xl w-full sm:w-auto"
                  >
                    <Calendar className="w-4 sm:w-5 h-4 sm:h-5 mr-2 sm:mr-3 group-hover:animate-bounce" />
                    Book Treatment
                    <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 ml-2 sm:ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                  </Button>
                </Link>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-white/90 backdrop-blur-xl magnetic group rounded-2xl ripple shadow-lg w-full sm:w-auto"
                >
                  <Phone className="w-4 sm:w-5 h-4 sm:h-5 mr-2 sm:mr-3 group-hover:animate-bounce" />
                  <span className="hidden sm:inline">Call Now: </span>+91 98765 43210
                </Button>
              </div>

              {/* Trust Indicators */}
              <div
                className={`flex items-center justify-center lg:justify-start space-x-6 sm:space-x-8 py-6 sm:pt-8 ${isVisible ? "animate-slide-in-bottom delay-1200" : "opacity-0"}`}
              >
                {[
                  { number: "500+", label: "Happy Clients", icon: Heart },
                  { number: "5+", label: "Years Exp", icon: Award },
                  { number: "98%", label: "Satisfaction", icon: Star },
                ].map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="flex items-center justify-center mb-2">
                      <div className="w-8 sm:w-10 h-8 sm:h-10 bg-emerald-100 rounded-xl flex items-center justify-center group-hover:bg-emerald-200 transition-colors duration-300">
                        <stat.icon className="w-4 sm:w-5 h-4 sm:h-5 text-emerald-600 group-hover:animate-bounce" />
                      </div>
                    </div>
                    <div
                      className="text-xl sm:text-2xl font-bold font-serif text-emerald-600 animate-scale-in-bounce"
                      style={{ animationDelay: `${1400 + index * 200}ms` }}
                    >
                      {stat.number}
                    </div>
                    <div className="text-xs text-gray-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual Content - 5 columns on large screens */}
            <div className="lg:col-span-5 relative mt-8 lg:mt-0">
              {/* Main Hero Image Container */}
              <div className={`relative group ${isVisible ? "animate-slide-in-right delay-400" : "opacity-0"}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-teal-600/30 rounded-3xl blur-2xl transform rotate-6 group-hover:rotate-3 transition-transform duration-700"></div>

                <div className="relative  p-4 sm:p-6 lg:p-8  border border-white/50 magnetic">
                  <div className="aspect-[4/5] relative overflow-hidden rounded-2xl">
                    <Image
                      src="/images/hero.png"
                      alt="Professional Home Treatment"
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* Floating Treatment Cards */}
                  <div className="absolute -top-3 sm:-top-6 -left-3 sm:-left-6 bg-white/95 backdrop-blur-xl rounded-2xl p-3 sm:p-4 shadow-xl border border-emerald-100 animate-hero-float">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="w-8 sm:w-12 h-8 sm:h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center animate-glow-pulse">
                        <Sparkles className="w-4 sm:w-6 h-4 sm:h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 text-xs sm:text-sm">Hair GFC</div>
                        <div className="text-emerald-600 text-xs font-semibold">₹8,999</div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="absolute -bottom-3 sm:-bottom-6 -right-3 sm:-right-6 bg-white/95 backdrop-blur-xl rounded-2xl p-3 sm:p-4 shadow-xl border border-emerald-100 animate-hero-float"
                    style={{ animationDelay: "2s" }}
                  >
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="w-8 sm:w-12 h-8 sm:h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center animate-glow-pulse">
                        <Heart className="w-4 sm:w-6 h-4 sm:h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 text-xs sm:text-sm">Vampire Facial</div>
                        <div className="text-pink-600 text-xs font-semibold">₹12,999</div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="absolute top-1/2 -left-4 sm:-left-8 transform -translate-y-1/2 bg-white/95 backdrop-blur-xl rounded-2xl p-2 sm:p-3 shadow-xl border border-emerald-100 animate-hero-float hidden sm:block"
                    style={{ animationDelay: "4s" }}
                  >
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 sm:w-5 h-4 sm:h-5 text-emerald-600 animate-glow-pulse" />
                      <span className="text-xs font-semibold text-gray-700">Certified Safe</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial Preview */}
              <div
                className={`mt-6 lg:mt-8 bg-white/95 backdrop-blur-xl rounded-2xl p-4 sm:p-6 shadow-2xl border border-white/50 magnetic ${isVisible ? "animate-slide-in-bottom delay-1000" : "opacity-0"}`}
              >
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="/placeholder.svg?height=50&width=50"
                      alt="Client"
                      width={50}
                      height={50}
                      className="rounded-full shadow-lg"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-3 sm:w-4 h-3 sm:h-4 text-yellow-400 fill-current animate-bounce"
                          style={{ animationDelay: `${i * 100}ms` }}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-gray-700 italic line-clamp-2">
                      "Amazing results! The convenience of home service is unmatched."
                    </p>
                    <div className="text-xs text-gray-500 mt-1">- Priya S., Bandra</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div
            className={`absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 ${isVisible ? "animate-slide-in-bottom delay-1500" : "opacity-0"}`}
          >
            <button
              onClick={() => scrollToSection("about")}
              className="flex flex-col items-center space-y-2 text-gray-500 hover:text-emerald-600 transition-colors duration-300 magnetic group"
            >
              <span className="text-xs sm:text-sm font-medium">Discover More</span>
              <div className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-gray-300 rounded-full flex justify-center group-hover:border-emerald-500 transition-colors duration-300">
                <div className="w-1 h-2 sm:h-3 bg-gray-400 rounded-full mt-2 animate-bounce group-hover:bg-emerald-500"></div>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="py-32 bg-gradient-to-br from-gray-50 to-emerald-50/30 relative overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute top-20 left-20 w-32 h-32 bg-emerald-200/20 rounded-full animate-hero-float"
            style={{ transform: `translateY(${(scrollY - 800) * 0.1}px) translateX(${(scrollY - 800) * 0.05}px)` }}
          />
          <div
            className="absolute bottom-20 right-20 w-24 h-24 bg-emerald-300/30 rounded-full animate-hero-float"
            style={{
              animationDelay: "2s",
              transform: `translateY(${(scrollY - 800) * -0.08}px) rotate(${(scrollY - 800) * 0.02}deg)`,
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-xl border border-emerald-200/50 rounded-full px-6 py-3 mb-6 shadow-lg animate-scale-in-bounce">
              <Leaf className="w-5 h-5 text-emerald-600" />
              <span className="text-emerald-700 font-semibold">About Us</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-bold font-serif text-gray-900 mb-8 animate-text-reveal-stagger">
              About <span className="gradient-text">ERITO-Clinic</span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-slide-in-bottom delay-300">
              We are Mumbai's premier home service clinic, bringing professional skin and hair treatments directly to
              your doorstep with the highest standards of care, hygiene, and luxury.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10 animate-slide-in-left">
              <div className="space-y-8">
                <h3 className="text-4xl font-bold font-serif text-gray-900">Our Mission</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To make premium clinical skin and hair treatments accessible and convenient for everyone in Mumbai. We
                  believe that professional care should not be limited by location or time constraints, and luxury
                  should be accessible in the comfort of your home.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  {
                    icon: Shield,
                    title: "Safe & Hygienic",
                    desc: "All equipment sterilized and procedures follow strict international safety protocols",
                  },
                  {
                    icon: Users,
                    title: "Expert Team",
                    desc: "Certified professionals with years of experience in clinical treatments and luxury care",
                  },
                  {
                    icon: Clock,
                    title: "Convenient",
                    desc: "Flexible scheduling that fits your busy lifestyle with 24/7 booking support",
                  },
                  {
                    icon: Award,
                    title: "Premium Quality",
                    desc: "High-end treatments using the latest technology and luxury-grade products",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="card-modern p-4 group magnetic hover-lift animate-scale-in-bounce"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:from-emerald-200 group-hover:to-emerald-300 transition-all duration-500 animate-glow-pulse">
                        <item.icon className="w-8 h-8 text-emerald-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-3 text-lg font-serif group-hover:text-emerald-600 transition-colors duration-300">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-slide-in-right delay-300">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-700 animate-glow-pulse"></div>
                <Image
                  src="/images/about.jpg"
                  alt="ERITO-Clinic Team"
                  width={600}
                  height={600}
                  className="relative rounded-3xl shadow-2xl transform group-hover:scale-105 transition-all duration-700 magnetic"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Revolutionary Services Section */}
      <section id="services" className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute top-40 left-10 w-40 h-40 bg-gradient-to-br from-emerald-200/20 to-emerald-400/10 animate-liquid-morph"
            style={{ transform: `translateY(${(scrollY - 1600) * 0.12}px) translateX(${(scrollY - 1600) * 0.06}px)` }}
          />
          <div
            className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-emerald-300/30 to-emerald-500/20 animate-liquid-morph"
            style={{
              animationDelay: "6s",
              transform: `translateY(${(scrollY - 1600) * -0.1}px) rotate(${(scrollY - 1600) * 0.03}deg)`,
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-3 bg-emerald-50 border border-emerald-200/50 rounded-full px-6 py-3 mb-6 shadow-lg animate-scale-in-bounce">
              <Sparkles className="w-5 h-5 text-emerald-600 animate-spin" style={{ animationDuration: "3s" }} />
              <span className="text-emerald-700 font-semibold">Our Services</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-bold font-serif text-gray-900 mb-8 animate-text-reveal-stagger">
              Premium <span className="gradient-text">Treatment Carousel</span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto animate-slide-in-bottom delay-300">
              Comprehensive skin and hair treatments designed to enhance your natural beauty and boost your confidence.
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <Carousel autoPlay={true} interval={5000}>
              {services.map((service, index) => (
                <div key={index} className="px-6">
                  <div className="card-modern mx-auto max-w-6xl overflow-hidden group magnetic hover-lift">
                    <div className="grid md:grid-cols-2 gap-0">
                      <div className="relative overflow-hidden">
                        <div className="relative w-[600px] h-[500px] overflow-hidden rounded-3xl shadow-2xl group">
  <Image
    src={service.image}
    alt={service.name}
    width={600}
    height={500}
    className="w-full h-full object-cover transition-transform duration-700 scale-100"
  />
</div>

                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        {service.badge && (
                          <div className="absolute top-8 left-8 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-6 py-3 rounded-2xl text-sm font-semibold animate-bounce shadow-xl">
                            {service.badge}
                          </div>
                        )}
                        <div className="absolute bottom-8 left-8 text-white">
                          <div className="text-4xl font-bold font-serif animate-glow-pulse">{service.price}</div>
                          <div className="text-lg opacity-90">{service.duration}</div>
                        </div>
                        <div className="absolute top-8 right-8">
                          <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center animate-breathe">
                            <service.icon className="w-8 h-8 text-white" />
                          </div>
                        </div>
                      </div>
                      <CardContent className="p-12 flex flex-col justify-center">
                        <h3 className="text-4xl font-bold font-serif text-gray-900 mb-6 group-hover:text-emerald-600 transition-colors duration-500">
                          {service.name}
                        </h3>
                        <p className="text-gray-600 mb-8 leading-relaxed text-lg">{service.desc}</p>
                        <div className="space-y-4 mb-8">
                          <div className="flex items-center text-gray-600">
                            <Clock
                              className="w-6 h-6 mr-4 text-emerald-600 animate-spin"
                              style={{ animationDuration: "4s" }}
                            />
                            <span className="text-lg">Duration: {service.duration}</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <CheckCircle2 className="w-6 h-6 mr-4 text-emerald-600 animate-glow-pulse" />
                            <span className="text-lg">{service.results}</span>
                          </div>
                        </div>
                        <Link href="/book-now">
                          <Button size="lg" className="btn-primary w-full text-lg py-6 group ripple">
                            Book This Treatment
                            <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                          </Button>
                        </Link>
                      </CardContent>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      {/* Enhanced Featured Treatments */}
      <section id="featured" className="py-32 bg-gradient-to-br from-emerald-50 to-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute top-20 right-20 w-48 h-48 bg-emerald-200/20 animate-liquid-morph"
            style={{ transform: `translateY(${(scrollY - 2400) * 0.08}px) translateX(${(scrollY - 2400) * -0.04}px)` }}
          />
          <div
            className="absolute bottom-40 left-20 w-36 h-36 bg-emerald-300/30 animate-liquid-morph"
            style={{
              animationDelay: "4s",
              transform: `translateY(${(scrollY - 2400) * -0.06}px) scale(${1 + Math.sin((scrollY - 2400) * 0.005) * 0.1})`,
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-xl border border-emerald-200/50 rounded-full px-6 py-3 mb-6 shadow-lg animate-scale-in-bounce">
              <Gift className="w-5 h-5 text-emerald-600 animate-bounce" />
              <span className="text-emerald-700 font-semibold">Limited Time</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-bold font-serif text-gray-900 mb-8 animate-text-reveal-stagger">
              <span className="gradient-text">Featured</span> Treatments
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto animate-slide-in-bottom delay-300">
              Exclusive seasonal offers and premium treatment packages designed for maximum results and luxury
              experience.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {[
              {
                title: "Winter Glow Package",
                originalPrice: "₹25,999",
                offerPrice: "₹19,999",
                savings: "₹6,000",
                treatments: ["Vampire Facial", "Skin Brightening", "Hydrating Treatment"],
                duration: "3 sessions",
                validity: "Valid till March 2024",
                badge: "Best Seller",
                    image: "/images/pop2.png",
              },
              {
                title: "Hair Revival Combo",
                originalPrice: "₹18,999",
                offerPrice: "₹14,999",
                savings: "₹4,000",
                treatments: ["Hair GFC Treatment", "Scalp Analysis", "Hair Mask Therapy"],
                duration: "4 sessions",
                validity: "Valid till February 2024",
                badge: "New Launch",
                   image: "/images/pop1.avif",
              },
              {
                title: "Anti-Aging Luxury",
                originalPrice: "₹35,999",
                offerPrice: "₹28,999",
                savings: "₹7,000",
                treatments: ["Botox Treatment", "Dermal Fillers", "Skin Tightening"],
                duration: "2 sessions",
                validity: "Valid till April 2024",
                badge: "Premium",
             image: "/images/pop3.jpg",
              },
            ].map((offer, index) => (
              <div
                key={index}
                className="card-modern overflow-hidden group magnetic hover-lift animate-scale-in-bounce"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={offer.image}
                    alt={offer.title}
                    width={400}
                    height={300}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute top-6 left-6 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-2xl text-sm font-semibold animate-bounce">
                    {offer.badge}
                  </div>
                  <div className="absolute top-6 right-6 bg-emerald-600 text-white px-4 py-2 rounded-2xl text-sm font-semibold animate-glow-pulse">
                    Save {offer.savings}
                  </div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="text-sm opacity-75 line-through">{offer.originalPrice}</div>
                    <div className="text-3xl font-bold font-serif animate-breathe">{offer.offerPrice}</div>
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold font-serif text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                    {offer.title}
                  </h3>
                  <div className="space-y-3 mb-6">
                    {offer.treatments.map((treatment, idx) => (
                      <div key={idx} className="flex items-center text-gray-600">
                        <CheckCircle2 className="w-5 h-5 mr-3 text-emerald-600 animate-glow-pulse" />
                        <span>{treatment}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                    <span>{offer.duration}</span>
                    <span>{offer.validity}</span>
                  </div>
                  <Link href="/book-now">
                    <Button className="btn-primary w-full group ripple">
                      Book Package
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                </CardContent>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Revolutionary Testimonials */}
      <section id="testimonials" className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute top-32 left-16 w-44 h-44 bg-gradient-to-br from-emerald-200/20 to-emerald-400/10 animate-liquid-morph"
            style={{ transform: `translateY(${(scrollY - 3200) * 0.1}px) rotate(${(scrollY - 3200) * 0.02}deg)` }}
          />
          <div
            className="absolute bottom-32 right-16 w-36 h-36 bg-gradient-to-br from-emerald-300/30 to-emerald-500/20 animate-liquid-morph"
            style={{
              animationDelay: "8s",
              transform: `translateY(${(scrollY - 3200) * -0.08}px) translateX(${(scrollY - 3200) * 0.04}px)`,
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-3 bg-emerald-50 border border-emerald-200/50 rounded-full px-6 py-3 mb-6 shadow-lg animate-scale-in-bounce">
              <Heart className="w-5 h-5 text-emerald-600 animate-bounce" />
              <span className="text-emerald-700 font-semibold">Client Stories</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-bold font-serif text-gray-900 mb-8 animate-text-reveal-stagger">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto animate-slide-in-bottom delay-300">
              Real stories from satisfied clients who have experienced our premium treatments and luxury home service.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Carousel autoPlay={true} interval={7000}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="px-6">
                  <div className="card-modern mx-auto max-w-5xl group magnetic hover-lift">
                    <CardContent className="p-12 md:p-16">
                      <div className="grid md:grid-cols-3 gap-12 items-center">
                        <div className="text-center">
                          <div className="relative inline-block mb-6">
                           <div className="relative w-[150px] h-[150px] mx-auto overflow-hidden rounded-3xl shadow-2xl group">
  <Image
    src={testimonial.image}
    alt={testimonial.name}
    width={150}
    height={150}
    className="object-cover w-full h-full transition-transform duration-500 scale-100"
  />
</div>

                            <div className="absolute -bottom-3 -right-3 bg-emerald-600 text-white rounded-2xl p-3 animate-glow-pulse">
                              <CheckCircle2 className="w-6 h-6" />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold text-gray-900 text-xl font-serif">{testimonial.name}</div>
                            <div className="text-gray-600 mb-2">{testimonial.location}</div>
                            <div className="text-emerald-600 font-semibold">{testimonial.treatment}</div>
                          </div>
                        </div>
                        <div className="md:col-span-2">
                          <div className="flex items-center mb-6">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star
                                key={i}
                                className="w-6 h-6 text-yellow-400 fill-current animate-bounce"
                                style={{ animationDelay: `${i * 100}ms`, animationDuration: "2s" }}
                              />
                            ))}
                          </div>
                          <blockquote className="text-gray-700 text-xl leading-relaxed mb-6 italic font-serif">
                            "{testimonial.review}"
                          </blockquote>
                          {testimonial.beforeAfter && (
                            <div className="flex items-center text-emerald-600 font-semibold">
                              <CheckCircle2 className="w-5 h-5 mr-3 animate-glow-pulse" />
                              Before & After photos available
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      {/* Enhanced Client Care */}
      <section
        id="client-care"
        className="py-32 bg-gradient-to-br from-gray-50 to-emerald-50/30 relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div
            className="absolute top-24 right-24 w-40 h-40 bg-emerald-200/20 animate-liquid-morph"
            style={{ transform: `translateY(${(scrollY - 4000) * 0.09}px) translateX(${(scrollY - 4000) * -0.05}px)` }}
          />
          <div
            className="absolute bottom-24 left-24 w-32 h-32 bg-emerald-300/30 animate-liquid-morph"
            style={{
              animationDelay: "5s",
              transform: `translateY(${(scrollY - 4000) * -0.07}px) rotate(${(scrollY - 4000) * -0.02}deg)`,
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-xl border border-emerald-200/50 rounded-full px-6 py-3 mb-6 shadow-lg animate-scale-in-bounce">
              <Stethoscope className="w-5 h-5 text-emerald-600 animate-bounce" />
              <span className="text-emerald-700 font-semibold">Comprehensive Care</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-bold font-serif text-gray-900 mb-8 animate-text-reveal-stagger">
              Client <span className="gradient-text">Care & Support</span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto animate-slide-in-bottom delay-300">
              Our commitment to your wellness extends beyond treatments with comprehensive post-care support and
              guidance.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10 animate-slide-in-left">
              <div className="space-y-8">
                <h3 className="text-4xl font-bold font-serif text-gray-900">Post-Treatment Care</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Your journey with us doesn't end after the treatment. We provide comprehensive aftercare support to
                  ensure optimal results and your complete satisfaction.
                </p>
              </div>

              <div className="space-y-8">
                {[
                  {
                    icon: HeadphonesIcon,
                    title: "24/7 Support Helpline",
                    desc: "Round-the-clock assistance for any post-treatment queries or concerns",
                    features: ["Immediate response", "Expert guidance", "Emergency support"],
                  },
                  {
                    icon: MessageCircle,
                    title: "Follow-up Consultations",
                    desc: "Scheduled check-ins to monitor progress and adjust care plans",
                    features: ["Progress tracking", "Personalized advice", "Treatment optimization"],
                  },
                  {
                    icon: BookOpen,
                    title: "Care Instructions & Tips",
                    desc: "Detailed guides and personalized recommendations for home care",
                    features: ["Digital care guides", "Video tutorials", "Product recommendations"],
                  },
                ].map((care, index) => (
                  <div
                    key={index}
                    className="card-modern p-8 group magnetic hover-lift animate-scale-in-bounce"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:from-emerald-200 group-hover:to-emerald-300 transition-all duration-500 animate-glow-pulse">
                        <care.icon className="w-8 h-8 text-emerald-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-3 text-xl font-serif group-hover:text-emerald-600 transition-colors duration-300">
                          {care.title}
                        </h4>
                        <p className="text-gray-600 mb-4 leading-relaxed">{care.desc}</p>
                        <div className="space-y-2">
                          {care.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center text-gray-500">
                              <CheckCircle2 className="w-4 h-4 mr-3 text-emerald-600 animate-glow-pulse" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-slide-in-right delay-300">
              <div className="card-modern p-12 bg-gradient-to-br from-emerald-50 to-white">
                <h3 className="text-3xl font-bold font-serif text-gray-900 mb-8 text-center">Care Package Includes</h3>
                <div className="space-y-6">
                  {[
                    "Personalized aftercare kit delivered to your home",
                    "Weekly progress check-in calls for first month",
                    "Access to exclusive client care mobile app",
                    "Complimentary touch-up session within 3 months",
                    "Priority booking for future appointments",
                    "Exclusive discounts on maintenance treatments",
                  ].map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-4 animate-slide-in-right"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="w-8 h-8 bg-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0 animate-glow-pulse">
                        <CheckCircle2 className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-gray-700 leading-relaxed">{benefit}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-10 text-center">
                  <Button className="btn-primary text-lg px-10 py-4 group ripple">
                    Learn More About Care
                    <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Revolutionary Contact Section */}
      <section id="contact" className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute top-20 left-20 w-52 h-52 bg-gradient-to-br from-emerald-200/20 to-emerald-400/10 animate-liquid-morph"
            style={{ transform: `translateY(${(scrollY - 4800) * 0.11}px) translateX(${(scrollY - 4800) * 0.06}px)` }}
          />
          <div
            className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-emerald-300/30 to-emerald-500/20 animate-liquid-morph"
            style={{
              animationDelay: "7s",
              transform: `translateY(${(scrollY - 4800) * -0.09}px) scale(${1 + Math.sin((scrollY - 4800) * 0.003) * 0.08})`,
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-3 bg-emerald-50 border border-emerald-200/50 rounded-full px-6 py-3 mb-6 shadow-lg animate-scale-in-bounce">
              <MessageCircle className="w-5 h-5 text-emerald-600 animate-bounce" />
              <span className="text-emerald-700 font-semibold">Get In Touch</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-bold font-serif text-gray-900 mb-8 animate-text-reveal-stagger">
              <span className="gradient-text">Contact</span> Us
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto animate-slide-in-bottom delay-300">
              Ready to transform your skin and hair? Contact us today to schedule your luxury consultation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20">
            <div className="space-y-10 animate-slide-in-left">
              <div className="space-y-8">
                {[
                  { icon: Phone, title: "Phone", info: "+91 98765 43210", sub: "Available 9 AM - 8 PM" },
                  { icon: Mail, title: "Email", info: "info@eritoclinic.com", sub: "We'll respond within 24 hours" },
                  {
                    icon: MapPin,
                    title: "Service Areas",
                    info: "All of Mumbai",
                    sub: "Bandra, Juhu, Powai, Andheri, Worli & more",
                  },
                ].map((contact, index) => (
                  <div
                    key={index}
                    className="card-modern p-8 group magnetic hover-lift animate-scale-in-bounce"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:from-emerald-200 group-hover:to-emerald-300 transition-all duration-500 animate-glow-pulse">
                        <contact.icon className="w-8 h-8 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2 text-xl font-serif group-hover:text-emerald-600 transition-colors duration-300">
                          {contact.title}
                        </h3>
                        <p className="text-gray-600 font-semibold text-lg">{contact.info}</p>
                        <p className="text-gray-500">{contact.sub}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="card-modern p-8 bg-gradient-to-br from-emerald-50 to-white animate-scale-in-bounce delay-500">
                <h3 className="font-bold text-gray-900 mb-6 text-xl font-serif">Why Choose Home Service?</h3>
                <ul className="space-y-4 text-gray-600">
                  {[
                    "Luxury and privacy of your home environment",
                    "No travel time or parking hassles",
                    "Flexible scheduling around your routine",
                    "Same professional standards as premium clinics",
                    "Personalized attention and care",
                    "Safe and hygienic mobile setup",
                  ].map((benefit, index) => (
                    <li
                      key={index}
                      className="flex items-center animate-slide-in-right"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="w-3 h-3 bg-emerald-600 rounded-full mr-4 animate-glow-pulse"></div>
                      <span className="leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="card-modern p-12 animate-slide-in-right delay-300">
              <h3 className="text-3xl font-bold font-serif text-gray-900 mb-8">Send us a Message</h3>
              <form className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="animate-scale-in-bounce">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">First Name</label>
                    <Input
                      placeholder="Enter your first name"
                      className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 transition-all duration-300 rounded-xl py-4 focus-ring"
                    />
                  </div>
                  <div className="animate-scale-in-bounce delay-100">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">Last Name</label>
                    <Input
                      placeholder="Enter your last name"
                      className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 transition-all duration-300 rounded-xl py-4 focus-ring"
                    />
                  </div>
                </div>

                <div className="animate-scale-in-bounce delay-200">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Email</label>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 transition-all duration-300 rounded-xl py-4 focus-ring"
                  />
                </div>

                <div className="animate-scale-in-bounce delay-300">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Phone</label>
                  <Input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 transition-all duration-300 rounded-xl py-4 focus-ring"
                  />
                </div>

                <div className="animate-scale-in-bounce delay-400">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Service Interested In</label>
                  <select className="w-full p-4 border border-gray-200 rounded-xl focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-300 bg-white focus-ring">
                    <option>Select a service</option>
                    <option>Hair GFC Treatment</option>
                    <option>Vampire Facial</option>
                    <option>Skin Brightening</option>
                    <option>Anti-Aging Treatment</option>
                    <option>Acne Treatment</option>
                    <option>Hair Transplant</option>
                    <option>Featured Package</option>
                  </select>
                </div>

                <div className="animate-scale-in-bounce delay-500">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Message</label>
                  <Textarea
                    placeholder="Tell us about your concerns and goals"
                    rows={5}
                    className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 transition-all duration-300 rounded-xl focus-ring"
                  />
                </div>

                <Button className="btn-primary w-full text-lg py-6 animate-scale-in-bounce delay-600 group ripple">
                  Send Message
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Luxurious Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute top-20 left-20 w-48 h-48 bg-emerald-500/10 animate-liquid-morph"
            style={{ transform: `translateY(${(scrollY - 5600) * 0.05}px) rotate(${(scrollY - 5600) * 0.01}deg)` }}
          />
          <div
            className="absolute bottom-20 right-20 w-36 h-36 bg-emerald-400/20 animate-liquid-morph"
            style={{
              animationDelay: "6s",
              transform: `translateY(${(scrollY - 5600) * -0.03}px) translateX(${(scrollY - 5600) * 0.02}px)`,
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="space-y-6 animate-slide-in-bottom">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl flex items-center justify-center animate-glow-pulse">
                  <span className="text-white font-bold text-xl font-serif">E</span>
                </div>
                <span className="text-3xl font-bold font-serif">ERITO-Clinic</span>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                Mumbai's premier home service clinic for professional skin and hair treatments with luxury care and
                convenience.
              </p>
            </div>

            {[
              {
                title: "Services",
                items: [
                  "Hair GFC Treatment",
                  "Vampire Facial",
                  "Skin Brightening",
                  "Anti-Aging",
                  "Acne Treatment",
                  "Featured Packages",
                ],
              },
              {
                title: "Quick Links",
                items: [
                  { text: "Home", action: () => scrollToSection("home") },
                  { text: "About", action: () => scrollToSection("about") },
                  { text: "Services", action: () => scrollToSection("services") },
                  { text: "Featured", action: () => scrollToSection("featured") },
                  { text: "Testimonials", action: () => scrollToSection("testimonials") },
                  { text: "Care", action: () => scrollToSection("client-care") },
                  { text: "Contact", action: () => scrollToSection("contact") },
                ],
              },
              {
                title: "Contact Info",
                items: ["+91 98765 43210", "info@eritoclinic.com", "Mumbai, Maharashtra", "24/7 Support Available"],
              },
            ].map((section, index) => (
              <div key={index} className="animate-slide-in-bottom" style={{ animationDelay: `${(index + 1) * 150}ms` }}>
                <h3 className="font-bold mb-6 text-xl font-serif">{section.title}</h3>
                <ul className="space-y-3 text-gray-300">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      {typeof item === "object" ? (
                        <button
                          onClick={item.action}
                          className="hover:text-white transition-colors duration-300 cursor-pointer hover:translate-x-2 transform magnetic text-left"
                        >
                          {item.text}
                        </button>
                      ) : (
                        <span className="hover:text-white transition-colors duration-300">{item}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-700 mt-16 pt-8 text-center text-gray-400 animate-slide-in-bottom delay-800">
            <p className="text-lg">
              &copy; 2025 ERITO-Clinic. All rights reserved. | Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
