import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../axios';

const Logout = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const response = axiosInstance.post('user/logout/', {
            refresh_token: localStorage.getItem('refresh_token'),
        });
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        axiosInstance.defaults.headers['Authorization'] = null;
        navigate('/');
    });
    return (
        <>
            <div>Logout</div>
        </>

    )
}
export default Logout