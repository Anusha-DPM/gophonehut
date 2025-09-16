'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import TopHeader from '@/components/TopHeader'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// Apple iPhone models data - matching GoPhoneHut reference
const applePhones = [
  { id: 1, name: 'iPhone 14 Pro Max', slug: 'iphone-14-pro-max', image: '/phone/1.png' },
  { id: 2, name: 'iPhone 14 Pro', slug: 'iphone-14-pro', image: '/phone/2.png' },
  { id: 3, name: 'iPhone 14 Plus', slug: 'iphone-14-plus', image: '/phone/3.png' },
  { id: 4, name: 'iPhone 14', slug: 'iphone-14', image: '/phone/4.png' },
  { id: 5, name: 'iPhone 13 Pro Max', slug: 'iphone-13-pro-max', image: '/phone/5.png' },
  { id: 6, name: 'iPhone 13 Pro', slug: 'iphone-13-pro', image: '/phone/6.png' },
  { id: 7, name: 'iPhone 13', slug: 'iphone-13', image: '/phone/7.png' },
  { id: 8, name: 'iPhone 13 Mini', slug: 'iphone-13-mini', image: '/phone/8.png' },
  { id: 9, name: 'iPhone 12 Pro Max', slug: 'iphone-12-pro-max', image: '/phone/9.png' },
  { id: 10, name: 'iPhone 12 Pro', slug: 'iphone-12-pro', image: '/phone/10.png' },
  { id: 11, name: 'iPhone 12', slug: 'iphone-12', image: '/phone/11.png' },
  { id: 12, name: 'iPhone 12 Mini', slug: 'iphone-12-mini', image: '/phone/12.png' },
  { id: 13, name: 'iPhone 11 Pro Max', slug: 'iphone-11-pro-max', image: '/phone/13.png' },
  { id: 14, name: 'iPhone 11 Pro', slug: 'iphone-11-pro', image: '/phone/14.png' },
  { id: 15, name: 'iPhone 11', slug: 'iphone-11', image: '/phone/15.png' },
  { id: 16, name: 'iPhone XS Max', slug: 'iphone-xs-max', image: '/phone/16.png' },
  { id: 17, name: 'iPhone XS', slug: 'iphone-xs', image: '/phone/17.png' },
  { id: 18, name: 'iPhone XR', slug: 'iphone-xr', image: '/phone/18.png' },
  { id: 19, name: 'iPhone X', slug: 'iphone-x', image: '/phone/19.png' },
  { id: 20, name: 'iPhone SE (2020)', slug: 'iphone-se-2020', image: '/phone/20.png' },
  { id: 21, name: 'iPhone 8 Plus', slug: 'iphone-8-plus', image: '/phone/21.png' },
  { id: 22, name: 'iPhone 8', slug: 'iphone-8', image: '/phone/22.png' },
  { id: 23, name: 'iPhone 7 Plus', slug: 'iphone-7-plus', image: '/phone/23.png' },
  { id: 24, name: 'iPhone 7', slug: 'iphone-7', image: '/phone/24.png' },
  { id: 25, name: 'iPhone 6S Plus', slug: 'iphone-6s-plus', image: '/phone/25.png' },
  { id: 26, name: 'iPhone 6S', slug: 'iphone-6s', image: '/phone/26.png' },
  { id: 27, name: 'iPhone 6 Plus', slug: 'iphone-6-plus', image: '/phone/27.png' },
  { id: 28, name: 'iPhone SE (2016)', slug: 'iphone-se-2016', image: '/phone/28.png' },
  { id: 29, name: 'iPhone 6', slug: 'iphone-6', image: '/phone/29.png' },
  { id: 30, name: 'iPhone 5S', slug: 'iphone-5s', image: '/phone/30.png' },
  { id: 31, name: 'iPhone 5C', slug: 'iphone-5c', image: '/phone/31.png' },
  { id: 32, name: 'iPhone 5', slug: 'iphone-5', image: '/phone/32.png' },
  { id: 33, name: 'iPhone 4S', slug: 'iphone-4s', image: '/phone/33.png' },
  { id: 34, name: 'iPhone 2G', slug: 'iphone-2g', image: '/phone/34.png' }
]


export default function ApplePhonePage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredPhones, setFilteredPhones] = useState(applePhones)

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase()
    setSearchTerm(term)
    const filtered = applePhones.filter(phone => 
      phone.name.toLowerCase().includes(term)
    )
    setFilteredPhones(filtered)
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
      <section className="py-16 md:py-20">
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

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
            {filteredPhones.map((phone) => (
              <Link
                key={phone.id}
                href={`/repair/${phone.slug}`}
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
                      src={phone.image}
                      alt={phone.name}
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
                  {phone.name}
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
            Can&apos;t Find A Model You&apos;re Looking For?
          </h2>
          
          <p
            className="text-lg mb-8"
            style={{
              fontFamily: 'lato',
              color: '#666',
              lineHeight: '1.6'
            }}
          >
            Don&apos;t worry! We repair many more models than what&apos;s listed here. Contact us and we&apos;ll be happy to help you with your specific device.
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
