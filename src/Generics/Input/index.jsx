import React from 'react'
import { Container } from './style'

const Input = ({
        type,
        width,
        height,
        mt,
        mb,
        mr,
        ml,
        gap,
        padding,
}) => {

  return (
    <Container 
    // type={type}
    width = {width}
    height ={height}
    mt = {mt}
    mb = {mb}
    mr ={mr}
    ml = {ml}
    gap ={gap}
    padding ={padding}
    />
  )
}

export default Input
