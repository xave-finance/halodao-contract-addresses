import { AddressCollection, ZERO_ADDRESS } from './types'

const tokens = {
  USDC: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
  XSGD: '0xDC3326e71D45186F113a2F448984CA0e8D201995',
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

const fxPools = {
  LP_XSGD_USDC: '0x726E324c29a1e49309672b244bdC4Ff62A270407'
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

  lendingMarket: {
    protocol: {
      lendingPoolAddressesProvider:
        '0x1D5da10918CAC00a62a22532881B9c83C1C9551a',
      lendingPoolAddressesProviderRegistry:
        '0x2Ee7e1FE1B65600A3bD28B06d0b958B3b6cc4695',
      reserveLogic: '0xaf133753F37694cD4b9aD2A886bCb2eb76CDfa51',
      genericLogic: '0x434A125D77218589014aA60900CAE870ed9BcDA8',
      validationLogic: '0x539b12ADAD0f5fC6b2365657f8a4669c0e3Eb7Ab',
      lendingPoolImpl: '0x3f51BAd685B072Ee5313Fc02F1EFdeFa878618D3',
      lendingPool: '0x51485c7278fa37f0f504F541f2755abda7715abf',
      lendingPoolProxy: '0x51485c7278fa37f0f504F541f2755abda7715abf',
      lendingPoolConfiguratorImpl: '0x63d51fcefDf487693b59e8Be04Faa8DE6837f630',
      lendingPoolConfigurator: '0xBacdf66F391E9CB65C1D7CD3e506b6AEE5fA2F88',
      stableAndVariableTokensHelper:
        '0x60A05D525c85f1Fe07e7bC32658B489FE69e805b',
      aTokensAndRatesHelper: '0x3aAfd370FFcA5B1EEC4875d3EdC3939e5f9004a1',
      aaveOracle: '0x2159Cdc79C36dffFb03296FD84Db45b0b932D91E',
      lendingRateOracle: '0x5AE7Ef3118D3F8739BA5525534367757FEd03540',
      aaveProtocolDataProvider: '0x10B71123E0B116E33277079b33d045a23cD21a4D',
      stableDebtToken: '0xEf1Ba1BBC37d9A8e2FF4CFd0f82E6F290E81016C',
      variableDebtToken: '0x844461b5f3Fb323B9f000DF4Eb8d446A1ceBF6aC',
      aToken: '0xaAA14D6559d4b8091759824186999c6f0AD592dE',
      defaultReserveInterestRateStrategy:
        '0xF894fA826926DF73ef43D10272Fb97102dA957C4',
      wethGateway: '0xda863d0a24E242f552f4b9b36d1fDF0844274e02',
      lendingPoolCollateralManager:
        '0xeEc23b994F27B6914A06180c6B5FA4f83ec80712',
      walletBalanceProvider: '0x1Fc9639c1eDe7ba2d33E609A0F2956A23eF99E3e',
      rnbwIncentivesController: '0x', // not available
      treasury: '0x5560659d9a4aB330dE2112fc8Ee0989857197728', // multisig
      uiIncentiveDataProvider: '0xF94052eB28149212e5D814cE75d45586bAceE4ca',
      uiHaloPoolDataProvider: '0x7B007AC2B082E81542CfC74dA327E4bbFd5B9904'
    },
    lpAssets: {
      LP_XSGD_USDC: fxPools.LP_XSGD_USDC
    },
    priceOracles: {
      LP_XSGD_USDC: '0xbca5c841eC9cC6Bd54ee18450eAe3B4D7b68146b'
    }
  },
  ammV2: {
    vault: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
    pools: {
      all: fxPools,
      genesis: [],
      enabled: [
        {
          assets: [tokens.XSGD, tokens.USDC],
          address: fxPools.LP_XSGD_USDC,
          poolId:
            '0x726e324c29a1e49309672b244bdc4ff62a270407000200000000000000000702'
        }
      ],
      disabled: []
    },
    fxPoolFactory: '0x627D759314D5c4007b461A74eBaFA7EBC5dFeD71',
    proportionalLiquidity: '0xe35A4e171F5568e8619DA1e097DAD18928187D85',
    assimilatorFactory: '0x9CB3961ec9E54563602d96D2b3332028aa54dd13',
    swapLibrary: '0x6256447F6dAa532d5A650cFeAf305D2DD7Bd296E',
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
