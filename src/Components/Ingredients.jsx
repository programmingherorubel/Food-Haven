import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ingradients from '../img/ingrad.jpg'
import img1 from '../img/1.jpg'
import img2 from '../img/2.jpg'
import img3 from '../img/3.jpg'
import img4 from '../img/4.jpg'
import LazyLoad from 'react-lazyload';


const Ingredients = () => {
    return (
        <Container className='mt-5 mb-5'>
            <Row>
                <Col md={8} className='mx-auto'>
                    <h4 style={{color:'#2B3934'}} className='mt-5 mb-5 text-center'>INGREDIENTS</h4>
                    <h6 style={{color:'#2B3934'}}>Quality first</h6>
                    <p style={{color:'gray'}}>
                    Indian celebrity chef, entrepreneur, and television personality. He is best known as the host of the popular TV show Khana Khazana, which aired more than 500 episodes. With over 30 years of experience, he has authored more
                    </p>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <div>
                        <LazyLoad><img style={{maxHeight:'500px'}} src={ingradients} className='img-fluid mt-4 mx-auto' alt="" /></LazyLoad>
                    </div></Col>
                <Col md={6}>
                    <div>
                        <LazyLoad>
                        <img style={{maxHeight:'500px'}} src={img2} className='img-fluid mt-4 mx-auto' alt="" />
                        </LazyLoad>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Ingredients