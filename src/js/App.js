import React from "react";
import ReactDOM from "react-dom";
import Container from "./components/Container";
import '../styles/style.scss'
ReactDOM.render(<Container />, document.getElementById("app"));

module.hot.accept();