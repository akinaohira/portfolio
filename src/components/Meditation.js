import React from 'react';
import { Link } from 'react-router-dom';
import frame from "../img/frame2.svg"

function Meditaion() {
  return <>
    <img src={frame} alt="frame"></img>
    <Link to="/">Back</Link>
  </>
}

export default Meditaion

