import "./App.css";
import React, { Component } from "react";
import Todolist from "./components/todolist/Todolist";
import Activelist from "./components/activelist/Activelist";
import Passivelist from "./components/passivelist/Passivelist";

export default class App extends Component {
  state = {
    todolist: [
      {
        id: "14",
        title: "Costa Rican Colon North Carolina parsing",
        completed: true,
      },
      {
        id: "16",
        title: "Industrial indexing context-sensitive",
        completed: false,
      },
      {
        id: "18",
        title: "North Korean Won",
        completed: false,
      },
      {
        id: "19",
        title: "Wooden Indiana",
        completed: true,
      },
      {
        id: "20",
        title: "Assistant actuating implement",
        completed: false,
      },
      {
        id: "21",
        title: "Assistant actuating implement",
        completed: false,
      },
      {
        id: "22",
        title: "Assistant actuating implement",
        completed: true,
      },
      {
        id: "23",
        title: "Assistant actuating implement",
        completed: false,
      },
    ],
  };
  render() {
    return (
      <div className="app">
        <Todolist todolist={this.state.todolist} />
        <div className="active_passive_list">
          <div>
            <Activelist todolist={this.state.todolist} />
          </div>
          <div>
            <Passivelist todolist={this.state.todolist} />
          </div>
        </div>
      </div>
    );
  }
}
