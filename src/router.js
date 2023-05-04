import React, { useContext } from 'react'
import { Route,Routes } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Missing from './pages/Missing'
import User from './pages/User'
import Admin from './pages/Admin'
import NotAuth from './pages/NotAuth'
import Layout from './pages/Layout'
import { UserContext } from './App';


const Router = () => {



  return (
    <Routes>
        {/* public routes */}
        <Route path='/login' element={<Login/>}/>
        <Route path='/notAuth' element={<NotAuth/>}/>
        <Route path='/' element={<Home/>}/>
        

        {/* protected routes  */}
        <Route path='/user' element= { 
          <Layout> <User/> </Layout>
        }/>
        
        
        <Route path='/admin' element={
          <Layout><Admin/></Layout>
        }/>

        {/* route not found */}
        <Route path='/*' element={<Missing/>}/>
    </Routes>
  )
}

export default Router