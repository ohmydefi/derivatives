import React from 'react'
import styled from 'styled-components'
import ExternalLink from '../ExternalLink'
import discord from './icons/discord.svg'
import github from './icons/github.svg'
import icon from './icons/logo.svg'
import mail from './icons/mail.svg'
import medium from './icons/medium.svg'
import telegram from './icons/telegram.svg'
import twitter from './icons/twitter.svg'
import Logo from './Logo'
import SocialLinks from './SocialLinks'
import { media } from 'theme'
import { Container } from 'components'

const StyledFooter = styled.footer`
  font-family: AvenirNext-Bold, sans-serif;
  background-color: black;
  margin-top: 30px;
`

const FooterContainer = styled(Container)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px 0;
  ${media.sm.down`
    justify-content: space-around;
    flex-direction: column;
  `}
`

const DocumentationLink = styled(ExternalLink)`
  color: white;
  padding: 20px 0;

  &, &:visited, &:hover {
    text-decoration: none;
  }
`

const Footer = () => (
  <StyledFooter>
    <FooterContainer>
      <Logo to='/'>
        <img src={icon} alt='ohmydefi-icon' />
      </Logo>

      <DocumentationLink href='https://ohmydefi.gitbook.io/documentation/'>
        Developers
      </DocumentationLink>

      <SocialLinks>
        <ExternalLink href='mailto:contact@ohmydefi.com'>
          <img src={mail} alt='email' />
        </ExternalLink>
        <ExternalLink href='https://t.me/joinchat/G4Yalxu5tuhK-Ibm58phTQ'>
          <img src={telegram} alt='telegram' />
        </ExternalLink>
        <ExternalLink href='https://discord.gg/zxtcEJR'>
          <img src={discord} alt='discord' />
        </ExternalLink>
        <ExternalLink href='https://medium.com/ohmydefi'>
          <img src={medium} alt='medium' />
        </ExternalLink>
        <ExternalLink href='https://twitter.com/ohmydefi'>
          <img src={twitter} alt='twitter' />
        </ExternalLink>
        <ExternalLink href='https://github.com/ohmydefi/'>
          <img src={github} alt='github' />
        </ExternalLink>
      </SocialLinks>
    </FooterContainer>
  </StyledFooter>
)

export default Footer
