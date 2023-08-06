import { AddressCollection, ZERO_ADDRESS } from './types'

const tokens = {
  // Xave tokens
  XSGD: '0x48623292bd8293b747571934379b9d3e5423dbb6', // Xave mock XSGD
  EURS: '0x298c1167E96528111544C8AD5401a2Ef57f5b7fF', // Xave mock EURS
  USDC: '0x834BD0EB271Cf98982E11578C2A7037f3e3d1B6b', // Xave mock USDC token
  PHPX: '0x46b40474959dc321d990cdc8209e9fa103f2b45d', // Xave mock PHP token
  XIDR: '0xafec667a5a02c1efc27dd617ce1df47c9e8f0f1e', // Xave mock XIDR token

  // Balancer tokens
  BAL: ZERO_ADDRESS // Balancer governance token
}

const fxPools = {
  LP_XSGD_USDC: ZERO_ADDRESS,
  LP_PHPT_USDC: ZERO_ADDRESS
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
          assets: [tokens.PHPX, tokens.USDC],
          address: fxPools.LP_PHPT_USDC,
          poolId: poolIds.PHPT_USDC
        }
      ],
      disabled: [],
      hidden: []
    },
    fxPoolFactory: '0xf21b9ED717d0F5578541304abBd7881468d56630',
    proportionalLiquidity: '0xbcB66eD6419857b49Fa5947af58865538F8fba2C',
    assimilatorFactory: ZERO_ADDRESS,
    swapLibrary: '0x6F2275CaB5D20ec0DCc4878824EB9425029B2d14',
    oracles: {
      USDC: '0x6EbB802Ad48aA39C50a4Bf175aDD81E966cE1D4D', // Xave mock USDC/USD oracle
      XSGD: '0xa208bCd6942292CC78e325734607A68cdf635AFE', // Xave mock XSGD/USD oracle
      PHPX: '0x579270F151D142eb8BdC081043a983307Aa15786', // Xave mock PHP/USD oracle
      EURS: '0xcECD6ACc6B6Bb0f40B952C251BC303894f62a3ED' // Xave mock EURS/USD oracle
    },
    assimilators: {
      USDC_USD: '0xde29585a4134752632a07f09BCA0f02F72a33B8d',
      XSGD_USD: '0x972127aFf8e6464e50eFc0a2aD344063355AE424',
      EURS_USD: '0xDFEa5ECCbB7D61D49dFa702ed8FeC4EC48944719',
      PHPT_USD: '0xd69904f0ABFF772A7e5BCb5b1da500edcEFbA39F'
    },
    balancerProtocolFeeCollector: '0xce88686553686DA562CE7Cea497CE749DA109f9F'
  },
  tokens
}

export default addresses
