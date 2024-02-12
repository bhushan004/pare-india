import { GalleryMain, GallerySection } from '@/components/gallery'
import React from 'react'

export const metadata = {
  title: 'Panels Image Gallery | Pare India',
  description: '',
}

const GalleryPage = () => {
  return (
    <>
    <GalleryMain />
    <GallerySection />
    </>
  )
}

export default GalleryPage