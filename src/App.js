import { Link } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react"
import cloud from './img/cloud.svg'
import kumo from './img/kumo.svg'
import kumo2 from './img/kumo2.svg'
// import cloud_mi from "./img/cloud_miller.svg"
import './css/App.css';
import frame2 from "./img/frame2.svg"
import frame3 from "./img/fram5.svg"
import moon from "./img/moon.png"
import pashirin from "./img/pashirin.png"
import mycanvs from "./img/mycanvs.png"
import { ReactComponent as Github } from "./img/github.svg"
import { ReactComponent as LinkedIn } from "./img/linkedin.svg"
import { ReactComponent as Mail } from "./img/mail.svg"
import { ReactComponent as Resume } from "./img/briefcase.svg"

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
      <div className="main_container">
        <div>
          <img src={moon} className="moon" alt="moon" style={{ opacity: color === "day" ? 0 : 1 }} />
          <img style={{ opacity: color === "day" ? 1 : 0.5 }} src={cloud} className="cloud1" alt="cloud" />
          <img src={kumo} style={{ opacity: color === "day" ? 1 : 0.6 }} className="cloud2" alt="cloud" />
          <img src={kumo2} style={{ opacity: color === "day" ? 1 : 0.8 }} className="cloud3" alt="cloud" />
          {/* <img style={{ opacity: color === "day" ? 1 : 0.5 }} src={cloud} className="cloud1" alt="cloud" /> */}

        </div>
        <div className="tittle">
          <p className="name">
            <span>Hello</span>, I'm Akina Ohira.<br />Software Engineer, based in Tokyo, Japan<br />Open for work opportunities!
          </p>
          <div className="incon_box">
            <a href="https://github.com/akinaohira"><Github /> </a>
            <a href="https://www.linkedin.com/in/akina-ohira-790970183/"><LinkedIn /></a>
            <a href="mailto:akina568325@gmail.com"><Mail /></a>
            <a href="https://www.canva.com/design/DAELrzDwjZ8/VvK3TCJsYnuuzt4mtAwrEA/view?utm_content=DAELrzDwjZ8&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton"><Resume /></a>
          </div>
        </div>
        <div className="art_box">
          <Link to="/meditaion"><img alt="frame" src={frame2} className="frame" ></img></Link>
          {/* <img alt="frame" src={cloud_mi} className="frame" ></img> */}
          <Link to="/shoes"><img alt="frame" src={frame3} className="frame" ></img></Link>
          <Link to="/pashirin"><img src={pashirin} alt="pashirin" className="frame" id="pashirin_home"></img></Link>
          <Link to="/mycanvas"><img src={mycanvs} alt="pashirin" className="frame" id="pashirin_home"></img></Link>
        </div>
      </div>
      <footer>
        <p>@2021 Akina Ohira
        </p>
        <p >akina568325@gmail.com</p>
      </footer>
    </ div >
  );
}

export default App;
