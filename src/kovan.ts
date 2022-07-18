import { AddressCollection } from './types'

const tokens = {
  CHF: '0xE9958574866587c391735b7e7CE0D79432d3b9d0',
  EURS: '0xaA64D57E3c781bcFB2e8B1e1C9936C302Db84bCE',
  fxPHP: '0x07bAB1e2D6DCb965d250F376B811ab8c2373AAE0',
  USDC: '0x7e6F38922B59545bB5A6dc3A71039b85dFB1B7cE',
  WBTC: '0x41dE675d148f6acC84E5e88A9515Db0889519d1D',
  WETH: '0x9b1FeAAd523A4f6BA73215C103208907938EA7F1',
  XSGD: '0x4DCE1178D2A368397c09fc6C63e2f82F00a2Ca09',
  indexUSDC: '0x29ad0599a113a11bEfb9cd47fC4BA76AA8606680'
}

const curves = {
  HLP_XSGD_USDC: '0x7Fb6Ac9B01dDbAb407f19c23370639913c741c81',
  HLP_EURS_USDC: '0xB8D93735647453a6138FC6449922A442f2Fd068B',
  HLP_CHF_USDC: '0x35Eeaf4243AdB81C421c18FfA19fd8A0f3B7F252',
  HLP_CHF_USDC_inactive: '0x02e673e79cE5122a3B83Afa9964637C259cb090F',
  HLP_GBP_USDC_inactive: '0x7169866E13F58E045D77D5bE3d79ad8cCADC0fbF'
}

