type Pool = {
  address: string
  poolId: string
  assets: string[]
}

export type AddressCollection = {
  protocol: {
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
      enabled: string[]
      disabled: string[]
    },
    assimilators?: {
      usdToUsdcAssimilator?: string
    }
  }
  ammV2: {
    vault: string
    pools: {
      genesis: Pool[]
      enabled: Pool[]
      disabled: Pool[]
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
    },
    lpAssets: {
      HLP_XSGD_USDC?: string
      HLP_UST_USDC?: string
      HLP_CHF_USDC?: string
      HLP_GBP_USDC?: string
    }
    priceOracles: {
      AMPL?: string
      fxPHP?: string
      XSGD?: string
      UST?: string
      CHF?: string
      HLP_PHP_USD?: string
      HLP_XSGD_USDC?: string
      HLP_UST_USDC?: string
      HLP_CHF_USDC?: string
      HLP_GBP_USDC?: string
    }
  }
}
