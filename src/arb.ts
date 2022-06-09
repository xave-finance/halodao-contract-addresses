import { AddressCollection, ZERO_ADDRESS } from './types'

const tokens = {
  USDC: '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8',
  fxPHP: '0x3d147cD9aC957B2a5F968dE9d1c6B9d0872286a0'
}

const addresses: AddressCollection = {
  protocol: {
    RNBW: '0xA4b7999A1456A481FB0F2fa7E431b9B641A00770',
    xRNBW: '0x323C11843DEaEa9f13126FE33B86f6C5086DE138'
  },
  rewards: {
    ammRewards: '0x254e3D5F964E770F3a51a19d809bcE36308d797d'
  },
  ammV1: {
    factory: '0x972127aFf8e6464e50eFc0a2aD344063355AE424',
    router: '0xDFEa5ECCbB7D61D49dFa702ed8FeC4EC48944719',
    zap: '0x79DD0b8b83C4FB4f66e90F33139b002eb2b268f3',
    curves: {
      enabled: [
        '0x90B48Bb20048786b167473dfEeC443142D043CF7', // fxPHP:USDC
        '0xD5AD9eed5c5f28D83933779CD7E677e112991f51' // fxAUD:USDC
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
    },
    proportionalLiquidity: '0x8DB14E029399C4500614161867b8bFc1a2F74019',
    assimilatorFactory: '0xEF7bC37B491363Cf0ea7914b470ed846D48321D7',
    oracles: {
      USDC: '0x50834F3163758fcC1Df9973b6e91f0F0F0434aD3',
      fxPHP: '0xfF82AAF635645fD0bcc7b619C3F28004cDb58574'
    }
  },
  tokens
}

export default addresses
