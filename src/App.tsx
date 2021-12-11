import React from "react";
import "./App.less";
import GitHubButton from "react-github-btn";
import { Routes } from "./routes";

function App() {
  return (
    <div className="App">
      <div className="Banner">
        <div className="Banner-description">
          Chemeleonswap are live now swap with any token.
        </div>
      </div>
      <Routes />
      <div className="social-buttons">
        
      </div>
    </div>
  );
}

export default App;
