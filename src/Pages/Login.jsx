import React, { useContext, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import CustomNavbar from '../Components/CustomNavbar';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const {googleSingIn,githubSingin,loginUser} = useContext(AuthContext)
    const [update,setUpdate,error]=useState({})
    const location = useLocation()
    const navigate  = useNavigate()
    const from = location.state?.from?.pathname || '/' 
    const handelOnchange = (e)=>{
        const field = e.target.name;
        const value = e.target.value;
        const newValue = {...update}
        newValue[field] = value;
        setUpdate(newValue)
    }

    
    const handelLogin = e =>{
        e.preventDefault()
        loginUser(update.email,update.password)
        navigate(from,{replace:true})
    }

    const google = ()=>{
        googleSingIn()
        navigate(from,{replace:true})
    }
    const github = ()=>{
        githubSingin()
        navigate(from,{replace:true})
    }

    return (
        <>
            <CustomNavbar></CustomNavbar> 
            <Container>
                <Row>
                <Col md={6} className='mx-auto'>
                    <h3 className='mt-4 mb-4'>Login</h3>
                    <form className='mt-5 p-4 border border-1' onSubmit={handelLogin}>
                        <input onChange={handelOnchange} name='email'  type="text" className='form-control mt-3 p-3 ' placeholder='UserName Or Email' />


                        <input onChange={handelOnchange}  type="password" name='password' className='form-control mt-3 p-3 ' placeholder='Password' />


                        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                            <div className='mt-3'>
                                <input   className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" for="exampleCheck1">Remember Me</label>
                            </div>
                            <h6 className='mt-2'><Link to='' style={{color:'#2B3934'}}>Forgate Password</Link></h6>
                        </div>
                        <div>
                        <div className='mx-auto text-center'><button type='submit' className='customButton mt-4 w-50'>Login</button></div>
                        </div>
                        {error && <b className='text-center' style={{color:'red'}}>{error}</b>}
                        <small>Don’t have an account? <Link style={{color:'#2B3934'}} to='/reg'>Create an account</Link></small>
                    </form>
                    
                    <div className='mx-auto text-center'>
                    <button onClick={()=>github()}  className='customButton border border-1 mt-3'><i className="mx-2 fa-brands fa-github"></i> Continue with Gighub</button> <br />

                    <button onClick={()=>google()}  className='customButton border border-1 mt-3'><i className="mx-2 fa-brands fa-google"></i> Continue with Google</button>
                    </div>
                </Col>
                </Row>
            </Container>  
        </>
    );
};

export default Login;