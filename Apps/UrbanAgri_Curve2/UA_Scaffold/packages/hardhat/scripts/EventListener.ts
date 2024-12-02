import { ethers } from "hardhat";
import { UrbanAgriDLP__factory } from "../typechain-types";

async function main() {
  const [signer] = await ethers.getSigners();
  const contractAddress = process.env.URBAN_AGRI_DLP_ADDRESS;

  const urbanAgriDLP = UrbanAgriDLP__factory.connect(contractAddress, signer);

  urbanAgriDLP.on("ChallengeCreated", (challengeId, creator, description, event) => {
    console.log(`New challenge created: ${challengeId} - ${description}`);
  });

  urbanAgriDLP.on("SolutionSubmitted", (challengeId, solutionId, solver, description, event) => {
    console.log(`New solution submitted for challenge ${challengeId}: ${solutionId} - ${description}`);
  });

  console.log("Listening for events... Press Ctrl+C to exit");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
