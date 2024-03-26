import React, { useState, useEffect } from "react";
import bg from "../assets/bg.jpg";
import mmil from "../assets/1000058712_f1beee89cb94ffdbc7b3a05cbdf6e5cc-30_9_2023, 1_42_36 pm 2.png";
import tick from "../assets/Frame 13.png";
import { Link } from "react-router-dom";
import globalData from '../Global';
import { useUser } from '../Context';
import appbg from "../assets/bg-app.svg";

const Name = () => {
  const { userData, setUserData } = useUser();
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [tickmark, setTickmark] = useState(false);
  const [isHoverTickmark, setHoverTickmark] = useState(false);

  const handleHoverTickmark = () => {
   setHoverTickmark(true);
  };
  const handleUnHoverTickmark = () => {
    setHoverTickmark(false);
  };

  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);

  const handleActive1 = () => {
    setIsActive1(true);
    setIsActive2(false);
    setIsActive3(false);
    setIsActive4(false);
    setUserData({ ...userData, domain: "Design" });
    setTickmark(true);
  };
  
  const handleActive2 = () => {
    setIsActive2(true);
    setIsActive1(false);
    setIsActive3(false);
    setIsActive4(false);
    setUserData({ ...userData, domain: "programming" });
    setTickmark(true);
  };
  
  const handleActive3 = () => {
    setIsActive3(true);
    setIsActive1(false);
    setIsActive2(false);
    setIsActive4(false);
    setUserData({ ...userData, domain: "web-dev" });
    setTickmark(true);
  };
  
  const handleActive4 = () => {
    setIsActive4(true);
    setIsActive1(false);
    setIsActive2(false);
    setIsActive3(false);
    setUserData({ ...userData, domain: "android" });
    setTickmark(true);
  };

  const [isHovering1, setIsHovering1] = useState(false);
  const [isHovering2, setIsHovering2] = useState(false);
  const [isHovering3, setIsHovering3] = useState(false);
  const [isHovering4, setIsHovering4] = useState(false);

  const handleMouseEnter1 = () => {
    setIsHovering1(true);
  };

  const handleMouseLeave1 = () => {
    setIsHovering1(false);
  };

  const handleMouseEnter2 = () => {
    setIsHovering2(true);
  };

  const handleMouseLeave2 = () => {
    setIsHovering2(false);
  };

  const handleMouseEnter3 = () => {
    setIsHovering3(true);
  };

  const handleMouseLeave3 = () => {
    setIsHovering3(false);
  };

  const handleMouseEnter4 = () => {
    setIsHovering4(true);
  };

  const handleMouseLeave4 = () => {
    setIsHovering4(false);
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

  useEffect(() => {
    if (tickmark && userData.domain) {
      const dataToSend = {
        ...userData,
        formType: 'MMIL' // Include the formType field
      };
      // All necessary data is available and tickmark is pressed, so save the data
      fetch('http://localhost:5000/name', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Data saved:', data);
        })
        .catch((error) => {
          console.error('Error saving data:', error);
        });
    }
  }, [tickmark, userData]);

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
          height: "28rem"
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
            display: 'block',
            fontSize: "24px",
            color: "white",
            fontFamily: "Montserrat"
          }}
        >
          Choose your domain ?
        </p>

        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
          <a
            href="#"
            className="btn"
            style={{
              border: "2px solid #FFE454",
              backgroundColor: isHovering1 ? "#1a1a1a" : "#FFE454",
              backgroundColor: isActive1 ? "#1a1a1a" : "#FFE454",
              color: isHovering1 ? "#FFE454" : "#1a1a1a",
              color: isActive1 ? "#FFE454" : "#1a1a1a",
              fontWeight: "bold",
              fontFamily: "Montserrat"
              //   width: "80px",
            }}
           
            onMouseEnter={handleMouseEnter1}
            onMouseLeave={handleMouseLeave1}
            onClick={handleActive1}
          >
            Design
          </a>
          <br />
          <a
            href="#"
            className="btn"
            style={{
              border: "2px solid #FFE454",
              backgroundColor: isHovering2 ? "#1a1a1a" : "#FFE454",
              backgroundColor: isActive2 ? "#1a1a1a" : "#FFE454",
              color: isHovering2 ? "#FFE454" : "#1a1a1a",
              color: isActive2 ? "#FFE454" : "#1a1a1a",
              fontWeight: "bold",
              fontFamily: "Montserrat"
              //   width: "80px",
            }}
            
            onMouseEnter={handleMouseEnter2}
            onMouseLeave={handleMouseLeave2}
            onClick={handleActive2}
          >
            Programming
          </a>
          <br />
          <a
            href="#"
            className="btn"
            style={{
              border: "2px solid #FFE454",
              backgroundColor: isHovering3 ? "#1a1a1a" : "#FFE454",
              backgroundColor: isActive3 ? "#1a1a1a" : "#FFE454",
              color: isHovering3 ? "#FFE454" : "#1a1a1a",
              color: isActive3 ? "#FFE454" : "#1a1a1a",
              fontWeight: "bold",
              fontFamily: "Montserrat"
              //   width: "80px",
            }}
           
            onMouseEnter={handleMouseEnter3}
            onMouseLeave={handleMouseLeave3}
            onClick={handleActive3}
          >
            Web-Dev
          </a>
          <br />
          <a
            href="#"
            className="btn"
            style={{
              border: "2px solid #FFE454",
              backgroundColor: isHovering4 ? "#1a1a1a" : "#FFE454",
              backgroundColor: isActive4 ? "#1a1a1a" : "#FFE454",
              color: isHovering4 ? "#FFE454" : "#1a1a1a",
              color: isActive4 ? "#FFE454" : "#1a1a1a",
              fontWeight: "bold",
              fontFamily: "Montserrat"
              //   width: "80px",
            }}
           
            onMouseEnter={handleMouseEnter4}
            onMouseLeave={handleMouseLeave4}
            onClick={handleActive4}
          >
            Android-Dev
          </a>
        </div>

        {tickmark && userData.domain && (
          globalData.myGlobalVariable === '1st year' ? (
            <Link
          to="/Congrats"
          style={{
            display: "inline-block",
            marginLeft: "0%",
            marginTop: "24px",
            display: tickmark? 'inline-block' : 'none',
          }}
        >
             <i class="fa-solid fa-circle-check"
          style={{
            color: isHoverTickmark?"#FFE454":"#ffffff",
            fontSize: "4.2rem"
          }}
          onMouseEnter={handleHoverTickmark}
          onMouseLeave={handleUnHoverTickmark}
          ></i>
        </Link>
          ) : (
            <Link
          to="/Resume"
          style={{
            display: "inline-block",
            marginLeft: "auto",
            marginTop: "24px",
            opacity: tickmark ? '1' : '0',
          }}
        >
             <i class="fa-solid fa-circle-check"
          style={{
            color: isHoverTickmark?"#FFE454":"#ffffff",
            fontSize: "4.2rem"
          }}
          onMouseEnter={handleHoverTickmark}
          onMouseLeave={handleUnHoverTickmark}
              onTouchStart={handleHoverTickmark} // Trigger hover effect on touch
          onTouchEnd={handleUnHoverTickmark}
          ></i>
        </Link>
          )
        )}

        <img
          src={mmil}
          alt="Overlay Image"
          style={{
            position: "absolute",
            marginTop: "-24%",
            // marginBottom: "15%",
            top: "-2%",
            left: "30%",
            width: "42%",
            height: "20%",
            opacity: 1,
          }}
        />
      </div>
    </div>
  );
};

export default Name;
