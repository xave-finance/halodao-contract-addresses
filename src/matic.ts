import { AddressCollection, ZERO_ADDRESS } from './types'

const tokens = {
  fakeUSDC: '0xd92295aDCE5B6961853394Ad05fb4670012D8c60',
  fakeFxPHP: '0xe1Ca353a88a8822ed95293a7E76bd20eEA2ff662'
}

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
      all: {},
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
    },
    proportionalLiquidity: ZERO_ADDRESS,
    assimilatorFactory: ZERO_ADDRESS,
    oracles: {
      USDC: '0xfE4A8cc5b5B2366C1B58Bea3858e81843581b2F7',
      fxPHP: '0x218231089Bebb2A31970c3b77E96eCfb3BA006D1',
      EURS: '0x73366Fe0AA0Ded304479862808e02506FE556a98'
    }
  },
  tokens,
  lendingMarket: {
    protocol: {
      lendingPoolAddressesProvider:
        '0x30ce25f499A6826b5f60c1EdeE649119FbDABb4a',
      lendingPoolAddressesProviderRegistry:
        '0x4bf6c7dD88B167b310d8Ca8BeEdd8F6A80647B3d',
      reserveLogic: '0x06EEDD74387fBd3FB7165aB39fda1beD3fead536',
      genericLogic: '0xE3eef400C835dfB0Ffb8dA5cE925492bE06f9c4c',
      validationLogic: '0x6D3dB03f082802037D1F44A5b12813903AFf13C9',
      lendingPool: '0xF62EC4f92e30A4C6A1241616A65cd9BA2dc0C9E1',
      lendingPoolConfiguratorImpl: '0x587dA1dBdb1A8B801A4b04c4dCB36B8d37DEcACE',
      lendingPoolConfigurator: '0x41913b1038714584Efc0624bA3CE84eC8cd515A1',
      lendingPoolProxy: '0x023f2B1Ea0F8e862A29C2F5ca73E40F45c23d540',
      stableAndVariableTokensHelper:
        '0xe56415e89d6fC48B6037527d8Ee43dE12c4B29B4',
      aTokensAndRatesHelper: '0x8A898d7423D9785495Fac2C69f0cC4eFE36Bff12',
      aaveOracle: '0xFf4b5a92240CBaa0384f3d7f5e2D50772A80c42E',
      lendingRateOracle: '0x5B9F536650caCDBA9c7957c8a35e6F107b71cd69',
      aaveProtocolDataProvider: '0xC9D2C44937783DaD39c47c352ea0FA191C6db0af',
      stableDebtToken: '0x28408A6fCb70268f3CD7a3af384942DD596fAe27',
      variableDebtToken: '0xd660450913D8D41b5090B252cCe8b67A92367dA1',
      aToken: '0xe5778F0EA12ad5b729B5AC119ac215507100B2Ee',
      defaultReserveInterestRateStrategy:
        '0xa517CC983716d9514983319271ccDe4a3B43fDAE',
      wethGateway: '0x8Bfa7b45Ad86df7BeD67E91A676b7495B0402d04',
      lendingPoolCollateralManager:
        '0x2EDd5a286255764415816d1B709F961a3E7E1101',
      walletBalanceProvider: '0x3450A01F5fABe250d4443Fcd7Be7c3CcA524C266',
      rnbwIncentivesController: '0x390420010cc3244219f5D5b4d63Da7DC125AE90C',
      treasury: '0x74042CE43D1e74FF5627B1e9ff2ee950251b5Db4',
      uiIncentiveDataProvider: '0x099C76Ec7B2B0dA33Ce9cFb6D3e5383bBba1da87',
      uiHaloPoolDataProvider: '0xB3600b3a54ef2D294Bcd6778CD1Efc0952365415'
    },
    lpAssets: {},
    priceOracles: {
      fxPHP: '0x24eA470A0836B5D24d82fEf1f55ad4C79DFd0b04',
      TAGPHP: '0x24eA470A0836B5D24d82fEf1f55ad4C79DFd0b04',
      XSGD: '0x22070511b8985C8694413847ed81E6A856d27D33'
    },
    wrappedNativeToken: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270'
  }
}

export default addresses
