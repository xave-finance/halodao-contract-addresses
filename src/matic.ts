import { AddressCollection } from './types'

const addresses: AddressCollection = {
  protocol: {
    RNBW: '0x18e7bDB379928A651f093ef1bC328889b33A560c',
    xRNBW: '0xc104e54803abA12f7a171a49DDC333Da39f47193'
  },
  rewards: {
    ammRewards: '0x972127aFf8e6464e50eFc0a2aD344063355AE424'
  },
  ammV1: {
    factory: '0x6bfBc74eb37d44DE6E44B0B63F04CbA626009Ff5',
    router: '0x26f2860cdeB7cC785eE5d59a5Efb2D0D3842C39D',
    zap: '0xA187b61e9F8f6E58bB0eB8D88cAda05710143Ce8',
    curves: {
      enabled: [
        '0x6156f030B877344470BAC075a708d7E27602cc17', // tagPHP:USDC
        '0x8123C64D6607412C7Ac9E880f12245ef22558b14' // XSGD:USDC
      ],
      disabled: [
        '0x95AB308bE1e209eB6FfdD3279B5ea71D365AD30B', // wTAUD:USDC
        '0xaEad273bc7E17DD6951ceD3264B1dBa8A19114C2', // wTCAD:USDC
        '0xbF772a745533f6bAd97C58D2cb6B241eF7487242' // wTGBP:USDC
      ]
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
