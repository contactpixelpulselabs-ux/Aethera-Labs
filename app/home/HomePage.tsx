import React from 'react'
import Hero from './Hero/Hero'
import Product from './Product/Product'
import InnovationPhilosophy from './InnovationPhilosophy/InnovationPhilosophy'
import { CTA } from '../components/CTA'

function HomePage() {
  return (
    <>
    <Hero/>
    <Product/>
    <InnovationPhilosophy/>
    <CTA/>
    </>
  )
}

export default HomePage