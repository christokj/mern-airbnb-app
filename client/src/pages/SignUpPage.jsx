import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
function SignUpPage() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function signUpUser(event) {
        event.preventDefault();
        try {
            await axios.post('/signUp', {
                name,
                email,
                password,
            });
            alert('Sign up successfull. Now you can log in');
        } catch (e) {
            alert('Sign up failed. Please try again later');
        }
    }

    return (
        <div className='grow flex items-center justify-around'>
            <div className='mb-32'>
                <h1 className='text-4xl text-center font-black'>Sign Up</h1>
                <form action="" className='max-w-md' onSubmit={signUpUser} >
                    <input
                        type="text"
                        placeholder='User name'
                        value={name}
                        onChange={event => setName(event.target.value)}
                    />
                    <input
                        type="email"
                        placeholder='Email'
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                    />
                    <input
                        type="password"
                        placeholder='Password'
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                    />
                    <button className='primary'>Sign Up</button>
                    <div className='text-center my-2 text-gray-500'>
                        All ready a member?
                        <Link to={'/login'} className='text-primary ml-1 hover:opacity-90' >Login</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUpPage;