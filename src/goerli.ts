import { AddressCollection, ZERO_ADDRESS } from './types'

const tokens = {
  USDC: '0xB32EcEb4f6B5e840Fe0e4ff127D7761D13a4C092',
  XSGD: '0xb4a183d38F754D83AA97810D80FC5BaCCd5c8441',
  EURS: '0x2b1c6c85a1dB4b5CF9C4d4662d0556E5daBcf626',
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
    XAV: '0x40370aed88933021e20cf7c4d67e00417cda2202',
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
    },
    balancerProtocolFeeCollector: '0xce88686553686DA562CE7Cea497CE749DA109f9F'
  },
  tokens,
}

export default addresses
