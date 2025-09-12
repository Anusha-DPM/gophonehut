'use client'

import React from 'react'
import Image from 'next/image'

const HeaderDuplicate: React.FC = () => {
  return (
    <>
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
    </>
  )
}

export default HeaderDuplicate
