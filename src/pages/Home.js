import React,{Fragment,useContext,useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
 const navigate = useNavigate()
  return (
    <Fragment>
        <h1>Home Page </h1>
        <button type='buttom' onClick={() => navigate("/login")}> Login ! </button>
    </Fragment> 
  );
}

export default Home;