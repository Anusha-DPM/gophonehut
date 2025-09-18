'use client'

import React, { useState } from 'react'

interface QuoteRequestPopupProps {
  isOpen: boolean
  onClose: () => void
}

const QuoteRequestPopup: React.FC<QuoteRequestPopupProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    deviceType: '',
    brand: '',
    model: '',
    issue: '',
    additionalInfo: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
    // You can add your form submission logic here
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2
            className="text-xl font-bold capitalize"
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: '20px',
              color: '#233D63',
              fontWeight: '700'
            }}
          >
            Quote Request
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
          {/* Description */}
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
            Can't Find Your Device?<br />
            If you do not see your device please fill out the form below and we will get back to you ASAP. Please add the model number to your device if you can locate it to make it easier for us to reserve the proper parts for your repair. Please also feel free to give us a call during business hours and we will be happy to help.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                />
              </div>
            </div>

            {/* Phone and Device Type Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                />
              </div>
              <div>
                <label
                  htmlFor="deviceType"
                  className="block text-sm font-medium text-gray-700 mb-1"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  Device Type *
                </label>
                <select
                  id="deviceType"
                  name="deviceType"
                  value={formData.deviceType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  <option value="">Select Device Type</option>
                  <option value="phone">Phone</option>
                  <option value="tablet">Tablet</option>
                  <option value="smartwatch">Smartwatch</option>
                  <option value="computer">Computer</option>
                </select>
              </div>
            </div>

            {/* Brand and Model Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="brand"
                  className="block text-sm font-medium text-gray-700 mb-1"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  Brand *
                </label>
                <select
                  id="brand"
                  name="brand"
                  value={formData.brand}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  <option value="">Select Brand</option>
                  <option value="apple">Apple</option>
                  <option value="samsung">Samsung</option>
                  <option value="google">Google</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="model"
                  className="block text-sm font-medium text-gray-700 mb-1"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  Model/Model Number *
                </label>
                <input
                  type="text"
                  id="model"
                  name="model"
                  value={formData.model}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g., iPhone 14 Pro, Galaxy S23"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                />
              </div>
            </div>

            {/* Issue Description */}
            <div>
              <label
                htmlFor="issue"
                className="block text-sm font-medium text-gray-700 mb-1"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                What's the issue? *
              </label>
              <select
                id="issue"
                name="issue"
                value={formData.issue}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                <option value="">Select Issue</option>
                <option value="screen-cracked">Screen Cracked</option>
                <option value="battery-issue">Battery Issue</option>
                <option value="water-damage">Water Damage</option>
                <option value="charging-issue">Charging Issue</option>
                <option value="software-issue">Software Issue</option>
                <option value="camera-issue">Camera Issue</option>
                <option value="speaker-issue">Speaker Issue</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Additional Information */}
            <div>
              <label
                htmlFor="additionalInfo"
                className="block text-sm font-medium text-gray-700 mb-1"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                Additional Information
              </label>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleInputChange}
                rows={4}
                placeholder="Please provide any additional details about the issue or your device..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
                style={{ fontFamily: "'Lato', sans-serif" }}
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-4">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-200"
                style={{
                  fontFamily: "'Lato', sans-serif",
                  backgroundColor: '#6d6e71'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#0056b3'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#6d6e71'
                }}
              >
                Submit Quote Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default QuoteRequestPopup
