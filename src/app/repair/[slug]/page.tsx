'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import TopHeader from '@/components/TopHeader'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ChangeModelPopup from '@/components/ChangeModelPopup'
import SearchPopup from '@/components/SearchPopup'

// Apple iPhone models data - matching GoPhoneHut reference
const applePhones = [
  { id: 1, name: 'iPhone 14 Pro Max', slug: 'iphone-14-pro-max', image: '/phone/1.png' },
  { id: 2, name: 'iPhone 14 Pro', slug: 'iphone-14-pro', image: '/phone/2.png' },
  { id: 3, name: 'iPhone 14 Plus', slug: 'iphone-14-plus', image: '/phone/3.png' },
  { id: 4, name: 'iPhone 14', slug: 'iphone-14', image: '/phone/4.png' },
  { id: 5, name: 'iPhone 13 Pro Max', slug: 'iphone-13-pro-max', image: '/phone/5.png' },
  { id: 6, name: 'iPhone 13 Pro', slug: 'iphone-13-pro', image: '/phone/6.png' },
  { id: 7, name: 'iPhone 13', slug: 'iphone-13', image: '/phone/7.png' },
  { id: 8, name: 'iPhone 13 Mini', slug: 'iphone-13-mini', image: '/phone/8.png' },
  { id: 9, name: 'iPhone 12 Pro Max', slug: 'iphone-12-pro-max', image: '/phone/9.png' },
  { id: 10, name: 'iPhone 12 Pro', slug: 'iphone-12-pro', image: '/phone/10.png' },
  { id: 11, name: 'iPhone 12', slug: 'iphone-12', image: '/phone/11.png' },
  { id: 12, name: 'iPhone 12 Mini', slug: 'iphone-12-mini', image: '/phone/12.png' },
  { id: 13, name: 'iPhone 11 Pro Max', slug: 'iphone-11-pro-max', image: '/phone/13.png' },
  { id: 14, name: 'iPhone 11 Pro', slug: 'iphone-11-pro', image: '/phone/14.png' },
  { id: 15, name: 'iPhone 11', slug: 'iphone-11', image: '/phone/15.png' },
  { id: 16, name: 'iPhone XS Max', slug: 'iphone-xs-max', image: '/phone/16.png' },
  { id: 17, name: 'iPhone XS', slug: 'iphone-xs', image: '/phone/17.png' },
  { id: 18, name: 'iPhone XR', slug: 'iphone-xr', image: '/phone/18.png' },
  { id: 19, name: 'iPhone X', slug: 'iphone-x', image: '/phone/19.png' },
  { id: 20, name: 'iPhone SE (2020)', slug: 'iphone-se-2020', image: '/phone/20.png' },
  { id: 21, name: 'iPhone 8 Plus', slug: 'iphone-8-plus', image: '/phone/21.png' },
  { id: 22, name: 'iPhone 8', slug: 'iphone-8', image: '/phone/22.png' },
  { id: 23, name: 'iPhone 7 Plus', slug: 'iphone-7-plus', image: '/phone/23.png' },
  { id: 24, name: 'iPhone 7', slug: 'iphone-7', image: '/phone/24.png' },
  { id: 25, name: 'iPhone 6S Plus', slug: 'iphone-6s-plus', image: '/phone/25.png' },
  { id: 26, name: 'iPhone 6S', slug: 'iphone-6s', image: '/phone/26.png' },
  { id: 27, name: 'iPhone 6 Plus', slug: 'iphone-6-plus', image: '/phone/27.png' },
  { id: 28, name: 'iPhone SE (2016)', slug: 'iphone-se-2016', image: '/phone/28.png' },
  { id: 29, name: 'iPhone 6', slug: 'iphone-6', image: '/phone/29.png' },
  { id: 30, name: 'iPhone 5S', slug: 'iphone-5s', image: '/phone/30.png' },
  { id: 31, name: 'iPhone 5C', slug: 'iphone-5c', image: '/phone/31.png' },
  { id: 32, name: 'iPhone 5', slug: 'iphone-5', image: '/phone/32.png' },
  { id: 33, name: 'iPhone 4S', slug: 'iphone-4s', image: '/phone/33.png' },
  { id: 34, name: 'iPhone 2G', slug: 'iphone-2g', image: '/phone/34.png' }
]

// Google Pixel models data
const googlePhones = [
  { id: 1, name: 'Pixel 4 XL', slug: 'pixel-4-xl', image: '/google/g1.png' },
  { id: 2, name: 'pixel 4', slug: 'pixel-4', image: '/google/g2.png' },
  { id: 3, name: 'pixel 3 xl', slug: 'pixel-3-xl', image: '/google/g3.png' },
  { id: 4, name: 'pixel 4a', slug: 'pixel-4a', image: '/google/g4.png' },
  { id: 5, name: 'pixel 3', slug: 'pixel-3', image: '/google/g5.png' },
  { id: 6, name: 'pixel 3a xl', slug: 'pixel-3a-xl', image: '/google/g6.png' },
  { id: 7, name: 'pixel 3a', slug: 'pixel-3a', image: '/google/g7.png' },
  { id: 8, name: 'pixel 2 xl', slug: 'pixel-2-xl', image: '/google/g8.png' },
  { id: 9, name: 'pixel 2', slug: 'pixel-2', image: '/google/g9.png' },
  { id: 10, name: 'pixel xl', slug: 'pixel-xl', image: '/google/g10.png' },
  { id: 11, name: 'pixel', slug: 'pixel', image: '/google/g11.png' }
]

