'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
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

// Google Pixel models data
const googlePhones = [
  { id: 1, name: 'Pixel 4 XL', slug: 'pixel-4-xl', image: '/google/g1.png' },
  { id: 2, name: 'pixel 4', slug: 'pixel-4', image: '/google/g2.png' },
  { id: 3, name: 'pixel 3 xl', slug: 'pixel-3-xl', image: '/google/g3.png' },
  { id: 4, name: 'pixel 4a', slug: 'pixel-4a', image: '/google/g4.png' },
  { id: 5, name: 'pixel 3', slug: 'pixel-3', image: '/google/g5.png' },
  { id: 6, name: 'pixel 3a xl', slug: 'pixel-3a-xl', image: '/google/g6.png' },
  { id: 7, name: 'pixel 3a', slug: 'pixel-3a', image: '/google/g7.png' },
  { id: 8, name: 'pixel 2 xl', slug: 'pixel-2-xl', image: '/google/g8.png' },
  { id: 9, name: 'pixel 2', slug: 'pixel-2', image: '/google/g9.png' },
  { id: 10, name: 'pixel xl', slug: 'pixel-xl', image: '/google/g10.png' },
  { id: 11, name: 'pixel', slug: 'pixel', image: '/google/g11.png' }
]

// Combine all phones
const allPhones = [...applePhones, ...googlePhones]

const deviceIssues = [
  { id: 1, name: 'HEADPHONES PLUG', image: '/phone/innerpage/b1.png' },
  { id: 2, name: 'CHARGING PORT', image: '/phone/innerpage/b2.png' },
  { id: 3, name: 'SIDE BUTTON', image: '/phone/innerpage/b3.png' },
  { id: 4, name: 'ISIGHT CAMERA', image: '/phone/innerpage/b4.png' },
  { id: 5, name: 'POWER BUTTON', image: '/phone/innerpage/b5.png' },
  { id: 6, name: 'SCREEN', image: '/phone/innerpage/b6.png' },
  { id: 7, name: 'BATTERY', image: '/phone/innerpage/b7.png' },
  { id: 8, name: 'SOMETHING ELSE', image: '/phone/innerpage/b8.png' }
]

interface RepairPageProps {
  params: {
    slug: string
  }
}


