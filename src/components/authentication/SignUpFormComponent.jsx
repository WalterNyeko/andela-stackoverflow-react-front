import React, { Component } from "react";
import { connect } from "react-redux";
import { signUpUser } from "../../store/actions/users";

class SignUpFormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
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
    const signUpData = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    };
    this.props.signUpUser(signUpData);
  };
  render() {
    return (
      <div class="col-md-8 main-content-login">
        {/* <!-- SignUp Details --> */}
        <div class="card mt-4">
          <div class="card-header bg-primary text-white">Register</div>
          <div class="card-body">
            <div class="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="Your username"
                name="username"
                onChange={this.onChange}
                value={this.state.username}
              />
            </div>
            <div class="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Your Email"
                name="email"
                onChange={this.onChange}
                value={this.state.email}
              />
            </div>
            <div class="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Your password"
                name="password"
                onChange={this.onChange}
                value={this.state.password}
              />
            </div>
            <div class="form-group">
              <button class="btn btn-success" onClick={this.handleSubmit}>
                Sign Up
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
  { signUpUser }
)(SignUpFormComponent);
