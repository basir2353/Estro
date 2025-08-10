"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Clock, MapPin, Phone, CheckCircle } from "lucide-react"

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
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Header */}
      <header className="bg-white border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 group">
              <ArrowLeft className="w-5 h-5 text-gray-600 group-hover:text-green-600 transition-colors duration-300 group-hover:-translate-x-1 transform" />
              <span className="text-gray-600 group-hover:text-green-600 transition-colors duration-300">
                Back to Home
              </span>
            </Link>
            <div className="flex items-center space-x-2 animate-fade-in">
              <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">ERITO-Clinic</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Enhanced Page Header */}
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Book Your Appointment</h1>
            <p className="text-xl text-gray-600">
              Schedule your premium skin and hair treatment at the comfort of your home
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Enhanced Booking Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-500 animate-slide-in-left">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">Appointment Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Personal Information with animations */}
                  <div className="space-y-4 animate-fade-in-up">
                    <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="animate-slide-in-left">
                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                        <Input
                          placeholder="Enter your first name"
                          className="border-gray-200 focus:border-green-500 focus:ring-green-500 transition-all duration-300"
                        />
                      </div>
                      <div className="animate-slide-in-right">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                        <Input
                          placeholder="Enter your last name"
                          className="border-gray-200 focus:border-green-500 focus:ring-green-500 transition-all duration-300"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="animate-slide-in-left animation-delay-200">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                        <Input
                          type="email"
                          placeholder="Enter your email"
                          className="border-gray-200 focus:border-green-500 focus:ring-green-500 transition-all duration-300"
                        />
                      </div>
                      <div className="animate-slide-in-right animation-delay-200">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                        <Input
                          type="tel"
                          placeholder="+91 98765 43210"
                          className="border-gray-200 focus:border-green-500 focus:ring-green-500 transition-all duration-300"
                        />
                      </div>
                    </div>

                    <div className="animate-fade-in-up animation-delay-400">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
                      <Input
                        type="number"
                        placeholder="Enter your age"
                        className="border-gray-200 focus:border-green-500 focus:ring-green-500 transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Enhanced Service Selection */}
                  <div className="space-y-4 animate-fade-in-up animation-delay-300">
                    <h3 className="text-lg font-semibold text-gray-900">Select Service</h3>
                    <div className="grid gap-3">
                      {services.map((service, index) => (
                        <label
                          key={index}
                          className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-md animate-fade-in-up ${
                            selectedService === service.name
                              ? "border-green-500 bg-green-50 shadow-md"
                              : "border-gray-200 hover:border-green-300"
                          }`}
                          style={{ animationDelay: `${index * 50}ms` }}
                        >
                          <input
                            type="radio"
                            name="service"
                            className="mr-4 text-green-600"
                            onChange={() => handleServiceSelect(service.name, service.price)}
                          />
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <span className="font-medium text-gray-900">{service.name}</span>
                              <span className="font-bold text-green-600">₹{service.price.toLocaleString()}</span>
                            </div>
                            <div className="text-sm text-gray-600">Duration: {service.duration}</div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Enhanced Date and Time Selection */}
                  <div className="space-y-4 animate-fade-in-up animation-delay-500">
                    <h3 className="text-lg font-semibold text-gray-900">Preferred Date & Time</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="animate-slide-in-left">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date *</label>
                        <Input
                          type="date"
                          className="border-gray-200 focus:border-green-500 focus:ring-green-500 transition-all duration-300"
                          onChange={(e) => setSelectedDate(e.target.value)}
                        />
                      </div>
                      <div className="animate-slide-in-right">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time *</label>
                        <select
                          className="w-full p-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
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
                  <div className="space-y-4 animate-fade-in-up animation-delay-600">
                    <h3 className="text-lg font-semibold text-gray-900">Service Address</h3>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Address *</label>
                      <Textarea
                        placeholder="Enter your complete address including building name, area, and landmark"
                        rows={3}
                        className="border-gray-200 focus:border-green-500 focus:ring-green-500 transition-all duration-300"
                      />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="animate-slide-in-left">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Area/Locality *</label>
                        <Input
                          placeholder="e.g., Bandra West"
                          className="border-gray-200 focus:border-green-500 focus:ring-green-500 transition-all duration-300"
                        />
                      </div>
                      <div className="animate-slide-in-right">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Pincode *</label>
                        <Input
                          placeholder="e.g., 400050"
                          className="border-gray-200 focus:border-green-500 focus:ring-green-500 transition-all duration-300"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Additional Information */}
                  <div className="space-y-4 animate-fade-in-up animation-delay-700">
                    <h3 className="text-lg font-semibold text-gray-900">Additional Information</h3>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Medical History / Allergies
                      </label>
                      <Textarea
                        placeholder="Please mention any medical conditions, allergies, or medications you're currently taking"
                        rows={3}
                        className="border-gray-200 focus:border-green-500 focus:ring-green-500 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Special Requests</label>
                      <Textarea
                        placeholder="Any special requirements or questions about the treatment"
                        rows={2}
                        className="border-gray-200 focus:border-green-500 focus:ring-green-500 transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Enhanced Terms and Conditions */}
                  <div className="space-y-4 animate-fade-in-up animation-delay-800">
                    <div className="flex items-start space-x-3 group">
                      <input type="checkbox" className="mt-1 text-green-600 focus:ring-green-500" />
                      <div className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                        I agree to the{" "}
                        <a
                          href="#"
                          className="text-green-600 hover:text-green-700 hover:underline transition-all duration-300"
                        >
                          Terms and Conditions
                        </a>{" "}
                        and{" "}
                        <a
                          href="#"
                          className="text-green-600 hover:text-green-700 hover:underline transition-all duration-300"
                        >
                          Privacy Policy
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 group">
                      <input type="checkbox" className="mt-1 text-green-600 focus:ring-green-500" />
                      <div className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                        I consent to receive appointment reminders and follow-up messages via SMS and email
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 hover:shadow-xl animate-fade-in-up animation-delay-900">
                    Book Appointment
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Enhanced Booking Summary & Info */}
            <div className="space-y-6 animate-slide-in-right">
              {/* Enhanced Booking Summary */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">Booking Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Service</span>
                    <span className="font-medium">{selectedService || "Not selected"}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Date</span>
                    <span className="font-medium">{selectedDate || "Not selected"}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Time</span>
                    <span className="font-medium">{selectedTime || "Not selected"}</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between text-lg font-bold">
                      <span>Total</span>
                      <span className="text-green-600 animate-pulse-price">₹{totalPrice.toLocaleString()}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Enhanced Contact Info */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">Need Help?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { icon: Phone, title: "Call Us", info: "+91 98765 43210" },
                    { icon: Clock, title: "Available", info: "9 AM - 8 PM" },
                    { icon: MapPin, title: "Service Areas", info: "All Mumbai" },
                  ].map((contact, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 group animate-fade-in-up"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <contact.icon className="w-5 h-5 text-green-600 group-hover:scale-110 transition-transform duration-300" />
                      <div>
                        <div className="font-medium text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                          {contact.title}
                        </div>
                        <div className="text-sm text-gray-600">{contact.info}</div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Enhanced What to Expect */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">What to Expect</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    "Confirmation call within 2 hours",
                    "Professional arrives with all equipment",
                    "Consultation before treatment",
                    "Follow-up care instructions",
                  ].map((expectation, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 animate-slide-in-right"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0 animate-pulse" />
                      <div className="text-sm text-gray-600">{expectation}</div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Enhanced Results Gallery */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">Results Gallery</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="group">
                      <Image
                        src="/placeholder.svg?height=100&width=100"
                        alt="Treatment Results"
                        width={100}
                        height={100}
                        className="rounded-lg object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="group">
                      <Image
                        src="/placeholder.svg?height=100&width=100"
                        alt="Hair Treatment Results"
                        width={100}
                        height={100}
                        className="rounded-lg object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">*Results may vary for each individual</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
