import { ethers } from 'ethers';
import contractABI from './YourContractABI.json';

const contractAddress = '0xYourDeployedContractAddress'; // Replace with your deployed address

const getContract = (provider) => {
  return new ethers.Contract(contractAddress, contractABI, provider.getSigner());
};

const readContractData = async (provider) => {
  const contract = getContract(provider);
  return await contract.someReadFunction(); // Replace with your function
};

const writeContractData = async (provider, value) => {
  const contract = getContract(provider);
  const tx = await contract.someWriteFunction(value); // Replace with your function
  await tx.wait();
  console.log('Transaction completed:', tx);
};

export { readContractData, writeContractData };
