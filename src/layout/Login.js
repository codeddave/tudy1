import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../personal.png";
import fire from "../config/fire";

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      email: "",
      password: ""
    };
  }
  login(e) {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {
        console.log(u);
      })
      .catch(err => {
        var errorCode = err.code;
        var errorMessage = err.message;
        // [START_EXCLUDE]
        if (errorCode === "auth/wrong-password") {
          alert("Wrong password.");
        } else {
          alert(errorMessage);
        }
        console.log(err);
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
        <img className="landimg img-responsive " src={Logo} />

        <div
          className="signbox"
          style={{
            width: "500px",
            backgroundColor: "white",
            margin: "auto",
            float: "right",
            borderRadius: "10px",
            borderStyle: "solid",
            marginRight: "100px",
            marginTop: "60px",
            height: "500px"
          }}
        >
          <h2 style={{ marginTop: "30px", marginLeft: "auto" }}>
            <center>Login</center>
          </h2>
          <form
            style={{
              width: "400px",
              marginRight: "50px",
              float: "right",
              paddingTop: "20px"
            }}
          >
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
            </div>
            <button
              style={{ marginTop: "1rem", marginLeft: "165px" }}
              type="button"
              className="btn btn-primary btn-lg"
              onClick={this.login}
            >
              Login
            </button>

            <p className="lead" style={{ marginTop: "15px" }}>
              <center>
                don't have an account?<Link to="/signup"> Sign Up</Link>{" "}
              </center>{" "}
            </p>
          </form>
        </div>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-6" style={{ marginTop: "17px" }}>
            <p className="lead ">
              {" "}
              Tudy is a simple to-do list and task manager app that helps you
              keep track of your tasks and manage time{" "}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
