import React, { Component } from 'react';

class FormAddTask extends Component {
    constructor(props) {
        super(props);
    }

    // onSubmit = event => {
    //     event.preventDefault();
    //     let newTask = this.refs.itemName.value;
    //     this.props.addTask(newTask);
    //     if (newTask) {
    //         this.props.addTask({ newTask });
    //         this.refs.form.reset();
    //     }
    //     console.log(newTask);
    // };

    onClickAddTask = event => {
        event.preventDefault();
        let newTask = this.state.value;
        this.props.addTask(newTask);
    };

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        })
    };

    onClickShowActive = () => {
        this.props.active();
    }

    render() {
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
                    <div className="form-group">
                        <label htmlFor="" >Task</label>
                        <input type="text" ref="itemName" onChange={this.handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter task" />
                    </div>
                    <button type="submit" className="btn btn-primary">Add task</button>
                </form>
                <div>
                    <button className="btn btn-default" onClick={this.handleChange} >All Tasks</button>&nbsp;
                    <button className="btn btn-danger" onChange={this.handleChange}>Completed Task</button>&nbsp;
                    <button className="btn btn-success" onClick={() => this.onClickShowActive()}>Active Task</button>&nbsp;
                    <button className="btn btn-info"  >Completed All Tasks</button>&nbsp;
                </div>

            </div>
        )
    }

}

export default FormAddTask