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
    <Link to="/" className="arrow_box"><LeftArrow className="arrow_icon" /></Link>
    <div>
      <div className="img_box" id="web_img">
        <img src={meditation1} alt="frame"></img>
      </div>
      <div className="exaplin_box">
        <h1>Meditaion Room</h1>
        <p>A web application for weekly meditation, with inspiration from <a href="https://www.headspace.com/" className="headspace">Head Space.</a><br />Created all image with SVG by figma and animated with CSS animation.
        </p>
        <div>
          <a href="https://meditation-plum.vercel.app/"><Cloud className="icon" /></a>
          <a href="https://github.com/akinaohira/Meditaion-room"><Github className="icon" /></a>
          <div className="language" id="meditation_language">
            <p>ReasonMl</p>
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

