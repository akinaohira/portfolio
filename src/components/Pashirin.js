import React from 'react';
import { Link } from 'react-router-dom';
import pashirinFlash from "../img/pashirin_flash.png"
import "../css/App.css"
import { ReactComponent as Github } from "../img/github.svg"
import { ReactComponent as Youtube } from "../img/youtube.svg"

function Pashirin() {
  return <div className="frame_indivisual">
    <div>
      <img src={pashirinFlash} alt="frame"></img>
      <div>
        <h1>Pashirin</h1>
        <p>iOS app that connects users who need help with something with people who can fulfill those    tasks, tracks deliveries by GPS, and enables payments using the Stripe API.
        </p>
        <a href="https://youtu.be/gtWhv1qVqBQ?t=8"><Youtube /></a>
        <a href="http://github.com/Pashirin/pashirin-frontend-new"><Github /></a>
      </div>
    </div>
    <Link to="/">Back</Link>
  </div>


}

export default Pashirin

