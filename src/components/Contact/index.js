import { Router, Route, Link } from "react-router-dom";
import React from "react";
import "./style.css";

function Contact() {
  return (
    <form className="container">
      <input
        type="text"
        cols="50"
        name="name"
        id="input name"
        placeholder="Your Name"
      />
      <br />
      <br />
      <input
        type="email"
        name="email"
        cols="50"
        id="input email"
        placeholder="email@email.com"
      />
      <br />
      <br />
      <textarea
        type="text"
        name="message"
        id="input message"
        cols="50"
        rows="5"
      />
      <br />
      <button id="btn primary-btn send">Send!</button>
    </form>
  );
}

export default Contact;
