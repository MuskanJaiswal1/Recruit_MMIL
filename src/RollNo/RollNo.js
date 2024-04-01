import React, { useState, useEffect } from "react";
import bg from "../assets/bg.jpg";
import mmil from "../assets/1000058712_f1beee89cb94ffdbc7b3a05cbdf6e5cc-30_9_2023, 1_42_36 pm 2.png";
import tick from "../assets/Frame 13.png";
import { Link } from "react-router-dom";
import { useUser } from '../Context';
import "../style.css";
import appbg from "../assets/bg-app.svg"; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Name = () => {
  const { userData, setUserData } = useUser();
  
  const [formValid, setFormValid] = useState(false);

  const handleChange = (e) => {
    const newRollNo = e.target.value;
    setUserData({ ...userData, rollNo: newRollNo });
    if(newRollNo.length>=5){
      setFormValid(true);
    }
    else if(newRollNo.trim() === ''){
      setFormValid(false);
      toast.error("RollNo cannot be empty");
    }
    else{
      setFormValid(false);
    }
  };

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [tickmark, showTickmark] = useState(false);
  const [isHoverTickmark, setHoverTickmark] = useState(false);

  const handleHoverTickmark = () => {
   setHoverTickmark(true);
  };
  const handleUnHoverTickmark = () => {
    setHoverTickmark(false);
  };

  
  useEffect(() => {
    if (formValid) {
      showTickmark(true);
    }
  }, [formValid]); 

  const updateWindowSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", updateWindowSize);
    return () => {
      window.removeEventListener("resize", updateWindowSize);
    };
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <img
         src={windowSize.width <= 900 ? appbg : bg}
        alt="Your Image"
        style={{
          width: windowSize.Width < 900 ? "100vw" : "100vw", 
          height: windowSize.Width < 900 ? "100vh" : "100vh", 
          objectFit: "cover", 
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "linear-gradient(to right, #666666,#4d4d4d, #262626, #1a1a1a, #0d0d0d)", 
          padding: "10px",
          paddingTop: "20px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
          width: "23rem",
          height: "17rem"
        }}
      >
        {/* Your card content goes here */}
        <p
          style={{            
            fontSize: "44px",
            fontFamily: "Montserrat",
            fontWeight:"ExtraBold",
            letterSpacing:"2px",
            height:"80px",
            marginTop:"16px",
            color: "white",
          }}
        >
          Let's BEGIN!
        </p>
        <p
         style={{
          display: "block",
          marginLeft: "8px",         
          fontSize: "18px",       
          letterSpacing:"1px",
          color: "white",
          fontFamily: "Montserrat",
          fontWeight:"ExtraBold",
          marginTop: "-10px",
          }}
        >
          What is your RollNo ?{" "}
        </p>

        <div
          style={{
            border: "1px solid #FFE454",
            borderRadius: "12px",
            padding: "6px",
            width: "66%",
            margin: "auto",
            marginTop: "8px",
          }}
        >
        <input
          className="form"
          style={{
            width: "100%",
              border: "none",
              background: "none",
              borderBottom: "1px solid #FFE454",
              padding: "6px",
              color: "white",
              outline: 'none',
          }}
          type="text"
          value={userData.rollNo}
          onChange={handleChange}
          placeholder="Text here"
          aria-label="type here"
        />
        </div>

        <Link to="/Branch">
        {userData && (
             <p class="fa-solid fa-circle-check"
          style={{
            color: isHoverTickmark? "#ffffff": "#FFE454"  ,
            fontSize: "4.2rem",
            display: "inline-block",
            marginLeft: "auto",
            marginTop: "24px",
            display: tickmark? 'inline-block' : 'none',
          }}
          onMouseEnter={handleHoverTickmark}
          onMouseLeave={handleUnHoverTickmark}
          ></p>
          )}
        </Link>

        <img
          src={mmil}
          alt="Overlay Image"
          style={{
            position: "absolute",
            marginTop: "-20%",
            top: "-20%",
            left: "30%",
            width: "46%",
            height: "35%",
            opacity: "1",
          }}
        />
      </div>
    </div>
  );
};

export default Name;
