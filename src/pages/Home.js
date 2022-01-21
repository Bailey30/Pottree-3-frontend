import React, { useEffect, useState } from "react"
import styled from "styled-components"
import head from "../images/newheader.avif"
import logo from "../images/lglogo.png"
import cup from "../images/cups.jpg"
import plate from "../images/plates.jpg"
import bowl from "../images/bowls.jpg"
import vase from "../images/vases.jpg"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import {logout } from "../redux/userSlice"

const Container = styled.div`
width: 100vw;
max-width: 100%;
padding: 0;
margin: 0;
overflow: hidden;
`

const Navbar = styled.div`
position: absolute;
left: 0;
right: 0;
height: 60px;
/* border-bottom: 1px solid gray; */
display: flex;
justify-content: flex-end;`

const Buttons = styled.div`
height: 100%;
background: none;
margin: 20px 40px;
`

const NavButton = styled.button`
cursor: pointer;
height: 100%;
margin: 0 15px;
background: none;
border: none;
font-size: 12px;
transition: all 0.2s ease;
&:hover{
  color: gray;
}
`

const HeadingText = styled.div`
position: absolute;
display: flex;
flex-direction: column;
align-items: center;  
justify-content: center;
width: fit-content;
height: fit-content;
left: 50%;
top: 25%;
transform: translate(-50%);`

const Title = styled.div`
font-family: 'Poppins', sans-serif;
letter-spacing: 24px;
font-weight: 200;
font-size: 110px;
/* margin-left: 20vh; */
/* padding-top: 20vh; */
color: black;
width: fit-content;
margin: 0 auto;
text-align: center;
height: fit-content;
/* position: absolute; */
/* top: 20%; */
`;

const H2 = styled.div`
position: absolute;
top: 80%;
font-family: Lato;
font-size: 25px;
color: #272c33;
width: 100%;
margin-left: 20px;

`;

const ButtonCont = styled.div`
position: absolute;
width: 30%;
display: flex;
justify-content: space-between;
height: auto;
left: 49.5%;
transform: translate(-50%);
top: 48%;
margin: 0 auto;
`

const Button1 = styled.button`
background-color: black;
  border: 1px solid black;
  box-sizing: border-box;
  color: white;
  font-family: "Lato",sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  /* padding: 5px 50px; */
  width: 250px;
  height: 50px;
  /* margin-left: 20vh;
  margin-top: 100px; */
  text-decoration: none;
  user-select: none;
  letter-spacing: 2px;
  cursor: pointer;
`;

const Button2 = styled(Button1)`
  background-color: white;
  margin-left: 10px;
  color: black;
`;

const H3 = styled.a`
font-family: Lato;
font-size: 20px;
text-decoration: none;
/* margin-bottom: 70px;
margin-left:30px; */
width: fit-content;
font-size: 16px;
transition: all 0.5s ease;
&:hover{
  color: gray;
}
`;

const Head = styled.div`
overflow: hidden;
/* display: flex-row; */
margin: 0;
padding: 0;
width: 100vw;
height: 100vh;
max-width: 100%;
/* height: 100vh; */
position: relative;
/* bottom: 30px; */

background-image: url(${head});
background-repeat: no-repeat;
background-size: 100% ;
`;

const Logo = styled.div`
background-image: url(${logo});
width: 60px;
height: 70px;
padding: 20px;
margin: 0 auto;
object-fit: cover;
background-repeat: no-repeat;
`;

const About = styled.div`
width: 100vw;
height: 200px;`

const AboutText = styled.p`
text-align: center;
margin: 140px auto;
width: 80vw;
font-size: 24px;
font-weight: 200;
line-height: 2;`

