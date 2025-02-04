import React from 'react'
import './Sidebar.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { MdArrowForwardIos } from "react-icons/md";
import { FaChevronLeft } from "react-icons/fa6";
import { MdSpaceDashboard } from "react-icons/md";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaProductHunt } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { FaLayerGroup } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import { logout } from '../features/userSlice';

export default function Sidebar ({openSidebar, steOpenSidebar}) {
const dispatch = useDispatch();
const navigate = useNavigate();

const handleClicked = ()=>{
    // console.log("clicked")
    navigate('/dummy-list');
}
const clickDashboard = ()=>{
    navigate('/dashboard');
}

const handleLogout = ()=>{
    dispatch(logout());
    navigate('/login')
}

  return (
    <>
    <aside id="sidebar" >
        <div className='arrow' onClick={()=>steOpenSidebar(!openSidebar)} >
            { openSidebar 
            ? <MdArrowForwardIos /> 
            :<FaChevronLeft />
            }
        </div>
        <div>
            <div className='menu-bar' onClick={clickDashboard}>
                <MdSpaceDashboard />
                {openSidebar ? <div className='menu-text'>Dashboard</div> : null}
            </div>
            <div className='menu-bar'> 
                <MdOutlineProductionQuantityLimits />
                {openSidebar ? <div className='menu-text'>Products</div> : null}
            </div>
            <div className='menu-bar'>
                <MdCategory />
                {openSidebar ? <div className='menu-text'>Category</div> : null}
            </div>
            <div className='menu-bar' onClick={handleClicked}>
                <FaLayerGroup />
                {openSidebar ? <div className='menu-text'>Dummy List</div> : null}
            </div>
            <div className='menu-bar'>
                <FaProductHunt />
                {openSidebar ? <div className='menu-text'>Poll</div> : null}
            </div>
            <div className='menu-bar'>
                <IoIosSettings />
                {openSidebar ? <div className='menu-text'>Setting</div> : null}
            </div>
            <div className='menu-bar' onClick={handleLogout}>
                <IoMdLogOut />
                {openSidebar ? <div className='menu-text'>LOGOUT</div> : null}
            </div>
        </div>
    </aside>
    </>
  )
}
