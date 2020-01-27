import React from 'react'
import success from '../assets/success.svg'
import Logo from '../components/Logo'
import ImageHolder from '../components/ImageHolder'
import StyledDiv from '../components/StyledDiv'
import Text, { StatusText, TicketNumber } from '../components/Text'

const Success = () => {
  return (
    <StyledDiv>
      <Logo />
      <ImageHolder src={success} top="80px" />
      <StatusText top="20px">Congratulations!</StatusText>
      <Text title top="20px">Your ticket number</Text>
      <TicketNumber top="20px">BP0001</TicketNumber>
      <Text footer top="200px">Blackpink in your area</Text>
    </StyledDiv>
  )
}

export default Success
