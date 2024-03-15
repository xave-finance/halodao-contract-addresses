import { AddressCollection, ZERO_ADDRESS } from './types'

const tokens = {
  USDC: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
  USDC_NATIVE: '0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359',
  XSGD: '0xDC3326e71D45186F113a2F448984CA0e8D201995',
  indexUSDC: '0x35b51Ff33bE10a9a741e9C9d3f17585e4b7D15C0',
  XIDR: '0x2c826035c1C36986117A0e949bD6ad4baB54afE2',
  DAI: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
  EURS: '0xE111178A87A3BFf0c8d18DECBa5798827539Ae99',
  USDT: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
  fakeUSDC: '0xd92295aDCE5B6961853394Ad05fb4670012D8c60',
  fakeFxPHP: '0xe1Ca353a88a8822ed95293a7E76bd20eEA2ff662',
  fakeXSGD: '0x7112AE5d61eb28c7b00413882B59b7F796e2A505',
  fakeEURS: '0xBb54874397Beb2Dd8673eb3B8Cd7C07d54bbd02D',
  BAL: '0x9a71012b13ca4d3d0cdc72a177df3ef03b0e76a3', // Balancer governance token
  'bb-a-usd': '0x48e6B98ef6329f8f0A30eBB8c7C960330d648085', // balancer ComposableStablePool
  'bb-a-USDC': '0xF93579002DBE8046c43FEfE86ec78b1112247BB8', // balancer USDC:aUSDC AaveLinearPool
  'bb-a-DAI': '0x178E029173417b1F9C8bC16DCeC6f697bC323746', // balancer DAI:aDAI AaveLinearPool
  'bb-a-USDT': '0xFf4ce5AAAb5a627bf82f4A571AB1cE94Aa365eA6', // balancer USDT:aUSDT AaveLinearPool
  BRLA: '0xE6A537a407488807F0bbeb0038B79004f19DDDFb',
  VNXAU: '0xC8bB8eDa94931cA2F20EF43eA7dBD58E68400400',
  VCHF: '0xCdB3867935247049e87c38eA270edD305D84c9AE',
  VEUR: '0xE4095d9372E68d108225c306A4491cacfB33B097',
  PAXG: '0x553d3D295e0f695B9228246232eDF400ed3560B5',
  TUSD: '0x2e1AD108fF1D8C782fcBbB89AAd783aC49586756',
  FRAX: '0x45c32fA6DF82ead1e2EF74d17b76547EDdFaFF89',
  LUSD: '0x23001f892c0C82b79303EDC9B9033cD190BB21c7',
  agEUR: '0xE0B52e49357Fd4DAf2c15e02058DCE6BC0057db4',
  LINK: '0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39',
  WBTC: '0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6',
  UNI: '0xb33EaAd8d922B1083446DC23f610c2567fB5180f',
  LDO: '0xC3C7d422809852031b44ab29EEC9F1EfF2A58756',
  MKR: '0x6f7C932e7684666C9fd1d44527765433e01fF61d',
  RNDR: '0x61299774020dA444Af134c82fa83E3810b309991',
  GRT: '0x5fe2B58c013d7601147DcdD68C143A77499f5531',
  rETH: '0x0266F4F08D82372CF0FcbCCc0Ff74309089c74d1',
  AAVE: '0xD6DF932A45C0f255f85145f286eA0b292B21C90B',
  SNX: '0x50B728D8D964fd00C2d0AAD81718b71311feF68a',
  SAND: '0xBbba073C31bF03b8ACf7c28EF0738DeCF3695683',
  APE: '0xB7b31a6BC18e48888545CE79e83E06003bE70930',
  MANA: '0xA1c57f48F0Deb89f569dFbE6E2B7f46D33606fD4',
  FXS: '0x1a3acf6D19267E2d3e7f898f42803e90C9219062',
  frxETH: '0xEe327F889d5947c1dc1934Bb208a1E792F953E96',
  Bonk: '0xe5B49820e5A1063F6F4DdF851327b5E8B2301048',
  WOO: '0x1B815d120B3eF02039Ee11dC2d33DE7aA4a8C603',
  RPL: '0x7205705771547cF79201111B4bd8aaF29467b9eC',
  AXL: '0x6e4E624106Cb12E168E6533F8ec7c82263358940',
  sfrxETH: '0x6d1FdBB266fCc09A16a22016369210A15bb95761',
  CRV: '0x172370d5Cd63279eFa6d502DAB29171933a610AF',
  NEXO: '0x41b3966B4FF7b427969ddf5da3627d6AEAE9a48E',
  fxcbETH: '0x4b4327dB1600B8B1440163F667e199CEf35385f5',
  GMT: '0x714DB550b574b3E927af3D93E26127D15721D4C2',
  '1INCH': '0x9c2C5fd7b07E95EE044DDeba0E97a665F142394f',
  TXAU: '0xA6da8C8999c094432c77E7d318951D34019AF24B',
  TXAG: '0x57fCbd6503C8BE3B1AbAD191Bc7799ef414A5b31',
  TXPT: '0x2e6978ceeA865948f4c5685e35AEC72652e3Cb88',
  USDGLO: '0x4F604735c1cF31399C6E711D5962b2B3E0225AD3',
  SBC: '0xfdcC3dd6671eaB0709A4C0f3F53De9a333d80798'
}

