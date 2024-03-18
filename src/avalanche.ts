import { AddressCollection, ZERO_ADDRESS } from './types'

const tokens = {
  BAL: '0x8239A6b877804206C7799028232A7188DA487CeC',
  USDC: '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E',
  EUROC: '0xC891EB4cbdEFf6e073e859e987815Ed1505c2ACD',
  VCHF: '0x228a48df6819CCc2eCa01e2192ebAFfFdAD56c19',
  VEUR: '0x7678e162f38ec9ef2Bfd1d0aAF9fd93355E5Fa0b',
  ZUSD: '0x9626B9583519E9dAa1C3a7B2E374518743C91ed2',
  USDT: '0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7',
  TUSD: '0x1C20E891Bab6b1727d14Da358FAe2984Ed9B59EB',
  DAI: '0xd586E7F844cEa2F87f50152665BCbc2C279D8d70',
  FRAX: '0xD24C2Ad096400B6FBcd2ad8B24E7acBc21A1da64',
  USDD: '0xB514CABD09eF5B169eD3fe0FA8DBd590741E81C2',
  agEUR: '0xAEC8318a9a59bAEb39861d10ff6C7f7bf1F96C57',
  LINK: '0x5947BB275c521040051D82396192181b413227A3',
  WBTC: '0x50b7545627a5162F82A992c33b87aDc75187B218',
  UNI: '0x8eBAf22B6F053dFFeaf46f4Dd9eFA95D89ba8580',
  MKR: '0x88128fd4b259552A9A1D457f435a6527AAb72d42',
  GRT: '0x8a0cAc13c7da965a312f08ea4229c37869e85cB9',
  SNX: '0xBeC243C995409E6520D7C41E404da5dEba4b209B',
  FXS: '0x214DB107654fF987AD859F34125307783fC8e387',
  WOO: '0xaBC9547B534519fF73921b1FBA6E672b5f58D083',
  AXL: '0x44c784266cf024a60e8acF2427b9857Ace194C5d',
  '1INCH': '0xd501281565bf7789224523144Fe5D98e8B28f267',
  UMA: '0x3Bd2B1c7ED8D396dbb98DED3aEbb41350a5b2339',
  GMX: '0x62edc0692BD897D2295872a9FFCac5425011c661',
  COMP: '0xc3048E19E76CB9a3Aa9d77D8C03c29Fc906e2437',
  BAT: '0x98443B96EA4b0858FDF3219Cd13e98C7A4690588',
  ZRX: '0x596fA47043f99A4e0F122243B841E55375cdE0d2',
  ANKR: '0x20CF1b6E9d856321ed4686877CF4538F2C84B4dE',
  YFI: '0x9eaac1b23d935365bd7b542fe22ceee2922f52dc',
  sAVAX: '0x2b2C81e08f1Af8835a78Bb2A90AE924ACE0eA4bE',
  PENDLE: '0xfB98B335551a418cD0737375a2ea0ded62Ea213b',
  SUSHI: '0x37B608519F91f70F2EeB0e5Ed9AF4061722e4F76',
  BTC: '0x152b9d0FdC40C096757F570A51E494bd4b943E50',
  ORBS: '0x3Ab1C9aDb065F3FcA0059652Cd7A52B05C98f9a9'
}

const fxPools = {
  LP_EUROC_USDC_INACTIVE: '0x55bEC22f8f6C69137cEAf284d9B441Db1B9bFedc',
  LP_VEUR_USDC_INACTIVE: '0xAd0e5e0778cAC28f1ff459602b31351871B5754a',
  LP_VCHF_USDC_INACTIVE: '0x66bB9D104c55861feb3Ec3559433F01f6373c966',
  LP_EUROC_USDC: '0x7A1A919c033eBc0d9F23cBF2Aa41c24AEf826ca2',
  LP_VEUR_USDC: '0x28F3a9e42667519c83cB090b5c4f6bd34e9F5569',
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
    '0x28f3a9e42667519c83cb090b5c4f6bd34e9f5569000200000000000000000031',
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
      allPoolIds: poolIds,
      genesis: [],
      enabled: [
        {
          assets: [tokens.EUROC, tokens.USDC],
          address: fxPools.LP_EUROC_USDC,
          poolId: poolIds.EUROC_USDC,
          gauges: {
            main: ZERO_ADDRESS,
            child: '0x35Ade969237697BA794bdDb9045aF06eDC96a47f'
          }
        },
        {
          assets: [tokens.VEUR, tokens.USDC],
          address: fxPools.LP_VEUR_USDC,
          poolId: poolIds.VEUR_USDC,
          gauges: {
            main: ZERO_ADDRESS,
            child: '0xe41978AcA73F93BF67c27B60232449F2F4a29168'
          }
        },
        {
          assets: [tokens.VCHF, tokens.USDC],
          address: fxPools.LP_VCHF_USDC,
          poolId: poolIds.VCHF_USDC,
          gauges: {
            main: ZERO_ADDRESS,
            child: '0xEB96333b3E0EFEf18A45d40C6144b78B0Dc70981'
          }
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
    fxPoolDeployerTracker: '0x7ff7B43CEAc9a1163cCB525ac9Dc1dE9A8837b4B',
    baseAssimilatorTemplate: '0x18FEFd0864BF9CE7Ad254030034Dafe01257FaB2',
    proportionalLiquidity: '0x6e879bd1B36D30eC2F3DC5EE6195c3fCfD24aA2a',
    assimilatorFactory: '0x5127fa6aEb261d519B9E843345265e2845dF449D',
    swapLibrary: '0x6B4761DfaB4cF4C531ADC379e83e85D62B553dDE',
    oracles: {
      USDC: '0xF096872672F44d6EBA71458D74fe67F9a77a23B9', // Chainklink official USDC/USD oracle
      EUROC: '0x192f2DBA961Bb0277520C082d6bfa87D5961333E', // Chainklink official EUR/USD oracle
      VCHF: '0xA418573AB5226711c8564Eeb449c3618ABFaf677', // Chainklink official CHF/USD oracle
      VEUR: '0x192f2DBA961Bb0277520C082d6bfa87D5961333E', // Chainklink official EUR/USD oracle,
      // ZUSD: '0x9562a4D96D5Fd5C7E2Db832E44e5D5a281e3063C' // Baki Oracle Adaptor old
      ZUSD: '0x649ebbbF45cA586377f630cbb1dB773Ff329F0b5'
    },
    assimilators: {
      USDC_USD: '0x21720736Ada52d8887aFAC20B05f02005fD6f272',
      EUROC_USD: '0xb803906e5B39F8FA31c6bA2105925c5FA17beb54',
      VEUR_USD: '0x4cda5bDe8E78aBd4A53Fe6C1568C5C18d2D0f73E',
      VCHF_USD: '0xC2750ad1cbD8523BE6e51F7d8FC6394dD7194D2d'
    },
    protocolFeesDistributor: '0x701ef89a5bDc282408dBb37AB8A9b1c491Bf94D0',
    balancerProtocolFeeCollector: '0xce88686553686DA562CE7Cea497CE749DA109f9F',
    balancerMinter: '0x85a80afee867aDf27B50BdB7b76DA70f1E853062', // L2BalancerPseudoMinter
    fxPoolMigrator: '0x40eC3c4447024061321ECB09075c462CF763d192'
  },
  tokens
}

export default addresses
