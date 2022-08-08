import React from 'react'
import { useState, useEffect } from 'react';
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../axios';

const Home = () => {
    const navigate = useNavigate();
    const [ensName, setEnsName] = useState();
    const [contractddress, setContractAddress] = useState(null);
    const [userid, setUserid] = useState(null);

    const getUserId = () => {
        var accessToken = localStorage.getItem('access_token');
        var decoded = jwt_decode(accessToken);
        var user_id = decoded.user_id;
        setUserid(user_id);
        // console.log(user_id);
        getUserDetail();
    }
    const getUserDetail = () => {
        axiosInstance
            .get(`user/${userid}/`)
            .then((res) => {
                // console.log(res);
                // console.log(res.data);
                setContractAddress(res.data.contract_address);
                setEnsName(res.data.ens_name);
            });
    };
    const logout = () => {
        console.log('logout');
        navigate('/logout');
    }

    useEffect(() => {
        getUserId();
    });

    return (
        <>
            <div>
                <div className='text' >
                    <h1 >Dashboard</h1>
                    <h2>Connected with {ensName} </h2>
                    <h3>{contractddress} </h3>
                </div>
                <button className='connect-button' onClick={logout}>
                    Logout
                </button>
            </div>





        </>
    );
}

export default Home;