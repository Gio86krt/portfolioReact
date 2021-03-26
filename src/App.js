import React from "react";
import "./App.css";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
import About from "./components/About/index";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";

function App() {
  const endPoint = window.location.href;
  console.log(endPoint);
  return (
    <div className="App">
      <Header />
      {endPoint.includes("contact") ? (
        <Contact />
      ) : endPoint.includes("portfolio") ? (
        <Portfolio />
      ) : (
        <About />
      )}
      <Footer />
    </div>
  );
}

export default App;
