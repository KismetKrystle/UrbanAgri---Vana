import { ethers } from 'ethers';
import contractABI from './contractABI.json';

const contractAddress = '0xYourContractAddress'; // Replace with deployed address

const getContract = (provider) => {
  return new ethers.Contract(contractAddress, contractABI, provider.getSigner());
};

const fetchDataFromContract = async (provider) => {
  const contract = getContract(provider);
  try {
    const data = await contract.getData(); // Replace with your contract's function
    console.log('Contract Data:', data);
    return data;
  } catch (error) {
    console.error('Error fetching data from contract:', error);
  }
};

const updateContractData = async (provider, newData) => {
  const contract = getContract(provider);
  try {
    const tx = await contract.setData(newData); // Replace with your contract's function
    await tx.wait();
    console.log('Data updated:', newData);
  } catch (error) {
    console.error('Error updating contract:', error);
  }
};

export { fetchDataFromContract, updateContractData };
