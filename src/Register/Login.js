import React, { useState } from "react";
import mmil from "../assets/mmil.png";
import bg from "../assets/bg.jpg";
import appbg from "../assets/bg-app.svg";

const Login = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        // Redirect to home page upon successful login
        window.location.href = "/home";
      } else {
        console.error("Login failed:", response.statusText);
        // Handle error responses from the server
      }
    } catch (error) {
      console.error("Login error:", error);
      // Handle network errors
    }
  };

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
            "linear-gradient(to right, #666666,#4d4d4d, #262626, #1a1a1a, #0d0d0d)", // Adjust as needed
          // opacity: "0.6",
          padding: "10px",
          paddingTop: "20px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
          width: "23rem",
          height: "21rem",
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
          Login
        </p>
        <form onSubmit={handleSubmit}>
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
            Name
          </p>

          <div
            style={{
              border: "1px solid #FFE454",
              borderRadius: "12px",
              padding: "6px",
              width: "66%",
              margin: "auto",
              marginTop: "-10px",
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
                outline: "none",
              }}
              type="text"
              name="name"
              placeholder="Text here"
              value={userData.name}
              onChange={handleChange}
            />
          </div>

          <p
            style={{
              display: "block",
              marginLeft: "8px",
              fontSize: "18px",
              letterSpacing: "1px",
              color: "white",
              fontFamily: "Montserrat",
              fontWeight: "ExtraBold",
              marginTop: "20px",
            }}
          >
            Email
          </p>

          <div
            style={{
              border: "1px solid #FFE454",
              borderRadius: "12px",
              padding: "6px",
              width: "66%",
              margin: "auto",
              marginTop: "-10px",
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
                outline: "none",
              }}
              type="email"
              name="email"
              placeholder="Text here"
              value={userData.email}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            style={{
              padding: "10px",
              fontWeight: "bolder",
              borderRadius: "14px",
              cursor: "pointer",
              backgroundColor: "#FFE454",
              width: "15rem",
              fontFamily: "Montserrat",
              letterSpacing: "0",
              fontSize: "22px",
              marginTop: "3rem",
            }}
          >
            Login
          </button>
          <a
            href="/Register"
            style={{
              display: "block",
              textDecoration: "underline",
              color: "white",
              padding: "10px",
              opacity: "0.5",
              fontFamily: "Montserrat",
              letterSpacing: "0",
            }}
          >
            Register
          </a>
        </form>

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

export default Login;
