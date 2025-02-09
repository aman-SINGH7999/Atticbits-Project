import React from 'react'
import "./MainContainer.css"

import { RiSearchLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";

export default function MainContainer() {
  return (
    <div>
        <div className="search-container">
            <RiSearchLine className='search-icon' />
            <input type="text" className='search-input' placeholder='Search' />
        </div>

        <div className="income-report">
            <h2>Income Report</h2>
            <div className='week'>
                <div>Week < IoIosArrowDown/> </div>
                <div>Compare to: Prev Week < IoIosArrowDown/> </div>
            </div>
        </div>

        <div className="income-list">
            <div className="income-list-card income-list-active">
                <div className='revenue'>
                    <div>Revenue</div>
                    <div className='growth growth-active'>+71%</div>
                </div>
                <div className='price'>$ 876,00</div>
                <div>$ 650,00 + $ 231,00</div>
            </div>
            <div className="income-list-card">
                <div className='revenue'>
                    <div>Revenue</div>
                    <div className='growth'>+71%</div>
                </div>
                <div className='price'>$ 876,00</div>
                <div>$ 650,00 + $ 231,00</div>
            </div>
            <div className="income-list-card">
                <div className='revenue'>
                    <div>Revenue</div>
                    <div className='growth'>+71%</div>
                </div>
                <div className='price'>$ 876,00</div>
                <div>$ 650,00 + $ 231,00</div>
            </div>
        </div>

        <div className="shedule">
            <div className="income-report">
                <h2>Shedule</h2>
                <div className='week'>
                    <div>This Week < IoIosArrowDown/> </div>
                </div>
            </div>

            <table class="schedule-table">
                <tbody>
                    <tr>
                        <td class="table-box table-time"></td>
                        <td class="table-box" style={{color:"yellow"}}>
                            <div>Mon</div>
                            <div>18</div>
                        </td>
                        <td class="table-box">
                            <div>Tue</div>
                            <div>19</div>
                        </td>
                        <td class="table-box">
                            <div>Wed</div>
                            <div>20</div>
                        </td>
                        <td class="table-box">
                            <div>Thu</div>
                            <div>21</div>
                        </td>
                        <td class="table-box">
                            <div>Fri</div>
                            <div>22</div>
                        </td>
                    </tr>
                    <tr>
                    <td class="table-box table-time">8 am</td>
                    <td class="table-box"></td>
                    <td class="table-box"></td>
                    <td class="table-box">Lora Montes <div>8-9 am</div></td>
                    <td class="table-box"></td>
                    <td class="table-box"></td>
                    </tr>
                    <tr>
                    <td class="table-box table-time">9 am</td>
                    <td class="table-box">Sarah Perry<div>9-10 am</div></td>
                    <td class="table-box"></td>
                    <td class="table-box"></td>
                    <td class="table-box"></td>
                    <td class="table-box">Lora Montes<div>8-9 am</div></td>
                    </tr>
                    <tr>
                    <td class="table-box table-time">10 am</td>
                    <td class="table-box"></td>
                    <td class="table-box"></td>
                    <td class="table-box"></td>
                    <td class="table-box">Mark Smith<div>7-8 am</div></td>
                    <td class="table-box"></td>
                    </tr>
                    <tr>
                    <td class="table-box table-time">11 am</td>
                    <td class="table-box" style={{backgroundColor:"#fff", borderRadius:"10px", color:"#121212"}}>Lukas Tapia<div>8-9 am</div></td>
                    <td class="table-box"></td>
                    <td class="table-box"></td>
                    <td class="table-box"></td>
                    <td class="table-box"></td>
                    </tr>
                    <tr>
                    <td class="table-box table-time">12 am</td>
                    <td class="table-box"></td>
                    <td class="table-box">Sarah Perry<div>8-9 am</div></td>
                    <td class="table-box"></td>
                    <td class="table-box">Lukas Tapia<div>8-9 am</div></td>
                    <td class="table-box"></td>
                    </tr>
                    <tr>
                    <td class="table-box table-time">1 pm</td>
                    <td class="table-box"></td>
                    <td class="table-box"></td>
                    <td class="table-box"></td>
                    <td class="table-box"></td>
                    <td class="table-box"></td>
                    </tr>
                    <tr>
                    <td class="table-box table-time">2 pm</td>
                    <td class="table-box"></td>
                    <td class="table-box"></td>
                    <td class="table-box"></td>
                    <td class="table-box"></td>
                    <td class="table-box"></td>
                    </tr>
                </tbody>
            </table>

        </div>
    </div>
  )
}
