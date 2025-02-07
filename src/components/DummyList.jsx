import React, { useEffect, useState } from 'react'
import './DummyList.css';
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

import { IoIosNotifications } from "react-icons/io";
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaCircleUser } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

export default function DummyList() {
  const [dummyData, setDummyData] = useState([]);
  const [postId, setPostId] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [status, setStatus] = useState(404);
  const [addedData, setAddedData] = useState();
  const [limit, setLimit] = useState(5);
  
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  useEffect(()=>{
          if(!user) navigate('/login');
      }, [user])

  const handleClick = ()=>{
    navigate('/dashboard');
  }

  const fetchDummyData = async ()=>{
    try{
        const responce = await axios.get("https://jsonplaceholder.typicode.com/posts");
        console.log(responce.data)
        setDummyData(responce.data);

    }catch(err){
      console.log(err)
    }
  }

  const submitData = async (e)=>{
    e.preventDefault();
    console.log("done")
    try{
        const responce = await axios.post("https://jsonplaceholder.typicode.com/posts", {postId, title, body})
        console.log("responce", responce.status)
        setStatus(responce.status);
        setAddedData(responce.data)
        setPostId("");
        setBody("");
        setTitle("");
        
    }catch(err){
      console.log(err);
    }
  }

  useEffect(()=>{
    fetchDummyData();

  },[]);

  return (
    <>
        <header className="header">
          <div className='header-icon' style={{color:"white"}} onClick={handleClick}><IoMdArrowRoundBack /></div>
          <div className='header-right'>
              <div className='header-icon'><IoIosNotifications /></div>
              <div className='header-icon'><MdMarkEmailUnread /></div>
              <div className='header-icon'><FaCircleUser /></div>
          </div>
          </header>

            <div className='main-dummy-card'>

              <div className="dummy-card">
              <h2>ADD DATA</h2>
                <form action="" className='login-form' onSubmit={submitData}>
                  <input type="number" placeholder='Post Id' value={postId} onChange={(e)=>setPostId(e.target.value)} />
                  <input type="text" placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)} />
                  {/* <input type="text" placeholder='Body' value={postId} onChange={(e)=>setPostId(e.target.value)} /> */}
                  <textarea name="text" id="" placeholder='Body' value={body} onChange={(e)=>setBody(e.target.value)}></textarea>

                  <button className='btn'>Submit</button>
                </form>
                { 
                  status === 201 
                  ? <div className="message">
                      Your data added successfully.
                      <div className='card-data'>
                          <div className='card-title'>
                            <h3>{addedData?.id}</h3>
                            <h4>{addedData?.title}</h4>
                          </div>
                          <p>{addedData?.body}</p>
                      </div>
                  </div> : null 
                }
              </div>

             <div className="dummy-card">
             <h1>DUMMY DATA</h1> 
              {
                dummyData?.map((data, i)=>{
                  return (
                    <>
                    {
                      i<limit 
                      ? <div className='card-data'>
                          <div className='card-title'>
                            <h3>{data.id}</h3>
                            <h4>{data?.title}</h4>
                          </div>
                          <p>{data.body}</p>
                      </div>:null 
                    }
                    </>
                )
                })
              }

              {
                limit < 100 ? <button className='btn' onClick={()=>setLimit(limit+30)}>Show more</button>
                : <button className='btn' onClick={()=>setLimit(5)}>Show Less</button>
              }
              </div>
            </div>
          
    </>
  )
}
