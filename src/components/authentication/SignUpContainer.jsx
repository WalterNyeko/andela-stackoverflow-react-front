import React from "react";
import RightSideBar from "../utils/RightSideBar";
import LeftSideBar from "../utils/LeftSideBar";
import Footer from "../utils/Footer";
import SignUpPage from "../authentication/SignUpPage";
import DefaultLayout from "../utils/DefaultLayout";

export const SignUpContainer = () => {
  return (
    <div>
      <div className="content">
        <div className="container-fluid">
          <DefaultLayout />
          <div className="row">
            <LeftSideBar />
            <SignUpPage />
            <RightSideBar />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
