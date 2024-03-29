import React, { useState } from 'react';
import bg from "../assets/bg.jpg";
import appbg from "../assets/bg-app.jpg";
import './design.css';
import { Link } from "react-router-dom";
import mmil from "../assets/1000058712_f1beee89cb94ffdbc7b3a05cbdf6e5cc-30_9_2023, 1_42_36 pm 2.png";

const Design = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [githubLink, setGithubLink] = useState('');
  const [gDriveLink, setGDriveLink] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://recruit-mmil-3.onrender.com/name', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          formType: 'Android',
          phoneNumber,
          githubLink,
          gDriveLink
        })
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      // Handle successful form submission
      console.log('Form submitted successfully');
    } catch (error) {
      // Handle error
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
            <li className='design'><a href="/Design">Design</a></li>
            <li><a href="/Programming">Programming</a></li>
            <li><a href="/Webdev">Web-Dev</a></li>
            <li className='and'><a href="/Android">Android</a></li>
          </ul>
          <Link to="/Registered">
          <p class="fa-solid fa-arrow-left backBtn"></p>
          </Link>
        </div>
      </div>
      <div className='container'>
        <div className='rounds' >
          <p>Tasks</p>
          <div className='webdev'>
            <p>Round 2</p>
            <h1 className='heading '>Android</h1>
            <h6 className='task'>Task round to check your skills</h6>
            <h5>Instructions for Students</h5>
            <ul>
              <li>You are required to make a Unit Converter app. </li>
              <li>Task details can be found <a href="">here</a>.</li>
              <li>The task deadline is 1pm IST on 16-04-2023. </li>
              <li>Task should be submitted below.</li>
              <li>Apk should be uploaded on Google drive and attached below.</li>
            </ul>
            <h5>Details to be filled by Students.</h5>
            <form onSubmit={handleSubmit}>
              <label htmlFor="phoneNumber">Phone Number*</label>
              <div className='inputBox'>
                <input
                  id="phoneNumber"
                  className="form"
                  type="text"
                  placeholder="Enter your phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
              </div>
              <label htmlFor="githubLink">Github link*</label>
              <div className='inputBox'>
                <input
                  id="githubLink"
                  className="form"
                  type="text"
                  placeholder="Paste your Github link"
                  value={githubLink}
                  onChange={(e) => setGithubLink(e.target.value)}
                  required
                />
              </div>
              <label htmlFor="gDriveLink">G-drive Link</label>
              <div className='inputBox'>
                <input
                  id="gDriveLink"
                  className="form"
                  type="text"
                  placeholder="Paste your Google Drive link"
                  value={gDriveLink}
                  onChange={(e) => setGDriveLink(e.target.value)}
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
