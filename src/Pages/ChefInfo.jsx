import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import LazyLoad from 'react-lazyload';
import Rating from 'react-rating';
import { useLoaderData } from 'react-router-dom';
import CustomNavbar from '../Components/CustomNavbar';
import Footer from '../Components/Footer';

const ChefInfo = () => {
    const recipeData = useLoaderData()
    const [isData,setIsdata] = useState([])
    const {name,picture_link,years_of_experience,number_of_recipes,likes,bio_description,recipes} = recipeData || {}

    const handeladd = (id)=>{
        const findingData = isData.find(sinleData => sinleData === id)

        if(!findingData){
            setIsdata([...isData,id])
            toast.success('Added Favorite')
        }
        
    }

   
    const totalRecipes = recipes.map((singleRecipesForCif,index) => <Col key={index} md={4}>

        


        <div className='mx-auto text-center'>
            <LazyLoad><img style={{width:'300px',height:'300px'}} src={singleRecipesForCif.recipe_pic} className='mt-5 img-fluid'alt="" /></LazyLoad>
            <h5>{singleRecipesForCif.recipe_name}</h5>

            <button className='btn w-50 mt-1 mb-1' disabled={isData.find(dsbl => dsbl === singleRecipesForCif.id)}  onClick={()=> handeladd (singleRecipesForCif.id)} style={{border:'1px solid tomato'}}>Favorite</button>

            <p style={{color:'gray',textAlign:'center'}}>{singleRecipesForCif.cooking_method}</p>
            <ul>
                <h6>ingredients</h6>
                {singleRecipesForCif.ingredients.map((info,index) => <li style={{textAlign:'start'}} key={index} >{index + 1} {info}</li>)}
            </ul>
        </div>
    </Col>)
    
    return (
        <>
            <CustomNavbar></CustomNavbar>
                <Container>
                    <Row>
                        <Col md={8} className='mx-auto'>
                            <Row style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                                <Col md={4}>
                                    <img src={picture_link} className='img-fluid' alt="" />
                                </Col>
                                <Col md={6}>
                                    <h4>{name}</h4>
                                    <b>experience: {years_of_experience}</b>
                                    <p><b>Number OF Recipes:</b> {number_of_recipes}</p>
                                    <p><b >Total likes:</b><i className="mx-3 fa-regular fa-thumbs-up"> </i>{likes}</p>
                                    <Rating
                                        placeholderRating={totalRecipes.rating}
                                        emptySymbol={<i  className="text-warning fa-sharp fa-regular fa-star"></i>}
                                        placeholderSymbol={<i  className="text-warning fa-sharp fa-solid fa-star"></i>}
                                        fullSymbol={<i  className="text-warning fa-sharp fa-solid fa-star"></i>}
                                        />
                                </Col>
                            </Row>
                            <p style={{color:'gray'}}>{bio_description}</p>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        {
                            totalRecipes
                        }
                    </Row>
                </Container>
            <Footer></Footer>
        </>
    );
};

export default ChefInfo;