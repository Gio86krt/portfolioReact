import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";

function App() {
  const endPoint = window.location.href;
  console.log(endPoint);
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
