'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function WriteAReviewPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: '',
    review: '',
    device: '',
    service: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <main className="min-h-screen">
      {/* Top Header Section */}
      <div className="w-full" style={{ backgroundColor: '#f2f2f2' }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-2">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
            {/* Left side - Contact Information */}
            <div className="flex items-center gap-4 text-sm font-lato font-normal text-black">
              <div className="flex items-center gap-1">
                {/* Phone Icon */}
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                  className="text-black"
                >
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span>408-224-2869</span>
              </div>
              
              <span className="text-black">|</span>
              
              <div className="flex items-center gap-1">
                {/* Clock Icon */}
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-black"
                >
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12,6 12,12 16,14"/>
                </svg>
                <span>Hours Vary By Location</span>
              </div>
            </div>

            {/* Right side - Quick Links */}
            <div className="flex items-center gap-4 text-sm">
              <a href="#" className="font-lato font-normal text-black hover:text-gray-600 transition-colors duration-200">
                Quick Repair
              </a>
              <a href="#" className="font-lato font-normal text-black hover:text-gray-600 transition-colors duration-200">
                Locations
              </a>
              <a href="#" className="font-lato font-normal text-black hover:text-gray-600 transition-colors duration-200">
                Track Order
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="w-full bg-white" style={{ boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.05)' }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4 md:py-6">
          <div className="flex flex-row justify-between items-center gap-4">
            {/* Left side - Logo */}
            <div className="flex items-center gap-2">
              <a href="/" className="block">
                <img
                  src="/website-logo.png"
                  alt="PhoneHut Logo"
                  className="h-8 md:h-10 lg:h-12 w-auto"
                />
              </a>
            </div>

            {/* Right side - Navigation */}
            <div className="flex items-center gap-8">
              <nav className="hidden md:flex items-center gap-8">
                <a href="/repairs" className="font-raleway font-bold uppercase transition-colors duration-200" style={{ fontSize: '15px', letterSpacing: '1px', color: '#0e72d2' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#6d6e71'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#0e72d2'}>
                  Repairs
                </a>
                <a href="/services" className="font-raleway font-bold uppercase transition-colors duration-200" style={{ fontSize: '15px', letterSpacing: '1px', color: '#0e72d2' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#6d6e71'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#0e72d2'}>
                  Services
                </a>
                <a href="/how-it-works" className="font-raleway font-bold uppercase transition-colors duration-200" style={{ fontSize: '15px', letterSpacing: '1px', color: '#0e72d2' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#6d6e71'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#0e72d2'}>
                  How It Works
                </a>
                <a href="/why" className="font-raleway font-bold uppercase transition-colors duration-200" style={{ fontSize: '15px', letterSpacing: '1px', color: '#0e72d2' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#6d6e71'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#0e72d2'}>
                  Why Us
                </a>
                <a href="/contact-us" className="font-raleway font-bold uppercase transition-colors duration-200" style={{ fontSize: '15px', letterSpacing: '1px', color: '#0e72d2' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#6d6e71'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#0e72d2'}>
                  Contact
                </a>
              </nav>
              
              {/* Search Icon */}
              <div className="ml-4">
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="hover:text-gray-300 transition-colors duration-200 cursor-pointer"
                  style={{ color: '#0e72d2' }}
                >
                  <circle cx="11" cy="11" r="8"/>
                  <path d="m21 21-4.35-4.35"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Header />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32" style={{ backgroundImage: 'url(/contact.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h1
            className="font-raleway font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 mobile-heading-26px"
            style={{
              fontFamily: "'Raleway', sans-serif",
              color: 'white',
              textTransform: 'capitalize',
              letterSpacing: '1px',
              fontWeight: '700'
            }}
          >
            Write A Review
          </h1>
          <h2
            className="font-raleway font-medium text-lg sm:text-xl md:text-2xl"
            style={{
              fontFamily: "'Raleway', sans-serif",
              color: 'white',
              textTransform: 'capitalize',
              letterSpacing: '1px',
              fontWeight: '500'
            }}
          >
            Image Text...
          </h2>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <p
            className="text-center mb-12"
            style={{
              fontSize: '16px',
              lineHeight: '1.5',
              color: 'black',
              fontFamily: "'Lato', sans-serif",
              fontWeight: '500'
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>

          {/* Review Form */}
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h3
              className="font-raleway font-bold text-2xl sm:text-3xl md:text-4xl mb-8 text-center mobile-heading-26px"
              style={{
                fontFamily: "'Raleway', sans-serif",
                color: 'black',
                textTransform: 'capitalize',
                letterSpacing: '1px',
                fontWeight: '700'
              }}
            >
              Write A Review
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      color: '#333',
                      fontWeight: '600'
                    }}
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      fontSize: '16px'
                    }}
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      color: '#333',
                      fontWeight: '600'
                    }}
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      fontSize: '16px'
                    }}
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              {/* Device and Service Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="device"
                    className="block text-sm font-medium mb-2"
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      color: '#333',
                      fontWeight: '600'
                    }}
                  >
                    Device Type
                  </label>
                  <select
                    id="device"
                    name="device"
                    value={formData.device}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      fontSize: '16px'
                    }}
                  >
                    <option value="">Select device type</option>
                    <option value="iphone">iPhone</option>
                    <option value="samsung">Samsung</option>
                    <option value="google">Google Pixel</option>
                    <option value="ipad">iPad</option>
                    <option value="samsung-tablet">Samsung Tablet</option>
                    <option value="apple-watch">Apple Watch</option>
                    <option value="samsung-watch">Samsung Watch</option>
                    <option value="macbook">MacBook</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium mb-2"
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      color: '#333',
                      fontWeight: '600'
                    }}
                  >
                    Service Type
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      fontSize: '16px'
                    }}
                  >
                    <option value="">Select service type</option>
                    <option value="screen-repair">Screen Repair</option>
                    <option value="battery-replacement">Battery Replacement</option>
                    <option value="camera-repair">Camera Repair</option>
                    <option value="software-issue">Software Issue</option>
                    <option value="water-damage">Water Damage</option>
                    <option value="charging-port">Charging Port</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Rating */}
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    color: '#333',
                    fontWeight: '600'
                  }}
                >
                  Overall Rating *
                </label>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, rating: star.toString() }))}
                      className={`w-10 h-10 rounded-full border-2 transition-colors duration-200 ${
                        parseInt(formData.rating) >= star
                          ? 'bg-yellow-400 border-yellow-400'
                          : 'bg-white border-gray-300 hover:border-yellow-400'
                      }`}
                    >
                      <svg
                        className="w-6 h-6 mx-auto"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        style={{ color: parseInt(formData.rating) >= star ? '#fbbf24' : '#d1d5db' }}
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </button>
                  ))}
                </div>
                <p
                  className="text-sm mt-1"
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    color: '#666'
                  }}
                >
                  {formData.rating ? `${formData.rating} star${formData.rating !== '1' ? 's' : ''}` : 'Click to rate'}
                </p>
              </div>

              {/* Review Text */}
              <div>
                <label
                  htmlFor="review"
                  className="block text-sm font-medium mb-2"
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    color: '#333',
                    fontWeight: '600'
                  }}
                >
                  Your Review *
                </label>
                <textarea
                  id="review"
                  name="review"
                  value={formData.review}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-vertical"
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: '16px'
                  }}
                  placeholder="Tell us about your experience with our service..."
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-4 rounded-full text-white font-bold uppercase transition-colors duration-200 hover:opacity-90"
                  style={{
                    backgroundColor: '#6d6e71',
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    borderRadius: '50px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#0056b3'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#6d6e71'
                  }}
                >
                  Submit Review
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
