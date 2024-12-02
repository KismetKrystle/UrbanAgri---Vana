import { ethers } from "hardhat";
import { RewardToken__factory } from "../typechain-types";

async function main() {
  const [signer] = await ethers.getSigners();
  const tokenAddress = process.env.REWARD_TOKEN_ADDRESS;

  const rewardToken = RewardToken__factory.connect(tokenAddress, signer);

  const balance = await rewardToken.balanceOf(signer.address);
  console.log(`Current balance: ${ethers.formatEther(balance)} UART`);

  // Mint more tokens (if the contract allows)
  await rewardToken.mint(signer.address, ethers.parseEther("1000"));
  
  const newBalance = await rewardToken.balanceOf(signer.address);
  console.log(`New balance: ${ethers.formatEther(newBalance)} UART`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
