import { AddressCollection, ZERO_ADDRESS } from './types'

const tokens = {
  USDC: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
  fxPHP: '0x3d147cD9aC957B2a5F968dE9d1c6B9d0872286a0',
  XSGD: '0x70e8dE73cE538DA2bEEd35d14187F6959a8ecA96',
  UST: '0xa693b19d2931d498c5b318df961919bb4aee87a5',
  TAUD: '0x00006100F7090010005F1bd7aE6122c3C2CF0090',
  AMPL: '0xD46bA6D942050d489DBd938a2C909A5d5039A161',
  indexUSDC: '0x075dA7e9EFEA6813aB0B2680423df75150120d12',
  EURS: '0xdB25f211AB05b1c97D595516F45794528a807ad8',
  TCAD: '0x00000100F2A2bd000715001920eB70D229700085',
  TGBP: '0x00000000441378008EA67F4284A57932B1c000a5',
  DAI: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
  BAL: '0xba100000625a3754423978a60c9317c58a424e3D', // Balancer governance token
  fakeUSDC: '0x7558f7F023d676841ab118D4637a68943e650196', // fake mintable token
  fakeXSGD: '0x3E58d34C8cf108897b1296eF462AD18522f7e122', // fake mintable token
  fakeFxPHP: '0x02510A18068B57B010b4CBc2E02D8CE5cCBdf8F5' // fake mintable token
}

const curves = {
  HLP_TCAD_USDC: '0xE15E50fF9d52beC41D53d3173F2ed40834D455f4',
  HLP_XSGD_USDC: '0x64DCbDeb83e39f152B7Faf83E5E5673faCA0D42A',
  HLP_TGBP_USDC: '0x2ED09E2961D72659E4002ba8C2BaDfedC7db19B7',
  HLP_UST_USDC: '0x868084406449bda10a5bd556fb33cef5086b0797',
  HLP_TAUD_USDC: '0x11816335DEe6763e2A7B6080b2b2980Eac7F85E4',
  HLP_fxPHP_USDC: '0x20E1d8Daf58358CF11BE5616946e1dF55F1eF8B0',
  HLP_tagPHP_USDC: '0xc3CfdA7061b729265F58BdC07564f1cbD6C41FBc'
}

const fxPools = {
  LP_XSGD_USDC: '0x55bEC22f8f6C69137cEAf284d9B441Db1B9bFedc',
  LP_DAI_USDC: '0x66bB9D104c55861feb3Ec3559433F01f6373c966',
  LP_EURS_USDC: '0xAd0e5e0778cAC28f1ff459602b31351871B5754a'
}

const fxPoolIds = {
  XSGD_USDC:
    '0x55bec22f8f6c69137ceaf284d9b441db1b9bfedc0002000000000000000003cd',
  DAI_USDC:
    '0x66bb9d104c55861feb3ec3559433f01f6373c9660002000000000000000003cf',
  EURS_USDC:
    '0xad0e5e0778cac28f1ff459602b31351871b5754a0002000000000000000003ce'
}

