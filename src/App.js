import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import RecentWork from "./components/RecentWork";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className="container-fluid">
        <Navbar />

        <Route exact path="/">
          <Intro />
          <RecentWork />
        </Route>
        <Route path="/work" component={Gallery} />

        <Footer />
      </div>
    </Router>
  );
};

export default App;
