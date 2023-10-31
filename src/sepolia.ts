import { AddressCollection, ZERO_ADDRESS } from './types'

const tokens = {
  // Xave tokens
  XSGD: '0x29388a985C5904BFa13524f8c3Cb8bC10A02864C', // Xave mock XSGD
  EURS: '0x132b37560040268aA7c03F6C4f415F0eBf30A87b', // Xave mock EURS
  USDC: '0xB9f4E777491bb848578B6FBa5c8A744A40d11128', // Xave mock USDC token
  PHPT: '0x395c430e7aec9216a5CAa2620b164DF381f53D8F', // Xave mock PHP token

  // Balancer tokens
  BAL: '0xb19382073c7A0aDdbb56Ac6AF1808Fa49e377B75' // Balancer governance token
}

const fxPools = {
  LP_XSGD_USDC: '0x631bAED5B6F1979975eb843A2a46654CC139d55c',
  LP_PHPT_USDC: '0x93442AAf3b04C2B31133023a2A4F6Bb1b0A898C8'
}

const poolIds = {
  XSGD_USDC:
    '0x631baed5b6f1979975eb843a2a46654cc139d55c00020000000000000000001a',
  PHPT_USDC:
    '0x93442aaf3b04c2b31133023a2a4f6bb1b0a898c800020000000000000000001b'
}

const addresses: AddressCollection = {
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
    vault: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
    pools: {
      all: fxPools,
      genesis: [],
      enabled: [
        {
          assets: [tokens.XSGD, tokens.USDC],
          address: fxPools.LP_XSGD_USDC,
          poolId: poolIds.XSGD_USDC
        },
        {
          assets: [tokens.PHPT, tokens.USDC],
          address: fxPools.LP_PHPT_USDC,
          poolId: poolIds.PHPT_USDC
        }
      ],
      disabled: [],
      hidden: []
    },
    // @TODO in Sepolia we don't actually have access to this wallet
    // for now this is used as testing to ensure that the pools are owned
    // by the right address after a deployment (call to newFXPool())
    fxpoolOwner: '0xC76Ec28801ad09020fB89da48306176e56960CC5',
    fxPoolFactory: '0xf21b9ED717d0F5578541304abBd7881468d56630',
    fxPoolDeployer: '0x72cEfA55e806B775B8855f39B581bB54f162632E',
    fxPoolDeployerLib: '0xC9cAe17093162947EDaE00D67a7d9bb509372C55',
    baseAssimilatorTemplate: '0x8DB14E029399C4500614161867b8bFc1a2F74019',
    proportionalLiquidity: '0xbcB66eD6419857b49Fa5947af58865538F8fba2C',
    assimilatorFactory: ZERO_ADDRESS,
    swapLibrary: '0x6F2275CaB5D20ec0DCc4878824EB9425029B2d14',
    oracles: {
      USDC: '0xA2F78ab2355fe2f984D808B5CeE7FD0A93D5270E', // Chainklink official USDC/USD oracle
      XSGD: '0xd9239bB559B8f16DCD67f6186166d218b7514397', // Xave mock XSGD/USD oracle
      PHPT: '0xc33745C6cD00C4097faE924CB7e2594FfF4b7d7E', // Xave mock PHP/USD oracle
      EURS: '0x1a81afB8146aeFfCFc5E50e8479e826E7D55b910', // Chainklink official EURS/USD oracle
      USDT: '0xA2F78ab2355fe2f984D808B5CeE7FD0A93D5270E', // no USDT on Chainlink sepolia, reusing USDC instead
      DAI: '0x14866185B1962B63C3Ea9E03Bc1da838bab34C19' // Chainklink official DAI/USD oracle
    },
    assimilators: {
      USDC_USD: '0xde29585a4134752632a07f09BCA0f02F72a33B8d',
      XSGD_USD: '0x972127aFf8e6464e50eFc0a2aD344063355AE424',
      EURS_USD: '0xDFEa5ECCbB7D61D49dFa702ed8FeC4EC48944719',
      PHPT_USD: '0xd69904f0ABFF772A7e5BCb5b1da500edcEFbA39F'
    },
    // NB: sending to fxpoolOwner address in Sepolia
    protocolFeesDistributor: '0xC76Ec28801ad09020fB89da48306176e56960CC5',
    balancerProtocolFeeCollector: '0xce88686553686DA562CE7Cea497CE749DA109f9F'
  },
  tokens
}

export default addresses
