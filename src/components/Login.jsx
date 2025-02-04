import React, {useState} from 'react'
import './Login.css';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        const user = {name, email, password, loggedIn:true};
        console.log(user)
        dispatch(login(user));
        navigate('/dashboard');
    }

  return (
    <div className='login'>
        <form action="" className='login-form' onSubmit={(e)=> handleSubmit(e)}>
            <h1>Login</h1>
            <input type="text" placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)} />
            <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" placeholder='Password'value={password} onChange={(e)=>setPassword(e.target.value)} />
            <button type='submit' className='btn'>Submit</button>
        </form>
    </div>
  )
}
