import React from "react";
import "./style.css";

import emailjs from "emailjs-com";

function Contact() {
  function sendEmail(e) {
    e.preventDefault();
    // console.log(e.target);

    emailjs
      .sendForm(
        "service_pu6oaeh",
        "template_drfxhjj",
        e.target,
        "user_Vrh3kpUcbaQ2xrsb1qziZ"
      )
      .then(
        (result) => {
          console.log(result);
          alert("Thank you!");
        },
        (error) => {
          console.log(error.text);
          alert("Sorry try again...");
        }
      );
    e.target.reset();
  }

  return (
    <div>
      <form onSubmit={sendEmail} className="container">
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
          cols="50"
          rows="5"
        />
        <br />
        <button type="submit" id="btn primary-btn send">
          Send!
        </button>
      </form>
    </div>
  );
}

export default Contact;
