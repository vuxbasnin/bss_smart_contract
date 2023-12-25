require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: '0.8.21',
    networks: {
        bsctest: {
            url: 'https://data-seed-prebsc-1-s1.binance.org:8545',
            accounts: [process.env.PRIV_KEY],
        },
        ethtest: {
            url: `https://sepolia.infura.io/v3/${process.env.ALCHEMY_API_KEY}`,
            accounts: [process.env.GOERLI_PRIVATE_KEY],
        },
    },
    etherscan: {
        apiKey: process.env.API_KEY_BSC,
    },
};
