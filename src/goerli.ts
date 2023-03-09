import { AddressCollection, ZERO_ADDRESS } from './types'

const tokens = {
  // Xave tokens
  XSGD: '0xb4a183d38F754D83AA97810D80FC5BaCCd5c8441', // Xave mock USDC
  EURS: '0x2b1c6c85a1dB4b5CF9C4d4662d0556E5daBcf626', // Xave mock USDC

  // Balancer tokens
  USDC: '0xe0C9275E44Ea80eF17579d33c55136b7DA269aEb', // balancer mock USDC
  USDT: '0x1f1f156E0317167c11Aa412E3d1435ea29Dc3cCE', // balancer USDT token
  DAI: '0x8c9e6c40d3402480ACE624730524fACC5482798c', // balancer DAI token
  'bb-a-usd': '0x7CCB99E3DBeF941a062E0da1b0d7635bdCFafB01', // balancer ComposableStablePool
  'bb-a-USDC': '0x0595D1Df64279ddB51F1bdC405Fe2D0b4Cc86681', // balancer USDC:aUSDC AaveLinearPool
  'bb-a-DAI': '0x5cEA6A84eD13590ED14903925Fa1A73c36297d99', // balancer DAI:aDAI AaveLinearPool
  'bb-a-USDT': '0xeFD681A82970AC5d980b9B2D40499735e7BF3F1F' // balancer USDT:aUSDT AaveLinearPool
}

const fxPools = {
  LP_XSGD_USDC: '',
  LP_EURS_USDC: '',
  'LP_XSGD_bb-a-usd': '',
  'LP_EURS_bb-a-usd': ''
}

const poolIds = {
  XSGD_USDC: '',
  EURS_USDC: '',
  'XSGD_bb-a-usd': '',
  'EURS_bb-a-usd': '',
  'bb-a-usd':
    '0x7ccb99e3dbef941a062e0da1b0d7635bdcfafb0100000000000000000000054a',
  'bb-a-USDC':
    '0x0595d1df64279ddb51f1bdc405fe2d0b4cc8668100000000000000000000005c',
  'bb-a-DAI':
    '0x5cea6a84ed13590ed14903925fa1a73c36297d9900000000000000000000005d',
  'bb-a-USDT':
    '0xefd681a82970ac5d980b9b2d40499735e7bf3f1f00000000000000000000005e'
}

const bbausdPoolTokens = [
  tokens.USDC,
  tokens.DAI,
  tokens.USDT,
  tokens['bb-a-USDC'],
  tokens['bb-a-DAI'],
  tokens['bb-a-USDT']
]

const bbausdSubpools = [
  {
    address: tokens['bb-a-USDC'],
    poolId: poolIds['bb-a-USDC'],
    assets: [tokens.USDC]
  },
  {
    address: tokens['bb-a-DAI'],
    poolId: poolIds['bb-a-DAI'],
    assets: [tokens.DAI]
  },
  {
    address: tokens['bb-a-USDT'],
    poolId: poolIds['bb-a-USDT'],
    assets: [tokens.USDT]
  }
]

