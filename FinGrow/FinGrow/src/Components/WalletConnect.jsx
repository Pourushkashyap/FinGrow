import { useState } from 'react';
import { ethers } from 'ethers';

const WalletConnect = ({ onWalletConnected }) => {
  const [walletAddress, setWalletAddress] = useState('');
  const [receiver, setReceiver] = useState('');
  const [amount, setAmount] = useState('');
  const [provider, setProvider] = useState(null);
  const [connected, setConnected] = useState(false);

  const connectWallet = async () => {
    console.log("Clicked connect wallet");

    if (!window.ethereum) {
      alert("Please install MetaMask!");
      return;
    }

    try {
      const newProvider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await newProvider.send("eth_requestAccounts", []);
      const address = accounts[0];

      console.log("Wallet address:", address);

      setProvider(newProvider);
      setWalletAddress(address);
      setConnected(true);

      if (onWalletConnected) {
        onWalletConnected(address);
      }
    } catch (err) {
      console.error("Wallet connection failed:", err);
      alert("Wallet connection failed. See console.");
    }
  };

  const sendETH = async () => {
    console.log("Send ETH clicked");

    if (!provider || !walletAddress) {
      alert("Connect your wallet first");
      return;
    }

    try {
      const signer = await provider.getSigner();
      const tx = await signer.sendTransaction({
        to: receiver,
        value: ethers.parseEther(amount),
      });

      console.log("Transaction sent:", tx);
      alert("Transaction sent! Hash: " + tx.hash);
    } catch (err) {
      console.error("Transaction failed:", err);
      alert("Transaction failed. See console for details.");
    }
  };

  return (
    <div className="p-4 m-4 border rounded bg-gray-100 max-w-md mx-auto mt-6">
      {!connected ? (
        <button onClick={connectWallet} className="bg-blue-500 text-white px-4 py-2 rounded w-full">
          Connect Wallet
        </button>
      ) : (
        <>
          <div className="text-green-700 font-semibold mb-2">
            Connected: {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
          </div>

          <input
            type="text"
            placeholder="Receiver Wallet Address"
            value={receiver}
            onChange={(e) => setReceiver(e.target.value)}
            className="w-full p-2 my-4 border rounded "
          />
          <input
            type="text"
            placeholder="Amount in ETH"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-2 border rounded mb-4"
          />
          <button onClick={sendETH} className="bg-green-600 text-white px-4 py-2 rounded mb-4 w-full">
            Send ETH
          </button>
        </>
      )}
    </div>
  );
};

export default WalletConnect;
