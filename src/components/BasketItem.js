import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { useSelector } from "react-redux"
const { RemoveFromBasketFetch } = require("../requestMethods")

const Container = styled.div`
border-bottom: 1px solid gray;
width: 50vw;
display: flex;
height: 170px;
margin: 10px;`
const ImageCont = styled.div`
height: 100px;
width: 100px;
overflow: hidden;
margin: 20px;
`
const Image = styled.img`
height: 100%;
object-fit: cover;`
const RightCont = styled.div`
display: flex;
justify-content: space-between;
width: 100%;`
const InfoCont = styled.div``
const Name = styled.div`
padding: 10px;
margin-top: 20px;
font-weight: 200;`
const Price = styled.span`
margin: 10px;
font-weight: 500;`

const Button = styled.button`
height: 40px;
margin-top: 30px;
background: none;
width: 150px;
border: 1px solid gray;
cursor: pointer;
&:hover {
  background: black;
  color: white;
}
`



function BasketItem({ item, index, setBasket , basket, user, prices, setPrices}) {
  const { userInfo } = useSelector(state => state.user)


  const removeFromBasket = () => {
    RemoveFromBasketFetch(userInfo, item)
    const storedBasket = [...basket]
    storedBasket.splice(index, 1)
    setBasket(storedBasket)
    console.log(item._id)
    const storedPrices = [...prices]
    storedPrices.splice(index, 1)
    setPrices(storedPrices)
  }

  return (
    <Container>
      <ImageCont>
        <Image src={`https://res.cloudinary.com/dthuzb3gx/image/upload/${item.img}.jpg`}></Image>
      </ImageCont>
      <RightCont>
        <InfoCont>
          <Name>{item.title}</Name>
          <Price>£ {item.price}</Price>
        </InfoCont>
        <Button onClick={removeFromBasket}>REMOVE</Button>
      </RightCont>
    </Container>
  )
}

export default BasketItem
