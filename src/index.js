import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import GlobalStyle from "./components/styles/globalStyles";
import Theme from "./components/styles/theme";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Theme>
        <App />
        <GlobalStyle />
      </Theme>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
