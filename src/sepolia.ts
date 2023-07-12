import { AddressCollection, ZERO_ADDRESS } from './types'

const tokens = {
  // Xave tokens
  XSGD: '0x29388a985C5904BFa13524f8c3Cb8bC10A02864C', // Xave mock XSGD
  EURS: '0x132b37560040268aA7c03F6C4f415F0eBf30A87b', // Xave mock EURS
  USDC: '0xB9f4E777491bb848578B6FBa5c8A744A40d11128', // Xave mock USDC token
  PHPT: '0x395c430e7aec9216a5CAa2620b164DF381f53D8F', // Xave mock PHP token

  // Balancer tokens
  BAL: '0xb19382073c7A0aDdbb56Ac6AF1808Fa49e377B75' // Balancer governance token
  // USDC: '0xe0C9275E44Ea80eF17579d33c55136b7DA269aEb', // Balancer USDC token
  // USDT: '0x1f1f156E0317167c11Aa412E3d1435ea29Dc3cCE', // Balancer USDT token
  // DAI: '0x8c9e6c40d3402480ACE624730524fACC5482798c' // Balancer DAI token
  // 'bb-a-usd': '0x7CCB99E3DBeF941a062E0da1b0d7635bdCFafB01', // Balancer ComposableStablePool
  // 'bb-a-USDC': '0x0595D1Df64279ddB51F1bdC405Fe2D0b4Cc86681', // Balancer USDC:aUSDC AaveLinearPool
  // 'bb-a-DAI': '0x5cEA6A84eD13590ED14903925Fa1A73c36297d99', // Balancer DAI:aDAI AaveLinearPool
  // 'bb-a-USDT': '0xeFD681A82970AC5d980b9B2D40499735e7BF3F1F' // Balancer USDT:aUSDT AaveLinearPool
}

const fxPools = {
  LP_XSGD_USDC: '0x631bAED5B6F1979975eb843A2a46654CC139d55c',
  LP_PHPT_USDC: '0x93442AAf3b04C2B31133023a2A4F6Bb1b0A898C8'
  // LP_EURS_USDC: '0x3F3557C7dCa644F6F5d6074FF560a8856155f632',
  // 'LP_XSGD_bb-a-usd': '0xF93AC32926574F67F112182ad95F8359c42715Da',
  // 'LP_EURS_bb-a-usd': '0x83b630DBF3e90cF0b69dd4029c3d49AF7E48c355'
}

const poolIds = {
  XSGD_USDC:
    '0x631baed5b6f1979975eb843a2a46654cc139d55c00020000000000000000001a',
  PHPT_USDC:
    '0x93442aaf3b04c2b31133023a2a4f6bb1b0a898c800020000000000000000001b'
  // EURS_USDC:
  //   '0x3f3557c7dca644f6f5d6074ff560a8856155f63200020000000000000000066e'
  // 'XSGD_bb-a-usd':
  //   '0xf93ac32926574f67f112182ad95f8359c42715da00020000000000000000067c',
  // 'EURS_bb-a-usd':
  //   '0x83b630dbf3e90cf0b69dd4029c3d49af7e48c35500020000000000000000067d',
  // 'bb-a-usd':
  //   '0x7ccb99e3dbef941a062e0da1b0d7635bdcfafb0100000000000000000000054a',
  // 'bb-a-USDC':
  //   '0x0595d1df64279ddb51f1bdc405fe2d0b4cc8668100000000000000000000005c',
  // 'bb-a-DAI':
  //   '0x5cea6a84ed13590ed14903925fa1a73c36297d9900000000000000000000005d',
  // 'bb-a-USDT':
  //   '0xefd681a82970ac5d980b9b2d40499735e7bf3f1f00000000000000000000005e'
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
    fxPoolFactory: '0xf21b9ED717d0F5578541304abBd7881468d56630',
    proportionalLiquidity: '0xbcB66eD6419857b49Fa5947af58865538F8fba2C',
    assimilatorFactory: ZERO_ADDRESS,
    swapLibrary: '0x6F2275CaB5D20ec0DCc4878824EB9425029B2d14',
    oracles: {
      USDC: '0xA2F78ab2355fe2f984D808B5CeE7FD0A93D5270E', // Chainklink official USDC/USD oracle
      XSGD: '0xd9239bB559B8f16DCD67f6186166d218b7514397', // Xave mock XSGD/USD oracle
      PHPT: '0xc33745C6cD00C4097faE924CB7e2594FfF4b7d7E', // Xave mock PHP/USD oracle
      EURS: '0xc104e54803abA12f7a171a49DDC333Da39f47193', // Chainklink official EURS/USD oracle
      USDT: '0xA2F78ab2355fe2f984D808B5CeE7FD0A93D5270E', // no USDT on Chainlink sepolia, reusing USDC instead
      DAI: '0x14866185B1962B63C3Ea9E03Bc1da838bab34C19' // Chainklink official DAI/USD oracle
      // 'bb-a-usd': '0xA76dC5048F80D2f2974754D292B09a441ea60EcA' // Xave's ComposableBoostedPoolOracle
    },
    assimilators: {
      USDC_USD: '0xde29585a4134752632a07f09BCA0f02F72a33B8d',
      XSGD_USD: '0x972127aFf8e6464e50eFc0a2aD344063355AE424',
      EURS_USD: '0xDFEa5ECCbB7D61D49dFa702ed8FeC4EC48944719',
      PHPT_USD: '0xd69904f0ABFF772A7e5BCb5b1da500edcEFbA39F'
      // 'bb-a-usd_USD': '0x35247C932ECF5898d2eFBb462146067B889bAaF8',
      // 'XSGD_bb-a-usd_USD': '0xD98A5Bdb5fA8E2feC69391397EB6b8D9d73428bf',
      // 'EURS_bb-a-usd_USD': '0x80FCFC519d0AaE7B3aAa97a9dB454eB416c67473'
    },
    balancerProtocolFeeCollector: '0xce88686553686DA562CE7Cea497CE749DA109f9F'
  },
  tokens
}

export default addresses
