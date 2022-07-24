import React from 'react'
import ENSCard from './ENSCard'
import demoENS from '../ens.json'

const ENSContainer = ({ ensName }) => {
    return (
        <>
            <div className='head-text'>
                Choose Your ENS Token
            </div>
            <div className='ens-container'>
                {/* <ENSCard ens={ensName} /> */}
                {ensName.map((ens, index) => {
                    return <ENSCard ens={ens} key={index} />
                })}

            </div>
        </>

    )
}

export default ENSContainer