import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Home from '../components/home';

const Dashboard = () => {
    const navigate = useNavigate();
    const [token, setToken] = useState(false);

    const checkToken = () => {
        if (!!(localStorage.getItem('access_token'))) {
            setToken(true);
        }
    }
    useEffect(() => {
        checkToken();

    }, [localStorage.getItem('access_token')]);


    const login = () => {
        console.log('Please login');
        navigate('/');
    }
    return (
        <div>
            {(token) ? <Home /> : <div>
                <div className='text' >
                    Please Login
                </div>
                <button className='connect-button' onClick={login}>
                    Login
                </button>
            </div>
            }
        </div>
    );
}

export default Dashboard