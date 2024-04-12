import { AddressCollection, ZERO_ADDRESS } from './types'

const tokens = {
  TestToken: '0x1A9c0F67fe805780A0FA0487Ec446E7e06F067e8',
  NativeToken: '0x0000000000000000000000000000000000001010',

  // Balancer tokens
  BAL: ZERO_ADDRESS // Balancer governance token
}

const fxPools = {}

const composableStablePools = {
  MOCK_COMPOSABLE_STABLE_POOL: '0x1498038E3888aac2AE12146CF52F9b6d8A245025'
} as any

const weightedPools = {
  MOCK_WEIGHTED_POOL: '0x9898F6cCdDDCB4441892aCA7bB0785C3c95CAd6d'
}

const allPools = {
  ...composableStablePools,
  ...weightedPools
}

const poolIds = {
  MOCK_COMPOSABLE_STABLE_POOL:
    '0x1498038e3888aac2ae12146cf52f9b6d8a245025000000000000000000000001',
  MOCK_WEIGHTED_POOL:
    '0x9898f6ccdddcb4441892aca7bb0785c3c95cad6d000200000000000000000000'
} as any

const addresses: AddressCollection = {
  ops: {
    multisig: '0x235A2ac113014F9dcb8aBA6577F20290832dDEFd',
    deployer: '0x009c4ba01488A15816093F96BA91210494E2C644'
  },
  protocol: {
    XAV: '0x201662B19d339AB2e81b11cae56606AD15CE9525',
    RNBW: ZERO_ADDRESS,
    xRNBW: ZERO_ADDRESS
  },
  rewards: {
    ammRewards: ZERO_ADDRESS,
    rewardsManager: ZERO_ADDRESS,
    epochManager: ZERO_ADDRESS
  },
  ammV2: {
    vault: '0x5644c8baCef3F48652A21C6943E204fC4aEc8aA9',
    pools: {
      all: allPools,
      allPoolIds: poolIds,
      genesis: [],
      enabled: [
        {
          assets: [tokens.TestToken, tokens.NativeToken],
          address: composableStablePools.MOCK_COMPOSABLE_STABLE_POOL,
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
    balancerProtocolFeeCollector: '0x0A1f23a241145F03C0e6870419f7fE1EF0f8D730',
    fxPoolMigrator: ZERO_ADDRESS // FXPoolMigratorProxy
  },
  tokens
}

export default addresses
