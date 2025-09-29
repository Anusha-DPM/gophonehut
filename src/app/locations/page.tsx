'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AppointmentPopup from '@/components/AppointmentPopup'

export default function LocationsPage() {
  const [selectedLocation, setSelectedLocation] = useState('sanjose')
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const locations = {
    sanjose: {
      name: 'San Jose - Phone Hut Cell Phone Repair',
      address: '311 N Capitol Ave M',
      city: 'San Jose CA USA',
      zip: '95133',
      coordinates: '37.3382,-121.8863',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.4!2d-121.8863!3d37.3382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcb8b8b8b8b8b%3A0x8b8b8b8b8b8b8b8b!2sPhone%20Hut%20Cell%20Phone%20Repair!5e0!3m2!1sen!2sus!4v1234567890&markers=icon:https://maps.google.com/mapfiles/ms/icons/red-pushpin.png%7C37.3382,-121.8863',
      hours: {
        mon: '11:00 am - 08:00 pm',
        tue: '11:00 am - 08:00 pm',
        wed: '11:00 am - 08:00 pm',
        thu: '11:00 am - 08:00 pm',
        fri: '11:00 am - 08:00 pm',
        sat: '11:00 am - 06:00 pm',
        sun: '11:00 am - 06:00 pm'
      }
    },
    fremont: {
      name: 'Fremont - Phone Hut Cell Phone Repair',
      address: '39475 Fremont Blvd',
      city: 'Fremont CA USA',
      zip: '94538',
      coordinates: '37.5483,-121.9886',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.4!2d-121.9886!3d37.5483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcb8b8b8b8b8b%3A0x8b8b8b8b8b8b8b8b!2sPhone%20Hut%20Cell%20Phone%20Repair!5e0!3m2!1sen!2sus!4v1234567890&markers=icon:https://maps.google.com/mapfiles/ms/icons/red-pushpin.png%7C37.5483,-121.9886',
      hours: {
        mon: '10:00 am - 08:00 pm',
        tue: '10:00 am - 08:00 pm',
        wed: '10:00 am - 08:00 pm',
        thu: '10:00 am - 08:00 pm',
        fri: '11:00 am - 07:00 pm',
        sat: '11:00 am - 07:00 pm',
        sun: '10:00 am - 08:00 pm'
      }
    }
  }

  const currentLocation = locations[selectedLocation as keyof typeof locations]

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

            {/* Right side - Navigation Links */}
            <div className="flex items-center gap-6 text-sm font-lato font-normal text-custom-blue">
              <a 
                href="/quick-repair" 
                className="capitalize hover:text-custom-green transition-colors duration-200"
              >
                Quick Repair
              </a>
              <a 
                href="/locations" 
                className="capitalize hover:text-custom-green transition-colors duration-200"
              >
                Locations
              </a>
              <a 
                href="/order-track" 
                className="capitalize hover:text-custom-green transition-colors duration-200"
              >
                Track Order
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Static Header Section */}
      <div className="w-full bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="block">
                <Image
                  src="/website-logo.png"
                  alt="Phone Hut Logo"
                  width={120}
                  height={40}
                  className="h-8 md:h-10 w-auto"
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <div className="relative group">
                <a
                  href="/repairs"
                  className="hover:text-gray-600 transition-colors duration-200"
                  style={{
                    fontSize: '16px',
                    fontFamily: 'lato',
                    color: '#333',
                    fontWeight: '600'
                  }}
                >
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
              
              <a
                href="/services"
                className="hover:text-gray-600 transition-colors duration-200"
                style={{
                  fontSize: '16px',
                  fontFamily: 'lato',
                  color: '#333',
                  fontWeight: '600'
                }}
              >
                Services
              </a>
              <a
                href="/how-it-works"
                className="hover:text-gray-600 transition-colors duration-200"
                style={{
                  fontSize: '16px',
                  fontFamily: 'lato',
                  color: '#333',
                  fontWeight: '600'
                }}
              >
                How it works
              </a>
              <a
                href="/why"
                className="hover:text-gray-600 transition-colors duration-200"
                style={{
                  fontSize: '16px',
                  fontFamily: 'lato',
                  color: '#333',
                  fontWeight: '600'
                }}
              >
                Why Us
              </a>
              <a
                href="/contact-us"
                className="hover:text-gray-600 transition-colors duration-200"
                style={{
                  fontSize: '16px',
                  fontFamily: 'lato',
                  color: '#333',
                  fontWeight: '600'
                }}
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </div>
      
      {/* Sticky Header Section */}
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[150px] md:h-[200px] lg:h-[250px] flex items-center justify-center">
        <Image
          src="/contact.jpg"
          alt="Phone Hut Locations"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative z-10 text-center px-4">
          <h1 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white"
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: '36px',
              color: 'white !important',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              fontWeight: '700'
            }}
          >
            Locations
          </h1>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="pt-16 md:pt-20 pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontSize: '36px',
                color: 'black',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                fontWeight: '700'
              }}
            >
              Welcome To Phone Hut!
            </h2>
            <p 
              className="text-lg md:text-xl max-w-3xl mx-auto"
              style={{
                fontSize: '20px',
                lineHeight: '1.5',
                color: 'black',
                fontFamily: "'Lato', sans-serif"
              }}
            >
              Visit us at any of our convenient locations for professional cell phone repair services. 
              Our expert technicians are ready to help you with all your device needs.
            </p>
          </div>

          {/* First Row - Map */}
          <div className="mb-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-96 md:h-[500px] lg:h-[600px]">
                <iframe
                  src={currentLocation.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${currentLocation.name} Map`}
                ></iframe>
              </div>
            </div>
          </div>

          {/* Second Row - Two Columns for Addresses */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* San Jose Location Card */}
            <div 
              className={`bg-white rounded-lg shadow-lg p-6 md:p-8 cursor-pointer transition-all duration-300 ${
                selectedLocation === 'sanjose' 
                  ? 'ring-2 ring-blue-500 shadow-xl' 
                  : 'hover:shadow-xl'
              }`}
              onClick={() => setSelectedLocation('sanjose')}
            >
              <div className="mb-6">
                <h3 
                  className="text-xl md:text-2xl font-bold mb-4"
                  style={{
                    fontFamily: "'lato', sans-serif",
                    fontSize: '14px',
                    color: 'black',
                    textTransform: 'capitalize',
                    fontWeight: '300'
                  }}
                >
                  San Jose - Phone Hut Cell Phone Repair
                </h3>
                <div 
                  className="space-y-2 mb-6"
                  style={{
                    fontFamily: "'lato', sans-serif",
                    fontSize: '14px',
                    color: 'black',
                    textTransform: 'capitalize',
                    fontWeight: '300'
                  }}
                >
                  <p>311 N Capitol Ave M</p>
                  <p>San Jose CA USA</p>
                  <p>San Jose - Phone Hut Cell Phone Repair - 95133</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 
                  className="text-lg font-semibold mb-4"
                  style={{
                    fontFamily: "'lato', sans-serif",
                    fontSize: '14px',
                    color: 'black',
                    textTransform: 'capitalize',
                    fontWeight: '300'
                  }}
                >
                  Service Hours
                </h4>
                <div 
                  className="space-y-1"
                  style={{
                    fontFamily: "'lato', sans-serif",
                    fontSize: '14px',
                    color: 'black',
                    textTransform: 'capitalize',
                    fontWeight: '300'
                  }}
                >
                  <p>Mon: 11:00 am - 08:00 pm</p>
                  <p>Tue: 11:00 am - 08:00 pm</p>
                  <p>Wed: 11:00 am - 08:00 pm</p>
                  <p>Thu: 11:00 am - 08:00 pm</p>
                  <p>Fri: 11:00 am - 08:00 pm</p>
                  <p>Sat: 11:00 am - 06:00 pm</p>
                  <p>Sun: 11:00 am - 06:00 pm</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setIsPopupOpen(true)}
                  className="flex-1 py-3 px-6 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                  style={{
                    fontFamily: "'lato', sans-serif",
                    fontSize: '14px',
                    color: 'white',
                    textTransform: 'capitalize',
                    fontWeight: '300'
                  }}
                >
                  Book Appointment
                </button>
                <a 
                  href="https://maps.app.goo.gl/dca1G1WrjxgmWt1y9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-6 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-700 transition-colors duration-200 text-center"
                  style={{
                    fontFamily: "'lato', sans-serif",
                    fontSize: '14px',
                    color: 'white',
                    textTransform: 'capitalize',
                    fontWeight: '300'
                  }}
                >
                  Get Directions
                </a>
              </div>
            </div>

            {/* Fremont Location Card */}
            <div 
              className={`bg-white rounded-lg shadow-lg p-6 md:p-8 cursor-pointer transition-all duration-300 ${
                selectedLocation === 'fremont' 
                  ? 'ring-2 ring-blue-500 shadow-xl' 
                  : 'hover:shadow-xl'
              }`}
              onClick={() => setSelectedLocation('fremont')}
            >
              <div className="mb-6">
                <h3 
                  className="text-xl md:text-2xl font-bold mb-4"
                  style={{
                    fontFamily: "'lato', sans-serif",
                    fontSize: '14px',
                    color: 'black',
                    textTransform: 'capitalize',
                    fontWeight: '300'
                  }}
                >
                  Fremont - Phone Hut Cell Phone Repair
                </h3>
                <div 
                  className="space-y-2 mb-6"
                  style={{
                    fontFamily: "'lato', sans-serif",
                    fontSize: '14px',
                    color: 'black',
                    textTransform: 'capitalize',
                    fontWeight: '300'
                  }}
                >
                  <p>39475 Fremont Blvd</p>
                  <p>Fremont CA USA</p>
                  <p>Fremont - Phone Hut Cell Phone Repair - 94538</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 
                  className="text-lg font-semibold mb-4"
                  style={{
                    fontFamily: "'lato', sans-serif",
                    fontSize: '14px',
                    color: 'black',
                    textTransform: 'capitalize',
                    fontWeight: '300'
                  }}
                >
                  Service Hours
                </h4>
                <div 
                  className="space-y-1"
                  style={{
                    fontFamily: "'lato', sans-serif",
                    fontSize: '14px',
                    color: 'black',
                    textTransform: 'capitalize',
                    fontWeight: '300'
                  }}
                >
                  <p>Mon: 10:00 am - 08:00 pm</p>
                  <p>Tue: 10:00 am - 08:00 pm</p>
                  <p>Wed: 10:00 am - 08:00 pm</p>
                  <p>Thu: 10:00 am - 08:00 pm</p>
                  <p>Fri: 11:00 am - 07:00 pm</p>
                  <p>Sat: 11:00 am - 07:00 pm</p>
                  <p>Sun: 10:00 am - 08:00 pm</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setIsPopupOpen(true)}
                  className="flex-1 py-3 px-6 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                  style={{
                    fontFamily: "'lato', sans-serif",
                    fontSize: '14px',
                    color: 'white',
                    textTransform: 'capitalize',
                    fontWeight: '300'
                  }}
                >
                  Book Appointment
                </button>
                <a 
                  href="https://maps.app.goo.gl/CKG8gYeNvUjuSdL39"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-6 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-700 transition-colors duration-200 text-center"
                  style={{
                    fontFamily: "'lato', sans-serif",
                    fontSize: '14px',
                    color: 'white',
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
      </section>

      {/* Footer Section */}
      <Footer />
      
      {/* Appointment Popup */}
      <AppointmentPopup 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
      />
    </main>
  )
}
