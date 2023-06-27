require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/CZacSYVuqT6zNKsLFeRyik9kNzevphRt',
      accounts: ['6c65c5bca7c4e1b839a2ec4ed648347a21680dc9a2fb79b85165078e884e47e3'],
    },
  },
};