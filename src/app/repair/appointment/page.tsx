'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import TopHeader from '@/components/TopHeader'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function AppointmentPage() {
  const searchParams = useSearchParams()
  const selectedIssue = searchParams.get('issue')
  const deviceName = searchParams.get('device')
  const deviceType = searchParams.get('deviceType')
  const brand = searchParams.get('brand')
  const model = searchParams.get('model')
  const color = searchParams.get('color')
  const storage = searchParams.get('storage')
  const deviceImage = searchParams.get('image')
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

      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4">
        <nav className="text-sm font-lato" aria-label="Breadcrumb">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <Link href="/" className="text-gray-600 hover:text-gray-800">
                Home
              </Link>
              <svg className="fill-current w-3 h-3 mx-3 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/>
              </svg>
            </li>
            <li className="flex items-center">
              <Link href="/product-category/phone" className="text-gray-600 hover:text-gray-800">
                Phone
              </Link>
              <svg className="fill-current w-3 h-3 mx-3 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/>
              </svg>
            </li>
            <li>
              <span className="text-gray-800">Appointment</span>
            </li>
          </ol>
        </nav>
      </div>

      {/* Main Content Section */}
      <section 
        className="py-8 md:py-12"
        style={{ 
          backgroundImage: 'url(/inner_pages_bg_image.png)', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="text-center mb-8 md:mb-12">
            <h1
              className="font-raleway font-bold uppercase text-3xl md:text-4xl mb-4"
              style={{
                color: 'black',
                letterSpacing: '1px',
                fontWeight: '700',
                fontFamily: "'Raleway', sans-serif"
              }}
            >
              Make an appointment Online!
            </h1>
            <p
              className="font-lato text-lg md:text-xl"
              style={{
                lineHeight: '1.5',
                color: 'black',
                fontFamily: "'Lato', sans-serif"
              }}
            >
              Let us know how you would like us to fix your device
            </p>
          </div>

          {/* Two Column Layout - Form Left, Addresses Right */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Left Side - Form */}
              <div className="lg:col-span-2">
                {/* GHL Make an appointment Form Embed */}
                <div className="w-full">
                  <iframe
                    src="https://link.digitalpresencematters.com/widget/form/xUhqclQnSjIHoMPwBxpG"
                    style={{width:'100%',height:'100%',border:'none',borderRadius:'3px'}}
                    id="inline-xUhqclQnSjIHoMPwBxpG" 
                    data-layout="{'id':'INLINE'}"
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="Make an appointment "
                    data-height="726"
                    data-layout-iframe-id="inline-xUhqclQnSjIHoMPwBxpG"
                    data-form-id="xUhqclQnSjIHoMPwBxpG"
                    title="Make an appointment "
                    className="w-full h-[726px] rounded-lg"
                  >
                  </iframe>
                </div>
              </div>






              {/* Right Side - Addresses */}
              <div className="lg:col-span-1">
                <div className="space-y-6">
                  {/* Selected Items Display */}
                  {(selectedIssue || deviceType || brand || model) && (
                    <div className="bg-white rounded-lg shadow-lg p-6">
                      <h3
                        className="text-lg font-bold mb-4"
                        style={{
                          fontFamily: "'Raleway', sans-serif",
                          color: '#233d63',
                          textTransform: 'uppercase'
                        }}
                      >
                        Repair Details
                      </h3>
                      
                      {/* Device Image */}
                      {deviceImage && (
                        <div className="mb-4 text-center">
                          <img
                            src={deviceImage}
                            alt={model || deviceName || 'Selected Device'}
                            className="w-24 h-24 mx-auto object-contain"
                          />
                        </div>
                      )}
                      
                      <div className="space-y-3">
                        {deviceType && (
                          <div className="flex justify-between">
                            <span
                              className="text-sm font-semibold"
                              style={{
                                fontFamily: "'Lato', sans-serif",
                                color: '#233d63',
                                textTransform: 'uppercase'
                              }}
                            >
                              Device Type:
                            </span>
                            <span
                              className="text-base capitalize"
                              style={{
                                fontFamily: "'Lato', sans-serif",
                                color: '#233d63'
                              }}
                            >
                              {deviceType}
                            </span>
                          </div>
                        )}
                        {brand && (
                          <div className="flex justify-between">
                            <span
                              className="text-sm font-semibold"
                              style={{
                                fontFamily: "'Lato', sans-serif",
                                color: '#233d63',
                                textTransform: 'uppercase'
                              }}
                            >
                              Brand:
                            </span>
                            <span
                              className="text-base capitalize"
                              style={{
                                fontFamily: "'Lato', sans-serif",
                                color: '#233d63'
                              }}
                            >
                              {brand}
                            </span>
                          </div>
                        )}
                        {model && (
                          <div className="flex justify-between">
                            <span
                              className="text-sm font-semibold"
                              style={{
                                fontFamily: "'Lato', sans-serif",
                                color: '#233d63',
                                textTransform: 'uppercase'
                              }}
                            >
                              Model:
                            </span>
                            <span
                              className="text-base"
                              style={{
                                fontFamily: "'Lato', sans-serif",
                                color: '#233d63'
                              }}
                            >
                              {model}
                            </span>
                          </div>
                        )}
                        {color && (
                          <div className="flex justify-between">
                            <span
                              className="text-sm font-semibold"
                              style={{
                                fontFamily: "'Lato', sans-serif",
                                color: '#233d63',
                                textTransform: 'uppercase'
                              }}
                            >
                              Color:
                            </span>
                            <span
                              className="text-base capitalize"
                              style={{
                                fontFamily: "'Lato', sans-serif",
                                color: '#233d63'
                              }}
                            >
                              {color}
                            </span>
                          </div>
                        )}
                        {storage && (
                          <div className="flex justify-between">
                            <span
                              className="text-sm font-semibold"
                              style={{
                                fontFamily: "'Lato', sans-serif",
                                color: '#233d63',
                                textTransform: 'uppercase'
                              }}
                            >
                              Storage:
                            </span>
                            <span
                              className="text-base uppercase"
                              style={{
                                fontFamily: "'Lato', sans-serif",
                                color: '#233d63'
                              }}
                            >
                              {storage}
                            </span>
                          </div>
                        )}
                        {selectedIssue && (
                          <div className="flex justify-between">
                            <span
                              className="text-sm font-semibold"
                              style={{
                                fontFamily: "'Lato', sans-serif",
                                color: '#233d63',
                                textTransform: 'uppercase'
                              }}
                            >
                              Issue:
                            </span>
                            <span
                              className="text-base capitalize"
                              style={{
                                fontFamily: "'Lato', sans-serif",
                                color: '#233d63'
                              }}
                            >
                              {selectedIssue}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
              {/* San Jose Location */}
              <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
                <h2
                  className="font-lato font-bold text-lg md:text-xl mb-4"
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: '18px',
                    color: 'black',
                    textTransform: 'capitalize',
                    fontWeight: '700'
                  }}
                >
                  San Jose - Phone Hut Cell Phone Repair
                </h2>
                <div
                  className="space-y-2"
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: '14px',
                    color: 'black',
                    textTransform: 'capitalize',
                    fontWeight: '300'
                  }}
                >
                  <p>311 N Capitol Ave M</p>
                  <p>San Jose, CA 95133</p>
                  <p className="mt-4">
                    <span className="font-semibold">Phone:</span> 408-224-2869
                  </p>
                  <p>
                    <span className="font-semibold">Email:</span> oakridge@gophonehut.com
                  </p>
                  <div className="mt-4">
                    <a
                      href="https://maps.app.goo.gl/dca1G1WrjxgmWt1y9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline font-medium"
                      style={{
                        fontFamily: "'Lato', sans-serif",
                        fontSize: '14px',
                        textTransform: 'capitalize',
                        fontWeight: '300'
                      }}
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>

                  {/* Fremont Location */}
                  <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
                    <h2
                      className="font-lato font-bold text-lg md:text-xl mb-4"
                      style={{
                        fontFamily: "'Lato', sans-serif",
                        fontSize: '18px',
                        color: 'black',
                        textTransform: 'capitalize',
                        fontWeight: '700'
                      }}
                    >
                      Fremont - Phone Hut Cell Phone Repair
                    </h2>
                    <div
                      className="space-y-2"
                      style={{
                        fontFamily: "'Lato', sans-serif",
                        fontSize: '14px',
                        color: 'black',
                        textTransform: 'capitalize',
                        fontWeight: '300'
                      }}
                    >
                      <p>39475 Fremont Blvd</p>
                      <p>Fremont, CA 94538</p>
                      <p className="mt-4">
                        <span className="font-semibold">Phone:</span> 510-320-7590
                      </p>
                      <p>
                        <span className="font-semibold">Email:</span> freemont@gophonehut.com
                      </p>
                      <div className="mt-4">
                        <a
                          href="https://maps.app.goo.gl/CKG8gYeNvUjuSdL39"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 underline font-medium"
                          style={{
                            fontFamily: "'Lato', sans-serif",
                            fontSize: '14px',
                            textTransform: 'capitalize',
                            fontWeight: '300'
                          }}
                        >
                          Get Directions
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
