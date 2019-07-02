import React, { Component } from 'react';

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '' };
    }

    handleChange = (event) => {
        this.setState({ name: event.target.name });
    }

    handleSubmit = (event) => {
        alert('Your name is ' + this.state.name);
        event.preventDefault();
    }

    render = () => {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" name={this.state.name} onChange={this.handleChange} />
                </label>
                <input type="submit" name="Submit" />
            </form>
        );
    }
}
export default NameForm