import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('') 
  const [password, setPassword] = useState('')
  const navigate = useNavigate();
  const handle =()=>{
    const data = {email,password}
    axios.post('http://localhost:5000/login',data)
    .then((res) => {
      if (res.data.status === 200) {
        alert(res.data.message)
        navigate('/demo')
      } else {
        alert(res.data.message)
      }
    })
  }


  return (
    <div className='regcontinar'>      
    <h1 style={{color:'white'}}>login</h1>
      <form action="" className='reg'>
       
       <div>
       <label htmlFor="">Email :</label>
       <input type="email" placeholder='email' 
       onChange={
        (e) => setEmail(e.target.value)
       } />
       </div>
       
       <div>
       <label htmlFor="">Password :</label>
       <input type="password" placeholder='password' 
       onChange={
        (e) => setPassword(e.target.value)
       }
       />
       </div>
    
        <button type="submit" onClick={handle}>Login</button>
      </form>

    </div>
  )
}

export default Login