// Apple Watch models data - 64 models
const appleWatches = [
  { id: 1, name: 'Watch Series 5 44mm Ceramic GPS And Cellular', slug: 'apple-watch-series-5-44mm-titanium-gps-cellular', image: '/watch-apple/watch-series-5-44mm-titanium-gps-and-cellular.png' },
  { id: 2, name: 'Watch Series 5 44mm Ceramic GPS Only', slug: 'apple-watch-series-5-44mm-titanium-gps-only', image: '/watch-apple/watch-series-5-44mm-titanium-gps-only.png' },
  { id: 3, name: 'Watch Series 5 40mm Ceramic GPS And Cellular', slug: 'apple-watch-series-5-44mm-stainless-steel-gps-cellular', image: '/watch-apple/watch-series-5-44mm-stainless-steel-gps-and-cellular.png' },
  { id: 4, name: 'Watch Series 5 40mm Ceramic GPS Only', slug: 'apple-watch-series-5-44mm-stainless-steel-gps-only', image: '/watch-apple/watch-series-5-44mm-stainless-steel-gps-only.png' },
  { id: 5, name: 'Watch Series 5 40mm Titanium GPS And Cellular', slug: 'apple-watch-series-5-44mm-ceramic-gps-cellular', image: '/watch-apple/watch-series-5-44mm-ceramic-gps-and-cellular.png' },
  { id: 6, name: 'Watch Series 5 44mm Titanium GPS And Cellular', slug: 'apple-watch-series-5-44mm-ceramic-gps-only', image: '/watch-apple/watch-series-5-44mm-ceramic-gps-only.png' },
  { id: 7, name: 'Watch Series 5 44mm Titanium GPS Only', slug: 'apple-watch-series-5-44mm-aluminium-gps-cellular', image: '/watch-apple/watch-series-5-44mm-aluminium-gps-and-cellular.png' },
  { id: 8, name: 'Watch Series 5 40mm Titanium GPS Only', slug: 'apple-watch-series-5-44mm-aluminium-gps-only', image: '/watch-apple/watch-series-5-44mm-aluminium-gps-only.png' },
  { id: 9, name: 'Watch Series 5 44mm Stainless Steel GPS Only', slug: 'apple-watch-series-5-40mm-titanium-gps-cellular', image: '/watch-apple/watch-series-5-40mm-titanium-gps-and-cellular.png' },
  { id: 10, name: 'Watch Series 5 44mm Stainless Steel GPS And Cellular', slug: 'apple-watch-series-5-40mm-titanium-gps-only', image: '/watch-apple/watch-series-5-40mm-titanium-gps-only.png' },
  { id: 11, name: 'Watch Series 5 40mm Stainless Steel GPS Only', slug: 'apple-watch-series-5-40mm-stainless-steel-gps-cellular', image: '/watch-apple/watch-series-5-40mm-stainless-steel-gps-and-cellular.png' },
  { id: 12, name: 'Watch Series 5 40mm Stainless Steel GPS And Cellular', slug: 'apple-watch-series-5-40mm-stainless-steel-gps-only', image: '/watch-apple/watch-series-5-40mm-stainless-steel-gps-only.png' },
  { id: 13, name: 'Watch Series 5 44mm Aluminium GPS And Cellular', slug: 'apple-watch-series-5-40mm-ceramic-gps-cellular', image: '/watch-apple/watch-series-5-40mm-ceramic-gps-and-cellular.png' },
  { id: 14, name: 'Watch Series 5 40mm Aluminium GPS And Cellular', slug: 'apple-watch-series-5-40mm-ceramic-gps-only', image: '/watch-apple/watch-series-5-40mm-ceramic-gps-only.png' },
  { id: 15, name: 'Watch Nike Plus Series 5 44mm GPS And Cellular', slug: 'apple-watch-series-5-40mm-aluminium-gps-cellular', image: '/watch-apple/watch-series-5-40mm-aluminium-gps-and-cellular.png' },
  { id: 16, name: 'Watch Series 5 44mm Aluminium GPS Only', slug: 'apple-watch-series-5-40mm-aluminium-gps-only', image: '/watch-apple/watch-series-5-40mm-aluminium-gps-only.png' },
  { id: 17, name: 'Watch Series 5 40mm Aluminium GPS Only', slug: 'apple-watch-series-4-44mm-stainless-steel-gps-cellular', image: '/watch-apple/watch-series-4-44mm-stainless-steel-gps-and-cellular.png' },
  { id: 18, name: 'Watch Nike Plus Series 5 40mm GPS And Cellular', slug: 'apple-watch-series-4-44mm-stainless-steel-gps-only', image: '/watch-apple/watch-series-4-44mm-stainless-steel-gps-only.png' },
  { id: 19, name: 'Watch Nike Plus Series 5 44mm GPS Only', slug: 'apple-watch-series-4-44mm-aluminium-gps-cellular', image: '/watch-apple/watch-series-4-44mm-aluminium-gps-and-cellular.png' },
  { id: 20, name: 'Watch Hermes Series 3 42mm GPS And Cellular', slug: 'apple-watch-series-4-44mm-aluminium-gps-only', image: '/watch-apple/watch-series-4-44mm-aluminium-gps-only.png' },
  { id: 21, name: 'Watch Nike Plus Series 5 40mm GPS Only', slug: 'apple-watch-series-4-40mm-stainless-steel-gps-cellular', image: '/watch-apple/watch-series-4-40mm-stainless-steel-gps-and-cellular.png' },
  { id: 22, name: 'Watch Hermes Series 3 38mm GPS And Cellular', slug: 'apple-watch-series-4-40mm-stainless-steel-gps-only', image: '/watch-apple/watch-series-4-40mm-stainless-steel-gps-only.png' },
  { id: 23, name: 'Watch Series 4 44mm Stainless Steel GPS And Cellular', slug: 'apple-watch-series-4-40mm-aluminium-gps-cellular', image: '/watch-apple/watch-series-4-40mm-aluminium-gps-and-cellular.png' },
  { id: 24, name: 'Watch Series 4 44mm Stainless Steel GPS Only', slug: 'apple-watch-series-4-40mm-aluminium-gps-only', image: '/watch-apple/watch-series-4-40mm-aluminium-gps-only.png' },
  { id: 25, name: 'Watch Nike Plus Series 4 44mm GPS And Cellular', slug: 'apple-watch-series-3-42mm-stainless-steel-gps-cellular', image: '/watch-apple/watch-series-3-42mm-stainless-steel-gps-and-cellular.png' },
  { id: 26, name: 'Watch Nike Plus Series 4 40mm GPS And Cellular', slug: 'apple-watch-series-3-42mm-stainless-steel-gps-only', image: '/watch-apple/watch-series-3-42mm-stainless-steel-gps-only.png' },
  { id: 27, name: 'Watch Series 4 40mm Stainless Steel GPS Only', slug: 'apple-watch-series-3-42mm-aluminium-gps-cellular', image: '/watch-apple/watch-series-3-42mm-aluminium-gps-and-cellular.png' },
  { id: 28, name: 'Watch Series 4 40mm Stainless Steel GPS And Cellular', slug: 'apple-watch-series-3-42mm-aluminium-gps-only', image: '/watch-apple/watch-series-3-42mm-aluminium-gps-only.png' },
  { id: 29, name: 'Watch Series 4 44mm Aluminium GPS And Cellular', slug: 'apple-watch-series-3-38mm-stainless-steel-gps-cellular', image: '/watch-apple/watch-series-3-38mm-stainless-steel-gps-and-cellular.png' },
  { id: 30, name: 'Watch Nike Plus Series 4 44mm GPS Only', slug: 'apple-watch-series-3-38mm-stainless-steel-gps-only', image: '/watch-apple/watch-series-3-38mm-stainless-steel-gps-only.png' },
  { id: 31, name: 'Watch Hermes 1st Gen 42mm', slug: 'apple-watch-series-3-38mm-aluminium-gps-cellular', image: '/watch-apple/watch-series-3-38mm-aluminium-gps-and-cellular.png' },
  { id: 32, name: 'Watch Edition Series 3 42mm GPS And Cellular', slug: 'apple-watch-series-3-38mm-aluminium-gps-only', image: '/watch-apple/watch-series-3-38mm-aluminium-gps-only.png' },
  { id: 33, name: 'Watch Series 4 40mm Aluminium GPS And Cellular', slug: 'apple-watch-series-2-42mm-stainless-steel', image: '/watch-apple/watch-series-2-42mm-stainless-steel.png' },
  { id: 34, name: 'Watch Series 4 44mm Aluminium GPS Only', slug: 'apple-watch-series-2-42mm-aluminium', image: '/watch-apple/watch-series-2-42mm-aluminium.png' },
  { id: 35, name: 'Watch Series 4 40mm Aluminium GPS Only', slug: 'apple-watch-series-2-38mm-stainless-steel', image: '/watch-apple/watch-series-2-38mm-stainless-steel.png' },
  { id: 36, name: 'Watch Nike Plus Series 4 40mm GPS Only', slug: 'apple-watch-series-2-38mm-aluminium', image: '/watch-apple/watch-series-2-38mm-aluminium.png' },
  { id: 37, name: 'Watch Hermes 1st Gen 38mm', slug: 'apple-watch-series-1-42mm', image: '/watch-apple/watch-sport-series-1-42mm.png' },
  { id: 38, name: 'Watch Hermes Series 2 42mm', slug: 'apple-watch-series-1-38mm', image: '/watch-apple/watch-sport-series-1-38mm.png' },
  { id: 39, name: 'Watch Edition Series 3 38mm GPS And Cellular', slug: 'apple-watch-sport-1st-gen-42mm', image: '/watch-apple/watch-sport-1st-gen-42mm.png' },
  { id: 40, name: 'Watch Series 3 42mm Stainless Steel GPS And Cellular', slug: 'apple-watch-sport-1st-gen-38mm', image: '/watch-apple/watch-sport-1st-gen-38mm.png' },
  { id: 41, name: 'Watch Hermes Series 2 38mm', slug: 'apple-watch-1st-gen-42mm', image: '/watch-apple/watch-1st-gen-42mm.png' },
  { id: 42, name: 'Watch Series 3 42mm Aluminium GPS And Cellular', slug: 'apple-watch-1st-gen-38mm', image: '/watch-apple/watch-1st-gen-38mm.png' },
  { id: 43, name: 'Watch Nike Plus Series 3 42mm GPS And Cellular', slug: 'apple-watch-nike-series-5-44mm-gps-cellular', image: '/watch-apple/watch-nike-plus-series-5-44mm-gps-and-cellular.png' },
  { id: 44, name: 'Watch Series 3 38mm Stainless Steel GPS And Cellular', slug: 'apple-watch-nike-series-5-44mm-gps-only', image: '/watch-apple/watch-nike-plus-series-5-44mm-gps-only.png' },
  { id: 45, name: 'Watch Series 3 38mm Aluminium GPS And Cellular', slug: 'apple-watch-nike-series-5-40mm-gps-cellular', image: '/watch-apple/watch-nike-plus-series-5-40mm-gps-and-cellular.png' },
  { id: 46, name: 'Watch Series 3 42mm Aluminium GPS Only', slug: 'apple-watch-nike-series-5-40mm-gps-only', image: '/watch-apple/watch-nike-plus-series-5-40mm-gps-only.png' },
  { id: 47, name: 'Watch Series 2 42mm Stainless Steel', slug: 'apple-watch-nike-series-4-44mm-gps-cellular', image: '/watch-apple/watch-nike-plus-series-4-44mm-gps-and-cellular.png' },
  { id: 48, name: 'Watch Series 3 42mm Stainless Steel GPS Only', slug: 'apple-watch-nike-series-4-44mm-gps-only', image: '/watch-apple/watch-nike-plus-series-4-44mm-gps-only.png' },
  { id: 49, name: 'Watch Nike Plus Series 3 38mm GPS And Cellular', slug: 'apple-watch-nike-series-4-40mm-gps-cellular', image: '/watch-apple/watch-nike-plus-series-4-40mm-gps-and-cellular.png' },
  { id: 50, name: 'Watch Series 3 38mm Aluminium GPS Only', slug: 'apple-watch-nike-series-4-40mm-gps-only', image: '/watch-apple/watch-nike-plus-series-4-40mm-gps-only.png' },
  { id: 51, name: 'Watch Series 3 38mm Stainless Steel GPS Only', slug: 'apple-watch-nike-series-3-42mm-gps-cellular', image: '/watch-apple/watch-nike-plus-series-3-42mm-gps-and-cellular.png' },
  { id: 52, name: 'Watch Series 2 42mm Aluminium', slug: 'apple-watch-nike-series-3-42mm-gps-only', image: '/watch-apple/watch-nike-plus-series-3-42mm-gps-only.png' },
  { id: 53, name: 'Watch Nike Plus Series 3 42mm GPS Only', slug: 'apple-watch-nike-series-3-38mm-gps-cellular', image: '/watch-apple/watch-nike-plus-series-3-38mm-gps-and-cellular.png' },
  { id: 54, name: 'Watch Series 2 38mm Stainless Steel', slug: 'apple-watch-nike-series-3-38mm-gps-only', image: '/watch-apple/watch-nike-plus-series-3-38mm-gps-only.png' },
  { id: 55, name: 'Watch Nike Plus Series 2 42mm', slug: 'apple-watch-nike-series-2-42mm', image: '/watch-apple/watch-nike-plus-series-2-42mm.png' },
  { id: 56, name: 'Watch Nike Plus Series 3 38mm GPS Only', slug: 'apple-watch-nike-series-2-38mm', image: '/watch-apple/watch-nike-plus-series-2-38mm.png' },
  { id: 57, name: 'Watch Series 2 38mm Aluminium', slug: 'apple-watch-hermes-series-3-42mm-gps-cellular', image: '/watch-apple/watch-hermes-series-3-42mm-gps-and-cellular.png' },
  { id: 58, name: 'Watch Nike Plus Series 2 38mm', slug: 'apple-watch-hermes-series-3-38mm-gps-cellular', image: '/watch-apple/watch-hermes-series-3-38mm-gps-and-cellular.png' },
  { id: 59, name: 'Watch Sport Series 1 42mm', slug: 'apple-watch-hermes-series-2-42mm', image: '/watch-apple/watch-hermes-series-2-42mm.png' },
  { id: 60, name: 'Watch 1st Gen 42mm', slug: 'apple-watch-hermes-series-2-38mm', image: '/watch-apple/watch-hermes-series-2-38mm.png' },
  { id: 61, name: 'Watch Sport Series 1 38mm', slug: 'apple-watch-hermes-1st-gen-42mm', image: '/watch-apple/watch-hermes-1st-gen-42mm.png' },
  { id: 62, name: 'Watch Sport 1st Gen 42mm', slug: 'apple-watch-hermes-1st-gen-38mm', image: '/watch-apple/watch-hermes-1st-gen-38mm.png' },
  { id: 63, name: 'Watch 1st Gen 38mm', slug: 'apple-watch-edition-series-3-42mm-gps-cellular', image: '/watch-apple/watch-edition-series-3-42mm-gps-and-cellular.png' },
  { id: 64, name: 'Watch Sport 1st Gen 38mm', slug: 'apple-watch-edition-series-3-38mm-gps-cellular', image: '/watch-apple/watch-edition-series-3-38mm-gps-and-cellular.png' }
]

