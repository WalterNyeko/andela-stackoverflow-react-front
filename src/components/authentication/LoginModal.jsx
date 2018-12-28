import React from "react";

export default function LoginModal() {
  return (
    <div>
      <div
        className="modal fade"
        id="exampleModalLong"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLongTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-sm" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                <i className="fa fa-sign-in-alt" />
                Login
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group">
                  <button className="btn btn-success btn-block">
                    Login
                    <i className="fa fa-sign-in-alt" />
                  </button>
                </div>
                <p className="text-center">
                  Don't have an account? <a href="#">Sign up</a>
                </p>
              </form>
            </div>
            <div className="modal-footer" />
          </div>
        </div>
      </div>
    </div>
  );
}
