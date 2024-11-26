import React from 'react'
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';

function Login() {

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const users =[
        {
            username:'ruwini01',
            password:'ruwini123'
        },
        {
            username:'hiru123',
            password:'#44'
        },
        {
            username:'nazik11',
            password:'#11'
        },

    ] 

    const navigate = useNavigate();
    const authenticate = 
       () => {
           const user = users.filter((user) => user.username === username && user.password === password);
           
           if(user.length !== 0){
            navigate('/dash');
           }
           else{
            alert('Incorrect Username or Password');
           } 
       }


  return (
    <div>
        <h1>Login Here</h1>

        <input type='text' name='username' value={username} placeholder='Username' onChange={(e) => setUserName(e.target.value)}/>
        <br/>
        <input type='password' name='password' value={password} placeholder='Password' onChange={(e)=> setPassword(e.target.value)}/>
        <br/>
        <button onClick={authenticate}>Login</button>
    </div>
  )
}

export default Login