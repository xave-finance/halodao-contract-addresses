import { AddressCollection, ZERO_ADDRESS } from './types'

const tokens = {
  BAL: '0x8239A6b877804206C7799028232A7188DA487CeC',
  USDC: '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E',
  EUROC: '0xC891EB4cbdEFf6e073e859e987815Ed1505c2ACD'
}

const fxPools = {
  LP_EUROC_USDC: ZERO_ADDRESS // @todo: update once fxpool is deployed
}

const poolIds = {
  EUROC_USDC: ZERO_ADDRESS // @todo: update once fxpool is deployed
}

const addresses: AddressCollection = {
  protocol: {
    XAV: ZERO_ADDRESS,
    RNBW: ZERO_ADDRESS,
    xRNBW: ZERO_ADDRESS
  },
  rewards: {
    ammRewards: ZERO_ADDRESS,
    rewardsManager: ZERO_ADDRESS,
    epochManager: ZERO_ADDRESS
  },
  ammV2: {
    vault: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
    pools: {
      all: fxPools,
      genesis: [],
      enabled: [
        {
          assets: [tokens.EUROC, tokens.USDC],
          address: fxPools.LP_EUROC_USDC,
          poolId: poolIds.EUROC_USDC
        }
      ],
      disabled: [],
      hidden: []
    },
    fxPoolFactory: ZERO_ADDRESS, // @todo: update once fxpool is deployed
    proportionalLiquidity: ZERO_ADDRESS, // @todo: update once fxpool is deployed
    assimilatorFactory: ZERO_ADDRESS, // @todo: update once fxpool is deployed
    swapLibrary: ZERO_ADDRESS, // @todo: update once fxpool is deployed
    oracles: {
      USDC: '0xF096872672F44d6EBA71458D74fe67F9a77a23B9', // Chainklink official USDC/USD oracle
      EUROC: '0x192f2DBA961Bb0277520C082d6bfa87D5961333E' // Chainklink official EUR/USD oracle
    },
    assimilators: {
      USDC_USD: ZERO_ADDRESS, // @todo: update once fxpool is deployed
      EUROC_USD: ZERO_ADDRESS // @todo: update once fxpool is deployed
    },
    balancerProtocolFeeCollector: '0xce88686553686DA562CE7Cea497CE749DA109f9F',
    balancerMinter: '0xEa924b45a3fcDAAdf4E5cFB1665823B8F8F2039B' // L2BalancerPseudoMinter
  },
  tokens
}

export default addresses
