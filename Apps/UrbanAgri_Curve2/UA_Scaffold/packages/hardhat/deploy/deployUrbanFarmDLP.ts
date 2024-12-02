import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { parseEther } from "../utils/helpers";

const implementationContractName = "UrbanAgriDLP";
const proxyContractName = "UrbanAgriDLPProxy";
const rewardTokenContractName = "RewardToken";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { ethers, deployments } = hre;
  const { deploy } = deployments;

  const [deployer] = await ethers.getSigners();

  const ownerAddress = process.env.OWNER_ADDRESS ?? deployer.address;
  const rewardTokenName = process.env.REWARD_TOKEN_NAME ?? "UrbanAgriRewardToken";
  const rewardTokenSymbol = process.env.REWARD_TOKEN_SYMBOL ?? "UART";
  const communityRewardPerSolution = process.env.COMMUNITY_REWARD_PER_SOLUTION
    ? parseEther(process.env.COMMUNITY_REWARD_PER_SOLUTION)
    : parseEther("1");

  console.log("Deploying UrbanAgriDLP contract...");

  // Deploy the reward token
  const rewardToken = await deploy(rewardTokenContractName, {
    from: deployer.address,
    args: [rewardTokenName, rewardTokenSymbol, deployer.address],
    log: true,
  });

  console.log(`RewardToken deployed to ${rewardToken.address}`);

  // Deploy the UrbanAgriDLP contract
  const urbanAgriDLP = await deploy(implementationContractName, {
    from: deployer.address,
    args: [
      ownerAddress,
      "Urban Agriculture DLP",
      "Data Liquidity Pool for Urban Agriculture",
      rewardToken.address,
      communityRewardPerSolution,
    ],
    proxy: {
      proxyContract: proxyContractName,
      execute: {
        init: {
          methodName: "initialize",
          args: [
            ownerAddress,
            "Urban Agriculture DLP",
            "Data Liquidity Pool for Urban Agriculture",
            rewardToken.address,
            communityRewardPerSolution,
          ],
        },
      },
    },
    log: true,
  });

  console.log(`UrbanAgriDLP deployed to ${urbanAgriDLP.address}`);

  console.log("Minting and approving reward tokens...");

  // Mint and approve reward tokens
  const rewardTokenContract = await ethers.getContractAt(rewardTokenContractName, rewardToken.address);
  const txMint = await rewardTokenContract.mint(deployer.address, parseEther("100000000"));
  await txMint.wait();
  const txApprove = await rewardTokenContract.approve(urbanAgriDLP.address, parseEther("1000000"));
  await txApprove.wait();

  console.log("Deployment completed successfully");
};

export default func;
func.tags = ["UrbanAgriDLPDeploy"];
