import { useState, useEffect } from 'react';
import ENSContainer from './components/ENSContainer';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Dashboard from './pages/dashboard';

function App() {

  const [wallletAdddress, setWalletAddress] = useState(null);
  const [ensName, setEnsName] = useState([]);

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      console.log('MetaMask is installed!');
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setWalletAddress(accounts[0]);
    }
  }

  const getENSData = async () => {

    if (!wallletAdddress) return;

    // const response = await fetch(`https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:${wallletAdddress}`)
    const response = await fetch(`https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:0x3c389a52ce6f9e570b3a93de37a160d5d90319a8`)
    const data = await response.json();
    console.log(data.items);
    setEnsName(data.items);
    debugger;
  }

  useEffect(() => {

    getENSData();

  }, [wallletAdddress]);

  return (
    <>
      <div className="App">
        <div className='text'>
          Account: {wallletAdddress}
        </div>
        <button className='connect-button' onClick={connectWallet}>
          Connect Wallet
        </button>
        <Router>
          <Routes>
            <Route path="/" element={<ENSContainer ensName={ensName} />} />
            <Route path="/dashboard/" element={<Dashboard />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
