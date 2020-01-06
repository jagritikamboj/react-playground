import React from "react";
import ReactDOM from "react-dom";
import Header from "./Components/Header";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Hello Jagriti!</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
