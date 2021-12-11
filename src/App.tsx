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
        <GitHubButton
          href="https://github.com/project-serum/oyster-swap"
          data-color-scheme="no-preference: light; light: light; dark: light;"
          data-icon="octicon-telegram"
          data-size="large"
          data-show-count={false}
          aria-label="Star solana-labs/oyster-swap on GitHub"
        >
          Star
        </GitHubButton>
        <GitHubButton
          href="https://github.com/project-serum/oyster-swap/fork"
          data-color-scheme="no-preference: light; light: light; dark: light;"
          data-size="large"
          aria-label="Fork project-serum/oyster-swap on GitHub"
        >
          Fork
        </GitHubButton>
      </div>
    </div>
  );
}

export default App;
