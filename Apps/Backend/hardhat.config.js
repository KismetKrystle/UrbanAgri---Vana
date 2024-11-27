require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-chai-matchers");


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27", 
  networks: {
    moksha: {
      url: "https://rpc-moksha-testnet-url",  // Replace with actual RPC URL
      accounts: [`0x${YOUR_PRIVATE_KEY}`],
      chainId: 1234,  // Replace with Moksha Testnet's chain ID
    },
  },
};