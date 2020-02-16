import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { GlobalStyles } from 'theme'
import { Footer, Header } from 'components'
import { useWeb3Provider, Web3Context } from 'hooks/web3'
import { Dashboard, Landing } from 'pages'

function App () {
  const { web3 } = useWeb3Provider()

  return (
    <Web3Context.Provider value={web3}>
      <GlobalStyles />
      <Router>
        <Header />
        <Landing />
        <Dashboard />
        <Footer />
      </Router>
    </Web3Context.Provider>
  )
}

export default App
