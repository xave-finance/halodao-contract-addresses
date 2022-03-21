import { AddressCollection } from './types'

const addresses: AddressCollection = {
  protocol: {
    RNBW: '0x16D185d025bF592114D1A68f83085F36159f6CdA',
    xRNBW: '0xbcbfEac78133D1efe71Ba16D4F4221b9AD4bAd01'
  },
  rewards: {
    ammRewards: '0xdCE943BeF9bF1E9F8B6f8a8Eb093dceF46a489eD',
    rewardsManager: '0x3B25a58Ca40c93F690388126478cc0F58E42Bd3C'
  },
  ammV1: {
    factory: '',
    router: '0xa02dCeB15cc32249beC33C2808b4799a44F8B0D5',
    zap: '0xf3429A0cC9Ed42929ac7Bae8D1B2ED42F0325C11',
    curves: {
      enabled: [
        '0xEb06cF1cD90d75eC6d10bbdc43B555483674F6ff', // EURS:USDC
        '0x02e673e79cE5122a3B83Afa9964637C259cb090F', // CHF:USDC
        '0x7169866E13F58E045D77D5bE3d79ad8cCADC0fbF', // GBP:USDC
        '0x184B1a8985316Ca061cC1e043Ec1C666f4A73A18', // WETH:USDC
        '0xEe1ab46877d1DeFE18bAfC749F32919dF6928a16' // XIDR:USDC
      ],
      disabled: []
    }
  },
  ammV2: {
    vault: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
    pools: {
      genesis: [],
      enabled: [],
      disabled: []
    }
  },
  tokens: {}
}

export default addresses
