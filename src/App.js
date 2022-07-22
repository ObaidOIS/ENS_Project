import { useState, useEffect } from 'react';
import ENSContainer from './components/ENSContainer';
import './App.css';

function App() {

  const [wallletAdddress, setWallletAddress] = useState(null);
  const [ensName, setEnsName] = useState([]);

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      console.log('MetaMask is installed!');
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setWallletAddress(accounts[0]);
    }
  }

  const getENSData = async () => {

    if (!wallletAdddress) return;

    // const response = await fetch(`https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:${wallletAdddress}`)
    const response = await fetch(`https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:0x4765273c477c2dc484da4f1984639e943adccfeb`)
    const data = await response.json();

    setEnsName(data.items);
    debugger;
  }

  useEffect(() => {

    getENSData();

  }, [wallletAdddress]);

  return (
    <div className="App">
      <div className='text'>
        Account: {wallletAdddress}
      </div>
      <button className='connect-button' onClick={connectWallet}>
        Connect Wallet
      </button>
      <div className='head-text'>
        Choose Your ENS Token
      </div>

      <ENSContainer ensName={ensName} />
    </div>
  );
}

export default App;
