import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

class Header extends React.Component {
  render() {
    return (
      <div>
        <header className="nav-bar">
          <ul className="link-display">
            <li>
              <Link className="nav-text" to="/Home">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-text" to="/Contact">
                Contact
              </Link>
            </li>
          </ul>
        </header>
      </div>
    );
  }
}

export default Header;
