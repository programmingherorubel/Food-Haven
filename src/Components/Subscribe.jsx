import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../Style/subscribe.css'

const Subscribe = () => {
    return (
        <Container fluid className='subscribe'>
            <Row>
                <Col md={6} className='mx-auto'>
                    <div className='subscribeCOntent'>
                        <h1 className='text-center'style={{color:'white'}}>Subscribe </h1>
                        <div>
                            <input type="text" style={{background:'transparent'}} placeholder='Enter Your Email & Subscribe' className='w-100 form-control p-3' />
                            <div className='text-center'>
                            <button className='p-2 mt-4 mx-3 customButton'>Subscribe</button>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Subscribe;