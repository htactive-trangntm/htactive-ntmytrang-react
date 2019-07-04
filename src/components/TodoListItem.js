import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoListItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        var tasks = this.props.todolists.map((task, index) => {
            return <TodoItem
                task={task}
                key={task.id}
                id={task.id}
                item={task}
                markTodoDone={this.props.markTodoDone}
                active={this.props.active}
                completed={this.props.completed}
                allTasks={this.props.allTasks}
                deleteTask={this.props.deleteTask}
            />
        });

        return (
            <div className="container">
                <h2>List of task</h2>
                <ul>{tasks}</ul>
            </div>
        );
    }
}

export default TodoListItem