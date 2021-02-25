import { Link } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react"
import cloud from './img/cloud.svg'
import kumo from './img/kumo.svg'
import kumo2 from './img/kumo2.svg'
// import cloud_mi from "./img/cloud_miller.svg"
import './css/App.css';
import frame2 from "./img/frame2.svg"
import frame3 from "./img/fram5.svg"
// import frame4 from "./img/Group.svg"
import moon from "./img/moon.png"
import pashirin from "./img/pashirin.png"

function App() {
  const [color, setColor] = useState("day")
  useEffect(() => {
    function changeColor() {
      console.log(color)
      if (color === "day") {
        setColor("night")
      } else {
        setColor("day")
        return
      }
    }

    const handle = setInterval(changeColor, 10000)
    return () => {
      clearInterval(handle)
    }
  }, [color])

  return (
    <div className="App-header" style={{ backgroundColor: color === "day" ? "#6795D1" : "#20294B" }} >
      {/* <button><a href="mailto:akina568325@gmail.com" />contact</button>
      <p>akina568325@gmail.com</p> */}
      <div className="main_container">
        <div>
          <img src={moon} className="moon" alt="moon" style={{ opacity: color === "day" ? 0 : 1 }} />
          <img style={{ opacity: color === "day" ? 1 : 0.5 }} src={cloud} className="cloud1" alt="cloud" />
          <img src={kumo} style={{ opacity: color === "day" ? 1 : 0.6 }} className="cloud2" alt="cloud" />
          <img src={kumo2} style={{ opacity: color === "day" ? 1 : 0.8 }} className="cloud3" alt="cloud" />
          <img style={{ opacity: color === "day" ? 1 : 0.5 }} src={cloud} className="cloud1" alt="cloud" />
          <img src={kumo} style={{ opacity: color === "day" ? 1 : 0.6 }} className="cloud2" alt="cloud" />

        </div>
        <div className="tittle">
          <p className="name">
            <span>Hello</span>, I'm Akina Ohira.<br />Software Engineer, based in Tokyo, Japan
          </p>
        </div>
        <div className="art_box">
          <Link to="/meditaion"><img alt="frame" src={frame2} className="frame" ></img></Link>
          {/* <img alt="frame" src={cloud_mi} className="frame" ></img> */}
          <Link to="/shoes"><img alt="frame" src={frame3} className="frame"></img></Link>
          <Link to="/pashirin"><img src={pashirin} alt="pashirin" className="frame"></img></Link>
          {/* <img alt="frame" src={frame4} className="frame" ></img> */}
        </div>
      </div>
      <footer>
        <p>Open for work opportunities.</p>
        <button><a href="mailto:akina568325@gmail.com" />Contact</button>
        <p>akina568325@gmail.com</p>
      </footer>
    </ div >
  );
}

export default App;
