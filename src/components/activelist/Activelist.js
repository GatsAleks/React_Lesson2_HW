import React, { Component } from "react";
import "./Activelist.css";

export default class Activelist extends Component {
  render() {
    let activeList = this.props.todolist
      .filter((list) => list.completed === true)
      .map((list) => {
        return <li key={list.id}>{list.title}</li>;
      });

    return (
      <div className="active_list">
        <h2>Active list</h2>
        <ul>{activeList}</ul>
        <h3>The count of active items is {activeList.length}</h3>
      </div>
    );
  }
}
