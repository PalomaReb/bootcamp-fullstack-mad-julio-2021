import React from "react";
import "./button.css";

class Buttons extends React.Component {
  render() {
    return (
      <div className="buttonPannel">
        <button className="button operationbutton">C</button>
        <button className="button operationbutton">%</button>
        <button className="button operationbutton">➗</button>
        <button className="button operationbutton">✖️</button>
        <button className="button buttonnumber">7</button>
        <button className="button buttonnumber">8</button>
        <button className="button buttonnumber">9</button>
        <button className="button operationbutton">➖</button>
        <button className="button buttonnumber">4</button>
        <button className="button buttonnumber">5</button>
        <button className="button buttonnumber">6</button>
        <button className="button operationbutton">➕</button>
        <button className="button buttonnumber">1</button>
        <button className="button buttonnumber">2</button>
        <button className="button buttonnumber">3</button>
        <button className="equalButton">equals</button>
        <button className="button buttonnumber">0</button>
        <button className="button buttonnumber">.</button>
        <button className="button buttonnumber">delete</button>
      </div>
    );
  }
}
export default Buttons;