const curves = {
  HLP_XSGD_USDC: '0x8123C64D6607412C7Ac9E880f12245ef22558b14',
  HLP_TAGPHP_USDC: '0x6156f030B877344470BAC075a708d7E27602cc17',
  HLP_WTGBP_USDC: '0xbF772a745533f6bAd97C58D2cb6B241eF7487242',
  HLP_WTCAD_USDC: '0xaEad273bc7E17DD6951ceD3264B1dBa8A19114C2',
  HLP_WTAUD_USDC: '0x95AB308bE1e209eB6FfdD3279B5ea71D365AD30B'
}

const fxPools = {
  LP_XSGD_USDC_INACTIVE: '0x726E324c29a1e49309672b244bdC4Ff62A270407',
  LP_DAI_USDC: '0x216B176513C500dBE1D677939103E350A9373a39',
  LP_EURS_USDC: '0xfd24Afa5416C8De94FDbaf344840F524155A4DD0',
  'LP_XSGD_bb-a-usd': '0x882c7A84231484B3E9F3fD45aC04b1EB5d35b076',
  LP_BRLA_USDC_INACTIVE: '0x8630Bd161689403AEA635f830E9eF5496e7E0bC1',
  //LP_VNXAU_USDC: '0x8A8275eDA88a6F4cC2Fa6A41837C1B5Dc7A3b095', // uses chainlink XAU/USD official oracle
  LP_VNXAU_USDC_INACTIVE: '0xE93F9dD10b0ba38831CBa4D5a9D092E22Db130eC', // uses Xave's XAU/USD gram oracle
  LP_VCHF_USDC_INACTIVE: '0x7E8c6D9db2D1B522f32d050257DF0dC524593A07',
  LP_VEUR_USDC_INACTIVE: '0xE5093fA1F24619eb16c704a808fAd66Fb65a1305',
  LP_XSGD_USDC: '0xE6D8FcD23eD4e417d7e9D1195eDf2cA634684e0E',
  LP_BRLA_USDC: '0x427333B9F9D8Bd0B67fd5fC2213371DB0Ef178e1',
  LP_VCHF_USDC: '0x32cc63fFECCb7C0508d64E4d37145313cC053B27',
  LP_VNXAU_USDC: '0x6Bf004BeE6346852a29239B386aB4239FfbD66dE',
  LP_SBC_USDC: '0xA5B235fB345B5744cC285045C8118A92F4aeF58B'
}

