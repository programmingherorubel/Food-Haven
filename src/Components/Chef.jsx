import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';


const Chef = () => {
    const [chefData,setChefData] = useState([])
    const [loading,setLoading] = useState(true)

   
   

    useEffect(()=>{
        fetch('https://server-programmingherorubel.vercel.app/chefinformation')
        .then(res => res.json())
        .then(data => setChefData(data))
        setLoading(false)
    },[])
  
  


 
    return (
        <Container>
            <Row>
               {loading && <div style={{margin:'0 auto',textAlign:'center'}}><p class="spinner-border" role="status"></p></div>}
            {
                    chefData.map(singleChef => {
                        return <Col key={singleChef.id} className='mt-4' lg={3} md={4} sm={6} >
                        <div className='m-2 p-3' style={{boxShadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px'}}>
                            <Link style={{textDecoration:'none'}} to={`/chef/${singleChef.id}`}>
                                <div className="mx-auto text-center">
                                <LazyLoad><img src={singleChef.picture_link} className='img-fluid text-center' style={{width:'250px',height:'250px'}} alt="" /></LazyLoad>
                                </div>
                            <h5 style={{color:'#2B3934',textAlign:'center'}}>{singleChef.name}</h5>
                            <div style={{display:'flex',gap:'10px',justifyContent:'center'}}>
                                <p style={{color:'gray'}} >Experience:{singleChef.years_of_experience}</p>
                                <p style={{color:'gray'}} >Recipes:{singleChef.number_of_recipes}</p>
                            </div>
                            <p style={{color:'gray',textAlign:'center'}} ><i className=" style={{color:'gray'}} mx-3 fa-regular fa-thumbs-up"> </i>{singleChef.likes}</p>
                            <button  className='btn bg-light mt-2 mb-2 w-100'>View Recipes</button></Link>

                        
                               
                        
                            <ul className='socialIcon' style={{display:'flex',justifyContent:'center',gap:'20px',textAlign:'center'}}>
                                <li style={{listStyle:'none'}}><i style={{fontSize:'20px',color:'#2B3934'}} className="fa-brands fa-facebook"></i></li>
                                <li style={{listStyle:'none'}}><i style={{fontSize:'20px',color:'#2B3934'}} className="fa-brands fa-instagram"></i></li>
                                <li style={{listStyle:'none'}}><i style={{fontSize:'20px',color:'#2B3934'}} className="fa-brands fa-twitter"></i></li>
                                <li style={{listStyle:'none'}}><i style={{fontSize:'20px',color:'#2B3934'}} className="fa-brands fa-pinterest"></i></li>
                            </ul>
                        </div>
                    </Col>
                    })
                }
            </Row>
        </Container>
    );
};

export default Chef;