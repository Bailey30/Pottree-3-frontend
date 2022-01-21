import React, { useEffect, useState } from "react"
import styled from "styled-components"

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 100vh;
position: relative;
overflow: hidden;`

const Contents = styled.div`
width: 30vw;
height: 20vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
background: white;
z-index: 100;`
const Text = styled.p``
const ButtonCont = styled.div``
const Button = styled.button`
width: 200px;
height: 40px;
margin: 20px;
color: ${props=> props.color};
background-color: ${props=> props.bg};`

const Background = styled.img`
position: absolute;
object-fit: contain;`

const Mask = styled.div`
height: 100%;
width: 100%;
position: absolute;
background: linear-gradient(rgba(255,255,255, 0.2), rgba(255,255,255, 0.2));
/* opacity: 0.3; */
`

function LoginSuccess({user, setUser}) {
  return (
    <Container>
      <Background src="https://images.unsplash.com/photo-1524259493079-d51c2c78adfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"></Background>
      <Mask></Mask>
      <Contents>
        <Text>
          You have successfully logged in
        </Text>
      <ButtonCont>
        <Button color="white" bg="black">
      CONTINUE TO SHOP
        </Button>
        <Button color="black" bg="white">
    SELL AN ITEM
        </Button>
      </ButtonCont>
        
      </Contents>
      
    </Container>
  )
}

export default LoginSuccess