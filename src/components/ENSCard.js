import React from 'react'
import { useNavigate } from 'react-router-dom';
const ENSCard = ({ ens }) => {
    const navigate = useNavigate();
    const selectToken = async () => {
        console.log('selectToken');
        console.log(ens.tokenId);
        var resp;
        // const check_user = await fetch(`http://localhost:8000/api/user/${ens.tokenId}/`);
        const check_user = await fetch('http://django-env.eba-cbmnfm96.us-west-2.elasticbeanstalk.com/api/user/register/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ens_name: `${ens.meta.name}`,
                token_id: `${ens.tokenId}`,
            })
        }).then(response => {
            resp = response;
            return response.json();
        }).then(json => {
            return {
                response: resp,
                json: json,
                error: !resp.ok
            };
        });
        console.log(check_user.response.status);
        if (check_user.response.status === 200) {
            console.log('success');
            console.log(check_user.json);
            navigate('/dashboard/');
        }

    }


    if (!ens.meta) return;
    let pattern = /.eth/g;
    if (!(pattern.test(ens.meta.name))) return;
    return (
        <div className='card ens-card' onClick={selectToken}>
            {/* <img src={ens.meta.content[1].url} alt='nft' className='ens-image' /> */}
            <div className='card content'>
                <div className='card content-item'>
                    Contract Address
                </div>
                <div className='card address'>
                    {ens.contract}
                </div>
                <div className='card content-item'>
                    Token id
                </div>
                <div className='card address'>
                    {ens.tokenId}
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