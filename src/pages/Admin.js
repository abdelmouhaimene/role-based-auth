import React,{useContext} from 'react'
import NotAuth from './NotAuth';
import { UserContext } from '../App';




const Admin = () => {

  const {user} = useContext(UserContext)
  const role = user ? user.role : null ;

  if(role === 'admin'){
  return (
    <div>
      <h1> Admin Page - just for admins  </h1>
    </div>
  )
  }else{
    return<NotAuth />
  }
}

export default Admin