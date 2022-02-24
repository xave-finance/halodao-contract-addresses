const addresses: AddressCollection = {
  protocol: {
    RNBW: '0x357bdb97FB9555bede5ed5201dBD15a8f3f6B7B8',
    xRNBW: '0xC1cFbAdE2df5fe70C18273F926553D9d2c8f944C'
  },
  rewards: {
    ammRewards: '0xf3585984B956f2A26694ee1BAede7eAB658A5e7E'
  },
  ammV2: {
    vault: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
    pools: {
      enabled: [
        '0x4B4404E80bb3Ae9E342B8aC3A95eF014AE7F9E48' // fxPHP:USDC
      ],
      disabled: []
    }
  },
  tokens: {
    USDC: '0x9875C5C44C10e24AEa48C422f819c5c8f933701D',
    fxPHP: '0x2BFD80c4E72164F62515850cec591D06AB857c65'
  }
}

export default addresses
