import React, { useState, useEffect } from "react";
import bg from "../assets/bg.jpg";
import mmil from "../assets/1000058712_f1beee89cb94ffdbc7b3a05cbdf6e5cc-30_9_2023, 1_42_36 pm 2.png";
// import tick from "../assets/tick.svg";
import tick from "../assets/Frame 13.png";
import astronomer from '../assets/cute-astronaut-waving-hand-to-show-peace-symbol-cartoon-icon-illustration-vector 1.png'
import { Link } from "react-router-dom";
import appbg from "../assets/bg-app.svg";

const Name = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

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

  setTimeout(() => {
    window.location.href = "/Home"; 
  }, 2000); 

  return (
    <div style={{ position: "relative" }}>
          <img
         src={windowSize.width <= 900 ? appbg : bg}
        alt="Your Image"
        style={{
          width: windowSize.Width < 900 ? "100vw" : "100vw", // Adjust as needed
          height: windowSize.Width < 900 ? "100vh" : "100vh", // Adjust as needed
          objectFit: "cover", // Adjust as needed
        }}
      />


      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background:
            "linear-gradient(to right, #666666,#4d4d4d, #262626, #1a1a1a, #0d0d0d)", // Adjust as needed
          // opacity: "0.6",
          padding: "10px",
          paddingTop: "20px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
          width: "22rem",
          height: "21rem"
        }}
      >
        {/* Your card content goes here */}
        <p
          style={{
            
            fontSize: "30px",
            fontFamily: "Montserrat",
            fontWeight:"ExtraBold",
            letterSpacing:"2px",
            height:"80px",
            marginTop:"16px",
            color: "white",
          }}
        >
          Congratulations!
        </p>
       <img src={astronomer} alt="" 
       style={{
        height: '180px',
        marginTop: '-48px',
        marginLeft: 'auto',
        marginBottom: '12px'
       }}
       />
       <p
       style={{
        display: 'block',
        marginTop:'-20px',
            fontSize: "20px",
            color: "white",
            fontFamily: "Montserrat"
      }}
       >
        You have registered successfully!
       </p>

        <img
          src={mmil}
          alt="Overlay Image"
          style={{
            position: "absolute",
            marginTop: "-20%",
            top: "-12%",
            left: "30%",
            width: "42%",
            height: "27%",
            opacity: 0.9, 
          }}
        />
      </div>
    </div>
  );
};

export default Name;
