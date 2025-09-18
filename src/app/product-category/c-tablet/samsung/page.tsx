'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import TopHeader from '@/components/TopHeader'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// Samsung Galaxy Tab models data - 56 models
const samsungTablets = [
  { id: 1, name: 'Galaxy Tab S6 Lite', slug: 'galaxy-tab-s6-lite', image: '/tablet-samsung/galaxy-tab-s6-lite.png' },
  { id: 2, name: 'Galaxy Tab S5e', slug: 'galaxy-tab-s5e', image: '/tablet-samsung/galaxy-tab-s5e.png' },
  { id: 3, name: 'Galaxy Tab S4 10.5', slug: 'galaxy-tab-s4-10-5', image: '/tablet-samsung/galaxy-tab-s4-10-5.png' },
  { id: 4, name: 'Galaxy Tab S3 9.7', slug: 'galaxy-tab-s3-9-7', image: '/tablet-samsung/galaxy-tab-s3-9-7.png' },
  { id: 5, name: 'Galaxy Tab S2 9.7', slug: 'galaxy-tab-s2-9-7', image: '/tablet-samsung/galaxy-tab-s2-9-7.png' },
  { id: 6, name: 'Galaxy Tab S2 8.0', slug: 'galaxy-tab-s2-8-0', image: '/tablet-samsung/galaxy-tab-s2-8-0.png' },
  { id: 7, name: 'Galaxy Tab S6', slug: 'galaxy-tab-s6', image: '/tablet-samsung/Galaxy Tab S6.png' },
  { id: 8, name: 'Galaxy Tab S 10.5', slug: 'galaxy-tab-s-10-5', image: '/tablet-samsung/galaxy-tab-s-10-5.png' },
  { id: 9, name: 'Galaxy Tab S 8.4', slug: 'galaxy-tab-s-8-4', image: '/tablet-samsung/galaxy-tab-s-8-4.png' },
  { id: 10, name: 'Galaxy Tab A 10.1 (2019)', slug: 'galaxy-tab-a-10-1-2019', image: '/tablet-samsung/galaxy-tab-a-10-1-2019.png' },
  { id: 11, name: 'Galaxy Tab A 10.1 (2016)', slug: 'galaxy-tab-a-10-1-2016', image: '/tablet-samsung/galaxy-tab-a-10-1-2016.png' },
  { id: 12, name: 'Galaxy Tab A 10.5 (2018)', slug: 'galaxy-tab-a-10-5-2018', image: '/tablet-samsung/galaxy-tab-a-10-5-2018.png' },
  { id: 13, name: 'Galaxy Tab A 9.7', slug: 'galaxy-tab-a-9-7', image: '/tablet-samsung/galaxy-tab-a-9-7.png' },
  { id: 14, name: 'Galaxy Tab A 8.0 (2019)', slug: 'galaxy-tab-a-8-0-2019', image: '/tablet-samsung/galaxy-tab-a-8-0-2019.png' },
  { id: 15, name: 'Galaxy Tab A 8.0 (2018)', slug: 'galaxy-tab-a-8-0-2018', image: '/tablet-samsung/galaxy-tab-a-8-0-2018.png' },
  { id: 16, name: 'Galaxy Tab A 8.0 (2017)', slug: 'galaxy-tab-a-8-0-2017', image: '/tablet-samsung/galaxy-tab-a-8-0-2017.png' },
  { id: 17, name: 'Galaxy Tab A 8.0', slug: 'galaxy-tab-a-8-0', image: '/tablet-samsung/galaxy-tab-a-8-0.png' },
  { id: 18, name: 'Galaxy Tab A 7.0 (2016)', slug: 'galaxy-tab-a-7-0-2016', image: '/tablet-samsung/galaxy-tab-a-7-0-2016.png' },
  { id: 19, name: 'Galaxy Tab E 9.6', slug: 'galaxy-tab-e-9-6', image: '/tablet-samsung/galaxy-tab-e-9-6.png' },
  { id: 20, name: 'Galaxy Tab E 8.0', slug: 'galaxy-tab-e-8-0', image: '/tablet-samsung/galaxy-tab-e-8-0.png' },
  { id: 21, name: 'Galaxy Tab Pro 12.2', slug: 'galaxy-tab-pro-12-2', image: '/tablet-samsung/galaxy-tab-pro-12-2.png' },
  { id: 22, name: 'Galaxy Tab Pro 10.1', slug: 'galaxy-tab-pro-10-1', image: '/tablet-samsung/galaxy-tab-pro-10-1.png' },
  { id: 23, name: 'Galaxy Tab Pro 8.4', slug: 'galaxy-tab-pro-8-4', image: '/tablet-samsung/galaxy-tab-pro-8-4.png' },
  { id: 24, name: 'Galaxy Tab Pro S', slug: 'galaxy-tab-pro-s', image: '/tablet-samsung/galaxy-tab-pro-s.png' },
  { id: 25, name: 'Galaxy Tab 8.9', slug: 'galaxy-tab-8-9', image: '/tablet-samsung/galaxy-tab-8-9.png' },
  { id: 26, name: 'Galaxy Tab 7.7', slug: 'galaxy-tab-7-7', image: '/tablet-samsung/galaxy-tab-7-7.png' },
  { id: 27, name: 'Galaxy Tab 7.0 Plus', slug: 'galaxy-tab-7-0-plus', image: '/tablet-samsung/galaxy-tab-7-0-plus.png' },
  { id: 28, name: 'Galaxy Tab 7.0', slug: 'galaxy-tab-7-0', image: '/tablet-samsung/galaxy-tab-7-0.png' },
  { id: 29, name: 'Galaxy Tab 4 10.1', slug: 'galaxy-tab-4-10-1', image: '/tablet-samsung/galaxy-tab-4-10-1.png' },
  { id: 30, name: 'Galaxy Tab 4 8.0', slug: 'galaxy-tab-4-8-0', image: '/tablet-samsung/galaxy-tab-4-8-0.png' },
  { id: 31, name: 'Galaxy Tab 4 7.0', slug: 'galaxy-tab-4-7-0', image: '/tablet-samsung/galaxy-tab-4-7-0.png' },
  { id: 32, name: 'Galaxy Tab 4 Nook 7.0', slug: 'galaxy-tab-4-nook-7-0', image: '/tablet-samsung/galaxy-tab-4-nook-7-0.png' },
  { id: 33, name: 'Galaxy Tab 3 10.1', slug: 'galaxy-tab-3-10-1', image: '/tablet-samsung/galaxy-tab-3-10-1.png' },
  { id: 34, name: 'Galaxy Tab 3 8.0', slug: 'galaxy-tab-3-8-0', image: '/tablet-samsung/galaxy-tab-3-8-0.png' },
  { id: 35, name: 'Galaxy Tab 3 7.0', slug: 'galaxy-tab-3-7-0', image: '/tablet-samsung/galaxy-tab-3-7-0.png' },
  { id: 36, name: 'Galaxy Tab 3 7.0 Kids', slug: 'galaxy-tab-3-7-0-kids', image: '/tablet-samsung/galaxy-tab-3-7-0-kids.png' },
  { id: 37, name: 'Galaxy Tab 3 7.0 Garnet Red', slug: 'galaxy-tab-3-7-0-garnet-red', image: '/tablet-samsung/galaxy-tab-3-7-0-garnet-red.png' },
  { id: 38, name: 'Galaxy Tab 3 Lite 7.0', slug: 'galaxy-tab-3-lite-7-0', image: '/tablet-samsung/galaxy-tab-3-lite-7-0.png' },
  { id: 39, name: 'Galaxy Tab 2 10.1', slug: 'galaxy-tab-2-10-1', image: '/tablet-samsung/galaxy-tab-2-10-1.png' },
  { id: 40, name: 'Galaxy Tab 2 7.0', slug: 'galaxy-tab-2-7-0', image: '/tablet-samsung/galaxy-tab-2-7-0.png' },
  { id: 41, name: 'Galaxy Tab 10.1', slug: 'galaxy-tab-10-1', image: '/tablet-samsung/galaxy-tab-10-1.png' },
  { id: 42, name: 'Galaxy Note 10.1 (2014 Edition)', slug: 'galaxy-note-10-1-2014-edition', image: '/tablet-samsung/galaxy-note-10-1-2014-edition.png' },
  { id: 43, name: 'Galaxy Note 10.1', slug: 'galaxy-note-10-1', image: '/tablet-samsung/galaxy-note-10-1.png' },
  { id: 44, name: 'Galaxy Note 8.0', slug: 'galaxy-note-8-0', image: '/tablet-samsung/galaxy-note-8-0.png' },
  { id: 45, name: 'Galaxy Note Pro', slug: 'galaxy-note-pro', image: '/tablet-samsung/galaxy-note-pro.png' },
  { id: 46, name: 'Galaxy View', slug: 'galaxy-view', image: '/tablet-samsung/galaxy-view.png' },
  { id: 47, name: 'Galaxy View 2', slug: 'galaxy-view2', image: '/tablet-samsung/galaxy-view2.png' },
  { id: 48, name: 'Galaxy J Max', slug: 'galaxy-j-max', image: '/tablet-samsung/galaxy-j-max.png' },
  { id: 49, name: 'ATIV Tab 3', slug: 'ativ-tab-3', image: '/tablet-samsung/ativ-tab-3.png' },
  { id: 50, name: 'ATIV Tab 5', slug: 'ativ-tab-5', image: '/tablet-samsung/ativ-tab-5.png' },
  { id: 51, name: 'ATIV Tab 7', slug: 'ativ-tab-7', image: '/tablet-samsung/ativ-tab-7.png' },
  { id: 52, name: 'ATIV Tab Q', slug: 'ativ-tab-q', image: '/tablet-samsung/ativ-tab-q.png' },
  { id: 53, name: 'ATIV Tab', slug: 'ativ-tab', image: '/tablet-samsung/ativ-tab.png' },
  { id: 54, name: 'Google Nexus 10', slug: 'google-nexus-10', image: '/tablet-samsung/google-nexus-10.png' },
  { id: 55, name: 'Q1 Ultra', slug: 'q1-ultra', image: '/tablet-samsung/q1-ultra.png' },
  { id: 56, name: 'Q1', slug: 'q1', image: '/tablet-samsung/q1.png' }
]

