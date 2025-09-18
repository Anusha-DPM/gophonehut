'use client'

import React, { useState, useEffect } from 'react'
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
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    repairType: '',
    pickupAddress1: '',
    pickupAddress2: '',
    pickupState: '',
    pickupCity: '',
    pickupZipCode: '',
    pickupInstructions: '',
    shippingAddress1: '',
    shippingAddress2: '',
    shippingState: '',
    shippingCity: '',
    shippingZipCode: '',
    location: '',
    appointmentDate: '',
    appointmentTime: '',
    extraRemarks: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
    postalCode: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }
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
                <form onSubmit={handleSubmit} className="space-y-8">
              {/* Social Login */}
              <div className="text-center mb-8">
                <div className="flex justify-center space-x-4">
                  <button
                    type="button"
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    Facebook
                  </button>
                  <button
                    type="button"
                    className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    Google
                  </button>
                </div>
              </div>

              {/* Personal Information */}
              <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
                <h2
                  className="text-xl font-bold mb-6"
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    color: 'black',
                    textTransform: 'uppercase'
                  }}
                >
                  Personal Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ fontFamily: "'Lato', sans-serif" }}>
                      Name:
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ fontFamily: "'Lato', sans-serif" }}>
                      Phone:
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2" style={{ fontFamily: "'Lato', sans-serif" }}>
                      Email:
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Repair Options */}
              <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
                <h2
                  className="text-xl font-bold mb-6"
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    color: 'black',
                    textTransform: 'uppercase'
                  }}
                >
                  Choose From The Options Below
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <input
                      type="radio"
                      id="bringToShop"
                      name="repairType"
                      value="bringToShop"
                      checked={formData.repairType === 'bringToShop'}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600"
                    />
                    <label htmlFor="bringToShop" className="text-lg font-semibold" style={{ fontFamily: "'Lato', sans-serif" }}>
                      BRING TO SHOP
                    </label>
                  </div>
                  <p className="text-sm text-gray-600 ml-8" style={{ fontFamily: "'Lato', sans-serif" }}>
                    Normally repaired in just 15 - 60 minutes.
                  </p>
                  
                  <div className="flex items-center space-x-4">
                    <input
                      type="radio"
                      id="pickup"
                      name="repairType"
                      value="pickup"
                      checked={formData.repairType === 'pickup'}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600"
                    />
                    <label htmlFor="pickup" className="text-lg font-semibold" style={{ fontFamily: "'Lato', sans-serif" }}>
                      PICKUP
                    </label>
                  </div>
                  <p className="text-sm text-gray-600 ml-8" style={{ fontFamily: "'Lato', sans-serif" }}>
                    This repair is completed inside of one of our repair vehicles outside your home or workplace, if this is not possible we collect, repair and deliver - normally on the same working day.
                  </p>
                  
                  <div className="flex items-center space-x-4">
                    <input
                      type="radio"
                      id="shipping"
                      name="repairType"
                      value="shipping"
                      checked={formData.repairType === 'shipping'}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600"
                    />
                    <label htmlFor="shipping" className="text-lg font-semibold" style={{ fontFamily: "'Lato', sans-serif" }}>
                      SHIPPING
                    </label>
                  </div>
                  <p className="text-sm text-gray-600 ml-8" style={{ fontFamily: "'Lato', sans-serif" }}>
                    In most cases, we repair and dispatch the device back to you on the same day as we receive.
                  </p>
                </div>
              </div>

              {/* Pickup Address */}
              {formData.repairType === 'pickup' && (
                <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
                  <h2
                    className="text-xl font-bold mb-6"
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      color: 'black',
                      textTransform: 'uppercase'
                    }}
                  >
                    Pickup Address
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium mb-2" style={{ fontFamily: "'Lato', sans-serif" }}>
                        Address 1:
                      </label>
                      <input
                        type="text"
                        name="pickupAddress1"
                        value={formData.pickupAddress1}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium mb-2" style={{ fontFamily: "'Lato', sans-serif" }}>
                        Address 2:
                      </label>
                      <input
                        type="text"
                        name="pickupAddress2"
                        value={formData.pickupAddress2}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ fontFamily: "'Lato', sans-serif" }}>
                        State:
                      </label>
                      <input
                        type="text"
                        name="pickupState"
                        value={formData.pickupState}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ fontFamily: "'Lato', sans-serif" }}>
                        City:
                      </label>
                      <input
                        type="text"
                        name="pickupCity"
                        value={formData.pickupCity}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ fontFamily: "'Lato', sans-serif" }}>
                        Zip Code:
                      </label>
                      <input
                        type="text"
                        name="pickupZipCode"
                        value={formData.pickupZipCode}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium mb-2" style={{ fontFamily: "'Lato', sans-serif" }}>
                        Add instructions (optional):
                      </label>
                      <textarea
                        name="pickupInstructions"
                        value={formData.pickupInstructions}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Shipping Address */}
              {formData.repairType === 'shipping' && (
                <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
                  <h2
                    className="text-xl font-bold mb-6"
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      color: 'black',
                      textTransform: 'uppercase'
                    }}
                  >
                    Shipping Address
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium mb-2" style={{ fontFamily: "'Lato', sans-serif" }}>
                        Address 1:
                      </label>
                      <input
                        type="text"
                        name="shippingAddress1"
                        value={formData.shippingAddress1}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium mb-2" style={{ fontFamily: "'Lato', sans-serif" }}>
                        Address 2:
                      </label>
                      <input
                        type="text"
                        name="shippingAddress2"
                        value={formData.shippingAddress2}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ fontFamily: "'Lato', sans-serif" }}>
                        State:
                      </label>
                      <input
                        type="text"
                        name="shippingState"
                        value={formData.shippingState}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ fontFamily: "'Lato', sans-serif" }}>
                        City:
                      </label>
                      <input
                        type="text"
                        name="shippingCity"
                        value={formData.shippingCity}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ fontFamily: "'Lato', sans-serif" }}>
                        Zip Code:
                      </label>
                      <input
                        type="text"
                        name="shippingZipCode"
                        value={formData.shippingZipCode}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Appointment Details */}
              <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
                <h2
                  className="text-xl font-bold mb-6"
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    color: 'black',
                    textTransform: 'uppercase'
                  }}
                >
                  Appointment Detail
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ fontFamily: "'Lato', sans-serif" }}>
                      Location:
                    </label>
                    <select
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">- Select -</option>
                      <option value="sanjose">San Jose - Phone Hut Cell Phone Repair</option>
                      <option value="fremont">Fremont - Phone Hut Cell Phone Repair</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ fontFamily: "'Lato', sans-serif" }}>
                      Appointment Date:
                    </label>
                    <input
                      type="date"
                      name="appointmentDate"
                      value={formData.appointmentDate}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ fontFamily: "'Lato', sans-serif" }}>
                      Appointment Time:
                    </label>
                    <select
                      name="appointmentTime"
                      value={formData.appointmentTime}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">- Select -</option>
                      <option value="10:00">10:00</option>
                      <option value="11:00">11:00</option>
                      <option value="12:00">12:00</option>
                      <option value="13:00">13:00</option>
                      <option value="14:00">14:00</option>
                      <option value="15:00">15:00</option>
                      <option value="16:00">16:00</option>
                      <option value="17:00">17:00</option>
                      <option value="18:00">18:00</option>
                      <option value="19:00">19:00</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2" style={{ fontFamily: "'Lato', sans-serif" }}>
                      Extra remarks:
                    </label>
                    <textarea
                      name="extraRemarks"
                      value={formData.extraRemarks}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Information */}
              <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
                <h2
                  className="text-xl font-bold mb-6"
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    color: 'black',
                    textTransform: 'uppercase'
                  }}
                >
                  Payment Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2" style={{ fontFamily: "'Lato', sans-serif" }}>
                      Card Number:
                    </label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="1234 5678 9012 3456"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ fontFamily: "'Lato', sans-serif" }}>
                      Expiration Date:
                    </label>
                    <input
                      type="text"
                      name="expirationDate"
                      value={formData.expirationDate}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ fontFamily: "'Lato', sans-serif" }}>
                      CVV:
                    </label>
                    <input
                      type="text"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="123"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ fontFamily: "'Lato', sans-serif" }}>
                      Postal Code:
                    </label>
                    <input
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

                  {/* Submit Button */}
                  <div className="text-center">
                    <button
                      type="submit"
                      className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors uppercase"
                      style={{
                        fontFamily: "'Lato', sans-serif",
                        letterSpacing: '1px'
                      }}
                    >
                      Pay Submit Repair Request
                    </button>
                  </div>
                </form>
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
                    <span className="font-semibold">Phone:</span> 408-899-9521
                  </p>
                  <p>
                    <span className="font-semibold">Email:</span> capitol@gophonehut.com
                  </p>
                  <div className="mt-4">
                    <button
                      className="text-blue-600 hover:text-blue-800 underline font-medium"
                      style={{
                        fontFamily: "'Lato', sans-serif",
                        fontSize: '14px',
                        textTransform: 'capitalize',
                        fontWeight: '300'
                      }}
                    >
                      Get Directions
                    </button>
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
                        <span className="font-semibold">Phone:</span> 510-573-4482
                      </p>
                      <p>
                        <span className="font-semibold">Email:</span> fremont@gophonehut.com
                      </p>
                      <div className="mt-4">
                        <button
                          className="text-blue-600 hover:text-blue-800 underline font-medium"
                          style={{
                            fontFamily: "'Lato', sans-serif",
                            fontSize: '14px',
                            textTransform: 'capitalize',
                            fontWeight: '300'
                          }}
                        >
                          Get Directions
                        </button>
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
