import React from "react";
import { NavLink } from "react-router-dom";

export default function RightSideBar() {
  return (
    <div className="col-md-3 pt-4 left-border fixed-right-sidebar">
      <div className="right-sidebar p-2">
        <h5>StackOverflow Lite</h5>
        <hr className="m-0 pb-2" />
        <NavLink to={`/articles/id`}>
          Get to Know Our New Code of Conduct
        </NavLink>

        <h5 className="pt-1">Featured on Meta</h5>
        <hr className="m-0 pb-2" />
        <NavLink to={`/articles/id`}>
          Updated comment flagging - Supporting the new Code of Conduct Custom
          question lists is available for testing Should we burninate the
          [arrow] tag?
        </NavLink>

        <h5 className="pt-1">Hot Meta Posts</h5>
        <hr className="m-0 pb-2" />
        <NavLink to={`/articles/id`}>
          Do companies receive notifications if an user mentions them in
          his/her…How to answer a question when the right answer may not be a
          good idea
        </NavLink>
      </div>
    </div>
  );
}
