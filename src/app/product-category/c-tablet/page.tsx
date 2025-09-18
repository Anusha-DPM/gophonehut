'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import QuoteRequestPopup from '@/components/QuoteRequestPopup'

export default function TabletPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const brands = [
    {
      id: 'apple',
      name: '',
      logo: '/apple.png',
      link: '/product-category/c-tablet/apple'
    },
    {
      id: 'samsung',
      name: '',
      logo: '/samsung.png',
      link: '/product-category/c-tablet/samsung'
    }
  ]

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
              <a href="/quick-repair" className="font-lato font-normal text-black hover:text-gray-600 transition-colors duration-200">
                Quick Repair
              </a>
              <a href="/locations" className="font-lato font-normal text-black hover:text-gray-600 transition-colors duration-200">
                Locations
              </a>
              <a href="/order-track" className="font-lato font-normal text-black hover:text-gray-600 transition-colors duration-200">
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
                <div className="relative group">
                  <a href="/repairs" className="font-raleway font-bold uppercase transition-colors duration-200" style={{ fontSize: '15px', letterSpacing: '1px', color: '#0e72d2' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#6d6e71'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#0e72d2'}>
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

      {/* Brand Selection Section */}
      <section 
        className="py-16 md:py-20"
        style={{ 
          backgroundImage: 'url(/inner_pages_bg_image.png)', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="text-center mb-12 md:mb-16">
            <h2
              className="font-raleway font-bold uppercase text-xl sm:text-2xl md:text-3xl"
              style={{
                color: '#233d63',
                fontFamily: "'Raleway', sans-serif",
                letterSpacing: '1px',
                fontWeight: '700'
              }}
            >
              Select your brand
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-12 max-w-2xl mx-auto">
            {brands.map((brand) => {
              if (brand.link) {
                return (
                  <Link
                    key={brand.id}
                    href={brand.link}
                    className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 p-6 md:p-8 text-center cursor-pointer border border-gray-200 group relative block"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#6d6e71'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'white'
                    }}
                  >
                    {/* Tick Icon - Top Right Corner */}
                    <div className="absolute top-3 right-3 md:top-4 md:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                    </div>

                    {/* Brand Logo */}
                    <div className="mb-4 md:mb-6">
                      <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto flex items-center justify-center">
                        <img
                          src={brand.logo}
                          alt={`${brand.name} Logo`}
                          className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain group-hover:brightness-0 group-hover:invert transition-all duration-300"
                        />
                      </div>
                    </div>

                    {/* Brand Name */}
                    <h3
                      className="text-lg sm:text-xl md:text-2xl font-bold text-[#233d63] group-hover:text-white transition-colors duration-300"
                      style={{
                        fontFamily: "'Raleway', sans-serif"
                      }}
                    >
                      {brand.name}
                    </h3>
                  </Link>
                )
              } else {
                return (
                  <div
                    key={brand.id}
                    className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 p-6 md:p-8 text-center cursor-pointer border border-gray-200 group relative"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#6d6e71'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'white'
                    }}
                  >
                {/* Tick Icon - Top Right Corner */}
                <div className="absolute top-3 right-3 md:top-4 md:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                </div>

                {/* Brand Logo */}
                <div className="mb-4 md:mb-6">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto flex items-center justify-center">
                    <img
                      src={brand.logo}
                      alt={`${brand.name} Logo`}
                      className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain group-hover:brightness-0 group-hover:invert transition-all duration-300"
                    />
                  </div>
                </div>

                    {/* Brand Name */}
                    <h3
                      className="text-lg sm:text-xl md:text-2xl font-bold text-[#233d63] group-hover:text-white transition-colors duration-300"
                      style={{
                        fontFamily: "'Raleway', sans-serif"
                      }}
                    >
                      {brand.name}
                    </h3>
                  </div>
                )
              }
            })}
          </div>
        </div>
      </section>

      {/* Can't Find Your Device Section */}
      <section className="py-16 md:py-20" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{
              fontFamily: "'Raleway', sans-serif",
              color: '#233d63'
            }}
          >
            Can&apos;t find a model you&apos;re looking for?
          </h2>
          
          <p
            className="text-lg mb-8"
            style={{
              fontFamily: 'lato',
              color: '#666',
              lineHeight: '1.6'
            }}
          >
            Get in touch for a free estimate and see how we can help with your tablet repair.
          </p>

          <button
            onClick={() => setIsPopupOpen(true)}
            className="py-4 px-8 rounded-lg font-semibold text-lg transition-colors duration-200"
            style={{
              backgroundColor: '#6d6e71',
              color: 'white',
              fontFamily: 'lato'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#0056b3'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#6d6e71'
            }}
          >
            Quote Request
          </button>
        </div>
      </section>

      <Footer />
      
      {/* Quote Request Popup */}
      <QuoteRequestPopup 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
      />
    </main>
  )
}