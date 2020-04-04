import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../personal.png";
import fire from "../config/fire";
import "../App.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      email: "",
      password: "",
    };
  }
  login(e) {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        console.log(u);
      })
      .catch((err) => {
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
      [e.target.name]: e.target.value,
    });
  }
  render() {
    return (
      <div>
        <div className="cover" style={{ maxWidth: "1300px", display: "flex" }}>
          <img
            className="landimg  "
            style={{ flex: "3", width: "80%" }}
            src={Logo}
          />

          <div
            className="loginbox"
            style={{
              backgroundColor: "white",
              border: "solid 2px",
              width: "400px",
              borderRadius: "10px",
              marginLeft: "20px",
              marginRight: "30px",
              marginTop: "30px",
              flex: "1",
              height: "500px",
              padding: "10px",
            }}
          >
            <form
              className="loginform"
              style={{
                width: "200px",
                margin: "auto",

                paddingTop: "20px",
              }}
            >
              <center>
                <h2 style={{ marginTop: "10px" }}>Login</h2>
              </center>
              <div className="form-group">
                <label htmlFor="name"> Email: </label>
                <input
                  className="form-control form-control-lg"
                  type="email"
                  name="email"
                  placeholder="email"
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
                  placeholder="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
                <button
                  style={{ margin: " 20px  auto 10px" }}
                  type="button"
                  className="btn loginbtn btn-primary btn-lg"
                  onClick={this.login}
                >
                  Login
                </button>
              </div>
              <center>
                <p className="lead" style={{ marginTop: "10px" }}>
                  don't have an account?<Link to="/signup"> Sign Up</Link>{" "}
                </p>
              </center>
            </form>
          </div>
        </div>
        <div className="row tudyinfo">
          <div
            className="col-md-6"
            style={{ display: "flex", marginTop: "17px", marginLeft: "40px" }}
          >
            <p className="lead " style={{ flex: "1" }}>
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
