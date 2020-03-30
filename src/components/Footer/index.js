import { Container } from 'components'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from './logo.svg'

const StyledFooter = styled.footer`
  background: transparent;
  color: white;
  font-family: AvenirNext-Bold, sans-serif;
  font-size: 20px;
  padding: 80px 0 100px 0;
  
  ${Container} {
    display: flex;
    justify-content: space-between;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
`

const FooterLogo = styled.img.attrs({
  src: logo,
  alt: 'ohmyDefi!'
})`
  height: 100%;
  max-height: 35px;
  padding-top: 1em;
`

export default function Footer () {
  return (
    <StyledFooter>
      <Container>
        <Link to='/'>
          <FooterLogo />
        </Link>

        <p>
          Need a help? - <a href='mailto:contact@ohmydefi.com'>contact@ohmydefi.com</a>
        </p>

      </Container>
    </StyledFooter>
  )
}
