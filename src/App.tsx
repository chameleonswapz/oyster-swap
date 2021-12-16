import React from "react";
import "./App.less";
import GitHubButton from "react-github-btn";
import { Routes } from "./routes";

function App() {
  return (
    <div className="App">
      <div className="Banner">
        
      </div>
      <Routes />
      <div className="social-buttons">
        <GitHubButton
          href=""
          data-color-scheme="no-preference: light; light: light; dark: light;"
          data-icon="octicon-telegram"
          data-size="large"
          data-show-count={false}
          aria-label="Star solana-labs/oyster-swap on GitHub"
        >
          
        </GitHubButton>
        <GitHubButton
          href=""
          data-color-scheme="no-preference: light; light: light; dark: light;"
          data-size="large"
          aria-label="Fork project-serum/oyster-swap on GitHub"
        >
          
        </GitHubButton>
      </div>
    </div>
  );
}

export default App;
