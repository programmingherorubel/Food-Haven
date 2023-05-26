import React from 'react';
import {Container, Row ,Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Container fluid style={{background:'#2B3934',height:'100%',marginTop:'30px'}}>
            <Row>
                <Col md={4}>
                <h2 className='mt-5' style={{fontFamily:'Raleway, sans-serif',color:'red'}}>F<span style={{color:'white'}}>oo</span>d <span style={{color:'tomato'}}>Haven</span></h2>
                <p style={{color:'gray'}}>
                Meet Walnut Farmer Mike Machado This month we are happy to introduce you to our friend Mike Machado,month we are happy to introduce you to our friend Mike Machado,
                </p>
                </Col>
                <Col md={4} className='mt-4 mx-auto text-center'>
                    <ul style={{padding:'20px'}}>
                        <li style={{listStyle:'none'}}><Link style={{textDecoration:'none',color:'white'}} to='/home'>Home</Link></li>
                        <li style={{listStyle:'none'}}><Link style={{textDecoration:'none',color:'white'}} to='/blog'>Blog</Link></li>
                        <li style={{listStyle:'none'}}><Link style={{textDecoration:'none',color:'white'}} to='/home'>About</Link></li>
                        <li style={{listStyle:'none'}}><Link style={{textDecoration:'none',color:'white'}} to='/home'>Our Chef</Link></li>
                        <li style={{listStyle:'none'}}><Link style={{textDecoration:'none',color:'white'}} to='/home'>Login</Link></li>
                        <li style={{listStyle:'none'}}><Link style={{textDecoration:'none',color:'white'}} to='/home'>Rgistration</Link></li>
                    </ul>
                </Col>
                <Col md={4} className='mt-5 mx-auto text-center'>
                <ul className='socialIcon' style={{display:'flex',justifyContent:'center',gap:'20px',textAlign:'center'}}>
                                <li style={{listStyle:'none'}}><i style={{fontSize:'20px',color:'white'}} className="fa-brands fa-facebook"></i></li>
                                <li style={{listStyle:'none'}}><i style={{fontSize:'20px',color:'white'}} className="fa-brands fa-instagram"></i></li>
                                <li style={{listStyle:'none'}}><i style={{fontSize:'20px',color:'white'}} className="fa-brands fa-twitter"></i></li>
                                <li style={{listStyle:'none'}}><i style={{fontSize:'20px',color:'white'}} className="fa-brands fa-pinterest"></i></li>
                            </ul>
                        <div>
                            <input type="email" className='p-2' placeholder='Email' />
                        </div>
                </Col>
                
            </Row>
        </Container>
    );
};

export default Footer;