const poolIds = {
  XSGD_USDC_INACTIVE:
    '0x726e324c29a1e49309672b244bdc4ff62a270407000200000000000000000702',
  DAI_USDC:
    '0x216b176513c500dbe1d677939103e350a9373a390002000000000000000008da',
  EURS_USDC:
    '0xfd24afa5416c8de94fdbaf344840f524155a4dd00002000000000000000008db',
  'LP_XSGD_bb-a-usd':
    '0x882C7A84231484B3E9F3FD45AC04B1EB5D35B076000200000000000000000A91',
  'bb-a-usd':
    '0x48e6b98ef6329f8f0a30ebb8c7c960330d64808500000000000000000000075b',
  'bb-a-USDC':
    '0xf93579002dbe8046c43fefe86ec78b1112247bb8000000000000000000000759',
  'bb-a-DAI':
    '0x178e029173417b1f9c8bc16dcec6f697bc323746000000000000000000000758',
  'bb-a-USDT':
    '0xff4ce5aaab5a627bf82f4a571ab1ce94aa365ea600000000000000000000075a',
  BRLA_USDC_INACTIVE:
    '0x8630bd161689403aea635f830e9ef5496e7e0bc1000200000000000000000c35',
  // VNXAU_USDC:
  // '0x8a8275eda88a6f4cc2fa6a41837c1b5dc7a3b095000200000000000000000c36' // uses chainlink XAU/USD official oracle
  VNXAU_USDC_INACTIVE:
    '0xe93f9dd10b0ba38831cba4d5a9d092e22db130ec000200000000000000000c44', // uses Xave's XAU/USD gram oracle
  VCHF_USDC_INACTIVE:
    '0x7e8c6d9db2d1b522f32d050257df0dc524593a07000200000000000000000c4e',
  VEUR_USDC_INACTIVE:
    '0xe5093fa1f24619eb16c704a808fad66fb65a1305000200000000000000000c50',
  XSGD_USDC:
    '0xe6d8fcd23ed4e417d7e9d1195edf2ca634684e0e000200000000000000000caf',
  BRLA_USDC:
    '0x427333b9f9d8bd0b67fd5fc2213371db0ef178e1000200000000000000000cb0',
  VCHF_USDC:
    '0x32cc63ffeccb7c0508d64e4d37145313cc053b27000200000000000000000cb4',
  VNXAU_USDC:
    '0x6bf004bee6346852a29239b386ab4239ffbd66de000200000000000000000cb5',
  SBC_USDC: '0xa5b235fb345b5744cc285045c8118a92f4aef58b000200000000000000000e15'
}

