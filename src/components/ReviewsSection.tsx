'use client'

import React, { useState } from 'react'
import Image from 'next/image'

const ReviewsSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const reviews = [
    {
      id: 1,
      description: "Got my device fixed today and I really appreciate the grade of work. And very particular about time, Great place to secure device.",
      name: "AQUIB",
      city: "California, San Jose"
    },
    {
      id: 2,
      description: "Very Nice Repair Work. Instant Repair and reasonable cost. This is 5 star Review",
      name: "JOHN DONSON",
      city: "San Jose, CA"
    },
    {
      id: 3,
      description: "Very Nice Repair of my Iphone X, They fixed in 10 minutes.",
      name: "JOHN JOHNSON",
      city: "San Jose, CA"
    }
  ]

  return (
    <section 
      className="py-6 md:py-8 lg:py-10 relative"
      style={{
        backgroundImage: 'url(/reviewbackground.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 
            className="font-raleway font-bold uppercase"
            style={{ 
              fontSize: '26px', 
              color: '#233D63',
              fontFamily: '&quot;Raleway&quot;, sans-serif',
              letterSpacing: '1px',
              fontWeight: '700'
            }}
          >
            REAL REVIEWS FROM REAL CUSTOMERS
          </h2>
        </div>

        {/* Reviews Carousel */}
        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 33.333}%)` }}
            >
              {reviews.map((review) => (
                <div key={review.id} className="w-1/3 flex-shrink-0 px-4">
                  <div className="bg-white rounded-lg shadow-lg p-6 h-full">
                    <div className="flex gap-4 h-full">
                      {/* First Column - Image */}
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                          <Image
                            src="/placeholder_avatar.jpg"
                            alt="User Avatar"
                            width={80}
                            height={80}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      {/* Second Column - Content */}
                      <div className="flex-1 flex flex-col justify-start">
                        {/* Review Description */}
                         <p 
                           className="mb-4"
                           style={{
                             fontSize: '16px',
                             fontWeight: 'bold',
                             fontFamily: '&quot;Crete Round&quot;, serif',
                             fontStyle: 'normal',
                             lineHeight: '1.3',
                             color: '#555',
                             letterSpacing: '1px'
                           }}
                         >
                          &ldquo;{review.description}&rdquo;
                        </p>

                        {/* User Name */}
                        <h3 
                          className="mb-0"
                          style={{
                            fontSize: '16px',
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                            fontFamily: 'lato',
                            color: '#555'
                          }}
                        >
                          - {review.name}
                        </h3>

                        {/* City */}
                        <p 
                          className="mb-0"
                          style={{
                            fontSize: '16px',
                            fontWeight: 'bold',
                            fontFamily: 'lato',
                            color: 'black'
                          }}
                        >
                          {review.city}
                        </p>

                        {/* Stars */}
                        <div className="flex">
                          <div className="flex space-x-1">
                            {[...Array(5)].map((_, index) => (
                              <span
                                key={index}
                                className="text-yellow-400"
                                style={{
                                  fontSize: '20px',
                                  color: '#f3d32c'
                                }}
                              >
                                ★
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => setCurrentSlide(currentSlide === 0 ? 0 : currentSlide - 1)}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentSlide === 0}
            aria-label="Previous review"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={() => setCurrentSlide(currentSlide === reviews.length - 1 ? reviews.length - 1 : currentSlide + 1)}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentSlide === reviews.length - 1}
            aria-label="Next review"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-[#6D6E71]' : 'bg-gray-300'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>

          {/* More Reviews Button */}
          <div className="flex justify-center mt-8">
            <a
              href="/reviews"
              className="transition-colors duration-300 flex items-center gap-2 inline-block"
              style={{
                position: 'relative',
                cursor: 'pointer',
                outline: 'none',
                whiteSpace: 'nowrap',
                margin: '5px',
                padding: '0 22px',
                fontSize: '14px',
                height: '40px',
                lineHeight: '40px',
                backgroundColor: '#6d6e71',
                color: '#FFF',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                border: 'none',
                borderRadius: '50px',
                textShadow: '1px 1px 1px rgba(0, 0, 0, 0.2)',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#0056b3';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#6d6e71';
              }}
            >
              More Reviews
              <svg 
                className="w-4 h-4" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path 
                  fillRule="evenodd" 
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                  clipRule="evenodd" 
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReviewsSection
