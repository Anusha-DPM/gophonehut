'use client'

import { useState } from 'react'
import TopHeader from '@/components/TopHeader'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function OffersPage() {
  const [isCardFlipped, setIsCardFlipped] = useState(false)

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
                <a href="#" className="font-raleway font-bold uppercase transition-colors duration-200" style={{ fontSize: '15px', letterSpacing: '1px', color: '#0e72d2' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#6d6e71'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#0e72d2'}>
                  Why Us
                </a>
                <a href="#" className="font-raleway font-bold uppercase transition-colors duration-200" style={{ fontSize: '15px', letterSpacing: '1px', color: '#0e72d2' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#6d6e71'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#0e72d2'}>
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
      <section className="relative py-20 md:py-32" style={{ backgroundImage: 'url(/whychooseus.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h1
            className="font-raleway font-bold uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 mobile-heading-26px"
            style={{
              fontFamily: "'Raleway', sans-serif",
              color: 'white',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              fontWeight: '700'
            }}
          >
            PROMOCODES & COUPONS
          </h1>
          <h2
            className="font-raleway font-medium uppercase text-lg sm:text-xl md:text-2xl"
            style={{
              fontFamily: "'Raleway', sans-serif",
              color: 'white',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              fontWeight: '500'
            }}
          >
            DISCOUNT JACKPOT.
          </h2>
        </div>
      </section>

      {/* Offers Content Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p
              className="text-base md:text-lg leading-relaxed max-w-4xl mx-auto"
              style={{
                fontSize: '16px',
                lineHeight: '1.5',
                color: 'black',
                fontFamily: "'Lato', sans-serif",
                fontWeight: '500'
              }}
            >
              Check out the latest promotions and offers on our repair services. We add new promotions and discount codes weekly, lots of offers are exclusive to our social media followers so be sure to head over and follow us on Facebook, Instagram and X!
            </p>
          </div>

          {/* Promo Card Section */}
          <div className="flex justify-center mb-16">
            <div 
              className="relative w-72 sm:w-80 h-44 sm:h-48 cursor-pointer perspective-1000"
              onMouseEnter={() => setIsCardFlipped(true)}
              onMouseLeave={() => setIsCardFlipped(false)}
            >
              {/* Card Container */}
              <div 
                className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                  isCardFlipped ? 'rotate-y-180' : ''
                }`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Front of Card */}
                <div 
                  className="absolute inset-0 w-full h-full backface-hidden rounded-lg shadow-lg flex flex-col items-center justify-center"
                  style={{
                    backgroundColor: '#6d6e71',
                    backfaceVisibility: 'hidden'
                  }}
                >
                  <div className="text-center">
                    <div
                      className="text-6xl font-bold mb-4"
                      style={{
                        fontFamily: "'Raleway', sans-serif",
                        color: 'white',
                        fontWeight: '700'
                      }}
                    >
                      10% OFF
                    </div>
                    <div
                      className="text-lg"
                      style={{
                        fontFamily: "'Lato', sans-serif",
                        color: 'white',
                        fontWeight: '500'
                      }}
                    >
                      Never Expires
                    </div>
                  </div>
                </div>

                {/* Back of Card */}
                <div 
                  className="absolute inset-0 w-full h-full backface-hidden rounded-lg shadow-lg flex flex-col items-center justify-center rotate-y-180"
                  style={{
                    backgroundColor: '#0e72d2',
                    backfaceVisibility: 'hidden'
                  }}
                >
                  <div className="text-center p-6">
                    <div
                      className="text-4xl font-bold mb-4"
                      style={{
                        fontFamily: "'Raleway', sans-serif",
                        color: 'white',
                        fontWeight: '700'
                      }}
                    >
                      TW10
                    </div>
                    <div
                      className="text-sm mb-6"
                      style={{
                        fontFamily: "'Lato', sans-serif",
                        color: 'white',
                        fontWeight: '500'
                      }}
                    >
                      *Limited per customer
                    </div>
                    <a
                      href="/product-category/phone"
                      className="inline-block px-6 py-3 rounded-full text-white font-bold uppercase transition-colors duration-200"
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
                      Redeem Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Content Section - Card */}
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
              {/* Left side - Text Content */}
              <div className="flex-1 text-center lg:text-left">
                <h3
                  className="font-raleway font-medium text-2xl sm:text-3xl md:text-4xl mb-4 mobile-heading-26px"
                  style={{
                    fontFamily: "'Raleway', sans-serif",
                    color: 'black',
                    textTransform: 'capitalize',
                    letterSpacing: '1px',
                    fontWeight: '500'
                  }}
                >
                  Looking for the best deals?
                </h3>
                <p
                  className="text-base md:text-lg leading-relaxed"
                  style={{
                    fontSize: '16px',
                    lineHeight: '1.5',
                    color: 'black',
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: '500'
                  }}
                >
                  You&apos;re in the right place.
                </p>
              </div>
              
              {/* Right side - Button */}
              <div className="flex-shrink-0">
                <a
                  href="/product-category/phone"
                  className="inline-block px-8 py-4 rounded-full text-white font-bold uppercase transition-colors duration-200"
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
                  Book an Appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
