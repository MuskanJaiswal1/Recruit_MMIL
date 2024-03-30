import React from 'react'
import bg from "../assets/bg.jpg";
import appbg from "../assets/bg-app.jpg";
import './design.css';
import { Link } from "react-router-dom";
import mmil from "../assets/1000058712_f1beee89cb94ffdbc7b3a05cbdf6e5cc-30_9_2023, 1_42_36 pm 2.png";
import { vector } from '../assets/Vector.png'


const Technical = () => {
  return (
    <>
      <div className='technical-main'>
        <img
          src={window.innerWidth <= 900 ? appbg : bg}
          style={{
            height:window.innerWidth < 900 ? "115vh" : "170vh",
          }}
          alt="Your Image"
        />
      </div>
      <div id='first'>
        <img
          src={mmil}
          alt="Overlay Image"
        />
      </div>
      <div className='domains'>
        <div className='fields'>
          <ul>
            <li className='design'><a href="/Design">Design</a></li>
            <li><a href="/Programming">Programming</a></li>
            <li><a href="/Webdev">Web Dev</a></li>
            <li><a href="/Android">Android</a></li>
          </ul>
        </div>
        <Link to="/Registered">
          <i class="fa-solid fa-arrow-left backBtn"></i>
          </Link>
      </div>
      <div className='technical-container'>
        <div className='rounds' >
          <p>Tasks</p>
          <div className='instructions'>
            <p>Round 2</p>
            <h1 className='heading '> Technical Round</h1>
            <h6 className='task'>Task round to check your skills</h6>
            <h5>Instructions for Students</h5>
            <ul>
              <li>Pay attention to details and follow the instructions provided</li>
              <li> Use this opportunity to showcase your skills and approach to problem-solving. </li>
              <li>The students has to complete the task in before the deadline</li>
              <li>Proceed to your particular domains from <br /> the Navbar for the tasks.</li>
            </ul>
           </div>
        </div>
      </div>

    </>

  )
}

export default Technical