import React, { Component } from 'react';

class Forms extends Component {
  constructor() {
    super();
    this.state = {
      name: ''
    }
  }
  changeHandler = event => {
    this.setState({
      name: event.target.value
    });
  }

  render = () => {
    return (
      <form>
        <input type="text"
          name="name"
          value={this.state.name}
          onChange={this.changeHandler}
        />
      </form>
    );
  }
}

export default Forms;