const Spacer = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
width: 100vw;
height: 30vh;
`;

const Text = styled.div`
font-family: Lato;
font-size: 20px;
color: #272c33;
width: 50%;
margin: 10px auto 20px;
padding: 20px;
text-align: center;
`;

const Catagories = styled.div`
display:flex;
flex-direction: flex-row;
justify-content: space-around;
margin: 50px 0;
`;

const Boxes = styled.div`
display: flex;
justify-content: center;
align-items: center;
/* background-color: #b8a982; */
background-color: white;
height: 10%;
width: 75%;
position: absolute;
bottom: 5%;
`;

const Bowls = styled.div`
display: flex;
flex-direction: column;
margin:20px;
background-image: url("https://images.unsplash.com/photo-1610701596007-11502861dcfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
width: 25%;
height: 550px;
position: relative;
align-items: center;
background-size: auto 100%;
background-repeat: no-repeat;

`;

const Plates = styled(Bowls)`
background-image: url(${plate});
position: relative;
display: flex;
align-items: center;
background-size: 100%;
`;

const Cups = styled(Bowls)`
background-image: url(${cup});
position: relative;
display: flex;
align-items: center;
background-size: cover;
background-repeat: no-repeat;
`;

const Vases = styled(Bowls)`
background-image: url("https://images.unsplash.com/photo-1597385326493-bc600d15c39c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80");
position: relative;
display: flex;
align-items: center;
background-size:  100% auto;
background-position: 75%;
background-repeat: no-repeat;
`;

const Footer = styled.div`
width: 100%;
height: 30vh;
background-color: #16191f;
`;


function Home({ setPrices, prices }) {
  const { userInfo, loggedIn } = useSelector(state => state.user)
  const dispatch = useDispatch()
  const logOut = () => {
    localStorage.removeItem("myToken")
    console.log(userInfo);
    setPrices(0)
    dispatch(logout())
    // setLoggedIn(false)
  }
  return (
    <Container>
      <Head>
        <Navbar>
          <Buttons>

            <Link to='/productpage/All'>
              <NavButton>SHOP</NavButton>
            </Link>
            <Link to='/uploadproduct'>
              <NavButton>SELL</NavButton>
            </Link>

            <Link to='/basket'>
              <NavButton>
                BASKET
              </NavButton>

            </Link>
            {loggedIn === false
              ?
              <Link to="/login"><NavButton>LOGIN</NavButton></Link>
               : loggedIn === true ? 
              <Link to=""><NavButton onClick={() => logOut()}
              >LOG OUT</NavButton></Link>
            : null}


          </Buttons>
        </Navbar>
        <HeadingText>
          <Title>POTTREE</Title>
          <H2>Buy and sell unique, beautiful, handcrafted pottery</H2>
        </HeadingText>

        <ButtonCont>
          <Link to="/productpage"><Button1 href="">BROWSE ALL</Button1></Link>
          <Link to="/uploadproduct"><Button2>SELL</Button2></Link>
        </ButtonCont>

      </Head>
      <About>
        <AboutText>
          Welcome to Pottree, home of unique, handcrafted pottery.
          Pottree was established to showcase the one of a kind and the beautiful. We bring together the best hand thrown and fired pottery that Britain has to offer.  As a buyer, you can be assured that nothing you buy is mass produced and that your purchase is supporting artists at work.
          {/* Our pottery is made by professional and amateur artists or artisans working alone or in small groups, making unique items or short runs.  */}
          {/* Typically, all stages of manufacture are carried out by the artists themselves.[1] Our selection of pottery includes functional wares such as tableware and non-functional wares such as vases and bowls used only for display. Pottree potters can be referred to as ceramic artists, ceramists, ceramicists, or as an artist who uses clay as a medium. */}
        </AboutText>

      </About>
      <Spacer>
        <Logo />
        <Text>Browse by catagory or follow the links above</Text>
      </Spacer>
      <Catagories>
        <Plates>
          <Boxes>
            <Link to="productpage/Plate" style={{ textDecoration: "none", color: "black", letterSpacing: "2px" }}>
              <H3>PLATES</H3>
            </Link>
          </Boxes>
        </Plates>
        <Cups>
          <Boxes>
            <Link to="productpage/Mug" style={{ textDecoration: "none", color: "black", letterSpacing: "2px" }}><H3>CUPS</H3></Link>
          </Boxes>
        </Cups>
        <Bowls>
          <Boxes>
            <Link to="productpage/Bowl" style={{ textDecoration: "none", color: "black", letterSpacing: "2px" }}><H3>BOWLS</H3></Link>
          </Boxes>
        </Bowls>
        <Vases>
          <Boxes>
            <Link to="productpage/Vase" style={{ textDecoration: "none", color: "black", letterSpacing: "2px" }}><H3>VASES</H3></Link>
          </Boxes>
        </Vases>
      </Catagories>
      <Footer />
    </Container>
  )
}
export default Home