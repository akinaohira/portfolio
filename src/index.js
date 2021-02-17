import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Conact from "./Contact.js"

const rout = document.getElementById('root')

ReactDOM.render(
  <Router>
    <App exact >
      <Route path="/contact" component={Conact}></Route>
    </App>
  </Router>
  , rout);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
