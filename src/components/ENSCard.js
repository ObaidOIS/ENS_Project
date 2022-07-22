import React from 'react'

const ENSCard = ({ ens }) => {
    return (
        <div className='card ens-card'>
            {/* <img src={ens.meta.content[1].url} alt='nft' className='ens-image' /> */}
            {/* <img src={"https://lh3.googleusercontent.com/R6M9t48ljRRTGRJ7usawHgQYx-FBKZq_pRetnpbenHMwKKfxlSHi2h2XLTudw-QDpneGIv9-bQY_QfzoZ0dUlbPXMCQ2dO-7VhB8"} alt='nft' className='ens-image' />
            {ens.meta.content[0].url} */}
            <div className='card content'>
                <div className='card content-item'>
                    Contract Address
                </div>
                <div className='card address'>
                    {ens.contract}
                </div>
                <div className='card content-item'>
                    Collection Address
                </div>
                <div className='card address'>
                    {ens.collection}
                </div>
                <div className='card content-item'>
                    ENS Name
                </div>
                <div className='card address'>
                    {ens.meta.name}
                </div>
                <div className='card content-item'>
                    Collection Description
                </div>
                <p className='card'>
                    {ens.meta.description}
                </p>
            </div>
        </div>
    )
}

export default ENSCard