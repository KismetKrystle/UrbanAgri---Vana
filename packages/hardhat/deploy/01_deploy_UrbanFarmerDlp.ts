import { ethers } from 'ethers';
import { deployments, ethers } from "hardhat";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { IVana, IVanaDataDAO, IVanaERC20 } from '@vananetwork/sdk/contracts';

// Replace these with your own values
const VANA_RPC_URL = 'https://rpc.moksha.vana.org/';
const VANA_ADDRESS = '0x78c1b0C915c4FAA5FffA6CAbf0219DA63d7f4cb8';
const VANA_DATA_DAO_ADDRESS = '0x123456789012345678901234567890abcdef1234';
const VANA_ERC20_ADDRESS = '0x987654321098765432109876543210fedcba9876';
const PRIVATE_KEY = 'your_private_key_here';

async function deployUrbanFarmingDataLiquidityPool() {
  // Connect to the Vana network
  const provider = new ethers.providers.JsonRpcProvider(VANA_RPC_URL);
  const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

  // Instantiate the Vana contracts
  const vana: IVana = new ethers.Contract(VANA_ADDRESS, IVana.abi, wallet) as IVana;
  const vanaDataDAO: IVanaDataDAO = new ethers.Contract(VANA_DATA_DAO_ADDRESS, IVanaDataDAO.abi, wallet) as IVanaDataDAO;
  const vanaToken: IVanaERC20 = new ethers.Contract(VANA_ERC20_ADDRESS, IVanaERC20.abi, wallet) as IVanaERC20;

  // Deploy the UrbanFarmingDataLiquidityPool contract
  const UrbanFarmingDataLiquidityPoolFactory = await ethers.getContractFactory('UrbanFarmingDataLiquidityPool', wallet);
  const urbanFarmingDataLiquidityPool = await UrbanFarmingDataLiquidityPoolFactory.deploy(
    vana.address,
    vanaDataDAO.address,
    vanaToken.address
  );
  await urbanFarmingDataLiquidityPool.deployed();

  console.log('UrbanFarmingDataLiquidityPool contract deployed to:', urbanFarmingDataLiquidityPool.address);
}

deployUrbanFarmingDataLiquidityPool().catch((error) => {
  console.error('Error deploying UrbanFarmingDataLiquidityPool contract:', error);
  process.exit(1);
});
