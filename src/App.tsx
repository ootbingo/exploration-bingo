import React from "react";
import { BingoPage } from "./components/BingoPage";

class App extends React.Component {
  render() {
    return (
      <div className="container" id="pageContent">
        <BingoPage />
      </div>
    );
  }
}

export default App;
