import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Github } from "../img/github.svg"
import { ReactComponent as LeftArrow } from "../img/arrow-left.svg"
import { ReactComponent as Cloud } from "../img/cloud-icon.svg"
import meditation from "../img/meditation.png"
import meditation1 from "../img/meditation1.png"
import blueOrangeMan from "../img/blueOrangeMan.svg"


function Meditaion() {
  return <div className="frame_indivisual" id="meditation">
    <Link to="/" className="arrow_box"><LeftArrow className="arrow_icon" />Back to Home</Link>
    <div>
      <div className="img_box" id="web_img">
        <img src={meditation1} alt="frame"></img>
      </div>
      <div className="exaplin_box">
        <h1>Meditation Room</h1>
        <p>A web application for weekly meditation, inspired by <a href="https://www.headspace.com/" className="headspace">Head Space.</a><br /> Created all the graphics with Figma, exported as SVGs and animated with CSS animations.
        </p>
        <div>
          <div className="icon_box">
            <a href="https://meditation-plum.vercel.app/" className="visit" id="visit_meditaion"><Cloud className="icon" id="icon_first" />Visit App</a>
            <a href="https://github.com/akinaohira/Meditaion-room" className="visit" id="visit_meditaion"><Github className="icon" />github</a>
          </div>
          <div className="language" id="meditation_language">
            <p id="language_first">ReasonMl</p>
            <p>ReasonReact</p>
            <p>CSS animation</p>
            <p>Figma</p>
          </div>
        </div>

        <div className="detail_app">
          <div>
            <img alt="meditaions" className="meditation_img" src={meditation} id="left_img"></img>
          </div>
          <div>
            <img alt="meditaions" className="meditation_img" src={blueOrangeMan}></img>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default Meditaion

