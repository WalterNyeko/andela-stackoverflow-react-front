import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md fixed-top">
          <NavLink className="navbar-brand" to={`/articles/id`}>
            StackOverFlow Lite
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExample04"
            aria-controls="navbarsExample04"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample04">
            <form className="form-inline my-2 my-md-0">
              <input
                id="searchForm"
                className="form-control form-control-sm"
                type="text"
                placeholder="Search..."
              />
            </form>
            <ul className="navbar-nav ml-auto">
              {!localStorage.getItem("token") ? null : (
                <li className="nav-item mr-2">
                  <NavLink className="navbar-brand" to={`/users/login`}>
                    <a href="/" className="btn btn-light btn-sm">
                      {" "}
                      Login
                    </a>
                  </NavLink>
                </li>
              )}
              <li className="nav-item">
                <NavLink className="navbar-brand" to={`/users/signup`}>
                  <a href="/" className="btn btn-primary btn-sm">
                    {" "}
                    Sign Up
                  </a>
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
