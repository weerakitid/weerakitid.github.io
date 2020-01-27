import React from 'react'
import styled from 'styled-components'
import logoBorder from '../assets/logo-border.svg'
import ImageHolder from './ImageHolder'

const Header = styled.div`
  text-align: center;
  height: 70px;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2);
`
const Logo = () => {
  return (
    <Header>
      <ImageHolder src={logoBorder} alt="logo" top="10px" />
    </Header>
  )
}

export default Logo
