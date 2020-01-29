import styled from 'styled-components'

const Button = styled.button`
  border-radius: 80px;
  border: none;
  font-size: 30px;
  color: #ffffff;
  background: #f5678d;
  padding: 16px 40px;
  margin-top: 40px;
  
  &:disabled {
    color: #bbbbbb;
    background: #e0e0e0;
    cursor: not-allowed;
  }
`

export default Button
