import { useState } from 'react';
import ENSContainer from './components/ENSContainer';
import './App.css';

function App() {

  const [wallletAdddress, setWallletAddress] = useState(null);

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      console.log('MetaMask is installed!');
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setWallletAddress(accounts[0]);

      debugger;
    }
  }
  return (
    <div className="App">
      <div className='text'>
        Account: {wallletAdddress}
      </div>
      <button className='connect-button' onClick={connectWallet}>
        Connect Wallet
      </button>
      <ENSContainer />
    </div>
  );
}

export default App;
