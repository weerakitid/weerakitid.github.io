import React, { Component } from 'react'
import { Redirect, Switch } from 'react-router-dom'
import axios from 'axios'
import logo from '../assets/logo.svg'
import member from '../assets/member.png'
import Text from './Text'
import ImageHolder from './ImageHolder'
import Button from './Button'
import StyledDiv from './StyledDiv'

class Details extends Component {
  render() {
    return (
      <StyledDiv>
        <Text title top="40px">You can get free concert</Text>
        <ImageHolder src={logo} top="20px" />
        <ImageHolder src={member} hero top="40px" />
        <Text bold top="40px">Get ticket</Text>
        <Button onClick={this.getTicket}>Get ticket now</Button>
        <Text footer top="100px">Blackpink in your area</Text>
      </StyledDiv >
    )
  }

  async getTicket() {
    let res = await axios.get(
      "https://us-central1-it-openhouse.cloudfunctions.net/api/get-ticket"
    )
    if (res.data.message < 10) {
      window.location.assign("http://localhost:3000/success")
    } else {
      window.location.assign("http://localhost:3000/soldout")
    }
  }
}
export default Details
