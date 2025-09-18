'use client'

import React from 'react'
import { usePathname } from 'next/navigation'

interface TopHeaderProps {
  showAllLinks?: boolean
}

const TopHeader: React.FC<TopHeaderProps> = ({ showAllLinks = true }) => {
  const pathname = usePathname()
  const isLocationsPage = pathname === '/locations'
  return (
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
        <div className="flex items-center gap-6 text-sm font-lato font-normal text-custom-blue">
          <a 
            href="/quick-repair" 
            className="capitalize hover:text-custom-green transition-colors duration-200"
          >
            Quick Repair
          </a>
          <a 
            href="/locations" 
            className="capitalize hover:text-custom-green transition-colors duration-200"
          >
            Locations
          </a>
          <a 
            href="/order-track" 
            className="capitalize hover:text-custom-green transition-colors duration-200"
          >
            Track Order
          </a>
          
          {/* Only show these links if not on locations page */}
          {!isLocationsPage && (
            <>
              {/* Repairs Dropdown */}
              <div className="relative group">
                <a 
                  href="/repairs" 
                  className="capitalize hover:text-custom-green transition-colors duration-200"
                >
                  Repairs
                </a>
                <div className="absolute top-full left-0 mt-1 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
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
                href="/why" 
                className="capitalize hover:text-custom-green transition-colors duration-200"
              >
                Why Us
              </a>
              <a 
                href="/contact-us" 
                className="capitalize hover:text-custom-green transition-colors duration-200"
              >
                Contact Us
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default TopHeader
