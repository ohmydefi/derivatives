import React from 'react'
import styled from 'styled-components'
import mail from './icons/mail.svg'
import twitter from './icons/twitter.svg'
import github from './icons/github.svg'
import discord from './icons/discord.svg'
import medium from './icons/medium.svg'
import telegram from './icons/telegram.svg'
import icon from './icons/logo.svg'
import ExternalLink from '../ExternalLink'
import Logo from './Logo'
import SocialLinks from './SocialLInks'

const FooterContainer = styled.footer`
  background-color: black;
  display: flex;
  justify-content: space-between;
  padding: 14px 50px;
`

const FooterIcon = styled.img`
   height: 23px!important;
   width: 23px!important;
`

const Footer = () => (
  <FooterContainer>
    <Logo to='/'>
      <FooterIcon src={icon} alt='ohmydefi-icon' />
    </Logo>
    <SocialLinks>
      <ExternalLink href='mailto:contact@ohmydefi.com'>
        <img src={mail} alt='email' />
      </ExternalLink>
      <ExternalLink href='https://t.me/joinchat/G4Yalxu5tuhK-Ibm58phTQ'>
        <img src={telegram} alt='telegram' />
      </ExternalLink>
      <ExternalLink href='https://discord.gg/zxtcEJR
'
      >
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
)

export default Footer
