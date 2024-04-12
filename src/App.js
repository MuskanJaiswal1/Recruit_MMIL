import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Splashscreen from './splashscreen/Splashscreen';
import Rocket from './Rocket/Rocket';
import Register from './Register/Register';
import Resume from './Resume/Resumeee';
import FirstSlide from './ques/FirstSlide';
import Name from './Namw/Name';
import RollNo from './RollNo/RollNo';
import Branch from './Branch/Branch';
import Email from './Email/Email';
import Phone from './Phone/Phone';
import Domain from './Domain/Domain';
import Congrats from './congrats/Congrats';
import Technical from './rounds/Technical';
import Webdev from './rounds/Webdev';
import Design from './rounds/Design';
import Programming from './rounds/Programming';
import Android from './rounds/Android';
import RocketLoader from './RocketLoader/RocketLoader';
import { useUser } from './Context';
import Home from './Register/Home'
import Login from './Register/Login'
import Registered from './Register/Registered'

const App = () => {
  const { userData } = useUser();
  const [dataSaved, setDataSaved] = useState(false);

  useEffect(() => {
    if (userData.name && userData.rollNo && userData.year && userData.domain && userData.phoneNo && userData.branch && !dataSaved) {
      // All data is available and data is not yet saved, so save the data
      fetch('http://localhost:5000/name', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Data saved:', data);
          setDataSaved(true); // Set dataSaved to true after saving the data
        })
        .catch((error) => {
          console.error('Error saving data:', error);
        });
    }
  }, [userData, dataSaved]);

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Splashscreen />} />
            <Route path="/Rocket" element={<Rocket />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Resume" element={<Resume />} />
            <Route path="/First" element={<FirstSlide />} />
            <Route path="/Name" element={<Name />} />
            <Route path="/RollNo" element={<RollNo />} />
            <Route path="/Branch" element={<Branch />} />
            <Route path="/Email" element={<Email />} />
            <Route path="/Phone" element={<Phone />} />
            <Route path="/Domain" element={<Domain />} />
            <Route path="/Congrats" element={<Congrats />} />
            <Route path="/Technical/:userId" element={<Technical />} />
            <Route path="/Webdev/:userId" element={<Webdev />} />
            <Route path="/Design/:userId" element={<Design />} />
            <Route path="/Programming/:userId" element={<Programming />} />
            <Route path="/Android/:userId" element={<Android />} />
            <Route path="/RocketLoader" element={<RocketLoader />} />
            <Route path="/Home" element={<Home/>}/>
            <Route path= "/Login" element = {<Login/>}/>
            <Route path="/Registered/:userId" element={<Registered/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;