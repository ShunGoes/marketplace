import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Fragment } from "react";
import './navigation.styles.scss'


const Navigation = () => {
  return (
    <Fragment>
        <nav className='navigation'>
            <Link className='logo-container' to='/'>
                <h3 className='logo'>
                    Market<span className='logo-span'>Place</span>       
                </h3>
            </Link>
            <div className="nav-links-container">
                <Link className='nav-links' to='/shop'> shop</Link>
                <Link className='nav-links' to='/auth'> sign in</Link>
            </div>
        </nav>
            <Outlet />
    </Fragment> 
  )
}

export default Navigation