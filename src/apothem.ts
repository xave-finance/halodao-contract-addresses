import { AddressCollection, ZERO_ADDRESS } from './types'

const tokens = {
  // Xave tokens
  XSGD: '0x48623292bD8293b747571934379B9D3E5423DBB6', // Xave mock XSGD
  EURS: '0x298c1167E96528111544C8AD5401a2Ef57f5b7fF', // Xave mock EURS
  USDC: '0x834BD0EB271Cf98982E11578C2A7037f3e3d1B6b', // Xave mock USDC token
  PHPX: '0x46B40474959dC321D990Cdc8209e9fa103F2b45d', // Xave mock PHP token
  XIDR: '0xAfeC667A5a02C1EFC27Dd617Ce1dF47C9E8f0F1e', // Xave mock XIDR token

  // Balancer tokens
  BAL: '0x499F0a05582685f8728fF2f61F5F20D8001b7D73' // Mock Balancer governance token
}

const fxPools = {
  LP_XSGD_USDC: '0x58743e6D93A5f982bfEfa2f03A15D05f15Ce6c78',
  LP_EURS_USDC: '0x9A35F5C4e998dEaa4AdcC370a450942eb11cC2e9',
  LP_PHPX_USDC: '0x648377F9Fc3000cC1917baf9A368dCbADb14eb2C',
  LP_XIDR_USDC: '0xfA2878ecae189545F7658aA1734E9e8EdFFff29c'
}

const poolIds = {
  XSGD_USDC:
    '0x58743e6d93a5f982bfefa2f03a15d05f15ce6c7800020000000000000000000e',
  EURS_USDC:
    '0x9a35f5c4e998deaa4adcc370a450942eb11cc2e900020000000000000000000d',
  PHPX_USDC:
    '0x648377f9fc3000cc1917baf9a368dcbadb14eb2c00020000000000000000000c',
  XIDR_USDC:
    '0xfa2878ecae189545f7658aa1734e9e8edffff29c00020000000000000000000a'
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
    vault: '0x2b1c6c85a1dB4b5CF9C4d4662d0556E5daBcf626',
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
          assets: [tokens.EURS, tokens.USDC],
          address: fxPools.LP_EURS_USDC,
          poolId: poolIds.EURS_USDC
        },
        {
          assets: [tokens.PHPX, tokens.USDC],
          address: fxPools.LP_PHPX_USDC,
          poolId: poolIds.PHPX_USDC
        },
        {
          assets: [tokens.XIDR, tokens.USDC],
          address: fxPools.LP_XIDR_USDC,
          poolId: poolIds.XIDR_USDC
        }
      ],
      disabled: [],
      hidden: []
    },
    fxPoolFactory: '0xDa36657adE23d2008Ea7bcB3b566c919498C5e2A',
    fxPoolDeployer: ZERO_ADDRESS,
    fxPoolDeployerLib: ZERO_ADDRESS,
    baseAssimilatorTemplate: ZERO_ADDRESS,
    proportionalLiquidity: '0xAa878928dc095523300585155843Ae142FBf309d',
    assimilatorFactory: ZERO_ADDRESS,
    swapLibrary: '0x0Bdb612b8083cCbe8161a5B4320DD5B7d7a91062',
    oracles: {
      USDC: '0x6EbB802Ad48aA39C50a4Bf175aDD81E966cE1D4D', // Xave mock USDC/USD oracle
      XSGD: '0xa208bCd6942292CC78e325734607A68cdf635AFE', // Xave mock XSGD/USD oracle
      PHPX: '0x579270F151D142eb8BdC081043a983307Aa15786', // Xave mock PHP/USD oracle
      EURS: '0xe42827D98C053b6e9c97E39BE8b611102E8c1805', // Xave mock EURS/USD oracle
      XIDR: '0x17D95442085bfa0dB18Afb7Fe1974CBc1CD9CF3C' // Xave mock XIDR/USD oracle
    },
    assimilators: {
      USDC_USD: '0x7965Ce7bE2B1608c217D001BdC27B799e405cf2F',
      XSGD_USD: '0x4E5b866564AC8695097e881f5CA86B2074BE7857',
      EURS_USD: '0xcE63641aDf5134C8D4835D38e9FA28779c60636e',
      PHPX_USD: '0x9994F5e975b944f27bafcEdAC8075C33Dd8c074d',
      XIDR_USD: '0xe0d3aF0cAc1B8246aec2BF26Ce79F71EDA933659'
    },
    protocolFeesDistributor: ZERO_ADDRESS,
    balancerProtocolFeeCollector: '0x94BA31Fe011acdeE245b6b64c9E48E5aEb36589B'
  },
  tokens
}

export default addresses
