import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../store/actions/users";

export class LoginFormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    const loginData = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.loginUser(loginData);
  };
  render() {
    return (
      <div className="col-md-8 main-content-login">
        {/* <!-- Login Details --> */}
        <div className="card mt-4">
          <div className="card-header bg-primary text-white">Login</div>
          <div className="card-body">
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="Your username"
                name="username"
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Your password"
                name="password"
                onChange={this.onChange}
              />
            </div>

            <div className="form-group">
              <button className="btn btn-success" onClick={this.handleSubmit}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { loginUser }
)(LoginFormComponent);
