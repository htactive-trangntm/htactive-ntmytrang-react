import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

function TodoListItem(props) {
  const { todolists, markTodoDone, deleteTask, updateTask } = props;
  var tasks = todolists.map(task => {
    return (
      <TodoItem
        task={task}
        key={task.id}
        id={task.id}
        item={task}
        markTodoDone={markTodoDone}
        deleteTask={deleteTask}
        updateTask={updateTask}
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

TodoItem.propTypes = {
  todolists: PropTypes.array,
  markTodoDone: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired
};

export default TodoListItem;
