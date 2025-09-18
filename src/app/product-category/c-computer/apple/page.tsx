'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import TopHeader from '@/components/TopHeader'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// Apple Computer models data - 101 models
const appleComputers = [
  { id: 1, name: 'MacBook Pro 16-inch (2019)', slug: 'macbook-pro-16-2019', image: '/computer-apple/macbook-pro-16-2019.png' },
  { id: 2, name: 'MacBook Pro 15-inch (2019)', slug: 'macbook-pro-15-2019', image: '/computer-apple/macbook-pro-15-2019.png' },
  { id: 3, name: 'MacBook Pro 15-inch (2018)', slug: 'macbook-pro-15-2018', image: '/computer-apple/macbook-pro-15-2018.png' },
  { id: 4, name: 'MacBook Pro 15-inch (2017)', slug: 'macbook-pro-15-2017', image: '/computer-apple/macbook-pro-15-2017.png' },
  { id: 5, name: 'MacBook Pro 15-inch (2016)', slug: 'macbook-pro-15-2016', image: '/computer-apple/macbook-pro-15-2016.png' },
  { id: 6, name: 'MacBook Pro 15-inch (2015)', slug: 'macbook-pro-15-2015', image: '/computer-apple/macbook-pro-15-2015.png' },
  { id: 7, name: 'MacBook Pro 15-inch (2014)', slug: 'macbook-pro-15-2014', image: '/computer-apple/macbook-pro-15-2014.png' },
  { id: 8, name: 'MacBook Pro 15-inch (2013)', slug: 'macbook-pro-15-2013', image: '/computer-apple/macbook-pro-15-2013.png' },
  { id: 9, name: 'MacBook Pro 15-inch (2012)', slug: 'macbook-pro-15-2012', image: '/computer-apple/macbook-pro-15-2012.png' },
  { id: 10, name: 'MacBook Pro 15-inch (2011)', slug: 'macbook-pro-15-2011', image: '/computer-apple/macbook-pro-15-2011.png' },
  { id: 11, name: 'MacBook Pro 15-inch (2010)', slug: 'macbook-pro-15-2010', image: '/computer-apple/macbook-pro-15-2010.png' },
  { id: 12, name: 'MacBook Pro 15-inch (2009)', slug: 'macbook-pro-15-2009', image: '/computer-apple/macbook-pro-15-2009.png' },
  { id: 13, name: 'MacBook Pro 15-inch (2008)', slug: 'macbook-pro-15-2008', image: '/computer-apple/macbook-pro-15-2008.png' },
  { id: 14, name: 'MacBook Pro 15-inch (2007)', slug: 'macbook-pro-15-2007', image: '/computer-apple/macbook-pro-15-2007.png' },
  { id: 15, name: 'MacBook Pro 15-inch (2006)', slug: 'macbook-pro-15-2006', image: '/computer-apple/macbook-pro-15-2006.png' },
  { id: 16, name: 'MacBook Pro 17-inch (2011)', slug: 'macbook-pro-17-2011', image: '/computer-apple/macbook-pro-17-2011.png' },
  { id: 17, name: 'MacBook Pro 17-inch (2010)', slug: 'macbook-pro-17-2010', image: '/computer-apple/macbook-pro-17-2010.png' },
  { id: 18, name: 'MacBook Pro 17-inch (2009)', slug: 'macbook-pro-17-2009', image: '/computer-apple/macbook-pro-17-2009.png' },
  { id: 19, name: 'MacBook Pro 17-inch (2008)', slug: 'macbook-pro-17-2008', image: '/computer-apple/macbook-pro-17-2008.png' },
  { id: 20, name: 'MacBook Pro 17-inch (2007)', slug: 'macbook-pro-17-2007', image: '/computer-apple/macbook-pro-17-2007.png' },
  { id: 21, name: 'MacBook Pro 17-inch (2006)', slug: 'macbook-pro-17-2006', image: '/computer-apple/macbook-pro-17-2006.png' },
  { id: 22, name: 'MacBook Pro 13-inch (2020)', slug: 'macbook-pro-13-2020', image: '/computer-apple/macbook-pro-13-2020.png' },
  { id: 23, name: 'MacBook Pro 13-inch (2019)', slug: 'macbook-pro-13-2019', image: '/computer-apple/macbook-pro-13-2019.png' },
  { id: 24, name: 'MacBook Pro 13-inch (2018)', slug: 'macbook-pro-13-2018', image: '/computer-apple/macbook-pro-13-2018.png' },
  { id: 25, name: 'MacBook Pro 13-inch (2017)', slug: 'macbook-pro-13-2017', image: '/computer-apple/macbook-pro-13-2017.png' },
  { id: 26, name: 'MacBook Pro 13-inch (2016)', slug: 'macbook-pro-13-2016', image: '/computer-apple/macbook-pro-13-2016.png' },
  { id: 27, name: 'MacBook Pro 13-inch (2015)', slug: 'macbook-pro-13-2015', image: '/computer-apple/macbook-pro-13-2015.png' },
  { id: 28, name: 'MacBook Pro 13-inch (2014)', slug: 'macbook-pro-13-2014', image: '/computer-apple/macbook-pro-13-2014.png' },
  { id: 29, name: 'MacBook Pro 13-inch (2013)', slug: 'macbook-pro-13-2013', image: '/computer-apple/macbook-pro-13-2013.png' },
  { id: 30, name: 'MacBook Pro 13-inch (2012)', slug: 'macbook-pro-13-2012', image: '/computer-apple/macbook-pro-13-2012.png' },
  { id: 31, name: 'MacBook Pro 13-inch (2011)', slug: 'macbook-pro-13-2011', image: '/computer-apple/macbook-pro-13-2011.png' },
  { id: 32, name: 'MacBook Pro 13-inch (2010)', slug: 'macbook-pro-13-2010', image: '/computer-apple/macbook-pro-13-2010.png' },
  { id: 33, name: 'MacBook Pro 13-inch (2009)', slug: 'macbook-pro-13-2009', image: '/computer-apple/macbook-pro-13-2009.png' },
  { id: 34, name: 'MacBook Air 13-inch (2020)', slug: 'macbook-air-13-2020', image: '/computer-apple/macbook-air-13-2020.png' },
  { id: 35, name: 'MacBook Air 13-inch (2019)', slug: 'macbook-air-13-2019', image: '/computer-apple/macbook-air-13-2019.png' },
  { id: 36, name: 'MacBook Air 13-inch (2018)', slug: 'macbook-air-13-2018', image: '/computer-apple/macbook-air-13-2018.png' },
  { id: 37, name: 'MacBook Air 13-inch (2017)', slug: 'macbook-air-13-2017', image: '/computer-apple/macbook-air-13-2017.png' },
  { id: 38, name: 'MacBook Air 13-inch (2015)', slug: 'macbook-air-13-2015', image: '/computer-apple/macbook-air-13-2015.png' },
  { id: 39, name: 'MacBook Air 13-inch (2014)', slug: 'macbook-air-13-2014', image: '/computer-apple/macbook-air-13-2014.png' },
  { id: 40, name: 'MacBook Air 13-inch (2013)', slug: 'macbook-air-13-2013', image: '/computer-apple/macbook-air-13-2013.png' },
  { id: 41, name: 'MacBook Air 13-inch (2012)', slug: 'macbook-air-13-2012', image: '/computer-apple/macbook-air-13-2012.png' },
  { id: 42, name: 'MacBook Air 13-inch (2011)', slug: 'macbook-air-13-2011', image: '/computer-apple/macbook-air-13-2011.png' },
  { id: 43, name: 'MacBook Air 13-inch (2010)', slug: 'macbook-air-13-2010', image: '/computer-apple/macbook-air-13-2010.png' },
  { id: 44, name: 'MacBook Air 13-inch (2009)', slug: 'macbook-air-13-2009', image: '/computer-apple/macbook-air-13-2009.png' },
  { id: 45, name: 'MacBook Air 13-inch (2008)', slug: 'macbook-air-13-2008', image: '/computer-apple/macbook-air-13-2008.png' },
  { id: 46, name: 'MacBook Air 11-inch (2015)', slug: 'macbook-air-11-2015', image: '/computer-apple/macbook-air-11-2015.png' },
  { id: 47, name: 'MacBook Air 11-inch (2014)', slug: 'macbook-air-11-2014', image: '/computer-apple/macbook-air-11-2014.png' },
  { id: 48, name: 'MacBook Air 11-inch (2013)', slug: 'macbook-air-11-2013', image: '/computer-apple/macbook-air-11-2013.png' },
  { id: 49, name: 'MacBook Air 11-inch (2012)', slug: 'macbook-air-11-2012', image: '/computer-apple/macbook-air-11-2012.png' },
  { id: 50, name: 'MacBook Air 11-inch (2011)', slug: 'macbook-air-11-2011', image: '/computer-apple/macbook-air-11-2011.png' },
  { id: 51, name: 'MacBook Air 11-inch (2010)', slug: 'macbook-air-11-2010', image: '/computer-apple/macbook-air-11-2010.png' },
  { id: 52, name: 'MacBook 12-inch (2017)', slug: 'macbook-12-2017', image: '/computer-apple/macbook-12-2017.png' },
  { id: 53, name: 'MacBook 12-inch (2016)', slug: 'macbook-12-2016', image: '/computer-apple/macbook-12-2016.png' },
  { id: 54, name: 'MacBook 12-inch (2015)', slug: 'macbook-12-2015', image: '/computer-apple/macbook-12-2015.png' },
  { id: 55, name: 'MacBook 13-inch (2010)', slug: 'macbook-13-2010', image: '/computer-apple/macbook-13-2010.png' },
  { id: 56, name: 'MacBook 13-inch (2009)', slug: 'macbook-13-2009', image: '/computer-apple/macbook-13-2009.png' },
  { id: 57, name: 'MacBook 13-inch (2008)', slug: 'macbook-13-2008', image: '/computer-apple/macbook-13-2008.png' },
  { id: 58, name: 'MacBook 13-inch (2007)', slug: 'macbook-13-2007', image: '/computer-apple/macbook-13-2007.png' },
  { id: 59, name: 'MacBook 13-inch (2006)', slug: 'macbook-13-2006', image: '/computer-apple/macbook-13-2006.png' },
  { id: 60, name: 'iMac 27-inch (2020)', slug: 'imac-27-2020', image: '/computer-apple/imac-27-2020.png' },
  { id: 61, name: 'iMac 27-inch (2019)', slug: 'imac-27-2019', image: '/computer-apple/imac-27-2019.png' },
  { id: 62, name: 'iMac 27-inch (2017)', slug: 'imac-27-2017', image: '/computer-apple/imac-27-2017.png' },
  { id: 63, name: 'iMac 27-inch (2015)', slug: 'imac-27-2015', image: '/computer-apple/imac-27-2015.png' },
  { id: 64, name: 'iMac 27-inch (2014)', slug: 'imac-27-2014', image: '/computer-apple/imac-27-2014.png' },
  { id: 65, name: 'iMac 27-inch (2013)', slug: 'imac-27-2013', image: '/computer-apple/imac-27-2013.png' },
  { id: 66, name: 'iMac 27-inch (2012)', slug: 'imac-27-2012', image: '/computer-apple/imac-27-2012.png' },
  { id: 67, name: 'iMac 27-inch (2011)', slug: 'imac-27-2011', image: '/computer-apple/imac-27-2011.png' },
  { id: 68, name: 'iMac 27-inch (2010)', slug: 'imac-27-2010', image: '/computer-apple/imac-27-2010.png' },
  { id: 69, name: 'iMac 27-inch (2009)', slug: 'imac-27-2009', image: '/computer-apple/imac-27-2009.png' },
  { id: 70, name: 'iMac 21.5-inch (2019)', slug: 'imac-21-5-2019', image: '/computer-apple/imac-21-5-2019.png' },
  { id: 71, name: 'iMac 21.5-inch (2017)', slug: 'imac-21-5-2017', image: '/computer-apple/imac-21-5-2017.png' },
  { id: 72, name: 'iMac 21.5-inch (2015)', slug: 'imac-21-5-2015', image: '/computer-apple/imac-21-5-2015.png' },
  { id: 73, name: 'iMac 21.5-inch (2014)', slug: 'imac-21-5-2014', image: '/computer-apple/imac-21-5-2014.png' },
  { id: 74, name: 'iMac 21.5-inch (2013)', slug: 'imac-21-5-2013', image: '/computer-apple/imac-21-5-2013.png' },
  { id: 75, name: 'iMac 21.5-inch (2012)', slug: 'imac-21-5-2012', image: '/computer-apple/imac-21-5-2012.png' },
  { id: 76, name: 'iMac 21.5-inch (2011)', slug: 'imac-21-5-2011', image: '/computer-apple/imac-21-5-2011.png' },
  { id: 77, name: 'iMac 21.5-inch (2010)', slug: 'imac-21-5-2010', image: '/computer-apple/imac-21-5-2010.png' },
  { id: 78, name: 'iMac 21.5-inch (2009)', slug: 'imac-21-5-2009', image: '/computer-apple/imac-21-5-2009.png' },
  { id: 79, name: 'iMac 24-inch (2009)', slug: 'imac-24-2009', image: '/computer-apple/imac-24-2009.png' },
  { id: 80, name: 'iMac 24-inch (2008)', slug: 'imac-24-2008', image: '/computer-apple/imac-24-2008.png' },
  { id: 81, name: 'iMac 24-inch (2007)', slug: 'imac-24-2007', image: '/computer-apple/imac-24-2007.png' },
  { id: 82, name: 'iMac 20-inch (2009)', slug: 'imac-20-2009', image: '/computer-apple/imac-20-2009.png' },
  { id: 83, name: 'iMac 20-inch (2008)', slug: 'imac-20-2008', image: '/computer-apple/imac-20-2008.png' },
  { id: 84, name: 'iMac 20-inch (2007)', slug: 'imac-20-2007', image: '/computer-apple/imac-20-2007.png' },
  { id: 85, name: 'iMac Pro 27-inch', slug: 'imac-pro-27', image: '/computer-apple/imac-pro-27.png' },
  { id: 86, name: 'Mac Pro Rack (2019)', slug: 'mac-pro-rack-2019', image: '/computer-apple/mac-pro-rack-2019.png' },
  { id: 87, name: 'Mac Pro (2019)', slug: 'mac-pro-2019', image: '/computer-apple/mac pro (2019).jpg' },
  { id: 88, name: 'Mac Pro (2013)', slug: 'mac-pro-2013', image: '/computer-apple/mac-pro-2013.png' },
  { id: 89, name: 'Mac Pro (2012)', slug: 'mac-pro-2012', image: '/computer-apple/mac-pro-2012.png' },
  { id: 90, name: 'Mac Pro (2010)', slug: 'mac-pro-2010', image: '/computer-apple/mac-pro-2010.png' },
  { id: 91, name: 'Mac Pro (2009)', slug: 'mac-pro-2009', image: '/computer-apple/mac-pro-2009.png' },
  { id: 92, name: 'Mac Pro (2008)', slug: 'mac-pro-2008', image: '/computer-apple/mac-pro-2008.png' },
  { id: 93, name: 'Mac Pro (2007)', slug: 'mac-pro-2007', image: '/computer-apple/mac-pro-2007.png' },
  { id: 94, name: 'Mac Pro (2006)', slug: 'mac-pro-2006', image: '/computer-apple/mac-pro-2006.png' },
  { id: 95, name: 'Mac Mini (2018)', slug: 'mac-mini-2018', image: '/computer-apple/mac-mini-2018.png' },
  { id: 96, name: 'Mac Mini (2014)', slug: 'mac-mini-2014', image: '/computer-apple/mac-mini-2014.png' },
  { id: 97, name: 'Mac Mini (2012)', slug: 'mac-mini-2012', image: '/computer-apple/mac-mini-2012.png' },
  { id: 98, name: 'Mac Mini (2011)', slug: 'mac-mini-2011', image: '/computer-apple/mac-mini-2011.png' },
  { id: 99, name: 'Mac Mini (2010)', slug: 'mac-mini-2010', image: '/computer-apple/mac-mini-2010.png' },
  { id: 100, name: 'Mac Mini (2009)', slug: 'mac-mini-2009', image: '/computer-apple/mac-mini-2009.png' },
  { id: 101, name: 'Mac Mini (2007)', slug: 'mac-mini-2007', image: '/computer-apple/mac-mini-2007.png' },
  { id: 102, name: 'Apple Computer', slug: 'apple-computer', image: '/computer-apple/imac-pro-27.png' }
]

export default function AppleComputerPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredComputers, setFilteredComputers] = useState(appleComputers)

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase()
    setSearchTerm(term)
    const filtered = appleComputers.filter(computer => 
      computer.name.toLowerCase().includes(term)
    )
    setFilteredComputers(filtered)
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

          {/* Product Grid - Responsive for mobile, tablet, and desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
            {filteredComputers.map((computer) => (
              <Link
                key={computer.id}
                href={`/repair/${computer.slug}`}
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
                      src={computer.image}
                      alt={computer.name}
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
                  {computer.name}
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
