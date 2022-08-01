import React from 'react'
import ENSCard from './ENSCard'
import demoENS from '../Test_ens.json'
import { useLocation } from 'react-router-dom';

const ENSContainer = () => {
    const location = useLocation();
    const ensName = location.state.asset;
    const walletAddress = location.state.walletAddress;
    return (
        <>
            <div className='text'>
                Account: {walletAddress}
            </div>
            <div className='head-text'>
                Select ENS Token For Authentication
            </div>
            <div className='ens-container'>
                {ensName.map((ens, index) => {
                    // {demoENS.map((ens, index) => {
                    return <ENSCard ens={ens} key={index} />
                })}

            </div>
        </>

    )
}

export default ENSContainer