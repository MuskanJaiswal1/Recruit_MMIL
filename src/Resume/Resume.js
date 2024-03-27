import React, { useState, useEffect } from "react";
import bg from "../assets/bg.jpg";
import mmil from "../assets/1000058712_f1beee89cb94ffdbc7b3a05cbdf6e5cc-30_9_2023, 1_42_36 pm 2.png";
import tick from "../assets/Frame 13.png";
import { Link } from "react-router-dom";
import appbg from "../assets/bg-app.svg";

const Name = () => {
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

  const handleShowTickmark = (e) => {
    showTickmark(true)
  };


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
          background: "linear-gradient(to right, #666666,#4d4d4d, #262626, #1a1a1a, #0d0d0d)", // Adjust as needed
          // opacity: "0.6",
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
          LET'S BEGIN!
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
          Upload Resume Drive Link!{" "}
        </p>

        <div
          style={{
            border: "1px solid #FFE454",
            borderRadius: "12px",
            padding: "6px",
            width: "75%",
            marginLeft: "55px",
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
          placeholder="Text here"
          onFocus={handleShowTickmark}
          aria-label="type here"
        />
        </div>

        <Link
          to="/Congrats"
          style={{
            display: "inline-block",
            marginLeft: "auto",
            marginTop: "24px",
            display: tickmark? 'inline-block' : 'none',
          }}
        >
             <p class="fa-solid fa-circle-check"
          style={{
            color: isHoverTickmark?"#FFE454":"#ffffff",
            fontSize: "4.2rem"
          }}
          onMouseEnter={handleHoverTickmark}
          onMouseLeave={handleUnHoverTickmark}
              onTouchStart={handleHoverTickmark} // Trigger hover effect on touch
          onTouchEnd={handleUnHoverTickmark}
          ></p>
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
