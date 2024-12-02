import * as dotenv from "dotenv";
dotenv.config();

import { ethers, Wallet, Contract } from "ethers";
import QRCode from "qrcode";
import { config } from "hardhat";

// Import ABI of UrbanAgriDLP and RewardToken contracts
import UrbanAgriDLPABI from '../artifacts/contracts/UrbanAgriDLP.sol/UrbanAgriDLP.json';
import RewardTokenABI from '../artifacts/contracts/RewardToken.sol/RewardToken.json';

async function main() {
  const privateKey = process.env.DEPLOYER_PRIVATE_KEY;
  if (!privateKey) {
    console.log("🚫️ You don't have a deployer account. Run yarn generate first");
    return;
  }

  // Get account from private key.
  const wallet = new Wallet(privateKey);
  const address = wallet.address;

  console.log(await QRCode.toString(address, { type: "terminal", small: true }));
  console.log("Public address:", address, "\n");

  // Balance and contract info on each network
  const availableNetworks = config.networks;

  for (const networkName in availableNetworks) {
    try {
      const network = availableNetworks[networkName];
      if (!("url" in network)) continue;

      const provider = new ethers.JsonRpcProvider(network.url);
      await provider._detectNetwork();

      const balance = await provider.getBalance(address);
      console.log("--", networkName, "-- 📡");
      console.log("   balance:", +ethers.formatEther(balance));
      console.log("   nonce:", +(await provider.getTransactionCount(address)));

      // UrbanAgriDLP Contract Information
      const urbanAgriDLPAddress = process.env[`URBAN_AGRI_DLP_ADDRESS_${networkName.toUpperCase()}`];
      if (urbanAgriDLPAddress) {
        const urbanAgriDLPContract = new Contract(urbanAgriDLPAddress, UrbanAgriDLPABI.abi, provider);
        const dlpName = await urbanAgriDLPContract.name();
        const dlpDescription = await urbanAgriDLPContract.description();
        console.log("   UrbanAgriDLP Contract:");
        console.log("      Address:", urbanAgriDLPAddress);
        console.log("      Name:", dlpName);
        console.log("      Description:", dlpDescription);

        // RewardToken Information
        const rewardTokenAddress = await urbanAgriDLPContract.rewardToken();
        const rewardTokenContract = new Contract(rewardTokenAddress, RewardTokenABI.abi, provider);
        const tokenName = await rewardTokenContract.name();
        const tokenSymbol = await rewardTokenContract.symbol();
        const tokenBalance = await rewardTokenContract.balanceOf(address);
        console.log("   Reward Token:");
        console.log("      Address:", rewardTokenAddress);
        console.log("      Name:", tokenName);
        console.log("      Symbol:", tokenSymbol);
        console.log("      Balance:", ethers.formatEther(tokenBalance));

        // Additional UrbanAgriDLP stats
        const totalStaked = await urbanAgriDLPContract.totalStaked();
        const challengeCount = await urbanAgriDLPContract.getChallengeCount();
        const solutionCount = await urbanAgriDLPContract.getSolutionCount();
        console.log("   UrbanAgriDLP Stats:");
        console.log("      Total Staked:", ethers.formatEther(totalStaked));
        console.log("      Challenge Count:", challengeCount.toString());
        console.log("      Solution Count:", solutionCount.toString());
      } else {
        console.log("   UrbanAgriDLP not deployed on this network");
      }

    } catch (e) {
      console.log("Can't connect to network", networkName);
    }
  }
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
