import { Router, Route, Link } from "react-router-dom";
import React from "react";
import "./style.css";

// function getInputs(e) {
//   e.preventDefault();

//   let name = document.querySelector(".name").value;
//   let email = document.querySelector(".email").value;
//   let message = document.querySelector("#message").value;
//   // console.log(name, email, message);
//   sendEmail(name, email, message);
// }

// document.querySelector(".send").addEventListener("click", getInputs);

// function sendEmail(name, email, message) {
//   Email.send({
//     SecureToken: "54c85e71-4bb4-482d-91c9-fe30d4ea515c",
//     To: `webdevgiova86@gmail.com`,
//     From: `${email}`,
//     Subject: `${name} has sent you a message`,
//     Body: `${message}`,
//   })
//     .then((message) => {
//       clearInputs();
//       console.log(message);
//       alert("Message was sent");
//     })
//     .catch((err) => {
//       alert("Message not sent, try again!");
//       console.log(err);
//     });
// }

// function clearInputs() {
//   document.querySelector(".name").value = "";
//   document.querySelector(".email").value = "";
//   document.querySelector("#message").value = "";
// }

function Contact() {
  return (
    <div>
      <form className="container">
        <h3>Send me a message: </h3>
        <br />
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
          className="send"
          cols="50"
          rows="5"
        />
        <br />
        <button id="btn primary-btn send">Send!</button>
      </form>
    </div>
  );
}

export default Contact;
