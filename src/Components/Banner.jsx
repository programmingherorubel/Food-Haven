import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../Style/Banner.css'
import Slider from "react-slick";

const Banner = () => {
    let settings = {
        arrows: false,
        focusOnSelect:false,
        autoplay: true,
        autoplaySpeed: 1000,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <Container fluid className='banner'> 
            <Row>
                <Col md={8} className='mx-auto '>
                  <div className='sliderContainer'>
                    <Slider {...settings}>
                      <div>
                          <h1 style={{color:'white'}} className='text-center'>Cooking Is Our Passion</h1>
                          <p style={{color:'gray'}}>
                          Did you know that more than 400 crops grow in California?  And of those 400, California is the only state that grows 14?  The 14 California exclusives include almonds, peaches, rice, and walnuts.  Learn more about the foods we grow below.
                          </p>
                          <button className='siteButton'>Discover It</button>
                      </div>
                      <div>
                          <h1 style={{color:'white'}} className='text-center'>FOOD FACTS</h1>
                          <p style={{color:'gray'}}>
                          California is the nation’s top producer of garlic, that’s why! Also, this month is the famous Gilroy Garlic Festival on April 19, located in the heart of garlic country
                          </p>
                          <button className='siteButton'>Discover It</button>
                      </div>
                      
                      
                  </Slider>
                  </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Banner;