import React from "react";
import RightSideBar from "../utils/RightSideBar";
import LeftSideBar from "../utils/LeftSideBar";
import Footer from "../utils/Footer";
import LoginPage from "../authentication/LoginPage";
import DefaultLayout from "../utils/DefaultLayout";

export const LoginContainer = () => {
  return (
    <div>
      <div className="content">
        <div className="container-fluid">
          <DefaultLayout />
          <div className="row">
            <LeftSideBar />
            <LoginPage />
            <RightSideBar />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
