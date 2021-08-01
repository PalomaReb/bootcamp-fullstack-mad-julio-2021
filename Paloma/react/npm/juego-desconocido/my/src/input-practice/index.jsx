import React from "react";
import "./style.css";
class StateButton extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
      name: "",
    };
  }
  getText(e) {
    this.setState({
      text: e.target.value,
    });
  }
  greet() {
    this.setState((state) => {
      return {
        name: `Hola, ${state.text}`,
      };
    });
  }
  render() {
    return (
      <div>
        <input
          type="text"
          onChange={(e) => {
            this.getText(e);
          }}
        ></input>
        <button
          type="button"
          className="button"
          onClick={() => {
            this.greet();
          }}
        >
          CLICK ME
        </button>
        <p>{this.state.name}</p>
      </div>
    );
  }
}
export default StateButton;
