import React from 'react';
import CustomNavbar from '../Components/CustomNavbar';
import { Accordion, Col, Container, Row } from 'react-bootstrap';
import Pdf from "react-to-pdf";


const Blog = () => {

    const ref = React.createRef();
  
  
  
    return (
        <>
            <CustomNavbar/>

            <Container>
                <Row>
                    <Col>
                        <div style={{display:'flex',justifyContent:'end'}}>
                        <Pdf targetRef={ref} filename="code-example.pdf">
                            {({ toPdf }) => (
                            <button onClick={toPdf} className='mt-3 btn btn-danger'>
                                Download
                            </button>
                            )}
                        </Pdf>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col ref={ref} className='mx-auto mt-5' md={8}>
                        <div>
                            <h4 style={{color:'tomato'}}>What is the differences between uncontrolled and controlled components.? </h4>
                            <h6 style={{color:'gray',margin:'10px 0px'}}>A controlled component is a form element whose value is controlled by React. 
                            An uncontrolled component is a form element whose value is managed by the DOM.</h6>
                        </div>
                        <div>
                            <h4 style={{color:'tomato'}}>How to validate React props using PropTypes.? </h4>
                            <h6 style={{color:'gray',margin:'10px 0px'}}>You can use PropTypes to validate the props that are being passed to a component.
                            You can define PropTypes for any prop in your component by setting the propTypes property on the component.</h6>
                        </div>
                        <div>
                            <h4 style={{color:'tomato'}}>What is the difference between nodejs and express js. </h4>
                            <h6 style={{color:'gray',margin:'10px 0px'}}>Node Js is a javascript server-side backned runtime environment.It provides an event-driven, non-blocking I/O model that makes it lightweight and efficient.
                            Express js a node js framework.We can handle node js easily by express js.</h6>
                        </div>
                        <div>
                            <h4 style={{color:'tomato'}}>What is a custom hook, and why will you create a custom hook? </h4>
                            <h6 style={{color:'gray',margin:'10px 0px'}}>Custom hooks is react js hooks which is readable,reusable and testable.
                            If you have one or multiple React hooks that will be used at multiple locations in a code, you should use custom React JS hooks.</h6>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Blog;



