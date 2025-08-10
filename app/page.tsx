"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
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
} from "lucide-react"

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("home")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

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

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 80
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
      
    },
    {
      name: "Vampire Facial",
      price: "₹12,999",
      image: "/images/carsoule2.png",
      badge: "Trending",
      desc: "Revolutionary PRP therapy for skin rejuvenation, reducing fine lines and achieving a natural glow.",
      duration: "1.5 hours",
      results: "Immediate glow, long-term benefits",
    },
    {
      name: "Skin Brightening",
      price: "₹6,999",
     image: "/images/carsoule3.avif",
      badge: "",
      desc: "Professional treatments to reduce pigmentation, dark spots, and achieve an even, radiant complexion.",
      duration: "1 hour",
      results: "Noticeable improvement in 2-3 sessions",
    },
    {
      name: "Anti-Aging Treatment",
      price: "₹15,999",
  image: "/images/carsoule4.jpg",
      badge: "Premium",
      desc: "Comprehensive anti-aging solutions including Botox, fillers, and advanced skin tightening procedures.",
      duration: "2.5 hours",
      results: "Youthful appearance for 6-12 months",
    },
  ]

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Bandra, Mumbai",
      treatment: "Hair GFC Treatment",
      review:
        "The Hair GFC treatment at home was incredibly convenient and effective. I've seen significant improvement in my hair density within 3 months! The team was professional and made me feel comfortable throughout.",
      image: "/images/test1.jpg",
      rating: 5,
      beforeAfter: true,
    },
    {
      name: "Ananya Patel",
      location: "Juhu, Mumbai",
      treatment: "Vampire Facial",
      review:
        "The vampire facial gave me the most radiant skin I've ever had. The team was professional and the home service was perfect! My friends keep asking what I've done to my skin.",
      image: "/images/test2.avif",
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
      image: "happy Indian woman smiling",
      rating: 5,
      beforeAfter: true,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Header with new navigation */}
      <header
        className={`fixed top-0 w-full transition-all duration-500 z-50 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-xl"
            : "bg-white/90 backdrop-blur-sm border-b border-gray-100"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 animate-fade-in">
              <div className="w-10 h-10 bg-gradient-to-br from-green-600 via-green-700 to-green-800 rounded-full flex items-center justify-center transform hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-green-200">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-green-700 bg-clip-text text-transparent hover:from-green-600 hover:to-green-800 transition-all duration-300">
                ERITO-Clinic
              </span>
            </div>
            <nav className="hidden lg:flex items-center space-x-6">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "services", label: "Services" },
                { id: "featured", label: "Featured" },
                { id: "testimonials", label: "Testimonials" },
                { id: "client-care", label: "Care" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative text-gray-700 hover:text-green-600 transition-all duration-300 font-medium px-3 py-2 rounded-lg hover:bg-green-50 ${
                    activeSection === item.id ? "text-green-600 bg-green-50" : ""
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-green-500 to-green-600 transition-all duration-300 ${
                      activeSection === item.id ? "w-8" : "w-0"
                    }`}
                  ></span>
                </button>
              ))}
            </nav>
            <Link href="/book-now">
              <Button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-2 hover:animate-pop-hover transition-all duration-300 hover:shadow-lg hover:shadow-green-200">
                Book Now
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Enhanced Hero Section */}
      <section
        id="home"
        className="pt-20 pb-16 bg-gradient-to-br from-green-50 via-white to-green-50/30 overflow-hidden relative"
      >
        {/* Motion Background */}
        <div
          className="absolute inset-0 bg-cover bg-center animate-background-pan"
          style={{ backgroundImage: `url('/images/hero-background.png')`, opacity: 0.1 }}
        ></div>

        {/* Animated Decorative Boxes */}
        <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-green-200 rounded-full opacity-30 animate-spin-float animation-delay-100"></div>
        <div className="absolute bottom-1/3 right-1/4 w-20 h-20 bg-green-100 rounded-lg opacity-20 animate-spin-float animation-delay-300"></div>
        <div className="absolute top-1/2 left-1/2 w-12 h-12 bg-green-300 rounded-full opacity-40 animate-spin-float animation-delay-500"></div>

        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <div className="space-y-6">
                <div className="flex items-center space-x-2 animate-fade-in-up">
                  <Sparkles className="w-6 h-6 text-green-600 animate-pulse" />
                  <span className="text-green-600 font-semibold text-lg">Premium Home Service</span>
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight animate-fade-in-up animation-delay-200">
                  Luxury{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-green-500 to-green-700 animate-gradient-text">
                    Skin & Hair
                  </span>
                  <br />
                  Treatments
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed animate-fade-in-up animation-delay-400">
                  Experience world-class clinical treatments in the comfort of your home. Our expert team brings
                  professional skin and hair care directly to you in Mumbai with unmatched luxury and convenience.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-600">
                <Link href="/book-now">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 text-lg hover:animate-pop-hover transition-all duration-300 hover:shadow-xl hover:shadow-green-200 group"
                  >
                    <Calendar className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                    Book Appointment
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 text-lg bg-transparent hover:animate-pop-hover transition-all duration-300 hover:shadow-lg group"
                >
                  <Phone className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Call Now
                </Button>
              </div>
              <div className="flex items-center space-x-8 pt-4 animate-fade-in-up animation-delay-800">
                {[
                  { number: "500+", label: "Happy Clients", icon: Heart },
                  { number: "5+", label: "Years Experience", icon: Award },
                  { number: "15+", label: "Treatments", icon: Sparkles },
                ].map((stat, index) => (
                  <div key={index} className="text-center transform hover:scale-110 transition-all duration-300 group">
                    <div className="flex items-center justify-center mb-2">
                      <stat.icon className="w-6 h-6 text-green-600 group-hover:animate-pulse" />
                    </div>
                    <div className="text-2xl font-bold text-green-600 animate-count-up">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative animate-slide-in-right">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                <Image
                  src="/images/hero.png"
                  alt="ERITO-Clinic Professional Treatment"
                  width={500}
                  height={600}
                  className="relative rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-500 hover:shadow-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="absolute -bottom-14 -left-4 bg-white p-6 rounded-xl shadow-xl animate-float border border-green-100 group-hover:animate-pop-hover">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center animate-pulse-green">
                    <Award className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Certified Professionals</div>
                    <div className="text-sm text-gray-600">Licensed & Experienced</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Leaf className="w-6 h-6 text-green-600" />
              <span className="text-green-600 font-semibold">About Us</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">About ERITO-Clinic</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are Mumbai's premier home service clinic, bringing professional skin and hair treatments directly to
              your doorstep with the highest standards of care, hygiene, and luxury.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To make premium clinical skin and hair treatments accessible and convenient for everyone in Mumbai. We
                  believe that professional care should not be limited by location or time constraints, and luxury
                  should be accessible in the comfort of your home.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
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
                    className="flex items-start space-x-4 group animate-fade-in-up hover:bg-green-50 p-4 rounded-xl transition-all duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center flex-shrink-0 group-hover:from-green-200 group-hover:to-green-300 transition-all duration-300 group-hover:scale-110 transform">
                      <item.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-slide-in-right">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                <Image
                  src="/images/about.jpg"
                  alt="ERITO-Clinic Team"
                  width={500}
                  height={500}
                  className="relative rounded-2xl shadow-xl transform group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section with Carousel */}
      <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-green-50/30 ">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Sparkles className="w-6 h-6 text-green-600" />
              <span className="text-green-600 font-semibold">Our Services</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Premium Treatment Carousel</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive skin and hair treatments designed to enhance your natural beauty and boost your confidence.
            </p>
          </div>

          <div className="max-w-6xl mx-auto  group">
            <Carousel autoPlay={true} interval={4000}>
              {services.map((service, index) => (
                <div key={index} className="px-4">
                  <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm hover:shadow-3xl transition-all duration-500 hover:animate-pop-hover mx-auto max-w-4xl">
                    <div className="grid md:grid-cols-2 gap-0">
                      <div className="relative overflow-hidden rounded-l-2xl">
                        <div className="relative h-96 w-full overflow-hidden rounded-l-2xl">
  <Image
    src={service.image}
    alt={service.name}
    fill
    className="object-cover"
  />
</div>

                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        {service.badge && (
                          <div className="absolute top-6 left-6 bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-2 rounded-full text-sm font-medium animate-pulse-subtle shadow-lg">
                            {service.badge}
                          </div>
                        )}
                        <div className="absolute bottom-6 left-6 text-white">
                          <div className="text-3xl font-bold">{service.price}</div>
                          <div className="text-sm opacity-90">{service.duration}</div>
                        </div>
                      </div>
                      <CardContent className="p-8 flex flex-col justify-center">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4 hover:text-green-600 transition-colors duration-300">
                          {service.name}
                        </h3>
                        <p className="text-gray-600 mb-6 leading-relaxed text-lg">{service.desc}</p>
                        <div className="space-y-3 mb-6">
                          <div className="flex items-center text-gray-600">
                            <Clock className="w-5 h-5 mr-3 text-green-600" />
                            <span>Duration: {service.duration}</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <CheckCircle2 className="w-5 h-5 mr-3 text-green-600" />
                            <span>{service.results}</span>
                          </div>
                        </div>
                        <Link href="/book-now">
                          <Button
                            size="lg"
                            className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white hover:animate-pop-hover transition-all duration-300 hover:shadow-lg w-full"
                          >
                            Book This Treatment
                          </Button>
                        </Link>
                      </CardContent>
                    </div>
                  </Card>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      {/* New Featured Treatments Section */}
      <section id="featured" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-transparent opacity-50"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Gift className="w-6 h-6 text-green-600" />
              <span className="text-green-600 font-semibold">Limited Time</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Featured Treatments</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Exclusive seasonal offers and premium treatment packages designed for maximum results and luxury
              experience.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "Winter Glow Package",
                originalPrice: "₹25,999",
                offerPrice: "₹19,999",
                savings: "₹6,000",
                treatments: ["Vampire Facial", "Skin Brightening", "Hydrating Treatment"],
                duration: "3 sessions",
                validity: "Valid till March 2026",
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
                validity: "Valid till February 2025",
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
                validity: "Valid till April 2026",
                badge: "Premium",
                image: "/images/pop3.jpg",
              },
            ].map((offer, index) => (
              <Card
                key={index}
                className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:animate-pop-hover animate-fade-in-up group bg-gradient-to-br from-white to-green-50/30"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden rounded-t-2xl">
                  <Image
                    src={offer.image}
                    alt={offer.title}
                    width={400}
                    height={250}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-sm font-medium animate-pulse">
                    {offer.badge}
                  </div>
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Save {offer.savings}
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm opacity-75 line-through">{offer.originalPrice}</div>
                    <div className="text-2xl font-bold">{offer.offerPrice}</div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                    {offer.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    {offer.treatments.map((treatment, idx) => (
                      <div key={idx} className="flex items-center text-gray-600">
                        <CheckCircle2 className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-sm">{treatment}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{offer.duration}</span>
                    <span>{offer.validity}</span>
                  </div>
                  <Link href="/book-now">
                    <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white hover:animate-pop-hover transition-all duration-300 hover:shadow-lg">
                      Book Package
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section with Carousel */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Heart className="w-6 h-6 text-green-600" />
              <span className="text-green-600 font-semibold">Client Stories</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from satisfied clients who have experienced our premium treatments and luxury home service.
            </p>
          </div>

          <div className="max-w-5xl mx-auto group">
            <Carousel autoPlay={true} interval={6000}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="px-4">
                  <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm hover:shadow-3xl transition-all duration-500 hover:animate-pop-hover mx-auto max-w-4xl">
                    <CardContent className="p-8 md:p-12">
                      <div className="grid md:grid-cols-3 gap-8 items-center">
                        <div className="text-center">
                          <div className="relative inline-block">
                            <Image
                              src={testimonial.image}
                              alt={testimonial.name}
                              width={120}
                              height={120}
                              className="rounded-full mx-auto shadow-lg transform hover:scale-110 transition-transform duration-300"
                            />
                            <div className="absolute -bottom-2 -right-2 bg-green-600 text-white rounded-full p-2">
                              <CheckCircle2 className="w-4 h-4" />
                            </div>
                          </div>
                          <div className="mt-4">
                            <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                            <div className="text-sm text-gray-600">{testimonial.location}</div>
                            <div className="text-sm text-green-600 font-medium mt-1">{testimonial.treatment}</div>
                          </div>
                        </div>
                        <div className="md:col-span-2">
                          <div className="flex items-center mb-4">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star
                                key={i}
                                className="w-5 h-5 text-yellow-400 fill-current animate-twinkle"
                                style={{ animationDelay: `${i * 100}ms` }}
                              />
                            ))}
                          </div>
                          <blockquote className="text-gray-700 text-lg leading-relaxed mb-4 italic">
                            "{testimonial.review}"
                          </blockquote>
                          {testimonial.beforeAfter && (
                            <div className="flex items-center text-green-600 text-sm font-medium">
                              <CheckCircle2 className="w-4 h-4 mr-2" />
                              Before & After photos available
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      {/* New Client Care Section */}
      <section id="client-care" className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Stethoscope className="w-6 h-6 text-green-600" />
              <span className="text-green-600 font-semibold">Comprehensive Care</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Client Care & Support</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to your wellness extends beyond treatments with comprehensive post-care support and
              guidance.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-900">Post-Treatment Care</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Your journey with us doesn't end after the treatment. We provide comprehensive aftercare support to
                  ensure optimal results and your complete satisfaction.
                </p>
              </div>

              <div className="space-y-6">
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
                  <Card
                    key={index}
                    className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up group hover:animate-pop-hover"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center flex-shrink-0 group-hover:from-green-200 group-hover:to-green-300 transition-all duration-300">
                          <care.icon className="w-6 h-6 text-green-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
                            {care.title}
                          </h4>
                          <p className="text-gray-600 mb-3">{care.desc}</p>
                          <div className="space-y-1">
                            {care.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center text-sm text-gray-500">
                                <CheckCircle2 className="w-3 h-3 mr-2 text-green-600" />
                                {feature}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="animate-slide-in-right">
              <Card className="border-0 shadow-2xl bg-gradient-to-br from-green-50 to-white">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Care Package Includes</h3>
                  <div className="space-y-4">
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
                        className="flex items-center space-x-3 animate-slide-in-right"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 text-center">
                    <Button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-3 hover:animate-pop-hover transition-all duration-300">
                      Learn More About Care
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-green-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <MessageCircle className="w-6 h-6 text-green-600" />
              <span className="text-green-600 font-semibold">Get In Touch</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Contact Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your skin and hair? Contact us today to schedule your luxury consultation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8 animate-slide-in-left">
              <div className="space-y-6">
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
                  <Card
                    key={index}
                    className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up group hover:animate-pop-hover"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center flex-shrink-0 group-hover:from-green-200 group-hover:to-green-300 transition-all duration-300 group-hover:scale-110 transform">
                          <contact.icon className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-green-600 transition-colors duration-300">
                            {contact.title}
                          </h3>
                          <p className="text-gray-600 font-medium">{contact.info}</p>
                          <p className="text-sm text-gray-500">{contact.sub}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300 animate-fade-in-up animation-delay-400 bg-gradient-to-br from-white to-green-50 hover:animate-pop-hover">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Why Choose Home Service?</h3>
                  <ul className="space-y-3 text-gray-600">
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
                        <div className="w-2 h-2 bg-green-600 rounded-full mr-3 animate-pulse"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-shadow duration-500 animate-slide-in-right bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="animate-fade-in-up">
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <Input
                        placeholder="Enter your first name"
                        className="border-gray-200 focus:border-green-500 focus:ring-green-500 transition-all duration-300"
                      />
                    </div>
                    <div className="animate-fade-in-up animation-delay-100">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <Input
                        placeholder="Enter your last name"
                        className="border-gray-200 focus:border-green-500 focus:ring-green-500 transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="animate-fade-in-up animation-delay-200">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="border-gray-200 focus:border-green-500 focus:ring-green-500 transition-all duration-300"
                    />
                  </div>

                  <div className="animate-fade-in-up animation-delay-300">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <Input
                      type="tel"
                      placeholder="Enter your phone number"
                      className="border-gray-200 focus:border-green-500 focus:ring-green-500 transition-all duration-300"
                    />
                  </div>

                  <div className="animate-fade-in-up animation-delay-400">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Interested In</label>
                    <select className="w-full p-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300">
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

                  <div className="animate-fade-in-up animation-delay-500">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <Textarea
                      placeholder="Tell us about your concerns and goals"
                      rows={4}
                      className="border-gray-200 focus:border-green-500 focus:ring-green-500 transition-all duration-300"
                    />
                  </div>

                  <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-3 text-lg hover:animate-pop-hover transition-all duration-300 hover:shadow-lg animate-fade-in-up animation-delay-600">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center animate-background-pan"
          style={{ backgroundImage: `url('/placeholder.svg?height=400&width=1200')`, opacity: 0.05 }}
        ></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4 animate-fade-in-up">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">E</span>
                </div>
                <span className="text-2xl font-bold">ERITO-Clinic</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
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
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${(index + 1) * 100}ms` }}>
                <h3 className="font-semibold mb-4 text-lg">{section.title}</h3>
                <ul className="space-y-2 text-gray-400">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      {typeof item === "object" ? (
                        <button
                          onClick={item.action}
                          className="hover:text-white transition-colors duration-300 cursor-pointer hover:translate-x-1 transform hover:animate-pop-hover"
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

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 animate-fade-in-up animation-delay-600">
            <p>&copy; 2024 ERITO-Clinic. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
