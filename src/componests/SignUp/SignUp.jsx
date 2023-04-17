import React, { useContext, useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
const SignUp = () => {

    const [error, setError] = useState('')
    const {createUser} = useContext(AuthContext)


    const handleSignUp =(even) =>{
        even.preventDefault();

        const form = even.target;
        const email = form.email.value;
        const password = form.password.value;
        const conform = form.conform.value;
        setError('')

        if(password !== conform){
            setError('Your password did not match')
            return
        }

        else if( password.length < 6){
            setError('Password must be 6 characters or longer')
            return
        }

        createUser(email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser)
        })
     
        .catch(error =>{
            console.log(error)
            setError(error.message)
        })




    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>

            <form onSubmit={handleSignUp}>

                <div className='form-control'>
                    <label htmlFor='email'>Email</label>
                    <input type="email" name='email' required />
                </div>

                <div className='form-control'>
                    <label htmlFor='password'>Password</label>
                    <input type="password" name='password' required />
                </div>

                <div className='form-control'>
                    <label htmlFor='conform'>Conform Password</label>
                    <input type="password" name='conform' required />
                </div>
                <input className='btn-submit' type="submit" value='Sign Up' />
              
                <p className='new-account-text'><span>Already have an account? </span> <Link className='link-text' to='/login'> Login</Link></p>
                <p className='text-error'>{error}</p>

            </form>

        </div>
    );
};

export default SignUp;