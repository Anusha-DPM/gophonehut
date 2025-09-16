'use client'

import React, { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function OrderTrackPage() {
  const [email, setEmail] = useState('')
  const [orderNumber, setOrderNumber] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Tracking order:', { email, orderNumber })
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

            {/* Right side - Navigation Links */}
            <div className="flex items-center gap-6 text-sm font-lato font-normal text-custom-blue">
              <a 
                href="#" 
                className="capitalize hover:text-custom-green transition-colors duration-200"
              >
                Quick Repair
              </a>
              <a 
                href="/locations" 
                className="capitalize hover:text-custom-green transition-colors duration-200"
              >
                Locations
              </a>
              <a 
                href="/order-track" 
                className="capitalize hover:text-custom-green transition-colors duration-200"
              >
                Track Order
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Static Header Section */}
      <div className="w-full bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="block">
                <img
                  src="/website-logo.png"
                  alt="Phone Hut Logo"
                  className="h-8 md:h-10 w-auto"
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <div className="relative group">
                <a
                  href="/repairs"
                  className="hover:text-gray-600 transition-colors duration-200"
                  style={{
                    fontSize: '16px',
                    fontFamily: 'lato',
                    color: '#333',
                    fontWeight: '600'
                  }}
                >
                  Repairs
                </a>
                <div className="absolute top-full left-0 mt-1 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-200">
                  <div className="py-2">
                    <a
                      href="/product-category/phone"
                      className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-200"
                      style={{
                        color: '#0e72d2',
                        fontWeight: 'bold',
                        fontSize: '15px',
                        letterSpacing: '1px',
                        textTransform: 'uppercase'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#6d6e71'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#0e72d2'}
                    >
                      Phone
                    </a>
                    <a
                      href="/product-category/c-tablet"
                      className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-200"
                      style={{
                        color: '#0e72d2',
                        fontWeight: 'bold',
                        fontSize: '15px',
                        letterSpacing: '1px',
                        textTransform: 'uppercase'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#6d6e71'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#0e72d2'}
                    >
                      Tablet
                    </a>
                    <a
                      href="/product-category/smartwatch"
                      className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-200"
                      style={{
                        color: '#0e72d2',
                        fontWeight: 'bold',
                        fontSize: '15px',
                        letterSpacing: '1px',
                        textTransform: 'uppercase'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#6d6e71'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#0e72d2'}
                    >
                      Smartwatch
                    </a>
                    <a
                      href="/product-category/computer"
                      className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-200"
                      style={{
                        color: '#0e72d2',
                        fontWeight: 'bold',
                        fontSize: '15px',
                        letterSpacing: '1px',
                        textTransform: 'uppercase'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#6d6e71'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#0e72d2'}
                    >
                      Computer
                    </a>
                  </div>
                </div>
              </div>
              
              <a
                href="/services"
                className="hover:text-gray-600 transition-colors duration-200"
                style={{
                  fontSize: '16px',
                  fontFamily: 'lato',
                  color: '#333',
                  fontWeight: '600'
                }}
              >
                Services
              </a>
              <a
                href="/locations"
                className="hover:text-gray-600 transition-colors duration-200"
                style={{
                  fontSize: '16px',
                  fontFamily: 'lato',
                  color: '#333',
                  fontWeight: '600'
                }}
              >
                Locations
              </a>
              <a
                href="/how-it-works"
                className="hover:text-gray-600 transition-colors duration-200"
                style={{
                  fontSize: '16px',
                  fontFamily: 'lato',
                  color: '#333',
                  fontWeight: '600'
                }}
              >
                How it works
              </a>
              <a
                href="/why"
                className="hover:text-gray-600 transition-colors duration-200"
                style={{
                  fontSize: '16px',
                  fontFamily: 'lato',
                  color: '#333',
                  fontWeight: '600'
                }}
              >
                Why Us
              </a>
              <a
                href="/contact-us"
                className="hover:text-gray-600 transition-colors duration-200"
                style={{
                  fontSize: '16px',
                  fontFamily: 'lato',
                  color: '#333',
                  fontWeight: '600'
                }}
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </div>
      
      {/* Sticky Header Section */}
      <Header />

      {/* Order Track Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontSize: '36px',
                color: 'black',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                fontWeight: '700'
              }}
            >
              Check Your Repair Status:
            </h1>
            <p 
              className="text-base md:text-lg max-w-3xl mx-auto"
              style={{
                fontSize: '16px',
                lineHeight: '1.5',
                color: 'black',
                fontFamily: "'Lato', sans-serif",
                fontWeight: '600'
              }}
            >
              To check the status of your order simply enter the email address used on booking and the order number you received in the booking confirmation email.
            </p>
          </div>

          {/* Order Track Form */}
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Email Input */}
                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-medium text-gray-700 mb-2"
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      fontSize: '16px',
                      fontWeight: '600'
                    }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Enter your email address"
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      fontSize: '16px'
                    }}
                  />
                </div>

                {/* Order Number Input */}
                <div>
                  <label 
                    htmlFor="orderNumber" 
                    className="block text-sm font-medium text-gray-700 mb-2"
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      fontSize: '16px',
                      fontWeight: '600'
                    }}
                  >
                    Order Number
                  </label>
                  <input
                    type="text"
                    id="orderNumber"
                    value={orderNumber}
                    onChange={(e) => setOrderNumber(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Enter your order number"
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      fontSize: '16px'
                    }}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-4">
                <button
                  type="submit"
                  className="px-8 py-4 rounded-full text-white font-bold transition-colors duration-200 hover:bg-blue-700"
                  style={{
                    backgroundColor: '#6d6e71',
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    borderRadius: '50px'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#6d6e71'}
                >
                  Track Your Order
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </main>
  )
}
