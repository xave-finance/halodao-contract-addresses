import { AddressCollection, ZERO_ADDRESS } from './types'

const tokens = {
  BAL: '0x8239A6b877804206C7799028232A7188DA487CeC',
  USDC: '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E',
  EUROC: '0xC891EB4cbdEFf6e073e859e987815Ed1505c2ACD',
  VCHF: '0x228a48df6819CCc2eCa01e2192ebAFfFdAD56c19',
  VEUR: '0x7678e162f38ec9ef2Bfd1d0aAF9fd93355E5Fa0b'
}

const fxPools = {
  LP_EUROC_USDC: '0x55bEC22f8f6C69137cEAf284d9B441Db1B9bFedc',
  LP_VEUR_USDC: '0xAd0e5e0778cAC28f1ff459602b31351871B5754a'
}

const poolIds = {
  EUROC_USDC:
    '0x55bec22f8f6c69137ceaf284d9b441db1b9bfedc000200000000000000000011',
  VEUR_USDC:
    '0xad0e5e0778cac28f1ff459602b31351871b5754a000200000000000000000029'
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
          poolId: poolIds.EUROC_USDC,
          gauges: {
            main: ZERO_ADDRESS, // there won't be a mainnet root gauge for a while
            child: '0x0c22Ff3f93B5c9f13e41FA9D270680E97AC13B28' // ChildLiquidityGauge
          }
        },
        {
          assets: [tokens.VEUR, tokens.USDC],
          address: fxPools.LP_VEUR_USDC,
          poolId: poolIds.VEUR_USDC
        }
      ],
      disabled: [],
      hidden: []
    },
    fxPoolFactory: '0x81fE9e5B28dA92aE949b705DfDB225f7a7cc5134',
    proportionalLiquidity: '0xB741984C8ce63F4cbD923842Ee0B9e32Dd9df48c',
    assimilatorFactory: '0x5127fa6aEb261d519B9E843345265e2845dF449D',
    swapLibrary: '0x390Bcd94446fcC6DA992995c66b58e3A7a7b279C',
    oracles: {
      USDC: '0xF096872672F44d6EBA71458D74fe67F9a77a23B9', // Chainklink official USDC/USD oracle
      EUROC: '0x192f2DBA961Bb0277520C082d6bfa87D5961333E', // Chainklink official EUR/USD oracle
      VCHF: '0x3B37950485b450edF90cBB85d0cD27308Af4AB9A', // Chainklink official VCHF/USD oracle (tobe depricated on 09/08/23)
      VEUR: '0x192f2DBA961Bb0277520C082d6bfa87D5961333E' // Chainklink official EUR/USD oracle
    },
    assimilators: {
      USDC_USD: '0x21720736Ada52d8887aFAC20B05f02005fD6f272',
      EUROC_USD: '0xb803906e5B39F8FA31c6bA2105925c5FA17beb54',
      VEUR_USD: '0x4cda5bDe8E78aBd4A53Fe6C1568C5C18d2D0f73E'
    },
    balancerProtocolFeeCollector: '0xce88686553686DA562CE7Cea497CE749DA109f9F',
    balancerMinter: '0x85a80afee867aDf27B50BdB7b76DA70f1E853062' // L2BalancerPseudoMinter
  },
  tokens
}

export default addresses