export default function SamsungTabletPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredTablets, setFilteredTablets] = useState(samsungTablets)

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase()
    setSearchTerm(term)
    const filtered = samsungTablets.filter(tablet => 
      tablet.name.toLowerCase().includes(term)
    )
    setFilteredTablets(filtered)
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
              <Link href="/" className="block">
                <Image
                  src="/website-logo.png"
                  alt="PhoneHut Logo"
                  width={200}
                  height={60}
                  className="h-8 md:h-10 lg:h-12 w-auto"
                />
              </Link>
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

      {/* Product Selection Section */}
      <section 
        className="py-16 md:py-20"
        style={{ 
          backgroundImage: 'url(/inner_pages_bg_image.png)', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="text-center mb-12 md:mb-16">
            <h2
              className="font-raleway font-bold uppercase mb-4"
              style={{
                fontSize: '36px',
                color: 'black',
                fontFamily: "'Raleway', sans-serif",
                letterSpacing: '1px',
                fontWeight: '700'
              }}
            >
              Select your model
            </h2>
            <p
              className="font-lato"
              style={{
                fontSize: '20px',
                lineHeight: '1.5',
                color: 'black',
                fontFamily: "'Lato', sans-serif"
              }}
            >
              Please select your model to repair
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for your device here"
                value={searchTerm}
                onChange={handleSearch}
                className="w-full px-6 py-4 pr-12 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                style={{
                  fontSize: '16px',
                  fontFamily: "'Lato', sans-serif"
                }}
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-400"
                >
                  <circle cx="11" cy="11" r="8"/>
                  <path d="m21 21-4.35-4.35"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Product Grid - Responsive for mobile, tablet, and desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
            {filteredTablets.map((tablet) => (
              <Link
                key={tablet.id}
                href={`/repair/${tablet.slug}`}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 p-4 md:p-6 text-center cursor-pointer border border-gray-200 group relative"
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#6d6e71'
                  const textElement = e.currentTarget.querySelector('h3') as HTMLElement
                  if (textElement) {
                    textElement.style.color = 'white'
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'white'
                  const textElement = e.currentTarget.querySelector('h3') as HTMLElement
                  if (textElement) {
                    textElement.style.color = '#233D63'
                  }
                }}
              >
                {/* Product Image */}
                <div className="mb-4 md:mb-6">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mx-auto flex items-center justify-center">
                    <Image
                      src={tablet.image}
                      alt={tablet.name}
                      width={112}
                      height={112}
                      className="w-full h-full object-contain transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Product Name */}
                <h3
                  className="transition-colors duration-300"
                  style={{
                    fontFamily: "'Raleway', sans-serif",
                    fontSize: '18px',
                    color: '#233D63',
                    textTransform: 'capitalize',
                    fontWeight: '700'
                  }}
                >
                  {tablet.name}
                </h3>
              </Link>
            ))}
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
            Get in touch for a free estimate and see how we can help.
          </p>

          <button
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
    </main>
  )
}
