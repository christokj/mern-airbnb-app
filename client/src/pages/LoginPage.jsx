import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom';
import { UserContext } from '../UserContext';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const { setUser } = useContext(UserContext);
    async function handleLoginSubmit(event) {
        event.preventDefault();
        try {
            const { data } = await axios.post('/login', { email, password });
            setUser(data);
            alert('Login successful');
            setRedirect(true);
        } catch (e) {
            alert('Login failed');
            console.log(e);
        }
    }
    if (redirect) {
        return <Navigate to={'/'} />
    }

    return (
        <div className='grow flex items-center justify-around'>
            <div className='mb-32'>
                <h1 className='text-4xl text-center font-black'>Login</h1>
                <form action="" className='max-w-md' onSubmit={handleLoginSubmit} >
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
                    <button className='primary hover:bg-opacity-90'>Login</button>
                    <div className='text-center my-2 text-gray-500 '>
                        Don't have an account yet?
                        <Link to={'/signUp'} className='text-primary mx-1 hover:opacity-90'>Sign Up</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage;