import { AboutUsSection, FAQSection1 } from '@/components/FAQ'
import React from 'react'


export const metadata = {
  title: 'FAQ | Pare India',
  description: '',
}

const FAQPage = () => {
  return (
    <>
     <FAQSection1 />
      <AboutUsSection />
      </>
  )
}

export default FAQPage