export default function RepairPage({ params }: RepairPageProps) {
  // Find the phone by slug
  const phone = allPhones.find(p => p.slug === params.slug)
  const [selectedIssue, setSelectedIssue] = useState<string | null>(null)
  
  // Check if it's a Google phone
  const isGooglePhone = googlePhones.some(p => p.slug === params.slug)
  
  // If phone not found, return 404
  if (!phone) {
    notFound()
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

      {/* Product Detail Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <Link href="/" className="text-gray-700 hover:text-blue-600">
                    Home
                  </Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <Link href="/product-category/phone" className="ml-1 text-gray-700 hover:text-blue-600 md:ml-2">
                      Phone
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <Link 
                      href={applePhones.some(p => p.slug === params.slug) ? "/product-category/phone/apple" : "/product-category/phone/google"} 
                      className="ml-1 text-gray-700 hover:text-blue-600 md:ml-2"
                    >
                      {applePhones.some(p => p.slug === params.slug) ? "Apple" : "Google"}
                    </Link>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span className="ml-1 text-gray-500 md:ml-2">{phone.name}</span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
            {/* Left Section - Phone Image, Name, Change Model */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center mb-0 flex flex-col justify-center">
              {/* iPhone Model Image */}
              <div className="mb-2">
                <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto flex items-center justify-center">
                  <Image
                    src={phone.image}
                    alt={phone.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <h1
                className="font-bold mb-2"
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  color: '#233d63',
                  fontSize: '18px'
                }}
              >
                {phone.name}
              </h1>
              
              <div className="mb-0">
                <button
                  className="text-blue-600 hover:text-blue-800 underline font-medium"
                  style={{
                    fontFamily: "'Lato', sans-serif"
                  }}
                >
                  Change Model?
                </button>
              </div>
            </div>

            {/* Right Section - Device Issues */}
            <div className="lg:col-span-2">
                 <h2
                   className="text-2xl md:text-3xl font-bold mb-8 text-center lg:text-left"
                   style={{
                     fontFamily: "'Raleway', sans-serif",
                     color: '#233d63',
                     textTransform: 'uppercase'
                   }}
                 >
                   please choose fault
                 </h2>

              {/* Selected Issue Display */}
              {selectedIssue && (
                <div className="mb-6">
                  <div className="bg-white rounded-lg border border-gray-300 p-4">
                     <h3
                       className="text-lg font-bold mb-2"
                       style={{
                         fontFamily: "'Raleway', sans-serif",
                         color: '#233d63',
                         textTransform: 'uppercase'
                       }}
                     >
                       PLEASE CHOOSE FAULT:
                     </h3>
                    <p 
                      className="text-base"
                      style={{
                        fontFamily: "'Raleway', sans-serif",
                        color: '#233d63',
                        textTransform: 'capitalize'
                      }}
                    >
                      {selectedIssue}
                    </p>
                  </div>
                </div>
              )}

              {/* Device Issues Grid */}
              <div className="mb-8">
                {/* First Row - 4 Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-6">
                  {deviceIssues.slice(0, 4).map((issue) => (
                    <div
                      key={issue.id}
                      className={`bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center cursor-pointer border border-gray-200 group relative ${isGooglePhone ? 'p-4 lg:p-12' : 'p-4'}`}
                      onClick={() => setSelectedIssue(issue.name)}
                    >
                      {/* Issue Image - Only show for non-Google phones */}
                      {!isGooglePhone && (
                        <div className="mb-4">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto flex items-center justify-center">
                            <Image
                              src={issue.image}
                              alt={issue.name}
                              width={64}
                              height={64}
                              className="w-full h-full object-contain transition-all duration-300"
                            />
                          </div>
                        </div>
                      )}

                      {/* Issue Name */}
                      <h3
                        className="transition-colors duration-300"
                        style={{
                          fontFamily: "'Raleway', sans-serif",
                          fontSize: '13px',
                          color: '#232222',
                          textTransform: 'none',
                          letterSpacing: '1px',
                          fontWeight: '500'
                        }}
                      >
                        {issue.name}
                      </h3>
                    </div>
                  ))}
                </div>

                {/* Second Row - 4 Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
                  {deviceIssues.slice(4, 8).map((issue) => (
                    <div
                      key={issue.id}
                      className={`bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center cursor-pointer border border-gray-200 group relative ${isGooglePhone ? 'p-4 lg:p-12' : 'p-4'}`}
                      onClick={() => setSelectedIssue(issue.name)}
                    >
                      {/* Issue Image - Only show for non-Google phones */}
                      {!isGooglePhone && (
                        <div className="mb-4">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto flex items-center justify-center">
                            <Image
                              src={issue.image}
                              alt={issue.name}
                              width={64}
                              height={64}
                              className="w-full h-full object-contain transition-all duration-300"
                            />
                          </div>
                        </div>
                      )}

                      {/* Issue Name */}
                      <h3
                        className="transition-colors duration-300"
                        style={{
                          fontFamily: "'Raleway', sans-serif",
                          fontSize: '13px',
                          color: '#232222',
                          textTransform: 'none',
                          letterSpacing: '1px',
                          fontWeight: '500'
                        }}
                      >
                        {issue.name}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>


              {/* Next Button */}
              <div className="flex justify-end">
                <Link href={`/repair/appointment?issue=${encodeURIComponent(selectedIssue || '')}&device=${encodeURIComponent(phone.name)}`}>
                  <button
                    className="rounded-full font-lato font-bold text-white uppercase transition-all duration-300 flex items-center gap-2"
                    style={{
                      backgroundColor: '#6d6e71',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      fontFamily: "'Lato', sans-serif",
                      borderRadius: '50px',
                      padding: '5px 15px 5px 20px'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#0056b3'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#6d6e71'
                    }}
                  >
                    Next
                    <svg 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14m-7-7 7 7-7 7"/>
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}
