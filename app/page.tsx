'use client'
import Image from 'next/image'
import HeroSection from '@/components/HeroSection'
import Testimonials from '@/components/Testimonials'
import Features from '@/components/Features'

export default function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <Testimonials />
    </>
  )
}
