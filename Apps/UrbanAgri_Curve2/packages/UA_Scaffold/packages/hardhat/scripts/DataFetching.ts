import { ethers } from "hardhat";
import { UrbanAgriDLP__factory } from "../typechain-types";

async function main() {
  const [signer] = await ethers.getSigners();
  const contractAddress = process.env.URBAN_AGRI_DLP_ADDRESS;

  const urbanAgriDLP = UrbanAgriDLP__factory.connect(contractAddress, signer);

  const challengeCount = await urbanAgriDLP.getChallengeCount();
  console.log(`Total challenges: ${challengeCount}`);

  for (let i = 1; i <= challengeCount; i++) {
    const challenge = await urbanAgriDLP.getChallenge(i);
    console.log(`Challenge ${i}: ${challenge.description}`);
    
    const solutionCount = await urbanAgriDLP.getSolutionCount(i);
    console.log(`  Solutions: ${solutionCount}`);
    
    for (let j = 1; j <= solutionCount; j++) {
      const solution = await urbanAgriDLP.getSolution(i, j);
      console.log(`    Solution ${j}: ${solution.description}`);
    }
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
