import { deployments, ethers } from "hardhat";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { verifyContract } from "./helpers";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const [deployer] = await ethers.getSigners();
  const ownerAddress = process.env.OWNER_ADDRESS ?? deployer.address;
  const tokenContractName = "UAVToken";
  const tokenName = process.env.TOKEN_NAME ?? "Urban Agri Token";
  const tokenSymbol = process.env.TOKEN_SYMBOL ?? "UAV";

  console.log("");
  console.log("");
  console.log("");
  console.log("**************************************************************");
  console.log("**************************************************************");
  console.log("**************************************************************");
  console.log(`********** Deploying ${tokenContractName} **********`);

  const tokenDeploy = await deployments.deploy(tokenContractName, {
    from: deployer.address,
    args: [tokenName, tokenSymbol, ownerAddress],
    log: true,
  });

  await verifyContract(tokenDeploy.address, [tokenName, tokenSymbol, ownerAddress]);
};

export default func;
func.tags = ["TokenDeploy"];
