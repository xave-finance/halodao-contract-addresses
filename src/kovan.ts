import { AddressCollection } from './types'

const tokens = {
  CHF: '0xE9958574866587c391735b7e7CE0D79432d3b9d0',
  EURS: '0xaA64D57E3c781bcFB2e8B1e1C9936C302Db84bCE',
  fxPHP: '0x07bAB1e2D6DCb965d250F376B811ab8c2373AAE0',
  USDC: '0x7e6F38922B59545bB5A6dc3A71039b85dFB1B7cE',
  WBTC: '0x41dE675d148f6acC84E5e88A9515Db0889519d1D',
  WETH: '0x9b1FeAAd523A4f6BA73215C103208907938EA7F1',
  XSGD: '0x4DCE1178D2A368397c09fc6C63e2f82F00a2Ca09',
}

const curves = {
    HLP_CHF_USDC: '0x02e673e79cE5122a3B83Afa9964637C259cb090F',
    HLP_EURS_USDC: '0xEb06cF1cD90d75eC6d10bbdc43B555483674F6ff',
    HLP_GBP_USDC: '0x7169866E13F58E045D77D5bE3d79ad8cCADC0fbF',
    HLP_WETH_USDC: '0x184B1a8985316Ca061cC1e043Ec1C666f4A73A18',
    HLP_XIDR_USDC: '0xEe1ab46877d1DeFE18bAfC749F32919dF6928a16'
}

