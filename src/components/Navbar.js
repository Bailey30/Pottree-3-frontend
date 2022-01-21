import React , {useState, useEffect} from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom"
import Badge from '@mui/material/Badge';
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import {logout} from "../redux/userSlice"

const NavComponent = styled.div`
    display: flex;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
    /* top: 0;
    left: 0;
    right: 0; */
    max-width: 93vw;
    height: 8vh;
    background-color: white;
    z-index: 100;
;
`;

const Buttons = styled.div`
    display: flex;
    height: 100%;
    width: 25vw;
    justify-content: space-evenly;
    align-items: center;
    position: relative;
    
`;

const NavButton = styled.button`
    border: none;
    margin: 0;
    height: 60%;
    color: black;
    background-color: white;
    &:hover{
        border-bottom: 1px solid black;
    }
    font-size: 12px;
    /* position: relative; */
`;

const Title = styled.h3`
    color: black;
    padding-left: 30px;
    letter-spacing: 1px;
    font-size: 24px;
`;



const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 7,
    // border: `2px solid ${theme.palette.background.paper}`,
    background: "blue",
    padding: '0 4px',
  },
}));

function Navbar({prices, setPrices }) {
    const { userInfo , loggedIn} = useSelector(state => state.user)
    const dispatch = useDispatch()

    const logOut = () => {
        localStorage.removeItem("myToken")
        dispatch(logout())
        // setUser("")
        console.log(userInfo);
        // setPrices(0)
        // setLoggedIn(false)
    } 
    const [basketNum, setBasketNum] = useState()
    
    useEffect(() => {
      setBasketNum(prices)
    }, [prices])
    console.log(userInfo);

    return (
        <NavComponent>
            <Link to='/' style={{ 'textDecoration': 'none' }}>
                <Title>POTTREE</Title>
            </Link>
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
                {loggedIn === false ? <Link to="/login"><NavButton>LOGIN</NavButton></Link> : <Link to=""><NavButton
                    onClick={() => logOut()}
                >LOG OUT</NavButton></Link>}


            </Buttons>
        </NavComponent>
    )
}

export default Navbar
