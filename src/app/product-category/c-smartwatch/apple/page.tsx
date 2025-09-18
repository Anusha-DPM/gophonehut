'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import TopHeader from '@/components/TopHeader'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// Apple Watch models data - 64 models
const appleWatches = [
  { id: 1, name: 'Watch Series 5 44mm Ceramic GPS And Cellular', slug: 'apple-watch-series-5-44mm-titanium-gps-cellular', image: '/watch-apple/watch-series-5-44mm-titanium-gps-and-cellular.png' },
  { id: 2, name: 'Watch Series 5 44mm Ceramic GPS Only', slug: 'apple-watch-series-5-44mm-titanium-gps-only', image: '/watch-apple/watch-series-5-44mm-titanium-gps-only.png' },
  { id: 3, name: 'Watch Series 5 40mm Ceramic GPS And Cellular', slug: 'apple-watch-series-5-44mm-stainless-steel-gps-cellular', image: '/watch-apple/watch-series-5-44mm-stainless-steel-gps-and-cellular.png' },
  { id: 4, name: 'Watch Series 5 40mm Ceramic GPS Only', slug: 'apple-watch-series-5-44mm-stainless-steel-gps-only', image: '/watch-apple/watch-series-5-44mm-stainless-steel-gps-only.png' },
  { id: 5, name: 'Watch Series 5 40mm Titanium GPS And Cellular', slug: 'apple-watch-series-5-44mm-ceramic-gps-cellular', image: '/watch-apple/watch-series-5-44mm-ceramic-gps-and-cellular.png' },
  { id: 6, name: 'Watch Series 5 44mm Titanium GPS And Cellular', slug: 'apple-watch-series-5-44mm-ceramic-gps-only', image: '/watch-apple/watch-series-5-44mm-ceramic-gps-only.png' },
  { id: 7, name: 'Watch Series 5 44mm Titanium GPS Only', slug: 'apple-watch-series-5-44mm-aluminium-gps-cellular', image: '/watch-apple/watch-series-5-44mm-aluminium-gps-and-cellular.png' },
  { id: 8, name: 'Watch Series 5 40mm Titanium GPS Only', slug: 'apple-watch-series-5-44mm-aluminium-gps-only', image: '/watch-apple/watch-series-5-44mm-aluminium-gps-only.png' },
  { id: 9, name: 'Watch Series 5 44mm Stainless Steel GPS Only', slug: 'apple-watch-series-5-40mm-titanium-gps-cellular', image: '/watch-apple/watch-series-5-40mm-titanium-gps-and-cellular.png' },
  { id: 10, name: 'Watch Series 5 44mm Stainless Steel GPS And Cellular', slug: 'apple-watch-series-5-40mm-titanium-gps-only', image: '/watch-apple/watch-series-5-40mm-titanium-gps-only.png' },
  { id: 11, name: 'Watch Series 5 40mm Stainless Steel GPS Only', slug: 'apple-watch-series-5-40mm-stainless-steel-gps-cellular', image: '/watch-apple/watch-series-5-40mm-stainless-steel-gps-and-cellular.png' },
  { id: 12, name: 'Watch Series 5 40mm Stainless Steel GPS And Cellular', slug: 'apple-watch-series-5-40mm-stainless-steel-gps-only', image: '/watch-apple/watch-series-5-40mm-stainless-steel-gps-only.png' },
  { id: 13, name: 'Watch Series 5 44mm Aluminium GPS And Cellular', slug: 'apple-watch-series-5-40mm-ceramic-gps-cellular', image: '/watch-apple/watch-series-5-40mm-ceramic-gps-and-cellular.png' },
  { id: 14, name: 'Watch Series 5 40mm Aluminium GPS And Cellular', slug: 'apple-watch-series-5-40mm-ceramic-gps-only', image: '/watch-apple/watch-series-5-40mm-ceramic-gps-only.png' },
  { id: 15, name: 'Watch Nike Plus Series 5 44mm GPS And Cellular', slug: 'apple-watch-series-5-40mm-aluminium-gps-cellular', image: '/watch-apple/watch-series-5-40mm-aluminium-gps-and-cellular.png' },
  { id: 16, name: 'Watch Series 5 44mm Aluminium GPS Only', slug: 'apple-watch-series-5-40mm-aluminium-gps-only', image: '/watch-apple/watch-series-5-40mm-aluminium-gps-only.png' },
  { id: 17, name: 'Watch Series 5 40mm Aluminium GPS Only', slug: 'apple-watch-series-4-44mm-stainless-steel-gps-cellular', image: '/watch-apple/watch-series-4-44mm-stainless-steel-gps-and-cellular.png' },
  { id: 18, name: 'Watch Nike Plus Series 5 40mm GPS And Cellular', slug: 'apple-watch-series-4-44mm-stainless-steel-gps-only', image: '/watch-apple/watch-series-4-44mm-stainless-steel-gps-only.png' },
  { id: 19, name: 'Watch Nike Plus Series 5 44mm GPS Only', slug: 'apple-watch-series-4-44mm-aluminium-gps-cellular', image: '/watch-apple/watch-series-4-44mm-aluminium-gps-and-cellular.png' },
  { id: 20, name: 'Watch Hermes Series 3 42mm GPS And Cellular', slug: 'apple-watch-series-4-44mm-aluminium-gps-only', image: '/watch-apple/watch-series-4-44mm-aluminium-gps-only.png' },
  { id: 21, name: 'Watch Nike Plus Series 5 40mm GPS Only', slug: 'apple-watch-series-4-40mm-stainless-steel-gps-cellular', image: '/watch-apple/watch-series-4-40mm-stainless-steel-gps-and-cellular.png' },
  { id: 22, name: 'Watch Hermes Series 3 38mm GPS And Cellular', slug: 'apple-watch-series-4-40mm-stainless-steel-gps-only', image: '/watch-apple/watch-series-4-40mm-stainless-steel-gps-only.png' },
  { id: 23, name: 'Watch Series 4 44mm Stainless Steel GPS And Cellular', slug: 'apple-watch-series-4-40mm-aluminium-gps-cellular', image: '/watch-apple/watch-series-4-40mm-aluminium-gps-and-cellular.png' },
  { id: 24, name: 'Watch Series 4 44mm Stainless Steel GPS Only', slug: 'apple-watch-series-4-40mm-aluminium-gps-only', image: '/watch-apple/watch-series-4-40mm-aluminium-gps-only.png' },
  { id: 25, name: 'Watch Nike Plus Series 4 44mm GPS And Cellular', slug: 'apple-watch-series-3-42mm-stainless-steel-gps-cellular', image: '/watch-apple/watch-series-3-42mm-stainless-steel-gps-and-cellular.png' },
  { id: 26, name: 'Watch Nike Plus Series 4 40mm GPS And Cellular', slug: 'apple-watch-series-3-42mm-stainless-steel-gps-only', image: '/watch-apple/watch-series-3-42mm-stainless-steel-gps-only.png' },
  { id: 27, name: 'Watch Series 4 40mm Stainless Steel GPS Only', slug: 'apple-watch-series-3-42mm-aluminium-gps-cellular', image: '/watch-apple/watch-series-3-42mm-aluminium-gps-and-cellular.png' },
  { id: 28, name: 'Watch Series 4 40mm Stainless Steel GPS And Cellular', slug: 'apple-watch-series-3-42mm-aluminium-gps-only', image: '/watch-apple/watch-series-3-42mm-aluminium-gps-only.png' },
  { id: 29, name: 'Watch Series 4 44mm Aluminium GPS And Cellular', slug: 'apple-watch-series-3-38mm-stainless-steel-gps-cellular', image: '/watch-apple/watch-series-3-38mm-stainless-steel-gps-and-cellular.png' },
  { id: 30, name: 'Watch Nike Plus Series 4 44mm GPS Only', slug: 'apple-watch-series-3-38mm-stainless-steel-gps-only', image: '/watch-apple/watch-series-3-38mm-stainless-steel-gps-only.png' },
  { id: 31, name: 'Watch Hermes 1st Gen 42mm', slug: 'apple-watch-series-3-38mm-aluminium-gps-cellular', image: '/watch-apple/watch-series-3-38mm-aluminium-gps-and-cellular.png' },
  { id: 32, name: 'Watch Edition Series 3 42mm GPS And Cellular', slug: 'apple-watch-series-3-38mm-aluminium-gps-only', image: '/watch-apple/watch-series-3-38mm-aluminium-gps-only.png' },
  { id: 33, name: 'Watch Series 4 40mm Aluminium GPS And Cellular', slug: 'apple-watch-series-2-42mm-stainless-steel', image: '/watch-apple/watch-series-2-42mm-stainless-steel.png' },
  { id: 34, name: 'Watch Series 4 44mm Aluminium GPS Only', slug: 'apple-watch-series-2-42mm-aluminium', image: '/watch-apple/watch-series-2-42mm-aluminium.png' },
  { id: 35, name: 'Watch Series 4 40mm Aluminium GPS Only', slug: 'apple-watch-series-2-38mm-stainless-steel', image: '/watch-apple/watch-series-2-38mm-stainless-steel.png' },
  { id: 36, name: 'Watch Nike Plus Series 4 40mm GPS Only', slug: 'apple-watch-series-2-38mm-aluminium', image: '/watch-apple/watch-series-2-38mm-aluminium.png' },
  { id: 37, name: 'Watch Hermes 1st Gen 38mm', slug: 'apple-watch-series-1-42mm', image: '/watch-apple/watch-sport-series-1-42mm.png' },
  { id: 38, name: 'Watch Hermes Series 2 42mm', slug: 'apple-watch-series-1-38mm', image: '/watch-apple/watch-sport-series-1-38mm.png' },
  { id: 39, name: 'Watch Edition Series 3 38mm GPS And Cellular', slug: 'apple-watch-sport-1st-gen-42mm', image: '/watch-apple/watch-sport-1st-gen-42mm.png' },
  { id: 40, name: 'Watch Series 3 42mm Stainless Steel GPS And Cellular', slug: 'apple-watch-sport-1st-gen-38mm', image: '/watch-apple/watch-sport-1st-gen-38mm.png' },
  { id: 41, name: 'Watch Hermes Series 2 38mm', slug: 'apple-watch-1st-gen-42mm', image: '/watch-apple/watch-1st-gen-42mm.png' },
  { id: 42, name: 'Watch Series 3 42mm Aluminium GPS And Cellular', slug: 'apple-watch-1st-gen-38mm', image: '/watch-apple/watch-1st-gen-38mm.png' },
  { id: 43, name: 'Watch Nike Plus Series 3 42mm GPS And Cellular', slug: 'apple-watch-nike-series-5-44mm-gps-cellular', image: '/watch-apple/watch-nike-plus-series-5-44mm-gps-and-cellular.png' },
  { id: 44, name: 'Watch Series 3 38mm Stainless Steel GPS And Cellular', slug: 'apple-watch-nike-series-5-44mm-gps-only', image: '/watch-apple/watch-nike-plus-series-5-44mm-gps-only.png' },
  { id: 45, name: 'Watch Series 3 38mm Aluminium GPS And Cellular', slug: 'apple-watch-nike-series-5-40mm-gps-cellular', image: '/watch-apple/watch-nike-plus-series-5-40mm-gps-and-cellular.png' },
  { id: 46, name: 'Watch Series 3 42mm Aluminium GPS Only', slug: 'apple-watch-nike-series-5-40mm-gps-only', image: '/watch-apple/watch-nike-plus-series-5-40mm-gps-only.png' },
  { id: 47, name: 'Watch Series 2 42mm Stainless Steel', slug: 'apple-watch-nike-series-4-44mm-gps-cellular', image: '/watch-apple/watch-nike-plus-series-4-44mm-gps-and-cellular.png' },
  { id: 48, name: 'Watch Series 3 42mm Stainless Steel GPS Only', slug: 'apple-watch-nike-series-4-44mm-gps-only', image: '/watch-apple/watch-nike-plus-series-4-44mm-gps-only.png' },
  { id: 49, name: 'Watch Nike Plus Series 3 38mm GPS And Cellular', slug: 'apple-watch-nike-series-4-40mm-gps-cellular', image: '/watch-apple/watch-nike-plus-series-4-40mm-gps-and-cellular.png' },
  { id: 50, name: 'Watch Series 3 38mm Aluminium GPS Only', slug: 'apple-watch-nike-series-4-40mm-gps-only', image: '/watch-apple/watch-nike-plus-series-4-40mm-gps-only.png' },
  { id: 51, name: 'Watch Series 3 38mm Stainless Steel GPS Only', slug: 'apple-watch-nike-series-3-42mm-gps-cellular', image: '/watch-apple/watch-nike-plus-series-3-42mm-gps-and-cellular.png' },
  { id: 52, name: 'Watch Series 2 42mm Aluminium', slug: 'apple-watch-nike-series-3-42mm-gps-only', image: '/watch-apple/watch-nike-plus-series-3-42mm-gps-only.png' },
  { id: 53, name: 'Watch Nike Plus Series 3 42mm GPS Only', slug: 'apple-watch-nike-series-3-38mm-gps-cellular', image: '/watch-apple/watch-nike-plus-series-3-38mm-gps-and-cellular.png' },
  { id: 54, name: 'Watch Series 2 38mm Stainless Steel', slug: 'apple-watch-nike-series-3-38mm-gps-only', image: '/watch-apple/watch-nike-plus-series-3-38mm-gps-only.png' },
  { id: 55, name: 'Watch Nike Plus Series 2 42mm', slug: 'apple-watch-nike-series-2-42mm', image: '/watch-apple/watch-nike-plus-series-2-42mm.png' },
  { id: 56, name: 'Watch Nike Plus Series 3 38mm GPS Only', slug: 'apple-watch-nike-series-2-38mm', image: '/watch-apple/watch-nike-plus-series-2-38mm.png' },
  { id: 57, name: 'Watch Series 2 38mm Aluminium', slug: 'apple-watch-hermes-series-3-42mm-gps-cellular', image: '/watch-apple/watch-hermes-series-3-42mm-gps-and-cellular.png' },
  { id: 58, name: 'Watch Nike Plus Series 2 38mm', slug: 'apple-watch-hermes-series-3-38mm-gps-cellular', image: '/watch-apple/watch-hermes-series-3-38mm-gps-and-cellular.png' },
  { id: 59, name: 'Watch Sport Series 1 42mm', slug: 'apple-watch-hermes-series-2-42mm', image: '/watch-apple/watch-hermes-series-2-42mm.png' },
  { id: 60, name: 'Watch 1st Gen 42mm', slug: 'apple-watch-hermes-series-2-38mm', image: '/watch-apple/watch-hermes-series-2-38mm.png' },
  { id: 61, name: 'Watch Sport Series 1 38mm', slug: 'apple-watch-hermes-1st-gen-42mm', image: '/watch-apple/watch-hermes-1st-gen-42mm.png' },
  { id: 62, name: 'Watch Sport 1st Gen 42mm', slug: 'apple-watch-hermes-1st-gen-38mm', image: '/watch-apple/watch-hermes-1st-gen-38mm.png' },
  { id: 63, name: 'Watch 1st Gen 38mm', slug: 'apple-watch-edition-series-3-42mm-gps-cellular', image: '/watch-apple/watch-edition-series-3-42mm-gps-and-cellular.png' },
  { id: 64, name: 'Watch Sport 1st Gen 38mm', slug: 'apple-watch-edition-series-3-38mm-gps-cellular', image: '/watch-apple/watch-edition-series-3-38mm-gps-and-cellular.png' }
]

export default function AppleWatchPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredWatches, setFilteredWatches] = useState(appleWatches)

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase()
    setSearchTerm(term)
    const filtered = appleWatches.filter(watch => 
      watch.name.toLowerCase().includes(term)
    )
    setFilteredWatches(filtered)
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
              <Link href="/" className="block">
                <img
                  src="/website-logo.png"
                  alt="PhoneHut Logo"
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
                className="w-full px-6 py-4 pl-12 pr-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: '16px'
                }}
              />
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg 
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Product Grid - Responsive for mobile, tablet, and desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
            {filteredWatches.map((watch) => (
              <Link
                key={watch.id}
                href={`/repair/${watch.slug}`}
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
                      src={watch.image}
                      alt={watch.name}
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
                  {watch.name}
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
