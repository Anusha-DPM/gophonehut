'use client'

import { useState } from 'react'
import TopHeader from '@/components/TopHeader'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function FAQsPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  const faqs = [
    {
      question: "How long will i be without my device?",
      answer: [
        "A. In-Store Appointments - In-store appointment repair times can be completed in as little as 15 minutes however this is subject to stock availability and the complexity of the repair service in question. As an overall promise, we always advise that any repair does not go over 5 business days.",
        "We Come To You - We arrive in one of our specially designed vehicles to complete the repair service at your home or place of work, If a repair is booked using this method, the repair should take no longer than 60 minutes.",
        "Mail Order - From the time of booking, we get to work. All of the relevant parts are ordered and reserved. This means that we are all set and ready to go by the time your device arrives with us at Repair HQ. We boast that 90% of repairs booked via our Mail Order Repair Service are received, repaired, tested, and dispatched back to you, the customer on the same working day. This meaning that from posting to receipt your repaired device is back in your hand in as little as 72 hours."
      ]
    },
    {
      question: "Will I be updated throughout the repair process?",
      answer: [
        "A. We have been repairing devices for many years - we understand that customer communication is key to being able to give a second to none service. We have a specially designed system in order to automatically update you every step of the way via email and sms. These are real time updates so that you are kept in the loop along side our customer account managers."
      ]
    },
    {
      question: "Is my device data safe?",
      answer: [
        "A. Devices now control everything, we understand that you need to trust the company who will be handling the device in your absence, we have taken special measures and implemented the correct systems to make sure that all of your sensitive data is kept safe at all times. We always recommend that you back up and erase your device for extra security however this may not always be possible, in order to test the device and complete our checks to the highest standard we would need the access code. This code is only accessible by your acting account manager and is not passed on to anyone else. This is held inside a secure database to be extra safe.",
        "All of our technicians, customer service staff, and managers have been fully vetted and trained."
      ]
    },
    {
      question: "I Have A Busy Schedule, Can You Accommodate?",
      answer: [
        "A. Life and schedules can be tricky, this in mind we have opened our customer service levels even further - Our customer support lines and appointment services are available 7 days a week."
      ]
    },
    {
      question: "Is Your Repair Work Guaranteed?",
      answer: [
        "A. We hold the highest confidence in all of our repair services. 90 Days Warranty is applied to all repairs carried out with the exception of liquid damage repairs.",
        "We do not quibble over warranty claims however we must stress that the warranty is null and void should there be any cosmetic damage shown on the device after the repair date.",
        "If you are unsure if the damage was there before the original repair was carried out please contact us as we take before and after photos of each device repaired. These images are then stored on your account for quick and easy access in case we ever have to assess the warranty booking."
      ]
    },
    {
      question: "Am I Able To Speak To Someone - Or Can I Only Book Online?",
      answer: [
        "A. In Short - YES! We have a full customer service team ready to help with your requests and are available 7 Days A Week.",
        "You are able to get up to date information on the latest pricing and service availability in your area. - Existing Customer? They can give you up to date information regarding the status of your repair process."
      ]
    },
    {
      question: "Will You Wipe My Device?",
      answer: [
        "A. We always recommend that you back up and erase your personal data before shipping the device to us. However this is not always possible, maybe you do not want the extra hassle of completing this task and that's perfectly understandable.",
        "We will leave the device data exactly how we find it and none of this will be erased or changed in any way. Should we need to complete a software flash we will only go ahead and do this once we have contacted you and obtained your full permission to do so."
      ]
    }
  ]

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
              <a href="#" className="font-lato font-normal text-black hover:text-gray-600 transition-colors duration-200">
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

      {/* Hero Section */}
      <section className="relative py-20 md:py-32" style={{ backgroundImage: 'url(/whychooseus.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative w-full px-4 md:px-6 lg:px-8 text-center">
          <h1
            className="font-raleway font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 mobile-heading-26px desktop-heading-36px"
            style={{
              fontFamily: "'Raleway', sans-serif",
              color: 'white',
              textTransform: 'capitalize',
              letterSpacing: '1px',
              fontWeight: '700'
            }}
          >
            Answers to our most frequently asked questions
          </h1>
        </div>
      </section>

      {/* FAQs Content Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden"
              >
                {/* FAQ Question */}
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3
                    className="font-raleway font-semibold text-lg sm:text-xl md:text-2xl mobile-faq-heading-20px desktop-faq-heading-18px flex-1 pr-4"
                    style={{
                      fontFamily: "'Raleway', sans-serif",
                      color: 'black',
                      textTransform: 'capitalize',
                      fontWeight: '600'
                    }}
                  >
                    {index + 1}. {faq.question}
                  </h3>
                  {/* Plus/Minus Icon */}
                  <div className="flex-shrink-0">
                    <svg
                      className={`w-6 h-6 transition-transform duration-200 ${
                        openFAQ === index ? 'rotate-45' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      style={{ color: '#0e72d2' }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </div>
                </button>

                {/* FAQ Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-4">
                    <div className="space-y-4">
                      {faq.answer.map((paragraph, pIndex) => (
                        <p
                          key={pIndex}
                          className="text-base md:text-lg leading-relaxed"
                          style={{
                            fontSize: '16px',
                            lineHeight: '1.5',
                            color: 'black',
                            fontFamily: "'Lato', sans-serif",
                            fontWeight: '500'
                          }}
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
