import React, { useState, useEffect } from "react";
import bg from "../assets/bg.jpg";
import mmil from "../assets/1000058712_f1beee89cb94ffdbc7b3a05cbdf6e5cc-30_9_2023, 1_42_36 pm 2.png";
import { Link } from "react-router-dom";
import { useUser } from "../Context";
import appbg from "../assets/bg-app.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Name = () => {
  const { userData, setUserData } = useUser();
  const [formValid, setFormValid] = useState(false);

  const [tickmark, showTickmark] = useState(false);
  const [isHoverTickmark, setHoverTickmark] = useState(false);

  const handleHoverTickmark = () => {
    setHoverTickmark(true);
  };
  const handleUnHoverTickmark = () => {
    setHoverTickmark(false);
  };

  const updateWindowSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  const handleChange = (e) => {
    const phoneNo = e.target.value;
    setUserData({ ...userData, phoneNo });
    if (/^\d{10}$/.test(phoneNo)) {
      setFormValid(true);
      toast.dismiss("Toast");
    } else {
      setFormValid(false);
      if (!toast.isActive("Toast")) {
        toast.error("Phone number must contain exactly 10 digits", {
          toastId: "Toast",
        });
      }
    }
  };

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const updateWindowSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", updateWindowSize);
    return () => {
      window.removeEventListener("resize", updateWindowSize);
    };
  }, []);

  useEffect(() => {
    if (formValid) {
      showTickmark(true);
    }
    else{
      showTickmark(false);
    }
  }, [formValid]);

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
          background:
            "linear-gradient(to right, #666666,#4d4d4d, #262626, #1a1a1a, #0d0d0d)",
          padding: "10px",
          paddingTop: "20px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
          width: "24rem",
          height: "17rem",
        }}
      >
        {/* Your card content goes here */}
        <p
          style={{
            fontSize: "44px",
            fontFamily: "Montserrat",
            fontWeight: "ExtraBold",
            letterSpacing: "2px",
            height: "80px",
            marginTop: "16px",
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
            letterSpacing: "1px",
            color: "white",
            fontFamily: "Montserrat",
            fontWeight: "ExtraBold",
            marginTop: "-10px",
          }}
        >
          What is your Phone No. ?
        </p>
        <div
          style={{
            border: "1px solid #FFE454",
            borderRadius: "12px",
            padding: "6px",
            width: "75%",
            marginLeft: "50px",
            marginTop: "8px",
          }}
        >
          <input
            className="form"
            formMethod="POST"
            style={{
              width: "100%",
              border: "none",
              background: "none",
              borderBottom: "1px solid #FFE454",
              padding: "6px",
              color: "white",
              outline: "none",
            }}
            type="text"
            value={userData.phoneNo}
            onChange={handleChange}
            placeholder="Text here"
            aria-label="type here"
          />
        </div>
        <Link
          to="/Domain"
          style={{
            marginLeft: "auto",
            marginTop: "24px",
            display: formValid ? "inline-block" : "none",
          }}
        >
          {userData && (
            <p
              className="fa-solid fa-circle-check"
              style={{
                color: isHoverTickmark ? "#ffffff" : "#FFE454",
                fontSize: "4.2rem",
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
            opacity: 1,
          }}
        />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Name;
