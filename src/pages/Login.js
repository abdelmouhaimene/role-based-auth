import React,{Fragment,useContext,useState} from 'react'
import {  useNavigate } from "react-router-dom";
import { UserContext } from '../App';
import { login,Roles } from '../data';
import './login.css'


const Login = () => {
  const { user,setUser } = useContext(UserContext)
  const navigate = useNavigate();
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
   const loggedUser = login(username,password);
    if (loggedUser) {
      setUser(loggedUser)
      if (loggedUser.role === "admin") {
        console.log("login admin");
        navigate('/admin')
      } else if (loggedUser.role === "user") {
        console.log("login user");
        navigate('/user')
      }

    }
    else { 
      console.log('no user');
    }
  }
  return (
    <Fragment>
    <div className='login-container'>
      <form onSubmit={handleSubmit}>
        <div className='login-fram-container'>
          <h1>Login</h1>
          <label> UserName </label>
          <input type='text' value={username} onChange={handleUsernameChange} name='username' />
          <label> password </label>
          <input type='password' value={password} onChange={handlePasswordChange} name='password' />
          <button type='submit'> login </button>
        </div>
      </form>
    </div>
  </Fragment>
  )
}

export default Login