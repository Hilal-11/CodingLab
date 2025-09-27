import React from 'react'
import Header from '@/components/Header'
import Container from '@/components/Container'
import Hero from '@/components/Hero'
import LandingPageBodySecession from '@/components/LandingPageBodySecession'
import MainSection from '@/components/MainSection'
function page() {
  return (
     <div>
       <Container>
        <Header />
        <Hero /> <br />
        <MainSection />
        <LandingPageBodySecession />
      </Container>
      <br /><br /><br /><br />
     </div>

  )
}

export default page
