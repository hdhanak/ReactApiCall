import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
          <nav>
           
                <NavLink to="/auth/home">Home</NavLink><br></br>
              
                <NavLink to="/auth/getUser">getUser</NavLink>
              
          </nav>
    
          <Outlet />
        </>
      )
}

export default Layout