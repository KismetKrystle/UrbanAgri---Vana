require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-chai-matchers");
require('@nomiclabs/hardhat-ethers');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27", 
  networks: {
    moksha: {
      url: "https://rpc.moksha.vana.org",  // Replace with actual RPC URL
      accounts: ["0x24b6a67cff13689336cb46b620fc742536ff7afc5a16ce57fb70549d3c6d495d"],
      chainId: 14800,  // Replace with Moksha Testnet's chain ID
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,  // Optional if you want to verify contracts
  },
};