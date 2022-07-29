type Pool = {
  address: string
  poolId: string
  assets: string[]
}

type Assimilators = {
  USDC_USD?: string
  XSGD_USD?: string
  fxPHP_USD?: string
  tagPHP_USD?: string
  XIDR_USD?: string
  fxAUD_USD?: string
  EURS_USD?: string
  UST_USD?: string
  CHF_USD?: string
  GBP_USD?: string
  TUSD_USD?: string
  TCAD_USD?: string
  TGBP_USD?: string
  TAUD_USD?: string
}

export type AddressCollection = {
  protocol: {
    XAV: string
    RNBW: string
    xRNBW: string
    LPOP?: string
    xLPOP?: string
  }
  rewards: {
    ammRewards: string
    rewardsManager?: string
    epochManager?: string
  }
  ammV1?: {
    factory: string
    router: string
    zap: string
    libraries?: {
      curves: string
      orchestrator: string
      proportionalLiquidity: string
      swaps: string
      viewLiquidity: string
    }
    curves: {
      all: {
        HLP_CHF_USDC?: string
        HLP_EURS_USDC?: string
        HLP_GBP_USDC?: string
        HLP_WETH_USDC?: string
        HLP_XIDR_USDC?: string
        HLP_XSGD_USDC?: string
        HLP_TCAD_USDC?: string
        HLP_TGBP_USDC?: string
        HLP_UST_USDC?: string
        HLP_TAUD_USDC?: string
        HLP_fxPHP_USDC?: string
        HLP_tagPHP_USDC?: string
        HLP_LPHP_USDC?: string
        HLP_fxAUD_USDC?: string
      }
      enabled: string[]
      disabled: string[]
    }
    assimilators?: Assimilators
  }
  ammV2: {
    vault: string
    pools: {
      genesis: Pool[]
      enabled: Pool[]
      disabled: Pool[]
    }
    fxPoolFactory: string
    proportionalLiquidity: string
    assimilatorFactory: string
    swapLibrary: string
    assimilators?: Assimilators
    oracles: {
      USDC?: string
      fxPHP?: string
      XSGD?: string
      EURS?: string
      CHF?: string
    }
  }
  tokens: {
    AMPL?: string
    wETH?: string
    wBTC?: string
    USDC?: string
    EURS?: string
    XSGD?: string
    XIDR?: string
    TCAD?: string
    TAUD?: string
    TGBP?: string
    fxPHP?: string
    fxAUD?: string
    UST?: string
    CHF?: string
    indexUSDC?: string
    fakeUSDC?: string
    fakeFxPHP?: string
    fakeXSGD?: string
    fakeEURS?: string
  }
  lendingMarket?: {
    protocol: {
      lendingPoolAddressesProvider: string
      lendingPoolAddressesProviderRegistry: string
      reserveLogic: string
      genericLogic: string
      validationLogic: string
      lendingPoolImpl?: string
      lendingPool: string
      lendingPoolConfiguratorImpl: string
      lendingPoolConfigurator: string
      lendingPoolProxy: string
      stableAndVariableTokensHelper: string
      aTokensAndRatesHelper: string
      aaveOracle: string
      lendingRateOracle: string
      aaveProtocolDataProvider: string
      stableDebtToken: string
      variableDebtToken: string
      aToken: string
      defaultReserveInterestRateStrategy: string
      wethGateway: string
      lendingPoolCollateralManager: string
      walletBalanceProvider: string
      rnbwIncentivesController: string
      treasury: string
      uiIncentiveDataProvider: string
      uiHaloPoolDataProvider: string
      mockAggregator?: string
      wethMocked?: string
      mockFlashLoanReceiver?: string
    }
    lpAssets: {
      HLP_XSGD_USDC?: string
      HLP_UST_USDC?: string
      HLP_CHF_USDC?: string
      HLP_GBP_USDC?: string
      LP_XSGD_USDC?: string
      LP_FXPHP_USDC?: string
    }
    priceOracles: {
      AMPL?: string
      fxPHP?: string
      XSGD?: string
      UST?: string
      CHF?: string
      RNBW?: string
      xRNBW?: string
      USDC?: string
      USDT?: string
      HLP_PHP_USD?: string
      HLP_XSGD_USDC?: string
      HLP_UST_USDC?: string
      HLP_CHF_USDC?: string
      HLP_GBP_USDC?: string
      LP_XSGD_USDC?: string
      LP_FXPHP_USDC?: string
    }
    hTokens?: {
      HLP_XSGD_USDC?: string
      USDC?: string
    }
    variableDebtTokens?: {
      USDC?: string
    }
    fixedDebtTokens?: {
      USDC?: string
    }
    wrappedNativeToken?: string
  }
  strats?: {
    shortName: string
    fullName: string
    address: string
    pool?: Pool
    USDC?: string
  }[]
}

export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'
