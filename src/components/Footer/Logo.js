import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { media } from 'theme'

const Logo = styled(Link)`
  flex-grow: 1;

  img {
    height: 23px;
    width: 23px;
  }

  ${media.sm.down`

  `}
`

export default Logo
