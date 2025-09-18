'use client'

import React, { useState } from 'react'

interface AppointmentPopupProps {
  isOpen: boolean
  onClose: () => void
}

const AppointmentPopup: React.FC<AppointmentPopupProps> = ({ isOpen, onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedBrand, setSelectedBrand] = useState('')
  const [selectedModel, setSelectedModel] = useState('')
  const [selectedFault, setSelectedFault] = useState('')
  const [couponCode, setCouponCode] = useState('')

  // Device models data
  const deviceModels = {
    phone: {
      apple: [
        'iPhone 14 Pro Max', 'iPhone 14 Pro', 'iPhone 14 Plus', 'iPhone 14',
        'iPhone 13 Pro Max', 'iPhone 13 Pro', 'iPhone 13', 'iPhone 13 Mini',
        'iPhone 12 Pro Max', 'iPhone 12 Pro', 'iPhone 12', 'iPhone 12 Mini',
        'iPhone 11 Pro Max', 'iPhone 11 Pro', 'iPhone 11', 'iPhone XS Max',
        'iPhone XS', 'iPhone XR', 'iPhone X', 'iPhone SE (2020)',
        'iPhone 8 Plus', 'iPhone 8', 'iPhone 7 Plus', 'iPhone 7',
        'iPhone 6S Plus', 'iPhone 6S', 'iPhone 6 Plus', 'iPhone SE (2016)',
        'iPhone 6', 'iPhone 5S', 'iPhone 5C', 'iPhone 5', 'iPhone 4S', 'iPhone 2G'
      ],
      samsung: [
        'Galaxy S10 Plus', 'Galaxy S10', 'Galaxy S10e', 'Galaxy S9 Plus', 'Galaxy S9',
        'Galaxy S8 Plus', 'Galaxy S8', 'Galaxy S7 Edge', 'Galaxy S7', 'Galaxy S20 Ultra 5G',
        'Galaxy S20 Plus 5G', 'Galaxy S20 5G', 'Galaxy S6 Edge Plus', 'Galaxy S6 Edge',
        'Galaxy S6', 'Galaxy S5', 'Galaxy S4', 'Galaxy S3', 'Galaxy S', 'Galaxy S Duos',
        'Galaxy S 4G', 'Galaxy S Blaze 4G', 'Galaxy S Relay', 'Galaxy S3 Mini',
        'Galaxy S4 Active', 'Galaxy S4 Google Play Edition', 'Galaxy S4 Mini', 'Galaxy S4 Zoom',
        'Galaxy S5 Active', 'Galaxy S5 Duos', 'Galaxy S5 Mini Duos', 'Galaxy S5 Mini',
        'Galaxy S5 Neo', 'Galaxy S5 Sport', 'Galaxy S5 Zoom', 'Galaxy S6 Active',
        'Galaxy S6 Duos', 'Galaxy S7 Active', 'Galaxy S8 Active', 'Galaxy S9 Plus Duos',
        'Galaxy S10 5G', 'Galaxy S10 Lite', 'Galaxy Note 20 Ultra 5G', 'Galaxy Note 20 5G',
        'Galaxy Note 10 Plus 5G', 'Galaxy Note 10 Plus', 'Galaxy Note 10', 'Galaxy Note 9',
        'Galaxy Note 8', 'Galaxy Note 5', 'Galaxy Note 4', 'Galaxy Note 3',
        'Galaxy Note 2', 'Galaxy Note', 'Galaxy Note Edge', 'Galaxy Fold',
        'Galaxy Z Flip 5G', 'Galaxy Z Flip Thom Browne Edition', 'Galaxy Z Flip', 'Galaxy A71',
        'Galaxy A70', 'Galaxy A51', 'Galaxy A50', 'Galaxy A30s', 'Galaxy A30', 'Galaxy A20s',
        'Galaxy A20', 'Galaxy A11', 'Galaxy A10e', 'Galaxy A10', 'Galaxy A01', 'Galaxy A9 2018',
        'Galaxy A9', 'Galaxy A8 Plus 2018', 'Galaxy A8 2018', 'Galaxy A8 2016', 'Galaxy A8 Duos',
        'Galaxy A8', 'Galaxy A7 2018', 'Galaxy A7 2017', 'Galaxy A7', 'Galaxy A6 2018',
        'Galaxy A5 2017', 'Galaxy A5 Duos', 'Galaxy A5', 'Galaxy A3 2017', 'Galaxy A3 Duos',
        'Galaxy A3', 'Galaxy J7 V', 'Galaxy J7 Star', 'Galaxy J7 Refine', 'Galaxy J7 Perx',
        'Galaxy J7 Neo', 'Galaxy J7 Max', 'Galaxy J7 2018', 'Galaxy J7 2017', 'Galaxy J7 Pro',
        'Galaxy J7 Prime', 'Galaxy J7', 'Galaxy J5 Pro', 'Galaxy J5 Prime', 'Galaxy J5 2017',
        'Galaxy J5 2016', 'Galaxy J5', 'Galaxy J3 V', 'Galaxy J3 Star', 'Galaxy J3 Prime',
        'Galaxy J3 Mission', 'Galaxy J3 Emerge', 'Galaxy J3 Achieve', 'Galaxy J3 2018',
        'Galaxy J3 2017', 'Galaxy J3', 'Galaxy J2 Prime', 'Galaxy J2', 'Galaxy J1',
        'Galaxy M20', 'Galaxy Mega 6.3', 'Galaxy Mega 2', 'Galaxy Mega', 'Galaxy Mini',
        'Galaxy Nexus', 'Galaxy On8', 'Galaxy On7', 'Galaxy On5', 'Galaxy Rugby Pro',
        'Galaxy C9 Pro', 'Galaxy C7 Pro', 'Galaxy C7 2017', 'Galaxy C7 Duos', 'Galaxy C7',
        'Galaxy E7', 'Galaxy Grand Prime Duos', 'Galaxy Grand Prime', 'Galaxy Grand 2',
        'Galaxy Grand', 'Galaxy Fit', 'Galaxy Gio', 'Galaxy Halo', 'Galaxy K Zoom',
        'Galaxy Light', 'Galaxy Core Prime', 'Galaxy Express Prime 3', 'Galaxy Express Prime 2',
        'Galaxy Express 3', 'Galaxy Express', 'Galaxy Alpha', 'Galaxy Amp 2', 'Galaxy Amp Prime 3',
        'Galaxy Amp Prime', 'Galaxy Avant', 'Galaxy Ace 4 Lite', 'Galaxy Ace 4', 'Galaxy Ace',
        'Galaxy Y', 'Galaxy Young', 'Galaxy Spica', 'Galaxy Stratosphere 2', 'Galaxy Xcover 2',
        'Google Nexus S', 'Gravity 2', 'Gravity 3', 'Gravity Q', 'Gravity Smart', 'Gravity Touch',
        'Gravity Txt', 'Highlight', 'Impression', 'Infuse 4G', 'Innov8', 'Juke', 'Matrix', 'Memoir',
        'Omnia 2', 'Omnia 7', 'Omnia HD', 'Omnia Pro 4', 'Omnia', 'Pixon', 'Rugby 3', 'Rugby 4',
        'Rugby Smart', 'S8000 Jet', 'S8300 UltraTouch', 'Serenata Bang and Olufsen', 'Serene',
        'Solstice 2', 'Solstice', 'Star', 'Stripe', 'Sync', 'Vibrant', 'Wave', 'B3310',
        'B7620 Giorgio Armani', 'Captivate Glide', 'Comeback', 'Continuum', 'Corby Plus', 'Corby',
        'Dart', 'Evergreen', 'Fight 2', 'Fight', 'Focus 2', 'Focus Flash', 'Focus S', 'GH A197',
        'GH C225', 'GH F480 Tocco', 'GH T109', 'GH T119', 'GH T139', 'GH T159', 'GH T209',
        'GH T219', 'GH T229', 'GH T239', 'GH T249'
      ],
      google: [
        'Pixel 4 XL', 'Pixel 4', 'Pixel 3 XL', 'Pixel 4a', 'Pixel 3', 'Pixel 3a XL',
        'Pixel 3a', 'Pixel 2 XL', 'Pixel 2', 'Pixel XL', 'Pixel'
      ]
    },
    tablet: {
      apple: [
        'iPad Pro 12.9" (2020)', 'iPad Pro 12.9" (2018)', 'iPad Pro 12.9" (2017)', 'iPad Pro 12.9"',
        'iPad Pro 11" (2020)', 'iPad Pro 11" (2018)', 'iPad Pro 10.5"', 'iPad Pro 9.7"',
        'iPad Air', 'iPad Air 2', 'iPad (2018)', 'iPad (2017)', 'iPad (2019)', 'iPad',
        'iPad 2', 'iPad 3', 'iPad 4', 'iPad Mini', 'iPad Mini 2', 'iPad Mini 3',
        'iPad Mini 4', 'iPad Mini (2019)'
      ],
      samsung: [
        'Galaxy Tab S6 Lite', 'Galaxy Tab S5e', 'Galaxy Tab S4 10.5', 'Galaxy Tab S3 9.7',
        'Galaxy Tab S2 9.7', 'Galaxy Tab S2 8.0', 'Galaxy Tab S6', 'Galaxy Tab S 10.5',
        'Galaxy Tab S 8.4', 'Galaxy Tab A 10.1 (2019)', 'Galaxy Tab A 10.1 (2016)',
        'Galaxy Tab A 10.5 (2018)', 'Galaxy Tab A 9.7', 'Galaxy Tab A 8.0 (2019)',
        'Galaxy Tab A 8.0 (2018)', 'Galaxy Tab A 8.0 (2017)', 'Galaxy Tab A 8.0',
        'Galaxy Tab A 7.0 (2016)', 'Galaxy Tab E 9.6', 'Galaxy Tab E 8.0',
        'Galaxy Tab Pro 12.2', 'Galaxy Tab Pro 10.1', 'Galaxy Tab Pro 8.4', 'Galaxy Tab Pro S',
        'Galaxy Tab 8.9', 'Galaxy Tab 7.7', 'Galaxy Tab 7.0 Plus', 'Galaxy Tab 7.0',
        'Galaxy Tab 4 10.1', 'Galaxy Tab 4 8.0', 'Galaxy Tab 4 7.0', 'Galaxy Tab 4 Nook 7.0',
        'Galaxy Tab 3 10.1', 'Galaxy Tab 3 8.0', 'Galaxy Tab 3 7.0 Kids', 'Galaxy Tab 3 7.0 Garnet Red',
        'Galaxy Tab 3 Lite 7.0', 'Galaxy Tab 2 10.1', 'Galaxy Tab 2 7.0', 'Galaxy Tab 10.1',
        'Galaxy Note 10.1 (2014 Edition)', 'Galaxy Note 10.1', 'Galaxy Note 8.0', 'Galaxy Note Pro',
        'Galaxy View', 'Galaxy View 2', 'Galaxy J Max', 'ATIV Tab 3', 'ATIV Tab 5', 'ATIV Tab 7',
        'ATIV Tab Q', 'ATIV Tab', 'Google Nexus 10', 'Q1 Ultra', 'Q1'
      ]
    },
    smartwatch: {
      apple: [
        'Watch Series 5 44mm Ceramic GPS And Cellular', 'Watch Series 5 44mm Ceramic GPS Only',
        'Watch Series 5 40mm Ceramic GPS And Cellular', 'Watch Series 5 40mm Ceramic GPS Only',
        'Watch Series 5 40mm Titanium GPS And Cellular', 'Watch Series 5 44mm Titanium GPS And Cellular',
        'Watch Series 5 44mm Titanium GPS Only', 'Watch Series 5 40mm Titanium GPS Only',
        'Watch Series 5 44mm Stainless Steel GPS Only', 'Watch Series 5 44mm Stainless Steel GPS And Cellular',
        'Watch Series 5 40mm Stainless Steel GPS Only', 'Watch Series 5 40mm Stainless Steel GPS And Cellular',
        'Watch Series 5 44mm Aluminium GPS And Cellular', 'Watch Series 5 40mm Aluminium GPS And Cellular',
        'Watch Nike Plus Series 5 44mm GPS And Cellular', 'Watch Series 5 44mm Aluminium GPS Only',
        'Watch Series 5 40mm Aluminium GPS Only', 'Watch Nike Plus Series 5 40mm GPS And Cellular',
        'Watch Nike Plus Series 5 44mm GPS Only', 'Watch Hermes Series 3 42mm GPS And Cellular',
        'Watch Nike Plus Series 5 40mm GPS Only', 'Watch Hermes Series 3 38mm GPS And Cellular',
        'Watch Series 4 44mm Stainless Steel GPS And Cellular', 'Watch Series 4 44mm Stainless Steel GPS Only',
        'Watch Nike Plus Series 4 44mm GPS And Cellular', 'Watch Nike Plus Series 4 40mm GPS And Cellular',
        'Watch Series 4 40mm Stainless Steel GPS Only', 'Watch Series 4 40mm Stainless Steel GPS And Cellular',
        'Watch Series 4 44mm Aluminium GPS And Cellular', 'Watch Nike Plus Series 4 44mm GPS Only',
        'Watch Hermes 1st Gen 42mm', 'Watch Edition Series 3 42mm GPS And Cellular',
        'Watch Series 4 40mm Aluminium GPS And Cellular', 'Watch Series 4 44mm Aluminium GPS Only',
        'Watch Series 4 40mm Aluminium GPS Only', 'Watch Nike Plus Series 4 40mm GPS Only',
        'Watch Hermes 1st Gen 38mm', 'Watch Hermes Series 2 42mm', 'Watch Edition Series 3 38mm GPS And Cellular',
        'Watch Series 3 42mm Stainless Steel GPS And Cellular', 'Watch Hermes Series 2 38mm',
        'Watch Series 3 42mm Aluminium GPS And Cellular', 'Watch Nike Plus Series 3 42mm GPS And Cellular',
        'Watch Series 3 38mm Stainless Steel GPS And Cellular', 'Watch Series 3 38mm Aluminium GPS And Cellular',
        'Watch Series 3 42mm Aluminium GPS Only', 'Watch Series 2 42mm Stainless Steel',
        'Watch Series 3 42mm Stainless Steel GPS Only', 'Watch Nike Plus Series 3 38mm GPS And Cellular',
        'Watch Series 3 38mm Aluminium GPS Only', 'Watch Series 3 38mm Stainless Steel GPS Only',
        'Watch Series 2 42mm Aluminium', 'Watch Nike Plus Series 3 42mm GPS Only', 'Watch Series 2 38mm Stainless Steel',
        'Watch Nike Plus Series 2 42mm', 'Watch Nike Plus Series 3 38mm GPS Only', 'Watch Series 2 38mm Aluminium',
        'Watch Nike Plus Series 2 38mm', 'Watch Sport Series 1 42mm', 'Watch 1st Gen 42mm',
        'Watch Sport Series 1 38mm', 'Watch Sport 1st Gen 42mm', 'Watch 1st Gen 38mm', 'Watch Sport 1st Gen 38mm'
      ],
      samsung: [
        'Galaxy Watch', 'Galaxy Watch Active', 'Galaxy Watch Active 2', 'Galaxy Gear Sport',
        'Galaxy Gear S3', 'Galaxy Gear S2', 'Galaxy Gear S', 'Galaxy Gear Live',
        'Galaxy Gear Fit2 Pro', 'Galaxy Gear Fit2', 'Galaxy Gear Fit', 'Galaxy Gear 2',
        'Galaxy Gear 2 Neo', 'Samsung Smartwatch'
      ]
    },
    computer: {
      apple: [
        'MacBook Pro 16-inch (2019)', 'MacBook Pro 15-inch (2019)', 'MacBook Pro 15-inch (2018)',
        'MacBook Pro 15-inch (2017)', 'MacBook Pro 15-inch (2016)', 'MacBook Pro 15-inch (2015)',
        'MacBook Pro 15-inch (2014)', 'MacBook Pro 15-inch (2013)', 'MacBook Pro 15-inch (2012)',
        'MacBook Pro 15-inch (2011)', 'MacBook Pro 15-inch (2010)', 'MacBook Pro 15-inch (2009)',
        'MacBook Pro 15-inch (2008)', 'MacBook Pro 15-inch (2007)', 'MacBook Pro 15-inch (2006)',
        'MacBook Pro 17-inch (2011)', 'MacBook Pro 17-inch (2010)', 'MacBook Pro 17-inch (2009)',
        'MacBook Pro 17-inch (2008)', 'MacBook Pro 17-inch (2007)', 'MacBook Pro 17-inch (2006)',
        'MacBook Pro 13-inch (2020)', 'MacBook Pro 13-inch (2019)', 'MacBook Pro 13-inch (2018)',
        'MacBook Pro 13-inch (2017)', 'MacBook Pro 13-inch (2016)', 'MacBook Pro 13-inch (2015)',
        'MacBook Pro 13-inch (2014)', 'MacBook Pro 13-inch (2013)', 'MacBook Pro 13-inch (2012)',
        'MacBook Pro 13-inch (2011)', 'MacBook Pro 13-inch (2010)', 'MacBook Pro 13-inch (2009)',
        'MacBook Air 13-inch (2020)', 'MacBook Air 13-inch (2019)', 'MacBook Air 13-inch (2018)',
        'MacBook Air 13-inch (2017)', 'MacBook Air 13-inch (2015)', 'MacBook Air 13-inch (2014)',
        'MacBook Air 13-inch (2013)', 'MacBook Air 13-inch (2012)', 'MacBook Air 13-inch (2011)',
        'MacBook Air 13-inch (2010)', 'MacBook Air 13-inch (2009)', 'MacBook Air 13-inch (2008)',
        'MacBook Air 11-inch (2015)', 'MacBook Air 11-inch (2014)', 'MacBook Air 11-inch (2013)',
        'MacBook Air 11-inch (2012)', 'MacBook Air 11-inch (2011)', 'MacBook Air 11-inch (2010)',
        'MacBook 12-inch (2017)', 'MacBook 12-inch (2016)', 'MacBook 12-inch (2015)',
        'MacBook 13-inch (2010)', 'MacBook 13-inch (2009)', 'MacBook 13-inch (2008)',
        'MacBook 13-inch (2007)', 'MacBook 13-inch (2006)', 'iMac 27-inch (2020)',
        'iMac 27-inch (2019)', 'iMac 27-inch (2017)', 'iMac 27-inch (2015)', 'iMac 27-inch (2014)',
        'iMac 27-inch (2013)', 'iMac 27-inch (2012)', 'iMac 27-inch (2011)', 'iMac 27-inch (2010)',
        'iMac 27-inch (2009)', 'iMac 21.5-inch (2019)', 'iMac 21.5-inch (2017)', 'iMac 21.5-inch (2015)',
        'iMac 21.5-inch (2014)', 'iMac 21.5-inch (2013)', 'iMac 21.5-inch (2012)', 'iMac 21.5-inch (2011)',
        'iMac 21.5-inch (2010)', 'iMac 21.5-inch (2009)', 'iMac 24-inch (2009)', 'iMac 24-inch (2008)',
        'iMac 24-inch (2007)', 'iMac 20-inch (2009)', 'iMac 20-inch (2008)', 'iMac 20-inch (2007)',
        'iMac Pro 27-inch', 'Mac Pro Rack (2019)', 'Mac Pro (2019)', 'Mac Pro (2013)',
        'Mac Pro (2012)', 'Mac Pro (2010)', 'Mac Pro (2009)', 'Mac Pro (2008)', 'Mac Pro (2007)',
        'Mac Pro (2006)', 'Mac Mini (2018)', 'Mac Mini (2014)', 'Mac Mini (2012)', 'Mac Mini (2011)',
        'Mac Mini (2010)', 'Mac Mini (2009)', 'Mac Mini (2007)', 'Apple Computer'
      ]
    }
  }

  // Get available brands based on selected category
  const getAvailableBrands = () => {
    if (!selectedCategory) return []
    return Object.keys(deviceModels[selectedCategory as keyof typeof deviceModels] || {})
  }

  // Get available models based on selected category and brand
  const getAvailableModels = () => {
    if (!selectedCategory || !selectedBrand) return []
    const categoryData = deviceModels[selectedCategory as keyof typeof deviceModels]
    if (!categoryData) return []
    return categoryData[selectedBrand as keyof typeof categoryData] || []
  }

  // Handle category change
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value
    setSelectedCategory(category)
    setSelectedBrand('')
    setSelectedModel('')
  }

  // Handle brand change
  const handleBrandChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const brand = e.target.value
    setSelectedBrand(brand)
    setSelectedModel('')
  }

  // Handle model change
  const handleModelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedModel(e.target.value)
  }

  // Repair issues data - different for Apple vs other brands
  const appleRepairIssues = [
    { id: 1, name: 'Broken Screen', image: '/phone/innerpage/b1.png' },
    { id: 2, name: 'Water Damage', image: '/phone/innerpage/b2.png' },
    { id: 3, name: 'Short Battery Life', image: '/phone/innerpage/b3.png' },
    { id: 4, name: 'Wont Charge', image: '/phone/innerpage/b4.png' },
    { id: 5, name: 'Unlock / Software', image: '/phone/innerpage/b5.png' },
    { id: 6, name: 'Camera Problems', image: '/phone/innerpage/b6.png' },
    { id: 7, name: 'Something Else', image: '/phone/innerpage/b7.png' },
    { id: 8, name: 'Back Damage', image: '/phone/innerpage/b8.png' }
  ]

  const defaultRepairIssues = [
    { id: 1, name: 'HEADPHONES PLUG' },
    { id: 2, name: 'CHARGING PORT' },
    { id: 3, name: 'SIDE BUTTON' },
    { id: 4, name: 'ISIGHT CAMERA' },
    { id: 5, name: 'POWER BUTTON' },
    { id: 6, name: 'SCREEN' },
    { id: 7, name: 'BATTERY' }
  ]

  // Choose repair issues based on selected brand and category
  const repairIssues = (selectedCategory === 'phone' && selectedBrand === 'apple') 
    ? appleRepairIssues 
    : defaultRepairIssues

  // Handle fault selection
  const handleFaultSelect = (fault: string) => {
    setSelectedFault(fault)
  }

  // Handle coupon code change
  const handleCouponChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCouponCode(e.target.value)
  }

  // Handle coupon apply
  const handleCouponApply = () => {
    console.log('Coupon applied:', couponCode)
    // Add coupon validation logic here
  }

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate required fields
    if (!selectedCategory || !selectedBrand || !selectedModel) {
      alert('Please select category, brand, and model before proceeding.')
      return
    }
    
    // Create query parameters
    const queryParams = new URLSearchParams({
      deviceType: selectedCategory,
      brand: selectedBrand,
      model: selectedModel
    })
    
    // Add optional parameters if they exist
    if (selectedFault) {
      queryParams.set('issue', selectedFault)
    }
    if (couponCode) {
      queryParams.set('coupon', couponCode)
    }
    
    // Navigate to appointment page with selected data
    window.location.href = `/repair/appointment?${queryParams.toString()}`
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2
            className="text-xl font-bold"
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: '20px',
              color: '#233D63',
              fontWeight: '700'
            }}
          >
            Make Appointment
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
            aria-label="Close popup"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Select Category */}
            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700 mb-2"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                Select Category *
              </label>
              <select
                id="category"
                value={selectedCategory}
                onChange={handleCategoryChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                <option value="">Select Category</option>
                <option value="phone">Phone</option>
                <option value="tablet">Tablet</option>
                <option value="smartwatch">Smartwatch</option>
                <option value="computer">Computer</option>
              </select>
            </div>

            {/* Select Brand */}
            <div>
              <label
                htmlFor="brand"
                className="block text-sm font-medium text-gray-700 mb-2"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                Select Brand *
              </label>
              <select
                id="brand"
                value={selectedBrand}
                onChange={handleBrandChange}
                required
                disabled={!selectedCategory}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                <option value="">Select Brand</option>
                {getAvailableBrands().map((brand) => (
                  <option key={brand} value={brand}>
                    {brand.charAt(0).toUpperCase() + brand.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            {/* Select Model */}
            <div>
              <label
                htmlFor="model"
                className="block text-sm font-medium text-gray-700 mb-2"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                Select Model *
              </label>
              <select
                id="model"
                value={selectedModel}
                onChange={handleModelChange}
                required
                disabled={!selectedBrand}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                <option value="">Select Model</option>
                {getAvailableModels().map((model) => (
                  <option key={model} value={model}>
                    {model}
                  </option>
                ))}
              </select>
            </div>

            {/* Please Choose Fault Section - Only show when all required fields are selected */}
            {selectedCategory && selectedBrand && selectedModel && (
              <div>
                <h3
                  className="text-lg font-bold mb-4 text-center"
                  style={{
                    fontFamily: "'Raleway', sans-serif",
                    color: '#233D63',
                    textTransform: 'uppercase'
                  }}
                >
                  {selectedCategory === 'phone' && selectedBrand === 'apple' ? 'What is wrong with your device?' : 'please choose fault'}
                </h3>
                
                {/* Selected Fault Display */}
                {selectedFault && (
                  <div className="mb-4 p-3 bg-gray-100 rounded-lg">
                    <h4
                      className="text-sm font-semibold mb-1"
                      style={{
                        fontFamily: "'Raleway', sans-serif",
                        color: '#233D63',
                        textTransform: 'uppercase'
                      }}
                    >
                      Selected Fault:
                    </h4>
                    <p
                      className="text-base"
                      style={{
                        fontFamily: "'Lato', sans-serif",
                        color: '#233D63'
                      }}
                    >
                      {selectedFault}
                    </p>
                  </div>
                )}

                {/* Fault Selection Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                  {repairIssues.map((issue) => (
                    <button
                      key={issue.id}
                      type="button"
                      onClick={() => handleFaultSelect(issue.name)}
                      className={`p-3 text-center border rounded-lg transition-all duration-200 ${
                        selectedFault === issue.name
                          ? 'bg-gray-800 text-white border-gray-800'
                          : 'bg-gray-100 text-gray-800 border-gray-300 hover:bg-gray-200'
                      }`}
                      style={{
                        fontFamily: "'Lato', sans-serif",
                        fontSize: '12px',
                        fontWeight: '500',
                        textTransform: 'uppercase'
                      }}
                    >
                      {/* Show image for Apple phones */}
                      {selectedCategory === 'phone' && selectedBrand === 'apple' && 'image' in issue && (issue as any).image && (
                        <div className="mb-2">
                          <div className="w-8 h-8 mx-auto flex items-center justify-center">
                            <img
                              src={(issue as any).image}
                              alt={issue.name}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        </div>
                      )}
                      {issue.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Coupon Code Section */}
            <div>
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  value={couponCode}
                  onChange={handleCouponChange}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                />
                <button
                  type="button"
                  onClick={handleCouponApply}
                  className="px-4 py-2 bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-700 transition-colors duration-200"
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    textTransform: 'uppercase',
                    fontSize: '12px'
                  }}
                >
                  Apply
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-4">
              <button
                type="submit"
                className="px-6 py-3 bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-700 transition-colors duration-200"
                style={{
                  fontFamily: "'Lato', sans-serif",
                  textTransform: 'uppercase',
                  fontSize: '14px'
                }}
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AppointmentPopup
