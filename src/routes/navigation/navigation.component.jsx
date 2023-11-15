import { Link, Outlet } from 'react-router-dom'
import { Fragment, useContext } from "react";
import './navigation.styles.scss'

import { UserContext } from '../../context/user.context';

import { signOutUser } from '../../utils/firebase/firebase.utils';

const Navigation = () => {
    const { currentUser} = useContext(UserContext)
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
                {
                    currentUser ? <span className='nav-links' onClick={signOutUser}> sign out</span> : (

                        <Link className='nav-links' to='/auth'> sign in</Link>
                    )
                }
            </div>
        </nav>
            <Outlet />
    </Fragment> 
  )
}

export default Navigation