// Apple Computer models data - 101 models
const appleComputers = [
  { id: 1, name: 'MacBook Pro 16"', slug: 'macbook-pro-16-2019', image: '/computer-apple/macbook-pro-16-2019.png' },
  { id: 2, name: 'MacBook Pro 15"', slug: 'macbook-pro-15-2019', image: '/computer-apple/macbook-pro-15-2019.png' },
  { id: 3, name: 'MacBook Pro 15"', slug: 'macbook-pro-15-2018', image: '/computer-apple/macbook-pro-15-2018.png' },
  { id: 4, name: 'MacBook Pro 15"', slug: 'macbook-pro-15-2017', image: '/computer-apple/macbook-pro-15-2017.png' },
  { id: 5, name: 'MacBook Pro 15"', slug: 'macbook-pro-15-2016', image: '/computer-apple/macbook-pro-15-2016.png' },
  { id: 6, name: 'MacBook Pro 15"', slug: 'macbook-pro-15-2015', image: '/computer-apple/macbook-pro-15-2015.png' },
  { id: 7, name: 'MacBook Pro 15"', slug: 'macbook-pro-15-2014', image: '/computer-apple/macbook-pro-15-2014.png' },
  { id: 8, name: 'MacBook Pro 15"', slug: 'macbook-pro-15-2013', image: '/computer-apple/macbook-pro-15-2013.png' },
  { id: 9, name: 'MacBook Pro 15"', slug: 'macbook-pro-15-2012', image: '/computer-apple/macbook-pro-15-2012.png' },
  { id: 10, name: 'MacBook Pro 15"', slug: 'macbook-pro-15-2011', image: '/computer-apple/macbook-pro-15-2011.png' },
  { id: 11, name: 'MacBook Pro 15"', slug: 'macbook-pro-15-2010', image: '/computer-apple/macbook-pro-15-2010.png' },
  { id: 12, name: 'MacBook Pro 15"', slug: 'macbook-pro-15-2009', image: '/computer-apple/macbook-pro-15-2009.png' },
  { id: 13, name: 'MacBook Pro 15"', slug: 'macbook-pro-15-2008', image: '/computer-apple/macbook-pro-15-2008.png' },
  { id: 14, name: 'MacBook Pro 15"', slug: 'macbook-pro-15-2007', image: '/computer-apple/macbook-pro-15-2007.png' },
  { id: 15, name: 'MacBook Pro 15"', slug: 'macbook-pro-15-2006', image: '/computer-apple/macbook-pro-15-2006.png' },
  { id: 16, name: 'MacBook Pro 17"', slug: 'macbook-pro-17-2011', image: '/computer-apple/macbook-pro-17-2011.png' },
  { id: 17, name: 'MacBook Pro 17"', slug: 'macbook-pro-17-2010', image: '/computer-apple/macbook-pro-17-2010.png' },
  { id: 18, name: 'MacBook Pro 17"', slug: 'macbook-pro-17-2009', image: '/computer-apple/macbook-pro-17-2009.png' },
  { id: 19, name: 'MacBook Pro 17"', slug: 'macbook-pro-17-2008', image: '/computer-apple/macbook-pro-17-2008.png' },
  { id: 20, name: 'MacBook Pro 17"', slug: 'macbook-pro-17-2007', image: '/computer-apple/macbook-pro-17-2007.png' },
  { id: 21, name: 'MacBook Pro 17"', slug: 'macbook-pro-17-2006', image: '/computer-apple/macbook-pro-17-2006.png' },
  { id: 22, name: 'MacBook Pro 13"', slug: 'macbook-pro-13-2020', image: '/computer-apple/macbook-pro-13-2020.png' },
  { id: 23, name: 'MacBook Pro 13"', slug: 'macbook-pro-13-2019', image: '/computer-apple/macbook-pro-13-2019.png' },
  { id: 24, name: 'MacBook Pro 13"', slug: 'macbook-pro-13-2018', image: '/computer-apple/macbook-pro-13-2018.png' },
  { id: 25, name: 'MacBook Pro 13"', slug: 'macbook-pro-13-2017', image: '/computer-apple/macbook-pro-13-2017.png' },
  { id: 26, name: 'MacBook Pro 13"', slug: 'macbook-pro-13-2016', image: '/computer-apple/macbook-pro-13-2016.png' },
  { id: 27, name: 'MacBook Pro 13"', slug: 'macbook-pro-13-2015', image: '/computer-apple/macbook-pro-13-2015.png' },
  { id: 28, name: 'MacBook Pro 13"', slug: 'macbook-pro-13-2014', image: '/computer-apple/macbook-pro-13-2014.png' },
  { id: 29, name: 'MacBook Pro 13"', slug: 'macbook-pro-13-2013', image: '/computer-apple/macbook-pro-13-2013.png' },
  { id: 30, name: 'MacBook Pro 13"', slug: 'macbook-pro-13-2012', image: '/computer-apple/macbook-pro-13-2012.png' },
  { id: 31, name: 'MacBook Pro 13"', slug: 'macbook-pro-13-2011', image: '/computer-apple/macbook-pro-13-2011.png' },
  { id: 32, name: 'MacBook Pro 13"', slug: 'macbook-pro-13-2010', image: '/computer-apple/macbook-pro-13-2010.png' },
  { id: 33, name: 'MacBook Pro 13"', slug: 'macbook-pro-13-2009', image: '/computer-apple/macbook-pro-13-2009.png' },
  { id: 34, name: 'MacBook Air 13"', slug: 'macbook-air-13-2020', image: '/computer-apple/macbook-air-13-2020.png' },
  { id: 35, name: 'MacBook Air 13"', slug: 'macbook-air-13-2019', image: '/computer-apple/macbook-air-13-2019.png' },
  { id: 36, name: 'MacBook Air 13"', slug: 'macbook-air-13-2018', image: '/computer-apple/macbook-air-13-2018.png' },
  { id: 37, name: 'MacBook Air 13"', slug: 'macbook-air-13-2017', image: '/computer-apple/macbook-air-13-2017.png' },
  { id: 38, name: 'MacBook Air 13"', slug: 'macbook-air-13-2015', image: '/computer-apple/macbook-air-13-2015.png' },
  { id: 39, name: 'MacBook Air 13"', slug: 'macbook-air-13-2014', image: '/computer-apple/macbook-air-13-2014.png' },
  { id: 40, name: 'MacBook Air 13"', slug: 'macbook-air-13-2013', image: '/computer-apple/macbook-air-13-2013.png' },
  { id: 41, name: 'MacBook Air 13"', slug: 'macbook-air-13-2012', image: '/computer-apple/macbook-air-13-2012.png' },
  { id: 42, name: 'MacBook Air 13"', slug: 'macbook-air-13-2011', image: '/computer-apple/macbook-air-13-2011.png' },
  { id: 43, name: 'MacBook Air 13"', slug: 'macbook-air-13-2010', image: '/computer-apple/macbook-air-13-2010.png' },
  { id: 44, name: 'MacBook Air 13"', slug: 'macbook-air-13-2009', image: '/computer-apple/macbook-air-13-2009.png' },
  { id: 45, name: 'MacBook Air 13"', slug: 'macbook-air-13-2008', image: '/computer-apple/macbook-air-13-2008.png' },
  { id: 46, name: 'MacBook Air 11"', slug: 'macbook-air-11-2015', image: '/computer-apple/macbook-air-11-2015.png' },
  { id: 47, name: 'MacBook Air 11"', slug: 'macbook-air-11-2014', image: '/computer-apple/macbook-air-11-2014.png' },
  { id: 48, name: 'MacBook Air 11"', slug: 'macbook-air-11-2013', image: '/computer-apple/macbook-air-11-2013.png' },
  { id: 49, name: 'MacBook Air 11"', slug: 'macbook-air-11-2012', image: '/computer-apple/macbook-air-11-2012.png' },
  { id: 50, name: 'MacBook Air 11"', slug: 'macbook-air-11-2011', image: '/computer-apple/macbook-air-11-2011.png' },
  { id: 51, name: 'MacBook Air 11"', slug: 'macbook-air-11-2010', image: '/computer-apple/macbook-air-11-2010.png' },
  { id: 52, name: 'MacBook 12"', slug: 'macbook-12-2017', image: '/computer-apple/macbook-12-2017.png' },
  { id: 53, name: 'MacBook 12"', slug: 'macbook-12-2016', image: '/computer-apple/macbook-12-2016.png' },
  { id: 54, name: 'MacBook 12"', slug: 'macbook-12-2015', image: '/computer-apple/macbook-12-2015.png' },
  { id: 55, name: 'MacBook 13"', slug: 'macbook-13-2010', image: '/computer-apple/macbook-13-2010.png' },
  { id: 56, name: 'MacBook 13"', slug: 'macbook-13-2009', image: '/computer-apple/macbook-13-2009.png' },
  { id: 57, name: 'MacBook 13"', slug: 'macbook-13-2008', image: '/computer-apple/macbook-13-2008.png' },
  { id: 58, name: 'MacBook 13"', slug: 'macbook-13-2007', image: '/computer-apple/macbook-13-2007.png' },
  { id: 59, name: 'MacBook 13"', slug: 'macbook-13-2006', image: '/computer-apple/macbook-13-2006.png' },
  { id: 60, name: 'iMac 27"', slug: 'imac-27-2020', image: '/computer-apple/imac-27-2020.png' },
  { id: 61, name: 'iMac 27"', slug: 'imac-27-2019', image: '/computer-apple/imac-27-2019.png' },
  { id: 62, name: 'iMac 27"', slug: 'imac-27-2017', image: '/computer-apple/imac-27-2017.png' },
  { id: 63, name: 'iMac 27"', slug: 'imac-27-2015', image: '/computer-apple/imac-27-2015.png' },
  { id: 64, name: 'iMac 27"', slug: 'imac-27-2014', image: '/computer-apple/imac-27-2014.png' },
  { id: 65, name: 'iMac 27"', slug: 'imac-27-2013', image: '/computer-apple/imac-27-2013.png' },
  { id: 66, name: 'iMac 27"', slug: 'imac-27-2012', image: '/computer-apple/imac-27-2012.png' },
  { id: 67, name: 'iMac 27"', slug: 'imac-27-2011', image: '/computer-apple/imac-27-2011.png' },
  { id: 68, name: 'iMac 27"', slug: 'imac-27-2010', image: '/computer-apple/imac-27-2010.png' },
  { id: 69, name: 'iMac 27"', slug: 'imac-27-2009', image: '/computer-apple/imac-27-2009.png' },
  { id: 70, name: 'iMac 21.5"', slug: 'imac-21-5-2019', image: '/computer-apple/imac-21-5-2019.png' },
  { id: 71, name: 'iMac 21.5"', slug: 'imac-21-5-2017', image: '/computer-apple/imac-21-5-2017.png' },
  { id: 72, name: 'iMac 21.5"', slug: 'imac-21-5-2015', image: '/computer-apple/imac-21-5-2015.png' },
  { id: 73, name: 'iMac 21.5"', slug: 'imac-21-5-2014', image: '/computer-apple/imac-21-5-2014.png' },
  { id: 74, name: 'iMac 21.5"', slug: 'imac-21-5-2013', image: '/computer-apple/imac-21-5-2013.png' },
  { id: 75, name: 'iMac 21.5"', slug: 'imac-21-5-2012', image: '/computer-apple/imac-21-5-2012.png' },
  { id: 76, name: 'iMac 21.5"', slug: 'imac-21-5-2011', image: '/computer-apple/imac-21-5-2011.png' },
  { id: 77, name: 'iMac 21.5"', slug: 'imac-21-5-2010', image: '/computer-apple/imac-21-5-2010.png' },
  { id: 78, name: 'iMac 21.5"', slug: 'imac-21-5-2009', image: '/computer-apple/imac-21-5-2009.png' },
  { id: 79, name: 'iMac 24"', slug: 'imac-24-2009', image: '/computer-apple/imac-24-2009.png' },
  { id: 80, name: 'iMac 24"', slug: 'imac-24-2008', image: '/computer-apple/imac-24-2008.png' },
  { id: 81, name: 'iMac 24"', slug: 'imac-24-2007', image: '/computer-apple/imac-24-2007.png' },
  { id: 82, name: 'iMac 20"', slug: 'imac-20-2009', image: '/computer-apple/imac-20-2009.png' },
  { id: 83, name: 'iMac 20"', slug: 'imac-20-2008', image: '/computer-apple/imac-20-2008.png' },
  { id: 84, name: 'iMac 20"', slug: 'imac-20-2007', image: '/computer-apple/imac-20-2007.png' },
  { id: 85, name: 'iMac Pro 27"', slug: 'imac-pro-27', image: '/computer-apple/imac-pro-27.png' },
  { id: 86, name: 'Mac Pro Rack', slug: 'mac-pro-rack-2019', image: '/computer-apple/mac-pro-rack-2019.png' },
  { id: 87, name: 'Mac Pro (2019)', slug: 'mac-pro-2013', image: '/computer-apple/mac-pro-2013.png' },
  { id: 88, name: 'Mac Pro', slug: 'mac-pro-2012', image: '/computer-apple/mac-pro-2012.png' },
  { id: 89, name: 'Mac Pro', slug: 'mac-pro-2010', image: '/computer-apple/mac-pro-2010.png' },
  { id: 90, name: 'Mac Pro', slug: 'mac-pro-2009', image: '/computer-apple/mac-pro-2009.png' },
  { id: 91, name: 'Mac Pro', slug: 'mac-pro-2008', image: '/computer-apple/mac-pro-2008.png' },
  { id: 92, name: 'Mac Pro', slug: 'mac-pro-2007', image: '/computer-apple/mac-pro-2007.png' },
  { id: 93, name: 'Mac Pro', slug: 'mac-pro-2006', image: '/computer-apple/mac-pro-2006.png' },
  { id: 94, name: 'Mac Mini', slug: 'mac-mini-2018', image: '/computer-apple/mac-mini-2018.png' },
  { id: 95, name: 'Mac Mini', slug: 'mac-mini-2014', image: '/computer-apple/mac-mini-2014.png' },
  { id: 96, name: 'Mac Mini', slug: 'mac-mini-2012', image: '/computer-apple/mac-mini-2012.png' },
  { id: 97, name: 'Mac Mini', slug: 'mac-mini-2011', image: '/computer-apple/mac-mini-2011.png' },
  { id: 98, name: 'Mac Mini', slug: 'mac-mini-2010', image: '/computer-apple/mac-mini-2010.png' },
  { id: 99, name: 'Mac Mini', slug: 'mac-mini-2009', image: '/computer-apple/mac-mini-2009.png' },
  { id: 100, name: 'Mac Mini', slug: 'mac-mini-2007', image: '/computer-apple/mac-mini-2007.png' },
  { id: 101, name: 'Apple Computer', slug: 'apple-computer', image: '/computer-apple/20201003140158.jpg' }
]

