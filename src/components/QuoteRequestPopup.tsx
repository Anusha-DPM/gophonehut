'use client'

import React, { useEffect } from 'react'

interface QuoteRequestPopupProps {
  isOpen: boolean
  onClose: () => void
}

const QuoteRequestPopup: React.FC<QuoteRequestPopupProps> = ({ isOpen, onClose }) => {
  // Load GHL form script
  useEffect(() => {
    if (isOpen) {
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
    }
  }, [isOpen])

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
          {/* GHL Custom Quote Form Embed */}
          <div className="w-full">
            <iframe
              src="https://link.digitalpresencematters.com/widget/form/iGV2yVE6JLXsQ2O0BDTq"
              style={{width:'100%',height:'100%',border:'none',borderRadius:'3px'}}
              id="inline-iGV2yVE6JLXsQ2O0BDTq" 
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Custom Quote"
              data-height="675"
              data-layout-iframe-id="inline-iGV2yVE6JLXsQ2O0BDTq"
              data-form-id="iGV2yVE6JLXsQ2O0BDTq"
              title="Custom Quote"
              className="w-full h-[675px] rounded-lg"
            >
            </iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuoteRequestPopup
