import React from "react";
import Popular from "./components/Popular";

import "./index.css";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Popular />
      </div>
    );
  }
}

export default App;
