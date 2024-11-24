const { ethers } = require("hardhat");

async function main() {
  // RootNetwork contract address on Moksha
  const rootNetworkAddress = "0xff14346dF2B8Fd0c95BF34f1c92e49417b508AD5";

  // Your DLP contract address (replace with your actual deployed address)
  const dlpAddress = "YOUR_DEPLOYED_DLP_ADDRESS";

  // Load the RootNetwork contract ABI (you'll need to have this)
  const RootNetwork = await ethers.getContractFactory("RootNetwork");
  const rootNetwork = await RootNetwork.attach(rootNetworkAddress);

  // Prepare registration info
  const registrationInfo = {
    dlpAddress: dlpAddress,
    ownerAddress: "0xd0afD49d53F0504DAdA54f9Dec23a2c5192BB675", // Usually your wallet address
    treasuryAddress: "0xd0afD49d53F0504DAdA54f9Dec23a2c5192BB675", // Can be the same as owner address
    stakersPercentage: ethers.utils.parseUnits("50", 18), // 50% as an example
    name: "UrbanAgri",
    iconUrl: "https://your-icon-url.com",
    website: "https://app.pitch.com/app/presentation/510b0636-990f-49f0-9121-6c49f6139279/4702f40a-b4ce-42d3-958e-fc4f2976d39a/26f00bad-24b4-4eee-9382-def99e577207",
    metadata: "" // Can be left empty or add any additional info
  };

  // Register DLP
  const tx = await rootNetwork.registerDlp(registrationInfo, {
    value: ethers.utils.parseEther("100") // 100 VANA for staking
  });

  console.log("Registration transaction sent:", tx.hash);
  await tx.wait();
  console.log("DLP registered successfully!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
