import React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class Email extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label>
            Your email:
            <input type="text" name="email" />
          </label>
          <input type="submit" value="Submit" />
          <textarea>Your information goes here</textarea>
        </form>
      </div>
    );
  }
}

export default Email;
