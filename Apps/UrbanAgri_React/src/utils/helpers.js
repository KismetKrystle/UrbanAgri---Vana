import { ethers } from "ethers";

// Helper function to parse Ether values to Wei
const parseEther = (value) => {
  return ethers.utils.parseEther(value.toString());
};

export { parseEther };
