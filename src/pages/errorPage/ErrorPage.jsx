import React from 'react';
import errorImg from '../../assets/404.png'
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='bg-gray-700 w-full min-h-screen'>
            <div className='flex flex-col justify-center items-center min-h-screen gap-4'>
                <img src={errorImg} className='h-[500px] rounded-2xl' alt="" />
                <button className='btn btn-wide btn-secondary'><Link to={'/'}>Go Home</Link></button>
            </div>
        </div>
    );
};

export default ErrorPage;