import React, { Component } from "react";
import fire from "../config/fire";

import Logo from "../sign.JPG";
import "../App.css";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.signup = this.signup.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

  signup(e) {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        console.log(u);
      })
      .catch((err) => {
        console.log(err);
      });
    this.setState({
      name: "",
      email: "",
      password: "",
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
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
              border: "solid 2px",
              width: "400px",
              borderRadius: "15px",
              marginLeft: "20px",
              marginRight: "30px",
              marginTop: "30px",
              flex: "1",
              height: "500px",
              padding: "10px",
            }}
          >
            <form
              className="signinform"
              style={{
                width: "200px",
                margin: "auto",

                paddingTop: "20px",
              }}
            >
              <center>
                <h2 style={{ marginTop: "10px" }}>Sign Up</h2>
              </center>
              <div className="form-group">
                <label htmlFor="name"> Name: </label>
                <input
                  className="form-control signinput form-control-lg"
                  type="text"
                  name="name"
                  value={this.state.name}
                  placeholder="name "
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name"> Email: </label>
                <input
                  className="form-control form-control-lg"
                  type="email"
                  name="email"
                  placeholder=" email "
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password"> Password: </label>
                <input
                  className="form-control form-control-lg"
                  type="text"
                  name="password"
                  placeholder="password "
                  value={this.state.password}
                  onChange={this.handleChange}
                />
                <button
                  style={{ margin: " 20px  auto 10px" }}
                  type="button"
                  className="btn btn-primary btn-lg "
                  onClick={this.signup}
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>

        <div
          className=" signinfo"
          style={{ float: "left", marginLeft: "100px", marginTop: "2rem" }}
        >
          <p className="lead ">Sign Up to start using Tudy now.</p>
        </div>
      </div>
    );
  }
}
export default Signup;
