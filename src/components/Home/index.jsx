import React from 'react'
import CaruselOwn from '../Carusel'
import Category from '../Category'
import FarmHouse from '../FarmHouse'
import Recommended from '../Recommended'
import Rent from '../Rent'
import Testimonials from '../Testimonials'
import Why from '../WhyChooseUs'
import { Container } from './style'

const Home = () => {
  return (
    <Container>
      <CaruselOwn/>
      <Recommended/>
      <Why/>
      <Category/>
      <FarmHouse/>
      <Rent/>
      {/* <Testimonials/> */}
    </Container>  
  )
}

export default Home