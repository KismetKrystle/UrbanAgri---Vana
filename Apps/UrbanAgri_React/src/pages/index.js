import { useState } from 'react';
import { connectWallet } from '../utils/metamask';

export default function Home() {
  const [account, setAccount] = useState(null);

  const handleConnect = async () => {
    const walletAddress = await connectWallet();
    setAccount(walletAddress);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to the dApp</h1>
      {account ? (
        <p>Connected Wallet: {account}</p>
      ) : (
        <button onClick={handleConnect}>Connect Wallet</button>
      )}
    </div>
  );
}
