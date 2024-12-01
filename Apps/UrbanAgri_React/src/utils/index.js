import { useState } from 'react';
import { connectWallet } from '../utils/metamask';
import { fetchDataFromContract, updateContractData } from '../utils/contract';

export default function Home() {
  const [account, setAccount] = useState(null);
  const [provider, setProvider] = useState(null);
  const [contractData, setContractData] = useState('');

  const handleConnect = async () => {
    const walletAddress = await connectWallet();
    if (walletAddress) {
      setAccount(walletAddress);
      const ethersProvider = new ethers.providers.Web3Provider(window.ethereum);
      setProvider(ethersProvider);
    }
  };

  const handleFetch = async () => {
    if (provider) {
      const data = await fetchDataFromContract(provider);
      setContractData(data);
    }
  };

  const handleUpdate = async () => {
    if (provider) {
      const newData = prompt('Enter new data:');
      await updateContractData(provider, newData);
      handleFetch(); // Refresh data
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to the dApp</h1>
      {account ? (
        <div>
          <p>Connected Wallet: {account}</p>
          <p>Contract Data: {contractData}</p>
          <button onClick={handleFetch}>Fetch Data</button>
          <button onClick={handleUpdate}>Update Data</button>
        </div>
      ) : (
        <button onClick={handleConnect}>Connect Wallet</button>
      )}
    </div>
  );
}

