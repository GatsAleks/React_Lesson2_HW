import React, { Component } from "react";
import "./Passivelist.css";

export default class Passivelist extends Component {
  render() {
    let passiveList = this.props.todolist
      .filter((list) => list.completed === false)
      .map((list) => <li key={list.id}>{list.title}</li>);
    return (
      <div className="passive_list">
        <h2>Passive list</h2>
        <ul>{passiveList}</ul>
        <h3>The count of passive items is {passiveList.length}</h3>
      </div>
    );
  }
}
