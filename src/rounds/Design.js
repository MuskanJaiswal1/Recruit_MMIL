import React, { useState } from 'react';
import bg from "../assets/bg.jpg";
import appbg from "../assets/bg-app.jpg";
import './design.css';
import { Link } from "react-router-dom";
import mmil from "../assets/1000058712_f1beee89cb94ffdbc7b3a05cbdf6e5cc-30_9_2023, 1_42_36 pm 2.png";

const Design = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [figmaLink, setFigmaLink] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://recruit-mmil-3.onrender.com/name', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          formType: 'Design',
          phoneNumber: phoneNumber,
          figmaLink: figmaLink
        })
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      // Handle successful form submission (e.g., show a success message)
      console.log('Form submitted successfully');
    } catch (error) {
      // Handle error (e.g., show an error message)
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
            <li className='design' id='des'><a href="/Design">Design</a></li>
            <li><a href="/Programming">Programming</a></li>
            <li><a href="/Webdev">Web-Dev</a></li>
            <li><a href="/Android">Android</a></li>
          </ul>
          <Link to="/Registered">
          <p class="fa-solid fa-arrow-left backBtn"></p>
          </Link>
        </div>
      </div>
      <div className='container'>
        <div className='rounds'>
          <p>Tasks</p>
          <div className='webdev'>
            <p>Round 2</p>
            <h1 className='heading '> Design</h1>
            <h6 className='task'>Task round to check your skills</h6>
            <h5>Instructions for Students</h5>
            <ul>
              <li>You are required to choose ANY ONE task from <a href=""> here</a>. </li>
              <li> The task deadline is 1pm IST on 16-04-2023. </li>
              <li>The students has to complete the task in before the deadline.</li>
              <li>Task should be submitted below.</li>
            </ul>
            <h5>Details to be filled by Students.</h5>
            <form onSubmit={handleSubmit}>
              <label htmlFor="phoneNumber">Phone Number*</label>
              <div className='inputBox'>
                <input
                  id="phoneNumber"
                  className="form"
                  type="text"
                  name="phoneNumber"
                  placeholder="Enter your phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
              </div>
              <label htmlFor="figmaLink">Figma/Adobe Xd Link*</label>
              <div className='inputBox'>
                <input
                  id="figmaLink"
                  className="form"
                  type="text"
                  name="figmaLink"
                  placeholder="Paste here"
                  value={figmaLink}
                  onChange={(e) => setFigmaLink(e.target.value)}
                  required
                />
              </div>
              <button className="submit" type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Design;

