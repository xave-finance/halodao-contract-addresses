export type AddressCollection = {
  protocol: {
    RNBW: string
    xRNBW: string
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
      curves?: string,
      orchestrator?: string,
      proportionalLiquidity?: string,
      swaps?: string,
      viewLiquidity?: string
    },
    curves: {
      enabled: string[]
      disabled: string[]
    }
  }
  ammV2: {
    vault: string
    pools: {
      enabled: string[]
      disabled: string[]
    }
  }
  tokens: {
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
}
