import React, { useContext, useState } from 'react';
import { Col, Container, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import { Link ,NavLink} from 'react-router-dom';
import '../Style/CustomNavbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthContext } from '../Provider/AuthProvider';



const CustomNavbar = () => {
    const [activenav,setActivenav] = useState(false)
   
    const {user,logout} = useContext(AuthContext)
    const photo = user?.photoURL

    console.log(user)
    return (
        <Container fluid className='customnavbar'>
            <Container>
                <Row>
                    <Col>
                        <div className='navbarContainer' style={{position:'relative'}}>
                            <h4 style={{fontFamily:'Raleway, sans-serif',color:'red'}}>F<span style={{color:'white'}}>oo</span>d <span style={{color:'tomato'}}>Haven</span></h4>
                            <div className='disktopNavbar'>
                                <ul className='desktopMenu'>
                                    <li style={{listStyle:'none'}}><NavLink  style={{textDecoration:'none',color:'white'}} to="/" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "active" : ""}>Home</NavLink></li>

                                    <li style={{listStyle:'none'}}><NavLink style={{textDecoration:'none',color:'white'}}  to="/blog" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "active" : ""}>Blog</NavLink></li>

                                    <li style={{listStyle:'none'}}><NavLink style={{textDecoration:'none',color:'white'}}  to="/contact" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "active" : ""}>Contact</NavLink></li>
                                    

                                    {user ? <li onClick={()=>logout()}  style={{listStyle:'none'}}><NavLink className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "active" : ""} style={{color:'white',textDecoration:'none'}} >Logout</NavLink></li>
                                    :
                                    <li style={{listStyle:'none'}}><NavLink style={{color:'white',textDecoration:'none'}} className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "active" : ""} to='/login'>Login</NavLink></li>}
                                    <li  style={{position:'relative',listStyle:'none'}}>
                                    {user  && <div className='size_of_img' >
                                        <img  src={photo} title={user?.displayName} id="t-4" style={{width:'30px',height:'30px',borderRadius:'50%'}} alt="" />
                                    </div>}
                                    
                                    </li>
                                </ul>
                               
                                
                            </div>
                            <i onClick={()=> setActivenav(!activenav)} style={{color:'white',fontSize:'24px'}} className="hamburger fa-solid fa-bars"></i>
                            <div className={activenav ? 'mobilemenu active' : 'mobilemenu'}>
                                <ul>
                                    <li className='mt-3' style={{listStyle:'none'}}>
                                        <NavLink className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "active" : ""} to='/' style={{color:'white',textDecoration:'none',fontWeight:'600'}}>Home</NavLink>
                                    </li>

                                    <li className='mt-3' style={{listStyle:'none'}}>
                                        <NavLink className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "active" : ""}to='/blog' style={{color:'white',textDecoration:'none',fontWeight:'600'}}>Blog</NavLink>
                                    </li>

                                    <li className='mt-3' style={{listStyle:'none'}}>
                                        <NavLink className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "active" : ""} style={{color:'white',textDecoration:'none',fontWeight:'600'}} to='/contact'>Contact</NavLink>
                                    </li>
                                    {user ? 
                                    <li className='mt-3' onClick={()=>logout()} style={{listStyle:'none'}}>
                                        <NavLink className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "active" : ""} style={{color:'white',textDecoration:'none',fontWeight:'600'}} >Logout</NavLink>
                                    </li>
                                     :
                                     <li className='mt-3' style={{listStyle:'none'}}>
                                        <NavLink className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "active" : ""} style={{color:'white',textDecoration:'none',fontWeight:'600'}} to='/login'>Login</NavLink>
                                    </li>}
                                    
                                    {user  && <div className='size_of_img' >
                                        <img  src={photo} title={user?.displayName} id="t-4" style={{width:'30px',height:'30px',borderRadius:'50%'}} alt="" />
                                    </div>}

                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default CustomNavbar;