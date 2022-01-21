import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import image from "../images/lglogo.png";

const AboutText = styled.div`    
    Justify-content: center;
    font-family: Lato;
    Font-size: 20px;
`
const Icon  = styled.div`    
    Image: url(${image});    
    Width: 100%;
    Height: 100%;
`



const Container = styled.div`
    Height: 100%;
    Width: 100%;
`

function About() {
    return (         
        <Container>
            <img src={image} width="100px" alt=""/>
                <AboutText>
                    Welcome to Pottree, home of unique, handcrafted pottery.
                    Pottree was established to showcase the one of a kind and the beautiful. We bring together the best hand thrown and fired pottery that Britain has to offer.  As a buyer, you can be assured that nothing you buy is mass produced and that your purchase is supporting artists at work.
                    Our pottery is made by professional and amateur artists or artisans working alone or in small groups, making unique items or short runs. Typically, all stages of manufacture are carried out by the artists themselves.[1] Our selection of pottery includes functional wares such as tableware and non-functional wares such as vases and bowls used only for display. Pottree potters can be referred to as ceramic artists, ceramists, ceramicists, or as an artist who uses clay as a medium.
                </AboutText>            
        </Container>
    )
}

export default About