const addresses: AddressCollection = {
  protocol: {
    XAV: '0x4f2157aE2661e4312B8F2E458705fA5a9aeb3D46',
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
          assets: [tokens.EURS, tokens.USDC],
          address: fxPools.LP_EURS_USDC,
          poolId: poolIds.EURS_USDC
        },
        {
          assets: [tokens.XSGD, tokens['bb-a-usd']],
          address: fxPools['LP_XSGD_bb-a-usd'],
          poolId: poolIds['XSGD_bb-a-usd'],
          poolTokens: bbausdPoolTokens,
          subPools: bbausdSubpools
        },
        {
          assets: [tokens.EURS, tokens['bb-a-usd']],
          address: fxPools['LP_EURS_bb-a-usd'],
          poolId: poolIds['EURS_bb-a-usd'],
          poolTokens: bbausdPoolTokens,
          subPools: bbausdSubpools
        }
      ],
      disabled: []
    },
    fxPoolFactory: '0x13841C45274c68002F6D0cb0a40Ae7faa54e7e57',
    proportionalLiquidity: '0x7bC633DA66EBD9A5E44293D8A71e094aFd78c5D6',
    assimilatorFactory: '0xbd02F2F69B8D79CD2566b6e425Ba2810ca5C2743',
    swapLibrary: '0x9875C5C44C10e24AEa48C422f819c5c8f933701D',
    oracles: {
      USDC: '0xAb5c49580294Aff77670F839ea425f5b78ab3Ae7', // Chainklink official USDC/USD oracle
      XSGD: '0x3E58d34C8cf108897b1296eF462AD18522f7e122', // mock XSGD/USD oracle
      EURS: '0x44390589104C9164407A0E0562a9DBe6C24A0E05', // Chainklink official EURS/USD oracle
      USDT: '0xAb5c49580294Aff77670F839ea425f5b78ab3Ae7', // no USDT on Chainlink goerli, reusing USDC instead
      DAI: '0x0d79df66BE487753B02D015Fb622DED7f0E9798d', // Chainklink official DAI/USD oracle
      'bb-a-usd': '0xA76dC5048F80D2f2974754D292B09a441ea60EcA' // Xave's ComposableBoostedPoolOracle
    },
    assimilators: {
      USDC_USD: '0x75deB02b7B5631395c3DFD6F8027a9C8Ce95103e',
      XSGD_USD: '0x386da2bb0f37b5D060dBc47177F2A686d6B34D0A',
      EURS_USD: '0xc7B5Bc5dcAA1534b0aA38cFC19e8c15bb023a164',
      'bb-a-usd_USD': '0x35247C932ECF5898d2eFBb462146067B889bAaF8',
      'XSGD_bb-a-usd_USD': '0x451eBA413d3fD1429d3af1e5592fDF2843A61498',
      'EURS_bb-a-usd_USD': '0x80FCFC519d0AaE7B3aAa97a9dB454eB416c67473'
    },
    balancerProtocolFeeCollector: '0xce88686553686DA562CE7Cea497CE749DA109f9F'
  },
  tokens,
  lendingMarket: {
    protocol: {
      lendingPoolAddressesProvider:
        '0x4D7e44c5262B61817cA7bDD8E0Bd5748C5890131',
      lendingPoolAddressesProviderRegistry:
        '0x651a4C20f46F29CaC490A12111CfD76bab4EfE39',
      reserveLogic: '0x04a12215189F3aeEd6D04DE8b9d0AEf839CE7764',
      genericLogic: '0x609208B2E016fB4B61C0191beEAfF73e2CafCF1E',
      validationLogic: '0xFc8A694B1d44e52b85FC13032264dc9029183dF9',
      lendingPoolImpl: '0x8091396CD0808CB1a21e95Cb4F47613b8a367682',
      lendingPool: '0x6af3B5f7d7f4BE05C3dF360A3b573A7FB93E719B',
      lendingPoolProxy: '0x6af3B5f7d7f4BE05C3dF360A3b573A7FB93E719B',
      lendingPoolConfiguratorImpl: '0x8F8791d44dcad03fec2995482CDfA9C69784f31c',
      lendingPoolConfigurator: '0x497fD821B014880c575aC98A23d9926f5148800E',
      stableAndVariableTokensHelper:
        '0x34305916713a0F9070f51dBcf5db945c4A3Ee48c',
      aTokensAndRatesHelper: '0xE3C2280f8d1af58443b487040521a9D923d6fda5',
      aaveOracle: '0x5d82ae79F6AF94C0159abf44034a2295aDd5C749',
      lendingRateOracle: '0xF403e0dD1A955f72eA8c9b6998D375f66C9E0957',
      aaveProtocolDataProvider: '0x79D52081eCa24468fe471b22c763bdbFf02FAC3c',
      stableDebtToken: '0x10eF9F05455bf85683f032E5f79301bBE7e40758',
      variableDebtToken: '0x87B2418E4DFEC74Bcba9453C7C8e63c6FA7E350b',
      aToken: '0x5533a2e3Db531a89b25D1ed3c6a1Baa584eEc319',
      defaultReserveInterestRateStrategy:
        '0x890D23Be36B81a1388FeCF3ca0FBC05709eD90a2',
      wethGateway: '0x7CcA8EBFac13a6176C49369727e2Eb0a8c95812e',
      lendingPoolCollateralManager:
        '0x6cdb26b79716eE42944dfA1B6a9D90b56bc16B6B',
      walletBalanceProvider: '0xED0506376035b1E1d84a8fc345D91800F9a88361',
      rnbwIncentivesController: '0x1669Fd5a3cf5cB806F9e401d08849B976d878fCc',
      treasury: '0x0E944C65261EdD33e228A920A7846B0cf5c50a45',
      uiIncentiveDataProvider: '0x7eCfdE0Eb9cA7031248DfBFB49e8716d1621E810',
      uiHaloPoolDataProvider: '0x2701e942E2Ff766BC1276A0687A92bA7340E18d2'
    },
    lpAssets: {
      LP_XSGD_USDC: fxPools.LP_XSGD_USDC,
      LP_EURS_USDC: fxPools.LP_EURS_USDC
    },
    priceOracles: {
      LP_XSGD_USDC: '0xF628A9494E3dFafFcD291D946CE13CbEEB157F5D',
      LP_EURS_USDC: '0x73306Bb8208897A81E455d234FE8F7edC3b6168F'
    },
    hTokens: {
      LP_XSGD_USDC: '0x68E0665ac7D0e67a4d529C056f249fF01ea356f5',
      LP_EURS_USDC: '0x99f935949Bf7D7BA3Dbb64991fE94400fDAe2752'
    },
    variableDebtTokens: {},
    wrappedNativeToken: '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6'
  }
}

export default addresses
