import React from 'react';
import { Link } from 'react-router-dom';
import pashirinFlash from "../img/pashirin_flash.png"
import movePashirin from "../img/move_pashirin.mov"
import "../css/App.css"

function Pashirin() {
  return <div className="frame_indivisual">
    <div>
      {/* <img src={pashirinFlash} alt="frame"></img> */}
    </div>
    <Link to="/">Back</Link>
  </div>


}

export default Pashirin