// Samsung Galaxy Watch models data - 17 models
const samsungWatches = [
  { id: 1, name: 'Galaxy Watch', slug: 'galaxy-watch-46mm', image: '/watch-samsung/galaxy-watch-46mm.png' },
  { id: 2, name: 'Galaxy Watch', slug: 'galaxy-watch-42mm', image: '/watch-samsung/galaxy-watch-42mm.png' },
  { id: 3, name: 'Galaxy Watch Active', slug: 'galaxy-watch-active', image: '/watch-samsung/galaxy-watch-active.png' },
  { id: 4, name: 'Galaxy Watch Active 2', slug: 'galaxy-watch-active-2-40mm', image: '/watch-samsung/galaxy-watch-active-2-40mm.png' },
  { id: 5, name: 'Galaxy Gear Sport', slug: 'galaxy-gear-sport', image: '/watch-samsung/galaxy-gear-sport.png' },
  { id: 6, name: 'Galaxy Gear S3', slug: 'galaxy-gear-s3-frontier', image: '/watch-samsung/galaxy-gear-s3-frontier.png' },
  { id: 7, name: 'Galaxy Gear S3', slug: 'galaxy-gear-s3-classic', image: '/watch-samsung/galaxy-gear-s3-classic.png' },
  { id: 8, name: 'Galaxy Gear S2', slug: 'galaxy-gear-s2', image: '/watch-samsung/galaxy-gear-s2.png' },
  { id: 9, name: 'Galaxy Gear S2', slug: 'galaxy-gear-s2-classic', image: '/watch-samsung/galaxy-gear-s2-classic.png' },
  { id: 10, name: 'Galaxy Gear S', slug: 'galaxy-gear-s', image: '/watch-samsung/galaxy-gear-s.png' },
  { id: 11, name: 'Galaxy Gear Live', slug: 'galaxy-gear-live', image: '/watch-samsung/galaxy-gear-live.png' },
  { id: 12, name: 'Galaxy Gear Fit2 Pro', slug: 'galaxy-gear-fit2-pro', image: '/watch-samsung/galaxy-gear-fit2-pro.png' },
  { id: 13, name: 'Galaxy Gear Fit2', slug: 'galaxy-gear-fit2', image: '/watch-samsung/galaxy-gear-fit2.png' },
  { id: 14, name: 'Galaxy Gear Fit', slug: 'galaxy-gear-fit', image: '/watch-samsung/galaxy-gear-fit.png' },
  { id: 15, name: 'Galaxy Gear 2', slug: 'galaxy-gear-2', image: '/watch-samsung/galaxy-gear-2.png' },
  { id: 16, name: 'Galaxy Gear 2 Neo', slug: 'galaxy-gear-2-neo', image: '/watch-samsung/galaxy-gear-2-neo.png' },
  { id: 17, name: 'Samsung Smartwatch', slug: 'samsung-smartwatch', image: '/watch-samsung/20201006130850.png' }
]

// Samsung Galaxy Tab models data - 56 models
const samsungTablets = [
  { id: 1, name: 'Galaxy Tab S6 Lite', slug: 'galaxy-tab-s6-lite', image: '/tablet-samsung/galaxy-tab-s6-lite.png' },
  { id: 2, name: 'Galaxy Tab S5e', slug: 'galaxy-tab-s5e', image: '/tablet-samsung/galaxy-tab-s5e.png' },
  { id: 3, name: 'Galaxy Tab S4 10.5', slug: 'galaxy-tab-s4-10-5', image: '/tablet-samsung/galaxy-tab-s4-10-5.png' },
  { id: 4, name: 'Galaxy Tab S3 9.7', slug: 'galaxy-tab-s3-9-7', image: '/tablet-samsung/galaxy-tab-s3-9-7.png' },
  { id: 5, name: 'Galaxy Tab S2 9.7', slug: 'galaxy-tab-s2-9-7', image: '/tablet-samsung/galaxy-tab-s2-9-7.png' },
  { id: 6, name: 'Galaxy Tab S2 8.0', slug: 'galaxy-tab-s2-8-0', image: '/tablet-samsung/galaxy-tab-s2-8-0.png' },
  { id: 7, name: 'Galaxy Tab S6', slug: 'galaxy-tab-s6', image: '/tablet-samsung/Galaxy Tab S6.png' },
  { id: 8, name: 'Galaxy Tab S 10.5', slug: 'galaxy-tab-s-10-5', image: '/tablet-samsung/galaxy-tab-s-10-5.png' },
  { id: 9, name: 'Galaxy Tab S 8.4', slug: 'galaxy-tab-s-8-4', image: '/tablet-samsung/galaxy-tab-s-8-4.png' },
  { id: 10, name: 'Galaxy Tab A 10.1 (2019)', slug: 'galaxy-tab-a-10-1-2019', image: '/tablet-samsung/galaxy-tab-a-10-1-2019.png' },
  { id: 11, name: 'Galaxy Tab A 10.1 (2016)', slug: 'galaxy-tab-a-10-1-2016', image: '/tablet-samsung/galaxy-tab-a-10-1-2016.png' },
  { id: 12, name: 'Galaxy Tab A 10.5 (2018)', slug: 'galaxy-tab-a-10-5-2018', image: '/tablet-samsung/galaxy-tab-a-10-5-2018.png' },
  { id: 13, name: 'Galaxy Tab A 9.7', slug: 'galaxy-tab-a-9-7', image: '/tablet-samsung/galaxy-tab-a-9-7.png' },
  { id: 14, name: 'Galaxy Tab A 8.0 (2019)', slug: 'galaxy-tab-a-8-0-2019', image: '/tablet-samsung/galaxy-tab-a-8-0-2019.png' },
  { id: 15, name: 'Galaxy Tab A 8.0 (2018)', slug: 'galaxy-tab-a-8-0-2018', image: '/tablet-samsung/galaxy-tab-a-8-0-2018.png' },
  { id: 16, name: 'Galaxy Tab A 8.0 (2017)', slug: 'galaxy-tab-a-8-0-2017', image: '/tablet-samsung/galaxy-tab-a-8-0-2017.png' },
  { id: 17, name: 'Galaxy Tab A 8.0', slug: 'galaxy-tab-a-8-0', image: '/tablet-samsung/galaxy-tab-a-8-0.png' },
  { id: 18, name: 'Galaxy Tab A 7.0 (2016)', slug: 'galaxy-tab-a-7-0-2016', image: '/tablet-samsung/galaxy-tab-a-7-0-2016.png' },
  { id: 19, name: 'Galaxy Tab E 9.6', slug: 'galaxy-tab-e-9-6', image: '/tablet-samsung/galaxy-tab-e-9-6.png' },
  { id: 20, name: 'Galaxy Tab E 8.0', slug: 'galaxy-tab-e-8-0', image: '/tablet-samsung/galaxy-tab-e-8-0.png' },
  { id: 21, name: 'Galaxy Tab Pro 12.2', slug: 'galaxy-tab-pro-12-2', image: '/tablet-samsung/galaxy-tab-pro-12-2.png' },
  { id: 22, name: 'Galaxy Tab Pro 10.1', slug: 'galaxy-tab-pro-10-1', image: '/tablet-samsung/galaxy-tab-pro-10-1.png' },
  { id: 23, name: 'Galaxy Tab Pro 8.4', slug: 'galaxy-tab-pro-8-4', image: '/tablet-samsung/galaxy-tab-pro-8-4.png' },
  { id: 24, name: 'Galaxy Tab Pro S', slug: 'galaxy-tab-pro-s', image: '/tablet-samsung/galaxy-tab-pro-s.png' },
  { id: 25, name: 'Galaxy Tab 8.9', slug: 'galaxy-tab-8-9', image: '/tablet-samsung/galaxy-tab-8-9.png' },
  { id: 26, name: 'Galaxy Tab 7.7', slug: 'galaxy-tab-7-7', image: '/tablet-samsung/galaxy-tab-7-7.png' },
  { id: 27, name: 'Galaxy Tab 7.0 Plus', slug: 'galaxy-tab-7-0-plus', image: '/tablet-samsung/galaxy-tab-7-0-plus.png' },
  { id: 28, name: 'Galaxy Tab 7.0', slug: 'galaxy-tab-7-0', image: '/tablet-samsung/galaxy-tab-7-0.png' },
  { id: 29, name: 'Galaxy Tab 4 10.1', slug: 'galaxy-tab-4-10-1', image: '/tablet-samsung/galaxy-tab-4-10-1.png' },
  { id: 30, name: 'Galaxy Tab 4 8.0', slug: 'galaxy-tab-4-8-0', image: '/tablet-samsung/galaxy-tab-4-8-0.png' },
  { id: 31, name: 'Galaxy Tab 4 7.0', slug: 'galaxy-tab-4-7-0', image: '/tablet-samsung/galaxy-tab-4-7-0.png' },
  { id: 32, name: 'Galaxy Tab 4 Nook 7.0', slug: 'galaxy-tab-4-nook-7-0', image: '/tablet-samsung/galaxy-tab-4-nook-7-0.png' },
  { id: 33, name: 'Galaxy Tab 3 10.1', slug: 'galaxy-tab-3-10-1', image: '/tablet-samsung/galaxy-tab-3-10-1.png' },
  { id: 34, name: 'Galaxy Tab 3 8.0', slug: 'galaxy-tab-3-8-0', image: '/tablet-samsung/galaxy-tab-3-8-0.png' },
  { id: 35, name: 'Galaxy Tab 3 7.0', slug: 'galaxy-tab-3-7-0', image: '/tablet-samsung/galaxy-tab-3-7-0.png' },
  { id: 36, name: 'Galaxy Tab 3 7.0 Kids', slug: 'galaxy-tab-3-7-0-kids', image: '/tablet-samsung/galaxy-tab-3-7-0-kids.png' },
  { id: 37, name: 'Galaxy Tab 3 7.0 Garnet Red', slug: 'galaxy-tab-3-7-0-garnet-red', image: '/tablet-samsung/galaxy-tab-3-7-0-garnet-red.png' },
  { id: 38, name: 'Galaxy Tab 3 Lite 7.0', slug: 'galaxy-tab-3-lite-7-0', image: '/tablet-samsung/galaxy-tab-3-lite-7-0.png' },
  { id: 39, name: 'Galaxy Tab 2 10.1', slug: 'galaxy-tab-2-10-1', image: '/tablet-samsung/galaxy-tab-2-10-1.png' },
  { id: 40, name: 'Galaxy Tab 2 7.0', slug: 'galaxy-tab-2-7-0', image: '/tablet-samsung/galaxy-tab-2-7-0.png' },
  { id: 41, name: 'Galaxy Tab 10.1', slug: 'galaxy-tab-10-1', image: '/tablet-samsung/galaxy-tab-10-1.png' },
  { id: 42, name: 'Galaxy Note 10.1 (2014 Edition)', slug: 'galaxy-note-10-1-2014-edition', image: '/tablet-samsung/galaxy-note-10-1-2014-edition.png' },
  { id: 43, name: 'Galaxy Note 10.1', slug: 'galaxy-note-10-1', image: '/tablet-samsung/galaxy-note-10-1.png' },
  { id: 44, name: 'Galaxy Note 8.0', slug: 'galaxy-note-8-0', image: '/tablet-samsung/galaxy-note-8-0.png' },
  { id: 45, name: 'Galaxy Note Pro', slug: 'galaxy-note-pro', image: '/tablet-samsung/galaxy-note-pro.png' },
  { id: 46, name: 'Galaxy View', slug: 'galaxy-view', image: '/tablet-samsung/galaxy-view.png' },
  { id: 47, name: 'Galaxy View 2', slug: 'galaxy-view2', image: '/tablet-samsung/galaxy-view2.png' },
  { id: 48, name: 'Galaxy J Max', slug: 'galaxy-j-max', image: '/tablet-samsung/galaxy-j-max.png' },
  { id: 49, name: 'ATIV Tab 3', slug: 'ativ-tab-3', image: '/tablet-samsung/ativ-tab-3.png' },
  { id: 50, name: 'ATIV Tab 5', slug: 'ativ-tab-5', image: '/tablet-samsung/ativ-tab-5.png' },
  { id: 51, name: 'ATIV Tab 7', slug: 'ativ-tab-7', image: '/tablet-samsung/ativ-tab-7.png' },
  { id: 52, name: 'ATIV Tab Q', slug: 'ativ-tab-q', image: '/tablet-samsung/ativ-tab-q.png' },
  { id: 53, name: 'ATIV Tab', slug: 'ativ-tab', image: '/tablet-samsung/ativ-tab.png' },
  { id: 54, name: 'Google Nexus 10', slug: 'google-nexus-10', image: '/tablet-samsung/google-nexus-10.png' },
  { id: 55, name: 'Q1 Ultra', slug: 'q1-ultra', image: '/tablet-samsung/q1-ultra.png' },
  { id: 56, name: 'Q1', slug: 'q1', image: '/tablet-samsung/q1.png' }
]

