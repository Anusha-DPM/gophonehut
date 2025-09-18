'use client'

import React, { useState, useEffect, useRef } from 'react'

interface SearchPopupProps {
  isOpen: boolean
  onClose: () => void
}

interface DeviceItem {
  id: string
  name: string
  slug: string
  category: string
  brand: string
}

const SearchPopup: React.FC<SearchPopupProps> = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<DeviceItem[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  // All device data for search
  const allDevices: DeviceItem[] = [
    // Apple Phones
    { id: '1', name: 'iPhone 14 Pro Max', slug: 'iphone-14-pro-max', category: 'Phone', brand: 'Apple' },
    { id: '2', name: 'iPhone 14 Pro', slug: 'iphone-14-pro', category: 'Phone', brand: 'Apple' },
    { id: '3', name: 'iPhone 14 Plus', slug: 'iphone-14-plus', category: 'Phone', brand: 'Apple' },
    { id: '4', name: 'iPhone 14', slug: 'iphone-14', category: 'Phone', brand: 'Apple' },
    { id: '5', name: 'iPhone 13 Pro Max', slug: 'iphone-13-pro-max', category: 'Phone', brand: 'Apple' },
    { id: '6', name: 'iPhone 13 Pro', slug: 'iphone-13-pro', category: 'Phone', brand: 'Apple' },
    { id: '7', name: 'iPhone 13', slug: 'iphone-13', category: 'Phone', brand: 'Apple' },
    { id: '8', name: 'iPhone 13 Mini', slug: 'iphone-13-mini', category: 'Phone', brand: 'Apple' },
    { id: '9', name: 'iPhone 12 Pro Max', slug: 'iphone-12-pro-max', category: 'Phone', brand: 'Apple' },
    { id: '10', name: 'iPhone 12 Pro', slug: 'iphone-12-pro', category: 'Phone', brand: 'Apple' },
    { id: '11', name: 'iPhone 12', slug: 'iphone-12', category: 'Phone', brand: 'Apple' },
    { id: '12', name: 'iPhone 12 Mini', slug: 'iphone-12-mini', category: 'Phone', brand: 'Apple' },
    { id: '13', name: 'iPhone 11 Pro Max', slug: 'iphone-11-pro-max', category: 'Phone', brand: 'Apple' },
    { id: '14', name: 'iPhone 11 Pro', slug: 'iphone-11-pro', category: 'Phone', brand: 'Apple' },
    { id: '15', name: 'iPhone 11', slug: 'iphone-11', category: 'Phone', brand: 'Apple' },
    { id: '16', name: 'iPhone XS Max', slug: 'iphone-xs-max', category: 'Phone', brand: 'Apple' },
    { id: '17', name: 'iPhone XS', slug: 'iphone-xs', category: 'Phone', brand: 'Apple' },
    { id: '18', name: 'iPhone XR', slug: 'iphone-xr', category: 'Phone', brand: 'Apple' },
    { id: '19', name: 'iPhone X', slug: 'iphone-x', category: 'Phone', brand: 'Apple' },
    { id: '20', name: 'iPhone SE (2020)', slug: 'iphone-se-2020', category: 'Phone', brand: 'Apple' },
    { id: '21', name: 'iPhone 8 Plus', slug: 'iphone-8-plus', category: 'Phone', brand: 'Apple' },
    { id: '22', name: 'iPhone 8', slug: 'iphone-8', category: 'Phone', brand: 'Apple' },
    { id: '23', name: 'iPhone 7 Plus', slug: 'iphone-7-plus', category: 'Phone', brand: 'Apple' },
    { id: '24', name: 'iPhone 7', slug: 'iphone-7', category: 'Phone', brand: 'Apple' },
    { id: '25', name: 'iPhone 6S Plus', slug: 'iphone-6s-plus', category: 'Phone', brand: 'Apple' },
    { id: '26', name: 'iPhone 6S', slug: 'iphone-6s', category: 'Phone', brand: 'Apple' },
    { id: '27', name: 'iPhone 6 Plus', slug: 'iphone-6-plus', category: 'Phone', brand: 'Apple' },
    { id: '28', name: 'iPhone SE (2016)', slug: 'iphone-se-2016', category: 'Phone', brand: 'Apple' },
    { id: '29', name: 'iPhone 6', slug: 'iphone-6', category: 'Phone', brand: 'Apple' },
    { id: '30', name: 'iPhone 5S', slug: 'iphone-5s', category: 'Phone', brand: 'Apple' },
    { id: '31', name: 'iPhone 5C', slug: 'iphone-5c', category: 'Phone', brand: 'Apple' },
    { id: '32', name: 'iPhone 5', slug: 'iphone-5', category: 'Phone', brand: 'Apple' },
    { id: '33', name: 'iPhone 4S', slug: 'iphone-4s', category: 'Phone', brand: 'Apple' },
    { id: '34', name: 'iPhone 2G', slug: 'iphone-2g', category: 'Phone', brand: 'Apple' },

    // Samsung Phones
    { id: '35', name: 'Galaxy S10 Plus', slug: 'galaxy-s10-plus', category: 'Phone', brand: 'Samsung' },
    { id: '36', name: 'Galaxy S10', slug: 'galaxy-s10', category: 'Phone', brand: 'Samsung' },
    { id: '37', name: 'Galaxy S10e', slug: 'galaxy-s10e', category: 'Phone', brand: 'Samsung' },
    { id: '38', name: 'Galaxy S9 Plus', slug: 'galaxy-s9-plus', category: 'Phone', brand: 'Samsung' },
    { id: '39', name: 'Galaxy S9', slug: 'galaxy-s9', category: 'Phone', brand: 'Samsung' },
    { id: '40', name: 'Galaxy S8 Plus', slug: 'galaxy-s8-plus', category: 'Phone', brand: 'Samsung' },
    { id: '41', name: 'Galaxy S8', slug: 'galaxy-s8', category: 'Phone', brand: 'Samsung' },
    { id: '42', name: 'Galaxy S7 Edge', slug: 'galaxy-s7-edge', category: 'Phone', brand: 'Samsung' },
    { id: '43', name: 'Galaxy S7', slug: 'galaxy-s7', category: 'Phone', brand: 'Samsung' },
    { id: '44', name: 'Galaxy S20 Ultra 5G', slug: 'galaxy-s20-ultra-5g', category: 'Phone', brand: 'Samsung' },
    { id: '45', name: 'Galaxy S20 Plus 5G', slug: 'galaxy-s20-plus-5g', category: 'Phone', brand: 'Samsung' },
    { id: '46', name: 'Galaxy S20 5G', slug: 'galaxy-s20-5g', category: 'Phone', brand: 'Samsung' },
    { id: '47', name: 'Galaxy Note 20 Ultra 5G', slug: 'galaxy-note-20-ultra-5g', category: 'Phone', brand: 'Samsung' },
    { id: '48', name: 'Galaxy Note 20 5G', slug: 'galaxy-note-20-5g', category: 'Phone', brand: 'Samsung' },
    { id: '49', name: 'Galaxy Note 10 Plus 5G', slug: 'galaxy-note-10-plus-5g', category: 'Phone', brand: 'Samsung' },
    { id: '50', name: 'Galaxy Note 10 Plus', slug: 'galaxy-note-10-plus', category: 'Phone', brand: 'Samsung' },
    { id: '51', name: 'Galaxy Note 10', slug: 'galaxy-note-10', category: 'Phone', brand: 'Samsung' },
    { id: '52', name: 'Galaxy Note 9', slug: 'galaxy-note-9', category: 'Phone', brand: 'Samsung' },
    { id: '53', name: 'Galaxy Note 8', slug: 'galaxy-note-8', category: 'Phone', brand: 'Samsung' },
    { id: '54', name: 'Galaxy A71', slug: 'galaxy-a71', category: 'Phone', brand: 'Samsung' },
    { id: '55', name: 'Galaxy A70', slug: 'galaxy-a70', category: 'Phone', brand: 'Samsung' },
    { id: '56', name: 'Galaxy A51', slug: 'galaxy-a51', category: 'Phone', brand: 'Samsung' },
    { id: '57', name: 'Galaxy A50', slug: 'galaxy-a50', category: 'Phone', brand: 'Samsung' },

    // Google Phones
    { id: '58', name: 'Pixel 4 XL', slug: 'pixel-4-xl', category: 'Phone', brand: 'Google' },
    { id: '59', name: 'Pixel 4', slug: 'pixel-4', category: 'Phone', brand: 'Google' },
    { id: '60', name: 'Pixel 3 XL', slug: 'pixel-3-xl', category: 'Phone', brand: 'Google' },
    { id: '61', name: 'Pixel 4a', slug: 'pixel-4a', category: 'Phone', brand: 'Google' },
    { id: '62', name: 'Pixel 3', slug: 'pixel-3', category: 'Phone', brand: 'Google' },
    { id: '63', name: 'Pixel 3a XL', slug: 'pixel-3a-xl', category: 'Phone', brand: 'Google' },
    { id: '64', name: 'Pixel 3a', slug: 'pixel-3a', category: 'Phone', brand: 'Google' },
    { id: '65', name: 'Pixel 2 XL', slug: 'pixel-2-xl', category: 'Phone', brand: 'Google' },
    { id: '66', name: 'Pixel 2', slug: 'pixel-2', category: 'Phone', brand: 'Google' },
    { id: '67', name: 'Pixel XL', slug: 'pixel-xl', category: 'Phone', brand: 'Google' },
    { id: '68', name: 'Pixel', slug: 'pixel', category: 'Phone', brand: 'Google' },

    // Apple Tablets
    { id: '69', name: 'iPad Pro 12.9" (2020)', slug: 'ipad-pro-12-9-2020', category: 'Tablet', brand: 'Apple' },
    { id: '70', name: 'iPad Pro 12.9" (2018)', slug: 'ipad-pro-12-9-2018', category: 'Tablet', brand: 'Apple' },
    { id: '71', name: 'iPad Pro 11" (2020)', slug: 'ipad-pro-11-2020', category: 'Tablet', brand: 'Apple' },
    { id: '72', name: 'iPad Pro 11" (2018)', slug: 'ipad-pro-11-2018', category: 'Tablet', brand: 'Apple' },
    { id: '73', name: 'iPad Air', slug: 'ipad-air', category: 'Tablet', brand: 'Apple' },
    { id: '74', name: 'iPad Air 2', slug: 'ipad-air-2', category: 'Tablet', brand: 'Apple' },
    { id: '75', name: 'iPad (2018)', slug: 'ipad-2018', category: 'Tablet', brand: 'Apple' },
    { id: '76', name: 'iPad (2017)', slug: 'ipad-2017', category: 'Tablet', brand: 'Apple' },
    { id: '77', name: 'iPad Mini', slug: 'ipad-mini', category: 'Tablet', brand: 'Apple' },
    { id: '78', name: 'iPad Mini 2', slug: 'ipad-mini-2', category: 'Tablet', brand: 'Apple' },
    { id: '79', name: 'iPad Mini 3', slug: 'ipad-mini-3', category: 'Tablet', brand: 'Apple' },
    { id: '80', name: 'iPad Mini 4', slug: 'ipad-mini-4', category: 'Tablet', brand: 'Apple' },

    // Samsung Tablets
    { id: '81', name: 'Galaxy Tab S6 Lite', slug: 'galaxy-tab-s6-lite', category: 'Tablet', brand: 'Samsung' },
    { id: '82', name: 'Galaxy Tab S5e', slug: 'galaxy-tab-s5e', category: 'Tablet', brand: 'Samsung' },
    { id: '83', name: 'Galaxy Tab S4 10.5', slug: 'galaxy-tab-s4-10-5', category: 'Tablet', brand: 'Samsung' },
    { id: '84', name: 'Galaxy Tab S3 9.7', slug: 'galaxy-tab-s3-9-7', category: 'Tablet', brand: 'Samsung' },
    { id: '85', name: 'Galaxy Tab S2 9.7', slug: 'galaxy-tab-s2-9-7', category: 'Tablet', brand: 'Samsung' },
    { id: '86', name: 'Galaxy Tab S2 8.0', slug: 'galaxy-tab-s2-8-0', category: 'Tablet', brand: 'Samsung' },
    { id: '87', name: 'Galaxy Tab S6', slug: 'galaxy-tab-s6', category: 'Tablet', brand: 'Samsung' },
    { id: '88', name: 'Galaxy Tab A 10.1 (2019)', slug: 'galaxy-tab-a-10-1-2019', category: 'Tablet', brand: 'Samsung' },
    { id: '89', name: 'Galaxy Tab A 10.1 (2016)', slug: 'galaxy-tab-a-10-1-2016', category: 'Tablet', brand: 'Samsung' },
    { id: '90', name: 'Galaxy Tab A 8.0 (2019)', slug: 'galaxy-tab-a-8-0-2019', category: 'Tablet', brand: 'Samsung' },
    { id: '91', name: 'Galaxy Tab A 8.0 (2018)', slug: 'galaxy-tab-a-8-0-2018', category: 'Tablet', brand: 'Samsung' },
    { id: '92', name: 'Galaxy Tab A 8.0 (2017)', slug: 'galaxy-tab-a-8-0-2017', category: 'Tablet', brand: 'Samsung' },

    // Apple Smartwatches
    { id: '93', name: 'Watch Series 5 44mm', slug: 'watch-series-5-44mm', category: 'Smartwatch', brand: 'Apple' },
    { id: '94', name: 'Watch Series 5 40mm', slug: 'watch-series-5-40mm', category: 'Smartwatch', brand: 'Apple' },
    { id: '95', name: 'Watch Series 4 44mm', slug: 'watch-series-4-44mm', category: 'Smartwatch', brand: 'Apple' },
    { id: '96', name: 'Watch Series 4 40mm', slug: 'watch-series-4-40mm', category: 'Smartwatch', brand: 'Apple' },
    { id: '97', name: 'Watch Series 3 42mm', slug: 'watch-series-3-42mm', category: 'Smartwatch', brand: 'Apple' },
    { id: '98', name: 'Watch Series 3 38mm', slug: 'watch-series-3-38mm', category: 'Smartwatch', brand: 'Apple' },
    { id: '99', name: 'Watch Series 2 42mm', slug: 'watch-series-2-42mm', category: 'Smartwatch', brand: 'Apple' },
    { id: '100', name: 'Watch Series 2 38mm', slug: 'watch-series-2-38mm', category: 'Smartwatch', brand: 'Apple' },

    // Samsung Smartwatches
    { id: '101', name: 'Galaxy Watch', slug: 'galaxy-watch', category: 'Smartwatch', brand: 'Samsung' },
    { id: '102', name: 'Galaxy Watch Active', slug: 'galaxy-watch-active', category: 'Smartwatch', brand: 'Samsung' },
    { id: '103', name: 'Galaxy Watch Active 2', slug: 'galaxy-watch-active-2', category: 'Smartwatch', brand: 'Samsung' },
    { id: '104', name: 'Galaxy Gear S3', slug: 'galaxy-gear-s3', category: 'Smartwatch', brand: 'Samsung' },
    { id: '105', name: 'Galaxy Gear S2', slug: 'galaxy-gear-s2', category: 'Smartwatch', brand: 'Samsung' },
    { id: '106', name: 'Galaxy Gear S', slug: 'galaxy-gear-s', category: 'Smartwatch', brand: 'Samsung' },

    // Apple Computers
    { id: '107', name: 'MacBook Pro 16-inch (2019)', slug: 'macbook-pro-16-inch-2019', category: 'Computer', brand: 'Apple' },
    { id: '108', name: 'MacBook Pro 15-inch (2019)', slug: 'macbook-pro-15-inch-2019', category: 'Computer', brand: 'Apple' },
    { id: '109', name: 'MacBook Pro 13-inch (2020)', slug: 'macbook-pro-13-inch-2020', category: 'Computer', brand: 'Apple' },
    { id: '110', name: 'MacBook Pro 13-inch (2019)', slug: 'macbook-pro-13-inch-2019', category: 'Computer', brand: 'Apple' },
    { id: '111', name: 'MacBook Air 13-inch (2020)', slug: 'macbook-air-13-inch-2020', category: 'Computer', brand: 'Apple' },
    { id: '112', name: 'MacBook Air 13-inch (2019)', slug: 'macbook-air-13-inch-2019', category: 'Computer', brand: 'Apple' },
    { id: '113', name: 'iMac 27-inch (2020)', slug: 'imac-27-inch-2020', category: 'Computer', brand: 'Apple' },
    { id: '114', name: 'iMac 27-inch (2019)', slug: 'imac-27-inch-2019', category: 'Computer', brand: 'Apple' },
    { id: '115', name: 'iMac 21.5-inch (2019)', slug: 'imac-21-5-inch-2019', category: 'Computer', brand: 'Apple' },
    { id: '116', name: 'Mac Pro (2019)', slug: 'mac-pro-2019', category: 'Computer', brand: 'Apple' },
    { id: '117', name: 'Mac Mini (2018)', slug: 'mac-mini-2018', category: 'Computer', brand: 'Apple' }
  ]

  // Search function
  const performSearch = (query: string) => {
    if (!query.trim()) {
      setSearchResults([])
      return
    }

    setIsLoading(true)
    
    // Simulate search delay
    setTimeout(() => {
      const filtered = allDevices.filter(device =>
        device.name.toLowerCase().includes(query.toLowerCase()) ||
        device.brand.toLowerCase().includes(query.toLowerCase()) ||
        device.category.toLowerCase().includes(query.toLowerCase())
      )
      
      setSearchResults(filtered.slice(0, 10)) // Limit to 10 results
      setIsLoading(false)
    }, 300)
  }

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setSearchQuery(query)
    performSearch(query)
  }

  // Handle device selection
  const handleDeviceSelect = (device: DeviceItem) => {
    window.location.href = `/repair/${device.slug}`
  }

  // Focus input when popup opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  // Reset search when popup closes
  useEffect(() => {
    if (!isOpen) {
      setSearchQuery('')
      setSearchResults([])
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2
            className="text-xl font-bold"
            style={{
              fontFamily: "'Raleway', sans-serif",
              color: '#233D63',
              textTransform: 'uppercase'
            }}
          >
            Search Devices
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Search Input */}
        <div className="p-6 border-b border-gray-200">
          <div className="relative">
            <input
              ref={inputRef}
              type="text"
              placeholder="Search for devices (e.g., iPhone, Galaxy, iPad, MacBook)..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              style={{ fontFamily: "'Lato', sans-serif" }}
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            {isLoading && (
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-500"></div>
              </div>
            )}
          </div>
        </div>

        {/* Search Results */}
        <div className="max-h-96 overflow-y-auto">
          {searchQuery && !isLoading && searchResults.length === 0 && (
            <div className="p-6 text-center text-gray-500">
              <p style={{ fontFamily: "'Lato', sans-serif" }}>
                No devices found for "{searchQuery}"
              </p>
            </div>
          )}

          {searchQuery && searchResults.length > 0 && (
            <div className="p-2">
              {searchResults.map((device) => (
                <button
                  key={device.id}
                  onClick={() => handleDeviceSelect(device)}
                  className="w-full text-left p-4 hover:bg-gray-50 transition-colors duration-200 border-b border-gray-100 last:border-b-0"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3
                        className="font-semibold text-lg"
                        style={{
                          fontFamily: "'Raleway', sans-serif",
                          color: '#233D63'
                        }}
                      >
                        {device.name}
                      </h3>
                      <p
                        className="text-sm text-gray-600"
                        style={{ fontFamily: "'Lato', sans-serif" }}
                      >
                        {device.brand} • {device.category}
                      </p>
                    </div>
                    <div className="text-gray-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}

          {!searchQuery && (
            <div className="p-6 text-center text-gray-500">
              <div className="mb-4">
                <svg className="w-12 h-12 mx-auto text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <p style={{ fontFamily: "'Lato', sans-serif" }}>
                Start typing to search for devices
              </p>
              <p className="text-sm mt-2" style={{ fontFamily: "'Lato', sans-serif" }}>
                Search by device name, brand, or category
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SearchPopup
