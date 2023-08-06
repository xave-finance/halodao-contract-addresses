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
  LP_XSGD_USDC: '0x0F72AED8D93Bc802417cee1B28380d9771DD8bc0',
  LP_EURS_USDC: '0x0885790d8056BA3e08dB076f9cd9db80C8D6ABf7',
  LP_PHPX_USDC: '0x861b29Ea602Af99E99C51a34f49a603AAbc12159'
}

const poolIds = {
  XSGD_USDC:
    '0x0f72aed8d93bc802417cee1b28380d9771dd8bc0000200000000000000000004',
  EURS_USDC:
    '0x0885790d8056ba3e08db076f9cd9db80c8d6abf7000200000000000000000005',
  PHPX_USDC:
    '0x861b29ea602af99e99c51a34f49a603aabc12159000200000000000000000006'
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
        }
      ],
      disabled: [],
      hidden: []
    },
    fxPoolFactory: '0xDa36657adE23d2008Ea7bcB3b566c919498C5e2A',
    proportionalLiquidity: '0xAa878928dc095523300585155843Ae142FBf309d',
    assimilatorFactory: ZERO_ADDRESS,
    swapLibrary: '0x0Bdb612b8083cCbe8161a5B4320DD5B7d7a91062',
    oracles: {
      USDC: '0x7965Ce7bE2B1608c217D001BdC27B799e405cf2F', // Xave mock USDC/USD oracle
      XSGD: '0x4E5b866564AC8695097e881f5CA86B2074BE7857', // Xave mock XSGD/USD oracle
      PHPX: '0x9994F5e975b944f27bafcEdAC8075C33Dd8c074d', // Xave mock PHP/USD oracle
      EURS: '0x6bf91F40A553C58d8cD56871a6D3516F102785a8' // Xave mock EURS/USD oracle
    },
    assimilators: {
      USDC_USD: '0x7965Ce7bE2B1608c217D001BdC27B799e405cf2F',
      XSGD_USD: '0x4E5b866564AC8695097e881f5CA86B2074BE7857',
      EURS_USD: '0x6bf91F40A553C58d8cD56871a6D3516F102785a8',
      PHPX_USD: '0x9994F5e975b944f27bafcEdAC8075C33Dd8c074d'
    },
    balancerProtocolFeeCollector: '0x94BA31Fe011acdeE245b6b64c9E48E5aEb36589B'
  },
  tokens
}

export default addresses
