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
        console.log('walletAdddress', walletAdddress);
        const response = await fetch(`https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:${walletAdddress}`)
        // const response = await fetch(`https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:0x3c389a52ce6f9e570b3a93de37a160d5d90319a8`)
        // const response = await fetch(`https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:0x57dF94268b69FE62Bc5925C79D2e1b799ACc4e23`)
        // const response = await fetch(`https://api.etherscan.io/api?module=account&action=tokennfttx&address=0x57df94268b69fe62bc5925c79d2e1b799acc4e23&page=1&offset=100&startblock=0&endblock=27025780&sort=asc&apikey=5E9BW8EV7ZCR6551VRTMXEZJW2IMD63B69`)
        // const response = await fetch(`https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:0x57df94268b69fe62bc5925c79d2e1b799acc4e23`)
        const data = await response.json();
        // console.log(data);
        console.log("Owned Assets: ", data.items);
        const filteredData = data.items.filter(item => item.meta.description.includes('ENS'));
        console.log("ENS Tokens: ", filteredData);
        setEnsName([data]);
        // console.log(ensName);
        navigate('/ens', { state: { asset: filteredData, walletAddress: walletAdddress } });
    }

    useEffect(() => {

        getENSData();


    }, [walletAdddress]);
    return (
        <div className="App">
            {/* <div className='text'>
                Account: {walletAdddress}
            </div> */}
            <button className='connect-button' onClick={connectWallet}>
                Connect Wallet
            </button>
        </div>
    );
}
export default Main;