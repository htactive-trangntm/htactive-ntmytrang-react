import React, { Component } from "react";

class FormAddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      acticeInput: false
    };
  }

  onClickAddTask = event => {
    event.preventDefault();
    let newTask = this.state.value;
    this.props.addTask(newTask);
    event.target.value = "";
    this.setState({
      acticeInput: !this.state.acticeInput
    })
  };

  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  };


  changeFilter = filter => {
    this.props.changeFilter(filter);
  };

  render() {
    const { calPercent } = this.props;
    return (
      <div className="container">
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <span className="navbar-brand">ToDo List</span>
            </div>
          </div>
        </nav>

        <form ref="form" onSubmit={this.onClickAddTask}>
          <div className="form-group row">
            <div className="col-md-8 col-xs-8 col-lg-8 col-sm-8">
              <label htmlFor="">Task</label>
              <input
                type="text"
                ref="itemName"
                onChange={this.handleChange}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter task"
              />
            </div>
            <div className="col-md-4 col-xs-4 col-lg-4 col-sm-4 buttonAdd">
              <button type="submit" className="btn btn-primary">
                Add task
              </button>
            </div>
          </div>
        </form>
        <div>
          <button
            className="btn btn-info"
            onClick={() => this.changeFilter("all")}
          >
            All Tasks
          </button>
          &nbsp;
          <button
            className="btn btn-danger"
            onClick={() => this.changeFilter("completed")}
          >
            Completed Task
          </button>
          &nbsp;
          <button
            className="btn btn-success"
            onClick={() => this.changeFilter("active")}
          >
            Active Task
          </button>
          &nbsp;
          <div className="progress">
            <div
              className="progress-bar progress-bar-striped bg-success"
              id="myBar"
              role="progressbar"
              style={{ width: calPercent + "% " }}
              aria-valuenow={25}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              {this.props.calPercent}%
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FormAddTask;
