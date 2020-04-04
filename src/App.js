import React, { Component } from "react";
import fire from "./config/fire";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./layout/Header";
import Landing from "./layout/Landing";
import Signup from "./layout/Signup";
import About from "./layout/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./layout/Login";
import Todo from "./todo/Todo";
import ListItems from "./todo/ListItems";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }
  componentDidMount() {
    this.authListener();
  }
  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }
  render() {
    return (
      <Router>
        <div className="App" style={{ color: "black" }}>
          <Header branding="Tudy" />
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/about" component={About} />
          </Switch>
          {this.state.user ? (
            <div>
              <Todo />
            </div>
          ) : (
            <Login />
          )}
        </div>
      </Router>
    );
  }
}

export default App;
