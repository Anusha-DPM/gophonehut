'use client'

import React, { useState } from 'react'
import Image from 'next/image'

const Footer: React.FC = () => {
  const [email, setEmail] = useState('')

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      // Redirect to signup page with email parameter
      window.location.href = `/signup?email=${encodeURIComponent(email)}`
    }
  }

  return (
    <footer className="w-full" style={{ backgroundColor: '#f2f2f2' }}>
      {/* Upper Footer Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        {/* Mobile Layout */}
        <div className="block md:hidden">
          {/* Top Row: REPAIRS/LEGAL on left, COMPANY on right */}
          <div className="flex justify-between mb-8">
            {/* Left Side: REPAIRS and LEGAL stacked */}
            <div className="flex-1">
              {/* REPAIRS */}
              <div className="mb-6">
                <h3
                  className="mb-4"
                  style={{
                    fontWeight: '600',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    fontSize: '16px',
                    fontFamily: "'Raleway', sans-serif",
                    color: '#333'
                  }}
                >
                  REPAIRS
                </h3>
                <ul className="space-y-1">
                  <li>
                    <a
                      href="/contact-us"
                      className="hover:text-gray-600 transition-colors duration-200"
                      style={{
                        fontSize: '14px',
                        lineHeight: '20px',
                        fontFamily: 'lato',
                        color: '#333'
                      }}
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/write-a-review"
                      className="hover:text-gray-600 transition-colors duration-200"
                      style={{
                        fontSize: '14px',
                        lineHeight: '20px',
                        fontFamily: 'lato',
                        color: '#333'
                      }}
                    >
                      Write A Review
                    </a>
                  </li>
                  <li>
                    <a
                      href="/bulk-repair-form"
                      className="hover:text-gray-600 transition-colors duration-200"
                      style={{
                        fontSize: '14px',
                        lineHeight: '20px',
                        fontFamily: 'lato',
                        color: '#333'
                      }}
                    >
                      Bulk Repair
                    </a>
                  </li>
                  <li>
                    <a
                      href="/missing-product-form"
                      className="hover:text-gray-600 transition-colors duration-200"
                      style={{
                        fontSize: '14px',
                        lineHeight: '20px',
                        fontFamily: 'lato',
                        color: '#333'
                      }}
                    >
                      Custom Quote
                    </a>
                  </li>
                </ul>
              </div>

              {/* LEGAL */}
              <div>
                <h3
                  className="mb-4"
                  style={{
                    fontWeight: '600',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    fontSize: '16px',
                    fontFamily: "'Raleway', sans-serif",
                    color: '#333'
                  }}
                >
                  LEGAL
                </h3>
                <ul className="space-y-1">
                  <li>
                    <a
                      href="/how-it-works"
                      className="hover:text-gray-600 transition-colors duration-200"
                      style={{
                        fontSize: '14px',
                        lineHeight: '20px',
                        fontFamily: 'lato',
                        color: '#333'
                      }}
                    >
                      How it works
                    </a>
                  </li>
                  <li>
                    <a
                      href="/why"
                      className="hover:text-gray-600 transition-colors duration-200"
                      style={{
                        fontSize: '14px',
                        lineHeight: '20px',
                        fontFamily: 'lato',
                        color: '#333'
                      }}
                    >
                      Why use us?
                    </a>
                  </li>
                  <li>
                    <a
                      href="/offers"
                      className="hover:text-gray-600 transition-colors duration-200"
                      style={{
                        fontSize: '14px',
                        lineHeight: '20px',
                        fontFamily: 'lato',
                        color: '#333'
                      }}
                    >
                      Offers
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Side: COMPANY */}
            <div className="flex-1 ml-8">
              <h3
                className="mb-4"
                style={{
                  fontWeight: '600',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  fontSize: '16px',
                  fontFamily: "'Raleway', sans-serif",
                  color: '#333'
                }}
              >
                COMPANY
              </h3>
              <ul className="space-y-1">
                <li>
                  <a
                    href="/faqs"
                    className="hover:text-gray-600 transition-colors duration-200"
                    style={{
                      fontSize: '14px',
                      lineHeight: '20px',
                      fontFamily: 'lato',
                      color: '#333'
                    }}
                  >
                    Faqs
                  </a>
                </li>
                <li>
                  <a
                    href="/reviews"
                    className="hover:text-gray-600 transition-colors duration-200"
                    style={{
                      fontSize: '14px',
                      lineHeight: '20px',
                      fontFamily: 'lato',
                      color: '#333'
                    }}
                  >
                    Reviews
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="hover:text-gray-600 transition-colors duration-200"
                    style={{
                      fontSize: '14px',
                      lineHeight: '20px',
                      fontFamily: 'lato',
                      color: '#333'
                    }}
                  >
                    Services
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Middle Section: Logo and Email Signup */}
          <div className="text-center mb-8">
            {/* Logo */}
            <div className="mb-6">
              <a href="/" className="block">
                <Image
                  src="/website-logo.png"
                  alt="Phone Hut Logo"
                  width={200}
                  height={80}
                  className="h-16 w-auto mx-auto"
                />
              </a>
            </div>

            {/* Newsletter Signup */}
            <div className="mb-6">
              <form onSubmit={handleEmailSubmit} className="flex items-center max-w-md mx-auto">
                <button
                  type="button"
                  className="p-2 bg-gray-300 rounded-l-md hover:bg-gray-400 transition-colors duration-200"
                  style={{ border: '1px solid #ccc' }}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                  </svg>
                </button>
                <input
                  type="email"
                  placeholder="Enter your Email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-3 py-2 border-t border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style={{
                    fontSize: '14px',
                    fontFamily: 'lato'
                  }}
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-gray-200 border border-gray-400 rounded-r-md hover:bg-gray-300 transition-colors duration-200"
                  style={{
                    fontSize: '14px',
                    fontFamily: 'lato',
                    color: '#333'
                  }}
                >
                  Signup
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Section: Social Media Icons */}
          <div className="flex justify-center space-x-3">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
            >
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            {/* Twitter/X */}
            <a
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
            >
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/?_l=en_US"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors duration-200"
            >
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            {/* Pinterest */}
            <a
              href="https://www.pinterest.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors duration-200"
            >
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
              </svg>
            </a>
            {/* Vimeo */}
            <a
              href="https://vimeo.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
            >
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197c1.185-1.044 2.351-2.084 3.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.493 4.797l-.013.01z"/>
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
            >
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2"/>
                <path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" strokeWidth="2"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2"/>
              </svg>
            </a>
            {/* Yelp */}
            <a
              href="https://www.yelp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-200"
            >
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-7h2v-2h-2v2zm0-4h2V6h-2v5z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-1 md:gap-2 lg:gap-3">
          {/* Column 1: REPAIRS */}
          <div>
            <h3
              className="mb-6"
              style={{
                fontWeight: '600',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                fontSize: '18px',
                fontFamily: "'Raleway', sans-serif",
                color: '#333'
              }}
            >
              REPAIRS
            </h3>
            <ul className="space-y-1">
              <li>
                <a
                  href="/contact-us"
                  className="hover:text-gray-600 transition-colors duration-200"
                  style={{
                    fontSize: '14px',
                    lineHeight: '20px',
                    fontFamily: 'lato',
                    color: '#333'
                  }}
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/write-a-review"
                  className="hover:text-gray-600 transition-colors duration-200"
                  style={{
                    fontSize: '14px',
                    lineHeight: '20px',
                    fontFamily: 'lato',
                    color: '#333'
                  }}
                >
                  Write A Review
                </a>
              </li>
              <li>
                <a
                  href="/bulk-repair-form"
                  className="hover:text-gray-600 transition-colors duration-200"
                  style={{
                    fontSize: '14px',
                    lineHeight: '20px',
                    fontFamily: 'lato',
                    color: '#333'
                  }}
                >
                  Bulk Repair
                </a>
              </li>
              <li>
                <a
                  href="/missing-product-form"
                  className="hover:text-gray-600 transition-colors duration-200"
                  style={{
                    fontSize: '14px',
                    lineHeight: '20px',
                    fontFamily: 'lato',
                    color: '#333'
                  }}
                >
                  Custom Quote
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: COMPANY */}
          <div>
            <h3
              className="mb-6"
              style={{
                fontWeight: '600',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                fontSize: '18px',
                fontFamily: "'Raleway', sans-serif",
                color: '#333'
              }}
            >
              COMPANY
            </h3>
            <ul className="space-y-1">
              <li>
                <a
                  href="/faqs"
                  className="hover:text-gray-600 transition-colors duration-200"
                  style={{
                    fontSize: '14px',
                    lineHeight: '20px',
                    fontFamily: 'lato',
                    color: '#333'
                  }}
                >
                  Faqs
                </a>
              </li>
              <li>
                <a
                  href="/reviews"
                  className="hover:text-gray-600 transition-colors duration-200"
                  style={{
                    fontSize: '14px',
                    lineHeight: '20px',
                    fontFamily: 'lato',
                    color: '#333'
                  }}
                >
                  Reviews
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="hover:text-gray-600 transition-colors duration-200"
                  style={{
                    fontSize: '14px',
                    lineHeight: '20px',
                    fontFamily: 'lato',
                    color: '#333'
                  }}
                >
                  Services
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: LEGAL */}
          <div>
            <h3
              className="mb-6"
              style={{
                fontWeight: '600',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                fontSize: '18px',
                fontFamily: "'Raleway', sans-serif",
                color: '#333'
              }}
            >
              LEGAL
            </h3>
            <ul className="space-y-1">
              <li>
                <a
                  href="/how-it-works"
                  className="hover:text-gray-600 transition-colors duration-200"
                  style={{
                    fontSize: '14px',
                    lineHeight: '20px',
                    fontFamily: 'lato',
                    color: '#333'
                  }}
                >
                  How it works
                </a>
              </li>
              <li>
                <a
                  href="/why"
                  className="hover:text-gray-600 transition-colors duration-200"
                  style={{
                    fontSize: '14px',
                    lineHeight: '20px',
                    fontFamily: 'lato',
                    color: '#333'
                  }}
                >
                  Why use us?
                </a>
              </li>
              <li>
                <a
                  href="/contact-us"
                  className="hover:text-gray-600 transition-colors duration-200"
                  style={{
                    fontSize: '14px',
                    lineHeight: '20px',
                    fontFamily: 'lato',
                    color: '#333'
                  }}
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/offers"
                  className="hover:text-gray-600 transition-colors duration-200"
                  style={{
                    fontSize: '14px',
                    lineHeight: '20px',
                    fontFamily: 'lato',
                    color: '#333'
                  }}
                >
                  Offers
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Branding, Newsletter & Social Media */}
          <div>
            {/* Logo */}
            <div className="mb-6">
              <div>
                <a href="/" className="block">
                  <Image
                    src="/website-logo.png"
                    alt="Phone Hut Logo"
                    width={200}
                    height={80}
                    className="h-16 w-auto"
                  />
                </a>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mb-6">
              <form onSubmit={handleEmailSubmit} className="flex items-center">
                <button
                  type="button"
                  className="p-2 bg-gray-300 rounded-l-md hover:bg-gray-400 transition-colors duration-200"
                  style={{ border: '1px solid #ccc' }}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                  </svg>
                </button>
                <input
                  type="email"
                  placeholder="Enter your Email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-3 py-2 border-t border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style={{
                    fontSize: '14px',
                    fontFamily: 'lato'
                  }}
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-gray-200 border border-gray-400 rounded-r-md hover:bg-gray-300 transition-colors duration-200"
                  style={{
                    fontSize: '14px',
                    fontFamily: 'lato',
                    color: '#333'
                  }}
                >
                  Signup
                </button>
              </form>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-3">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
              >
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              {/* Twitter/X */}
              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
              >
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/?_l=en_US"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors duration-200"
              >
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              {/* Pinterest */}
              <a
                href="https://www.pinterest.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors duration-200"
              >
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
              {/* Vimeo */}
              <a
                href="https://vimeo.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
              >
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197c1.185-1.044 2.351-2.084 3.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.493 4.797l-.013.01z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
              >
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2"/>
                  <path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" strokeWidth="2"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2"/>
                </svg>
              </a>
              {/* Yelp */}
              <a
                href="https://www.yelp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-200"
              >
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-7h2v-2h-2v2zm0-4h2V6h-2v5z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Footer Section */}
      <div className="border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div
              className="text-sm"
              style={{
                fontSize: '14px',
                lineHeight: '20px',
                fontFamily: 'lato',
                color: '#333'
              }}
            >
              ©2021 Phone Hut. All rights reserved.
            </div>

            {/* Legal Links & Scroll-to-Top Button */}
            <div className="flex items-center space-x-4">
              <a
                href="/terms-and-conditions"
                className="hover:text-gray-600 transition-colors duration-200"
                style={{
                  fontSize: '14px',
                  lineHeight: '20px',
                  fontFamily: 'lato',
                  color: '#333'
                }}
              >
                Terms & Conditions
              </a>
              <span
                style={{
                  fontSize: '14px',
                  lineHeight: '20px',
                  fontFamily: 'lato',
                  color: '#333'
                }}
              >
                /
              </span>
              <a
                href="/privacy-policy"
                className="hover:text-gray-600 transition-colors duration-200"
                style={{
                  fontSize: '14px',
                  lineHeight: '20px',
                  fontFamily: 'lato',
                  color: '#333'
                }}
              >
                Privacy Policy
              </a>
              <button
                className="w-8 h-8 bg-gray-300 rounded flex items-center justify-center hover:bg-gray-400 transition-colors duration-200 ml-4"
                aria-label="Scroll to top"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
