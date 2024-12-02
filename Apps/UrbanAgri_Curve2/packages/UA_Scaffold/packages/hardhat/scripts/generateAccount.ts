import { ethers } from "ethers";
import { parse, stringify } from "envfile";
import * as fs from "fs";

const envFilePath = "./.env";

/**
 * Generate a new random private key and set up UrbanAgriDLP project configurations
 */
const setNewEnvConfig = (existingEnvConfig = {}) => {
  console.log("👛 Generating new Wallet");
  const randomWallet = ethers.Wallet.createRandom();

  console.log("🌱 Setting up UrbanAgriDLP project configurations");

  const newEnvConfig = {
    ...existingEnvConfig,
    DEPLOYER_PRIVATE_KEY: randomWallet.privateKey,
    OWNER_ADDRESS: randomWallet.address,
    REWARD_TOKEN_NAME: "UrbanAgriRewardToken",
    REWARD_TOKEN_SYMBOL: "UART",
    COMMUNITY_REWARD_PER_SOLUTION: "1",
    URBAN_AGRI_DLP_NAME: "Urban Agriculture Data Liquidity Pool",
    URBAN_AGRI_DLP_DESCRIPTION: "A decentralized platform for urban agriculture data sharing and collaboration",
    INITIAL_REWARD_SUPPLY: "100000000",
    MIN_STAKE_AMOUNT: "1000",
    CHALLENGE_FEE: "100",
    VALIDATION_THRESHOLD: "3",
    VALIDATION_PERIOD: "604800", // 7 days in seconds
  };

  // Store in .env
  fs.writeFileSync(envFilePath, stringify(newEnvConfig));

  console.log("📄 Configuration saved to packages/hardhat/.env file");
  console.log("🪄 Generated wallet address:", randomWallet.address);
};

async function main() {
  if (!fs.existsSync(envFilePath)) {
    // No .env file yet.
    setNewEnvConfig();
    return;
  }

  // .env file exists
  const existingEnvConfig = parse(fs.readFileSync(envFilePath).toString());
  if (existingEnvConfig.DEPLOYER_PRIVATE_KEY) {
    console.log("⚠️ You already have a deployer account. Check the packages/hardhat/.env file");
    
    // Update UrbanAgriDLP specific configurations if they don't exist
    let configUpdated = false;
    const newConfigs = {
      OWNER_ADDRESS: existingEnvConfig.OWNER_ADDRESS || ethers.Wallet.createRandom().address,
      REWARD_TOKEN_NAME: "UrbanAgriRewardToken",
      REWARD_TOKEN_SYMBOL: "UART",
      COMMUNITY_REWARD_PER_SOLUTION: "1",
      URBAN_AGRI_DLP_NAME: "Urban Agriculture Data Liquidity Pool",
      URBAN_AGRI_DLP_DESCRIPTION: "A decentralized platform for urban agriculture data sharing and collaboration",
      INITIAL_REWARD_SUPPLY: "100000000",
      MIN_STAKE_AMOUNT: "1000",
      CHALLENGE_FEE: "100",
      VALIDATION_THRESHOLD: "3",
      VALIDATION_PERIOD: "604800", // 7 days in seconds
    };

    for (const [key, value] of Object.entries(newConfigs)) {
      if (!existingEnvConfig[key]) {
        existingEnvConfig[key] = value;
        configUpdated = true;
      }
    }

    if (configUpdated) {
      fs.writeFileSync(envFilePath, stringify(existingEnvConfig));
      console.log("📄 Updated UrbanAgriDLP configurations in packages/hardhat/.env file");
    }

    return;
  }

  setNewEnvConfig(existingEnvConfig);
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
