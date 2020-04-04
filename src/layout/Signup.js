import React, { Component } from "react";
import fire from "../config/fire";

import Logo from "../sign.JPG";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.signup = this.signup.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      name: "",
      email: "",
      password: ""
    };
  }

  signup(e) {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {
        console.log(u);
      })
      .catch(err => {
        console.log(err);
      });
    this.setState({
      name: "",
      email: "",
      password: ""
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  render() {
    return (
      <div>
        <div className="cover" style={{ maxWidth: "1300px", display: "flex" }}>
          <img
            className="signimg"
            src={Logo}
            style={{ flex: "3", width: "80%" }}
          />

          <div
            className="signbox"
            style={{
              backgroundColor: "white",

              width: "400px",
              borderRadius: "10px",
              marginLeft: "20px",
              marginRight: "30px",
              marginTop: "30px",
              flex: "1",
              height: "500px",
              padding: "10px"
            }}
          >
            <form
              className="signinform"
              style={{
                width: "200px",
                margin: "auto",

                paddingTop: "20px"
              }}
            >
              <h2 style={{ marginTop: "10px" }}>
                <center>Sign Up</center>
              </h2>
              <div className="form-group">
                <label style={{ float: "left" }} htmlFor="name">
                  {" "}
                  Name:{" "}
                </label>
                <input
                  className="form-control loginput form-control-lg"
                  type="text"
                  name="name"
                  value={this.state.name}
                  placeholder="Enter name here..."
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label style={{ float: "left" }} htmlFor="name">
                  {" "}
                  Email:{" "}
                </label>
                <input
                  className="form-control form-control-lg"
                  type="email"
                  name="email"
                  placeholder="Enter email here..."
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label style={{ float: "left" }} htmlFor="password">
                  {" "}
                  Password:{" "}
                </label>
                <input
                  className="form-control form-control-lg"
                  type="text"
                  name="password"
                  placeholder="Enter password here..."
                  value={this.state.password}
                  onChange={this.handleChange}
                />
                <button
                  type="button"
                  className="btn btn-primary btn-lg signupbtn"
                  onClick={this.signup}
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
        <p
          className="lead"
          style={{ float: "left", marginLeft: "100px", marginTop: "2rem" }}
        >
          Sign Up to start using Tudy now.
        </p>
      </div>
    );
  }
}
export default Signup;