// Apple iPad models data - 22 models
const appleTablets = [
  { id: 1, name: 'iPad Pro 12.9" (2020)', slug: 'ipad-pro-12-9-2020', image: '/tablet-apple/ipad-pro-12-9-2020.png' },
  { id: 2, name: 'iPad Pro 12.9" (2018)', slug: 'ipad-pro-12-9-2018', image: '/tablet-apple/ipad-pro-12-9-2018.png' },
  { id: 3, name: 'iPad Pro 12.9" (2017)', slug: 'ipad-pro-12-9-2017', image: '/tablet-apple/ipad-pro-12-9-2017.png' },
  { id: 4, name: 'iPad Pro 12.9"', slug: 'ipad-pro-12-9', image: '/tablet-apple/ipad-pro-12-9.png' },
  { id: 5, name: 'iPad Pro 11" (2020)', slug: 'ipad-pro-11-0-2020', image: '/tablet-apple/ipad-pro-11-0-2020.png' },
  { id: 6, name: 'iPad Pro 11" (2018)', slug: 'ipad-pro-11-0-2018', image: '/tablet-apple/ipad-pro-11-0-2018.png' },
  { id: 7, name: 'iPad Pro 10.5"', slug: 'ipad-pro-10-5', image: '/tablet-apple/ipad-pro-10-5.png' },
  { id: 8, name: 'iPad Pro 9.7"', slug: 'ipad-pro-9-7', image: '/tablet-apple/ipad-pro-9-7.png' },
  { id: 9, name: 'iPad Air', slug: 'ipad-air', image: '/tablet-apple/ipad-air.png' },
  { id: 10, name: 'iPad Air 2', slug: 'ipad-air-2', image: '/tablet-apple/ipad-air-2.png' },
  { id: 11, name: 'iPad (2018)', slug: 'ipad-9-7-2018', image: '/tablet-apple/ipad-9-7-2018.png' },
  { id: 12, name: 'iPad (2017)', slug: 'ipad-9-7-2017', image: '/tablet-apple/ipad-9-7-2017.png' },
  { id: 13, name: 'iPad (2019)', slug: 'ipad-10-2-2019', image: '/tablet-apple/ipad-10-2-2019.png' },
  { id: 14, name: 'iPad', slug: 'ipad', image: '/tablet-apple/ipad.png' },
  { id: 15, name: 'iPad 2', slug: 'ipad-2', image: '/tablet-apple/ipad-2.png' },
  { id: 16, name: 'iPad 3', slug: 'ipad-3', image: '/tablet-apple/ipad-3.png' },
  { id: 17, name: 'iPad 4', slug: 'ipad-4', image: '/tablet-apple/ipad-4.png' },
  { id: 18, name: 'iPad Mini', slug: 'ipad-mini', image: '/tablet-apple/ipad-mini.png' },
  { id: 19, name: 'iPad Mini 2', slug: 'ipad-mini-2', image: '/tablet-apple/ipad-mini-2.png' },
  { id: 20, name: 'iPad Mini 3', slug: 'ipad-mini-3', image: '/tablet-apple/ipad-mini-3.png' },
  { id: 21, name: 'iPad Mini 4', slug: 'ipad-mini-4', image: '/tablet-apple/ipad-mini-4.png' },
  { id: 22, name: 'iPad Mini (2019)', slug: 'ipad-mini-2019', image: '/tablet-apple/ipad-mini-2019.png' }
]

