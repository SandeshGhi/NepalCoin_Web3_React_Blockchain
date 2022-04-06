require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/LuiGgqTKNUSvO4P9cbw1PIQLGlqW-C94',
      accounts: ['926aeabc2e2c3500e0dc58c6a400d7b85f00d3cb088c5e9ca966d2a963cca47f3'],
    },
  },
};