const addresses: AddressCollection = {
  ops: {
    multisig: '0xC76Ec28801ad09020fB89da48306176e56960CC5',
    deployer: '0x009c4ba01488A15816093F96BA91210494E2C644'
  },
  protocol: {
    XAV: ZERO_ADDRESS,
    RNBW: '0x18e7bDB379928A651f093ef1bC328889b33A560c',
    xRNBW: '0xc104e54803abA12f7a171a49DDC333Da39f47193'
  },
  rewards: {
    ammRewards: '0x972127aFf8e6464e50eFc0a2aD344063355AE424'
  },
  ammV1: {
    factory: '0x6bfBc74eb37d44DE6E44B0B63F04CbA626009Ff5',
    router: '0x26f2860cdeB7cC785eE5d59a5Efb2D0D3842C39D',
    zap: '0xA187b61e9F8f6E58bB0eB8D88cAda05710143Ce8',
    curves: {
      all: curves,
      enabled: [curves.HLP_XSGD_USDC, curves.HLP_TAGPHP_USDC],
      disabled: [
        curves.HLP_WTGBP_USDC,
        curves.HLP_WTCAD_USDC,
        curves.HLP_WTAUD_USDC
      ]
    }
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
          address: fxPools.LP_XSGD_USDC,
          poolId: poolIds.XSGD_USDC,
          gauges: {
            main: '0x2B7Bd050d7E0341fB49fF96f32eA59Bd8087d487',
            child: '0x3DD7F73d807b7AA4A1112b30319201e9798D27C4'
          },
          rewardDistributor: '0x15308f419f141baf659160ADAC3255bff7f6B8C5'
        },
        {
          assets: [tokens.BRLA, tokens.USDC],
          address: fxPools.LP_BRLA_USDC,
          poolId: poolIds.BRLA_USDC
        },
        {
          assets: [tokens.VCHF, tokens.USDC],
          address: fxPools.LP_VCHF_USDC,
          poolId: poolIds.VCHF_USDC
        },
        {
          assets: [tokens.VNXAU, tokens.USDC],
          address: fxPools.LP_VNXAU_USDC,
          poolId: poolIds.VNXAU_USDC
        },
        {
          assets: [tokens.SBC, tokens.USDC],
          address: fxPools.LP_SBC_USDC,
          poolId: poolIds.SBC_USDC
        }
      ],
      disabled: [
        {
          assets: [tokens.XSGD, tokens.USDC],
          address: fxPools.LP_XSGD_USDC_INACTIVE,
          poolId: poolIds.XSGD_USDC_INACTIVE,
          gauges: {
            main: '0x145011e0C04805E11BEf23c1EEd848Faf49bB779', // PolygonRootGauge
            child: '0xA7165E1E3dEfe55DAdA5C4289268d57faBA6dAd2', // ChildLiquidityGauge

            // deprecated as of June 2023 in favor of ChildLiquidityGauge (keeping it here for migration)
            l2: {
              rewardsOnly: '0x3aC845345fc2d51A3006Ed384055cD5ACde86441', // RewardsOnlyGauge
              rewardsHelper: '0xaEb406b0E430BF5Ea2Dc0B9Fe62E4E53f74B3a33' // ChildChainGaugeRewardHelper
            }
          }
        },
        {
          assets: [tokens.BRLA, tokens.USDC],
          address: fxPools.LP_BRLA_USDC_INACTIVE,
          poolId: poolIds.BRLA_USDC_INACTIVE
        },
        {
          assets: [tokens.VNXAU, tokens.USDC],
          address: fxPools.LP_VNXAU_USDC_INACTIVE,
          poolId: poolIds.VNXAU_USDC_INACTIVE
        },
        {
          assets: [tokens.VCHF, tokens.USDC],
          address: fxPools.LP_VCHF_USDC_INACTIVE,
          poolId: poolIds.VCHF_USDC_INACTIVE
        }
      ],
      hidden: [
        {
          assets: [tokens.DAI, tokens.USDC],
          address: fxPools.LP_DAI_USDC,
          poolId: poolIds.DAI_USDC
        },
        {
          assets: [tokens.EURS, tokens.USDC],
          address: fxPools.LP_EURS_USDC,
          poolId: poolIds.EURS_USDC
        },
        {
          assets: [tokens.XSGD, tokens['bb-a-usd']],
          address: fxPools['LP_XSGD_bb-a-usd'],
          poolId: poolIds['LP_XSGD_bb-a-usd']
        },
        {
          assets: [tokens.VEUR, tokens.USDC],
          address: fxPools.LP_VEUR_USDC_INACTIVE,
          poolId: poolIds.VEUR_USDC_INACTIVE
        }
      ],
      ['bb-a-usd']: {
        assets: [tokens['bb-a-USDC'], tokens['bb-a-DAI'], tokens['bb-a-USDT']],
        poolId: poolIds['bb-a-usd'],
        subPools: {
          [tokens['bb-a-USDC']]: {
            assets: [tokens['USDC']],
            poolId: poolIds['bb-a-USDC']
          },
          [tokens['bb-a-USDT']]: {
            assets: [tokens['USDT']],
            poolId: poolIds['bb-a-USDT']
          },
          [tokens['bb-a-DAI']]: {
            assets: [tokens['DAI']],
            poolId: poolIds['bb-a-DAI']
          }
        }
      }
    },
    fxPoolFactory: '0x627D759314D5c4007b461A74eBaFA7EBC5dFeD71',
    fxPoolDeployer: '0xF169c1Ae8De24Da43a3dC5c5F05De412b4848bD3',
    fxPoolDeployerLib: '0x9B67696f6335702B46075aE3A99101856934e1bE',
    baseAssimilatorTemplate: '0x106fd23aE72Eb9a02Ea2056f2b10F0d32394b003',
    proportionalLiquidity: '0x7C68b34235b1166E121Fbb99c7316C2a3361ba8c',
    // assimilatorFactory: '0x9CB3961ec9E54563602d96D2b3332028aa54dd13', // has the older VNXAU assimilator
    assimilatorFactory: '0xA7BEe366876EF85f8B6aD84D612B8905e880F69d', // deployed 10/02/2023
    swapLibrary: '0x4d548b7604ED13973c8f542e9059Ecb5731a59dd',
    oracles: {
      USDC: '0xfE4A8cc5b5B2366C1B58Bea3858e81843581b2F7',
      USDC_NATIVE: '0xfE4A8cc5b5B2366C1B58Bea3858e81843581b2F7',
      fxPHP: '0x218231089Bebb2A31970c3b77E96eCfb3BA006D1',
      EURS: '0x73366Fe0AA0Ded304479862808e02506FE556a98',
      XSGD: '0x8CE3cAc0E6635ce04783709ca3CC4F5fc5304299',
      DAI: '0x4746DeC9e833A82EC7C2C1356372CcF2cfcD2F3D',
      USDT: '0x0A6513e40db6EB1b165753AD52E80663aeA50545',
      'bb-a-usd': '0x889E8F2b15A1B462dC74C5F66eF90C3caa46A37D',
      BRLA: '0xB90DA3ff54C3ED09115abf6FbA0Ff4645586af2c', // Chainklink official BRL/USD oracle
      //VNXAU: '0x0C466540B2ee1a31b441671eac0ca886e051E410' // Chainklink official XAU/USD oracle
      VNXAU: '0xff551F4AFDCB6eb1306Bf226b30593393dfb4F95', // Xave XAU/USD "gram" oracle
      VCHF: '0xc76f762CedF0F78a439727861628E0fdfE1e70c2', // Chainklink official CHF/USD oracle
      VEUR: '0x73366Fe0AA0Ded304479862808e02506FE556a98', // Chainklink official EUR/USD oracle
      XAU: '0xff551F4AFDCB6eb1306Bf226b30593393dfb4F95', // Reused VNXAU oracle
      XAG: '0x969BB0C68F9A4d0F913938c560142Fd476E9Bf05', // Xave XAG/USD "fram" oracle
      XPT: '0xD33f96C6Edf4a683afc89d206CF4867B5650CF91', // Xave XPT/USD "fram" oracle
      USD: '0x142CA0037eF73AEe701817a1C3eF15dB794d3162' // Xave Generic USD oracle
    },
    assimilators: {
      'bb-a-usd_USD': '0x04E2a492AACbbaC02164da3EEC6404893cA08998',
      'XSGD_bb-a-usd_USD': '0xBef2D248894648A6Fcb214C395044616150C6cEc',
      BRLA_USD: '0x55Ed7fA80A563B241E80C16DB52CAce5acfb136f',
      //VNXAU_USD: '0x6C181bf2E846051C1528543e489E718E09dccc17' // uses official XAU/USD chainlink oracle
      VNXAU_USD: '0x278a5389b39E4814aB8f60559f9E0D1694E7Ea38', // uses Xave's XAU/USD gram oracle
      VCHF_USD: '0xBeB0D490a418e96437b755d4404522ADF054D4E0',
      VEUR_USD: '0x520427FAFdED1aa829922DC4A2BE8fA54B98eCFF',
      USDC_USD: '0xfbdc1B9E50F8607E6649d92542B8c48B2fc49a1a', // from the fxpools deployed
      USDC_NATIVE_USD: '0xfbdc1B9E50F8607E6649d92542B8c48B2fc49a1a' // from the fxpools deployed
    },
    protocolFeesDistributor: '0x06Cc3a57ad3Afc8b9594913468F2F3d41A14a369',
    balancerProtocolFeeCollector: '0xce88686553686DA562CE7Cea497CE749DA109f9F',
    balancerMinter: '0x47b489bf5836f83abd928c316f8e39bc0587b020', // L2BalancerPseudoMinter
    fxPoolMigrator: '0x27A2167c3e40A84650B0444f4841D059dE3c9608'
  },
  tokens,
  lendingMarket: {
    protocol: {
      lendingPoolAddressesProvider:
        '0x68aeB9C8775Cfc9b99753A1323D532556675c555',
      lendingPoolAddressesProviderRegistry:
        '0xd25792c918b38dEE6e7A96cB609718ce5F3E249c',
      reserveLogic: '0xA63d7B6d467E2Bf3337e651fD449c3E893E67BcF',
      genericLogic: '0xE3AA18f8E28efd1d99D34d30506e7e834704b1D0',
      validationLogic: '0x696D459Af5E0393bc9C264c2E728b6194B9C82CF',
      lendingPoolImpl: '0x404cbCb5343719A99778d8CB73221C454aF3eEEC',
      lendingPool: '0x78a5B2B028Fa6Fb0862b0961EB5131C95273763B',
      lendingPoolProxy: '0x78a5B2B028Fa6Fb0862b0961EB5131C95273763B',
      lendingPoolConfiguratorImpl: '0x5B48d6f407D6451DcCe127c91a62D459b09FAc41',
      lendingPoolConfigurator: '0x0228bda708F5BA3b188D9CC8588B7dA4E254D492',
      stableAndVariableTokensHelper:
        '0x7f526df41675Ba8BA52a9be858135b84C93008c0',
      aTokensAndRatesHelper: '0x856A694C4E6d894B591ce71409405801dc7E8F99',
      aaveOracle: '0x0200889C2733bB78641126DF27A0103230452b62',
      lendingRateOracle: '0x25290edB1633c6b60a24C5FB3a321b91a67Cafe7',
      aaveProtocolDataProvider: '0xdad05Ad0CbB286B6d5B4fCd6DACC1c952869CdBB',
      stableDebtToken: '0x1acCEADC96017815328ebc57f0d0D8E27775851b',
      variableDebtToken: '0x56fA8ED3d0411A88629b83C2C1D95792328FD79A',
      aToken: '0x0beBf7C0504cf3eCE4c7f1a4AB70F4Ccc34Cbdb1',
      defaultReserveInterestRateStrategy:
        '0x03199D8D9AEBa9844A4c12D9d4a6FAd6c2B3675e',
      wethGateway: '0x2Ef9AB2ce7Bd97b1e893583ba91aCA6A883dF0F2',
      lendingPoolCollateralManager:
        '0xDF512Eb2468D4938D81fA1F15d91567c5EdEe6a8',
      walletBalanceProvider: '0x68D2eEe46Cb758B90BbCA985C95d1f7f8508eCd3',
      rnbwIncentivesController: '0x19EEF75223F5E191D1022a11dAf7f9c29e9473f3',
      treasury: '0x5560659d9a4aB330dE2112fc8Ee0989857197728',
      uiIncentiveDataProvider: '0x63848b3d2340796B0E81F5daeF688f73Ca06e537',
      uiHaloPoolDataProvider: '0x755E39Ba1a425548fF8990A5c223C34C5ce5f8a5'
    },
    lpAssets: {
      LP_XSGD_USDC: fxPools.LP_XSGD_USDC
    },
    priceOracles: {
      LP_XSGD_USDC: '0xbca5c841eC9cC6Bd54ee18450eAe3B4D7b68146b'
    },
    hTokens: {
      LP_XSGD_USDC: '0xF2505AA3efAd1Fef6c36464329b50652ABC7e385',
      USDC: '0x2eB4157CeFeb13C6E38035A11244E19BC396e97C'
    },
    variableDebtTokens: {
      USDC: '0x4870f9c3676FD543AfEe6630B5f923c28e38Ad9f'
    },
    wrappedNativeToken: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270'
  },
  strats: [
    {
      shortName: 'XSGD Thetanuts',
      fullName: 'XSGD-USDC-indexUSDC',
      address: '0x86C6A426508999C58fBc1aCA2bc244e08E7F4Ec6',
      pool: {
        address: fxPools.LP_XSGD_USDC,
        poolId: poolIds.XSGD_USDC,
        assets: [tokens.XSGD, tokens.USDC]
      }
    },
    {
      shortName: 'USDC Lending',
      fullName: 'USDC',
      address: ZERO_ADDRESS,
      USDC: tokens.USDC
    }
    // {
    //   shortName: 'XSGD BAL Rewards',
    //   fullName: 'XSGD-USDC-BAL',
    //   address: '0x6d5040f703c82c6357701934baf9fdfc9409a972',
    //   pool: {
    //     address: fxPools.LP_XSGD_USDC,
    //     poolId: poolIds.XSGD_USDC,
    //     assets: [tokens.XSGD, tokens.USDC]
    //   }
    // }
  ]
}

export default addresses
