import React from "react";
import "./screen.css";

//Pantalla Calculadora
class Screen extends React.Component {
  render() {
    return (
      <div className="visualArea">
        <p className="operationstring">2+5+3</p>
        <p className="resultSpan">
          <span className="operationNumber">+</span>
          <span className="resultnumber">20</span>
        </p>
      </div>
    );
  }
}

export default Screen;
