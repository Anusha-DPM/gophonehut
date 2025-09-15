'use client'

import React, { useState } from 'react'
import Image from 'next/image'

const EasyAs123Section: React.FC = () => {
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null)

  const features = [
    {
      id: 'choose-repair',
      title: 'Choose Your Repair',
      description: 'We can repair your broken device, If you are unsure of whats wrong, our trained technicians can conduct a diagnostic test!',
      icon: '/easy1.png',
      hoverIcon: '/easyhover1.png',
      href: '#'
    },
    {
      id: 'choose-method',
      title: 'Choose Your Repair Method',
      description: 'Bring your device to store, request a home or workplace call out or simply opt for our nationwide mail order repair service',
      icon: '/easy2.png',
      hoverIcon: '/easyhover2.png',
      href: '#'
    },
    {
      id: 'receive-device',
      title: 'Receive Your Working Device',
      description: 'Whichever option you choose, we aim to have your device repaired and dispatched on the same working day as we receive.',
      icon: '/easy3.png',
      hoverIcon: '/easyhover3.png',
      href: '#'
    }
  ]

  return (
    <section className="pt-6 pb-6 md:pt-8 md:pb-8 lg:pt-10 lg:pb-10" style={{ backgroundColor: '#f1f1f1' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center">
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
              onMouseEnter={() => {
                console.log('Hovering over:', feature.id);
                setHoveredFeature(feature.id);
              }}
              onMouseLeave={() => {
                console.log('Stopped hovering');
                setHoveredFeature(null);
              }}
            >
              <div 
                className="relative p-6 md:p-8 text-center h-full"
                style={{ 
                  borderRadius: '10px',
                  backgroundColor: 'transparent',
                  border: 'none'
                }}
              >
                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <div 
                    className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center transition-all duration-300"
                    style={{ 
                      backgroundColor: hoveredFeature === feature.id ? '#6d6e71' : 'white',
                      borderRadius: '60% 40% 40% 60% / 70% 30% 70% 30%',
                      transform: 'rotate(-15deg)',
                      padding: '12px'
                    }}
                  >
                    <Image
                      src={hoveredFeature === feature.id ? feature.hoverIcon : feature.icon}
                      alt={feature.title}
                      width={40}
                      height={40}
                      className="w-10 h-10 md:w-12 md:h-12 transition-all duration-300"
                      style={{
                        filter: hoveredFeature === feature.id ? 'brightness(0) invert(1)' : 'none'
                      }}
                      onLoad={() => {
                        console.log('Image loaded successfully:', hoveredFeature === feature.id ? feature.hoverIcon : feature.icon);
                      }}
                      onError={(e) => {
                        console.log('Image error:', e);
                        console.log('Trying to load:', hoveredFeature === feature.id ? feature.hoverIcon : feature.icon);
                      }}
                    />
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