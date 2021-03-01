import React from 'react';
import { Link } from 'react-router-dom'
import { ReactComponent as LeftArrow } from "../img/arrow-left.svg"
import { ReactComponent as Cloud } from "../img/cloud-icon.svg"
import '../css/App.css';
import mycanvas from "../img/mycanvas_home.png"
import mycanvasList from "../img/mycanvas_list.png"
import mycanvasLogin from "../img/mycanvas_login.png"

function Mycanvs() {
  return <div className="frame_indivisual" id="mycanvas" >
    <Link to="/" className="arrow_box"><LeftArrow className="arrow_icon" /></Link>
    <div className="container">
      <div className="img_box" id="web_img">
        <img alt="frame" src={mycanvas}></img>
      </div>
      <div className="exaplin_box" id="shoes_rack_expalin">
        <h1>My Canvas</h1>
        <p>Classroom progress management app.</p>
        <div >
          <a href="https://mycanvas.link/" className="visit" id="visit_pashirin"><Cloud className="icon" />Visit app</a>
          <div className="language">
            <p id="language_first">JavaScript</p>
            <p>React</p>
            <p>Firebase</p>
            <p>Design</p>
            <p>Figma</p>
          </div>
        </div>
        <div className="detail_app">
          <img alt="mycanas UI" className="meditation_img" src={mycanvasList} id="left_img"></img>
          <img alt="mycanas UI" className="meditation_img" src={mycanvasLogin} ></img>
        </div>
      </div>
    </div>
  </div>
}

export default Mycanvs