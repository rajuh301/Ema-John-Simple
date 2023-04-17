import React, { useContext, useState } from 'react';
import './Login.css'
import Swal from 'sweetalert2'


import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Login = () => {


  

    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const { signIn } = useContext(AuthContext)


    const handleLogin = (even) => {
        even.preventDefault();

        const form = even.target;
        const email = form.email.value;
        const password = form.password.value;
        setError('')

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                setSuccess('User Login successfully')
                form.reset();
                console.log(loggedUser)
                alert("User login successfully")

            })

            .catch(error => {
                setError(error.message)
            })
    }


    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>

            <form onSubmit={handleLogin}>

                <div className='form-control'>
                    <label htmlFor='email'>Email</label>
                    <input type="email" name='email' required />
                </div>

                <div className='form-control'>
                    <label htmlFor='password'>Password</label>
                    <input type="password" name='password' required />
                </div>
                <input className='btn-submit' type="submit" value='Login' />

                <p className='new-account-text'><span>New to Ema-john ? </span> <Link className='link-text' to='/signup'> Create New Account</Link></p>
            </form>

            <div className='or-section'>
                <p className='or'></p>
                <p>or</p>
                <p className='or'></p>
            </div>
            <p>{error}</p>
            <p>{success}</p>

            <div className='with-google'>
                <img src="https://static.vecteezy.com/system/resources/previews/010/353/285/original/colourful-google-logo-on-white-background-free-vector.jpg" alt="" />

                <button>Continue with Google</button>

            </div>


        </div>
    );
};

export default Login;