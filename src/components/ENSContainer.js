import React from 'react'
import ENSCard from './ENSCard'

const ENSContainer = ({ ensName }) => {
    return (
        <div className='ens-container'>
            {/* <ENSCard ens={ensName} /> */}
            {ensName.map((ens, index) => {
                return <ENSCard ens={ens} key={index} />
            })}

        </div>
    )
}

export default ENSContainer