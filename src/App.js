// import logo from './logo.svg';
import cloud from './img/cloud.svg'
import kumo from './img/kumo.svg'
import kumo2 from './img/kumo2.svg'
import edy from './img/Edy.png'
import './css/App.css';
import { Link } from "react-router-dom";
import React from "react"

function App() {
  return (
    <div className="App-header">
      <button><Link to="/contact">CONTACT</Link></button>
      <div className="main_container">
        <div>
          <img src={cloud} className="cloud1" alt="cloud" />
          <img src={kumo} className="cloud2" alt="cloud" />
          <img src={kumo2} className="cloud3" alt="cloud" />
        </div>
        <div className="tittle">
          <p className="name">
            <span>Hello</span>,I'm Akina Ohira.<br />Software Engineer, based on Tokyo, Japan
          </p>
          <img alt="dog" src={edy} className="edy"></img>
        </div>
      </div>
      <button><Link to="/contact">CONTACT</Link></button>
    </div>
  );
}

export default App;
