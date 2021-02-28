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
    <div>
      <div className="img_box" id="web_img">
        <img src={shoesRack} alt="frame"></img>
      </div>
      <div className="exaplin_box" id="shoes_rack_expalin">
        <h1>My Shoes Rack</h1>
        <p>Presenting my favorite shoes, like a family album.
        </p>
        <div>
          <a href="https://shoes-rack.herokuapp.com/ "><Cloud className="icon" /></a>
          <a href="https://github.com/akinaohira/Shoes-Rack"><Github className="icon" /></a>
          <div className="language" id="shoesRack_language">
            <p>JavaScript</p>
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

