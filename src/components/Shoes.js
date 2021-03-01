import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Github } from "../img/github.svg"
import { ReactComponent as LeftArrow } from "../img/arrow-left.svg"
import { ReactComponent as Cloud } from "../img/cloud-icon.svg"
import shoesRack from "../img/shoes_rack.png"
import shoes from "../img/shoes.png"
import '../css/App.css';

function Shoes() {
  return <div className="frame_indivisual" id="shoes_rack" >
    <Link to="/" className="arrow_box"><LeftArrow className="arrow_icon" /></Link>
    <div className="container">
      <div className="img_box" id="web_img">
        <img src={shoesRack} alt="frame"></img>
      </div>
      <div className="exaplin_box" id="shoes_rack_expalin">
        <h1>My Shoes Rack</h1>
        <p>Presenting my favorite shoes, like a family album.
        </p>
        <div >
          <div className="icon_box">
            <a className="visit" href="https://shoes-rack.herokuapp.com/ "><Cloud className="icon" id="icon_first" />Visit app</a>
            <a className="visit" href="https://github.com/akinaohira/Shoes-Rack"><Github className="icon" />Github</a>
          </div>
          <div className="language" id="shoesRack_language">
            <p id="language_first">JavaScript</p>
            <p>React</p>
            <p>Knex</p>
            <p>Postgres</p>
            <p>Postgres</p>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default Shoes

