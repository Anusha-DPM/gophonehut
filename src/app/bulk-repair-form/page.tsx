'use client'

import { useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function BulkRepairFormPage() {
  // Load GHL form script
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://link.digitalpresencematters.com/js/form_embed.js'
    script.async = true
    document.head.appendChild(script)

    return () => {
      // Cleanup script on component unmount
      const existingScript = document.querySelector('script[src="https://link.digitalpresencematters.com/js/form_embed.js"]')
      if (existingScript) {
        document.head.removeChild(existingScript)
      }
    }
  }, [])

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
              <a href="#" className="font-lato font-normal transition-colors duration-200 hover:text-[#71af43]" style={{ color: '#007DD2' }}>
                Quick Repair
              </a>
              <a href="/locations" className="font-lato font-normal transition-colors duration-200 hover:text-[#71af43]" style={{ color: '#007DD2' }}>
                Locations
              </a>
              <a href="#" className="font-lato font-normal transition-colors duration-200 hover:text-[#71af43]" style={{ color: '#007DD2' }}>
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
                <a href="/why" className="font-raleway font-bold uppercase transition-colors duration-200" style={{ fontSize: '15px', letterSpacing: '1px', color: '#0e72d2' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#6d6e71'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#0e72d2'}>
                  Why Us
                </a>
                <a href="/contact-us" className="font-raleway font-bold uppercase transition-colors duration-200" style={{ fontSize: '15px', letterSpacing: '1px', color: '#0e72d2' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#6d6e71'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#0e72d2'}>
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
      <section className="relative py-20 md:py-32 mobile-bulk-repair-hero-spacing" style={{ backgroundImage: 'url(/contact.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h1
            className="font-raleway font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 mobile-heading-26px"
            style={{
              fontFamily: "'Raleway', sans-serif",
              color: 'white',
              textTransform: 'capitalize',
              letterSpacing: '1px',
              fontWeight: '700'
            }}
          >
            BULK REPAIR FORM
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

      {/* Content Section */}
      <section className="py-16 md:py-20">
        <div className="w-full px-4 md:px-6 lg:px-8">
          <p
            className="text-center mb-12"
            style={{
              fontSize: '16px',
              lineHeight: '1.5',
              color: 'black',
              fontFamily: "'Lato', sans-serif",
              fontWeight: '500'
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>

          {/* Bulk Repair Form */}
          <div className="bg-white rounded-lg p-8 md:p-12">
            {/* GHL Bulk Repair Form Embed */}
            <div className="w-full">
              <iframe
                src="https://link.digitalpresencematters.com/widget/form/TwrLUTb0a5hGust3JUPn"
                style={{width:'100%',height:'100%',border:'none',borderRadius:'3px'}}
                id="inline-TwrLUTb0a5hGust3JUPn" 
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Bulk Repair"
                data-height="1025"
                data-layout-iframe-id="inline-TwrLUTb0a5hGust3JUPn"
                data-form-id="TwrLUTb0a5hGust3JUPn"
                title="Bulk Repair"
                className="w-full h-[1025px] rounded-lg"
              >
              </iframe>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
