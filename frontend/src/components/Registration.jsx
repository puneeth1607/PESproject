import React, { useState } from 'react';
import './style.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
   const navigate = useNavigate();

    const handle = async (e) => {
        e.preventDefault(); // Prevent form submission
        const data = { name, phone, email, password, confirmPassword };
        try {
            const response = await axios.post('http://localhost:5000/userdetails', data);
            setMessage(response.data.message);
            navigate('/login')
        } catch (error) {
            setMessage(error.response ? error.response.data.message : 'Error occurred');
        }
    };

    return (
        <div className='regcontinar'>      
            <h1 style={{ color: 'white' }}>Registration Form</h1>
            <form className='reg' onSubmit={handle}>
                <div>
                    <label htmlFor="">Name :</label>
                    <input type="text" placeholder='Name' 
                        onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">PhoneNO :</label>
                    <input type="number" placeholder='phone' 
                        onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">Email :</label>
                    <input type="email" placeholder='email' 
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">Password :</label>
                    <input type="password" placeholder='password' 
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">Confirm Password:</label>
                    <input type="password" placeholder='confirm password' 
                        onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
                <button type="submit">Register</button>
            </form>
            {message && <p>{message}</p>} {/* Display message */}
        </div>
    );
}

export default Registration;

