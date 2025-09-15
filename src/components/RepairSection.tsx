'use client'

import React, { useState } from 'react'
import Image from 'next/image'

const RepairSection: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const repairCategories = [
    {
      id: 'phone',
      label: 'Phone',
      image: '/what-are-you-need-phone1.png',
      hoverImage: '/what-are-you-need-phone-hover.png',
      href: '/product-category/phone'
    },
    {
      id: 'tablet',
      label: 'Tablet',
      image: '/what-are-you-need-tab.png',
      hoverImage: '/what-are-you-need-tab-hover.png',
      href: '/product-category/c-tablet'
    },
    {
      id: 'smartwatch',
      label: 'Smartwatch',
      image: '/what-are-you-need-watch.png',
      hoverImage: '/what-are-you-need-watch-hover.png',
      href: '/product-category/smartwatch'
    },
    {
      id: 'computer',
      label: 'Computer',
      image: '/what-are-you-need-laptop.png',
      hoverImage: '/what-are-you-need-laptop-hover.png',
      href: '/product-category/computer'
    }
  ]

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-4">
          <h2 
            className="font-raleway font-bold uppercase"
            style={{ 
              fontSize: '26px', 
              color: '#3333D3',
              fontFamily: "'Raleway', sans-serif",
              fontWeight: '700',
              letterSpacing: '1px'
            }}
          >
            What are you needing repaired?
          </h2>
        </div>

        {/* Search Bar */}
        <div className="max-w-xs mx-auto mb-12 md:mb-16">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for your device here"
              className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 text-lg bg-transparent text-center"
              style={{ 
                fontFamily: "'Raleway', sans-serif",
                letterSpacing: '1.1px'
              }}
            />
          </div>
        </div>

        {/* Repair Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {repairCategories.map((category) => (
            <a
              key={category.id}
              href={category.href}
              className="group block"
              onMouseEnter={() => setHoveredCard(category.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
               <div 
                 className="relative bg-white p-4 md:p-6 text-center transition-all duration-300 hover:scale-105 group-hover:bg-gray-600" 
                 style={{ 
                   backgroundColor: hoveredCard === category.id ? '#6d6e71' : 'white',
                   borderRadius: '10px',
                   boxShadow: '0 1px 6px 0 rgba(32, 33, 36, 0.15)',
                   border: 'none'
                 }}
               >
                 {/* Category Image */}
                 <div className="mb-4 flex justify-center">
                   <div className="w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 relative">
                     <Image
                       src={hoveredCard === category.id ? category.hoverImage : category.image}
                       alt={category.label}
                       width={160}
                       height={160}
                       className="w-full h-full object-contain transition-all duration-300"
                     />
                   </div>
                 </div>

                {/* Category Label */}
                <h3 
                  className="font-raleway font-semibold capitalize transition-colors duration-300"
                  style={{ 
                    fontSize: '18px',
                    color: hoveredCard === category.id ? 'white' : 'black',
                    fontFamily: "'Raleway', sans-serif"
                  }}
                >
                  {category.label}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RepairSection
