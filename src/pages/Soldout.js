import React from 'react'
import fail from '../assets/fail.svg'
import Logo from '../components/Logo'
import ImageHolder from '../components/ImageHolder'
import StyledDiv from '../components/StyledDiv'
import Text, { StatusText } from '../components/Text'

const Soldout = () => {
  return (
    <StyledDiv>
      <Logo />
      <ImageHolder src={fail} top="80px" />
      <StatusText top="20px">Sold out</StatusText>
      <Text title top="20px">Mabe next time</Text>
      <Text footer top="260px">Blackpink in your area</Text>
    </StyledDiv>
  )
}

export default Soldout