// Samsung Galaxy models data - 234 models
const samsungPhones = [
  { id: 1, name: 'Galaxy S23 Ultra', slug: 'galaxy-s23-ultra', image: '/samsung/galaxy-s10-plus.png' },
  { id: 2, name: 'Galaxy S23 Plus', slug: 'galaxy-s23-plus', image: '/samsung/galaxy-s10.png' },
  { id: 3, name: 'Galaxy S23', slug: 'galaxy-s23', image: '/samsung/galaxy-s10e.png' },
  { id: 4, name: 'Galaxy S22 Ultra', slug: 'galaxy-s22-ultra', image: '/samsung/galaxy-s9-plus.png' },
  { id: 5, name: 'Galaxy S22 Plus', slug: 'galaxy-s22-plus', image: '/samsung/galaxy-s9.png' },
  { id: 6, name: 'Galaxy S22', slug: 'galaxy-s22', image: '/samsung/galaxy-s8-plus.png' },
  { id: 7, name: 'Galaxy S21 Ultra', slug: 'galaxy-s21-ultra', image: '/samsung/galaxy-s8.png' },
  { id: 8, name: 'Galaxy S21 Plus', slug: 'galaxy-s21-plus', image: '/samsung/galaxy-s7-edge.png' },
  { id: 9, name: 'Galaxy S21', slug: 'galaxy-s21', image: '/samsung/galaxy-s7.png' },
  { id: 10, name: 'Galaxy S20 Ultra 5G', slug: 'galaxy-s20-ultra-5g', image: '/samsung/galaxy-s20-ultra-5g.png' },
  { id: 11, name: 'Galaxy S20 Plus 5G', slug: 'galaxy-s20-plus-5g', image: '/samsung/galaxy-s20-plus-5g.png' },
  { id: 12, name: 'Galaxy S20 5G', slug: 'galaxy-s20-5g', image: '/samsung/galaxy-s20-5g.png' },
  { id: 13, name: 'Galaxy S10 Plus', slug: 'galaxy-s10-plus', image: '/samsung/galaxy-s10-plus.png' },
  { id: 14, name: 'Galaxy S10', slug: 'galaxy-s10', image: '/samsung/galaxy-s10.png' },
  { id: 15, name: 'Galaxy S10e', slug: 'galaxy-s10e', image: '/samsung/galaxy-s10e.png' },
  { id: 16, name: 'Galaxy S9 Plus', slug: 'galaxy-s9-plus', image: '/samsung/galaxy-s9-plus.png' },
  { id: 17, name: 'Galaxy S9', slug: 'galaxy-s9', image: '/samsung/galaxy-s9.png' },
  { id: 18, name: 'Galaxy S8 Plus', slug: 'galaxy-s8-plus', image: '/samsung/galaxy-s8-plus.png' },
  { id: 19, name: 'Galaxy S8', slug: 'galaxy-s8', image: '/samsung/galaxy-s8.png' },
  { id: 20, name: 'Galaxy S7 Edge', slug: 'galaxy-s7-edge', image: '/samsung/galaxy-s7-edge.png' },
  { id: 21, name: 'Galaxy S7', slug: 'galaxy-s7', image: '/samsung/galaxy-s7.png' },
  { id: 22, name: 'Galaxy S6 Edge Plus', slug: 'galaxy-s6-edge-plus', image: '/samsung/galaxy-s6-edge-plus.png' },
  { id: 23, name: 'Galaxy S6 Edge', slug: 'galaxy-s6-edge', image: '/samsung/galaxy-s6-edge.png' },
  { id: 24, name: 'Galaxy S6', slug: 'galaxy-s6', image: '/samsung/galaxy-s6.png' },
  { id: 25, name: 'Galaxy S5', slug: 'galaxy-s5', image: '/samsung/galaxy-s5.png' },
  { id: 26, name: 'Galaxy S4', slug: 'galaxy-s4', image: '/samsung/galaxy-s4.png' },
  { id: 27, name: 'Galaxy S3', slug: 'galaxy-s3', image: '/samsung/galaxy-s3.png' },
  { id: 28, name: 'Galaxy Note 20 Ultra 5G', slug: 'galaxy-note-20-ultra-5g', image: '/samsung/galaxy-note-20-ultra-5g.png' },
  { id: 29, name: 'Galaxy Note 20 5G', slug: 'galaxy-note-20-5g', image: '/samsung/galaxy-note-20-5g.png' },
  { id: 30, name: 'Galaxy Note 10 Plus', slug: 'galaxy-note-10-plus', image: '/samsung/galaxy-note-10-plus.png' },
  { id: 31, name: 'Galaxy Note 10', slug: 'galaxy-note-10', image: '/samsung/galaxy-note-10.png' },
  { id: 32, name: 'Galaxy Note 9', slug: 'galaxy-note-9', image: '/samsung/galaxy-note-9.png' },
  { id: 33, name: 'Galaxy Note 8', slug: 'galaxy-note-8', image: '/samsung/galaxy-note-8.png' },
  { id: 34, name: 'Galaxy Note 5', slug: 'galaxy-note-5', image: '/samsung/galaxy-note-5.png' },
  { id: 35, name: 'Galaxy Note 4', slug: 'galaxy-note-4', image: '/samsung/galaxy-note-4.png' },
  { id: 36, name: 'Galaxy Note 3', slug: 'galaxy-note-3', image: '/samsung/galaxy-note-3.png' },
  { id: 37, name: 'Galaxy Note 2', slug: 'galaxy-note-2', image: '/samsung/galaxy-note-2.png' },
  { id: 38, name: 'Galaxy Note', slug: 'galaxy-note', image: '/samsung/galaxy-note.png' },
  { id: 39, name: 'Galaxy A73', slug: 'galaxy-a73', image: '/samsung/galaxy-a73.png' },
  { id: 40, name: 'Galaxy A72', slug: 'galaxy-a72', image: '/samsung/galaxy-a72.png' },
  { id: 41, name: 'Galaxy A71', slug: 'galaxy-a71', image: '/samsung/galaxy-a71.png' },
  { id: 42, name: 'Galaxy A70', slug: 'galaxy-a70', image: '/samsung/galaxy-a70.png' },
  { id: 43, name: 'Galaxy A52', slug: 'galaxy-a52', image: '/samsung/galaxy-a52.png' },
  { id: 44, name: 'Galaxy A51', slug: 'galaxy-a51', image: '/samsung/galaxy-a51.png' },
  { id: 45, name: 'Galaxy A50', slug: 'galaxy-a50', image: '/samsung/galaxy-a50.png' },
  { id: 46, name: 'Galaxy A32', slug: 'galaxy-a32', image: '/samsung/galaxy-a32.png' },
  { id: 47, name: 'Galaxy A31', slug: 'galaxy-a31', image: '/samsung/galaxy-a31.png' },
  { id: 48, name: 'Galaxy A30s', slug: 'galaxy-a30s', image: '/samsung/galaxy-a30s.png' },
  { id: 49, name: 'Galaxy A30', slug: 'galaxy-a30', image: '/samsung/galaxy-a30.png' },
  { id: 50, name: 'Galaxy A21s', slug: 'galaxy-a21s', image: '/samsung/galaxy-a21s.png' },
  { id: 51, name: 'Galaxy A20s', slug: 'galaxy-a20s', image: '/samsung/galaxy-a20s.png' },
  { id: 52, name: 'Galaxy A20', slug: 'galaxy-a20', image: '/samsung/galaxy-a20.png' },
  { id: 53, name: 'Galaxy A11', slug: 'galaxy-a11', image: '/samsung/galaxy-a11.png' },
  { id: 54, name: 'Galaxy A10e', slug: 'galaxy-a10e', image: '/samsung/galaxy-a10e.png' },
  { id: 55, name: 'Galaxy A10', slug: 'galaxy-a10', image: '/samsung/galaxy-a10.png' },
  { id: 56, name: 'Galaxy A01', slug: 'galaxy-a01', image: '/samsung/galaxy-a01.png' },
  { id: 57, name: 'Galaxy A9 2018', slug: 'galaxy-a9-2018', image: '/samsung/galaxy-a9-2018.png' },
  { id: 58, name: 'Galaxy A9', slug: 'galaxy-a9', image: '/samsung/galaxy-a9.png' },
  { id: 59, name: 'Galaxy A8 Plus 2018', slug: 'galaxy-a8-plus-2018', image: '/samsung/galaxy-a8-plus-2018.png' },
  { id: 60, name: 'Galaxy A8 2018', slug: 'galaxy-a8-2018', image: '/samsung/galaxy-a8-2018.png' },
  { id: 61, name: 'Galaxy A8 2016', slug: 'galaxy-a8-2016', image: '/samsung/galaxy-a8-2016.png' },
  { id: 62, name: 'Galaxy A8 Duos', slug: 'galaxy-a8-duos', image: '/samsung/galaxy-a8-duos.png' },
  { id: 63, name: 'Galaxy A8', slug: 'galaxy-a8', image: '/samsung/galaxy-a8.png' },
  { id: 64, name: 'Galaxy A7 2018', slug: 'galaxy-a7-2018', image: '/samsung/galaxy-a7-2018.png' },
  { id: 65, name: 'Galaxy A7 2017', slug: 'galaxy-a7-2017', image: '/samsung/galaxy-a7-2017.png' },
  { id: 66, name: 'Galaxy A7', slug: 'galaxy-a7', image: '/samsung/galaxy-a7.png' },
  { id: 67, name: 'Galaxy A6 2018', slug: 'galaxy-a6-2018', image: '/samsung/galaxy-a6-2018.png' },
  { id: 68, name: 'Galaxy A5 2017', slug: 'galaxy-a5-2017', image: '/samsung/galaxy-a5-2017.png' },
  { id: 69, name: 'Galaxy A5 Duos', slug: 'galaxy-a5-duos', image: '/samsung/galaxy-a5-duos.png' },
  { id: 70, name: 'Galaxy A5', slug: 'galaxy-a5', image: '/samsung/galaxy-a5.png' },
  { id: 71, name: 'Galaxy A3 2017', slug: 'galaxy-a3-2017', image: '/samsung/galaxy-a3-2017.png' },
  { id: 72, name: 'Galaxy A3 Duos', slug: 'galaxy-a3-duos', image: '/samsung/galaxy-a3-duos.png' },
  { id: 73, name: 'Galaxy A3', slug: 'galaxy-a3', image: '/samsung/galaxy-a3.png' },
  { id: 74, name: 'Galaxy J7 V', slug: 'galaxy-j7-v', image: '/samsung/galaxy-j7-v.png' },
  { id: 75, name: 'Galaxy J7 Star', slug: 'galaxy-j7-star', image: '/samsung/galaxy-j7-star.png' },
  { id: 76, name: 'Galaxy J7 Refine', slug: 'galaxy-j7-refine', image: '/samsung/galaxy-j7-refine.png' },
  { id: 77, name: 'Galaxy J7 Perx', slug: 'galaxy-j7-perx', image: '/samsung/galaxy-j7-perx.png' },
  { id: 78, name: 'Galaxy J7 Neo', slug: 'galaxy-j7-neo', image: '/samsung/galaxy-j7-neo.png' },
  { id: 79, name: 'Galaxy J7 Max', slug: 'galaxy-j7-max', image: '/samsung/galaxy-j7-max.png' },
  { id: 80, name: 'Galaxy J7 2018', slug: 'galaxy-j7-2018', image: '/samsung/galaxy-j7-2018.png' },
  { id: 81, name: 'Galaxy J7 2017', slug: 'galaxy-j7-2017', image: '/samsung/galaxy-j7-2017.png' },
  { id: 82, name: 'Galaxy J7 Pro', slug: 'galaxy-j7-pro', image: '/samsung/galaxy-j7-pro.png' },
  { id: 83, name: 'Galaxy J7 Prime', slug: 'galaxy-j7-prime', image: '/samsung/galaxy-j7-prime.png' },
  { id: 84, name: 'Galaxy J7 2016', slug: 'galaxy-j7-2016', image: '/samsung/galaxy-j7-2016.png' },
  { id: 85, name: 'Galaxy J7', slug: 'galaxy-j7', image: '/samsung/galaxy-j7.png' },
  { id: 86, name: 'Galaxy J5 Pro', slug: 'galaxy-j5-pro', image: '/samsung/galaxy-j5-pro.png' },
  { id: 87, name: 'Galaxy J5 Prime', slug: 'galaxy-j5-prime', image: '/samsung/galaxy-j5-prime.png' },
  { id: 88, name: 'Galaxy J5 2017', slug: 'galaxy-j5-2017', image: '/samsung/galaxy-j5-2017.png' },
  { id: 89, name: 'Galaxy J5 2016', slug: 'galaxy-j5-2016', image: '/samsung/galaxy-j5-2016.png' },
  { id: 90, name: 'Galaxy J5', slug: 'galaxy-j5', image: '/samsung/galaxy-j5.png' },
  { id: 91, name: 'Galaxy J3 V', slug: 'galaxy-j3-v', image: '/samsung/galaxy-j3-v.png' },
  { id: 92, name: 'Galaxy J3 Star', slug: 'galaxy-j3-star', image: '/samsung/galaxy-j3-star.png' },
  { id: 93, name: 'Galaxy J3 Prime', slug: 'galaxy-j3-prime', image: '/samsung/galaxy-j3-prime.png' },
  { id: 94, name: 'Galaxy J3 Mission', slug: 'galaxy-j3-mission', image: '/samsung/galaxy-j3-mission.png' },
  { id: 95, name: 'Galaxy J3 Emerge', slug: 'galaxy-j3-emerge', image: '/samsung/galaxy-j3-emerge.png' },
  { id: 96, name: 'Galaxy J3 Achieve', slug: 'galaxy-j3-achieve', image: '/samsung/galaxy-j3-achieve.png' },
  { id: 97, name: 'Galaxy J3 2018', slug: 'galaxy-j3-2018', image: '/samsung/galaxy-j3-2018.png' },
  { id: 98, name: 'Galaxy J3 2017', slug: 'galaxy-j3-2017', image: '/samsung/galaxy-j3-2017.png' },
  { id: 99, name: 'Galaxy J3', slug: 'galaxy-j3', image: '/samsung/galaxy-j3.png' },
  { id: 100, name: 'Galaxy J2 Prime', slug: 'galaxy-j2-prime', image: '/samsung/galaxy-j2-prime.png' },
  { id: 101, name: 'Galaxy J2', slug: 'galaxy-j2', image: '/samsung/galaxy-j2.png' },
  { id: 102, name: 'Galaxy J1', slug: 'galaxy-j1', image: '/samsung/galaxy-j1.png' },
  { id: 103, name: 'Galaxy M20', slug: 'galaxy-m20', image: '/samsung/galaxy-m20.png' },
  { id: 104, name: 'Galaxy C9 Pro', slug: 'galaxy-c9-pro', image: '/samsung/galaxy-c9-pro.png' },
  { id: 105, name: 'Galaxy C7 Pro', slug: 'galaxy-c7-pro', image: '/samsung/galaxy-c7-pro.png' },
  { id: 106, name: 'Galaxy C7 2017', slug: 'galaxy-c7-2017', image: '/samsung/galaxy-c7-2017.png' },
  { id: 107, name: 'Galaxy C7 Duos', slug: 'galaxy-c7-duos', image: '/samsung/galaxy-c7-duos.png' },
  { id: 108, name: 'Galaxy C7', slug: 'galaxy-c7', image: '/samsung/galaxy-c7.png' },
  { id: 109, name: 'Galaxy E7', slug: 'galaxy-e7', image: '/samsung/galaxy-e7.png' },
  { id: 110, name: 'Galaxy Grand Prime Duos', slug: 'galaxy-grand-prime-duos', image: '/samsung/galaxy-grand-prime-duos.png' },
  { id: 111, name: 'Galaxy Grand Prime', slug: 'galaxy-grand-prime', image: '/samsung/galaxy-grand-prime.png' },
  { id: 112, name: 'Galaxy Grand 2', slug: 'galaxy-grand-2', image: '/samsung/galaxy-grand-2.png' },
  { id: 113, name: 'Galaxy Grand', slug: 'galaxy-grand', image: '/samsung/galaxy-grand.png' },
  { id: 114, name: 'Galaxy Core Prime', slug: 'galaxy-core-prime', image: '/samsung/galaxy-core-prime.png' },
  { id: 115, name: 'Galaxy Express Prime 3', slug: 'galaxy-express-prime-3', image: '/samsung/galaxy-express-prime-3.png' },
  { id: 116, name: 'Galaxy Express Prime 2', slug: 'galaxy-express-prime-2', image: '/samsung/galaxy-express-prime-2.png' },
  { id: 117, name: 'Galaxy Express 3', slug: 'galaxy-express-3', image: '/samsung/galaxy-express-3.png' },
  { id: 118, name: 'Galaxy Express', slug: 'galaxy-express', image: '/samsung/galaxy-express.png' },
  { id: 119, name: 'Galaxy Fit', slug: 'galaxy-fit', image: '/samsung/galaxy-fit.png' },
  { id: 120, name: 'Galaxy Gio', slug: 'galaxy-gio', image: '/samsung/galaxy-gio.png' },
  { id: 121, name: 'Galaxy Halo', slug: 'galaxy-halo', image: '/samsung/galaxy-halo.png' },
  { id: 122, name: 'Galaxy K Zoom', slug: 'galaxy-k-zoom', image: '/samsung/galaxy-k-zoom.png' },
  { id: 123, name: 'Galaxy Light', slug: 'galaxy-light', image: '/samsung/galaxy-light.png' },
  { id: 124, name: 'Galaxy Mega 6.3', slug: 'galaxy-mega-6-3', image: '/samsung/galaxy-mega-6-3.png' },
  { id: 125, name: 'Galaxy Mega 2', slug: 'galaxy-mega-2', image: '/samsung/galaxy-mega-2.png' },
  { id: 126, name: 'Galaxy Mega', slug: 'galaxy-mega', image: '/samsung/galaxy-mega.png' },
  { id: 127, name: 'Galaxy Mini', slug: 'galaxy-mini', image: '/samsung/galaxy-mini.png' },
  { id: 128, name: 'Galaxy Nexus', slug: 'galaxy-nexus', image: '/samsung/galaxy-nexus.png' },
  { id: 129, name: 'Galaxy On8', slug: 'galaxy-on8', image: '/samsung/galaxy-on8.png' },
  { id: 130, name: 'Galaxy On7', slug: 'galaxy-on7', image: '/samsung/galaxy-on7.png' },
  { id: 131, name: 'Galaxy On5', slug: 'galaxy-on5', image: '/samsung/galaxy-on5.png' },
  { id: 132, name: 'Galaxy Rugby Pro', slug: 'galaxy-rugby-pro', image: '/samsung/galaxy-rugby-pro.png' },
  { id: 133, name: 'Galaxy S 4G', slug: 'galaxy-s-4g', image: '/samsung/galaxy-s-4g.png' },
  { id: 134, name: 'Galaxy S Blaze 4G', slug: 'galaxy-s-blaze-4g', image: '/samsung/galaxy-s-blaze-4g.png' },
  { id: 135, name: 'Galaxy S Duos', slug: 'galaxy-s-duos', image: '/samsung/galaxy-s-duos.png' },
  { id: 136, name: 'Galaxy S Relay', slug: 'galaxy-s-relay', image: '/samsung/galaxy-s-relay.png' },
  { id: 137, name: 'Galaxy S', slug: 'galaxy-s', image: '/samsung/galaxy-s.png' },
  { id: 138, name: 'Galaxy S3 Mini', slug: 'galaxy-s3-mini', image: '/samsung/galaxy-s3-mini.png' },
  { id: 139, name: 'Galaxy S4 Active', slug: 'galaxy-s4-active', image: '/samsung/galaxy-s4-active.png' },
  { id: 140, name: 'Galaxy S4 Google Play Edition', slug: 'galaxy-s4-google-play-edition', image: '/samsung/galaxy-s4-google-play-edition.png' },
  { id: 141, name: 'Galaxy S4 Mini', slug: 'galaxy-s4-mini', image: '/samsung/galaxy-s4-mini.png' },
  { id: 142, name: 'Galaxy S4 Zoom', slug: 'galaxy-s4-zoom', image: '/samsung/galaxy-s4-zoom.png' },
  { id: 143, name: 'Galaxy S5 Active', slug: 'galaxy-s5-active', image: '/samsung/galaxy-s5-active.png' },
  { id: 144, name: 'Galaxy S5 Duos', slug: 'galaxy-s5-duos', image: '/samsung/galaxy-s5-duos.png' },
  { id: 145, name: 'Galaxy S5 Mini Duos', slug: 'galaxy-s5-mini-duos', image: '/samsung/galaxy-s5-mini-duos.png' },
  { id: 146, name: 'Galaxy S5 Mini', slug: 'galaxy-s5-mini', image: '/samsung/galaxy-s5-mini.png' },
  { id: 147, name: 'Galaxy S5 Neo', slug: 'galaxy-s5-neo', image: '/samsung/galaxy-s5-neo.png' },
  { id: 148, name: 'Galaxy S5 Sport', slug: 'galaxy-s5-sport', image: '/samsung/galaxy-s5-sport.png' },
  { id: 149, name: 'Galaxy S5 Zoom', slug: 'galaxy-s5-zoom', image: '/samsung/galaxy-s5-zoom.png' },
  { id: 150, name: 'Galaxy S6 Active', slug: 'galaxy-s6-active', image: '/samsung/galaxy-s6-active.png' },
  { id: 151, name: 'Galaxy S6 Duos', slug: 'galaxy-s6-duos', image: '/samsung/galaxy-s6-duos.png' },
  { id: 152, name: 'Galaxy S8 Active', slug: 'galaxy-s8-active', image: '/samsung/galaxy-s8-active.png' },
  { id: 153, name: 'Galaxy S9 Plus Duos', slug: 'galaxy-s9-plus-duos', image: '/samsung/galaxy-s9-plus-duos.png' },
  { id: 154, name: 'Galaxy S10 Lite', slug: 'galaxy-s10-lite', image: '/samsung/galaxy-s10-lite.png' },
  { id: 155, name: 'Galaxy S10 5G', slug: 'galaxy-s10-5g', image: '/samsung/galaxy-s10-5g.png' },
  { id: 156, name: 'Galaxy Note Edge', slug: 'galaxy-note-edge', image: '/samsung/galaxy-note-edge.png' },
  { id: 157, name: 'Galaxy Note 10 Plus 5G', slug: 'galaxy-note-10-plus-5g', image: '/samsung/galaxy-note-10-plus-5g.png' },
  { id: 158, name: 'Galaxy Z Flip 5G', slug: 'galaxy-z-flip-5g', image: '/samsung/galaxy-z-flip-5g.png' },
  { id: 159, name: 'Galaxy Z Flip Thom Browne Edition', slug: 'galaxy-z-flip-thom-browne-edition', image: '/samsung/galaxy-z-flip-thom-browne-edition.png' },
  { id: 160, name: 'Galaxy Z Flip', slug: 'galaxy-z-flip', image: '/samsung/galaxy-z-flip.png' },
  { id: 161, name: 'Galaxy Alpha', slug: 'galaxy-alpha', image: '/samsung/galaxy-alpha.png' },
  { id: 162, name: 'Galaxy Amp 2', slug: 'galaxy-amp-2', image: '/samsung/galaxy-amp-2.png' },
  { id: 163, name: 'Galaxy Amp Prime 3', slug: 'galaxy-amp-prime-3', image: '/samsung/galaxy-amp-prime-3.png' },
  { id: 164, name: 'Galaxy Amp Prime', slug: 'galaxy-amp-prime', image: '/samsung/galaxy-amp-prime.png' },
  { id: 165, name: 'Galaxy Avant', slug: 'galaxy-avant', image: '/samsung/galaxy-avant.png' },
  { id: 166, name: 'Galaxy Ace 4 Lite', slug: 'galaxy-ace-4-lite', image: '/samsung/galaxy-ace-4-lite.png' },
  { id: 167, name: 'Galaxy Ace 4', slug: 'galaxy-ace-4', image: '/samsung/galaxy-ace-4.png' },
  { id: 168, name: 'Galaxy Ace', slug: 'galaxy-ace', image: '/samsung/galaxy-ace.png' },
  { id: 169, name: 'Galaxy Spica', slug: 'galaxy-spica', image: '/samsung/galaxy-spica.png' },
  { id: 170, name: 'Galaxy Stratosphere 2', slug: 'galaxy-stratosphere-2', image: '/samsung/galaxy-stratosphere-2.png' },
  { id: 171, name: 'Galaxy Xcover 2', slug: 'galaxy-xcover-2', image: '/samsung/galaxy-xcover-2.png' },
  { id: 172, name: 'Galaxy Y', slug: 'galaxy-y', image: '/samsung/galaxy-y.png' },
  { id: 173, name: 'Galaxy Young', slug: 'galaxy-young', image: '/samsung/galaxy-young.png' },
  { id: 174, name: 'Galaxy', slug: 'galaxy', image: '/samsung/galaxy.png' },
  { id: 175, name: 'Google Nexus S', slug: 'google-nexus-s', image: '/samsung/google-nexus-s.png' },
  { id: 176, name: 'Gravity 2', slug: 'gravity-2', image: '/samsung/gravity-2.png' },
  { id: 177, name: 'Gravity 3', slug: 'gravity-3', image: '/samsung/gravity-3.png' },
  { id: 178, name: 'Gravity Q', slug: 'gravity-q', image: '/samsung/gravity-q.png' },
  { id: 179, name: 'Gravity Smart', slug: 'gravity-smart', image: '/samsung/gravity-smart.png' },
  { id: 180, name: 'Gravity Touch', slug: 'gravity-touch', image: '/samsung/gravity-touch.png' },
  { id: 181, name: 'Gravity Txt', slug: 'gravity-txt', image: '/samsung/gravity-txt.png' },
  { id: 182, name: 'Highlight', slug: 'highlight', image: '/samsung/highlight.png' },
  { id: 183, name: 'Impression', slug: 'impression', image: '/samsung/impression.png' },
  { id: 184, name: 'Infuse 4G', slug: 'infuse-4g', image: '/samsung/infuse-4g.png' },
  { id: 185, name: 'Innov8', slug: 'innov8', image: '/samsung/innov8.png' },
  { id: 186, name: 'Juke', slug: 'juke', image: '/samsung/juke.png' },
  { id: 187, name: 'Matrix', slug: 'matrix', image: '/samsung/matrix.png' },
  { id: 188, name: 'Memoir', slug: 'memoir', image: '/samsung/memoir.png' },
  { id: 189, name: 'Omnia 2', slug: 'omnia-2', image: '/samsung/omnia-2.png' },
  { id: 190, name: 'Omnia 7', slug: 'omnia-7', image: '/samsung/omnia-7.png' },
  { id: 191, name: 'Omnia HD', slug: 'omnia-hd', image: '/samsung/omnia-hd.png' },
  { id: 192, name: 'Omnia Pro 4', slug: 'omnia-pro-4', image: '/samsung/omnia-pro-4.png' },
  { id: 193, name: 'Omnia', slug: 'omnia', image: '/samsung/omnia.png' },
  { id: 194, name: 'Pixon', slug: 'pixon', image: '/samsung/pixon.png' },
  { id: 195, name: 'Rugby 3', slug: 'rugby-3', image: '/samsung/rugby-3.png' },
  { id: 196, name: 'Rugby 4', slug: 'rugby-4', image: '/samsung/rugby-4.png' },
  { id: 197, name: 'Rugby Smart', slug: 'rugby-smart', image: '/samsung/rugby-smart.png' },
  { id: 198, name: 'S8000 Jet', slug: 's8000-jet', image: '/samsung/s8000-jet.png' },
  { id: 199, name: 'S8300 UltraTouch', slug: 's8300-ultratouch', image: '/samsung/s8300-ultratouch.png' },
  { id: 200, name: 'Serenata Bang and Olufsen', slug: 'serenata-bang-and-olufsen', image: '/samsung/serenata-bang-and-olufsen.png' },
  { id: 201, name: 'Serene', slug: 'serene', image: '/samsung/serene.png' },
  { id: 202, name: 'Solstice 2', slug: 'solstice-2', image: '/samsung/solstice-2.png' },
  { id: 203, name: 'Solstice', slug: 'solstice', image: '/samsung/solstice.png' },
  { id: 204, name: 'Star', slug: 'star', image: '/samsung/star.png' },
  { id: 205, name: 'Stripe', slug: 'stripe', image: '/samsung/stripe.png' },
  { id: 206, name: 'Sync', slug: 'sync', image: '/samsung/sync.png' },
  { id: 207, name: 'Vibrant', slug: 'vibrant', image: '/samsung/vibrant.png' },
  { id: 208, name: 'Wave', slug: 'wave', image: '/samsung/wave.png' },
  { id: 209, name: 'B3310', slug: 'b3310', image: '/samsung/b3310.png' },
  { id: 210, name: 'B7620 Giorgio Armani', slug: 'b7620-giorgio-armani', image: '/samsung/b7620-giorgio-armani.png' },
  { id: 211, name: 'Captivate Glide', slug: 'captivate-glide', image: '/samsung/captivate-glide.png' },
  { id: 212, name: 'Comeback', slug: 'comeback', image: '/samsung/comeback.png' },
  { id: 213, name: 'Continuum', slug: 'continuum', image: '/samsung/continuum.png' },
  { id: 214, name: 'Corby Plus', slug: 'corby-plus', image: '/samsung/corby-plus.png' },
  { id: 215, name: 'Corby', slug: 'corby', image: '/samsung/corby.png' },
  { id: 216, name: 'Dart', slug: 'dart', image: '/samsung/dart.png' },
  { id: 217, name: 'Evergreen', slug: 'evergreen', image: '/samsung/evergreen.png' },
  { id: 218, name: 'Fight 2', slug: 'fight-2', image: '/samsung/fight-2.png' },
  { id: 219, name: 'Fight', slug: 'fight', image: '/samsung/fight.png' },
  { id: 220, name: 'Focus 2', slug: 'focus-2', image: '/samsung/focus-2.png' },
  { id: 221, name: 'Focus Flash', slug: 'focus-flash', image: '/samsung/focus-flash.png' },
  { id: 222, name: 'Focus S', slug: 'focus-s', image: '/samsung/focus-s.png' },
  { id: 223, name: 'GH A197', slug: 'gh-a197', image: '/samsung/gh-a197.png' },
  { id: 224, name: 'GH C225', slug: 'gh-c225', image: '/samsung/gh-c225.png' },
  { id: 225, name: 'GH F480 Tocco', slug: 'gh-f480-tocco', image: '/samsung/gh-f480-tocco.png' },
  { id: 226, name: 'GH T109', slug: 'gh-t109', image: '/samsung/gh-t109.png' },
  { id: 227, name: 'GH T119', slug: 'gh-t119', image: '/samsung/gh-t119.png' },
  { id: 228, name: 'GH T139', slug: 'gh-t139', image: '/samsung/gh-t139.png' },
  { id: 229, name: 'GH T159', slug: 'gh-t159', image: '/samsung/gh-t159.png' },
  { id: 230, name: 'GH T209', slug: 'gh-t209', image: '/samsung/gh-t209.png' },
  { id: 231, name: 'GH T219', slug: 'gh-t219', image: '/samsung/gh-t219.png' },
  { id: 232, name: 'GH T229', slug: 'gh-t229', image: '/samsung/gh-t229.png' },
  { id: 233, name: 'GH T239', slug: 'gh-t239', image: '/samsung/gh-t239.png' },
  { id: 234, name: 'GH T249', slug: 'gh-t249', image: '/samsung/gh-t249.png' }
]

