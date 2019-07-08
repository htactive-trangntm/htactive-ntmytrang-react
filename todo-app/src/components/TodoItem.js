import React, { Component } from "react";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      active: false
    };
  }

  onClickDone = () => {
    this.props.markTodoDone(this.props.id);
  };

  onClickDelete = () => {
    console.log(this.props.id);
    let result = window.confirm("Do you want to delete this task? Think carefully before do it.");
    if (result) {
      this.props.deleteTask(this.props.id);
    }
  };

  saveUpdateTask = () => {
    this.props.task.task = this.state.value;
    let taskUpdated = {
      id: this.props.task.id,
      task: this.state.value,
      isComplete: this.props.task.isComplete
    };
    this.props.updateTask(taskUpdated);
    this.onClickUpdate();
  };

  onClickUpdate = () => {
    this.setState({
      active: !this.state.active
    });
  };

  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  render() {
    const { id, task, isComplete } = this.props.task;
    return (
      <li className="list-group-item checkbox " key={id} >
        <div className="row">
          <div className="col-md-1 col-xs-1 col-lg-1 col-sm-1 checkbox">
            <label>
              <input
                id="toggleTaskStatus"
                type="checkbox"
                defaultChecked={isComplete}
                onClick={() => this.onClickDone()}
              />
            </label>
          </div>
          <div className="col-md-10 col-xs-10 col-lg-10 col-sm-10">
            <input
              type="text"
              defaultValue={task}
              size="35"
              onChange={this.handleChange}
              id={id}
              className={`${isComplete ? "completed" : ""} 
                            ${
                this.state.active ? "enableInput" : "disableInput"
                }`}
            />
          </div>
          <div className="button-group col-md-10 col-xs-10 col-lg-10 col-sm-10">
            {this.state.active ? (
              <button
                type="button"
                className="btn btn-success"
                onClick={this.saveUpdateTask}
              >
                <i className="fa fa-floppy-o" />
              </button>
            ) : (
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={this.onClickUpdate}
                >
                  <i className="fa fa-pencil" />
                </button>
              )}
            &nbsp;
            <button
              type="button"
              onClick={() => this.onClickDelete()}
              className="btn btn-danger"
            >
              <i className="fa fa-trash-o" />
            </button>
          </div>
        </div>
      </li>
    );
  }
}

export default TodoItem;
