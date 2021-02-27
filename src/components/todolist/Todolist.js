import React, { Component } from "react";
import "./Todolist.css";

export default class Todolist extends Component {
  render() {
    let listArr = this.props.todolist.map((list) => {
      return (
        <tr key={list.id} className={list.completed ? "active" : "passive"}>
          <td>{list.id}</td>
          <td>{list.title}</td>
        </tr>
      );
    });

    return (
      <>
        <h1>Todolist</h1>
        <table className="table">
          <thead>
            <tr>
              <th>ID </th>
              <th>Title of list</th>
            </tr>
          </thead>
          <tbody>{listArr}</tbody>
        </table>
      </>
    );
  }
}
