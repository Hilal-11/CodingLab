
"use client"
import dynamic from "next/dynamic"
import React from 'react'
import Header from '@/components/Header'
import Container from '@/components/Container'
import Hero from '@/components/Hero'

// dynamic(() => import('@/components/Code/AttendenceSystem'), { ssr: false })

const LandingPageBodySecession = dynamic(() => import('@/components/LandingPageBodySecession'), { ssr: true })
const MainSection=  dynamic(() => import('@/components/MainSection'), {ssr: true})
const FAQ = dynamic(() => import('@/components/FAQ'), { ssr: false })
const LastSecession=  dynamic(() => import('@/components/LastSecession'), { ssr: false })

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
