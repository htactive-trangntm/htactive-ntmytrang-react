import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoListItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var tasks = this.props.todolists.map((task) => {
      return (
        <TodoItem
          task={task}
          key={task.id}
          id={task.id}
          item={task}
          markTodoDone={this.props.markTodoDone}
          deleteTask={this.props.deleteTask}
          updateTask={this.props.updateTask}
        />
      );
    });

    return (
      <div className="container">
        <h2>List of tasks</h2>
        <ul>{tasks}</ul>
      </div>
    );
  }
}

export default TodoListItem;
