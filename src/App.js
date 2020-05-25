import React from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Work from "./components/Work";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Intro />
      <Work />
    </div>
  );
};

export default App;
