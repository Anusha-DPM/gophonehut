'use client'

import React from 'react'
import Image from 'next/image'

const ReviewsSection: React.FC = () => {
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

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="w-full">
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
                  <div className="flex-1 flex flex-col justify-center">
                    {/* Review Description */}
                    <p 
                      className="mb-4"
                      style={{
                        fontSize: '17px',
                        fontWeight: 'bold',
                        fontFamily: '&quot;Crete Round&quot;, serif',
                        fontStyle: 'italic',
                        lineHeight: '1.3',
                        color: '#555'
                      }}
                    >
                      &ldquo;{review.description}&rdquo;
                    </p>

                    {/* User Name */}
                    <h3 
                      className="mb-0 text-gray-800"
                      style={{
                        fontSize: '16px',
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                        fontFamily: 'lato'
                      }}
                    >
                      - {review.name}
                    </h3>

                    {/* City */}
                    <p 
                      className="mb-1 text-gray-600"
                      style={{
                        fontSize: '16px',
                        fontWeight: 'bold',
                        fontFamily: 'lato'
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
    </section>
  )
}

export default ReviewsSection
