'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import SearchPopup from './SearchPopup'

const Header: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchPopupOpen, setIsSearchPopupOpen] = useState(false)
  const [isMobileRepairsOpen, setIsMobileRepairsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsSticky(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Main Header - Only visible when sticky */}
      <header
        className={`w-full transition-all duration-300 ${
          isSticky 
            ? 'fixed top-0 z-50 shadow-lg' 
            : 'hidden'
        }`}
        style={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="block">
                <Image
                  src="/website-logo.png"
                  alt="Phone Hut Logo"
                  width={120}
                  height={40}
                  className="h-8 md:h-10 w-auto"
                />
              </a>
            </div>


            {/* Desktop Main Menu */}
            <nav className="hidden lg:flex items-center space-x-8">
              <div className="relative group">
                <a
                  href="/repairs"
                  className="hover:text-gray-600 transition-colors duration-200"
                  style={{
                    fontSize: '16px',
                    fontFamily: 'lato',
                    color: '#333',
                    fontWeight: '600'
                  }}
                >
                  Repairs
                </a>
                <div className="absolute top-full left-0 mt-1 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-200">
                  <div className="py-2">
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
              
              <a
                href="/services"
                className="hover:text-gray-600 transition-colors duration-200"
                style={{
                  fontSize: '16px',
                  fontFamily: 'lato',
                  color: '#333',
                  fontWeight: '600'
                }}
              >
                Services
              </a>
              <a
                href="/how-it-works"
                className="hover:text-gray-600 transition-colors duration-200"
                style={{
                  fontSize: '16px',
                  fontFamily: 'lato',
                  color: '#333',
                  fontWeight: '600'
                }}
              >
                How it works
              </a>
              <a
                href="/why"
                className="hover:text-gray-600 transition-colors duration-200"
                style={{
                  fontSize: '16px',
                  fontFamily: 'lato',
                  color: '#333',
                  fontWeight: '600'
                }}
              >
                Why Us
              </a>
              <a
                href="/contact-us"
                className="hover:text-gray-600 transition-colors duration-200"
                style={{
                  fontSize: '16px',
                  fontFamily: 'lato',
                  color: '#333',
                  fontWeight: '600'
                }}
              >
                Contact
              </a>
              
              {/* Search Icon */}
              <button
                onClick={() => setIsSearchPopupOpen(true)}
                className="ml-4 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                aria-label="Search"
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
                  className="text-gray-600 hover:text-gray-800"
                >
                  <circle cx="11" cy="11" r="8"/>
                  <path d="m21 21-4.35-4.35"/>
                </svg>
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 py-4">
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
                        className="block px-4 py-1 hover:bg-gray-100 transition-colors duration-200"
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
                        className="block px-4 py-1 hover:bg-gray-100 transition-colors duration-200"
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
                        className="block px-4 py-1 hover:bg-gray-100 transition-colors duration-200"
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
                        className="block px-4 py-1 hover:bg-gray-100 transition-colors duration-200"
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
        </div>
      </header>

      {/* Spacer for sticky header */}
      {isSticky && <div className="h-16 md:h-20" />}

      {/* Search Popup */}
      <SearchPopup 
        isOpen={isSearchPopupOpen} 
        onClose={() => setIsSearchPopupOpen(false)} 
      />
    </>
  )
}

export default Header