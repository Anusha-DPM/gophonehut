'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function WhyPage() {
  const whyUsFeatures = [
    {
      id: 1,
      title: 'Why use us?',
      description: 'We have been professionally repairing devices since the original iPhone was released. We have fixed thousands of devices since we started and we look forward to fixing thousands more.',
      icon: 'icon-handshake'
    },
    {
      id: 2,
      title: 'The price you see, is the price you get. Guaranteed.',
      description: 'The are no nasty surprises or hidden charges when your phone arrives with us, if you have booked the correct repair service needed we will complete the repair at the quoted price. If there are any other issues found you will be notified before the new or original repair is carried out. Should you decide not to go ahead, we will be happy to cancel the entire order and return your device.',
      icon: 'icon-dollar'
    },
    {
      id: 3,
      title: 'Our fast payment really is the fastest.',
      description: 'We know the world as we know it relies on connectivity. We boast the quickest turn around for repair in the UK. Holding the stock we need to deliver In Store appointments and call out services in as little as just 15 minutes, and mail order in as little as 48 hours from posting to receiving. Keeping your downtime to a minimum.',
      icon: 'icon-clock'
    },
    {
      id: 4,
      title: 'Fixed Up To Date Pricing.',
      description: 'Our team of staff managing online services are scouring the marketplace to make sure that we are competitive across the board. By checking market prices regularly gives us the ability to offer you the best service at the best price!',
      icon: 'icon-money'
    },
    {
      id: 5,
      title: 'No Nonsense Device Repair.',
      description: 'No nonsense device repair. No Jargon, straight forward knowledgeable staff to answer your enquiries and requests when you need it. Book, Repair Return - We wish everything was that easy.',
      icon: 'icon-credit-card'
    },
    {
      id: 6,
      title: '1st Class Customer Service.',
      description: 'We are proud to know that we offer the best in customer service levels, you might be able to find a repair service for your device slightly cheaper, but we promise you will not beat our service.',
      icon: 'icon-thumbs-up'
    }
  ]

  return (
    <main className="min-h-screen">
      {/* Top Header Section - Copied from phone page */}
      <div className="w-full" style={{ backgroundColor: '#f2f2f2' }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-2">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
            {/* Left side - Contact Information */}
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs sm:text-sm font-lato font-normal text-black">
              <div className="flex items-center gap-1">
                {/* Phone Icon */}
                <svg 
                  width="14" 
                  height="14" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                  className="text-black sm:w-4 sm:h-4"
                >
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span>408-224-2869</span>
              </div>
              
              <span className="text-black hidden sm:inline">|</span>
              
              <div className="flex items-center gap-1">
                {/* Clock Icon */}
                <svg 
                  width="14" 
                  height="14" 
                  viewBox="0 0 24 24" 
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-black sm:w-4 sm:h-4"
                >
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12,6 12,12 16,14"/>
                </svg>
                <span className="text-center sm:text-left">Hours Vary By Location</span>
              </div>
            </div>

            {/* Right side - Quick Links */}
            <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm">
              <a href="/quick-repair" className="font-lato font-normal transition-colors duration-200 hover:text-[#71af43]" style={{ color: '#007DD2' }}>
                Quick Repair
              </a>
              <a href="/locations" className="font-lato font-normal transition-colors duration-200 hover:text-[#71af43]" style={{ color: '#007DD2' }}>
                Locations
              </a>
              <a href="/order-track" className="font-lato font-normal transition-colors duration-200 hover:text-[#71af43]" style={{ color: '#007DD2' }}>
                Track Order
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header - Mobile Responsive */}
      <div className="w-full bg-white" style={{ boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.05)' }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-3 md:py-6">
          <div className="flex flex-row justify-between items-center gap-2 md:gap-4">
            {/* Left side - Logo */}
            <div className="flex items-center gap-2">
              <a href="/" className="block">
                <img
                  src="/website-logo.png"
                  alt="PhoneHut Logo"
                  className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto"
                />
              </a>
            </div>

            {/* Right side - Navigation */}
            <div className="flex items-center gap-2 md:gap-8">
              <nav className="hidden md:flex items-center gap-6 lg:gap-8">
                <div className="relative group">
                  <a href="/repairs" className="font-raleway font-bold uppercase transition-colors duration-200" style={{ fontSize: '14px', letterSpacing: '1px', color: '#0e72d2' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#6d6e71'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#0e72d2'}>
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
                <a href="/services" className="font-raleway font-bold uppercase transition-colors duration-200" style={{ fontSize: '14px', letterSpacing: '1px', color: '#0e72d2' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#6d6e71'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#0e72d2'}>
                  Services
                </a>
                <a href="/how-it-works" className="font-raleway font-bold uppercase transition-colors duration-200" style={{ fontSize: '14px', letterSpacing: '1px', color: '#0e72d2' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#6d6e71'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#0e72d2'}>
                  How It Works
                </a>
                <a href="/why" className="font-raleway font-bold uppercase transition-colors duration-200" style={{ fontSize: '14px', letterSpacing: '1px', color: '#0e72d2' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#6d6e71'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#0e72d2'}>
                  Why Us
                </a>
                <a href="/contact-us" className="font-raleway font-bold uppercase transition-colors duration-200" style={{ fontSize: '14px', letterSpacing: '1px', color: '#0e72d2' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#6d6e71'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#0e72d2'}>
                  Contact
                </a>
              </nav>
              
              {/* Search Icon */}
              <div className="ml-2 md:ml-4">
                <svg 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="hover:text-gray-300 transition-colors duration-200 cursor-pointer md:w-5 md:h-5"
                  style={{ color: '#0e72d2' }}
                >
                  <circle cx="11" cy="11" r="8"/>
                  <path d="m21 21-4.35-4.35"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Header />

      {/* Why Use Us Section */}
      <section 
        className="py-8 md:py-16 lg:py-20 xl:py-24"
        style={{
          backgroundImage: 'url(/whychooseus.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <style jsx>{`
          @media (min-width: 768px) {
            .why-heading {
              font-size: 36px !important;
            }
          }
        `}</style>
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center">
            <h1
              className="font-raleway font-bold uppercase mb-6 text-2xl md:text-3xl lg:text-4xl xl:text-4xl why-heading"
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontSize: '26px',
                color: 'white',
                letterSpacing: '1px',
                fontWeight: '700',
                marginBottom: '8px'
              }}
            >
              Why use us?
            </h1>
            
            <p
              className="text-sm md:text-base lg:text-lg xl:text-xl"
              style={{
                fontSize: '20px',
                lineHeight: '1.5',
                color: 'white',
                fontFamily: "'Lato', sans-serif"
              }}
            >
              Image Text...
            </p>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section 
        className="py-8 md:py-16 lg:py-20"
        style={{ 
          backgroundImage: 'url(/inner_pages_bg_image.png)', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12">
            {whyUsFeatures.map((feature) => (
              <div key={feature.id} className="bg-white rounded-lg shadow-lg p-4 md:p-6 lg:p-8 text-center">
                <div className="mb-4 md:mb-6">
                  {/* Icon */}
                  <div 
                    className="w-16 h-16 md:w-20 md:h-20 mx-auto rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer" 
                    style={{ backgroundColor: '#6d6e71' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#0056b3'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#6d6e71'
                    }}
                  >
                    {feature.icon === 'icon-handshake' && (
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M8 10c0-2 1-3 3-3s3 1 3 3v2"/>
                        <path d="M16 10c0-2 1-3 3-3s3 1 3 3v2"/>
                        <path d="M8 12v-2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                        <path d="M16 12v-2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                        <path d="M8 12h8"/>
                        <path d="M12 8v8"/>
                        <circle cx="8" cy="8" r="2" fill="#6d6e71"/>
                        <circle cx="16" cy="8" r="2" fill="#6d6e71"/>
                        <path d="M6 6c0-1 1-2 2-2s2 1 2 2"/>
                        <path d="M18 6c0-1 1-2 2-2s2 1 2 2"/>
                        <path d="M10 14c0-1 1-2 2-2s2 1 2 2"/>
                        <path d="M14 14c0-1 1-2 2-2s2 1 2 2"/>
                      </svg>
                    )}
                    {feature.icon === 'icon-dollar' && (
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="1" x2="12" y2="23"/>
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                      </svg>
                    )}
                    {feature.icon === 'icon-clock' && (
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12,6 12,12 16,14"/>
                      </svg>
                    )}
                    {feature.icon === 'icon-money' && (
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="6" width="20" height="12" rx="2"/>
                        <circle cx="12" cy="12" r="2"/>
                      </svg>
                    )}
                    {feature.icon === 'icon-credit-card' && (
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                        <line x1="1" y1="10" x2="23" y2="10"/>
                      </svg>
                    )}
                    {feature.icon === 'icon-thumbs-up' && (
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>
                      </svg>
                    )}
                  </div>
                </div>
                
                <h3
                  className="font-raleway font-bold mb-3 md:mb-4 text-base md:text-lg lg:text-lg"
                  style={{
                    fontFamily: "'Raleway', sans-serif",
                    fontSize: '18px',
                    color: '#333',
                    fontWeight: 'bold'
                  }}
                >
                  {feature.title}
                </h3>
                
                <p
                  className="text-center text-sm md:text-base lg:text-base"
                  style={{
                    fontSize: '16px',
                    lineHeight: '1.5',
                    color: '#555',
                    fontFamily: "'Lato', sans-serif"
                  }}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Action Button */}
          <div className="text-center">
            <button
              className="px-6 py-3 md:px-8 md:py-4 rounded-full text-white font-bold uppercase transition-colors duration-300 text-sm md:text-base"
              style={{
                backgroundColor: '#6d6e71',
                fontFamily: "'Lato', sans-serif",
                fontWeight: '700',
                letterSpacing: '1px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#0056b3'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#6d6e71'
              }}
            >
              Action Button
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
