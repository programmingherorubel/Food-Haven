import React, { useContext, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import CustomNavbar from '../Components/CustomNavbar';
import { AuthContext } from '../Provider/AuthProvider';


const Reg = () => {
    const {googleSingIn,githubSingin,registerUser,error} = useContext(AuthContext)
    const [update,setUpdate]=useState({})
    const handelOnchange = (e)=>{
        const field = e.target.name;
        const value = e.target.value;
        const newValue = {...update}
        newValue[field] = value;
        
        setUpdate(newValue)
    }
    const handelReg = e =>{
        e.preventDefault()
        const username = update.name 
        const userUrl = update.photo
        
        if(update.password.length  < 6){
            toast.error(" password be at least 6 characters")
            return 
        }

        if(update.password !== update.password1){
            toast.error(" Password did not matchd")
            return
        }

        registerUser(update.email,update.password,username,userUrl)
        e.target.reset();
    }
    return (
        <>
            <CustomNavbar></CustomNavbar> 
            <Container>
                <Row>
                <Col md={6} className='mx-auto'>
                    <h3 className='mt-2 mb-4'>Regression</h3>
                    <form className=' p-4 border border-1' onSubmit={handelReg}>
                        <input onChange={handelOnchange} name='name' required  type="text" className='form-control mt-2 p-2 ' placeholder='UserName ' />

                        <input onChange={handelOnchange} name='photo' required  type="text" className='form-control mt-2 p-2 ' placeholder='Photo Url' />

                        <input onChange={handelOnchange} name='email' required  type="text" className='form-control mt-2 p-2 ' placeholder='Input Your Email' />


                        <input onChange={handelOnchange}  type="password" required name='password' className='form-control mt-2 p-2 ' placeholder='Password' />

                        <input onChange={handelOnchange}  type="password" required name='password1' className='form-control mt-2 p-2 ' placeholder='Confirm Password' />


                        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                            <div className='mt-3'>
                                <input   className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" for="exampleCheck1">Remember Me</label>
                            </div>
                            <h6 className='mt-2'><Link to='' style={{color:'#2B3934'}}>Forgate Password</Link></h6>
                        </div>
                        <div>
                        <div className='mx-auto text-center'><button type='submit' className='customButton mt-4 w-50'>Regression </button></div>
                        {error && <b className='text-center' style={{color:'red'}}>{error}</b>}
                        </div>
                        <small>already have an account? <Link style={{color:'#2B3934'}} to='/login'>Login</Link></small>
                    </form>
                    
                    <div className='mx-auto text-center'>
                    <button onClick={()=>githubSingin()}  className='customButton border border-1 mt-3'><i className="mx-2 fa-brands fa-github"></i> Continue with Gighub</button> <br />

                    <button onClick={()=>googleSingIn()} className='customButton border border-1 mt-3'><i className="mx-2 fa-brands fa-google"></i> Continue with Google</button>
                    </div>
                </Col>
                </Row>
            </Container>    
        </>
    );
};

export default Reg;