export default function getNetworkname (code) {
  switch (code) {
    case '4':
      return 'Rinkeby'
    case '42':
      return 'Kovan'
    case '1':
    default:
      return 'Mainnet'
  }
}
