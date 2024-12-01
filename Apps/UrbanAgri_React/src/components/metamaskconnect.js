import React, { useState } from 'react';
import { ethers } from 'ethers';
import MetaMaskConnect from './components/MetaMaskConnect';

const MetaMaskConnect = () => {
  const [account, setAccount] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [provider, setProvider] = useState(null);

  // Function to connect to MetaMask
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        // Request accounts from MetaMask
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0]; // Get the first account
        setAccount(account);
        setIsConnected(true);

        // Create an instance of the provider (Ethers.js)
        const ethersProvider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(ethersProvider);

        // Get the signer (user's wallet)
        const signer = ethersProvider.getSigner();
        console.log('Signer address:', await signer.getAddress());
      } catch (error) {
        console.error('Error connecting to MetaMask:', error);
      }
    } else {
      console.error('MetaMask is not installed!');
    }
  };

  // Function to check the current network
  const getNetwork = async () => {
    if (provider) {
      const network = await provider.getNetwork();
      console.log('Network:', network);
    } else {
      console.log('Please connect your wallet first.');
    }
  };

  return (
    <div>
      {!isConnected ? (
        <button onClick={connectWallet}>Connect Wallet</button>
      ) : (
        <div>
          <p>Connected Account: {account}</p>
          <button onClick={getNetwork}>Get Network</button>
        </div>
      )}
    </div>
  );
};

export default MetaMaskConnect;