const addresses: AddressCollection = {
  protocol: {
    XAV: '0x40370aed88933021e20cf7c4d67e00417cda2202',
    RNBW: '0xe94b97b6b43639e238c851a7e693f50033efd75c',
    xRNBW: '0x47BE779De87de6580d0548cde80710a93c502405'
  },
  rewards: {
    ammRewards: '0x9cFf4A10b6Fb163a4DF369AaFed9d95838222ca6',
    rewardsManager: '0xdb3542577aD5B179f6E09C2F092900d416D052D7',
    epochManager: '0xfAe4cfec9f2570f35d7D6Bef455ECCe3DCa83551'
  },
  ammV1: {
    factory: '0xFA505d02269bF4Ea59355a4e37fBd882122717e5',
    router: '0x585B52fE4712a74404abA83dEB09A0E087D80802',
    zap: '0xE950eC7Fc508dd86fD9B36671f6B1602007D5B72',
    libraries: {
      curves: '0x99b8A93af34efAcb9A71Dd7eBC656365a2d65239',
      orchestrator: '0xeB1879EDc723a1DbA37fd480878CaB5706F0B299',
      proportionalLiquidity: '0xa1c6506Ff7A9C9d510daDaed6798529af2d2251B',
      swaps: '0x85476aB9523168d8143A20Bb873e33Ee7E522FbF',
      viewLiquidity: '0x9f9d0Bb490f7FA5894FFbd07dc46F858BD5B968b'
    },
    curves: {
      all: curves,
      enabled: [
        curves.HLP_TCAD_USDC,
        curves.HLP_XSGD_USDC,
        curves.HLP_TGBP_USDC
      ],
      disabled: [
        curves.HLP_TAUD_USDC,
        curves.HLP_fxPHP_USDC,
        curves.HLP_tagPHP_USDC,
        curves.HLP_UST_USDC
      ]
    },
    assimilators: {
      USDC_USD: '0x311FDdE361e6258e9730c6147aAf584aC0F9c59A',
      XSGD_USD: '0xCaE2502093413290bc0E5c2CfA1039C661103bf1'
    }
  },
  ammV2: {
    vault: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
    pools: {
      all: fxPools,
      genesis: [],
      enabled: [
        {
          assets: [tokens.EURS, tokens.USDC],
          address: fxPools.LP_EURS_USDC,
          poolId: fxPoolIds.EURS_USDC,
          gauges: {
            main: '0xE629c43BCad1029E12ED51432B9dd3432b656cc9' // LiquidityGauge
          }
        }
      ],
      disabled: [
        {
          assets: [tokens.DAI, tokens.USDC],
          address: fxPools.LP_DAI_USDC,
          poolId: fxPoolIds.DAI_USDC
        }
      ],
      hidden: [
        {
          assets: [tokens.XSGD, tokens.USDC],
          address: fxPools.LP_XSGD_USDC,
          poolId: fxPoolIds.XSGD_USDC
        }
      ]
    },
    fxPoolFactory: '0x81fE9e5B28dA92aE949b705DfDB225f7a7cc5134',
    fxPoolDeployer: ZERO_ADDRESS,
    fxPoolDeployerLib: ZERO_ADDRESS,
    baseAssimilatorTemplate: ZERO_ADDRESS,
    proportionalLiquidity: '0xB741984C8ce63F4cbD923842Ee0B9e32Dd9df48c',
    assimilatorFactory: '0x5127fa6aEb261d519B9E843345265e2845dF449D',
    swapLibrary: '0x390Bcd94446fcC6DA992995c66b58e3A7a7b279C',
    oracles: {
      USDC: '0x8fFfFfd4AfB6115b954Bd326cbe7B4BA576818f6',
      fxPHP: '0x9481e7ad8BE6BbB22A8B9F7B9fB7588d1df65DF6',
      XSGD: '0xe25277fF4bbF9081C75Ab0EB13B4A13a721f3E13',
      EURS: '0xb49f677943BC038e9857d61E7d053CaA2C1734C1',
      DAI: '0xAed0c38402a5d19df6E4c03F4E2DceD6e29c1ee9'
    },
    balancerProtocolFeeCollector: '0xce88686553686DA562CE7Cea497CE749DA109f9F',
    balancerGaugeController: '0xC128468b7Ce63eA702C1f104D55A2566b13D3ABD',
    balancerTokenAdmin: '0xf302f9F50958c5593770FDf4d4812309fF77414f',
    balancerMinter: '0x239e55F427D44C3cc793f49bFB507ebe76638a2b'
  },
  tokens,
  lendingMarket: {
    protocol: {
      lendingPoolAddressesProvider:
        '0xD8708572AfaDccE523a8B8883a9b882a79cbC6f2',
      lendingPoolAddressesProviderRegistry:
        '0xC0453222F519e6D561652367662C2D305C23Be3e',
      reserveLogic: '0xD563445537F5E83B7A2a62712c6cE1D7bA39c7b4',
      genericLogic: '0x45318D29987B70Da17C19Ac0f22c1228F42a297e',
      validationLogic: '0x89E4b3D7Cb527a661af70f26E6F874847552de81',
      lendingPool: '0x703C054D0D709bC6F4266844CEDD86384147DC27',
      lendingPoolConfiguratorImpl: '0xc8C8E23dfddb3082D50E18342D26a06a8150EB8C',
      lendingPoolConfigurator: '0xCeE5D0fb8fF915D8C089f2B05edF138801E1dB0B',
      lendingPoolProxy: '0xC73b2c6ab14F25e1EAd3DE75b4F6879DEde3968E',
      stableAndVariableTokensHelper:
        '0xA0E91e69b43021b3c6748cfe16296FF4b933bD00',
      aTokensAndRatesHelper: '0x2441b8071ecDf696B5CE272AADe08d9833DABE8A',
      aaveOracle: '0x50FDeD029612F6417e9c9Cb9a42848EEc772b9cC',
      lendingRateOracle: '0xB626E339a0EF63a15585FAAb4483a1732aaD0A94',
      aaveProtocolDataProvider: '0xa6D87C3705D17CaeC319dc8EFecdAe5a3bA518c4',
      stableDebtToken: '0xD54F92F8aAD6c872afe4Af381c4593522C58a7A4',
      variableDebtToken: '0xc6087e89146879b83Eaa1B810624D4C5A1F87A2E',
      aToken: '0x07F540613ea0B7e723ffB5978515A342a134be07',
      defaultReserveInterestRateStrategy:
        '0xb8aC63190C2B5D1397a24D48e2F419F93aa39f06',
      wethGateway: '0xa0576E91069098271951559369a31D89A123C796',
      lendingPoolCollateralManager:
        '0x9355fDFbA6acd5178F6fcBa48a4d3218F705b673',
      walletBalanceProvider: '0x11FBF40b9BD5441da7078B761B33Dae3c46f5Cc5',
      rnbwIncentivesController: '0x79C2c904D042fE2F4FDDf6DCafFE3631fB7c6b9f',
      treasury: '0xcFd794e2fEA74446B598964826f324FF9Fd5e2d9',
      uiIncentiveDataProvider: '0xB435F07C348Ae7B8122d1e50De8AF7009C9286FB',
      uiHaloPoolDataProvider: '0x6c00EC488A2D2EB06b2Ed28e1F9f12C38fBCF426'
    },
    lpAssets: {
      HLP_XSGD_USDC: curves.HLP_XSGD_USDC,
      HLP_UST_USDC: curves.HLP_UST_USDC,
      LP_EURS_USDC: fxPools.LP_EURS_USDC
    },
    priceOracles: {
      XSGD: '0xE1bA4190e8a907154A4b7EFe4c5bbF0f584847a7',
      AMPL: '0x492575FDD11a0fCf2C6C719867890a7648d526eB',
      UST: '0xa20623070413d42a5C01Db2c8111640DD7A5A03a',
      HLP_XSGD_USDC: '0xE911bA4d01b64830160284E42BfC9b9933fA19BA',
      HLP_UST_USDC: '0x6859a10034b260b80dfb4755D9AF4811045bb10f',
      LP_EURS_USDC: '0xfde37b3E9D811Fa5fC489836F3D6CDF26150778C'
    },
    hTokens: {
      HLP_XSGD_USDC: '0xA8A04EcBBCc5f1B05773A34cE8495507aD6CcA22',
      USDC: '0xd7687315a276936103Ef9912721Ed48b83eF61C0',
      LP_EURS_USDC: '0xD1FA48B76f63e9Fc80d35C999cEaC8955f0E5F68'
    },
    variableDebtTokens: {
      USDC: '0xb9c4268a13c00af2F6e20458D6252d09faD8650e'
    },
    wrappedNativeToken: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
  },
  strats: [
    {
      shortName: 'EURS Thetanuts',
      fullName: 'EURS-USDC-indexUSDC',
      address: '0x6DA973ea5154E6Bb01E97794F0c692FF39Bef4b9',
      pool: {
        address: fxPools.LP_EURS_USDC,
        poolId: fxPoolIds.EURS_USDC,
        assets: [tokens.EURS, tokens.USDC]
      }
    },
    {
      shortName: 'USDC Lending',
      fullName: 'USDC',
      address: ZERO_ADDRESS,
      USDC: tokens.USDC
    }
  ]
}

export default addresses
