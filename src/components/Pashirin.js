import React from 'react';
import { Link } from 'react-router-dom';
import pashirinFlash from "../img/pashirin_flash.png"
import "../css/App.css"
import { ReactComponent as Github } from "../img/github.svg"
import { ReactComponent as Youtube } from "../img/youtube.svg"
import { ReactComponent as LeftArrow } from "../img/arrow-left.svg"

import userOrder from "../img/user-order.png";
import usePashirin from "../img/user_pashirin.png"
import watingDeli from "../img/user-watingDelivery.png"
import login from "../img/login.png"
import done from "../img/pashirin-finish.png"

function Pashirin() {
  return <div className="frame_indivisual" id="pashirin_back">
    <Link to="/" className="arrow_box"><LeftArrow className="arrow_icon" /></Link>
    <div>
      <div className="img_box">
        <img src={pashirinFlash} alt="frame"></img>
      </div>
      <div className="exaplin_box">
        <h1>Pashirin</h1>
        <p>iOS app that connects users who need help with something with people who can fulfill those    tasks, tracks deliveries by GPS, and enables payments using the Stripe API.
        </p>
        <div>
          <a href="https://youtu.be/gtWhv1qVqBQ?t=8"><Youtube className="icon" /></a>
          <a href="http://github.com/Pashirin/pashirin-frontend-new"><Github className="icon" /></a>
          <div className="language" id="pashirin_language">
            <p>Swift</p>
            <p>SwiftUI</p>
            <p>Firebase</p>
            <p>StripeAPI</p>
            <p>Pyhton</p>
            <p>Figma</p>
            <p>LottieFile</p>
          </div>
        </div>
        <div>
          <img alt="pashirin" src={usePashirin} className="app_detail_img" id="left_img"></img>
          <img alt="pashirin" src={userOrder} className="app_detail_img"></img>
          <img alt="pashirin" src={watingDeli} className="app_detail_img"></img>
          <img alt="pashirin" src={login} className="app_detail_img"></img>
          <img alt="pashirin" src={done} className="app_detail_img"></img>
        </div>
      </div>
    </div>

  </div >


}

export default Pashirin

