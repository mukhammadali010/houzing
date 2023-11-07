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
        onclick,
        success,
        disabled,
        position,
        top,
        left,
        right,
        bottom
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
    disabled={disabled}
    position={position}
    left={left}
    right={right}
    top={top}
    bottom={bottom}
    >
     {children}
    </Container>
  )
}

export default Button
