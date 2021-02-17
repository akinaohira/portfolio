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
    <div className="App">
      <div className="App-header">
        <header>
          <button className="about"><Link to="/about">about</Link></button>
          <button><Link to="work">work</Link></button>
          <button><Link to="/contact">contack</Link></button>

        </header>
        <img src={cloud} className="cloud1" alt="cloud" />
        <img src={kumo} className="cloud2" alt="cloud" />
        <img src={kumo2} className="cloud3" alt="cloud" />
        <p className="name">
          <span>Hello</span>,I'm Akina Ohira.
        </p>
        <p>Software Engineer, based on Tokyo, Japan</p>
        <img alt="dog" src={edy} className="edy"></img>
        <a
          className="about_link"
          target="_blank"
        >
          learn more about me
        </a>
      </div>

    </div>
  );
}

export default App;
