'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import TopHeader from '@/components/TopHeader'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

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


export default function SamsungPhonePage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredPhones, setFilteredPhones] = useState(samsungPhones)

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase()
    setSearchTerm(term)
    const filtered = samsungPhones.filter(phone => 
      phone.name.toLowerCase().includes(term)
    )
    setFilteredPhones(filtered)
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

      {/* Product Selection Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="text-center mb-12 md:mb-16">
            <h2
              className="font-raleway font-bold uppercase mb-4"
              style={{
                fontSize: '36px',
                color: 'black',
                fontFamily: "'Raleway', sans-serif",
                letterSpacing: '1px',
                fontWeight: '700'
              }}
            >
              Select your model
            </h2>
            <p
              className="font-lato"
              style={{
                fontSize: '20px',
                lineHeight: '1.5',
                color: 'black',
                fontFamily: "'Lato', sans-serif"
              }}
            >
              Please select your model to repair
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for your device here"
                value={searchTerm}
                onChange={handleSearch}
                className="w-full px-6 py-4 pr-12 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                style={{
                  fontSize: '16px',
                  fontFamily: "'Lato', sans-serif"
                }}
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-400"
                >
                  <circle cx="11" cy="11" r="8"/>
                  <path d="m21 21-4.35-4.35"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
            {filteredPhones.map((phone) => (
              <Link
                key={phone.id}
                href={`/repair/${phone.slug}`}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 p-4 md:p-6 text-center cursor-pointer border border-gray-200 group relative"
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#6d6e71'
                  const textElement = e.currentTarget.querySelector('h3') as HTMLElement
                  if (textElement) {
                    textElement.style.color = 'white'
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'white'
                  const textElement = e.currentTarget.querySelector('h3') as HTMLElement
                  if (textElement) {
                    textElement.style.color = '#233D63'
                  }
                }}
              >
                {/* Product Image */}
                <div className="mb-4 md:mb-6">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mx-auto flex items-center justify-center">
                    <Image
                      src={phone.image}
                      alt={phone.name}
                      width={112}
                      height={112}
                      className="w-full h-full object-contain transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Product Name */}
                <h3
                  className="transition-colors duration-300"
                  style={{
                    fontFamily: "'Raleway', sans-serif",
                    fontSize: '18px',
                    color: '#233D63',
                    textTransform: 'capitalize',
                    fontWeight: '700'
                  }}
                >
                  {phone.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* Can't Find Your Device Section */}
      <section className="py-16 md:py-20" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{
              fontFamily: "'Raleway', sans-serif",
              color: '#233d63'
            }}
          >
            Can&apos;t find a model you&apos;re looking for?
          </h2>
          
          <p
            className="text-lg mb-8"
            style={{
              fontFamily: 'lato',
              color: '#666',
              lineHeight: '1.6'
            }}
          >
            Get in touch for a free estimate and see how we can help.
          </p>

          <button
            className="py-4 px-8 rounded-lg font-semibold text-lg transition-colors duration-200"
            style={{
              backgroundColor: '#6d6e71',
              color: 'white',
              fontFamily: 'lato'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#0056b3'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#6d6e71'
            }}
          >
            Quote Request
          </button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
