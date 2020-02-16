import { Footer, Header } from 'components'
import { useWeb3Provider, Web3Context } from 'hooks/web3'
import { Landing } from 'pages'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { GlobalStyles } from 'theme'

function App () {
  const { web3, enableFortmatic, enableMetamask } = useWeb3Provider(true)

  const enableProvider = type => {
    if (type === 'fortmatic') {
      enableFortmatic()
    } else {
      enableMetamask()
    }
  }

  return (
    <Web3Context.Provider value={web3}>
      <GlobalStyles />
      <Router>
        <Header onEnable={enableProvider} />
        <Landing />
        <Footer />
      </Router>
    </Web3Context.Provider>
  )
}

export default App
