import { ethers } from "hardhat";
import { UrbanAgriDLP__factory } from "../typechain-types";

async function main() {
  const [signer] = await ethers.getSigners();
  const contractAddress = process.env.URBAN_AGRI_DLP_ADDRESS;

  const urbanAgriDLP = UrbanAgriDLP__factory.connect(contractAddress, signer);

  // Example interactions
  await urbanAgriDLP.stake(ethers.parseEther("1000"));
  await urbanAgriDLP.createChallenge("Improve urban farm water efficiency");
  await urbanAgriDLP.submitSolution(1, "Implement drip irrigation system");
  await urbanAgriDLP.validateSolution(1, 1, true);

  console.log("Interactions completed successfully");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