// Combine all phones
const allPhones = [...applePhones, ...googlePhones, ...samsungPhones, ...appleTablets, ...samsungTablets, ...appleWatches, ...samsungWatches, ...appleComputers]

// Apple phone repair issues with images
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

// Default device issues for non-Apple phones
const defaultDeviceIssues = [
  { id: 1, name: 'HEADPHONES PLUG' },
  { id: 2, name: 'CHARGING PORT' },
  { id: 3, name: 'SIDE BUTTON' },
  { id: 4, name: 'ISIGHT CAMERA' },
  { id: 5, name: 'POWER BUTTON' },
  { id: 6, name: 'SCREEN' },
  { id: 7, name: 'BATTERY' },
  { id: 8, name: 'SOMETHING ELSE' }
]

interface RepairPageProps {
  params: {
    slug: string
  }
}


export default function RepairPage({ params }: RepairPageProps) {
  // Find the phone by slug
  const phone = allPhones.find(p => p.slug === params.slug)
  const [selectedIssue, setSelectedIssue] = useState<string | null>(null)
  const [isChangeModelPopupOpen, setIsChangeModelPopupOpen] = useState(false)
  const [isSearchPopupOpen, setIsSearchPopupOpen] = useState(false)
  
  // Check if it's a Google phone
  const isGooglePhone = googlePhones.some(p => p.slug === params.slug)
  
  // Determine device type, brand, and model
  const getDeviceInfo = () => {
    if (!phone) return { deviceType: '', brand: '', model: '' }
    
    // Determine device type based on which array the phone belongs to
    let deviceType = ''
    let brand = ''
    
    if (applePhones.some(p => p.slug === phone.slug)) {
      deviceType = 'phone'
      brand = 'apple'
    } else if (googlePhones.some(p => p.slug === phone.slug)) {
      deviceType = 'phone'
      brand = 'google'
    } else if (samsungPhones.some(p => p.slug === phone.slug)) {
      deviceType = 'phone'
      brand = 'samsung'
    } else if (appleTablets.some(p => p.slug === phone.slug)) {
      deviceType = 'tablet'
      brand = 'apple'
    } else if (samsungTablets.some(p => p.slug === phone.slug)) {
      deviceType = 'tablet'
      brand = 'samsung'
    } else if (appleWatches.some(p => p.slug === phone.slug)) {
      deviceType = 'smartwatch'
      brand = 'apple'
    } else if (samsungWatches.some(p => p.slug === phone.slug)) {
      deviceType = 'smartwatch'
      brand = 'samsung'
    } else if (appleComputers.some(p => p.slug === phone.slug)) {
      deviceType = 'computer'
      brand = 'apple'
    }
    
    return {
      deviceType,
      brand,
      model: phone.name
    }
  }
  
  const deviceInfo = getDeviceInfo()
  
  // Check if it's a Samsung phone
  const isSamsungPhone = samsungPhones.some(p => p.slug === params.slug)
  
  // Check if it's an Apple phone
  const isApplePhone = applePhones.some(p => p.slug === params.slug)
  
  // Choose the appropriate issues array
  const deviceIssues = isApplePhone ? appleRepairIssues : defaultDeviceIssues
  
  // If phone not found, return 404
  if (!phone) {
    notFound()
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
              <Link href="/" className="block">
                <Image
                  src="/website-logo.png"
                  alt="PhoneHut Logo"
                  width={200}
                  height={60}
                  className="h-8 md:h-10 lg:h-12 w-auto"
                />
              </Link>
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
                <button
                  onClick={() => setIsSearchPopupOpen(true)}
                  className="hover:text-gray-300 transition-colors duration-200 cursor-pointer"
                  style={{ color: '#0e72d2' }}
                >
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8"/>
                    <path d="m21 21-4.35-4.35"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Header />

      {/* Product Detail Section */}
      <section 
        className="py-16 md:py-20"
        style={{ 
          backgroundImage: 'url(/inner_pages_bg_image.png)', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <Link href="/" className="text-gray-700 hover:text-blue-600">
                    Home
                  </Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <Link href="/product-category/phone" className="ml-1 text-gray-700 hover:text-blue-600 md:ml-2">
                      Phone
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <Link 
                      href={applePhones.some(p => p.slug === params.slug) ? "/product-category/phone/apple" : "/product-category/phone/google"} 
                      className="ml-1 text-gray-700 hover:text-blue-600 md:ml-2"
                    >
                      {applePhones.some(p => p.slug === params.slug) ? "Apple" : "Google"}
                    </Link>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span className="ml-1 text-gray-500 md:ml-2">{phone.name}</span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
            {/* Left Section - Phone Image, Name, Change Model */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center mb-0 flex flex-col justify-center">
              {/* iPhone Model Image */}
              <div className="mb-2">
                <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto flex items-center justify-center">
                  <Image
                    src={phone.image}
                    alt={phone.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <h1
                className="font-bold mb-2"
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  color: '#233d63',
                  fontSize: '18px'
                }}
              >
                {phone.name}
              </h1>
              
              <div className="mb-0">
                <button
                  onClick={() => setIsChangeModelPopupOpen(true)}
                  className="text-blue-600 hover:text-blue-800 underline font-medium"
                  style={{
                    fontFamily: "'Lato', sans-serif"
                  }}
                >
                  Change Model?
                </button>
              </div>
            </div>

            {/* Right Section - Device Issues */}
            <div className="lg:col-span-2">
                 <h2
                   className="text-2xl md:text-3xl font-bold mb-8 text-center lg:text-left"
                   style={{
                     fontFamily: "'Raleway', sans-serif",
                     color: '#233d63',
                     textTransform: 'uppercase'
                   }}
                 >
                   {isApplePhone ? 'What is wrong with your device?' : 'please choose fault'}
                 </h2>

              {/* Selected Issue Display */}
              {selectedIssue && (
                <div className="mb-6">
                  <div className="bg-white rounded-lg border border-gray-300 p-4">
                     <h3
                       className="text-lg font-bold mb-2"
                       style={{
                         fontFamily: "'Raleway', sans-serif",
                         color: '#233d63',
                         textTransform: 'uppercase'
                       }}
                     >
                       PLEASE CHOOSE FAULT:
                     </h3>
                    <p 
                      className="text-base"
                      style={{
                        fontFamily: "'Raleway', sans-serif",
                        color: '#233d63',
                        textTransform: 'capitalize'
                      }}
                    >
                      {selectedIssue}
                    </p>
                  </div>
                </div>
              )}

              {/* Device Issues Grid */}
              <div className="mb-8">
                {/* First Row - 4 Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-6">
                  {deviceIssues.slice(0, 4).map((issue) => (
                    <div
                      key={issue.id}
                      className={`bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center cursor-pointer border border-gray-200 group relative ${
                        isApplePhone ? 'p-[10px]' : 'p-4 lg:p-[50px]'
                      }`}
                      onClick={() => setSelectedIssue(issue.name)}
                    >
                      {/* Image for Apple phones */}
                      {isApplePhone && 'image' in issue && (issue as any).image && (
                        <div className="mb-3">
                          <div className="w-16 h-16 mx-auto flex items-center justify-center">
                            <Image
                              src={(issue as any).image}
                              alt={issue.name}
                              width={64}
                              height={64}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        </div>
                      )}

                      {/* Issue Name */}
                      <h3
                        className="transition-colors duration-300"
                        style={{
                          fontFamily: "'Raleway', sans-serif",
                          fontSize: '13px',
                          color: '#232222',
                          textTransform: 'none',
                          letterSpacing: '1px',
                          fontWeight: '500'
                        }}
                      >
                        {issue.name}
                      </h3>
                    </div>
                  ))}
                </div>

                {/* Second Row - 4 Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
                  {deviceIssues.slice(4, 8).map((issue) => (
                    <div
                      key={issue.id}
                      className={`bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center cursor-pointer border border-gray-200 group relative ${
                        isApplePhone ? 'p-[10px]' : 'p-4 lg:p-[50px]'
                      }`}
                      onClick={() => setSelectedIssue(issue.name)}
                    >
                      {/* Image for Apple phones */}
                      {isApplePhone && 'image' in issue && (issue as any).image && (
                        <div className="mb-3">
                          <div className="w-16 h-16 mx-auto flex items-center justify-center">
                            <Image
                              src={(issue as any).image}
                              alt={issue.name}
                              width={64}
                              height={64}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        </div>
                      )}

                      {/* Issue Name */}
                      <h3
                        className="transition-colors duration-300"
                        style={{
                          fontFamily: "'Raleway', sans-serif",
                          fontSize: '13px',
                          color: '#232222',
                          textTransform: 'none',
                          letterSpacing: '1px',
                          fontWeight: '500'
                        }}
                      >
                        {issue.name}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>


              {/* Next Button */}
              <div className="flex justify-end">
                <Link href={`/repair/appointment?issue=${encodeURIComponent(selectedIssue || '')}&device=${encodeURIComponent(phone?.name || '')}&deviceType=${encodeURIComponent(deviceInfo.deviceType)}&brand=${encodeURIComponent(deviceInfo.brand)}&model=${encodeURIComponent(deviceInfo.model)}&image=${encodeURIComponent(phone?.image || '')}`}>
                  <button
                    className="rounded-full font-lato font-bold text-white uppercase transition-all duration-300 flex items-center gap-2"
                    style={{
                      backgroundColor: '#6d6e71',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      fontFamily: "'Lato', sans-serif",
                      borderRadius: '50px',
                      padding: '5px 15px 5px 20px'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#0056b3'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#6d6e71'
                    }}
                  >
                    Next
                    <svg 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14m-7-7 7 7-7 7"/>
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>


      <Footer />
      
      {/* Change Model Popup */}
      <ChangeModelPopup 
        isOpen={isChangeModelPopupOpen} 
        onClose={() => setIsChangeModelPopupOpen(false)} 
      />
      
      {/* Search Popup */}
      <SearchPopup 
        isOpen={isSearchPopupOpen} 
        onClose={() => setIsSearchPopupOpen(false)} 
      />
    </main>
  )
}
