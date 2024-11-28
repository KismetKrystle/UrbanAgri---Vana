import { MetaMaskSDK } from '@metamask/sdk';

const options = {
  injectProvider: true,
};
const MMSDK = new MetaMaskSDK(options);
const ethereum = MMSDK.getProvider();

const connectWallet = async () => {
  if (!ethereum) {
    console.error('MetaMask is not installed!');
    return null;
  }

  try {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    console.log('Connected account:', accounts[0]);
    return accounts[0];
  } catch (error) {
    console.error('Error connecting to MetaMask:', error);
    return null;
  }
};

export { connectWallet, ethereum };
