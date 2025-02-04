import React, { useState } from 'react'
import './Dashboard.css';
import Sidebar from './Sidebar';
import Main from './Main';



import { IoIosNotifications } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaCircleUser } from "react-icons/fa6";


export const Dashboard = () => {
    const [openSidebar, steOpenSidebar] = useState(false);

  return (
    <div className=''>
        <div className={openSidebar ? 'grid-container-open' : 'grid-container-close'}>
            <header className="header">
            <div className='header-icon header-left'><CiSearch /></div>
            {/* <div>myApp</div> */}
            <div className='header-right'>
                <div className='header-icon'><IoIosNotifications /></div>
                <div className='header-icon'><MdMarkEmailUnread /></div>
                <div className='header-icon'><FaCircleUser /></div>
            </div>
            </header>
            <Sidebar openSidebar={openSidebar} steOpenSidebar={steOpenSidebar}/>
            <Main />
        </div>
    </div>
  )
}
