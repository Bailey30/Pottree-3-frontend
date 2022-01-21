
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from '../components/Navbar';
import Basket from "../components/Basket"

const Container = styled.div`
width: 100vw;
`
const Line = styled.div`
width:93vw;
border-bottom: 1px solid gray;
margin: 0 auto;`


function BasketPage({ user, setUser, prices, setPrices }) {
    return (
        <Container>
                <Navbar/>
                <Line></Line>
                <Basket prices={prices} setPrices={setPrices}/>
            {/* <Wrapper>
                <LeftCont>
                    <Basket user={user} />
                </LeftCont>
                <RightCont>
                    <Totals>
                        <Subtotal><Text>Subtotal</Text><Amount></Amount></Subtotal>
                        <Shipping><Text>Shipping</Text><Amount></Amount></Shipping>
                        <Total><Text>Total</Text><Amount></Amount></Total>
                    </Totals>
                </RightCont> */}
            {/* </Wrapper> */}


        </Container>
    )
}

export default BasketPage

