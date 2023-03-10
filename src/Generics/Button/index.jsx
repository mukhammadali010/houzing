import React from 'react'
import { Container } from './style'

const Button = ({
        type,
        width,
        height,
        mt,
        mb,
        mr,
        ml,
        gap,
        padding,
        children,
        onclick
}) => {

  return (
    <Container 
    type={type}
    width = {width}
    height ={height}
    mt = {mt}
    mb = {mb}
    mr ={mr}
    ml = {ml}
    gap ={gap}
    padding ={padding}
    onClick={onclick}
    >
     {children}
    </Container>
  )
}

export default Button
