import React, { useState } from 'react';
import { MetaMaskSDK } from '@metamask/sdk';
import { BrowserProvider } from 'ethers';

const MMSDK = new MetaMaskSDK();
const ethereum = MMSDK.getProvider(); // Use this instead of window.ethereum

function App() {
  const [walletAddress, setWalletAddress] = useState(null);
  const [network, setNetwork] = useState(null);

  const connectWallet = async () => {
    if (!ethereum) {
      alert('MetaMask is not installed! Please install MetaMask and try again.');
      return;
    }

    try {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      const provider = new BrowserProvider(ethereum);
      const network = await provider.getNetwork();

      setWalletAddress(accounts[0]);
      setNetwork(network.name);

      console.log('Connected wallet:', accounts[0]);
      console.log('Connected network:', network.name);
    } catch (error) {
      console.error('Error connecting to MetaMask:', error);
    }
  };

  const disconnectWallet = () => {
    setWalletAddress(null);
    setNetwork(null);
    console.log('Wallet disconnected.');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>MetaMask Integration</h1>
      {!walletAddress ? (
        <button onClick={connectWallet} style={{ padding: '10px 20px', fontSize: '16px' }}>
          Connect Wallet
        </button>
      ) : (
        <div>
          <p>Connected Wallet: <strong>{walletAddress}</strong></p>
          {network && <p>Network: <strong>{network}</strong></p>}
          <button onClick={disconnectWallet} style={{ padding: '10px 20px', fontSize: '16px', marginTop: '10px' }}>
            Disconnect Wallet
          </button>
        </div>
      )}
    </div>
  );
}

export default App;

