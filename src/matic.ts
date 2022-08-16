import { AddressCollection, ZERO_ADDRESS } from './types'

const tokens = {
  fakeUSDC: '0xd92295aDCE5B6961853394Ad05fb4670012D8c60',
  fakeFxPHP: '0xe1Ca353a88a8822ed95293a7E76bd20eEA2ff662',
  fakeXSGD: '0x7112AE5d61eb28c7b00413882B59b7F796e2A505',
  fakeEURS: '0xBb54874397Beb2Dd8673eb3B8Cd7C07d54bbd02D'
}

const curves = {
  HLP_XSGD_USDC: '0x8123C64D6607412C7Ac9E880f12245ef22558b14',
  HLP_TAGPHP_USDC: '0x6156f030B877344470BAC075a708d7E27602cc17',
  HLP_WTGBP_USDC: '0xbF772a745533f6bAd97C58D2cb6B241eF7487242',
  HLP_WTCAD_USDC: '0xaEad273bc7E17DD6951ceD3264B1dBa8A19114C2',
  HLP_WTAUD_USDC: '0x95AB308bE1e209eB6FfdD3279B5ea71D365AD30B'
}

const addresses: AddressCollection = {
  protocol: {
    XAV: ZERO_ADDRESS,
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
      all: curves,
      enabled: [curves.HLP_XSGD_USDC, curves.HLP_TAGPHP_USDC],
      disabled: [
        curves.HLP_WTGBP_USDC,
        curves.HLP_WTCAD_USDC,
        curves.HLP_WTAUD_USDC
      ]
    }
  },
  ammV2: {
    vault: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
    pools: {
      all: {},
      genesis: [],
      enabled: [],
      disabled: []
    },
    fxPoolFactory: ZERO_ADDRESS,
    proportionalLiquidity: ZERO_ADDRESS,
    assimilatorFactory: ZERO_ADDRESS,
    swapLibrary: ZERO_ADDRESS,
    oracles: {
      USDC: '0xfE4A8cc5b5B2366C1B58Bea3858e81843581b2F7',
      fxPHP: '0x218231089Bebb2A31970c3b77E96eCfb3BA006D1',
      EURS: '0x73366Fe0AA0Ded304479862808e02506FE556a98',
      XSGD: '0x8CE3cAc0E6635ce04783709ca3CC4F5fc5304299'
    }
  },
  tokens
}

export default addresses
