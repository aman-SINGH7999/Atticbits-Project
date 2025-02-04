import React from 'react'
import './Main.css';

import { useNavigate } from 'react-router-dom';


import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaProductHunt } from "react-icons/fa";
import { FaLayerGroup } from "react-icons/fa";
import { MdCategory } from "react-icons/md";

export default function Main() {
    const navigate = useNavigate();
    const handleClickOnDummyData = ()=>{
        navigate('/dummy-list')
    }
    
  return (
    <div className='main-container'>
        <div className="main-title">
            <h2>DASHBOARD</h2>
        </div>
        <div className="main-cards">

            <div className="card">
                <div className='card-inner'>
                    <h3>PRODUCTS</h3>
                    <MdOutlineProductionQuantityLimits  style={{fontSize:"30px"}}/>
                </div>
                <div className='card-data'>Some Product</div>
                <div className='card-data'>Some Product</div>
                <div className='card-data'>Some Product</div>
                <div className='card-data'>Some Product</div>
                <div className='card-data'>Some Product</div>
            </div>
            <div className="card">
                <div className='card-inner'>
                    <h3>CATEGORY</h3>
                    <MdCategory style={{fontSize:"30px"}}/>
                </div>
                <div className='card-data'>Some Caregory</div>
                <div className='card-data'>Some Caregory</div>
                <div className='card-data'>Some Caregory</div>
                <div className='card-data'>Some Caregory</div>
                <div className='card-data'>Some Caregory</div>
            </div>
            
            <div className="card" onClick={handleClickOnDummyData}>
                <div className='card-inner'>
                    <h3>DUMMY LIST</h3>
                    <FaLayerGroup style={{fontSize:"30px"}}/>
                </div>
                <div className='card-data'> Dummy List 1</div>
                <div className='card-data'> Dummy List 2</div>
                <div className='card-data'> Dummy List 3</div>
                <div className='card-data'>Dummy List 4</div>
                <div className='card-data'> Dummy List 1</div>
            </div>
            <div className="card">
                <div className='card-inner'>
                    <h3>POLL</h3>
                    <FaProductHunt style={{fontSize:"30px"}}/>
                </div>
                <div className='card-data'>Some Poll</div>
                <div className='card-data'>Some Poll</div>
                <div className='card-data'>Some Poll</div>
                <div className='card-data'>Some Poll</div>
                <div className='card-data'>Some Poll</div>
            </div>
            
        </div>
    </div>
  )
}
