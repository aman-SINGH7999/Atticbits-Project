import React from 'react'
import "./ClientsActivity.css"

import { BiBell } from "react-icons/bi";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

export default function ClientsActivity() {
  return (
    <div className='clients-activity'>
        <div className="user-details">
            <ul>
                <li><BiBell style={{fontSize:"25px"}}/> <span className='notification'></span> </li>
                <li><MdOutlineMailOutline style={{fontSize:"25px"}} /></li>
                <li>Aman Singh <img src="/user.jpg" alt="" className='user-image' /></li>
            </ul>
        </div>
        <div className="users">
            <div className='user-heading'>
                <h3>Clients Activity</h3>
                <div>All < IoIosArrowDown/></div>
            </div>
            <div className='user-list'>
                <div className='user'>
                    <img src="/user.jpg" alt="" className='user-image' />
                    <div>
                        <div>Mark Smith</div>
                        <span>Added 2 photos in Food Dairy</span>
                    </div>
                </div>
                <div className='update-time'> 15 min </div>
            </div>
            <div className='user-list'>
                <div className='user'>
                    <img src="/woman2.jpg" alt="" className='user-image' />
                    <div>
                        <div>Sarah Perry</div>
                        <span>Added 4 photos in Progress Photos</span>
                    </div>
                </div>
                <div className='update-time'> 1 hr</div>
            </div>
            <div className='user-list'>
                <div className='user'>
                    <img src="/women1.jpg" alt="" className='user-image' />
                    <div>
                        <div>Lukas Tapia</div>
                        <span>Uploaded a new video</span>
                    </div>
                </div>
                <div className='update-time'> 2 hr </div>
            </div>
            <button className='dashboard-btn'>View all</button>
        </div>
        <div className="task-completion">
            <h2>Task Completion</h2>
            <div className="progress-bar">
                <div className="outer-circle">
                    <div className="inner-circle">
                        <div className="persent-value">71%</div>
                    </div>
                </div>
                <div className="outer-circle-unfild">
                    <div className="inner-circle-unfild">
                        <div className="persent-value">71%</div>
                    </div>
                </div>
            </div>
            <div className='radio-btn'>
                <div>
                    <input type="radio" id="complete" name="complete" value="Complete" checked/>
                    <label for="complete">Complete</label>
                </div>
                <div>
                    <input type="radio" id="missed" name="missed" value="Missed"/>
                    <label for="missed">Missed</label>
                </div>
            </div>
            <button className='dashboard-btn'>View breakdown</button>
        </div>
    </div>
  )
}
