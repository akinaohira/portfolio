import React from 'react';
import { Link } from 'react-router-dom';
import shoesFrame from "../img/fram5.svg"

function Shoes() {
  return <>
    <img src={shoesFrame} alt="frame"></img>
    <Link to="/">Back</Link>
  </>
}

export default Shoes

