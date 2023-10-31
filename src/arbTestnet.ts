import { AddressCollection, ZERO_ADDRESS } from './types'

const tokens = {
  USDC: '0xB626E339a0EF63a15585FAAb4483a1732aaD0A94',
  fxPHP: '0xE467402aE64952a520818733248bD6d4586773fA'
}

const curves = {
  HLP_fxPHP_USDC: '0x05aB48cb139bD6a5f67676A7F0cfb21B68c46275'
}

const addresses: AddressCollection = {
  ops: {
    multisig: ZERO_ADDRESS,
    deployer: '0x009c4ba01488A15816093F96BA91210494E2C644'
  },
  protocol: {
    XAV: ZERO_ADDRESS,
    RNBW: '0xfbBf11Ae3E8A4b6D9C866B3f16741D1641ccc4d5',
    xRNBW: '0xAe0429F26ed25c8Ad22D2582315Cc99aa5de8fF6'
  },
  rewards: {
    ammRewards: '0xAfeC667A5a02C1EFC27Dd617Ce1dF47C9E8f0F1e'
  },
  ammV1: {
    factory: '0xFf3807e87238A8dC507851Ef340D4F17dea58c88',
    router: '0x303Fe605077f251a123A41b5241a164c49Eba9b5',
    zap: '0x70bA0482FD6343e8fcbd2480C8b4C11d6c654DF5',
    curves: {
      all: curves,
      enabled: [curves.HLP_fxPHP_USDC],
      disabled: []
    }
  },
  ammV2: {
    vault: ZERO_ADDRESS,
    pools: {
      all: {},
      genesis: [],
      enabled: [],
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
    oracles: {
      USDC: '0xe020609A0C31f4F96dCBB8DF9882218952dD95c4',
      fxPHP: '0xF4764A9536B0ef7195ad3902c4Fc68eEc48f9C67'
    },
    protocolFeesDistributor: ZERO_ADDRESS,
    balancerProtocolFeeCollector: ZERO_ADDRESS
  },
  tokens
}

export default addresses
