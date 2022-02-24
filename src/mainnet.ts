const addresses: AddressCollection = {
  protocol: {
    RNBW: '0xe94b97b6b43639e238c851a7e693f50033efd75c',
    xRNBW: '0x47BE779De87de6580d0548cde80710a93c502405'
  },
  rewards: {
    ammRewards: '0x9cFf4A10b6Fb163a4DF369AaFed9d95838222ca6',
    rewardsManager: '0xdb3542577aD5B179f6E09C2F092900d416D052D7',
    epochManager: '0xfAe4cfec9f2570f35d7D6Bef455ECCe3DCa83551'
  },
  ammV1: {
    factory: '0xFA505d02269bF4Ea59355a4e37fBd882122717e5',
    router: '0x585B52fE4712a74404abA83dEB09A0E087D80802',
    zap: '0xE950eC7Fc508dd86fD9B36671f6B1602007D5B72',
    curves: {
      enabled: [
        '0xa34317db73e77d453b1b8d04550c44d10e981c8e' // TCAD:USDC
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
