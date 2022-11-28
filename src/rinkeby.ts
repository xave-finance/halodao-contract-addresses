import { AddressCollection, ZERO_ADDRESS } from './types'

const tokens = {
  WETH: '0x8Ac6F66307d1bcFBb4a7b7d4EB86b36b644192Ca',
  WBTC: '0xf5b0b3b50328B2595BC6a31A526A8A3568CEa42d',
  USDC: '0x9875C5C44C10e24AEa48C422f819c5c8f933701D',
  fxPHP: '0x2BFD80c4E72164F62515850cec591D06AB857c65',
  XSGD: '0x9347839e0257516565C9Dfa03B5756f3401FA237',
  EURS: '0x8e6d2797DFB73A31d696D7C124C2edDD9932d3e4'
}

const addresses: AddressCollection = {
  protocol: {
    XAV: ZERO_ADDRESS,
    RNBW: '0x357bdb97FB9555bede5ed5201dBD15a8f3f6B7B8',
    xRNBW: '0xC1cFbAdE2df5fe70C18273F926553D9d2c8f944C'
  },
  rewards: {
    ammRewards: '0xf3585984B956f2A26694ee1BAede7eAB658A5e7E'
  },
  ammV2: {
    vault: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
    pools: {
      all: {},
      genesis: [],
      enabled: [
        {
          assets: [tokens.fxPHP, tokens.USDC],
          address: '0x4B4404E80bb3Ae9E342B8aC3A95eF014AE7F9E48',
          poolId:
            '0x4b4404e80bb3ae9e342b8ac3a95ef014ae7f9e480001000000000000000000eb'
        },
        {
          assets: [tokens.XSGD, tokens.USDC],
          address: '0x30eA140e33E265e3793ce3C125eE72987BDAC50E',
          poolId:
            '0x30ea140e33e265e3793ce3c125ee72987bdac50e000100000000000000000178'
        },
        {
          assets: [tokens.EURS, tokens.USDC],
          address: '0x4159d4279BAc010ef4E4c1a7e085f6103956a95a',
          poolId:
            '0x4159d4279bac010ef4e4c1a7e085f6103956a95a000100000000000000000179'
        }
      ],
      disabled: []
    },
    fxPoolFactory: ZERO_ADDRESS,
    proportionalLiquidity: ZERO_ADDRESS,
    assimilatorFactory: ZERO_ADDRESS,
    swapLibrary: ZERO_ADDRESS,
    oracles: {
      USDC: '0xa24de01df22b63d23Ebc1882a5E3d4ec0d907bFB',
      EURS: '0x78F9e60608bF48a1155b4B2A5e31F32318a1d85F'
    },
    balancerProtocolFeeCollector: ZERO_ADDRESS
  },
  tokens
}

export default addresses
