import React, { Component } from "react";
import "./App.css";
import TodoListItem from "./components/TodoListItem";
import FormAddTask from "./components/FormAddTask";

const url = "http://5d19c5cab3b6a100148d22e2.mockapi.io/todolist";
class App extends Component {
  constructor() {
    super();
    this.state = {
      todolists: [],
      filter: "all"
    };
  }

  //fetch data from API
  async componentDidMount() {
    await fetch(url)
      .then(res => res.json())
      .then(result => {
        this.setState({
          todolists: result
        });
      });
  }

  //filter completed task

  changeFilter = filter => {
    this.setState({
      filter
    });
  };

  getFilterTodo = () => {
    switch (this.state.filter) {
      case "active": {
        console.log("Trang", this.state.todolists);
        return this.state.todolists.filter(t => !t.isComplete);
      }
      case "completed":
        return this.state.todolists.filter(items => items.isComplete);
      default:
        return this.state.todolists;
    }
  };

  //add task and save data on API
  addTask = async newTask => {
    this.setState({
      todolists: this.state.todolists.concat({
        id: this.state.todolists.length + 1,
        task: newTask,
        isComplete: false
      })
    });

    await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ task: newTask, isComplete: false })
    })
      .then(response => console.log(response))
      .catch(error => console.log(error));
  };

  //Edit task and change data on API
  updateTask = async task => {
    console.log(task);
    await fetch(url + `/${task.id}`, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(task)
    })
      .then(res => {
        return res;
      })
      .catch(err => console.log(err));
  };

  //checked completed task
  markTodoDone = async id => {
    console.log(this.state.todolists);
    let task = this.state.todolists.find(todolist => todolist.id === id);
    console.log(task);
    task.isComplete = !task.isComplete;
    this.setState({
      todolists: Object.assign(this.state.todolists, task)
    });
    await fetch(url + `/${id}`, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(task)
    })
      .then(response => console.log(response))
      .catch(error => console.log(error));
  };

  //delete task
  deleteTask = async id => {
    let task = this.state.todolists.findIndex(todolist => todolist.id === id);
    this.state.todolists.splice(task, 1);
    this.setState({
      todolists: Object.assign(this.state.todolists, task)
    });
    await fetch(url + `/${id}`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        return res;
      })
      .catch(err => err);
    console.log(this.state.todolists);
  };

  render() {
    let calPercent = 0;
    let completedTask = this.state.todolists.filter(items => items.isComplete);
    if (this.state.todolists) {
      calPercent = Math.round(
        (completedTask.length / this.state.todolists.length) * 100
      );
    }
    calPercent = 0;

    console.log(calPercent);
    return (
      <>
        <FormAddTask
          addTask={this.addTask}
          todolists={this.state.todolists}
          changeFilter={this.changeFilter}
          calPercent={calPercent}
        />
        <TodoListItem
          todolists={this.getFilterTodo()}
          markTodoDone={this.markTodoDone}
          completed={this.completed}
          deleteTask={this.deleteTask}
          updateTask={this.updateTask}
        />
      </>
    );
  }
}

export default App;
