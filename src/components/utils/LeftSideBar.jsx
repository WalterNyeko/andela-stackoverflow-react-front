import React from "react";
import { NavLink } from "react-router-dom";
export default function LeftSideBar() {
  return (
    <div>
      <div className="col-md-2 right-border fixed-left-sidebar">
        <div
          className="nav flex-column nav-pills mt-4"
          aria-orientation="vertical"
        >
          <NavLink className="navbar-brand" to={`/`}>
            <a
              className="nav-link active"
              id="v-pills-home-tab"
              data-toggle="pill"
              href="#v-pills-home"
              role="tab"
              aria-controls="v-pills-home"
              aria-selected="true"
            >
              <i className="fa fa-home" />
              Home
            </a>
          </NavLink>

          <a
            className="nav-link"
            id="v-pills-profile-tab"
            data-toggle="pill"
            href="#v-pills-profile"
            role="tab"
            aria-controls="v-pills-profile"
            aria-selected="false"
          >
            Profile
          </a>
          <a
            className="nav-link"
            id="v-pills-messages-tab"
            data-toggle="pill"
            href="#v-pills-messages"
            role="tab"
            aria-controls="v-pills-messages"
            aria-selected="false"
          >
            Messages
          </a>
          <a
            className="nav-link"
            id="v-pills-settings-tab"
            data-toggle="pill"
            href="#v-pills-settings"
            role="tab"
            aria-controls="v-pills-settings"
            aria-selected="false"
          >
            Settings
          </a>
        </div>
      </div>
    </div>
  );
}
