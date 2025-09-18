'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function QuickRepairPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedItems, setSelectedItems] = useState({
    deviceType: '',
    brand: '',
    model: '',
    issue: '',
    color: '',
    storage: ''
  })

  const deviceTypes = [
    { id: 'phone', name: 'Phone', icon: '📱' },
    { id: 'tablet', name: 'Tablet', icon: '📱' },
    { id: 'smartwatch', name: 'Smartwatch', icon: '⌚' },
    { id: 'computer', name: 'Computer', icon: '💻' }
  ]

  const brands = {
    phone: [
      { id: 'apple', name: 'Apple', logo: '/apple.png' },
      { id: 'samsung', name: 'Samsung', logo: '/samsung.png' },
      { id: 'google', name: 'Google', logo: '/goolge.png' }
    ],
    tablet: [
      { id: 'apple', name: 'Apple', logo: '/apple.png' },
      { id: 'samsung', name: 'Samsung', logo: '/samsung.png' }
    ],
    smartwatch: [
      { id: 'apple', name: 'Apple', logo: '/apple.png' },
      { id: 'samsung', name: 'Samsung', logo: '/samsung.png' }
    ],
    computer: [
      { id: 'apple', name: 'Apple', logo: '/apple.png' }
    ]
  }

  const models = {
    'apple-phone': [
      { id: 'iphone-15', name: 'iPhone 15' },
      { id: 'iphone-14', name: 'iPhone 14' },
      { id: 'iphone-13', name: 'iPhone 13' },
      { id: 'iphone-12', name: 'iPhone 12' },
      { id: 'iphone-11', name: 'iPhone 11' }
    ],
    'samsung-phone': [
      { id: 'galaxy-s24', name: 'Galaxy S24' },
      { id: 'galaxy-s23', name: 'Galaxy S23' },
      { id: 'galaxy-s22', name: 'Galaxy S22' },
      { id: 'galaxy-s21', name: 'Galaxy S21' }
    ],
    'google-phone': [
      { id: 'pixel-8', name: 'Pixel 8' },
      { id: 'pixel-7', name: 'Pixel 7' },
      { id: 'pixel-6', name: 'Pixel 6' }
    ],
    'apple-tablet': [
      { id: 'ipad-pro-12-9', name: 'iPad Pro 12.9"' },
      { id: 'ipad-pro-11', name: 'iPad Pro 11"' },
      { id: 'ipad-air', name: 'iPad Air' },
      { id: 'ipad-mini', name: 'iPad Mini' }
    ],
    'samsung-tablet': [
      { id: 'galaxy-tab-s9', name: 'Galaxy Tab S9' },
      { id: 'galaxy-tab-s8', name: 'Galaxy Tab S8' },
      { id: 'galaxy-tab-a8', name: 'Galaxy Tab A8' }
    ],
    'apple-smartwatch': [
      { id: 'apple-watch-series-9', name: 'Apple Watch Series 9' },
      { id: 'apple-watch-series-8', name: 'Apple Watch Series 8' },
      { id: 'apple-watch-se', name: 'Apple Watch SE' }
    ],
    'samsung-smartwatch': [
      { id: 'galaxy-watch-6', name: 'Galaxy Watch 6' },
      { id: 'galaxy-watch-5', name: 'Galaxy Watch 5' },
      { id: 'galaxy-watch-4', name: 'Galaxy Watch 4' }
    ],
    'apple-computer': [
      { id: 'macbook-pro-16', name: 'MacBook Pro 16"' },
      { id: 'macbook-pro-14', name: 'MacBook Pro 14"' },
      { id: 'macbook-air-15', name: 'MacBook Air 15"' },
      { id: 'macbook-air-13', name: 'MacBook Air 13"' }
    ],
    'samsung-computer': [
      { id: 'galaxy-book-4', name: 'Galaxy Book 4' },
      { id: 'galaxy-book-3', name: 'Galaxy Book 3' },
      { id: 'galaxy-book-2', name: 'Galaxy Book 2' }
    ],
    'google-tablet': [
      { id: 'pixel-tablet', name: 'Pixel Tablet' }
    ],
    'google-smartwatch': [
      { id: 'pixel-watch-2', name: 'Pixel Watch 2' },
      { id: 'pixel-watch', name: 'Pixel Watch' }
    ],
    'google-computer': [
      { id: 'pixelbook-go', name: 'Pixelbook Go' },
      { id: 'pixelbook', name: 'Pixelbook' }
    ]
  }

  const issues = [
    { id: 'screen', name: 'Screen Repair', icon: '🖥️' },
    { id: 'battery', name: 'Battery Replacement', icon: '🔋' },
    { id: 'camera', name: 'Camera Repair', icon: '📷' },
    { id: 'charging', name: 'Charging Port', icon: '🔌' },
    { id: 'water', name: 'Water Damage', icon: '💧' },
    { id: 'software', name: 'Software Issue', icon: '⚙️' }
  ]

  const colors = [
    { id: 'black', name: 'Black', color: '#000000' },
    { id: 'white', name: 'White', color: '#FFFFFF' },
    { id: 'silver', name: 'Silver', color: '#C0C0C0' },
    { id: 'gold', name: 'Gold', color: '#FFD700' },
    { id: 'blue', name: 'Blue', color: '#0066CC' },
    { id: 'red', name: 'Red', color: '#CC0000' }
  ]

  const storageOptions = [
    { id: '64gb', name: '64GB' },
    { id: '128gb', name: '128GB' },
    { id: '256gb', name: '256GB' },
    { id: '512gb', name: '512GB' },
    { id: '1tb', name: '1TB' }
  ]

  const handleDeviceTypeSelect = (deviceType: string) => {
    setSelectedItems(prev => ({ ...prev, deviceType }))
    setCurrentStep(2)
  }

  const handleBrandSelect = (brand: string) => {
    setSelectedItems(prev => ({ ...prev, brand }))
    setCurrentStep(3)
  }

  const handleModelSelect = (model: string) => {
    setSelectedItems(prev => ({ ...prev, model }))
    setCurrentStep(4)
  }

  const handleIssueSelect = (issue: string) => {
    setSelectedItems(prev => ({ ...prev, issue }))
    setCurrentStep(5)
  }

  const handleColorSelect = (color: string) => {
    setSelectedItems(prev => ({ ...prev, color }))
    setCurrentStep(6)
  }

  const handleStorageSelect = (storage: string) => {
    setSelectedItems(prev => ({ ...prev, storage }))
    setCurrentStep(7)
  }

  const handleRepairNow = () => {
    // Navigate to appointment page with selected items
    const queryParams = new URLSearchParams(selectedItems).toString()
    window.location.href = `/repair/appointment?${queryParams}`
  }

  const resetFlow = () => {
    setCurrentStep(1)
    setSelectedItems({
      deviceType: '',
      brand: '',
      model: '',
      issue: '',
      color: '',
      storage: ''
    })
  }

  const getCurrentBrands = () => {
    return brands[selectedItems.deviceType as keyof typeof brands] || []
  }

  const getCurrentModels = () => {
    // Show all models for the selected brand, regardless of device type
    const allModels: any[] = []
    
    // Get all models for the selected brand
    Object.keys(models).forEach(key => {
      const brand = key.split('-')[0] // Extract brand from key like 'apple-phone'
      if (brand === selectedItems.brand) {
        allModels.push(...models[key as keyof typeof models])
      }
    })
    
    console.log('Selected brand:', selectedItems.brand)
    console.log('Available model keys:', Object.keys(models))
    console.log('Found models:', allModels)
    
    return allModels
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
              <a href="/quick-repair" className="font-lato font-normal text-black hover:text-gray-600 transition-colors duration-200">
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

      {/* Main Content */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          {/* Heading */}
          <h1
            className="font-raleway font-bold text-2xl sm:text-3xl md:text-4xl mb-8 text-center mobile-heading-26px"
            style={{
              fontFamily: "'Raleway', sans-serif",
              color: '#233D63',
              textTransform: 'capitalize',
              letterSpacing: '1px',
              fontWeight: '700'
            }}
          >
            Quick Repair
          </h1>

          {/* Content */}
          <div className="text-center mb-12">
            <p
              className="mb-6"
              style={{
                fontSize: '16px',
                lineHeight: '1.5',
                color: 'black',
                fontFamily: "'Lato', sans-serif",
                fontWeight: '500'
              }}
            >
              Although our website is easy and simple to use, we have made it even easier to book repair services in less time than it takes to down a cuppa! Our customer service chat bot will ask you just a couple of questions and get you the repair price and information you need in 60 seconds or less.
            </p>
            
            <div className="flex items-center justify-center gap-4 mb-8">
              <span
                className="font-lato font-semibold"
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: '18px',
                  color: '#233D63',
                  fontWeight: '600'
                }}
              >
                Phone Hut
              </span>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <span
                className="font-lato"
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: '16px',
                  color: '#666'
                }}
              >
                I'm Phone Hut. I am happy to help you with the instant repair
              </span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-gray-600">Step {currentStep} of 7</span>
              <span className="text-sm font-medium text-gray-600">{Math.round((currentStep / 7) * 100)}% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / 7) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Step Content */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            {currentStep === 1 && (
              <div>
                <h2
                  className="font-raleway font-bold text-2xl sm:text-3xl md:text-4xl mb-8 text-center mobile-heading-26px"
                  style={{
                    fontFamily: "'Raleway', sans-serif",
                    color: '#233D63',
                    textTransform: 'capitalize',
                    letterSpacing: '1px',
                    fontWeight: '700'
                  }}
                >
                  What device needs repair?
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {deviceTypes.map((device) => (
                    <button
                      key={device.id}
                      onClick={() => handleDeviceTypeSelect(device.id)}
                      className="p-6 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 text-center"
                    >
                      <div className="text-4xl mb-4">{device.icon}</div>
                      <div
                        className="font-lato font-semibold"
                        style={{
                          fontFamily: "'Lato', sans-serif",
                          fontSize: '16px',
                          color: '#333',
                          fontWeight: '600'
                        }}
                      >
                        {device.name}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div>
                <h2
                  className="font-raleway font-bold text-2xl sm:text-3xl md:text-4xl mb-8 text-center mobile-heading-26px"
                  style={{
                    fontFamily: "'Raleway', sans-serif",
                    color: '#233D63',
                    textTransform: 'capitalize',
                    letterSpacing: '1px',
                    fontWeight: '700'
                  }}
                >
                  Select your brand
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {getCurrentBrands().map((brand) => (
                    <button
                      key={brand.id}
                      onClick={() => handleBrandSelect(brand.id)}
                      className="p-6 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 text-center"
                    >
                      <img src={brand.logo} alt={brand.name} className="h-12 mx-auto mb-4" />
                      <div
                        className="font-lato font-semibold"
                        style={{
                          fontFamily: "'Lato', sans-serif",
                          fontSize: '16px',
                          color: '#333',
                          fontWeight: '600'
                        }}
                      >
                        {brand.name}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div>
                <h2
                  className="font-raleway font-bold text-2xl sm:text-3xl md:text-4xl mb-8 text-center mobile-heading-26px"
                  style={{
                    fontFamily: "'Raleway', sans-serif",
                    color: '#233D63',
                    textTransform: 'capitalize',
                    letterSpacing: '1px',
                    fontWeight: '700'
                  }}
                >
                  Select your model
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {getCurrentModels().length > 0 ? (
                    getCurrentModels().map((model) => (
                      <button
                        key={model.id}
                        onClick={() => handleModelSelect(model.id)}
                        className="p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 text-left"
                      >
                        <div
                          className="font-lato font-semibold"
                          style={{
                            fontFamily: "'Lato', sans-serif",
                            fontSize: '16px',
                            color: '#333',
                            fontWeight: '600'
                          }}
                        >
                          {model.name}
                        </div>
                      </button>
                    ))
                  ) : (
                    <div className="col-span-2 text-center py-8">
                      <p className="text-gray-500">No models found for {selectedItems.brand}</p>
                      <button
                        onClick={() => setCurrentStep(2)}
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                      >
                        Go Back to Brand Selection
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div>
                <h2
                  className="font-raleway font-bold text-2xl sm:text-3xl md:text-4xl mb-8 text-center mobile-heading-26px"
                  style={{
                    fontFamily: "'Raleway', sans-serif",
                    color: '#233D63',
                    textTransform: 'capitalize',
                    letterSpacing: '1px',
                    fontWeight: '700'
                  }}
                >
                  What's the issue?
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {issues.map((issue) => (
                    <button
                      key={issue.id}
                      onClick={() => handleIssueSelect(issue.id)}
                      className="p-6 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 text-center"
                    >
                      <div className="text-4xl mb-4">{issue.icon}</div>
                      <div
                        className="font-lato font-semibold"
                        style={{
                          fontFamily: "'Lato', sans-serif",
                          fontSize: '16px',
                          color: '#333',
                          fontWeight: '600'
                        }}
                      >
                        {issue.name}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 5 && (
              <div>
                <h2
                  className="font-raleway font-bold text-2xl sm:text-3xl md:text-4xl mb-8 text-center mobile-heading-26px"
                  style={{
                    fontFamily: "'Raleway', sans-serif",
                    color: '#233D63',
                    textTransform: 'capitalize',
                    letterSpacing: '1px',
                    fontWeight: '700'
                  }}
                >
                  Select color
                </h2>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                  {colors.map((color) => (
                    <button
                      key={color.id}
                      onClick={() => handleColorSelect(color.id)}
                      className="p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 text-center"
                    >
                      <div 
                        className="w-8 h-8 rounded-full mx-auto mb-2 border-2 border-gray-300"
                        style={{ backgroundColor: color.color }}
                      ></div>
                      <div
                        className="font-lato font-semibold text-sm"
                        style={{
                          fontFamily: "'Lato', sans-serif",
                          color: '#333',
                          fontWeight: '600'
                        }}
                      >
                        {color.name}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 6 && (
              <div>
                <h2
                  className="font-raleway font-bold text-2xl sm:text-3xl md:text-4xl mb-8 text-center mobile-heading-26px"
                  style={{
                    fontFamily: "'Raleway', sans-serif",
                    color: '#233D63',
                    textTransform: 'capitalize',
                    letterSpacing: '1px',
                    fontWeight: '700'
                  }}
                >
                  Select storage capacity
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {storageOptions.map((storage) => (
                    <button
                      key={storage.id}
                      onClick={() => handleStorageSelect(storage.id)}
                      className="p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 text-center"
                    >
                      <div
                        className="font-lato font-semibold"
                        style={{
                          fontFamily: "'Lato', sans-serif",
                          fontSize: '16px',
                          color: '#333',
                          fontWeight: '600'
                        }}
                      >
                        {storage.name}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 7 && (
              <div>
                <h2
                  className="font-raleway font-bold text-2xl sm:text-3xl md:text-4xl mb-8 text-center mobile-heading-26px"
                  style={{
                    fontFamily: "'Raleway', sans-serif",
                    color: '#233D63',
                    textTransform: 'capitalize',
                    letterSpacing: '1px',
                    fontWeight: '700'
                  }}
                >
                  Review your selection
                </h2>
                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="font-semibold">Device Type:</span>
                      <span className="capitalize">{selectedItems.deviceType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Brand:</span>
                      <span className="capitalize">{selectedItems.brand}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Model:</span>
                      <span className="capitalize">{selectedItems.model}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Issue:</span>
                      <span className="capitalize">{selectedItems.issue}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Color:</span>
                      <span className="capitalize">{selectedItems.color}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Storage:</span>
                      <span className="uppercase">{selectedItems.storage}</span>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <button
                    onClick={handleRepairNow}
                    className="px-8 py-4 rounded-full text-white font-bold uppercase transition-colors duration-200 hover:opacity-90"
                    style={{
                      backgroundColor: '#6d6e71',
                      fontFamily: "'Lato', sans-serif",
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      borderRadius: '50px'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#0056b3'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#6d6e71'
                    }}
                  >
                    Repair Now
                  </button>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            {currentStep > 1 && currentStep < 7 && (
              <div className="flex justify-between mt-8">
                <button
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  Back
                </button>
                <button
                  onClick={resetFlow}
                  className="px-6 py-3 text-gray-600 hover:text-gray-800 transition-colors duration-200"
                >
                  Start Over
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
