'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function BulkRepairFormPage() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    deviceType: '',
    quantity: '',
    repairType: '',
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
              <a href="#" className="font-lato font-normal text-black hover:text-gray-600 transition-colors duration-200">
                Quick Repair
              </a>
              <a href="/locations" className="font-lato font-normal text-black hover:text-gray-600 transition-colors duration-200">
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
      <section className="relative py-20 md:py-32 mobile-bulk-repair-hero-spacing" style={{ backgroundImage: 'url(/contact.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
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
            BULK REPAIR FORM
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
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>

          {/* Bulk Repair Form */}
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
              Bulk Repair Form
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Company Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="companyName"
                    className="block text-sm font-medium mb-2"
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      color: '#333',
                      fontWeight: '600'
                    }}
                  >
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      fontSize: '16px'
                    }}
                    placeholder="Enter your company name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contactPerson"
                    className="block text-sm font-medium mb-2"
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      color: '#333',
                      fontWeight: '600'
                    }}
                  >
                    Contact Person *
                  </label>
                  <input
                    type="text"
                    id="contactPerson"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      fontSize: '16px'
                    }}
                    placeholder="Enter contact person name"
                  />
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              </div>

              {/* Address Information */}
              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium mb-2"
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    color: '#333',
                    fontWeight: '600'
                  }}
                >
                  Street Address *
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: '16px'
                  }}
                  placeholder="Enter your street address"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium mb-2"
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      color: '#333',
                      fontWeight: '600'
                    }}
                  >
                    City *
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      fontSize: '16px'
                    }}
                    placeholder="Enter city"
                  />
                </div>

                <div>
                  <label
                    htmlFor="state"
                    className="block text-sm font-medium mb-2"
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      color: '#333',
                      fontWeight: '600'
                    }}
                  >
                    State *
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      fontSize: '16px'
                    }}
                    placeholder="Enter state"
                  />
                </div>

                <div>
                  <label
                    htmlFor="zipCode"
                    className="block text-sm font-medium mb-2"
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      color: '#333',
                      fontWeight: '600'
                    }}
                  >
                    ZIP Code *
                  </label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      fontSize: '16px'
                    }}
                    placeholder="Enter ZIP code"
                  />
                </div>
              </div>

              {/* Repair Information */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                    htmlFor="quantity"
                    className="block text-sm font-medium mb-2"
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      color: '#333',
                      fontWeight: '600'
                    }}
                  >
                    Quantity *
                  </label>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    required
                    min="1"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      fontSize: '16px'
                    }}
                    placeholder="Enter quantity"
                  />
                </div>

                <div>
                  <label
                    htmlFor="repairType"
                    className="block text-sm font-medium mb-2"
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      color: '#333',
                      fontWeight: '600'
                    }}
                  >
                    Repair Type *
                  </label>
                  <select
                    id="repairType"
                    name="repairType"
                    value={formData.repairType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      fontSize: '16px'
                    }}
                  >
                    <option value="">Select repair type</option>
                    <option value="screen-repair">Screen Repair</option>
                    <option value="battery-replacement">Battery Replacement</option>
                    <option value="camera-repair">Camera Repair</option>
                    <option value="software-issue">Software Issue</option>
                    <option value="water-damage">Water Damage</option>
                    <option value="charging-port">Charging Port</option>
                    <option value="multiple-issues">Multiple Issues</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Additional Information */}
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
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-vertical"
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: '16px'
                  }}
                  placeholder="Please provide any additional details about your bulk repair requirements..."
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
                  Submit Bulk Repair Request
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
