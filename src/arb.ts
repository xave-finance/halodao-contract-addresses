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
      enabled: [],
      disabled: []
    }
  },
  tokens: {}
}

export default addresses
