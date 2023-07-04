import { AddressCollection, ZERO_ADDRESS } from './types'

const tokens = {
  USDC: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
  XSGD: '0xDC3326e71D45186F113a2F448984CA0e8D201995',
  indexUSDC: '0x35b51Ff33bE10a9a741e9C9d3f17585e4b7D15C0',
  XIDR: '0x2c826035c1C36986117A0e949bD6ad4baB54afE2',
  DAI: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
  EURS: '0xE111178A87A3BFf0c8d18DECBa5798827539Ae99',
  USDT: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
  fakeUSDC: '0xd92295aDCE5B6961853394Ad05fb4670012D8c60',
  fakeFxPHP: '0xe1Ca353a88a8822ed95293a7E76bd20eEA2ff662',
  fakeXSGD: '0x7112AE5d61eb28c7b00413882B59b7F796e2A505',
  fakeEURS: '0xBb54874397Beb2Dd8673eb3B8Cd7C07d54bbd02D',
  BAL: '0x9a71012b13ca4d3d0cdc72a177df3ef03b0e76a3', // Balancer governance token
  'bb-a-usd': '0x48e6B98ef6329f8f0A30eBB8c7C960330d648085', // balancer ComposableStablePool
  'bb-a-USDC': '0xF93579002DBE8046c43FEfE86ec78b1112247BB8', // balancer USDC:aUSDC AaveLinearPool
  'bb-a-DAI': '0x178E029173417b1F9C8bC16DCeC6f697bC323746', // balancer DAI:aDAI AaveLinearPool
  'bb-a-USDT': '0xFf4ce5AAAb5a627bf82f4A571AB1cE94Aa365eA6' // balancer USDT:aUSDT AaveLinearPool
}

const curves = {
  HLP_XSGD_USDC: '0x8123C64D6607412C7Ac9E880f12245ef22558b14',
  HLP_TAGPHP_USDC: '0x6156f030B877344470BAC075a708d7E27602cc17',
  HLP_WTGBP_USDC: '0xbF772a745533f6bAd97C58D2cb6B241eF7487242',
  HLP_WTCAD_USDC: '0xaEad273bc7E17DD6951ceD3264B1dBa8A19114C2',
  HLP_WTAUD_USDC: '0x95AB308bE1e209eB6FfdD3279B5ea71D365AD30B'
}

const fxPools = {
  LP_XSGD_USDC: '0x726E324c29a1e49309672b244bdC4Ff62A270407',
  LP_DAI_USDC: '0x216B176513C500dBE1D677939103E350A9373a39',
  LP_EURS_USDC: '0xfd24Afa5416C8De94FDbaf344840F524155A4DD0',
  'LP_XSGD_bb-a-usd': '0x2c7223699099ca6785a9da783ededfca5218bd27',
  'LP_EURS_bb-a-usd': '0x70bbCeB61B5dD6645aABa80693B0078aee18E2e9'
}

