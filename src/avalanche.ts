import { AddressCollection, ZERO_ADDRESS } from './types'

const tokens = {
  BAL: '0x8239A6b877804206C7799028232A7188DA487CeC',
  USDC: '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E',
  EUROC: '0xC891EB4cbdEFf6e073e859e987815Ed1505c2ACD',
  VCHF: '0x228a48df6819CCc2eCa01e2192ebAFfFdAD56c19',
  VEUR: '0x7678e162f38ec9ef2Bfd1d0aAF9fd93355E5Fa0b'
}

const fxPools = {
  LP_EUROC_USDC_INACTIVE: '0x55bEC22f8f6C69137cEAf284d9B441Db1B9bFedc',
  LP_VEUR_USDC_INACTIVE: '0xAd0e5e0778cAC28f1ff459602b31351871B5754a',
  LP_VCHF_USDC_INACTIVE: '0x66bB9D104c55861feb3Ec3559433F01f6373c966',
  LP_EUROC_USDC: '0x7A1A919c033eBc0d9F23cBF2Aa41c24AEf826ca2',
  LP_VEUR_USDC: '0xa759Ef6699A7a10DDC734e5Ba1957fB79D3D248C',
  LP_VCHF_USDC: '0x0099111Ed107BDF0B05162356aEe433514AaC440'
}

const poolIds = {
  EUROC_USDC_INACTIVE:
    '0x55bec22f8f6c69137ceaf284d9b441db1b9bfedc000200000000000000000011',
  VEUR_USDC_INACTIVE:
    '0xad0e5e0778cac28f1ff459602b31351871b5754a000200000000000000000029',
  VCHF_USDC_INACTIVE:
    '0x66bb9d104c55861feb3ec3559433f01f6373c96600020000000000000000002a',
  EUROC_USDC:
    '0x7a1a919c033ebc0d9f23cbf2aa41c24aef826ca200020000000000000000002e',
  VEUR_USDC:
    '0xa759ef6699a7a10ddc734e5ba1957fb79d3d248c000200000000000000000030',
  VCHF_USDC:
    '0x0099111ed107bdf0b05162356aee433514aac44000020000000000000000002f'
}

const addresses: AddressCollection = {
  ops: {
    multisig: '0x9BF9Ee3cD264ca6Deabf476cd29643bDf174b60D',
    deployer: '0x009c4ba01488A15816093F96BA91210494E2C644'
  },
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
        },
        {
          assets: [tokens.VEUR, tokens.USDC],
          address: fxPools.LP_VEUR_USDC,
          poolId: poolIds.VEUR_USDC
        },
        {
          assets: [tokens.VCHF, tokens.USDC],
          address: fxPools.LP_VCHF_USDC,
          poolId: poolIds.VCHF_USDC
        }
      ],
      disabled: [
        {
          assets: [tokens.EUROC, tokens.USDC],
          address: fxPools.LP_EUROC_USDC_INACTIVE,
          poolId: poolIds.EUROC_USDC_INACTIVE,
          gauges: {
            main: '0x40b4c2e260f803f868053789bd4a6c7edd1cdc39', // AvalancheRootGauge
            child: '0x0c22Ff3f93B5c9f13e41FA9D270680E97AC13B28' // ChildLiquidityGauge
          }
        },
        {
          assets: [tokens.VEUR, tokens.USDC],
          address: fxPools.LP_VEUR_USDC_INACTIVE,
          poolId: poolIds.VEUR_USDC_INACTIVE,
          gauges: {
            main: ZERO_ADDRESS,
            child: '0x3A9D7506A235A52CfA30399361426709A08578bb' // ChildLiquidityGauge
          }
        },
        {
          assets: [tokens.VCHF, tokens.USDC],
          address: fxPools.LP_VCHF_USDC_INACTIVE,
          poolId: poolIds.VCHF_USDC_INACTIVE,
          gauges: {
            main: ZERO_ADDRESS,
            child: '0xC2B75a2eBFc9479EfA0eF9C4b013b4FE4b2ADf8A' // ChildLiquidityGauge
          }
        }
      ],
      hidden: []
    },
    fxPoolFactory: '0x81fE9e5B28dA92aE949b705DfDB225f7a7cc5134',
    fxPoolDeployer: '0x4042dC4110Ea9500338737605A60065c3de152C6',
    fxPoolDeployerLib: '0xd05D8542827E4F534aB408c0ED21782d9FD412De',
    baseAssimilatorTemplate: '0x18FEFd0864BF9CE7Ad254030034Dafe01257FaB2',
    proportionalLiquidity: '0x6e879bd1B36D30eC2F3DC5EE6195c3fCfD24aA2a',
    assimilatorFactory: '0x5127fa6aEb261d519B9E843345265e2845dF449D',
    swapLibrary: '0x6B4761DfaB4cF4C531ADC379e83e85D62B553dDE',
    oracles: {
      USDC: '0xF096872672F44d6EBA71458D74fe67F9a77a23B9', // Chainklink official USDC/USD oracle
      EUROC: '0x192f2DBA961Bb0277520C082d6bfa87D5961333E', // Chainklink official EUR/USD oracle
      VCHF: '0xA418573AB5226711c8564Eeb449c3618ABFaf677', // Chainklink official CHF/USD oracle
      VEUR: '0x192f2DBA961Bb0277520C082d6bfa87D5961333E' // Chainklink official EUR/USD oracle
    },
    assimilators: {
      USDC_USD: '0x21720736Ada52d8887aFAC20B05f02005fD6f272',
      EUROC_USD: '0xb803906e5B39F8FA31c6bA2105925c5FA17beb54',
      VEUR_USD: '0x4cda5bDe8E78aBd4A53Fe6C1568C5C18d2D0f73E',
      VCHF_USD: '0xC2750ad1cbD8523BE6e51F7d8FC6394dD7194D2d'
    },
    protocolFeesDistributor: '0x701ef89a5bDc282408dBb37AB8A9b1c491Bf94D0',
    balancerProtocolFeeCollector: '0xce88686553686DA562CE7Cea497CE749DA109f9F',
    balancerMinter: '0x85a80afee867aDf27B50BdB7b76DA70f1E853062' // L2BalancerPseudoMinter
  },
  tokens
}

export default addresses
