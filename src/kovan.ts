import { AddressCollection } from './types'

const tokens = {
  WETH: '0x9b1FeAAd523A4f6BA73215C103208907938EA7F1',
  WBTC: '0x41dE675d148f6acC84E5e88A9515Db0889519d1D',
  USDC: '0x7e6F38922B59545bB5A6dc3A71039b85dFB1B7cE',
  fxPHP: '0x07bAB1e2D6DCb965d250F376B811ab8c2373AAE0',
  XSGD: '0x4DCE1178D2A368397c09fc6C63e2f82F00a2Ca09',
  EURS: '0xaA64D57E3c781bcFB2e8B1e1C9936C302Db84bCE'
}

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
      genesis: [
        {
          assets: [tokens.WETH, tokens.USDC],
          address: '0xe18054c51d10b6162012e8989101e9d762586cac',
          poolId:
            '0x3c13bc30b8e878c53fd2a36b679409c073afd75950be43d8858768e956fbc20e'
        },
        {
          assets: [tokens.WBTC, tokens.USDC],
          address: '0x21ee3b7b61ac1b2bf5b94f2706ab777e51b3dc56',
          poolId:
            '0x3c13bc30b8e878c53fd2a36b679409c073afd75950be43d8858768e956fbc20e'
        }
      ],
      enabled: [
        {
          assets: [tokens.fxPHP, tokens.USDC],
          address: '0xca9eC9CF8cBCF7DB2a2d08e43B176bA8d92e381C',
          poolId:
            '0xca9ec9cf8cbcf7db2a2d08e43b176ba8d92e381c00010000000000000000071e'
        },
        {
          assets: [tokens.XSGD, tokens.USDC],
          address: '0x979fc3D80D11D0b58d0E1FFE6a4463cBB813761c',
          poolId:
            '0x979fc3d80d11d0b58d0e1ffe6a4463cbb813761c00010000000000000000071f'
        },
        {
          assets: [tokens.EURS, tokens.USDC],
          address: '0x0A7900dDe4cA3211D3367Cfad739E91b49F46402',
          poolId:
            '0x0a7900dde4ca3211d3367cfad739e91b49f46402000100000000000000000720'
        }
      ],
      disabled: []
    }
  },
  tokens
}

export default addresses
