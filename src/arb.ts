import { AddressCollection, ZERO_ADDRESS } from './types'

const tokens = {
  USDC: '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8',
  fxPHP: '0x3d147cD9aC957B2a5F968dE9d1c6B9d0872286a0',
  EURS: '0xD22a58f79e9481D1a88e00c343885A588b34b68B',
  fakeUSDC: '0x9cFf4A10b6Fb163a4DF369AaFed9d95838222ca6', // fake mintable token
  fakeFxPHP: '0x03612728266b82EF5dB751fbf15ea7F1370502eE', // fake mintable token
  fakeXSGD: '0x6d934DcbA7F8e89713b4334147c03e76f30CE094', // fake mintable token
  fakeEURS: '0xe42827D98C053b6e9c97E39BE8b611102E8c1805' // fake mintable token
}

const curves = {
  HLP_fxPHP_USDC: '0x90B48Bb20048786b167473dfEeC443142D043CF7',
  HLP_fxAUD_USDC: '0xD5AD9eed5c5f28D83933779CD7E677e112991f51',
  HLP_fxPHP_USDC_inactive: '0xF5bD24215Fc8581Eb1429bFbf28174F76f740314'
}

const addresses: AddressCollection = {
  protocol: {
    XAV: ZERO_ADDRESS,
    RNBW: '0xA4b7999A1456A481FB0F2fa7E431b9B641A00770',
    xRNBW: '0x323C11843DEaEa9f13126FE33B86f6C5086DE138'
  },
  rewards: {
    ammRewards: '0x254e3D5F964E770F3a51a19d809bcE36308d797d'
  },
  ammV1: {
    factory: '0x972127aFf8e6464e50eFc0a2aD344063355AE424',
    router: '0xDFEa5ECCbB7D61D49dFa702ed8FeC4EC48944719',
    zap: '0x79DD0b8b83C4FB4f66e90F33139b002eb2b268f3',
    curves: {
      all: curves,
      enabled: [curves.HLP_fxPHP_USDC, curves.HLP_fxAUD_USDC],
      disabled: [curves.HLP_fxPHP_USDC_inactive]
    }
  },
  ammV2: {
    vault: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
    pools: {
      genesis: [],
      enabled: [
        {
          assets: [tokens.fakeFxPHP, tokens.fakeUSDC],
          address: '0x540C3126DF05CfB001eaEEBB08D1659439d02a95',
          poolId:
            '0x540c3126df05cfb001eaeebb08d1659439d02a9500020000000000000000007d'
        },
        {
          assets: [tokens.fakeXSGD, tokens.fakeUSDC],
          address: '0x8e13Acc4780f78d13E92a30b72DF526bE76561eF',
          poolId:
            '0x8e13acc4780f78d13e92a30b72df526be76561ef00020000000000000000007e'
        }
      ],
      disabled: []
    },
    fxPoolFactory: ZERO_ADDRESS,
    proportionalLiquidity: '0x3af74d19F50f24C75e4000Fe665d718387b1DA74',
    assimilatorFactory: '0xB474537769c335BC96cB86DeC70E6C7F36b39b1e',
    swapLibrary: '0xF82fd35163D1383e76ceD09c605DF5DB81439014',
    oracles: {
      USDC: '0x50834F3163758fcC1Df9973b6e91f0F0F0434aD3',
      fxPHP: '0xfF82AAF635645fD0bcc7b619C3F28004cDb58574',
      XSGD: '0xF0d38324d1F86a176aC727A4b0c43c9F9d9c5EB1',
      EURS: '0xA14d53bC1F1c0F31B4aA3BD109344E5009051a84'
    }
  },
  tokens,
  lendingMarket: {
    protocol: {
      lendingPoolAddressesProvider:
        '0x88B3E02accCCB8F23b5e3EA328B2Cae4c75A440b',
      lendingPoolAddressesProviderRegistry:
        '0x25623Ae6CfaaF1cEac5d31c5e591Dd9920281a11',
      reserveLogic: '0x0A240804EcE3455CF0E5193856c2fF26C74f1E4f',
      genericLogic: '0x1BD2520265a1B918f96062F6f6B15fA266899aaC',
      validationLogic: '0xC8353c90BBD6ff9cBf96967358194640A7c2297e',
      lendingPool: '0xF9D8493b5220797b6ba572ea34D4f1d3a852e879',
      lendingPoolConfiguratorImpl: '0xD0eAeA6fb295Ac74fb468eB0CA272C151fEBEbE7',
      lendingPoolConfigurator: '0xC2402DBc9a6d90607f35E9ccf673aD08dB3cAF2B',
      lendingPoolProxy: '0xF9D8493b5220797b6ba572ea34D4f1d3a852e879',
      stableAndVariableTokensHelper:
        '0xE060989A08742d89E1667D4ab657f1Df1909f105',
      aTokensAndRatesHelper: '0xc1821F00390DE698E5F3A481Aeb2d71FC4383058',
      aaveOracle: '0x3f178B0E885688645f219852Caa014f5c7027703',
      lendingRateOracle: '0xF8Ab9b85bdf19A707De091290aFBEa09b0c5D1f9',
      aaveProtocolDataProvider: '0x6d8A7285C8e07b240fC01151CF3C352263089aAc',
      stableDebtToken: '0x8B7807A3c390FA161b95BC20A8E2b37F2849fC40',
      variableDebtToken: '0x236BE7194e5F6338184caC50f2Ee3346A1608DA3',
      aToken: '0xF437444334f4080d94d7CA1609dC252A8574dB9D',
      defaultReserveInterestRateStrategy:
        '0x2825584BF76c0beEe595dC71d95B26C7e701FA18',
      wethGateway: '0x25472d7b299692F13EbF872EcF0Fe2BaBCbcB4cD',
      lendingPoolCollateralManager:
        '0x6601A3610c6262b14336E18198922d0b4b9624A3',
      walletBalanceProvider: '0xB217d73D760c5Cd92B013bA2BE4D447da795528f',
      rnbwIncentivesController: '0xA036734Aee3B5D906A25d6A2455E9CB0B7F9Df10',
      treasury: '0x19C96DbFfdFC2F6D5C30deF63F7D52234E516202',
      uiIncentiveDataProvider: '0xEb3e9cA197CA42478f7E92Cca4d081a64C091321',
      uiHaloPoolDataProvider: '0x0B6725D5c6888d23D9751F6AD3770AD566BA8910'
    },
    lpAssets: {},
    priceOracles: {
      USDC: '0x8AFAf5d086B5d97fC5045Bce452Ee1FA9adCC93e',
      USDT: '0x813abe589753c7dA64cC4EBEC638F6BeC530C12e'
    },
    hTokens: {},
    wrappedNativeToken: '0x82af49447d8a07e3bd95bd0d56f35241523fbab1'
  }
}

export default addresses