const addresses: AddressCollection = {
  protocol: {
    RNBW: '0x16D185d025bF592114D1A68f83085F36159f6CdA',
    xRNBW: '0xbcbfEac78133D1efe71Ba16D4F4221b9AD4bAd01'
  },
  rewards: {
    ammRewards: '0xdCE943BeF9bF1E9F8B6f8a8Eb093dceF46a489eD',
    rewardsManager: '0x3B25a58Ca40c93F690388126478cc0F58E42Bd3C'
  },
  ammV1: {
    factory: '',
    router: '0xa02dCeB15cc32249beC33C2808b4799a44F8B0D5',
    zap: '0xf3429A0cC9Ed42929ac7Bae8D1B2ED42F0325C11',
    curves: {
      enabled: [
        curves.HLP_EURS_USDC, // EURS:USDC
        curves.HLP_CHF_USDC, // CHF:USDC
        curves.HLP_GBP_USDC, // GBP:USDC
        curves.HLP_WETH_USDC, // WETH:USDC
        curves.HLP_XIDR_USDC // XIDR:USDC
      ],
      disabled: []
    }
  },
  ammV2: {
    vault: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
    pools: {
      genesis: [
        {
          assets: [tokens.WETH, tokens.USDC],
          address: '0xe18054c51d10b6162012e8989101e9d762586cac',
          poolId:
            '0x3c13bc30b8e878c53fd2a36b679409c073afd75950be43d8858768e956fbc20e'
        },
        {
          assets: [tokens.WBTC, tokens.USDC],
          address: '0x21ee3b7b61ac1b2bf5b94f2706ab777e51b3dc56',
          poolId:
            '0x3c13bc30b8e878c53fd2a36b679409c073afd75950be43d8858768e956fbc20e'
        }
      ],
      enabled: [
        {
          assets: [tokens.fxPHP, tokens.USDC],
          address: '0xca9eC9CF8cBCF7DB2a2d08e43B176bA8d92e381C',
          poolId:
            '0xca9ec9cf8cbcf7db2a2d08e43b176ba8d92e381c00010000000000000000071e'
        },
        {
          assets: [tokens.XSGD, tokens.USDC],
          address: '0x979fc3D80D11D0b58d0E1FFE6a4463cBB813761c',
          poolId:
            '0x979fc3d80d11d0b58d0e1ffe6a4463cbb813761c00010000000000000000071f'
        },
        {
          assets: [tokens.EURS, tokens.USDC],
          address: '0x0A7900dDe4cA3211D3367Cfad739E91b49F46402',
          poolId:
            '0x0a7900dde4ca3211d3367cfad739e91b49f46402000100000000000000000720'
        }
      ],
      disabled: []
    }
  },
  tokens,
  lendingMarket: {
    protocol: {
      lendingPoolAddressesProvider: '0x737a452ec095D0fd6740E0190670847841cE7F93',
      lendingPoolAddressesProviderRegistry: '0x2Ef9AB2ce7Bd97b1e893583ba91aCA6A883dF0F2',
      reserveLogic: '0x19EEF75223F5E191D1022a11dAf7f9c29e9473f3',
      genericLogic: '0x5BE30F3731a18F5288C078D28a6454b8bC5C73bc',
      validationLogic: '0xF3771CBeCBC82064f638B0B6eEA2d0e73532Aa37',
      lendingPoolImpl: '0xcD7DDEB96da083CCaEF56e3Ff672C59D84c651e9',
      lendingPool: '0xc336fa438c51862395b82bcCA809dB0257bCa968',
      lendingPoolConfiguratorImpl: '0xa70c722ACf41a99e8e97f76CEdBb3E907712028d',
      lendingPoolConfigurator: '0x2a048cA932F0e915fec301Dcc9E87a9ECb6df1C9',
      stableAndVariableTokensHelper: '0xD103fdC482401F1d687caBA784d02Ee48a170D56',
      aTokensAndRatesHelper: '0x1a7Ec858A6c1119BdB5a501A31F7F05b40673CD4',
      aaveOracle: '0x2A26137812Ce58488EBc5cB372273Aa43Dc01351',
      lendingRateOracle: '0x49329490953ecAa2418b5b717ebD6E47Ef140dE4',
      aaveProtocolDataProvider: '0x3d7743822dcf6477F7F6d578CaE19FA78193B8Ba',
      stableDebtToken: '0xcCC6936d4401D06f297DabDD120ae297669F0173',
      variableDebtToken: '0x60b08B0b202c07B252dA9c56896f8d532F976de5',
      aToken: '0xd8E6eFcCC3bFDE7FCD8Ec600A9c5C0C1036259F3',
      defaultReserveInterestRateStrategy: '0xdE96293F0f911c23eC7f62E2950CE569cfd8EA15',
      wethGateway: '0x6C07F2741D7C143E4e96eB4EA7aDcc1571bE8bEf',
      lendingPoolCollateralManager: '0xd90a9877401914091287CF6CEEe5E2876cD78Df7',
      walletBalanceProvider: '0xB5bf2f1386f549524b7Fa8E136c3cb52ceCb8a3F',
      rnbwIncentivesController: '0xAe8F4476073ea67c964F92E90cdEfd7C662181Dd',
      treasury: '0x7A949bdcd4A4d0af5b609257Cd9d4FB36cFC759d',
      uiIncentiveDataProvider: '0x9f6C49dE070293C7165F65394480Ce5486057645',
      uiHaloPoolDataProvider: '0x6Af1ffC2F20e54CDED0549CEde1ba6269A615717'
    },
    lpAssets: {
      HLP_CHF_USDC: curves.HLP_CHF_USDC,
      HLP_GBP_USDC: curves.HLP_GBP_USDC,
    },
    priceOracles: {
      fxPHP: '0xa627c5e513b0B364e45AFfdb8647E1C65A416eB8',
      CHF: '0xa627c5e513b0B364e45AFfdb8647E1C65A416eB8',
      RNBW: '0xa627c5e513b0B364e45AFfdb8647E1C65A416eB8',
      xRNBW: '0xa627c5e513b0B364e45AFfdb8647E1C65A416eB8',
      HLP_PHP_USD: '0x8B48390E9566F056EbC028BA4803E1E3a3021410',
      HLP_CHF_USDC: '0x8B48390E9566F056EbC028BA4803E1E3a3021410',
      HLP_GBP_USDC: '0x8B48390E9566F056EbC028BA4803E1E3a3021410',
    }
  }
}

export default addresses
