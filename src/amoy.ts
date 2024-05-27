import { AddressCollection, ZERO_ADDRESS } from './types'

const tokens = {
  // Xave tokens
  XSGD: '0xdB20620d357037DfeC9809ea76439aDb4692db98', // Xave mock EURS
  USDC: '0x07b655e4005804afB03986ceF4E611D63Eaac010', // Xave mock USDC token
  PHPC: '0x9072828ff0c62311D522B0F0aa1C5ad72F5F8Ce0', // Xave mock PHP token,
  PHX: '0x6656f423bc5180EbA0e45D2d7Bc0D456c2731b86',

  // Balancer tokens
  BAL: '0xC9c0947fecaC78f253298A723Cf3287533510a98' // Balancer governance token
}

const fxPools = {
  XSGD_USDC: '0x953EcC52CB969ECF5D616d3777F15c2842bf5Bd6',
  PHX_USDC: '0x94B3dce8D2426Dd10db6a150059515A5e19ee7Ce',
  PHPC_USDC: '0xC76A74682e2CED6A5dB9F0540ABA4CdE614EAC51'
}

const poolIds = {
  XSGD_USDC:
    '0x953ecc52cb969ecf5d616d3777f15c2842bf5bd600020000000000000000000a',
  PHX_USDC:
    '0x94b3dce8d2426dd10db6a150059515a5e19ee7ce00020000000000000000000b',
  PHPC_USDC:
    '0xc76a74682e2ced6a5db9f0540aba4cde614eac5100020000000000000000000d'
}

const addresses: AddressCollection = {
  ops: {
    multisig: '0x235A2ac113014F9dcb8aBA6577F20290832dDEFd',
    deployer: '0x235A2ac113014F9dcb8aBA6577F20290832dDEFd'
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
          assets: [tokens.XSGD, tokens.USDC],
          address: fxPools.XSGD_USDC,
          poolId: poolIds.XSGD_USDC
        },
        {
          assets: [tokens.PHX, tokens.USDC],
          address: fxPools.PHX_USDC,
          poolId: poolIds.PHX_USDC
        },
        {
          assets: [tokens.PHPC, tokens.USDC],
          address: fxPools.PHPC_USDC,
          poolId: poolIds.PHPC_USDC
        }
      ],
      disabled: [],
      hidden: []
    },
    fxPoolFactory: ZERO_ADDRESS,
    fxPoolDeployer: '0xe5761A142CD8456730CEA61462a02430717e5375',
    fxPoolDeployerLib: ZERO_ADDRESS,
    baseAssimilatorTemplate: '',
    proportionalLiquidity: '',
    assimilatorFactory: ZERO_ADDRESS,
    swapLibrary: '',
    oracles: {
      USDC: '0x1aF00782F74DdC4c7fCEFe8752113084FEBCDA45', // Chainklink official USDC/USD oracle
      XSGD: '0x254e3D5F964E770F3a51a19d809bcE36308d797d', // Xave mock XSGD/USD oracle
      PHX: '0x3251e99cEf4b9bA03a6434B767aa5Ad11ca6cc31',
      PHPC: '0x3251e99cEf4b9bA03a6434B767aa5Ad11ca6cc31', // Xave mock PHP/USD oracle
    },
    assimilators: {
      USDC_USD: '',
      XSGD_USD: '',
      EURS_USD: '',
      PHPT_USD: ''
    },
    // NB: sending to fxpoolOwner address in Sepolia
    protocolFeesDistributor: '',
    balancerProtocolFeeCollector: '0xB4b7ADB8Dd97523F59929b5ec6d2c34bF8E67B0c',
    fxPoolMigrator: '' // FXPoolMigratorProxy
  },
  tokens
}

export default addresses
