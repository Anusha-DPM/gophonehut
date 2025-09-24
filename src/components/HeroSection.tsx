'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import SearchPopup from './SearchPopup'

const HeroSection: React.FC = () => {
  const [isSearchPopupOpen, setIsSearchPopupOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobileRepairsOpen, setIsMobileRepairsOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  // Mouse tracking effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  // Calculate phone image transform based on mouse position
  const getPhoneTransform = () => {
    if (!isHovering) return 'translate(0, 0)'
    
    const centerX = window.innerWidth / 2
    const centerY = window.innerHeight / 2
    
    const deltaX = (mousePosition.x - centerX) / 30 // Increase sensitivity
    const deltaY = (mousePosition.y - centerY) / 30
    
    // Increase movement range for more noticeable effect
    const maxMove = 25
    const limitedX = Math.max(-maxMove, Math.min(maxMove, deltaX))
    const limitedY = Math.max(-maxMove, Math.min(maxMove, deltaY))
    
    return `translate(${limitedX}px, ${limitedY}px)`
  }

  return (
    <>
       {/* Hero Section with Background Image */}
       <div className="relative w-full min-h-[50vh] md:min-h-[60vh]" 
            style={{ 
              backgroundImage: 'url(/hero-background.png)',
              backgroundSize: '100% 100%',
              backgroundPosition: 'center top',
              backgroundRepeat: 'no-repeat',
              minHeight: '50vh'
            }}>
      
      {/* First Row - Header */}
      <div className="relative z-10">
        {/* Mobile Header - Dynamic Background */}
        <div className="md:hidden" style={{ backgroundColor: isMobileMenuOpen ? 'white' : 'transparent' }}>
          <div className="flex items-center justify-between px-4 py-4">
            {/* Left - Hamburger Menu */}
            <div className="flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={isMobileMenuOpen ? "text-gray-800" : "text-white"}
                aria-label="Toggle mobile menu"
              >
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
                  {isMobileMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12"/>
                  ) : (
                    <>
                      <line x1="3" y1="6" x2="21" y2="6"/>
                      <line x1="3" y1="12" x2="21" y2="12"/>
                      <line x1="3" y1="18" x2="21" y2="18"/>
                    </>
                  )}
                </svg>
              </button>
            </div>

            {/* Center - Logo */}
            <div className="flex items-center">
              <a href="/" className="block">
                <Image
                  src="/website-logo.png"
                  alt="PhoneHut Logo"
                  width={120}
                  height={40}
                  className="h-8 w-auto"
                  priority
                />
              </a>
            </div>

            {/* Right - Search Icon */}
            <div className="flex items-center">
              <button 
                onClick={() => setIsSearchPopupOpen(true)}
                style={{ color: 'white' }}
                className="hover:opacity-80 transition-opacity duration-200"
              >
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

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            <div className="space-y-4">
              <div>
                {/* Repairs with dropdown */}
                <div className="flex items-center justify-between">
                  <a
                    href="/repairs"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-200 flex-1"
                    style={{
                      fontFamily: 'lato',
                      color: '#333',
                      fontWeight: '600'
                    }}
                  >
                    Repairs
                  </a>
                  <button
                    onClick={() => setIsMobileRepairsOpen(!isMobileRepairsOpen)}
                    className="px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-200"
                    style={{
                      fontFamily: 'lato',
                      color: '#333',
                      fontWeight: '600'
                    }}
                  >
                    <svg 
                      className={`w-4 h-4 transition-transform duration-200 ${isMobileRepairsOpen ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
                {isMobileRepairsOpen && (
                  <div className="ml-4">
                    <a
                      href="/product-category/phone"
                      className="block px-4 py-0.5 hover:bg-gray-100 transition-colors duration-200"
                      style={{
                        color: 'black',
                        fontWeight: 'bold',
                        fontSize: '13px',
                        letterSpacing: '1px',
                        textTransform: 'capitalize'
                      }}
                    >
                      Phone
                    </a>
                    <a
                      href="/product-category/c-tablet"
                      className="block px-4 py-0.5 hover:bg-gray-100 transition-colors duration-200"
                      style={{
                        color: 'black',
                        fontWeight: 'bold',
                        fontSize: '13px',
                        letterSpacing: '1px',
                        textTransform: 'capitalize'
                      }}
                    >
                      Tablet
                    </a>
                    <a
                      href="/product-category/smartwatch"
                      className="block px-4 py-0.5 hover:bg-gray-100 transition-colors duration-200"
                      style={{
                        color: 'black',
                        fontWeight: 'bold',
                        fontSize: '13px',
                        letterSpacing: '1px',
                        textTransform: 'capitalize'
                      }}
                    >
                      Smartwatch
                    </a>
                    <a
                      href="/product-category/computer"
                      className="block px-4 py-0.5 hover:bg-gray-100 transition-colors duration-200"
                      style={{
                        color: 'black',
                        fontWeight: 'bold',
                        fontSize: '13px',
                        letterSpacing: '1px',
                        textTransform: 'capitalize'
                      }}
                    >
                      Computer
                    </a>
                  </div>
                )}
                
                {/* Services */}
                <a
                  href="/services"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-200"
                  style={{
                    fontFamily: 'lato',
                    color: '#333',
                    fontWeight: '600'
                  }}
                >
                  Services
                </a>
                
                {/* How it works */}
                <a
                  href="/how-it-works"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-200"
                  style={{
                    fontFamily: 'lato',
                    color: '#333',
                    fontWeight: '600'
                  }}
                >
                  How it works
                </a>
                
                {/* Why Us */}
                <a
                  href="/why"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-200"
                  style={{
                    fontFamily: 'lato',
                    color: '#333',
                    fontWeight: '600'
                  }}
                >
                  Why Us
                </a>
                
                {/* Contact */}
                <a
                  href="/contact-us"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-200"
                  style={{
                    fontFamily: 'lato',
                    color: '#333',
                    fontWeight: '600'
                  }}
                >
                  Contact
                </a>
                
                {/* Mobile Search Button */}
                <button
                  onClick={() => setIsSearchPopupOpen(true)}
                  className="flex items-center px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-200 w-full text-left"
                  style={{
                    fontFamily: 'lato',
                    color: '#333',
                    fontWeight: '600'
                  }}
                >
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <circle cx="11" cy="11" r="8"/>
                    <path d="m21 21-4.35-4.35"/>
                  </svg>
                  Search
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Desktop Header */}
        <div className="hidden md:block">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4 md:py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
              {/* Left side - Logo */}
              <div className="flex items-center gap-2">
                <a href="/" className="block">
                  <Image
                    src="/website-logo.png"
                    alt="PhoneHut Logo"
                    width={200}
                    height={60}
                    className="h-8 md:h-10 lg:h-12 w-auto"
                    priority
                  />
                </a>
              </div>

              {/* Right side - Navigation */}
              <div className="flex items-center gap-8">
                <nav className="hidden md:flex items-center gap-8">
                  <div className="relative group">
                    <a href="/repairs" className="font-raleway font-bold uppercase transition-colors duration-200" style={{ fontSize: '15px', letterSpacing: '1px', color: 'white' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#f0f0f0'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'white'}>
                      Repairs
                    </a>
                    <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-md transition-all duration-200 z-50 border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible" style={{ marginTop: '0px' }}>
                      <div className="py-1">
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
                  <a href="/services" className="font-raleway font-bold uppercase transition-colors duration-200" style={{ fontSize: '15px', letterSpacing: '1px', color: 'white' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#f0f0f0'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'white'}>
                    Services
                  </a>
                  <a href="/how-it-works" className="font-raleway font-bold uppercase transition-colors duration-200" style={{ fontSize: '15px', letterSpacing: '1px', color: 'white' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#f0f0f0'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'white'}>
                    How It Works
                  </a>
                  <a href="/why" className="font-raleway font-bold uppercase transition-colors duration-200" style={{ fontSize: '15px', letterSpacing: '1px', color: 'white' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#f0f0f0'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'white'}>
                    Why Us
                  </a>
                  <a href="/contact-us" className="font-raleway font-bold uppercase transition-colors duration-200" style={{ fontSize: '15px', letterSpacing: '1px', color: 'white' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#f0f0f0'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'white'}>
                    Contact
                  </a>
                </nav>
                
                {/* Search Icon */}
                <div className="ml-4">
                  <button
                    onClick={() => setIsSearchPopupOpen(true)}
                    className="hover:text-gray-300 transition-colors duration-200 cursor-pointer"
                    style={{ color: 'white' }}
                  >
                    <svg 
                      width="20" 
                      height="20" 
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
                <a 
                  href="/repairs" 
                  className="px-3 md:px-4 py-2 bg-transparent text-white text-sm md:text-base font-lato font-semibold uppercase tracking-wider border border-white rounded-full hover:bg-white hover:text-gray-800 transition-all duration-300 w-fit md:-mt-2.5 inline-block text-center" 
                  style={{ marginTop: '0', marginBottom: '10px', fontSize: '17px', padding: '8px 15px' }}
                >
                  GET STARTED
                </a>
                
                 {/* Search Bar Style Button */}
                 <button 
                   onClick={() => setIsSearchPopupOpen(true)}
                   className="bg-transparent text-white text-xs md:text-sm font-lato font-normal tracking-wider border border-white rounded-full flex items-center justify-end w-fit hover:bg-white hover:text-gray-800 transition-all duration-300" 
                   style={{ padding: '8px 23px', fontSize: '16px' }}
                 >
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
              <div 
                className="relative transition-transform duration-300 ease-out"
                style={{
                  transform: getPhoneTransform(),
                }}
              >
                 <Image
                   src="/hero-phone.png"
                   alt="Broken Phone"
                   width={300}
                   height={450}
                   className="w-full max-w-[250px] md:max-w-[300px] lg:max-w-[350px] h-auto"
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

      {/* Search Popup */}
      <SearchPopup 
        isOpen={isSearchPopupOpen} 
        onClose={() => setIsSearchPopupOpen(false)} 
      />
    </>
  )
}

export default HeroSection