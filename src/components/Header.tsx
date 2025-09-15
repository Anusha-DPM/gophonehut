'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const Header: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
              <Image
                src="/website-logo.png"
                alt="Phone Hut Logo"
                width={120}
                height={40}
                className="h-8 md:h-10 w-auto"
              />
            </div>


            {/* Desktop Main Menu */}
            <nav className="hidden lg:flex items-center space-x-8">
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
                href="#"
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
                href="#"
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
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-200"
                    style={{
                      fontFamily: 'lato',
                      color: '#333',
                      fontWeight: '600'
                    }}
                  >
                    Repairs
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-200"
                    style={{
                      fontFamily: 'lato',
                      color: '#333',
                      fontWeight: '600'
                    }}
                  >
                    Services
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-200"
                    style={{
                      fontFamily: 'lato',
                      color: '#333',
                      fontWeight: '600'
                    }}
                  >
                    How it works
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-200"
                    style={{
                      fontFamily: 'lato',
                      color: '#333',
                      fontWeight: '600'
                    }}
                  >
                    Why Us
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-200"
                    style={{
                      fontFamily: 'lato',
                      color: '#333',
                      fontWeight: '600'
                    }}
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Spacer for sticky header */}
      {isSticky && <div className="h-16 md:h-20" />}
    </>
  )
}

export default Header