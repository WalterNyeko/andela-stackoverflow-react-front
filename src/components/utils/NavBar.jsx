import React, { Component } from "react";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md fixed-top">
          <a className="navbar-brand" href="#">
            StackOverFlow Lite
          </a>
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
              <li className="nav-item mr-2">
                <a className="btn btn-light btn-sm" href="#">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="btn btn-primary btn-sm" href="#">
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
