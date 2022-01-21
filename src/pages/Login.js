import React, { useEffect, useState } from "react"
import Login from "../components/Login"
import styled from "styled-components"
import Navbar from "../components/Navbar"

const Container = styled.div``



function LoginPage({user, setUser, prices, setPrices}) {
  return (
    <Container>
      <Navbar prices={prices} setPrices={setPrices}/>
      <Login prices={prices} setPrices={setPrices}/>
    </Container>
  )
}

export default LoginPage