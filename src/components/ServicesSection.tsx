'use client'

import React from 'react'
import Image from 'next/image'

const ServicesSection: React.FC = () => {
  const services = [
    {
      id: 'tablet-ipad',
      name: 'Tablet & iPad',
      icon: '/tab1service.png'
    },
    {
      id: 'charging-port',
      name: 'Charging Port',
      icon: '/portservice.png'
    },
    {
      id: 'isight-camera',
      name: 'iSight Camera',
      icon: '/cameraservice.png'
    },
    {
      id: 'side-button',
      name: 'Side Button',
      icon: '/buttonservice.png'
    },
    {
      id: 'power-button',
      name: 'Power Button',
      icon: '/powerservice.png'
    },
    {
      id: 'battery',
      name: 'Battery',
      icon: '/batteryservice.png'
    },
    {
      id: 'software-unlocking',
      name: 'Software/Unlocking',
      icon: '/softwareservice.png'
    },
    {
      id: 'screen',
      name: 'Screen',
      icon: '/screenservice.png'
    }
  ]

  return (
    <section className="py-12 md:py-16 lg:py-20" style={{ backgroundColor: 'white' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Services Grid - No heading */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col items-center p-6 bg-white rounded-lg border border-black transition-all duration-300 hover:scale-105 hover:bg-[#6d6e71] group"
            >
              {/* Service Icon */}
              <div className="mb-4 w-24 h-24 flex items-center justify-center">
                <div
                  className="w-full h-full rounded-full flex items-center justify-center"
                >
                  <Image
                    src={service.icon}
                    alt={service.name}
                    width={64}
                    height={64}
                    className="w-16 h-16 group-hover:brightness-0 group-hover:invert transition-all duration-300"
                  />
                </div>
              </div>

              {/* Service Name */}
              <h3
                className="text-center font-raleway font-bold text-gray-800 group-hover:text-white transition-colors duration-300"
                style={{
                  fontSize: '18px',
                  letterSpacing: '0.5px',
                  fontWeight: 'bold',
                  textTransform: 'capitalize',
                  fontFamily: "'Raleway', sans-serif"
                }}
              >
                {service.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
