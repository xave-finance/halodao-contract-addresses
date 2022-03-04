import { AddressCollection } from './types'

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
    libraries: {
      curves: '0x99b8A93af34efAcb9A71Dd7eBC656365a2d65239',
      orchestrator: '0xeB1879EDc723a1DbA37fd480878CaB5706F0B299',
      proportionalLiquidity: '0xa1c6506Ff7A9C9d510daDaed6798529af2d2251B',
      swaps: '0x85476aB9523168d8143A20Bb873e33Ee7E522FbF',
      viewLiquidity: '0x9f9d0Bb490f7FA5894FFbd07dc46F858BD5B968b'
    },
    curves: {
      enabled: [
        '0xE15E50fF9d52beC41D53d3173F2ed40834D455f4', // TCAD:USDC
        '0x64DCbDeb83e39f152B7Faf83E5E5673faCA0D42A', // XSGD:USDC
        '0x2ED09E2961D72659E4002ba8C2BaDfedC7db19B7' // TGBP:USDC
      ],
      disabled: [
        '0x11816335DEe6763e2A7B6080b2b2980Eac7F85E4', // TAUD:USDC
        '0x20E1d8Daf58358CF11BE5616946e1dF55F1eF8B0', // fxPHP:USDC
        '0xc3CfdA7061b729265F58BdC07564f1cbD6C41FBc' // tagPHP:USDC
      ]
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
