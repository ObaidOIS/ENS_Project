import React from 'react'
import ENSCard from './ENSCard'
import demoENS from '../Test_ens.json'
import { useLocation } from 'react-router-dom';

const ENSContainer = () => {
    const location = useLocation();
    const ensName = location.state;
    return (
        <>
            <div className='head-text'>
                Choose Your ENS Token
            </div>
            <div className='ens-container'>
                {/* {ensName.map((ens, index) => { */}
                {demoENS.map((ens, index) => {
                    return <ENSCard ens={ens} key={index} />
                })}

            </div>
        </>

    )
}

export default ENSContainer