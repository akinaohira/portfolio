import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  return <>
    <p>akina568325@gmail.com</p>
    <a href="mailto:akina568325@gmail.com">Email</a>
    <Link to="/">Back</Link>
  </>
}

export default Contact

