import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CustomNavbar from '../Components/CustomNavbar';
import Banner from '../Components/Banner';
import Footer from '../Components/Footer';
import Ingredients from '../Components/Ingredients';
import Chef from '../Components/Chef';
import Subscribe from '../Components/Subscribe';


const Home = () => {
    return (
       <>
            <CustomNavbar />
            <Banner/>
            <Subscribe />
            <Chef></Chef>
            <Ingredients></Ingredients>
            <Footer/>
       </>
    );
};

export default Home;