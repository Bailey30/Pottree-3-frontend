import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Navbar from "../components/Navbar"
import ProductFeed from "../components/ProductFeed"
import { useLocation } from "react-router-dom"

const Container = styled.div``

function ProductPage({ prices, setPrices}) {
  
  const location = useLocation()
  const id = location.pathname.split("/")[2]
  const [params, setParams] = useState("All")
  const [filters, setFilters] = useState(params)

  useEffect(() => {
    setParams(location.pathname.split("/")[2])
  }, [])
  useEffect(() => {
    setFilters(params)
  }, [params])
  console.log(filters)
  // console.log(location.pathname) 
  // console.log(this.match.params)
    

  return (
    <Container>
      <Navbar style={{"z-index": 100}}  prices={prices} setPrices={setPrices}/>
      <ProductFeed  prices={prices} setPrices={setPrices} params={params} filters={filters} setFilters={setFilters}/>
    </Container>
  )
}

export default ProductPage