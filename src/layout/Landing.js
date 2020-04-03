import Logo from "../personal.png";
import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import fire from "../config/fire";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  logout() {
    fire.auth().signOut();
  }
  render() {
    return (
      <div>
        <img className="landimg img-responsive " src={Logo} />
        <p className="lead">
          {" "}
          Tudy is a simple to-do list and task manager app which helps you
          manage time{" "}
        </p>

        <div>
          <Link to="/signup">
            <button type="button" className="btn btn-primary btn-lg">
              Get started
            </button>
          </Link>
          <button
            type="button"
            className="btn btn-primary btn-lg"
            onClick={this.logout}
          >
            logout
          </button>
        </div>
      </div>
    );
  }
}

export default Landing;
