'use client'

import React from 'react'
import Image from 'next/image'

const HeroSectionDuplicate: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-cover bg-center bg-no-repeat" 
         style={{ backgroundImage: 'url(/hero-background.png)' }}>
      
      {/* Top Header Section */}
      <div className="bg-custom-gray w-full py-3 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
          {/* Left side - Contact Information */}
          <div className="flex items-center gap-2 text-sm font-lato font-normal text-black">
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
          <div className="flex items-center gap-6 text-sm font-lato font-medium text-custom-blue">
            <a 
              href="#" 
              className="capitalize hover:text-custom-green transition-colors duration-200"
            >
              Quick Repair
            </a>
            <a 
              href="#" 
              className="capitalize hover:text-custom-green transition-colors duration-200"
            >
              Locations
            </a>
            <a 
              href="#" 
              className="capitalize hover:text-custom-green transition-colors duration-200"
            >
              Track Order
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
            {/* Left side - Logo */}
            <div className="flex items-center gap-2">
              <Image
                src="/website-logo.png"
                alt="PhoneHut Logo"
                width={200}
                height={60}
                className="h-12 w-auto"
              />
            </div>

            {/* Right side - Navigation */}
            <div className="flex items-center gap-8">
              <nav className="hidden md:flex items-center gap-8">
                <a href="#" className="text-nav-blue font-raleway font-bold uppercase hover:text-hover-gray transition-colors duration-200" style={{ fontSize: '15px', letterSpacing: '1px' }}>
                  Repairs
                </a>
                <a href="#" className="text-nav-blue font-raleway font-bold uppercase hover:text-hover-gray transition-colors duration-200" style={{ fontSize: '15px', letterSpacing: '1px' }}>
                  Services
                </a>
                <a href="#" className="text-nav-blue font-raleway font-bold uppercase hover:text-hover-gray transition-colors duration-200" style={{ fontSize: '15px', letterSpacing: '1px' }}>
                  How it works
                </a>
                <a href="#" className="text-nav-blue font-raleway font-bold uppercase hover:text-hover-gray transition-colors duration-200" style={{ fontSize: '15px', letterSpacing: '1px' }}>
                  Why Us
                </a>
                <a href="#" className="text-nav-blue font-raleway font-bold uppercase hover:text-hover-gray transition-colors duration-200" style={{ fontSize: '15px', letterSpacing: '1px' }}>
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
                  className="text-nav-blue hover:text-hover-gray transition-colors duration-200 cursor-pointer"
                >
                  <circle cx="11" cy="11" r="8"/>
                  <path d="m21 21-4.35-4.35"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden bg-white border-t border-gray-200">
        <div className="px-4 py-3">
          <nav className="flex items-center justify-center gap-6">
            <a href="#" className="text-nav-blue font-raleway font-bold uppercase hover:text-hover-gray transition-colors duration-200" style={{ fontSize: '15px', letterSpacing: '1px' }}>
              Repairs
            </a>
            <a href="#" className="text-nav-blue font-raleway font-bold uppercase hover:text-hover-gray transition-colors duration-200" style={{ fontSize: '15px', letterSpacing: '1px' }}>
              Services
            </a>
            <a href="#" className="text-nav-blue font-raleway font-bold uppercase hover:text-hover-gray transition-colors duration-200" style={{ fontSize: '15px', letterSpacing: '1px' }}>
              How it works
            </a>
            <a href="#" className="text-nav-blue font-raleway font-bold uppercase hover:text-hover-gray transition-colors duration-200" style={{ fontSize: '15px', letterSpacing: '1px' }}>
              Why Us
            </a>
            <a href="#" className="text-nav-blue font-raleway font-bold uppercase hover:text-hover-gray transition-colors duration-200" style={{ fontSize: '15px', letterSpacing: '1px' }}>
              Contact
            </a>
          </nav>
        </div>
      </div>
 
      {/* Hero Content Section */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div className="text-white space-y-8">
              <h1 className="text-5xl font-raleway font-bold leading-tight" style={{ fontSize: '48px', paddingBottom: '10px' }}>
                Lets Get It Fixed!
              </h1>
              
              <p className="font-lato font-normal" style={{ marginTop: 0, marginBottom: 0, fontSize: '19px' }}>
                Same Day <span className="font-bold">Repairs</span>
              </p>
              
              <div className="flex flex-col items-start gap-4">
                {/* First Button - GET STARTED */}
                <button className="px-4 py-2 bg-transparent text-white text-base font-lato font-semibold uppercase tracking-wider border border-white rounded-full hover:bg-white hover:text-hover-gray transition-all duration-300 w-fit" style={{ marginTop: '-10px', marginBottom: '10px' }}>
                  GET STARTED
                </button>
                
                {/* Second Button - Search for your device */}
                <button className="px-3 py-2 bg-transparent text-white text-sm font-lato font-normal tracking-wider border border-white rounded-full flex items-center gap-2 w-fit">
                  Search for your device here
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
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Right side - Phone Image */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                <Image
                  src="/hero-phone.png"
                  alt="Broken Phone"
                  width={400}
                  height={600}
                  className="w-full max-w-sm lg:max-w-md h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Video Element */}
      <div className="absolute bottom-8 right-8 w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 z-20">
        <div className="w-full h-full rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-white/30 rounded-full flex items-center justify-center">
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="currentColor"
              className="text-white"
            >
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
      </div>

    </div>
  )
}

export default HeroSectionDuplicate
