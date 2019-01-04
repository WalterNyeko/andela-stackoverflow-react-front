import React from "react";
import NavBar from "./NavBar";

export default function DefaultLayout(showLoginForm, showSignUpForm) {
  return (
    <div>
      <NavBar showLoginForm={showLoginForm} showSignUpForm={showSignUpForm} />
    </div>
  );
}
