import styled from 'styled-components'
import { media } from 'theme'

const SocialLinks = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-start;
  color: white;

  a {
    margin: 0 10px;
  }

  img {
    width: 21px;
  }

  ${media.sm.down`
    justify-content: center;
    width: 100%;
  `}
`

export default SocialLinks
