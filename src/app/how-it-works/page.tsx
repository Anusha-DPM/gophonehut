'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function HowItWorksPage() {
  const steps = [
    {
      id: 1,
      title: 'We gather some quick info',
      description: 'Who, What, When, How Much? Navigate through our easy booking system to search for your desired repair service by name, brand or model number to locate the correct device. Then tell us what issues you are facing and price is revealed. The whole process takes less than a minute!'
    },
    {
      id: 2,
      title: 'We provide you an instant price quote',
      description: 'Promises promises,What you see is what you pay. Applicable taxes and warranty have already been applied. Additional charges may apply for heavy frame damage, water damage or other unreported issues.'
    },
    {
      id: 3,
      title: 'You book a service',
      description: 'Let us know when you can make it in and we will reserve a technician and the necessary parts for your repair. You then stop by and we will handle the rest! If you choose to complete your repair via home or workplace call out then simply sit back and relax - Same goes for our mail order repair service.'
    },
    {
      id: 4,
      title: 'You enjoy your revived device!',
      description: 'And help us grow by spreading the word. We are local, family owned and operated business. We thrive on word of mouth. Please help to be a part of our success.'
    }
  ]

  return (
    <main className="min-h-screen">
      {/* Top Header Section - Mobile Responsive */}
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

      {/* How it works Section */}
      <section className="py-12 md:py-16 lg:py-20" style={{ backgroundColor: '#007DD2' }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center">
            <h1
              className="font-raleway font-bold uppercase text-3xl md:text-4xl mobile-how-it-works-heading-26px"
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontSize: '36px',
                color: 'white',
                letterSpacing: '1px',
                fontWeight: '700'
              }}
            >
              How it works
            </h1>
          </div>
        </div>
      </section>

      {/* We Make Life Easy Section */}
      <section 
        className="py-12 md:py-16 lg:py-20"
        style={{ 
          backgroundImage: 'url(/inner_pages_bg_image.png)', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center">
            <h2
              className="font-raleway font-bold uppercase mb-4 md:mb-6 text-xl md:text-2xl mobile-we-make-life-easy-heading-26px"
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontSize: '26px',
                color: '#233d63',
                letterSpacing: '1px',
                fontWeight: '700'
              }}
            >
              We Make Life Easy
            </h2>
            
            <p
              className="mb-3 md:mb-4 text-sm md:text-base"
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: '16px',
                color: '#232222',
                lineHeight: '1.5'
              }}
            >
              We know life (and schedules) can be tricky so we made it an important point to have our whole process be quick, simple and hassle free.
            </p>
            
            <p
              className="max-w-4xl mx-auto mb-3 md:mb-4 text-sm md:text-base"
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: '16px',
                color: '#232222',
                lineHeight: '1.5'
              }}
            >
              All of our work is also 100% guaranteed!
            </p>
            
            <p
              className="max-w-4xl mx-auto text-sm md:text-base"
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: '16px',
                color: '#232222',
                lineHeight: '1.5'
              }}
            >
              Most of our repairs are completed in 15 to 20 minutes.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section 
        className="py-12 md:py-16 lg:py-20"
        style={{ 
          backgroundImage: 'url(/inner_pages_bg_image.png)', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 md:gap-y-16">
            {steps.map((step) => (
              <div key={step.id} className="relative flex flex-col h-full">
                {/* Number Badge */}
                <div className="absolute -top-3 md:-top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div 
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white font-bold text-xl md:text-2xl transition-colors duration-300 cursor-pointer"
                    style={{ backgroundColor: '#6d6e71' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgb(0, 125, 210)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#6d6e71'
                    }}
                  >
                    {step.id}
                  </div>
                </div>
                
                {/* Card */}
                <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 pt-12 md:pt-16 text-center flex-1 flex flex-col">
                  <h3
                    className="font-raleway font-bold mb-3 md:mb-4 text-base md:text-lg"
                    style={{
                      fontFamily: "'Raleway', sans-serif",
                      fontSize: '18px',
                      color: '#333',
                      fontWeight: 'bold'
                    }}
                  >
                    {step.title}
                  </h3>
                  
                  <p
                    className="flex-1 text-sm md:text-base"
                    style={{
                      fontSize: '16px',
                      lineHeight: '1.5',
                      color: '#555',
                      fontFamily: "'Lato', sans-serif"
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
