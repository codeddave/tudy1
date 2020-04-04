import React, { Component } from "react";
import ListItems from "./ListItems";
import fire from "../config/fire";
import "../App.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: "",
      },
    };
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }
  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now(),
      },
    });
  }
  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);
    if (newItem.text !== "") {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          text: "",
          key: "",
        },
      });
    }
  }
  deleteItem(key) {
    const filteredItems = this.state.items.filter((item) => item.key !== key);
    this.setState({
      items: filteredItems,
    });
  }
  setUpdate(text, key) {
    const items = this.state.items;
    items.map((item) => {
      if (item.key === key) {
        item.text = text;
      }
    });
    this.setState({
      items: items,
    });
  }
  logout() {
    fire.auth().signOut();
  }
  render() {
    return (
      <div
        style={{
          backgroundColor: " #f3bd2d ",
          maxWidth: "1500px",
        }}
      >
        {" "}
        <button
          type="button"
          className="btn logout btn-primary btn-md"
          onClick={this.logout}
        >
          logout
        </button>
        <div className="todo">
          <form className="todo-form">
            <input
              type="text"
              onChange={this.handleInput}
              value={this.state.currentItem.text}
              placeholder="Enter Task"
            />
            <button onClick={this.addItem}>
              <i className="fas fa-plus" /> Add
            </button>
          </form>
          <ListItems
            items={this.state.items}
            deleteItem={this.deleteItem}
            setUpdate={this.setUpdate}
          />
        </div>
      </div>
    );
  }
}
export default Todo;
