import React, { useState } from 'react';
import bg from "../assets/bg.jpg";
import appbg from "../assets/bg-app.jpg";
import './design.css';
import { Link } from "react-router-dom";
import mmil from "../assets/1000058712_f1beee89cb94ffdbc7b3a05cbdf6e5cc-30_9_2023, 1_42_36 pm 2.png";

const Design = () => {
  const [phoneNo, setPhoneNo] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://recruit-mmil-4.onrender.com/name', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          formType: 'Programming',
          phoneNo: phoneNo,

        })
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }
      console.log('Form submitted successfully');
      setPhoneNo("");
    } catch (error) {
      console.error('Failed to submit form', error);
    }
  };

  return (
    <>
      <div className='main'>
        <img
          src={window.innerWidth <= 900 ? appbg : bg}
          style={{
            height: window.innerWidth < 900 ? "149vh" : "170vh",
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
            <li className='design'><Link to="/Design">Design</Link></li>
            <li className='programming'><Link to="/Programming">Programming</Link></li>
            <li><Link to="/Webdev">Web-Dev</Link></li>
            <li><Link to="/Android">Android</Link></li>
          </ul>
          <Link to="/Register">
          <p class="fa-solid fa-arrow-left backBtn"></p>
          </Link>
        </div>
      </div>
      <div className='container'>
        <div className='rounds'>
          <p>Tasks</p>
          <div className='webdev'>
            <p>Round 2</p>
            <h1 className='heading'>Programming</h1>
            <h6 className='task'>Task round to check your skills</h6>
            <h5>Instructions for Students</h5>
            <ul>
              <li>The contest will be held on Hackerrank.com .</li>
              <li>It will be of 2.5 hours and will contain 5 questions. </li>
              <li>The contest timing will be from 4pm to 6:30pm <br /> IST on 15-04-24.</li>
              <li>Please sign up on Hackerank.com  <br />before attempting the quiz.</li>
            </ul>
            <h5>Details to be filled by Students.</h5>
            <form onSubmit={handleSubmit}>
              <label htmlFor="phoneNo">Phone Number*</label>
              <div className='inputBox'>
                <input
                  id="phoneNo"
                  className="form"
                  type="text"
                  placeholder="Enter your phone number"
                  value={phoneNo}
                  onChange={(e) => setPhoneNo(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Design;
