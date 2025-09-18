'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
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
    console.log('Login form submitted:', formData)
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
              <a href="/quick-repair" className="font-lato font-normal transition-colors duration-200" style={{ color: '#007DD2' }} onMouseEnter={(e) => e.target.style.color = '#71af43'} onMouseLeave={(e) => e.target.style.color = '#007DD2'}>
                Quick Repair
              </a>
              <a href="/locations" className="font-lato font-normal transition-colors duration-200" style={{ color: '#007DD2' }} onMouseEnter={(e) => e.target.style.color = '#71af43'} onMouseLeave={(e) => e.target.style.color = '#007DD2'}>
                Locations
              </a>
              <a href="/order-track" className="font-lato font-normal transition-colors duration-200" style={{ color: '#007DD2' }} onMouseEnter={(e) => e.target.style.color = '#71af43'} onMouseLeave={(e) => e.target.style.color = '#007DD2'}>
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

      {/* Login Form Section */}
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
                Login
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
                Login to your Account
              </p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
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

              {/* Login Button */}
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
                  Login
                </button>
              </div>

              {/* Forgot Password Link */}
              <div className="text-center pt-2">
                <a
                  href="/forgot-password"
                  className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200"
                  style={{
                    fontSize: '16px',
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: '500'
                  }}
                >
                  Forgot Password?
                </a>
              </div>

              {/* Social Login Buttons */}
              <div className="pt-6">
                <div className="text-center mb-4">
                  <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                    {/* Facebook Login Button */}
                    <button
                      type="button"
                      className="flex items-center justify-center px-4 sm:px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                      style={{
                        fontFamily: "'Lato', sans-serif",
                        fontWeight: '500'
                      }}
                    >
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      <span className="text-sm sm:text-base">Facebook</span>
                    </button>

                    {/* Google Login Button */}
                    <button
                      type="button"
                      className="flex items-center justify-center px-4 sm:px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
                      style={{
                        fontFamily: "'Lato', sans-serif",
                        fontWeight: '500'
                      }}
                    >
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                      <span className="text-sm sm:text-base">Google</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Signup Link */}
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
                  Are you already not Member?{' '}
                  <a
                    href="/signup"
                    className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200"
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      fontWeight: '500'
                    }}
                  >
                    click here to Signup
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
