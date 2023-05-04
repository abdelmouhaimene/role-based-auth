
import React,{Fragment, useContext} from 'react'
import { UserContext } from '../App'
import { useNavigate } from "react-router-dom";
import Login from './Login';
const Layout = ( {children} ) => {
    const {user} = useContext(UserContext)
    const navigate = useNavigate()
  if(user) {
    return (
      <Fragment>
          <nav style={{backgroundColor : '#FFF' }}> 
              <p >
              this is nav bar for - :   {user.username}  - type :  {user.role}
              </p>
              <button type='button' on onClick={() =>{ navigate("/login"); }}>
                  logout 
              </button>
              
          </nav>
          {children}
          <footer >
              <button style={{margin : "1rem" }} type='button' on onClick={() =>{ navigate("/user"); }}>
                  userpage 
              </button>
              <button  style={{margin : "1rem" }} type='button' on onClick={() =>{ navigate("/admin"); }}>
                  adminpage
              </button>
          </footer>
      </Fragment>
    )
  } else {
    return <Login/>
  }

}
export default Layout