import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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

    const logout = () => {
        console.log('logout');
        navigate('/logout');
    }
    const login = () => {
        console.log('login');
        navigate('/');
    }
    return (
        <div>
            {(token) ?
                <div>
                    <div className='text' >
                        <h1 >Dashboard</h1>
                        Welcome
                    </div>
                    <button className='connect-button' onClick={logout}>
                        Logout
                    </button>
                </div> : <div>
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