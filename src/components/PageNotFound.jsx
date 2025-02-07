import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { useNavigate } from 'react-router-dom';

export default function PageNotFound() {

  const user = useSelector(selectUser);
  const navigate = useNavigate();

  useEffect(()=>{
      if(!user) navigate('/login');
  }, [user])

  return (
    <div>
        <h1>404</h1>
        <h2>Page not found.</h2>
    </div>
  )
}
