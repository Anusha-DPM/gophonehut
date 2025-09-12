'use client'

import React, { useState } from 'react'

const EasyAs123Section: React.FC = () => {
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null)

  const features = [
    {
      id: 'choose-repair',
      title: 'Choose Your Repair',
      description: 'We can repair your broken device, If you are unsure of whats wrong, our trained technicians can conduct a diagnostic test!',
      icon: '1',
      href: '#'
    },
    {
      id: 'choose-method',
      title: 'Choose Your Repair Method',
      description: 'Bring your device to store, request a home or workplace call out or simply opt for our nationwide mail order repair service',
      icon: '2',
      href: '#'
    },
    {
      id: 'receive-device',
      title: 'Receive Your Working Device',
      description: 'Whichever option you choose, we aim to have your device repaired and dispatched on the same working day as we receive.',
      icon: '3',
      href: '#'
    }
  ]

  return (
    <section className="py-12 md:py-16 lg:py-20" style={{ backgroundColor: '#f1f1f1' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 
            className="font-raleway font-bold uppercase"
            style={{ 
              fontSize: '26px', 
              color: '#233D63',
              fontFamily: "'Raleway', sans-serif",
              letterSpacing: '1px',
              fontWeight: '700'
            }}
          >
            Easy as 1, 2, 3
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature) => (
            <a
              key={feature.id}
              href={feature.href}
              className="group block"
              onMouseEnter={() => setHoveredFeature(feature.id)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <div 
                className="relative bg-white p-6 md:p-8 text-center h-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{ 
                  borderRadius: '10px',
                  boxShadow: '0 1px 6px 0 rgba(32, 33, 36, 0.15)',
                  border: 'none'
                }}
              >
                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <div 
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-3xl md:text-4xl font-bold transition-all duration-300 hover:scale-110"
                    style={{ 
                      backgroundColor: 'white',
                      color: hoveredFeature === feature.id ? '#6d6e71' : '#233D63'
                    }}
                  >
                    {feature.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 
                  className="font-raleway font-bold mb-4"
                  style={{ 
                    fontSize: '18px',
                    letterSpacing: '0.5px',
                    fontWeight: 'bold',
                    textTransform: 'capitalize',
                    fontFamily: "'Raleway', sans-serif",
                    color: '#233D63'
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
                    fontFamily: "'Lato', sans-serif",
                    fontSize: '16px',
                    fontWeight: '500'
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

export default EasyAs123Section
