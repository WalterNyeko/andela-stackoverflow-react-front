import React from "react";

export default function LeftSideBar() {
  return (
    <div>
      <div className="col-md-3 pt-4 left-border fixed-right-sidebar">
        <div className="right-sidebar p-2">
          <h5>StackOverflow Lite</h5>
          <hr className="m-0 pb-2" />
          <a href="#" className="m-0">
            Get to Know Our New Code of Conduct
          </a>
          <h5 className="pt-1">Featured on Meta</h5>
          <hr className="m-0 pb-2" />
          <a href="#">
            Updated comment flagging - Supporting the new Code of Conduct Custom
            question lists is available for testing Should we burninate the
            [arrow] tag?
          </a>
          <h5 className="pt-1">Hot Meta Posts</h5>
          <hr className="m-0 pb-2" />
          <a href="#">
            Do companies receive notifications if an user mentions them in
            his/her…How to answer a question when the right answer may not be a
            good idea
          </a>
        </div>
      </div>
    </div>
  );
}
