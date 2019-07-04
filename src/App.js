import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import TodoListItem from './components/TodoListItem';
import FormAddTask from './components/FormAddTask';



class App extends Component {
  constructor() {
    super();
    this.state = {
      todolists: [],
      filterTasks: []
    }
  }

  async componentDidMount() {
    await fetch("http://5d19c5cab3b6a100148d22e2.mockapi.io/todolist")
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          todolists: result
        });
      })
  }

  //filter completed task
  
  // active = () => {
  //   //let filterCompleted = [];
  //   this.state.todolists.filter(element =>element.isComplete ===false)
  //   this.setState = ({
  //     filterTasks: {id: this.state.todolists.id, task: this.state.todolists.task, isComplete: this.state.todolists.isComplete}
  //   })
  //   console.log(this.state.filterTasks)
  // }

  //filter active task
  active = () => {
    this.state.todolists.forEach(element => {
      if (element.isComplete === false) {
        this.state.filterTasks.push(element);
      }
    });
    console.log( this.state.filterTasks)
  }

  //filterAlltask

  // allTasks = () => {
  //   let filterAlltask = [];
  //   this.state.todolists.forEach(element => {
  //     filterAlltask.push(element);
  //   });
  //   this.setState = ({
  //     filterTasks: filterAlltask
  //   });
  // }


  addTask = async (newTask) => {
    this.setState({
      todolists: this.state.todolists.concat(
        {
          id: this.state.todolists.length + 1,
          task: newTask, isComplete: false
        }
      )
    })
    let task = this.state.todolists
    await fetch(`http://5d19c5cab3b6a100148d22e2.mockapi.io/todolist`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(task)
    })
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }


  markTodoDone = async (id) => {
    console.log(this.state.todolists)
    let task = this.state.todolists.find(todolist => todolist.id === id);
    console.log(task)
    task.isComplete = !task.isComplete;
    this.setState({
      todolists: Object.assign(this.state.todolists, task)
    });
    await fetch(`http://5d19c5cab3b6a100148d22e2.mockapi.io/todolist/${id}`, {
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

  deleteTask = async (id) => {
    let task = this.state.todolists.find(todolist => todolist.id === id);
    await fetch(`http://5d19c5cab3b6a100148d22e2.mockapi.io/todolist/${id}`, {
        method: 'DELETE',
        mode: 'CORS',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
    }).then(res => {
        return res;
    }).catch(err => err);
}

  render() {
    const {todolists, filterTasks} = this.state;
    return (
      <>
        <FormAddTask 
          addTask={this.addTask}
          todolists={this.state.todolists}
          active={this.active}
        />
        <TodoListItem
          todolists={todolists.length === 0 ? filterTasks : todolists }
          markTodoDone={this.markTodoDone}
          completed={this.completed}
        />
      </>
    );
  }
}


export default App;
