import React, { Component } from 'react';


class TodoItem extends Component {

    constructor(props) {
        super(props);
    }

    onClickDone = () => {
        this.props.markTodoDone(this.props.id);
    }

    render() {
        return (
            <li className="list-group-item checkbox " >
                <div className="row" >
                    <div className="col-md-1 col-xs-1 col-lg-1 col-sm-1 checkbox">
                        <label><input id="toggleTaskStatus" type="checkbox" defaultChecked={this.props.task.isComplete} onClick={() => this.onClickDone()} /></label>
                    </div>
                    <div className="col-md-10 col-xs-10 col-lg-10 col-sm-10">
                        <input type="text" defaultValue={this.props.task.task} disabled style={{ border: "none", background: "transparent" }} id={this.props.task.id} className={this.props.task.isComplete ? "completed" : ""} />
                    </div>
                    <div>
                        <span hidden id="group-edit">
                            <button type="button" className="btn btn-infor">
                                <i className="fa fa-floppy-o" />
                            </button>
                            <button type="button" className="btn btn-default">
                                <i className="fa fa-ban" />
                            </button>
                        </span>
                        <button type="button" className="btn btn-success">
                            <i className="fa fa-pencil" />
                        </button>&nbsp;
                            <button type="button" className="btn btn-danger">
                            <i className="fa fa-trash-o" />
                        </button>{" "}

                    </div>
                </div>
            </li>
        )
    }







}


export default TodoItem