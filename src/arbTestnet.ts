const addresses: AddressCollection = {
  protocol: {
    RNBW: '0xfbBf11Ae3E8A4b6D9C866B3f16741D1641ccc4d5',
    xRNBW: '0xAe0429F26ed25c8Ad22D2582315Cc99aa5de8fF6'
  },
  rewards: {
    ammRewards: '0xAfeC667A5a02C1EFC27Dd617Ce1dF47C9E8f0F1e'
  },
  ammV1: {
    factory: '0xFf3807e87238A8dC507851Ef340D4F17dea58c88',
    router: '0x303Fe605077f251a123A41b5241a164c49Eba9b5',
    zap: '0x70bA0482FD6343e8fcbd2480C8b4C11d6c654DF5',
    curves: {
      enabled: [
        '0x05aB48cb139bD6a5f67676A7F0cfb21B68c46275' // fxPHP:USDC
      ],
      disabled: []
    }
  },
  ammV2: {
    vault: '0x0000000000000000000000000000000000000000',
    pools: {
      enabled: [],
      disabled: []
    }
  },
  tokens: {}
}

export default addresses
