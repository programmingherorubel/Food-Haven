import React from 'react';
import CustomNavbar from '../Components/CustomNavbar'

const Error = () => {
    return (
        <>
        <CustomNavbar />
            <h1 style={{height:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}}>Page not Found <span style={{fontSize:'100px',color:'red'}}>404</span></h1>
        </>
    );
};

export default Error;