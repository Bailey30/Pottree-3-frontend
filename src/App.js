import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { TokenFetch } from "./requestMethods";
import { useLocation } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import './App.css';
import Home from "./pages/Home"
import Login from "./pages/Login"
import Basket from "./pages/BasketPage"
import UploadProduct from "./pages/UploadProduct";
import ProductPage from "./pages/ProductPage";
import LoginSuccess from "./pages/LoginSuccess";
import RegisterSuccess from "./pages/RegisterSuccess";
import ProductDetails from "./pages/ProductDetails";
import About from "./pages/About";
import UploadSuccess from "./components/UploadSuccess";



function App() {
  const { userInfo } = useSelector(state => state.user)

  const [prices, setPrices] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    TokenFetch(dispatch)
    // setLoggedIn(true)
    console.log("useeffect ran");
  }, [])


  // const SignInWrapper = ({ children, loggedIn }) => {
  //   const location = useLocation()
  //   console.log(location)
  //   return !uploaded ? <Navigate to="uploadproduct" replace /> : children
  // }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home prices={prices} setPrices={setPrices} />}></Route>
        <Route path="/basket" element={<Basket prices={prices} setPrices={setPrices} />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/uploadproduct" element={<UploadProduct prices={prices} setPrices={setPrices} />}></Route>
        <Route path="/productpage/" element={<ProductPage prices={prices} setPrices={setPrices} />}></Route>
        <Route path="/productpage/:cat" element={<ProductPage prices={prices} setPrices={setPrices} />}></Route>
        <Route path="/product/:id" element={<ProductDetails prices={prices} setPrices={setPrices} />}></Route>
        {/* <Route path="/basket" element={<Basket/>}></Route> */}

        <Route path="/uploadsuccess/:id" element={
          // <SignInWrapper>
          <UploadSuccess />}
        // </SignInWrapper>}
        >
        </Route>


        <Route path="/about" element={<About />}></Route>

      </Routes>

    </Router>
  );
}

export default App;
