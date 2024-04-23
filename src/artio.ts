import { AddressCollection, ZERO_ADDRESS } from './types'

const tokens = {
  TestToken: '0x1A9c0F67fe805780A0FA0487Ec446E7e06F067e8',
  NativeToken: '0x0000000000000000000000000000000000001010',

  // Balancer tokens
  BAL: '0x9AA488bc4c3c237104CD6661e076B22e0535eCFA' // Balancer governance token
}

const fxPools = {}

const composableStablePools = {
  USDC_USDT_COMPOSABLE_STABLE_POOL: '0x9610423917403d142705D8d060127F88764120f6',
  EURS_USDC_COMPOSABLE_STABLE_POOL: '0xf0b886478D6c0c579E53faCbcC6E4abCE96AE4B2',
  DAI_USDT_COMPOSABLE_STABLE_POOL: '0xb43d9bb28e60e5EdE04DfBe2c723A9BCF578397C'
} as any

const weightedPools = {
  MOCK_WEIGHTED_POOL: ''
}

const allPools = {
  ...composableStablePools,
  ...weightedPools
}

const poolIds = {
  USDC_USDT_COMPOSABLE_STABLE_POOL: '0x9610423917403d142705d8d060127f88764120f6000000000000000000000003',
  EURS_USDC_COMPOSABLE_STABLE_POOL: '0xf0b886478d6c0c579e53facbcc6e4abce96ae4b2000000000000000000000004',
  DAI_USDT_COMPOSABLE_STABLE_POOL: '0xb43d9bb28e60e5ede04dfbe2c723a9bcf578397c000000000000000000000005'
} as any

const addresses: AddressCollection = {
  ops: {
    multisig: ZERO_ADDRESS,
    deployer: '0x235A2ac113014F9dcb8aBA6577F20290832dDEFd'
  },
  protocol: {
    XAV: '',
    RNBW: ZERO_ADDRESS,
    xRNBW: ZERO_ADDRESS
  },
  rewards: {
    ammRewards: ZERO_ADDRESS,
    rewardsManager: ZERO_ADDRESS,
    epochManager: ZERO_ADDRESS
  },
  ammV2: {
    vault: '0xD6D473f54Cda4eb4396690e35d806131bdffE579',
    pools: {
      all: allPools,
      allPoolIds: poolIds,
      genesis: [],
      enabled: [
        {
          assets: [tokens.TestToken, tokens.NativeToken],
          address: composableStablePools.USDC_USDT_COMPOSABLE_STABLE_POOL,
          poolId: composableStablePools.MOCK_COMPOSABLE_STABLE_POOL
        }
      ],
      disabled: [],
      hidden: []
    },
    fxPoolFactory: ZERO_ADDRESS,
    fxPoolDeployer: ZERO_ADDRESS,
    fxPoolDeployerLib: ZERO_ADDRESS,
    baseAssimilatorTemplate: ZERO_ADDRESS,
    proportionalLiquidity: ZERO_ADDRESS,
    assimilatorFactory: ZERO_ADDRESS,
    swapLibrary: ZERO_ADDRESS,
    oracles: {},
    assimilators: {},
    protocolFeesDistributor: ZERO_ADDRESS,
    balancerProtocolFeeCollector: '0x470b5AC180563707bc77c61B2E1b8F234A4b06C1',
    fxPoolMigrator: ZERO_ADDRESS // FXPoolMigratorProxy
  },
  tokens
}

export default addresses
