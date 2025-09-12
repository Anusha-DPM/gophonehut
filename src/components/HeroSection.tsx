'use client'

import React from 'react'
import Image from 'next/image'

const HeroSection: React.FC = () => {
  return (
    <>
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
            <div className="flex items-center gap-6 text-sm font-lato font-medium" style={{ color: '#007dd9' }}>
              <a 
                href="#" 
                className="capitalize transition-colors duration-200"
                style={{ color: '#007dd9' }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#71af43'}
                onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#007dd9'}
              >
                Quick Repair
              </a>
              <a 
                href="#" 
                className="capitalize transition-colors duration-200"
                style={{ color: '#007dd9' }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#71af43'}
                onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#007dd9'}
              >
                Locations
              </a>
              <a 
                href="#" 
                className="capitalize transition-colors duration-200"
                style={{ color: '#007dd9' }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#71af43'}
                onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#007dd9'}
              >
                Track Order
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section with Background Image */}
      <div className="relative w-full min-h-[90vh] md:min-h-[90vh]" 
           style={{ 
             backgroundImage: 'url(/hero-background.png)',
             backgroundSize: '100% 100%',
             backgroundPosition: 'center center',
             backgroundRepeat: 'no-repeat',
             minHeight: '90vh'
           }}>
      
      {/* First Row - Header */}
      <div className="relative z-10">
        {/* Mobile Header - Transparent Background */}
        <div className="md:hidden" style={{ backgroundColor: 'transparent' }}>
          <div className="flex items-center justify-between px-4 py-4">
            {/* Left - Hamburger Menu */}
            <div className="flex items-center">
              <button className="text-white">
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" y1="6" x2="21" y2="6"/>
                  <line x1="3" y1="12" x2="21" y2="12"/>
                  <line x1="3" y1="18" x2="21" y2="18"/>
                </svg>
              </button>
            </div>

            {/* Center - Logo */}
            <div className="flex items-center">
              <Image
                src="/website-logo.png"
                alt="PhoneHut Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
                priority
              />
            </div>

            {/* Right - Search Icon */}
            <div className="flex items-center">
              <button style={{ color: '#0e72d2' }}>
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"/>
                  <path d="m21 21-4.35-4.35"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Header */}
        <div className="hidden md:block">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4 md:py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
              {/* Left side - Logo */}
              <div className="flex items-center gap-2">
                <Image
                  src="/website-logo.png"
                  alt="PhoneHut Logo"
                  width={200}
                  height={60}
                  className="h-8 md:h-10 lg:h-12 w-auto"
                  priority
                />
              </div>

              {/* Right side - Navigation */}
              <div className="flex items-center gap-8">
                <nav className="hidden md:flex items-center gap-8">
                  <a href="#" className="font-raleway font-bold uppercase transition-colors duration-200" style={{ fontSize: '15px', letterSpacing: '1px', color: '#0e72d2' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#6d6e71'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#0e72d2'}>
                    Repairs
                  </a>
                  <a href="#" className="font-raleway font-bold uppercase transition-colors duration-200" style={{ fontSize: '15px', letterSpacing: '1px', color: '#0e72d2' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#6d6e71'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#0e72d2'}>
                    Services
                  </a>
                  <a href="#" className="font-raleway font-bold uppercase transition-colors duration-200" style={{ fontSize: '15px', letterSpacing: '1px', color: '#0e72d2' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#6d6e71'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#0e72d2'}>
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
      </div>


       {/* Second Row - Main Hero Content */}
       <div className="relative z-10" style={{ paddingTop: '60px' }}>
         <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4 md:py-8 lg:py-12">
           <div className="flex flex-col lg:flex-row gap-8 md:gap-12 h-full">
             {/* Left Column - Content at Top */}
             <div className="text-white space-y-6 md:space-y-8 flex-1 flex flex-col justify-start text-center md:text-left">
               <h1 className="text-3xl md:text-4xl lg:text-5xl font-raleway font-bold leading-tight" style={{ paddingBottom: '20px', fontSize: '26px' }}>
                 <span className="hidden md:inline" style={{ fontSize: '48px' }}>Lets Get It Fixed!</span>
                 <span className="md:hidden">Lets Get It Fixed!</span>
               </h1>
               
               <p className="font-lato font-normal text-base md:text-lg" style={{ marginTop: 0, marginBottom: 0, fontSize: '19px' }}>
                 Same Day <span className="font-bold">Repairs</span>
               </p>
              
              <div className="flex flex-col items-center md:items-start gap-3 md:gap-4">
                {/* Primary CTA Button */}
                <button className="px-3 md:px-4 py-2 bg-transparent text-white text-sm md:text-base font-lato font-semibold uppercase tracking-wider border border-white rounded-full hover:bg-white hover:text-gray-800 transition-all duration-300 w-fit md:-mt-2.5" style={{ marginTop: '0', marginBottom: '10px', fontSize: '17px', padding: '8px 15px' }}>
                  GET STARTED
                </button>
                
                 {/* Search Bar Style Button */}
                 <button className="bg-transparent text-white text-xs md:text-sm font-lato font-normal tracking-wider border border-white rounded-full flex items-center justify-end w-fit" style={{ padding: '8px 23px', fontSize: '16px' }}>
                   <span className="mr-2 text-xs md:text-sm" style={{ fontSize: '16px' }}>Search for your device here</span>
                   <svg 
                     width="14" 
                     height="14" 
                     viewBox="0 0 24 24" 
                     fill="none"
                     stroke="currentColor"
                     strokeWidth="2"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     className="md:w-4 md:h-4"
                   >
                     <path d="M5 12h14m-7-7 7 7-7 7"/>
                   </svg>
                 </button>
              </div>
            </div>

            {/* Right Column - Phone Image at Bottom */}
            <div className="flex-1 flex justify-center lg:justify-end items-end mt-8 lg:mt-0">
              <div className="relative">
                <Image
                  src="/hero-phone.png"
                  alt="Broken Phone"
                  width={400}
                  height={600}
                  className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto"
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
    </>
  )
}

export default HeroSection
