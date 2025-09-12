'use client'

import React, { useState } from 'react'

const WhyChooseUsSection: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const features = [
    {
      id: 'quick-process',
      title: 'QUICK & EASY PROCESS',
      description: 'Any of the booking methods on offer are quick and easy! In most cases you can complete your repair booking in a minute or less!',
      icon: '🕐',
      href: '#'
    },
    {
      id: 'high-standard',
      title: 'HIGH WORK STANDARD',
      description: 'We don\'t own your device, but we fix it as if we did! You can count on us for a high quality finish when it comes to your device repair.',
      icon: '🔧',
      href: '#'
    },
    {
      id: 'reviews',
      title: 'HUNDREDS OF REVIEWS',
      description: 'Don\'t just take our word for it, there are hundreds if not thousands of reviews across the internet.',
      icon: '⭐',
      href: '#'
    }
  ]

  return (
    <section className="pt-0 pb-12 md:pb-16 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 
            className="font-raleway font-bold uppercase"
            style={{ 
              fontSize: '26px', 
              color: '#8B5EFF',
              fontFamily: "'Raleway', sans-serif",
              letterSpacing: '1px'
            }}
          >
            Why Choose Us
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {features.map((feature) => (
            <a
              key={feature.id}
              href={feature.href}
              className="group block"
              onMouseEnter={() => setHoveredCard(feature.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div 
                className="relative bg-white p-6 md:p-8 text-center h-full"
                style={{ 
                  borderRadius: feature.id === 'quick-process' ? '10px 0 0 10px' : 
                              feature.id === 'high-standard' ? '0' : 
                              '0 10px 10px 0',
                  boxShadow: '0 1px 6px 0 rgba(32, 33, 36, 0.15)',
                  border: 'none'
                }}
              >
                {/* Icon */}
                <div className="mb-6 flex justify-center">
                            <div 
                              className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-3xl md:text-4xl transition-all duration-300 hover:scale-110"
                              style={{ 
                                backgroundColor: hoveredCard === feature.id ? '#3333db' : '#f5f5f5'
                              }}
                            >
                    {feature.id === 'quick-process' ? (
                      <svg 
                        width="32" 
                        height="32" 
                        viewBox="0 0 24 24" 
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-8 h-8 md:w-10 md:h-10 transition-colors duration-300"
                        style={{ color: hoveredCard === feature.id ? 'white' : 'black' }}
                      >
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12,6 12,12 16,14"/>
                      </svg>
                    ) : feature.id === 'high-standard' ? (
                      <svg 
                        width="32" 
                        height="32" 
                        viewBox="0 0 24 24" 
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-8 h-8 md:w-10 md:h-10 transition-colors duration-300"
                        style={{ color: hoveredCard === feature.id ? 'white' : 'black' }}
                      >
                        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                        <line x1="12" y1="18" x2="12.01" y2="18"/>
                      </svg>
                    ) : feature.id === 'reviews' ? (
                      <svg 
                        width="32" 
                        height="32" 
                        viewBox="0 0 24 24" 
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-8 h-8 md:w-10 md:h-10 transition-colors duration-300"
                        style={{ color: hoveredCard === feature.id ? 'white' : 'black' }}
                      >
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                        <line x1="8" y1="21" x2="16" y2="21"/>
                        <line x1="12" y1="17" x2="12" y2="21"/>
                      </svg>
                    ) : (
                      feature.icon
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 
                  className="font-raleway font-bold uppercase mb-4"
                  style={{ 
                    fontSize: '16px',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    fontFamily: "'Raleway', sans-serif",
                    color: '#232222'
                  }}
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p 
                  className="font-lato"
                  style={{ 
                    lineHeight: '1.5',
                    color: '#232222',
                    fontFamily: "'Lato', sans-serif"
                  }}
                >
                  {feature.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUsSection
