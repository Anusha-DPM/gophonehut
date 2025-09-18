'use client'

import TopHeader from '@/components/TopHeader'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      {/* Top Header Section */}
      <div className="w-full" style={{ backgroundColor: '#f2f2f2' }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-2">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
            {/* Left side - Contact Information */}
            <div className="flex items-center gap-4 text-sm font-lato font-normal text-black">
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

            {/* Right side - Quick Links */}
            <div className="flex items-center gap-4 text-sm">
              <a href="#" className="font-lato font-normal text-black hover:text-gray-600 transition-colors duration-200">
                Quick Repair
              </a>
              <a href="#" className="font-lato font-normal text-black hover:text-gray-600 transition-colors duration-200">
                Locations
              </a>
              <a href="#" className="font-lato font-normal text-black hover:text-gray-600 transition-colors duration-200">
                Track Order
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="w-full bg-white" style={{ boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.05)' }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4 md:py-6">
          <div className="flex flex-row justify-between items-center gap-4">
            {/* Left side - Logo */}
            <div className="flex items-center gap-2">
              <a href="/" className="block">
                <img
                  src="/website-logo.png"
                  alt="PhoneHut Logo"
                  className="h-8 md:h-10 lg:h-12 w-auto"
                />
              </a>
            </div>

            {/* Right side - Navigation */}
            <div className="flex items-center gap-8">
              <nav className="hidden md:flex items-center gap-8">
                <a href="/repairs" className="font-raleway font-bold uppercase transition-colors duration-200" style={{ fontSize: '15px', letterSpacing: '1px', color: '#0e72d2' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#6d6e71'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#0e72d2'}>
                  Repairs
                </a>
                <a href="/services" className="font-raleway font-bold uppercase transition-colors duration-200" style={{ fontSize: '15px', letterSpacing: '1px', color: '#0e72d2' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#6d6e71'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#0e72d2'}>
                  Services
                </a>
                <a href="/how-it-works" className="font-raleway font-bold uppercase transition-colors duration-200" style={{ fontSize: '15px', letterSpacing: '1px', color: '#0e72d2' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#6d6e71'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#0e72d2'}>
                  How It Works
                </a>
                <a href="#" className="font-raleway font-bold uppercase transition-colors duration-200" style={{ fontSize: '15px', letterSpacing: '1px', color: '#0e72d2' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#6d6e71'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#0e72d2'}>
                  Why Us
                </a>
                <a href="#" className="font-raleway font-bold uppercase transition-colors duration-200" style={{ fontSize: '15px', letterSpacing: '1px', color: '#0e72d2' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#6d6e71'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#0e72d2'}>
                  Contact
                </a>
              </nav>
              
              {/* Search Icon */}
              <div className="ml-4">
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="hover:text-gray-300 transition-colors duration-200 cursor-pointer"
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

      {/* Hero Section */}
      <section className="relative py-20 md:py-32" style={{ backgroundImage: 'url(/whychooseus.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h1
            className="font-raleway font-bold uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6"
            style={{
              fontFamily: "'Raleway', sans-serif",
              color: 'white',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              fontWeight: '700'
            }}
          >
            Privacy Policy
          </h1>
          <h2
            className="font-raleway font-medium text-lg sm:text-xl md:text-2xl"
            style={{
              fontFamily: "'Raleway', sans-serif",
              color: 'white',
              textTransform: 'capitalize',
              letterSpacing: '1px',
              fontWeight: '500'
            }}
          >
            Image Text...
          </h2>
        </div>
      </section>

      {/* Privacy Policy Content Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="space-y-12 text-center">
            {/* Information that is gathered from visitors */}
            <div>
              <h3
                className="font-raleway font-medium text-2xl sm:text-3xl md:text-4xl mb-6"
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  fontSize: '26px',
                  color: 'black',
                  textTransform: 'capitalize',
                  letterSpacing: '1px',
                  fontWeight: '500'
                }}
              >
                Information That Is Gathered From Visitors
              </h3>
              <div className="space-y-4">
                <p
                  className="text-base md:text-lg leading-relaxed"
                  style={{
                    fontSize: '16px',
                    lineHeight: '1.5',
                    color: 'black',
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: '500'
                  }}
                >
                  In common with other websites, log files are stored on the web server saving details such as the visitor's IP address, browser type, referring page and time of visit.
                </p>
                <p
                  className="text-base md:text-lg leading-relaxed"
                  style={{
                    fontSize: '16px',
                    lineHeight: '1.5',
                    color: 'black',
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: '500'
                  }}
                >
                  Cookies may be used to remember visitor preferences when interacting with the website.
                </p>
                <p
                  className="text-base md:text-lg leading-relaxed"
                  style={{
                    fontSize: '16px',
                    lineHeight: '1.5',
                    color: 'black',
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: '500'
                  }}
                >
                  Where registration is required, the visitor's email and a username will be stored on the server.
                </p>
              </div>
            </div>

            {/* How the Information is used */}
            <div>
              <h3
                className="font-raleway font-medium text-2xl sm:text-3xl md:text-4xl mb-6"
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  fontSize: '26px',
                  color: 'black',
                  textTransform: 'capitalize',
                  letterSpacing: '1px',
                  fontWeight: '500'
                }}
              >
                How The Information Is Used
              </h3>
              <div className="space-y-4">
                <p
                  className="text-base md:text-lg leading-relaxed"
                  style={{
                    fontSize: '16px',
                    lineHeight: '1.5',
                    color: 'black',
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: '500'
                  }}
                >
                  The information is used to enhance the vistor's experience when using the website to display personalised content and possibly advertising.
                </p>
                <p
                  className="text-base md:text-lg leading-relaxed"
                  style={{
                    fontSize: '16px',
                    lineHeight: '1.5',
                    color: 'black',
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: '500'
                  }}
                >
                  E-mail addresses will not be sold, rented or leased to 3rd parties.
                </p>
                <p
                  className="text-base md:text-lg leading-relaxed"
                  style={{
                    fontSize: '16px',
                    lineHeight: '1.5',
                    color: 'black',
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: '500'
                  }}
                >
                  E-mail may be sent to inform you of news of our services or offers by us or our affiliates.
                </p>
              </div>
            </div>

            {/* Visitor Options */}
            <div>
              <h3
                className="font-raleway font-medium text-2xl sm:text-3xl md:text-4xl mb-6"
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  fontSize: '26px',
                  color: 'black',
                  textTransform: 'capitalize',
                  letterSpacing: '1px',
                  fontWeight: '500'
                }}
              >
                Visitor Options
              </h3>
              <div className="space-y-4">
                <p
                  className="text-base md:text-lg leading-relaxed"
                  style={{
                    fontSize: '16px',
                    lineHeight: '1.5',
                    color: 'black',
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: '500'
                  }}
                >
                  If you have subscribed to one of our services, you may unsubscribe by following the instructions which are included in e-mail that you receive.
                </p>
                <p
                  className="text-base md:text-lg leading-relaxed"
                  style={{
                    fontSize: '16px',
                    lineHeight: '1.5',
                    color: 'black',
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: '500'
                  }}
                >
                  You may be able to block cookies via your browser settings but this may prevent you from access to certain features of the website.
                </p>
              </div>
            </div>

            {/* Cookies */}
            <div>
              <h3
                className="font-raleway font-medium text-2xl sm:text-3xl md:text-4xl mb-6"
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  fontSize: '26px',
                  color: 'black',
                  textTransform: 'capitalize',
                  letterSpacing: '1px',
                  fontWeight: '500'
                }}
              >
                Cookies
              </h3>
              <div className="space-y-4">
                <p
                  className="text-base md:text-lg leading-relaxed"
                  style={{
                    fontSize: '16px',
                    lineHeight: '1.5',
                    color: 'black',
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: '500'
                  }}
                >
                  Cookies are small digital signature files that are stored by your web browser that allow your preferences to be recorded when visiting the website. Also they may be used to track your return visits to the website.
                </p>
                <p
                  className="text-base md:text-lg leading-relaxed"
                  style={{
                    fontSize: '16px',
                    lineHeight: '1.5',
                    color: 'black',
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: '500'
                  }}
                >
                  3rd party advertising companies may also use cookies for tracking purposes.
                </p>
              </div>
            </div>

            {/* Requesting Data Deletion */}
            <div>
              <h3
                className="font-raleway font-medium text-2xl sm:text-3xl md:text-4xl mb-6"
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  fontSize: '26px',
                  color: 'black',
                  textTransform: 'capitalize',
                  letterSpacing: '1px',
                  fontWeight: '500'
                }}
              >
                Requesting Data Deletion
              </h3>
              <div className="space-y-4">
                <p
                  className="text-base md:text-lg leading-relaxed"
                  style={{
                    fontSize: '16px',
                    lineHeight: '1.5',
                    color: 'black',
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: '500'
                  }}
                >
                  Please send us an email or visit the contact us page to submit your request. We will comply within 10 business days.
                </p>
              </div>
            </div>

            {/* Google Ads */}
            <div>
              <h3
                className="font-raleway font-medium text-2xl sm:text-3xl md:text-4xl mb-6"
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  fontSize: '26px',
                  color: 'black',
                  textTransform: 'capitalize',
                  letterSpacing: '1px',
                  fontWeight: '500'
                }}
              >
                Google Ads
              </h3>
              <div className="space-y-4">
                <p
                  className="text-base md:text-lg leading-relaxed"
                  style={{
                    fontSize: '16px',
                    lineHeight: '1.5',
                    color: 'black',
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: '500'
                  }}
                >
                  Google, as a third party vendor, uses cookies to serve ads.
                </p>
                <p
                  className="text-base md:text-lg leading-relaxed"
                  style={{
                    fontSize: '16px',
                    lineHeight: '1.5',
                    color: 'black',
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: '500'
                  }}
                >
                  Google's use of the DART cookie enables it to serve ads to visitors based on their visit to sites they visit on the Internet.
                </p>
                <p
                  className="text-base md:text-lg leading-relaxed"
                  style={{
                    fontSize: '16px',
                    lineHeight: '1.5',
                    color: 'black',
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: '500'
                  }}
                >
                  Website visitors may opt out of the use of the DART cookie by visiting the Google ad and content network
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
