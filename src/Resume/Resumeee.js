import React, { useState, useEffect, useRef } from "react";
import bg from '../assets/bg.jpg';
import appbg from "../assets/bg-app.svg";
import mmil from '../assets/1000058712_f1beee89cb94ffdbc7b3a05cbdf6e5cc-30_9_2023, 1_42_36 pm 2.png';
import { Link } from 'react-router-dom';
import '../Resume/Resume.css'

const App = () => {
  const [files, setFiles] = useState(null);
  const inputRef = useRef();

  const [uploadStatus, setUploadStatus] = useState('Drag and drop or');

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setFiles(event.dataTransfer.files);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('Files', files);
    // console.log(Array.from(formData.getAll()));
    // Simulate upload process (replace setTimeout with actual upload process)
    setUploadStatus('Uploading...');
    setTimeout(() => {
      setUploadStatus('Uploaded successfully!');
    }, 2000);
  }

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
    window.addEventListener('resize', updateWindowSize);
    return () => {
      window.removeEventListener('resize', updateWindowSize);
    };
  }, []);
  

  return (
    <div style={{ position: 'relative' }}>
      <img
        src={windowSize.width <= 900 ? appbg : bg}
        alt="Your Image"
        style={{
          width: windowSize.Width < 900 ? "100vw" : "100vw",
          height: windowSize.Width < 900 ? "100vh" : "100vh",
          objectFit: "cover",
        }}
      />

      <div className='card'
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "linear-gradient(to right, #666666,#4d4d4d, #262626, #1a1a1a, #0d0d0d)", // Adjust as needed
          padding: "10px",
          paddingTop: "20px",
          borderRadius: "10px",
          outline: 'none',
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
          width: "23rem",
          height: "26rem"
        }}
      >
        <h2
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
          LET'S BEGIN
        </h2>
        <p
          style={{
            display: "block",
            marginLeft: "8px",
            fontSize: "18px",
            letterSpacing: "1px",
            color: "white",
            fontFamily: "Montserrat",
            fontWeight: "ExtraBold",
            marginTop: "12px",
          }}
        >
          Please upload your Resume!
        </p>

        <div className="dropzone" onDragOver={handleDragOver} onDrop={(event) => {handleDrop(event); handleUpload(); handleShowTickmark();}}>
        <p class="fa-regular fa-file-lines" style={{ fontSize: '44px', margin: '15px', }}></p>
        <h4 style={{ color: 'white', fontSize: '18px', color: '#02CA46' }}>{uploadStatus}</h4>
        {files ? (
          <p></p>
        ) : (
          <React.Fragment>
            <input
              type="file"
              multiple
              onChange={(event) => {setFiles(event.target.files); handleUpload(); handleShowTickmark();}}
              hidden
              accept="image/png, image/jpeg"
              ref={inputRef}
            />
            <p>
              <a href onClick={() => inputRef.current.click()} style={{ color: '#02CA46', textDecoration: 'underline', cursor: 'pointer' }}>Choose File</a> <span> to upload</span></p>
          </React.Fragment>
        )}
      </div>

        <Link to="/Congrats">
          <p class="fa-solid fa-circle-check"
            style={{
              color: isHoverTickmark ? "#FFE454" : "#ffffff",
              fontSize: "4.2rem",
              display: "inline-block",
              marginLeft: "auto",
              marginTop: "24px",
              display: tickmark? 'inline-block' : 'none',
            }}
            onMouseEnter={handleHoverTickmark}
            onMouseLeave={handleUnHoverTickmark}
            onTouchStart={handleHoverTickmark}
            onTouchEnd={handleUnHoverTickmark}
          ></p>
        </Link>
        <img
          src={mmil}
          alt="Overlay Image"
          style={{
            position: 'absolute',
            marginTop: '-36%',
            left: '24%',
            width: '12.5rem',
            height: '6rem',
            objectFit: 'cover',
            opacity: 1,
          }}
        />
      </div>
    </div>
  );
};

export default App;
