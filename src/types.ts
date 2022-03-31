type Pool = {
  address: string
  poolId: string
  assets: string[]
}

type ReserveData = {
  underlyingAsset: string
  haloPriceOracle: string
  aTokenImpl: string
  stableDebtTokenImpl: string
  variableDebtTokenImpl: string
  interestRateStrategyAddress: string
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
  }
  lendingMarket?: {
    protocol: {
      lendingPoolAddressesProvider: string
      lendingPoolAddressesProviderRegistry: string
      reserveLogic: string
      genericLogic: string
      validationLogic: string
      lendingPoolImpl: string
      lendingPool: string
      lendingPoolConfiguratorImpl: string
      lendingPoolConfigurator: string
      stableAndVariableTokensHelper: string
      aTokensAndRatesHelper: string
      priceOracle?: string
      aaveOracle: string
      lendingRateOracle: string
      aaveProtocolDataProvider: string
      stableDebtToken: string
      variableDebtToken: string
      aToken: string
      aTokenImpl?: string
      defaultReserveInterestRateStrategy: string
      rateStrategyAave?: string
      rateStrategyStableOne?: string
      rateStrategyStableTwo: string
      rateStrategyStableThree: string
      rateStrategyVolatileTwo: string
      rateStrategyWeth: string
      wethGateway: string
      lendingPoolCollateralManagerImpl: string
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
    reserves: {
      fxPHP?: ReserveData,
      HLP_EURS_USDC?: ReserveData,
      XSGD?: ReserveData,
    }
  }
}
