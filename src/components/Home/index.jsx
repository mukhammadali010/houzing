import React from 'react'
import CaruselOwn from '../Carusel'
import { Container } from './style'
import Card from "../Card";

const Home = () => {
  return (
    <Container>
      <CaruselOwn/>
      <Card/>
    </Container>  
  )
}

export default Home