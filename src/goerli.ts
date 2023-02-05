import { AddressCollection, ZERO_ADDRESS } from './types'

const tokens = {
  USDC: '0xB32EcEb4f6B5e840Fe0e4ff127D7761D13a4C092',
  XSGD: '0xb4a183d38F754D83AA97810D80FC5BaCCd5c8441',
  EURS: '0x2b1c6c85a1dB4b5CF9C4d4662d0556E5daBcf626',
  USDT: '0x9FDc4881Ce3eE888A7D3162A8AccFB3875437B34',
  DAI: '0x7421F1bAb6d1D82c2f854B464Ecd81e0288F3550',
  'bb-a-usd': '0x13ACD41C585d7EbB4a9460f7C8f50BE60DC080Cd'
}

const fxPools = {
  LP_XSGD_USDC: '0x5886F7BFCC5D61CD4Ad0DC34e72DEFa2c85dE104',
  LP_EURS_USDC: '0x1fbA91Ce46d2453e2d461b1a0FcF76588a07fE41'
}

const fxPoolIds = {
  XSGD_USDC:
    '0x5886f7bfcc5d61cd4ad0dc34e72defa2c85de1040002000000000000000002e9',
  EURS_USDC:
    '0x1fba91ce46d2453e2d461b1a0fcf76588a07fe410002000000000000000003af'
}

const addresses: AddressCollection = {
  protocol: {
    XAV: '0x4f2157aE2661e4312B8F2E458705fA5a9aeb3D46',
    RNBW: ZERO_ADDRESS,
    xRNBW: ZERO_ADDRESS
  },
  rewards: {
    ammRewards: ZERO_ADDRESS,
    rewardsManager: ZERO_ADDRESS,
    epochManager: ZERO_ADDRESS
  },
  ammV2: {
    vault: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
    pools: {
      all: fxPools,
      genesis: [],
      enabled: [
        {
          assets: [tokens.XSGD, tokens.USDC],
          address: fxPools.LP_XSGD_USDC,
          poolId: fxPoolIds.XSGD_USDC
        },
        {
          assets: [tokens.EURS, tokens.USDC],
          address: fxPools.LP_EURS_USDC,
          poolId: fxPoolIds.EURS_USDC
        }
      ],
      disabled: []
    },
    fxPoolFactory: '0x13841C45274c68002F6D0cb0a40Ae7faa54e7e57',
    proportionalLiquidity: '0x7bC633DA66EBD9A5E44293D8A71e094aFd78c5D6',
    assimilatorFactory: '0xbd02F2F69B8D79CD2566b6e425Ba2810ca5C2743',
    swapLibrary: '0x9875C5C44C10e24AEa48C422f819c5c8f933701D',
    oracles: {
      USDC: '0xAb5c49580294Aff77670F839ea425f5b78ab3Ae7',
      XSGD: '0x4fbc1dFfd80F197CF99FAeDa8f7Bcae0Ebea4d81',
      EURS: '0x21420f2Fa4082d4Bf023698bB574F7D510345260',
      USDT: '0xAb5c49580294Aff77670F839ea425f5b78ab3Ae7', // no USDT on Chainlink goerli, reusing USDC instead
      DAI: '0x0d79df66BE487753B02D015Fb622DED7f0E9798d',
      'bb-a-usd': '0x839A63Ea63e615FC8F1eE98137a517D168941040'
    },
    balancerProtocolFeeCollector: '0xce88686553686DA562CE7Cea497CE749DA109f9F'
  },
  tokens
}

export default addresses
