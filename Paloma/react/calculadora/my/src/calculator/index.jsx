import React from "react";
import "./style.css";
import Screen from "../calc-screen";
import Buttons from "../calc-buttons";

class Calculator extends React.Component {
  render() {
    return (
      <section className="calculator_container">
        <Screen></Screen>
        <Buttons></Buttons>
      </section>
    );
  }
}
export default Calculator;
