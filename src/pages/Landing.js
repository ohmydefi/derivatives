import { Button, Container, DownChevron, FullHeightContainer, Page, ProductCard } from 'components'
import React from 'react'
import styled from 'styled-components'
import { media } from 'theme'

const StyledLanding = styled.div` 
  h1, h2, h3 {
    text-align: center;
    margin: 0 auto;
    max-width: 800px;
    color: white;
  }
  
  h1 {
    font-family: AvenirNext-Bold, sans-serif;
    font-size: 100px;
    font-weight: bold;
    padding-top: 250px;
    line-height: 93px;
    letter-spacing: 1px;
    text-transform: capitalize;
  }
  
  h2 {
    font-family: AvenirNext-Regular, sans-serif;
    font-size: 20px;
    font-weight: lighter;
  }
  
  h3 {
    font-family: AvenirNext-Bold, sans-serif;
    font-size: 35px;
    letter-spacing: -1.47px;
    padding: 40px 0;
  }
  
  .first-area {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: calc(100% - 60px);
    
    a {
      text-decoration: none;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
    }
  }
  
  .products {
    display: grid;
    grid-gap: 40px;
    grid-template-columns: repeat(3, 1fr); 
  }
  
  ${media.sm.down`
    h1, h2 {
      max-width: 300px;
      margin-left: 10px;
      margin-right: 10px;
    }
    
    h1 {
      font-size: 45px;
      line-height: 50px;
    }
    
    br {
      display: none;
    }
    
    .products {
      grid-template-columns: 1fr; 
      max-width: 300px;
      margin: 0 auto;
    }
  `}
`

export default function Landing () {
  return (
    <Page path='/' exact>
      <StyledLanding>
        <Container>
          <FullHeightContainer>
            <div className='first-area'>
              <h1>Decentralizing <br />Options Market</h1>
              <a href='#products'>
                <Button kind='green'>Check out how</Button>
                <DownChevron />
              </a>
            </div>
          </FullHeightContainer>
          <div id='products'>
            <h3>Our Products</h3>

            <div className='products'>
              <ProductCard kind='building' link='//builder.ohmydefi.com'>
                Here you can create and sell either a put or a call, of any asset, strike and maturity combination.
              </ProductCard>
              <ProductCard kind='writing' link='//writer.ohmydefi.com'>
                Write and sell American puts and calls for the same maturity and strike price.
              </ProductCard>
              <ProductCard kind='hedging' link='//hedger.ohmydefi.com'>
                Buy a long straddle on ETH:DAI and hedge against ETH’s volatility.
              </ProductCard>
            </div>
          </div>
        </Container>
      </StyledLanding>
    </Page>
  )
}
