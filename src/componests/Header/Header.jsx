import React, { useContext } from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Header = () => {

    const {user, logOut} = useContext(AuthContext)

    const handleLogout =() =>{
        logOut()

        .then(result =>{ 
            const loggedOut = result.user;
            console.log(loggedOut)
        })

        .catch(error =>{
            console.log(error.message)
        })
    }


    return (
        <nav className='header'>
                <img src={logo}></img>
            <div>
                <Link to='/'>Shop</Link>
                <Link to='/orders'>Order</Link>
                <Link to='/inventory'>Inventory</Link>
                <Link to='/login'>Login</Link>
                <Link to='/signup'>Sign Up</Link>

                {
                    user && <span className='text-white'>Welcome {user.email} <button onClick={handleLogout}>Sign Out</button></span>
                }
            
            </div>
        </nav>
    );
};

export default Header;