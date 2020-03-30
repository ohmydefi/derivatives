import { getNetworkVersion } from 'hooks/web3'

export default function getAddresses () {
  const network = getNetworkVersion()

  switch (network) {
    case '1':
      return {
        dai: '0x6b175474e89094c44da98b954eedeac495271d0f',
        call: '0xce22A23D4630507A38F5d16b181614CbE383D4D3',
        put: '0xb0919df3247eC73E5e5A3433DB41089219FeE410',
        uniswapFactory: '0xc0a47dFe034B400B47bDaD5FecDa2621de6c4d95'
      }
    case '4':
      return {
        dai: '0x5695e8dc6f08855049aC3EC5F3D0b46fFde5271A',
        call: '0xb0919df3247eC73E5e5A3433DB41089219FeE410',
        put: '0xcB8479d129bC3318b484E8221B8d5EB718F11fcb',
        uniswapFactory: '0xf5D915570BC477f9B8D6C0E980aA81757A3AaC36'
      }
    case '42':
    default:
      return {
        dai: '0x842e3D4b98b94c36D630238Ec4490Bf501e7f0D5',
        call: '0x28F1117660fc0A0A7f2ce8dD5529f7B0E8e8cA9a',
        put: '0x28F1117660fc0A0A7f2ce8dD5529f7B0E8e8cA9a',
        uniswapFactory: ''
      }
  }
}
