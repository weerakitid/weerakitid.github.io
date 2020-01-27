import styled from 'styled-components'

const ImageHolder = styled.img.attrs(props => ({
  top: props.top || 'auto',
  bottom: props.bottom || 'auto',
}))`
  margin-top: ${props => props.top};
  margin-bottom: ${props => props.bottom};
  ${props => props.hero && `
    width: 90%;
  `}
`

export default ImageHolder