const poolIds = {
  XSGD_USDC:
    '0x726e324c29a1e49309672b244bdc4ff62a270407000200000000000000000702',
  DAI_USDC:
    '0x216b176513c500dbe1d677939103e350a9373a390002000000000000000008da',
  EURS_USDC:
    '0xfd24afa5416c8de94fdbaf344840f524155a4dd00002000000000000000008db',
  'XSGD_bb-a-usd':
    '0x2c7223699099ca6785a9da783ededfca5218bd27000200000000000000000b0d',
  'EURS_bb-a-usd':
    '0x70bbceb61b5dd6645aaba80693b0078aee18e2e9000200000000000000000b0e',
  'bb-a-usd':
    '0x48e6b98ef6329f8f0a30ebb8c7c960330d64808500000000000000000000075b',
  'bb-a-USDC':
    '0xf93579002dbe8046c43fefe86ec78b1112247bb8000000000000000000000759',
  'bb-a-DAI':
    '0x178e029173417b1f9c8bc16dcec6f697bc323746000000000000000000000758',
  'bb-a-USDT':
    '0xff4ce5aaab5a627bf82f4a571ab1ce94aa365ea600000000000000000000075a'
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
      all: fxPools,
      genesis: [],
      enabled: [
        {
          assets: [tokens.XSGD, tokens['bb-a-usd']],
          address: fxPools['LP_XSGD_bb-a-usd'],
          poolId: poolIds['XSGD_bb-a-usd'],
          gauges: {
            main: '0x145011e0C04805E11BEf23c1EEd848Faf49bB779', // PolygonRootGauge
            child: '0xA7165E1E3dEfe55DAdA5C4289268d57faBA6dAd2', // ChildLiquidityGauge

            // deprecated as of June 2023 in favor of ChildLiquidityGauge (keeping it here for migration)
            l2: {
              rewardsOnly: '0x3aC845345fc2d51A3006Ed384055cD5ACde86441', // RewardsOnlyGauge
              rewardsHelper: '0xaEb406b0E430BF5Ea2Dc0B9Fe62E4E53f74B3a33' // ChildChainGaugeRewardHelper
            }
          },
          rewardDistributor: '0x15308f419f141baf659160ADAC3255bff7f6B8C5' // StraitsX XSGD rewards distributor
        },
        {
          assets: [tokens.EURS, tokens['bb-a-usd']],
          address: fxPools['LP_EURS_bb-a-usd'],
          poolId: poolIds['EURS_bb-a-usd']
        }
      ],
      disabled: [],
      hidden: [
        {
          assets: [tokens.DAI, tokens.USDC],
          address: fxPools.LP_DAI_USDC,
          poolId: poolIds.DAI_USDC
        },
        {
          assets: [tokens.EURS, tokens.USDC],
          address: fxPools.LP_EURS_USDC,
          poolId: poolIds.EURS_USDC
        }
      ],
      ['bb-a-usd']: {
        assets: [tokens['bb-a-USDC'], tokens['bb-a-DAI'], tokens['bb-a-USDT']],
        poolId: poolIds['bb-a-usd'],
        subPools: {
          [tokens['bb-a-USDC']]: {
            assets: [tokens['USDC']],
            poolId: poolIds['bb-a-USDC']
          },
          [tokens['bb-a-USDT']]: {
            assets: [tokens['USDT']],
            poolId: poolIds['bb-a-USDT']
          },
          [tokens['bb-a-DAI']]: {
            assets: [tokens['DAI']],
            poolId: poolIds['bb-a-DAI']
          }
        }
      }
    },
    // fxPoolFactory: '0x627D759314D5c4007b461A74eBaFA7EBC5dFeD71',
    // proportionalLiquidity: '0xe35A4e171F5568e8619DA1e097DAD18928187D85',
    assimilatorFactory: '0x9CB3961ec9E54563602d96D2b3332028aa54dd13',
    // swapLibrary: '0x6256447F6dAa532d5A650cFeAf305D2DD7Bd296E',
    // New deployment 03/21/23
    fxPoolFactory: '0x18bab048fd880d847b9b1dac5b110b6f98fd66c7',
    proportionalLiquidity: '0xdefcd9f506954b2faed53910e44b3af4c9de34d1',
    swapLibrary: '0x4ac6e38a5ee995706c898d7d8b201cb5c0346fa0',
    oracles: {
      USDC: '0xfE4A8cc5b5B2366C1B58Bea3858e81843581b2F7',
      fxPHP: '0x218231089Bebb2A31970c3b77E96eCfb3BA006D1',
      EURS: '0x73366Fe0AA0Ded304479862808e02506FE556a98',
      XSGD: '0x8CE3cAc0E6635ce04783709ca3CC4F5fc5304299',
      DAI: '0x4746DeC9e833A82EC7C2C1356372CcF2cfcD2F3D',
      USDT: '0x0A6513e40db6EB1b165753AD52E80663aeA50545',
      'bb-a-usd': '0x7111a302b929d14a323b489f234ef912903bf374'
    },
    assimilators: {
      'bb-a-usd_USD': '0x49dd29b8d2c7a979e0a406225fefc48bbfe3f4ce',
      'XSGD_bb-a-usd_USD': '0xebc71B12E5dE13Fdc01Aa83A19eCA6752647a7E6',
      'EURS_bb-a-usd_USD': '0x057b4e0f15b642494013984543872a801f99e3c3'
    },
    balancerProtocolFeeCollector: '0xce88686553686DA562CE7Cea497CE749DA109f9F',
    balancerMinter: '0x47b489bf5836f83abd928c316f8e39bc0587b020' // L2BalancerPseudoMinter
  },
  tokens,
  lendingMarket: {
    protocol: {
      lendingPoolAddressesProvider:
        '0x68aeB9C8775Cfc9b99753A1323D532556675c555',
      lendingPoolAddressesProviderRegistry:
        '0xd25792c918b38dEE6e7A96cB609718ce5F3E249c',
      reserveLogic: '0xA63d7B6d467E2Bf3337e651fD449c3E893E67BcF',
      genericLogic: '0xE3AA18f8E28efd1d99D34d30506e7e834704b1D0',
      validationLogic: '0x696D459Af5E0393bc9C264c2E728b6194B9C82CF',
      lendingPoolImpl: '0x404cbCb5343719A99778d8CB73221C454aF3eEEC',
      lendingPool: '0x78a5B2B028Fa6Fb0862b0961EB5131C95273763B',
      lendingPoolProxy: '0x78a5B2B028Fa6Fb0862b0961EB5131C95273763B',
      lendingPoolConfiguratorImpl: '0x5B48d6f407D6451DcCe127c91a62D459b09FAc41',
      lendingPoolConfigurator: '0x0228bda708F5BA3b188D9CC8588B7dA4E254D492',
      stableAndVariableTokensHelper:
        '0x7f526df41675Ba8BA52a9be858135b84C93008c0',
      aTokensAndRatesHelper: '0x856A694C4E6d894B591ce71409405801dc7E8F99',
      aaveOracle: '0x0200889C2733bB78641126DF27A0103230452b62',
      lendingRateOracle: '0x25290edB1633c6b60a24C5FB3a321b91a67Cafe7',
      aaveProtocolDataProvider: '0xdad05Ad0CbB286B6d5B4fCd6DACC1c952869CdBB',
      stableDebtToken: '0x1acCEADC96017815328ebc57f0d0D8E27775851b',
      variableDebtToken: '0x56fA8ED3d0411A88629b83C2C1D95792328FD79A',
      aToken: '0x0beBf7C0504cf3eCE4c7f1a4AB70F4Ccc34Cbdb1',
      defaultReserveInterestRateStrategy:
        '0x03199D8D9AEBa9844A4c12D9d4a6FAd6c2B3675e',
      wethGateway: '0x2Ef9AB2ce7Bd97b1e893583ba91aCA6A883dF0F2',
      lendingPoolCollateralManager:
        '0xDF512Eb2468D4938D81fA1F15d91567c5EdEe6a8',
      walletBalanceProvider: '0x68D2eEe46Cb758B90BbCA985C95d1f7f8508eCd3',
      rnbwIncentivesController: '0x19EEF75223F5E191D1022a11dAf7f9c29e9473f3',
      treasury: '0x5560659d9a4aB330dE2112fc8Ee0989857197728',
      uiIncentiveDataProvider: '0x63848b3d2340796B0E81F5daeF688f73Ca06e537',
      uiHaloPoolDataProvider: '0x755E39Ba1a425548fF8990A5c223C34C5ce5f8a5'
    },
    lpAssets: {
      LP_XSGD_USDC: fxPools.LP_XSGD_USDC
    },
    priceOracles: {
      LP_XSGD_USDC: '0xbca5c841eC9cC6Bd54ee18450eAe3B4D7b68146b'
    },
    hTokens: {
      LP_XSGD_USDC: '0xF2505AA3efAd1Fef6c36464329b50652ABC7e385',
      USDC: '0x2eB4157CeFeb13C6E38035A11244E19BC396e97C'
    },
    variableDebtTokens: {
      USDC: '0x4870f9c3676FD543AfEe6630B5f923c28e38Ad9f'
    },
    wrappedNativeToken: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270'
  },
  strats: [
    {
      shortName: 'XSGD Thetanuts',
      fullName: 'XSGD-USDC-indexUSDC',
      address: '0x86C6A426508999C58fBc1aCA2bc244e08E7F4Ec6',
      pool: {
        address: fxPools.LP_XSGD_USDC,
        poolId: poolIds.XSGD_USDC,
        assets: [tokens.XSGD, tokens.USDC]
      }
    },
    {
      shortName: 'USDC Lending',
      fullName: 'USDC',
      address: ZERO_ADDRESS,
      USDC: tokens.USDC
    }
    // {
    //   shortName: 'XSGD BAL Rewards',
    //   fullName: 'XSGD-USDC-BAL',
    //   address: '0x6d5040f703c82c6357701934baf9fdfc9409a972',
    //   pool: {
    //     address: fxPools.LP_XSGD_USDC,
    //     poolId: poolIds.XSGD_USDC,
    //     assets: [tokens.XSGD, tokens.USDC]
    //   }
    // }
  ]
}

export default addresses
