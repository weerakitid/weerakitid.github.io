import styled from 'styled-components'

const Text = styled.p.attrs(props => ({
  top: props.top || 'auto',
}))`
  color: #373737;
  margin-top: ${props => props.top};
  ${props => props.title && `
    color: #919191;
    font-style: italic;
  `}
  ${props => props.bold && `
    font-weight: bold;
    font-size: 48px;
  `}
  ${props => props.footer && `
    color: #f5678d;
  `}
`

export const StatusText = styled(Text)`
  color: #919191;
  font-size: 36px;
`

export const TicketNumber = styled(Text)`
  color: #f5678d;
  font-size: 64px;
`

export default Text;
