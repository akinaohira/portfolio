import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Meditation from "./components/Meditation.js"
import Shoes from "./components/Shoes.js"
import Pashirin from "./components/Pashirin.js"

const root = document.getElementById('root')

ReactDOM.render(
  <Router>
    <Route exact path="/" component={App}></Route>
    <Route path="/meditaion" component={Meditation}></Route>
    <Route path="/shoes" component={Shoes}></Route>
    <Route path="/pashirin" component={Pashirin}></Route>
  </Router>
  , root);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
