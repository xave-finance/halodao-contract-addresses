type Pool = {
  address: string
  poolId: string
  assets: string[]
  gauges?: {
    main: string // LiquidityGauge (Mainnet) | PolygonRootGauge (Polygon)
    child?: string // ChildLiquidityGauge for L2s

    // deprecated as of June 2023 in favor of ChildLiquidityGauge (keeping it here for migration)
    l2?: {
      rewardsOnly: string // RewardsOnlyGauge
      rewardsHelper: string // ChildChainGaugeRewardHelper
    }
  }
  rewardDistributor?: string
}

type BoostedPool = {
  assets: string[]
  poolId: string
  subPools: {
    [asset: string]: {
      assets: string[]
      poolId: string
    }
  }
}

type Assimilators = {
  USDC_USD?: string
  XSGD_USD?: string
  fxPHP_USD?: string
  tagPHP_USD?: string
  PHPT_USD?: string
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
  EUROC_USD?: string
  VCHF_USD?: string
  BRLA_USD?: string
  VNXAU_USD?: string
  VEUR_USD?: string
  'bb-a-usd_USD'?: string
  'XSGD_bb-a-usd_USD'?: string
  'EURS_bb-a-usd_USD'?: string
  PHPX_USD?: string
  GBPT_USD?: string
}

export type AddressCollection = {
  ops: {
    multisig: string
    deployer: string
  }
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
      all: {
        LP_CHF_USDC?: string
        LP_EURS_USDC?: string
        LP_GBP_USDC?: string
        LP_WETH_USDC?: string
        LP_XIDR_USDC?: string
        LP_XSGD_USDC?: string
        LP_TCAD_USDC?: string
        LP_TGBP_USDC?: string
        LP_UST_USDC?: string
        LP_TAUD_USDC?: string
        LP_fxPHP_USDC?: string
        LP_tagPHP_USDC?: string
        LP_LPHP_USDC?: string
        LP_fxAUD_USDC?: string
        LP_EUROC_USDC?: string
        LP_VCHF_USDC?: string
        LP_BRLA_USDC?: string
        LP_VNXAU_USDC?: string
        LP_VEUR_USDC?: string
        'LP_XSGD_bb-a-usd'?: string
        'LP_EURS_bb-a-usd'?: string
        LP_PHPT_USDC?: string
        LP_PHPX_USDC?: string
        LP_GBPT_USDC?: string
        LP_EURS_USDC_INACTIVE?: string
        LP_GBPT_USDC_INACTIVE?: string
        LP_XSGD_USDC_INACTIVE?: string
        LP_BRLA_USDC_INACTIVE?: string
        LP_VCHF_USDC_INACTIVE?: string
        LP_VNXAU_USDC_INACTIVE?: string
        LP_EUROC_USDC_INACTIVE?: string
        LP_VEUR_USDC_INACTIVE?: string
      }
      allPoolIds: {
        EURS_USDC?: string
        GBPT_USDC?: string
        XSGD_USDC?: string
        BRLA_USDC?: string
        VCHF_USDC?: string
        VEUR_USDC?: string
        VNXAU_USDC?: string
        EUROC_USDC?: string
        EURS_USDC_INACTIVE?: string
        GBPT_USDC_INACTIVE?: string
        XSGD_USDC_INACTIVE?: string
        BRLA_USDC_INACTIVE?: string
        VCHF_USDC_INACTIVE?: string
        VEUR_USDC_INACTIVE?: string
        VNXAU_USDC_INACTIVE?: string
        EUROC_USDC_INACTIVE?: string
      }
      genesis: Pool[]
      enabled: Pool[]
      disabled: Pool[]
      hidden: Pool[]
      'bb-a-usd'?: BoostedPool
    }
    fxPoolFactory: string
    fxPoolDeployer: string
    fxPoolDeployerLib: string
    baseAssimilatorTemplate: string
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
      XIDR?: string
      DAI?: string
      USDT?: string
      EUROC?: string
      VCHF?: string
      BRLA?: string
      VNXAU?: string
      VEUR?: string
      GBPT?: string
      'bb-a-usd'?: string
      PHPT?: string
      PHPX?: string
      ZUSD?: string
      MYR?: string
      IDR?: string
      XAU?: string
      XAG?: string
      XPT?: string
      USD?: string
    }
    protocolFeesDistributor: string
    balancerProtocolFeeCollector: string
    balancerGaugeController?: string
    balancerTokenAdmin?: string
    balancerMinter?: string
    fxPoolMigrator?: string
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
    PHPT?: string
    PHPX?: string
    fxAUD?: string
    UST?: string
    CHF?: string
    DAI?: string
    USDT?: string
    BAL?: string
    EUROC?: string
    VCHF?: string
    BRLA?: string
    VNXAU?: string
    VEUR?: string
    'bb-a-usd'?: string
    'bb-a-USDC'?: string
    'bb-a-DAI'?: string
    'bb-a-USDT'?: string
    indexUSDC?: string
    fakeUSDC?: string
    fakeFxPHP?: string
    fakeXSGD?: string
    fakeEURS?: string
    balUSDC?: string
    balDAI?: string
    balUSDT?: string
    ZUSD?: string
    PAXG?: string
    USDP?: string
    PYUSD?: string
    TUSD?: string
    FRAX?: string
    LUSD?: string
    USDD?: string
    agEUR?: string
    PAR?: string
    CELO?: string
    BNB?: string
    LINK?: string
    WBTC?: string
    UNI?: string
    MKR?: string
    GRT?: string
    AAVE?: string
    SNX?: string
    FXS?: string
    WOO?: string
    AXL?: string
    '1INCH'?: string
    UMA?: string
    GMX?: string
    COMP?: string
    BAT?: string
    ZRX?: string
    ANKR?: string
    YFI?: string
    sAVAX?: string
    PENDLE?: string
    SUSHI?: string
    CTSI?: string
    BTC?: string
    ORBS?: string
    GYEN?: string
    FEI?: string
    stETH?: string
    TONCOIN?: string
    MATIC?: string
    SHIB?: string
    LEO?: string
    OKB?: string
    INJ?: string
    LDO?: string
    IMX?: string
    ARB?: string
    CRO?: string
    MNT?: string
    QNT?: string
    RNDR?: string
    rETH?: string
    SAND?: string
    TKX?: string
    APE?: string
    MANA?: string
    frxETH?: string
    Bonk?: string
    RPL?: string
    sfrxETH?: string
    CRV?: string
    NEXO?: string
    fxcbETH?: string
    GMT?: string
    TXAU?: string
    TXAG?: string
    TXPT?: string
    USDGLO?: string
    SBC?: string
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
      LP_EURS_USDC?: string
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
      LP_EURS_USDC?: string
    }
    hTokens?: {
      HLP_XSGD_USDC?: string
      USDC?: string
      LP_XSGD_USDC?: string
      LP_EURS_USDC?: string
      LP_DAI_USDC?: string
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
