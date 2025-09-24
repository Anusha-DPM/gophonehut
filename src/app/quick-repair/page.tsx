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
      { id: 'iphone-14-pro-max', name: 'iPhone 14 Pro Max' },
      { id: 'iphone-14-pro', name: 'iPhone 14 Pro' },
      { id: 'iphone-14-plus', name: 'iPhone 14 Plus' },
      { id: 'iphone-14', name: 'iPhone 14' },
      { id: 'iphone-13-pro-max', name: 'iPhone 13 Pro Max' },
      { id: 'iphone-13-pro', name: 'iPhone 13 Pro' },
      { id: 'iphone-13', name: 'iPhone 13' },
      { id: 'iphone-13-mini', name: 'iPhone 13 Mini' },
      { id: 'iphone-12-pro-max', name: 'iPhone 12 Pro Max' },
      { id: 'iphone-12-pro', name: 'iPhone 12 Pro' },
      { id: 'iphone-12', name: 'iPhone 12' },
      { id: 'iphone-12-mini', name: 'iPhone 12 Mini' },
      { id: 'iphone-11-pro-max', name: 'iPhone 11 Pro Max' },
      { id: 'iphone-11-pro', name: 'iPhone 11 Pro' },
      { id: 'iphone-11', name: 'iPhone 11' },
      { id: 'iphone-xs-max', name: 'iPhone XS Max' },
      { id: 'iphone-xs', name: 'iPhone XS' },
      { id: 'iphone-xr', name: 'iPhone XR' },
      { id: 'iphone-x', name: 'iPhone X' },
      { id: 'iphone-se-2020', name: 'iPhone SE (2020)' },
      { id: 'iphone-8-plus', name: 'iPhone 8 Plus' },
      { id: 'iphone-8', name: 'iPhone 8' },
      { id: 'iphone-7-plus', name: 'iPhone 7 Plus' },
      { id: 'iphone-7', name: 'iPhone 7' },
      { id: 'iphone-6s-plus', name: 'iPhone 6S Plus' },
      { id: 'iphone-6s', name: 'iPhone 6S' },
      { id: 'iphone-6-plus', name: 'iPhone 6 Plus' },
      { id: 'iphone-se-2016', name: 'iPhone SE (2016)' },
      { id: 'iphone-6', name: 'iPhone 6' },
      { id: 'iphone-5s', name: 'iPhone 5S' },
      { id: 'iphone-5c', name: 'iPhone 5C' },
      { id: 'iphone-5', name: 'iPhone 5' },
      { id: 'iphone-4s', name: 'iPhone 4S' },
      { id: 'iphone-2g', name: 'iPhone 2G' }
    ],
    'samsung-phone': [
      { id: 'galaxy-s10-plus', name: 'Galaxy S10 Plus' },
      { id: 'galaxy-s10', name: 'Galaxy S10' },
      { id: 'galaxy-s10e', name: 'Galaxy S10e' },
      { id: 'galaxy-s9-plus', name: 'Galaxy S9 Plus' },
      { id: 'galaxy-s9', name: 'Galaxy S9' },
      { id: 'galaxy-s8-plus', name: 'Galaxy S8 Plus' },
      { id: 'galaxy-s8', name: 'Galaxy S8' },
      { id: 'galaxy-s7-edge', name: 'Galaxy S7 Edge' },
      { id: 'galaxy-s7', name: 'Galaxy S7' },
      { id: 'galaxy-s20-ultra-5g', name: 'Galaxy S20 Ultra 5G' },
      { id: 'galaxy-s20-plus-5g', name: 'Galaxy S20 Plus 5G' },
      { id: 'galaxy-s20-5g', name: 'Galaxy S20 5G' },
      { id: 'galaxy-s6-edge-plus', name: 'Galaxy S6 Edge Plus' },
      { id: 'galaxy-s6-edge', name: 'Galaxy S6 Edge' },
      { id: 'galaxy-s6', name: 'Galaxy S6' },
      { id: 'galaxy-s5', name: 'Galaxy S5' },
      { id: 'galaxy-s4', name: 'Galaxy S4' },
      { id: 'galaxy-s3', name: 'Galaxy S3' },
      { id: 'galaxy-s', name: 'Galaxy S' },
      { id: 'galaxy-note-20-ultra-5g', name: 'Galaxy Note 20 Ultra 5G' },
      { id: 'galaxy-note-20-5g', name: 'Galaxy Note 20 5G' },
      { id: 'galaxy-note-10-plus-5g', name: 'Galaxy Note 10 Plus 5G' },
      { id: 'galaxy-note-10-plus', name: 'Galaxy Note 10 Plus' },
      { id: 'galaxy-note-10', name: 'Galaxy Note 10' },
      { id: 'galaxy-note-9', name: 'Galaxy Note 9' },
      { id: 'galaxy-note-8', name: 'Galaxy Note 8' },
      { id: 'galaxy-note-5', name: 'Galaxy Note 5' },
      { id: 'galaxy-note-4', name: 'Galaxy Note 4' },
      { id: 'galaxy-note-3', name: 'Galaxy Note 3' },
      { id: 'galaxy-note-2', name: 'Galaxy Note 2' },
      { id: 'galaxy-note', name: 'Galaxy Note' },
      { id: 'galaxy-fold', name: 'Galaxy Fold' },
      { id: 'galaxy-z-flip-5g', name: 'Galaxy Z Flip 5G' },
      { id: 'galaxy-z-flip', name: 'Galaxy Z Flip' },
      { id: 'galaxy-a71', name: 'Galaxy A71' },
      { id: 'galaxy-a70', name: 'Galaxy A70' },
      { id: 'galaxy-a51', name: 'Galaxy A51' },
      { id: 'galaxy-a50', name: 'Galaxy A50' },
      { id: 'galaxy-a30s', name: 'Galaxy A30s' },
      { id: 'galaxy-a30', name: 'Galaxy A30' },
      { id: 'galaxy-a20s', name: 'Galaxy A20s' },
      { id: 'galaxy-a20', name: 'Galaxy A20' },
      { id: 'galaxy-a11', name: 'Galaxy A11' },
      { id: 'galaxy-a10e', name: 'Galaxy A10e' },
      { id: 'galaxy-a10', name: 'Galaxy A10' },
      { id: 'galaxy-a01', name: 'Galaxy A01' }
    ],
    'google-phone': [
      { id: 'pixel-4-xl', name: 'Pixel 4 XL' },
      { id: 'pixel-4', name: 'Pixel 4' },
      { id: 'pixel-3-xl', name: 'Pixel 3 XL' },
      { id: 'pixel-4a', name: 'Pixel 4a' },
      { id: 'pixel-3', name: 'Pixel 3' },
      { id: 'pixel-3a-xl', name: 'Pixel 3a XL' },
      { id: 'pixel-3a', name: 'Pixel 3a' },
      { id: 'pixel-2-xl', name: 'Pixel 2 XL' },
      { id: 'pixel-2', name: 'Pixel 2' },
      { id: 'pixel-xl', name: 'Pixel XL' },
      { id: 'pixel', name: 'Pixel' }
    ],
    'apple-tablet': [
      { id: 'ipad-pro-12-9-2020', name: 'iPad Pro 12.9" (2020)' },
      { id: 'ipad-pro-12-9-2018', name: 'iPad Pro 12.9" (2018)' },
      { id: 'ipad-pro-12-9-2017', name: 'iPad Pro 12.9" (2017)' },
      { id: 'ipad-pro-12-9', name: 'iPad Pro 12.9"' },
      { id: 'ipad-pro-11-2020', name: 'iPad Pro 11" (2020)' },
      { id: 'ipad-pro-11-2018', name: 'iPad Pro 11" (2018)' },
      { id: 'ipad-pro-10-5', name: 'iPad Pro 10.5"' },
      { id: 'ipad-pro-9-7', name: 'iPad Pro 9.7"' },
      { id: 'ipad-air', name: 'iPad Air' },
      { id: 'ipad-air-2', name: 'iPad Air 2' },
      { id: 'ipad-2018', name: 'iPad (2018)' },
      { id: 'ipad-2017', name: 'iPad (2017)' },
      { id: 'ipad-2019', name: 'iPad (2019)' },
      { id: 'ipad', name: 'iPad' },
      { id: 'ipad-2', name: 'iPad 2' },
      { id: 'ipad-3', name: 'iPad 3' },
      { id: 'ipad-4', name: 'iPad 4' },
      { id: 'ipad-mini', name: 'iPad Mini' },
      { id: 'ipad-mini-2', name: 'iPad Mini 2' },
      { id: 'ipad-mini-3', name: 'iPad Mini 3' },
      { id: 'ipad-mini-4', name: 'iPad Mini 4' },
      { id: 'ipad-mini-2019', name: 'iPad Mini (2019)' }
    ],
    'samsung-tablet': [
      { id: 'galaxy-tab-s6-lite', name: 'Galaxy Tab S6 Lite' },
      { id: 'galaxy-tab-s5e', name: 'Galaxy Tab S5e' },
      { id: 'galaxy-tab-s4-10-5', name: 'Galaxy Tab S4 10.5' },
      { id: 'galaxy-tab-s3-9-7', name: 'Galaxy Tab S3 9.7' },
      { id: 'galaxy-tab-s2-9-7', name: 'Galaxy Tab S2 9.7' },
      { id: 'galaxy-tab-s2-8-0', name: 'Galaxy Tab S2 8.0' },
      { id: 'galaxy-tab-s6', name: 'Galaxy Tab S6' },
      { id: 'galaxy-tab-s-10-5', name: 'Galaxy Tab S 10.5' },
      { id: 'galaxy-tab-s-8-4', name: 'Galaxy Tab S 8.4' },
      { id: 'galaxy-tab-a-10-1-2019', name: 'Galaxy Tab A 10.1 (2019)' },
      { id: 'galaxy-tab-a-10-1-2016', name: 'Galaxy Tab A 10.1 (2016)' },
      { id: 'galaxy-tab-a-10-5-2018', name: 'Galaxy Tab A 10.5 (2018)' },
      { id: 'galaxy-tab-a-9-7', name: 'Galaxy Tab A 9.7' },
      { id: 'galaxy-tab-a-8-0-2019', name: 'Galaxy Tab A 8.0 (2019)' },
      { id: 'galaxy-tab-a-8-0-2018', name: 'Galaxy Tab A 8.0 (2018)' },
      { id: 'galaxy-tab-a-8-0-2017', name: 'Galaxy Tab A 8.0 (2017)' },
      { id: 'galaxy-tab-a-8-0', name: 'Galaxy Tab A 8.0' },
      { id: 'galaxy-tab-a-7-0-2016', name: 'Galaxy Tab A 7.0 (2016)' },
      { id: 'galaxy-tab-e-9-6', name: 'Galaxy Tab E 9.6' },
      { id: 'galaxy-tab-e-8-0', name: 'Galaxy Tab E 8.0' },
      { id: 'galaxy-tab-pro-12-2', name: 'Galaxy Tab Pro 12.2' },
      { id: 'galaxy-tab-pro-10-1', name: 'Galaxy Tab Pro 10.1' },
      { id: 'galaxy-tab-pro-8-4', name: 'Galaxy Tab Pro 8.4' },
      { id: 'galaxy-tab-pro-s', name: 'Galaxy Tab Pro S' },
      { id: 'galaxy-tab-8-9', name: 'Galaxy Tab 8.9' },
      { id: 'galaxy-tab-7-7', name: 'Galaxy Tab 7.7' },
      { id: 'galaxy-tab-7-0-plus', name: 'Galaxy Tab 7.0 Plus' },
      { id: 'galaxy-tab-7-0', name: 'Galaxy Tab 7.0' },
      { id: 'galaxy-tab-4-10-1', name: 'Galaxy Tab 4 10.1' },
      { id: 'galaxy-tab-4-8-0', name: 'Galaxy Tab 4 8.0' },
      { id: 'galaxy-tab-4-7-0', name: 'Galaxy Tab 4 7.0' },
      { id: 'galaxy-tab-3-10-1', name: 'Galaxy Tab 3 10.1' },
      { id: 'galaxy-tab-3-8-0', name: 'Galaxy Tab 3 8.0' },
      { id: 'galaxy-tab-3-7-0', name: 'Galaxy Tab 3 7.0' },
      { id: 'galaxy-tab-2-10-1', name: 'Galaxy Tab 2 10.1' },
      { id: 'galaxy-tab-2-7-0', name: 'Galaxy Tab 2 7.0' },
      { id: 'galaxy-tab-10-1', name: 'Galaxy Tab 10.1' },
      { id: 'galaxy-note-10-1-2014', name: 'Galaxy Note 10.1 (2014 Edition)' },
      { id: 'galaxy-note-10-1', name: 'Galaxy Note 10.1' },
      { id: 'galaxy-note-8-0', name: 'Galaxy Note 8.0' },
      { id: 'galaxy-note-pro', name: 'Galaxy Note Pro' },
      { id: 'galaxy-view', name: 'Galaxy View' },
      { id: 'galaxy-view-2', name: 'Galaxy View 2' },
      { id: 'galaxy-j-max', name: 'Galaxy J Max' }
    ],
    'apple-smartwatch': [
      { id: 'watch-series-5-44mm-ceramic-gps-cellular', name: 'Watch Series 5 44mm Ceramic GPS And Cellular' },
      { id: 'watch-series-5-44mm-ceramic-gps', name: 'Watch Series 5 44mm Ceramic GPS Only' },
      { id: 'watch-series-5-40mm-ceramic-gps-cellular', name: 'Watch Series 5 40mm Ceramic GPS And Cellular' },
      { id: 'watch-series-5-40mm-ceramic-gps', name: 'Watch Series 5 40mm Ceramic GPS Only' },
      { id: 'watch-series-5-40mm-titanium-gps-cellular', name: 'Watch Series 5 40mm Titanium GPS And Cellular' },
      { id: 'watch-series-5-44mm-titanium-gps-cellular', name: 'Watch Series 5 44mm Titanium GPS And Cellular' },
      { id: 'watch-series-5-44mm-titanium-gps', name: 'Watch Series 5 44mm Titanium GPS Only' },
      { id: 'watch-series-5-40mm-titanium-gps', name: 'Watch Series 5 40mm Titanium GPS Only' },
      { id: 'watch-series-5-44mm-stainless-steel-gps', name: 'Watch Series 5 44mm Stainless Steel GPS Only' },
      { id: 'watch-series-5-44mm-stainless-steel-gps-cellular', name: 'Watch Series 5 44mm Stainless Steel GPS And Cellular' },
      { id: 'watch-series-5-40mm-stainless-steel-gps', name: 'Watch Series 5 40mm Stainless Steel GPS Only' },
      { id: 'watch-series-5-40mm-stainless-steel-gps-cellular', name: 'Watch Series 5 40mm Stainless Steel GPS And Cellular' },
      { id: 'watch-series-5-44mm-aluminium-gps-cellular', name: 'Watch Series 5 44mm Aluminium GPS And Cellular' },
      { id: 'watch-series-5-40mm-aluminium-gps-cellular', name: 'Watch Series 5 40mm Aluminium GPS And Cellular' },
      { id: 'watch-nike-plus-series-5-44mm-gps-cellular', name: 'Watch Nike Plus Series 5 44mm GPS And Cellular' },
      { id: 'watch-series-5-44mm-aluminium-gps', name: 'Watch Series 5 44mm Aluminium GPS Only' },
      { id: 'watch-series-5-40mm-aluminium-gps', name: 'Watch Series 5 40mm Aluminium GPS Only' },
      { id: 'watch-nike-plus-series-5-40mm-gps-cellular', name: 'Watch Nike Plus Series 5 40mm GPS And Cellular' },
      { id: 'watch-nike-plus-series-5-44mm-gps', name: 'Watch Nike Plus Series 5 44mm GPS Only' },
      { id: 'watch-nike-plus-series-5-40mm-gps', name: 'Watch Nike Plus Series 5 40mm GPS Only' }
    ],
    'samsung-smartwatch': [
      { id: 'galaxy-watch', name: 'Galaxy Watch' },
      { id: 'galaxy-watch-active', name: 'Galaxy Watch Active' },
      { id: 'galaxy-watch-active-2', name: 'Galaxy Watch Active 2' },
      { id: 'galaxy-gear-sport', name: 'Galaxy Gear Sport' },
      { id: 'galaxy-gear-s3', name: 'Galaxy Gear S3' },
      { id: 'galaxy-gear-s2', name: 'Galaxy Gear S2' },
      { id: 'galaxy-gear-s', name: 'Galaxy Gear S' },
      { id: 'galaxy-gear-live', name: 'Galaxy Gear Live' },
      { id: 'galaxy-gear-fit2-pro', name: 'Galaxy Gear Fit2 Pro' },
      { id: 'galaxy-gear-fit2', name: 'Galaxy Gear Fit2' },
      { id: 'galaxy-gear-fit', name: 'Galaxy Gear Fit' },
      { id: 'galaxy-gear-2', name: 'Galaxy Gear 2' },
      { id: 'galaxy-gear-2-neo', name: 'Galaxy Gear 2 Neo' },
      { id: 'samsung-smartwatch', name: 'Samsung Smartwatch' }
    ],
    'apple-computer': [
      { id: 'macbook-pro-16-inch-2019', name: 'MacBook Pro 16-inch (2019)' },
      { id: 'macbook-pro-15-inch-2019', name: 'MacBook Pro 15-inch (2019)' },
      { id: 'macbook-pro-15-inch-2018', name: 'MacBook Pro 15-inch (2018)' },
      { id: 'macbook-pro-15-inch-2017', name: 'MacBook Pro 15-inch (2017)' },
      { id: 'macbook-pro-15-inch-2016', name: 'MacBook Pro 15-inch (2016)' },
      { id: 'macbook-pro-15-inch-2015', name: 'MacBook Pro 15-inch (2015)' },
      { id: 'macbook-pro-15-inch-2014', name: 'MacBook Pro 15-inch (2014)' },
      { id: 'macbook-pro-15-inch-2013', name: 'MacBook Pro 15-inch (2013)' },
      { id: 'macbook-pro-15-inch-2012', name: 'MacBook Pro 15-inch (2012)' },
      { id: 'macbook-pro-15-inch-2011', name: 'MacBook Pro 15-inch (2011)' },
      { id: 'macbook-pro-15-inch-2010', name: 'MacBook Pro 15-inch (2010)' },
      { id: 'macbook-pro-15-inch-2009', name: 'MacBook Pro 15-inch (2009)' },
      { id: 'macbook-pro-15-inch-2008', name: 'MacBook Pro 15-inch (2008)' },
      { id: 'macbook-pro-15-inch-2007', name: 'MacBook Pro 15-inch (2007)' },
      { id: 'macbook-pro-15-inch-2006', name: 'MacBook Pro 15-inch (2006)' },
      { id: 'macbook-pro-17-inch-2011', name: 'MacBook Pro 17-inch (2011)' },
      { id: 'macbook-pro-17-inch-2010', name: 'MacBook Pro 17-inch (2010)' },
      { id: 'macbook-pro-17-inch-2009', name: 'MacBook Pro 17-inch (2009)' },
      { id: 'macbook-pro-17-inch-2008', name: 'MacBook Pro 17-inch (2008)' },
      { id: 'macbook-pro-17-inch-2007', name: 'MacBook Pro 17-inch (2007)' },
      { id: 'macbook-pro-17-inch-2006', name: 'MacBook Pro 17-inch (2006)' },
      { id: 'macbook-pro-13-inch-2020', name: 'MacBook Pro 13-inch (2020)' },
      { id: 'macbook-pro-13-inch-2019', name: 'MacBook Pro 13-inch (2019)' },
      { id: 'macbook-pro-13-inch-2018', name: 'MacBook Pro 13-inch (2018)' },
      { id: 'macbook-pro-13-inch-2017', name: 'MacBook Pro 13-inch (2017)' },
      { id: 'macbook-pro-13-inch-2016', name: 'MacBook Pro 13-inch (2016)' },
      { id: 'macbook-pro-13-inch-2015', name: 'MacBook Pro 13-inch (2015)' },
      { id: 'macbook-pro-13-inch-2014', name: 'MacBook Pro 13-inch (2014)' },
      { id: 'macbook-pro-13-inch-2013', name: 'MacBook Pro 13-inch (2013)' },
      { id: 'macbook-pro-13-inch-2012', name: 'MacBook Pro 13-inch (2012)' },
      { id: 'macbook-pro-13-inch-2011', name: 'MacBook Pro 13-inch (2011)' },
      { id: 'macbook-pro-13-inch-2010', name: 'MacBook Pro 13-inch (2010)' },
      { id: 'macbook-pro-13-inch-2009', name: 'MacBook Pro 13-inch (2009)' },
      { id: 'macbook-air-13-inch-2020', name: 'MacBook Air 13-inch (2020)' },
      { id: 'macbook-air-13-inch-2019', name: 'MacBook Air 13-inch (2019)' },
      { id: 'macbook-air-13-inch-2018', name: 'MacBook Air 13-inch (2018)' },
      { id: 'macbook-air-13-inch-2017', name: 'MacBook Air 13-inch (2017)' },
      { id: 'macbook-air-13-inch-2015', name: 'MacBook Air 13-inch (2015)' },
      { id: 'macbook-air-13-inch-2014', name: 'MacBook Air 13-inch (2014)' },
      { id: 'macbook-air-13-inch-2013', name: 'MacBook Air 13-inch (2013)' },
      { id: 'macbook-air-13-inch-2012', name: 'MacBook Air 13-inch (2012)' },
      { id: 'macbook-air-13-inch-2011', name: 'MacBook Air 13-inch (2011)' },
      { id: 'macbook-air-13-inch-2010', name: 'MacBook Air 13-inch (2010)' },
      { id: 'macbook-air-13-inch-2009', name: 'MacBook Air 13-inch (2009)' },
      { id: 'macbook-air-13-inch-2008', name: 'MacBook Air 13-inch (2008)' },
      { id: 'macbook-air-11-inch-2015', name: 'MacBook Air 11-inch (2015)' },
      { id: 'macbook-air-11-inch-2014', name: 'MacBook Air 11-inch (2014)' },
      { id: 'macbook-air-11-inch-2013', name: 'MacBook Air 11-inch (2013)' },
      { id: 'macbook-air-11-inch-2012', name: 'MacBook Air 11-inch (2012)' },
      { id: 'macbook-air-11-inch-2011', name: 'MacBook Air 11-inch (2011)' },
      { id: 'macbook-air-11-inch-2010', name: 'MacBook Air 11-inch (2010)' },
      { id: 'macbook-12-inch-2017', name: 'MacBook 12-inch (2017)' },
      { id: 'macbook-12-inch-2016', name: 'MacBook 12-inch (2016)' },
      { id: 'macbook-12-inch-2015', name: 'MacBook 12-inch (2015)' },
      { id: 'macbook-13-inch-2010', name: 'MacBook 13-inch (2010)' },
      { id: 'macbook-13-inch-2009', name: 'MacBook 13-inch (2009)' },
      { id: 'macbook-13-inch-2008', name: 'MacBook 13-inch (2008)' },
      { id: 'macbook-13-inch-2007', name: 'MacBook 13-inch (2007)' },
      { id: 'macbook-13-inch-2006', name: 'MacBook 13-inch (2006)' },
      { id: 'imac-27-inch-2020', name: 'iMac 27-inch (2020)' },
      { id: 'imac-27-inch-2019', name: 'iMac 27-inch (2019)' },
      { id: 'imac-27-inch-2017', name: 'iMac 27-inch (2017)' },
      { id: 'imac-27-inch-2015', name: 'iMac 27-inch (2015)' },
      { id: 'imac-27-inch-2014', name: 'iMac 27-inch (2014)' },
      { id: 'imac-27-inch-2013', name: 'iMac 27-inch (2013)' },
      { id: 'imac-27-inch-2012', name: 'iMac 27-inch (2012)' },
      { id: 'imac-27-inch-2011', name: 'iMac 27-inch (2011)' },
      { id: 'imac-27-inch-2010', name: 'iMac 27-inch (2010)' },
      { id: 'imac-27-inch-2009', name: 'iMac 27-inch (2009)' },
      { id: 'imac-21-5-inch-2019', name: 'iMac 21.5-inch (2019)' },
      { id: 'imac-21-5-inch-2017', name: 'iMac 21.5-inch (2017)' },
      { id: 'imac-21-5-inch-2015', name: 'iMac 21.5-inch (2015)' },
      { id: 'imac-21-5-inch-2014', name: 'iMac 21.5-inch (2014)' },
      { id: 'imac-21-5-inch-2013', name: 'iMac 21.5-inch (2013)' },
      { id: 'imac-21-5-inch-2012', name: 'iMac 21.5-inch (2012)' },
      { id: 'imac-21-5-inch-2011', name: 'iMac 21.5-inch (2011)' },
      { id: 'imac-21-5-inch-2010', name: 'iMac 21.5-inch (2010)' },
      { id: 'imac-21-5-inch-2009', name: 'iMac 21.5-inch (2009)' },
      { id: 'imac-24-inch-2009', name: 'iMac 24-inch (2009)' },
      { id: 'imac-24-inch-2008', name: 'iMac 24-inch (2008)' },
      { id: 'imac-24-inch-2007', name: 'iMac 24-inch (2007)' },
      { id: 'imac-20-inch-2009', name: 'iMac 20-inch (2009)' },
      { id: 'imac-20-inch-2008', name: 'iMac 20-inch (2008)' },
      { id: 'imac-20-inch-2007', name: 'iMac 20-inch (2007)' },
      { id: 'imac-pro-27-inch', name: 'iMac Pro 27-inch' },
      { id: 'mac-pro-rack-2019', name: 'Mac Pro Rack (2019)' },
      { id: 'mac-pro-2019', name: 'Mac Pro (2019)' },
      { id: 'mac-pro-2013', name: 'Mac Pro (2013)' },
      { id: 'mac-pro-2012', name: 'Mac Pro (2012)' },
      { id: 'mac-pro-2010', name: 'Mac Pro (2010)' },
      { id: 'mac-pro-2009', name: 'Mac Pro (2009)' },
      { id: 'mac-pro-2008', name: 'Mac Pro (2008)' },
      { id: 'mac-pro-2007', name: 'Mac Pro (2007)' },
      { id: 'mac-pro-2006', name: 'Mac Pro (2006)' },
      { id: 'mac-mini-2018', name: 'Mac Mini (2018)' },
      { id: 'mac-mini-2014', name: 'Mac Mini (2014)' },
      { id: 'mac-mini-2012', name: 'Mac Mini (2012)' },
      { id: 'mac-mini-2011', name: 'Mac Mini (2011)' },
      { id: 'mac-mini-2010', name: 'Mac Mini (2010)' },
      { id: 'mac-mini-2009', name: 'Mac Mini (2009)' },
      { id: 'mac-mini-2007', name: 'Mac Mini (2007)' },
      { id: 'apple-computer', name: 'Apple Computer' }
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
                I&apos;m Phone Hut. I am happy to help you with the instant repair
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
                  What&apos;s the issue?
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
