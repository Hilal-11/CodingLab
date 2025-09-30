
"use client"
import React from 'react'
import Header from '@/components/Header'
import Container from '@/components/Container'
import Hero from '@/components/Hero'
import LandingPageBodySecession from '@/components/LandingPageBodySecession'
import MainSection from '@/components/MainSection'
import FAQ from '@/components/FAQ'
import LastSecession from '@/components/LastSecession'
function page() {

  return (
     <div>
      <Container>
        <Header />
        <Hero /> <br />
        <MainSection />
        <LandingPageBodySecession />
        <FAQ />
        <LastSecession />
      </Container>
    </div>
  )
}

export default page