const addresses: AddressCollection = {
  protocol: {
    XAV: '0xDdD46A4966a2197396BeFdF1d922569bf5F3163b',
    RNBW: '0x16D185d025bF592114D1A68f83085F36159f6CdA',
    xRNBW: '0xbcbfEac78133D1efe71Ba16D4F4221b9AD4bAd01'
  },
  rewards: {
    ammRewards: '0xdCE943BeF9bF1E9F8B6f8a8Eb093dceF46a489eD',
    rewardsManager: '0x3B25a58Ca40c93F690388126478cc0F58E42Bd3C'
  },
  ammV1: {
    factory: '0x61Ed43d57a03e1184735A274aF75748255E41963',
    router: '0xAfD5DB2333978033F280d535012274Ec4598FB2b',
    zap: '0x7F1A07fd07261BF1Ad778c88eA732273EC85940b',
    curves: {
      all: curves,
      enabled: [
        curves.HLP_XSGD_USDC,
        curves.HLP_EURS_USDC,
        curves.HLP_CHF_USDC
      ],
      disabled: []
    },
    assimilators: {
      usdcToUsdAssimilator: '0x8ce04DF75775afAfe67A4F0860b0aFE67292277d',
      xsgdToUsdAssimilator: '0x66D0aA383333e53cfA9dE70f78eea7Ca7bfEEc22'
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
          address: '0x7e3771D33E3731F790e6FCd8ca0a14B08d44a98d',
          poolId:
            '0x7e3771d33e3731f790e6fcd8ca0a14b08d44a98d0002000000000000000008fd'
        },
        {
          assets: [tokens.EURS, tokens.USDC],
          address: '0xd98F5042648f304a150f4f9D054516e9125C8088',
          poolId:
            '0xd98f5042648f304a150f4f9d054516e9125c80880002000000000000000008fe'
        },
        {
          assets: [tokens.CHF, tokens.USDC],
          address: '0xAa33da6719A7F9181BEEb20a27f4464DF461E7e4',
          poolId:
            '0xaa33da6719a7f9181beeb20a27f4464df461e7e400020000000000000000096d'
        }
      ],
      disabled: []
    },
    proportionalLiquidity: '0x000f891aD773aBE5548446b4528161563113566a',
    assimilatorFactory: '0x5fF15655C1E9de73eA63465F2BCA0D1636318240',
    swapLibrary: '0xc9A5DA4a6BD896dee1eaB92C75C41101e835dF2A',
    oracles: {
      USDC: '0x9211c6b3BF41A10F78539810Cf5c64e1BB78Ec60',
      fxPHP: '0x84fdC8dD500F29902C99c928AF2A91970E7432b6',
      XSGD: '0xa5FC4B3757Ce2533087de51752D12d908E48FEEF', // Mock
      EURS: '0x0c15Ab9A0DB086e062194c273CC79f41597Bbf13',
      CHF: '0xed0616BeF04D374969f302a34AE4A63882490A8C'
    }
  },
  tokens,
  lendingMarket: {
    protocol: {
      lendingPoolAddressesProvider:
        '0x737a452ec095D0fd6740E0190670847841cE7F93',
      lendingPoolAddressesProviderRegistry:
        '0x2Ef9AB2ce7Bd97b1e893583ba91aCA6A883dF0F2',
      reserveLogic: '0x19EEF75223F5E191D1022a11dAf7f9c29e9473f3',
      genericLogic: '0x5BE30F3731a18F5288C078D28a6454b8bC5C73bc',
      validationLogic: '0xF3771CBeCBC82064f638B0B6eEA2d0e73532Aa37',
      lendingPoolImpl: '0xcD7DDEB96da083CCaEF56e3Ff672C59D84c651e9',
      lendingPool: '0xc336fa438c51862395b82bcCA809dB0257bCa968',
      lendingPoolConfiguratorImpl: '0xa70c722ACf41a99e8e97f76CEdBb3E907712028d',
      lendingPoolConfigurator: '0x2a048cA932F0e915fec301Dcc9E87a9ECb6df1C9',
      lendingPoolProxy: '0xc336fa438c51862395b82bcCA809dB0257bCa968',
      stableAndVariableTokensHelper:
        '0xD103fdC482401F1d687caBA784d02Ee48a170D56',
      aTokensAndRatesHelper: '0x1a7Ec858A6c1119BdB5a501A31F7F05b40673CD4',
      aaveOracle: '0x2A26137812Ce58488EBc5cB372273Aa43Dc01351',
      lendingRateOracle: '0x49329490953ecAa2418b5b717ebD6E47Ef140dE4',
      aaveProtocolDataProvider: '0x3d7743822dcf6477F7F6d578CaE19FA78193B8Ba',
      stableDebtToken: '0xcCC6936d4401D06f297DabDD120ae297669F0173',
      variableDebtToken: '0x60b08B0b202c07B252dA9c56896f8d532F976de5',
      aToken: '0xd8E6eFcCC3bFDE7FCD8Ec600A9c5C0C1036259F3',
      defaultReserveInterestRateStrategy:
        '0xdE96293F0f911c23eC7f62E2950CE569cfd8EA15',
      wethGateway: '0x6C07F2741D7C143E4e96eB4EA7aDcc1571bE8bEf',
      lendingPoolCollateralManager:
        '0xd90a9877401914091287CF6CEEe5E2876cD78Df7',
      walletBalanceProvider: '0xB5bf2f1386f549524b7Fa8E136c3cb52ceCb8a3F',
      rnbwIncentivesController: '0xAe8F4476073ea67c964F92E90cdEfd7C662181Dd',
      treasury: '0x7A949bdcd4A4d0af5b609257Cd9d4FB36cFC759d',
      uiIncentiveDataProvider: '0x9f6C49dE070293C7165F65394480Ce5486057645',
      uiHaloPoolDataProvider: '0x6Af1ffC2F20e54CDED0549CEde1ba6269A615717'
    },
    lpAssets: {
      HLP_CHF_USDC: curves.HLP_CHF_USDC_inactive,
      HLP_GBP_USDC: curves.HLP_GBP_USDC_inactive,
      HLP_XSGD_USDC: curves.HLP_XSGD_USDC
    },
    priceOracles: {
      USDC: '0x64EaC61A2DFda2c3Fa04eED49AA33D021AeC8838',
      fxPHP: '0xa627c5e513b0B364e45AFfdb8647E1C65A416eB8',
      CHF: '0xa627c5e513b0B364e45AFfdb8647E1C65A416eB8',
      RNBW: '0xa627c5e513b0B364e45AFfdb8647E1C65A416eB8',
      xRNBW: '0xa627c5e513b0B364e45AFfdb8647E1C65A416eB8',
      HLP_PHP_USD: '0x8B48390E9566F056EbC028BA4803E1E3a3021410',
      HLP_CHF_USDC: '0x8B48390E9566F056EbC028BA4803E1E3a3021410',
      HLP_GBP_USDC: '0x8B48390E9566F056EbC028BA4803E1E3a3021410',
      HLP_XSGD_USDC: '0x89e0983094c0659CF60F6627273DfD40817b8e4E'
    },
    hTokens: {
      HLP_XSGD_USDC: '0xad7b437eB7D1CD9a2fFcc009c34E9ed5A4Cf0A22'
    },
    variableDebtTokens: {
      USDC: '0xC99AD035150433B35AeDdB4adf983CaB6675AF5f'
    }
  },
  strats: [
    {
      shortName: 'xSGD Thetanuts',
      fullName: 'xSGD-USDC-indexUSDC',
      address: '0x111E7965c95ca95A7EeED4993d3b88aA64fe5a7b',
      pool: {
        address: curves.HLP_XSGD_USDC,
        poolId: "",
        assets: [
          tokens.XSGD,
          tokens.USDC
        ]
      }
    }
  ]
}

export default addresses
