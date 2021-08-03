import React from "react";
import "./style.css";
class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <nav className="nav">
          <a className="logolink" href="https://es.reactjs.org/" title="home">
            <img
              className="logo"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
              alt="logo"
              title="logo"
            />
            <span className="logo-text"> React </span>
          </a>
          <div className="nav-links">
            <ul className="menu">
              <li>
                <a
                  href="https://es.reactjs.org/docs/getting-started.html"
                  title="documentación"
                >
                  Documentación
                </a>
              </li>
              <li>
                <a
                  className="active"
                  href="https://es.reactjs.org/tutorial/tutorial.html"
                  title="Tutorial"
                >
                  Tutorial
                </a>
              </li>
              <li>
                <a href="https://es.reactjs.org/blog/" title="Blog">
                  {" "}
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="https://es.reactjs.org/community/support.html"
                  title="Comunidad"
                >
                  Comunidad
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
export default Header;
