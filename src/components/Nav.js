import React , {useState, useEffect} from 'react';
import {motion} from 'framer-motion'
import styled from 'styled-components';
import logo from "../img/logo.svg";
import { fetchSearch } from '../actions/gamesAction';
import { useDispatch } from 'react-redux';
import { fadeIn } from './../animation';



const Nav = () =>{

const dispatch = useDispatch()    

const [text , setText] = useState('')

const inputHandler = (e) => {
    setText(e.target.value)
}
const submitSearch = (e) => {
    e.preventDefault()
    dispatch(fetchSearch(text))
    setText("")
}


const clearSearch = () => {
    dispatch({
        type: "CLEAR_SEARCHED"
    })
}

    return (
        <StyledNav variants={fadeIn} initial="hidden" animate="show">
            <Logo onClick={() => clearSearch()}>
                <img src={logo} alt="logo"/>
                <h1>Ignit</h1>
            </Logo>
            <form className="search" onSubmit={submitSearch}>
                <input 
                  type="text"
                 value ={text} 
                 onChange={inputHandler}  />
                <button type="submit" >Search</button>
            </form>
        </StyledNav>
    )
}

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.7rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.7rem 2rem;
    cursor: pointer;
    background: #ff7676;
    color: white;
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  img {
    height: 2rem;
    width: 2rem;
  }
`;

export default Nav 