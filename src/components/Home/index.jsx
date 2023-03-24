import React from 'react'
import CaruselOwn from '../Carusel'
import Category from '../Category'
import { Container } from './style'

const Home = () => {
  return (
    <Container>
      <CaruselOwn/>
      <Category/>
    </Container>  
  )
}

export default Home