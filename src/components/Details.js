import React from 'react'
import logo from '../assets/logo.svg'
import member from '../assets/member.png'
import Text from './Text'
import ImageHolder from './ImageHolder'
import Button from './Button'
import StyledDiv from './StyledDiv'

const Details = () => {
  return (
    <StyledDiv>
      <Text title top="40px">You can get free concert</Text>
      <ImageHolder src={logo} top="20px" />
      <ImageHolder src={member} hero top="40px" />
      <Text bold top="40px">Get ticket</Text>
      <Text title top="10px">Sunday 26 January 2020 at 03.00 PM.</Text>
      <Button>Get ticket now</Button>
      <Text footer top="100px">Blackpink in your area</Text>
    </StyledDiv>
  )
}

export default Details
