'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function SignupPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const emailParam = searchParams.get('email')
    if (emailParam) {
      setFormData(prev => ({
        ...prev,
        email: decodeURIComponent(emailParam)
      }))
    }
  }, [searchParams])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Signup form submitted:', formData)
  }

  return (
    <main className="min-h-screen">
      {/* Top Header Section */}
      <div className="w-full" style={{ backgroundColor: '#f2f2f2' }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-2">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
            {/* Left side - Contact Information */}
            <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm font-lato font-normal text-black">
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
            <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm">
              <a href="/quick-repair" className="font-lato font-normal text-black hover:text-gray-600 transition-colors duration-200">
                Quick Repair
              </a>
              <a href="/locations" className="font-lato font-normal text-black hover:text-gray-600 transition-colors duration-200">
                Locations
              </a>
              <a href="/order-track" className="font-lato font-normal text-black hover:text-gray-600 transition-colors duration-200">
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
                <div className="relative group">
                  <a href="/repairs" className="font-raleway font-bold uppercase transition-colors duration-200" style={{ fontSize: '15px', letterSpacing: '1px', color: '#0e72d2' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#6d6e71'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#0e72d2'}>
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

      {/* Signup Form Section */}
      <section 
        className="relative py-16 md:py-20"
        style={{ 
          backgroundImage: 'url(/inner_pages_bg_image.png)', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="relative max-w-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl p-4 sm:p-6 md:p-8 lg:p-10">
            {/* Form Header */}
            <div className="text-center mb-8">
              <h1
                className="font-raleway font-bold text-2xl sm:text-3xl md:text-4xl mb-4 mobile-signup-heading-26px"
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  color: '#233D63',
                  textTransform: 'capitalize',
                  letterSpacing: '1px',
                  fontWeight: '700'
                }}
              >
                Sign Up
              </h1>
              <p
                className="text-lg md:text-xl"
                style={{
                  fontSize: '16px',
                  lineHeight: '1.5',
                  color: 'black',
                  fontFamily: "'Lato', sans-serif",
                  fontWeight: '500'
                }}
              >
                Register for an Account
              </p>
            </div>

            {/* Signup Form */}
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {/* First Name */}
                <div>
                  <label
                    htmlFor="firstName"
                    className="block mb-2"
                    style={{
                      fontSize: '16px',
                      lineHeight: '1.5',
                      color: 'black',
                      fontFamily: "'Lato', sans-serif",
                      fontWeight: '500'
                    }}
                  >
                    First Name:
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    style={{
                      fontSize: '16px',
                      fontFamily: "'Lato', sans-serif"
                    }}
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label
                    htmlFor="lastName"
                    className="block mb-2"
                    style={{
                      fontSize: '16px',
                      lineHeight: '1.5',
                      color: 'black',
                      fontFamily: "'Lato', sans-serif",
                      fontWeight: '500'
                    }}
                  >
                    Last Name:
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    style={{
                      fontSize: '16px',
                      fontFamily: "'Lato', sans-serif"
                    }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block mb-2"
                    style={{
                      fontSize: '16px',
                      lineHeight: '1.5',
                      color: 'black',
                      fontFamily: "'Lato', sans-serif",
                      fontWeight: '500'
                    }}
                  >
                    Phone:
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    style={{
                      fontSize: '16px',
                      fontFamily: "'Lato', sans-serif"
                    }}
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2"
                    style={{
                      fontSize: '16px',
                      lineHeight: '1.5',
                      color: 'black',
                      fontFamily: "'Lato', sans-serif",
                      fontWeight: '500'
                    }}
                  >
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    style={{
                      fontSize: '16px',
                      fontFamily: "'Lato', sans-serif"
                    }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {/* Password */}
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2"
                    style={{
                      fontSize: '16px',
                      lineHeight: '1.5',
                      color: 'black',
                      fontFamily: "'Lato', sans-serif",
                      fontWeight: '500'
                    }}
                  >
                    Password:
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    style={{
                      fontSize: '16px',
                      fontFamily: "'Lato', sans-serif"
                    }}
                  />
                </div>

                {/* Confirm Password */}
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block mb-2"
                    style={{
                      fontSize: '16px',
                      lineHeight: '1.5',
                      color: 'black',
                      fontFamily: "'Lato', sans-serif",
                      fontWeight: '500'
                    }}
                  >
                    Confirm Password:
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    style={{
                      fontSize: '16px',
                      fontFamily: "'Lato', sans-serif"
                    }}
                  />
                </div>
              </div>

              {/* Signup Button */}
              <div className="text-center pt-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-colors duration-200"
                  style={{
                    backgroundColor: '#6d6e71',
                    color: 'white',
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#0056b3'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#6d6e71'
                  }}
                >
                  Signup
                </button>
              </div>

              {/* Login Link */}
              <div className="text-center pt-4">
                <p
                  style={{
                    fontSize: '16px',
                    lineHeight: '1.5',
                    color: 'black',
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: '500'
                  }}
                >
                  Are you already Member?{' '}
                  <a
                    href="/login"
                    className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200"
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      fontWeight: '500'
                    }}
                  >
                    click here to login
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}