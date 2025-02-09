import React from 'react'
import "./Sidebar.css";

import { AiOutlineDashboard, AiOutlineUser, AiOutlineTeam, AiOutlineCalendar, AiOutlineQuestionCircle, AiOutlineSetting, AiOutlineLogout } from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";
import { IoChatbubbleOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';


export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <div className="sidebar">
        <div className='navbar'>
          <h2 className="logo" onClick={()=> navigate('/login')}>FIT SPACE</h2>
          <nav className='navbar-items'>
            <ul>
            <li className="active"><AiOutlineDashboard /> Dashboard</li>
            <li><AiOutlineUser /> Clients</li>
            <li><AiOutlineTeam /> Groups</li>
            <li><AiOutlineCalendar /> Calendar</li>
            <li><RxDashboard/> Templates </li>
            <li><IoChatbubbleOutline /> Chats</li>
            <li><AiOutlineQuestionCircle /> Help</li>
            </ul>
          </nav>
        </div>
        <div className="settings">
          <div><AiOutlineSetting/>Settings</div>
          <div className="logout"><AiOutlineLogout/>Log Out</div>
        </div>
      </div>
  )
}
