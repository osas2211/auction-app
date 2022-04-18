import React from 'react'
import Auctions from '../components/auctions'
import Header from '../components/header'
import Hero from '../components/hero'
import Description from '../components/howItWorks'

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Auctions />
      <Description />
    </div>
  )
}
