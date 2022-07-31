import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Main = () => {
    const navigate = useNavigate();
    const [ensName, setEnsName] = useState([]);
    const [walletAdddress, setWalletAddress] = useState(null);


    const connectWallet = async () => {
        if (typeof window.ethereum !== 'undefined') {
            console.log('MetaMask is installed!');
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            setWalletAddress(accounts[0]);
        }
        else {
            console.log('MetaMask is not installed!');
            alert('Please install MetaMask extension! or any other wallet');
        }
    }

    const getENSData = async () => {

        if (!walletAdddress) return;

        // const response = await fetch(`https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:${wallletAdddress}`)
        const response = await fetch(`https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:0x3c389a52ce6f9e570b3a93de37a160d5d90319a8`)
        const data = await response.json();
        console.log(data.items);
        setEnsName([data]);
        console.log(ensName);
        navigate('/ens', { state: data.items });
    }

    useEffect(() => {

        getENSData();


    }, [walletAdddress]);
    return (
        <div className="App">
            <div className='text'>
                Account: {walletAdddress}
            </div>
            <button className='connect-button' onClick={connectWallet}>
                Connect Wallet
            </button>
        </div>
    );
}
export default Main;