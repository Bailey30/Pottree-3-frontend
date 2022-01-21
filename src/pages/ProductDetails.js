import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import styled from 'styled-components';
import { useLocation } from "react-router-dom"
const { GetProductDetailsFetch, AddToBasketFetch } = require("../requestMethods")

const PageContainer = styled.div` 
position: relative;  
font-family: 'Lato', sans-serif;
`;

const Line = styled.div`
width: 93vw;
border-bottom: 1px solid lightgray;
margin: 0 auto;`

const DetailsContainer = styled.div`
margin: 50px auto;
/* position: absolute; */
/* top: 10%; */
    display: flex;
    /* height: 80vh; */
    justify-content: center;
    height: auto;
    width: 80vw;
    /* min-height: 300px;
    min-width: 350px; */
    /* box-shadow: 0px 10px 40px 5px rgba(0,0,0,0.1); */
`;

const ImageCont = styled.div`
width: 45%;
display: flex;
align-items: center;`

const ProductImg = styled.img`
    /* height: auto; */
    width: 100%;
    /* object-fit: cover; */
    background-color: grey;
    
`;
const InfoCont = styled.div`
width: 50%;
display: flex;
/* align-items: center; */
justify-content:center;
height: 70vh;
`

const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    /* justify-content: center; */
    width: 75%;
    height: 100%;
`;


const ProductName = styled.h1`
    /* margin-left: 10%; */
    width: auto;
    font-size: 50px;
    font-family: 'Lato', sans-serif;
    font-weight: 300;
    
`;

const SellerName = styled.h4`
margin: 0;
font-style: italic;
font-weight: 300;
`

const Description = styled.p`
    /* margin-left: 10%; */
    height: 30%;
    width: 80%;
    /* text-align: center; */
`;

const Tags = styled.p`
    /* margin-left: 10%; */
    color: gray;
`;

const Price = styled.p`
    /* margin-left: 10%; */
    font-size: 24px;
    font-weight: 900;
`;

const AccentLine = styled.div`
border-bottom: 1px solid gray;
width: 100%;`

const ButtonDiv = styled.div`
    display: flex;
    flex-direction: column;
    /* margin-left: 10%; */
    justify-content: space-around;
    width: 75%;
    /* height: 20%; */
    margin-top: 10%;
`;

const ButtonBasket = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    background-color: black;
    color: white;
    border: none;
    transition: all 0.1s ease;
    cursor: pointer;

    &:hover {
    background: #BF8262;
}
`;

const ButtonFavorites = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    border: 1px solid black;
    background-color: white;
    margin-top: 20px;
    transition: all 0.1s ease-in ;
    cursor: pointer;
    &:hover {
    border: 2px solid black;
}
`;


function ProductDetails({prices, setPrices, user, setUser}) {
    const location = useLocation()
    const id = location.pathname.split("/")[2]
    const [product, setProduct] = useState({})

    useEffect(() => {
        GetProductDetailsFetch(id, setProduct)
    }, [id])

    const AddToBasket = ()=> {
        AddToBasketFetch(user, product)
        // console.log(item);
        console.log(user);
        const storedPrices = [...prices]
        storedPrices.push(product.price)
        setPrices(storedPrices)
        console.log(prices)
    }

useEffect(() => {
  console.log(product);
}, [product])
    return (
        <PageContainer>
            <Navbar prices={prices} setPrices={setPrices} user={user} setUser={setUser}/>
        <Line></Line>
            {/* <Div> */}
            <DetailsContainer>
                <ImageCont>

                {/* <ProductImg src={product.img} /> */}
                <ProductImg src={`https://res.cloudinary.com/dthuzb3gx/image/upload/${product.img}.jpg`}></ProductImg>
                </ImageCont>
                <InfoCont>

                <ProductInfo>
                    <ProductName>{product.title}</ProductName>
                    <SellerName>Sold by: <span style={{textDecoration: "underline"}}>{product.username}</span></SellerName>
                    <Description>{product.desc}</Description>
                    <Tags>Tags: {product.categories && product.categories.map((cat, imdex) => {
                        if (imdex === product.categories.length - 1) {
                            return cat
                        } else {
                            return cat + ", "
                        }

                    })}</Tags>
                    <Price>£{product.price}</Price>
                    <AccentLine></AccentLine>
                    <ButtonDiv>
                        <ButtonBasket onClick={AddToBasket}>ADD TO BASKET</ButtonBasket>
                        <ButtonFavorites>ADD TO FAVORITES</ButtonFavorites>
                    </ButtonDiv>
                </ProductInfo>
                </InfoCont>
            </DetailsContainer>
            {/* </Div> */}
        </PageContainer>
    )
}

export default ProductDetails
