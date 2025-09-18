'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function MissingProductFormPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    deviceModel: '',
    deviceType: '',
    issueDescription: '',
    urgency: '',
    additionalInfo: ''
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
              <a href="#" className="font-lato font-normal transition-colors duration-200 hover:text-[#71af43]" style={{ color: '#007DD2' }}>
                Quick Repair
              </a>
              <a href="/locations" className="font-lato font-normal transition-colors duration-200 hover:text-[#71af43]" style={{ color: '#007DD2' }}>
                Locations
              </a>
              <a href="#" className="font-lato font-normal transition-colors duration-200 hover:text-[#71af43]" style={{ color: '#007DD2' }}>
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
      <section className="relative py-20 md:py-32 mobile-device-not-found-hero-spacing" style={{ backgroundImage: 'url(/contact.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
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
            Device not found?
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
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Content and Form */}
            <div>
              <p
                className="mb-8"
                style={{
                  fontSize: '16px',
                  lineHeight: '1.5',
                  color: 'black',
                  fontFamily: "'Lato', sans-serif",
                  fontWeight: '500'
                }}
              >
                If you do not see your device please fill out the form below and we will get back to you ASAP. Please add the model number to your device if you can locate it to make it easier for us to reserve the proper parts for your repair. Please also feel free to give us a call during business hours and we will be happy to help.
              </p>

              {/* Custom Quote Form */}
              <div className="bg-white rounded-lg shadow-lg p-8">
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
                  Custom Quote Form
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium mb-2"
                        style={{
                          fontFamily: "'Lato', sans-serif",
                          color: '#333',
                          fontWeight: '600'
                        }}
                      >
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                        style={{
                          fontFamily: "'Lato', sans-serif",
                          fontSize: '16px'
                        }}
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="deviceModel"
                        className="block text-sm font-medium mb-2"
                        style={{
                          fontFamily: "'Lato', sans-serif",
                          color: '#333',
                          fontWeight: '600'
                        }}
                      >
                        Device Model *
                      </label>
                      <input
                        type="text"
                        id="deviceModel"
                        name="deviceModel"
                        value={formData.deviceModel}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                        style={{
                          fontFamily: "'Lato', sans-serif",
                          fontSize: '16px'
                        }}
                        placeholder="Enter device model number"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="deviceType"
                        className="block text-sm font-medium mb-2"
                        style={{
                          fontFamily: "'Lato', sans-serif",
                          color: '#333',
                          fontWeight: '600'
                        }}
                      >
                        Device Type *
                      </label>
                      <select
                        id="deviceType"
                        name="deviceType"
                        value={formData.deviceType}
                        onChange={handleInputChange}
                        required
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
                        htmlFor="urgency"
                        className="block text-sm font-medium mb-2"
                        style={{
                          fontFamily: "'Lato', sans-serif",
                          color: '#333',
                          fontWeight: '600'
                        }}
                      >
                        Urgency Level
                      </label>
                      <select
                        id="urgency"
                        name="urgency"
                        value={formData.urgency}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                        style={{
                          fontFamily: "'Lato', sans-serif",
                          fontSize: '16px'
                        }}
                      >
                        <option value="">Select urgency level</option>
                        <option value="low">Low - Can wait a few days</option>
                        <option value="medium">Medium - Within a week</option>
                        <option value="high">High - ASAP</option>
                        <option value="urgent">Urgent - Same day</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="issueDescription"
                      className="block text-sm font-medium mb-2"
                      style={{
                        fontFamily: "'Lato', sans-serif",
                        color: '#333',
                        fontWeight: '600'
                      }}
                    >
                      Issue Description *
                    </label>
                    <textarea
                      id="issueDescription"
                      name="issueDescription"
                      value={formData.issueDescription}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-vertical"
                      style={{
                        fontFamily: "'Lato', sans-serif",
                        fontSize: '16px'
                      }}
                      placeholder="Describe the issue with your device..."
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="additionalInfo"
                      className="block text-sm font-medium mb-2"
                      style={{
                        fontFamily: "'Lato', sans-serif",
                        color: '#333',
                        fontWeight: '600'
                      }}
                    >
                      Additional Information
                    </label>
                    <textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-vertical"
                      style={{
                        fontFamily: "'Lato', sans-serif",
                        fontSize: '16px'
                      }}
                      placeholder="Any additional information about your device or repair needs..."
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
                      Request Custom Quote
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Right Side - Contact Information */}
            <div className="lg:pl-8">
              <div className="bg-gray-50 rounded-lg p-8 h-fit">
                <h3
                  className="font-raleway font-bold text-2xl sm:text-3xl md:text-4xl mb-6 mobile-heading-26px"
                  style={{
                    fontFamily: "'Raleway', sans-serif",
                    color: 'black',
                    textTransform: 'capitalize',
                    letterSpacing: '1px',
                    fontWeight: '700'
                  }}
                >
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <div>
                    <h4
                      className="font-lato font-semibold text-lg mb-2"
                      style={{
                        fontFamily: "'Lato', sans-serif",
                        color: '#333',
                        fontWeight: '600'
                      }}
                    >
                      Address:
                    </h4>
                    <p
                      className="font-lato"
                      style={{
                        fontFamily: "'Lato', sans-serif",
                        color: '#666',
                        fontSize: '16px',
                        lineHeight: '1.5'
                      }}
                    >
                      Phone Hut
                    </p>
                  </div>

                  <div>
                    <h4
                      className="font-lato font-semibold text-lg mb-2"
                      style={{
                        fontFamily: "'Lato', sans-serif",
                        color: '#333',
                        fontWeight: '600'
                      }}
                    >
                      Phone:
                    </h4>
                    <a
                      href="tel:408-224-2869"
                      className="font-lato text-blue-600 hover:text-blue-800 transition-colors duration-200"
                      style={{
                        fontFamily: "'Lato', sans-serif",
                        fontSize: '16px',
                        lineHeight: '1.5'
                      }}
                    >
                      408-224-2869
                    </a>
                  </div>

                  <div>
                    <h4
                      className="font-lato font-semibold text-lg mb-2"
                      style={{
                        fontFamily: "'Lato', sans-serif",
                        color: '#333',
                        fontWeight: '600'
                      }}
                    >
                      Email:
                    </h4>
                    <a
                      href="mailto:oakridge@gophonehut.com"
                      className="font-lato text-blue-600 hover:text-blue-800 transition-colors duration-200"
                      style={{
                        fontFamily: "'Lato', sans-serif",
                        fontSize: '16px',
                        lineHeight: '1.5'
                      }}
                    >
                      oakridge@gophonehut.com
                    </a>
                  </div>

                  {/* Social Media Icons */}
                  <div>
                    <h4
                      className="font-lato font-semibold text-lg mb-4"
                      style={{
                        fontFamily: "'Lato', sans-serif",
                        color: '#333',
                        fontWeight: '600'
                      }}
                    >
                      Follow Us:
                    </h4>
                    <div className="flex space-x-3">
                      {/* Facebook */}
                      <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
                      >
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </a>
                      {/* Twitter/X */}
                      <a
                        href="https://x.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                      >
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                      </a>
                      {/* LinkedIn */}
                      <a
                        href="https://www.linkedin.com/company/?_l=en_US"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors duration-200"
                      >
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                      {/* Pinterest */}
                      <a
                        href="https://www.pinterest.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors duration-200"
                      >
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                        </svg>
                      </a>
                      {/* Vimeo */}
                      <a
                        href="https://vimeo.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                      >
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197c1.185-1.044 2.351-2.084 3.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.493 4.797l-.013.01z"/>
                        </svg>
                      </a>
                      {/* Instagram */}
                      <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                      >
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2"/>
                          <path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" strokeWidth="2"/>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2"/>
                        </svg>
                      </a>
                      {/* Yelp */}
                      <a
                        href="https://www.yelp.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-200"
                      >
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-7h2v-2h-2v2zm0-4h2V6h-2v5z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
