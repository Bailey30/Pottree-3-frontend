import React, { useEffect, useState } from "react"
import styled from "styled-components"
import AddIcon from '@mui/icons-material/Add';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const {AddToBasketFetch} = require("../requestMethods")

const Container = styled.div`
width: 23%;

display: flex;
flex-direction:column;
margin: 20px 0px;
position: relative;
z-index: 0;


`
const LinkCont = styled.div`
position: absolute;
top: 0;
left: 0;
bottom: 19%;
right: 0;
opacity: 0;
/* background-color:white; */
z-index: 100;
display: flex;
/* align-items: center; */
justify-content: center;
transition: all 0.5s ease;
`

const IconCont = styled.div`
display: flex;
position: absolute;
bottom: 40%;
opacity: 0;
transition: all 0.4s ease;`

const Icon = styled.div`
margin: 10px;
/* background-color: white; */
display: flex;
/* align-items: center; */
justify-content: center;
height: 30px;
width: 30px;
color: blue;
cursor: pointer;
`

// const Image = styled.img`
// max-width: 440px;
// height: 100%;
// object-fit: cover;
// /* margin-bottom: 10px; */
// z-index: -100;
// position: relative;
// &:hover {transform: translateY(30px)};
// /* ${LinkCont}{    opacity: 1;} */
// ;
// `
const Image = styled.img`
width: 100%;
object-fit: cover;
`

const ImageCont = styled.div`
max-width: 440px;
height:390px;
display: flex;
justify-content: center;
overflow: hidden;
&:hover ${LinkCont} {
    opacity: 1
};
&:hover ${Image}{opacity: .5}
&:hover ${IconCont}{bottom: 45%;
opacity: 1;}
`

const BottomCont = styled.div`
display: flex;
flex-direction: column;
`

const Title = styled.span`
padding: 10px 5px;
margin-bottom: 7px;
margin-top: 15px;
border-bottom: 1px solid gray;
height: 40px;
font-style: italic;
font-weight: 400;
`

const Price = styled.span`
padding: 10px 5px;
font-weight: 700;
`
const BottomLine = styled.div`
display: flex;
align-items: center;
justify-content: space-between;`


function Product({  item, prices, setPrices }) {
    const { categories, desc, img, title, userId, price } = item
    const {userInfo} = useSelector(state=>state.user)
    const AddToBasket = ()=> {
        AddToBasketFetch(userInfo, item)
        console.log(item);
        console.log(price)
        const storedPrices = [...prices]
        storedPrices.push(price)
        setPrices(storedPrices)
        console.log(prices);
    }


    return (
        <Container>
            {/* <Image src={img}></Image> 
            <LinkCont>fdgdfg</LinkCont> */}
            <ImageCont>
                {/* <Image src={img}></Image> */}
                <Image src={`https://res.cloudinary.com/dthuzb3gx/image/upload/${img}.jpg`}></Image>
                <LinkCont>
                <IconCont>
                    <Icon><FavoriteBorderIcon style={{"color": "black", "fontSize": "30px"}}/></Icon>
                <Icon><ShoppingCartIcon style={{"color": "black", "fontSize": "30px"}} onClick={AddToBasket}/></Icon>
                <Link to={`/product/${item._id}`}>
                    <Icon><InfoIcon style={{"color": "black", "fontSize": "30px"}}/></Icon>
                    </Link>
                </IconCont>
                

                </LinkCont>
            </ImageCont>

            <BottomCont>
                <Title>{title}</Title>
                <BottomLine><Price>£{price}</Price>
                {/* <AddIcon /> */}
                </BottomLine>
            </BottomCont>
        </Container>
    )
}

export default Product