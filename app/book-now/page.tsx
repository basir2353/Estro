"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Clock, MapPin, Phone, CheckCircle, Calendar, ArrowRight } from "lucide-react"

export default function BookNowPage() {
  const [selectedService, setSelectedService] = useState("")
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [totalPrice, setTotalPrice] = useState(0)

  const services = [
    { name: "Hair GFC Treatment", price: 8999, duration: "2 hours" },
    { name: "Vampire Facial", price: 12999, duration: "1.5 hours" },
    { name: "Skin Brightening", price: 6999, duration: "1 hour" },
    { name: "Anti-Aging Treatment", price: 15999, duration: "2.5 hours" },
    { name: "Acne Treatment", price: 4999, duration: "1 hour" },
    { name: "Hair Transplant", price: 45999, duration: "6-8 hours" },
  ]

  const handleServiceSelect = (serviceName: string, price: number) => {
    setSelectedService(serviceName)
    setTotalPrice(price)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 via-white to-sage-50">
      {/* Enhanced Header */}
      <header className="bg-white/90 backdrop-blur-luxury border-b border-sage-200/50 shadow-xl">
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 group magnetic-hover">
              <ArrowLeft className="w-6 h-6 text-sage-600 group-hover:text-emerald-600 transition-colors duration-300 group-hover:-translate-x-2 transform" />
              <span className="text-sage-600 group-hover:text-emerald-600 transition-colors duration-300 font-semibold text-lg">
                Back to Home
              </span>
            </Link>
            <div className="flex items-center space-x-3 animate-fade-in-down">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl flex items-center justify-center glow-emerald">
                <span className="text-white font-bold text-xl font-display">E</span>
              </div>
              <span className="text-3xl font-bold font-display gradient-text-luxury">ERITO-Clinic</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Page Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-5xl lg:text-7xl font-bold font-display text-sage-900 mb-6 gradient-text-luxury">
              Book Your Appointment
            </h1>
            <p className="text-xl lg:text-2xl text-sage-600 max-w-3xl mx-auto">
              Schedule your premium skin and hair treatment at the comfort of your home
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Enhanced Booking Form */}
            <div className="lg:col-span-2">
              <div className="card-luxury p-12 animate-slide-in-left">
                <CardHeader className="pb-8">
                  <CardTitle className="text-3xl font-display text-sage-900">Appointment Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-10">
                  {/* Personal Information */}
                  <div className="space-y-6 animate-fade-in-up">
                    <h3 className="text-2xl font-bold font-display text-sage-900">Personal Information</h3>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="animate-slide-in-left">
                        <label className="block text-sm font-semibold text-sage-700 mb-3">First Name *</label>
                        <Input
                          placeholder="Enter your first name"
                          className="border-sage-200 focus:border-emerald-500 focus:ring-emerald-500 transition-all duration-300 rounded-xl py-4 focus-luxury"
                        />
                      </div>
                      <div className="animate-slide-in-right">
                        <label className="block text-sm font-semibold text-sage-700 mb-3">Last Name *</label>
                        <Input
                          placeholder="Enter your last name"
                          className="border-sage-200 focus:border-emerald-500 focus:ring-emerald-500 transition-all duration-300 rounded-xl py-4 focus-luxury"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="animate-slide-in-left delay-200">
                        <label className="block text-sm font-semibold text-sage-700 mb-3">Email *</label>
                        <Input
                          type="email"
                          placeholder="Enter your email"
                          className="border-sage-200 focus:border-emerald-500 focus:ring-emerald-500 transition-all duration-300 rounded-xl py-4 focus-luxury"
                        />
                      </div>
                      <div className="animate-slide-in-right delay-200">
                        <label className="block text-sm font-semibold text-sage-700 mb-3">Phone Number *</label>
                        <Input
                          type="tel"
                          placeholder="+91 98765 43210"
                          className="border-sage-200 focus:border-emerald-500 focus:ring-emerald-500 transition-all duration-300 rounded-xl py-4 focus-luxury"
                        />
                      </div>
                    </div>

                    <div className="animate-fade-in-up delay-400">
                      <label className="block text-sm font-semibold text-sage-700 mb-3">Age</label>
                      <Input
                        type="number"
                        placeholder="Enter your age"
                        className="border-sage-200 focus:border-emerald-500 focus:ring-emerald-500 transition-all duration-300 rounded-xl py-4 focus-luxury"
                      />
                    </div>
                  </div>

                  {/* Enhanced Service Selection */}
                  <div className="space-y-6 animate-fade-in-up delay-300">
                    <h3 className="text-2xl font-bold font-display text-sage-900">Select Service</h3>
                    <div className="grid gap-4">
                      {services.map((service, index) => (
                        <label
                          key={index}
                          className={`flex items-center p-6 border-2 rounded-2xl cursor-pointer transition-all duration-500 transform hover:scale-105 magnetic-hover animate-fade-in-up ${
                            selectedService === service.name
                              ? "border-emerald-500 bg-emerald-50 shadow-xl glow-emerald"
                              : "border-sage-200 hover:border-emerald-300 bg-white/80"
                          }`}
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <input
                            type="radio"
                            name="service"
                            className="mr-6 text-emerald-600 w-5 h-5"
                            onChange={() => handleServiceSelect(service.name, service.price)}
                          />
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <span className="font-bold text-sage-900 text-lg">{service.name}</span>
                              <span className="font-bold text-emerald-600 text-xl">
                                ₹{service.price.toLocaleString()}
                              </span>
                            </div>
                            <div className="text-sage-600 mt-1">Duration: {service.duration}</div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Enhanced Date and Time Selection */}
                  <div className="space-y-6 animate-fade-in-up delay-500">
                    <h3 className="text-2xl font-bold font-display text-sage-900">Preferred Date & Time</h3>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="animate-slide-in-left">
                        <label className="block text-sm font-semibold text-sage-700 mb-3">Preferred Date *</label>
                        <Input
                          type="date"
                          className="border-sage-200 focus:border-emerald-500 focus:ring-emerald-500 transition-all duration-300 rounded-xl py-4 focus-luxury"
                          onChange={(e) => setSelectedDate(e.target.value)}
                        />
                      </div>
                      <div className="animate-slide-in-right">
                        <label className="block text-sm font-semibold text-sage-700 mb-3">Preferred Time *</label>
                        <select
                          className="w-full p-4 border-2 border-sage-200 rounded-xl focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-300 bg-white"
                          onChange={(e) => setSelectedTime(e.target.value)}
                        >
                          <option>Select time slot</option>
                          <option>9:00 AM - 11:00 AM</option>
                          <option>11:00 AM - 1:00 PM</option>
                          <option>2:00 PM - 4:00 PM</option>
                          <option>4:00 PM - 6:00 PM</option>
                          <option>6:00 PM - 8:00 PM</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Address Section */}
                  <div className="space-y-6 animate-fade-in-up delay-600">
                    <h3 className="text-2xl font-bold font-display text-sage-900">Service Address</h3>
                    <div>
                      <label className="block text-sm font-semibold text-sage-700 mb-3">Full Address *</label>
                      <Textarea
                        placeholder="Enter your complete address including building name, area, and landmark"
                        rows={4}
                        className="border-sage-200 focus:border-emerald-500 focus:ring-emerald-500 transition-all duration-300 rounded-xl focus-luxury"
                      />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="animate-slide-in-left">
                        <label className="block text-sm font-semibold text-sage-700 mb-3">Area/Locality *</label>
                        <Input
                          placeholder="e.g., Bandra West"
                          className="border-sage-200 focus:border-emerald-500 focus:ring-emerald-500 transition-all duration-300 rounded-xl py-4 focus-luxury"
                        />
                      </div>
                      <div className="animate-slide-in-right">
                        <label className="block text-sm font-semibold text-sage-700 mb-3">Pincode *</label>
                        <Input
                          placeholder="e.g., 400050"
                          className="border-sage-200 focus:border-emerald-500 focus:ring-emerald-500 transition-all duration-300 rounded-xl py-4 focus-luxury"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Additional Information */}
                  <div className="space-y-6 animate-fade-in-up delay-700">
                    <h3 className="text-2xl font-bold font-display text-sage-900">Additional Information</h3>
                    <div>
                      <label className="block text-sm font-semibold text-sage-700 mb-3">
                        Medical History / Allergies
                      </label>
                      <Textarea
                        placeholder="Please mention any medical conditions, allergies, or medications you're currently taking"
                        rows={4}
                        className="border-sage-200 focus:border-emerald-500 focus:ring-emerald-500 transition-all duration-300 rounded-xl focus-luxury"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-sage-700 mb-3">Special Requests</label>
                      <Textarea
                        placeholder="Any special requirements or questions about the treatment"
                        rows={3}
                        className="border-sage-200 focus:border-emerald-500 focus:ring-emerald-500 transition-all duration-300 rounded-xl focus-luxury"
                      />
                    </div>
                  </div>

                  {/* Enhanced Terms and Conditions */}
                  <div className="space-y-6 animate-fade-in-up delay-800">
                    <div className="flex items-start space-x-4 group">
                      <input type="checkbox" className="mt-2 text-emerald-600 focus:ring-emerald-500 w-5 h-5 rounded" />
                      <div className="text-sage-600 group-hover:text-sage-700 transition-colors duration-300">
                        I agree to the{" "}
                        <a
                          href="#"
                          className="text-emerald-600 hover:text-emerald-700 hover:underline transition-all duration-300 font-semibold"
                        >
                          Terms and Conditions
                        </a>{" "}
                        and{" "}
                        <a
                          href="#"
                          className="text-emerald-600 hover:text-emerald-700 hover:underline transition-all duration-300 font-semibold"
                        >
                          Privacy Policy
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 group">
                      <input type="checkbox" className="mt-2 text-emerald-600 focus:ring-emerald-500 w-5 h-5 rounded" />
                      <div className="text-sage-600 group-hover:text-sage-700 transition-colors duration-300">
                        I consent to receive appointment reminders and follow-up messages via SMS and email
                      </div>
                    </div>
                  </div>

                  <Button className="btn-luxury w-full text-xl py-6 animate-fade-in-up delay-900 group">
                    <Calendar className="w-6 h-6 mr-3 group-hover:animate-bounce-gentle" />
                    Book Appointment
                    <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </div>
            </div>

            {/* Enhanced Booking Summary & Info */}
            <div className="space-y-8 animate-slide-in-right">
              {/* Enhanced Booking Summary */}
              <div className="card-luxury p-8">
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl font-display text-sage-900">Booking Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sage-600 font-medium">Service</span>
                    <span className="font-semibold text-sage-900">{selectedService || "Not selected"}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sage-600 font-medium">Date</span>
                    <span className="font-semibold text-sage-900">{selectedDate || "Not selected"}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sage-600 font-medium">Time</span>
                    <span className="font-semibold text-sage-900">{selectedTime || "Not selected"}</span>
                  </div>
                  <div className="border-t border-sage-200 pt-6">
                    <div className="flex items-center justify-between text-2xl font-bold">
                      <span className="text-sage-900">Total</span>
                      <span className="text-emerald-600 glow-emerald">₹{totalPrice.toLocaleString()}</span>
                    </div>
                  </div>
                </CardContent>
              </div>

              {/* Enhanced Contact Info */}
              <div className="card-luxury p-8">
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl font-display text-sage-900">Need Help?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {[
                    { icon: Phone, title: "Call Us", info: "+91 98765 43210" },
                    { icon: Clock, title: "Available", info: "9 AM - 8 PM" },
                    { icon: MapPin, title: "Service Areas", info: "All Mumbai" },
                  ].map((contact, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-4 group magnetic-hover animate-fade-in-up"
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center group-hover:bg-emerald-200 transition-colors duration-300">
                        <contact.icon className="w-6 h-6 text-emerald-600" />
                      </div>
                      <div>
                        <div className="font-bold text-sage-900 group-hover:text-emerald-600 transition-colors duration-300">
                          {contact.title}
                        </div>
                        <div className="text-sage-600">{contact.info}</div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </div>

              {/* Enhanced What to Expect */}
              <div className="card-luxury p-8">
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl font-display text-sage-900">What to Expect</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    "Confirmation call within 2 hours",
                    "Professional arrives with all equipment",
                    "Consultation before treatment",
                    "Follow-up care instructions",
                  ].map((expectation, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 animate-slide-in-right"
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <CheckCircle className="w-6 h-6 text-emerald-600 mt-0.5 flex-shrink-0 glow-emerald" />
                      <div className="text-sage-600 leading-relaxed">{expectation}</div>
                    </div>
                  ))}
                </CardContent>
              </div>

              {/* Enhanced Results Gallery */}
              <div className="card-luxury p-8">
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl font-display text-sage-900">Results Gallery</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="group">
                      <Image
                        src="/placeholder.svg?height=120&width=120"
                        alt="Treatment Results"
                        width={120}
                        height={120}
                        className="rounded-2xl object-cover group-hover:scale-105 transition-transform duration-300 shadow-lg"
                      />
                    </div>
                    <div className="group">
                      <Image
                        src="/placeholder.svg?height=120&width=120"
                        alt="Hair Treatment Results"
                        width={120}
                        height={120}
                        className="rounded-2xl object-cover group-hover:scale-105 transition-transform duration-300 shadow-lg"
                      />
                    </div>
                  </div>
                  <p className="text-xs text-sage-500 mt-4 text-center">*Results may vary for each individual</p>
                </CardContent>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
