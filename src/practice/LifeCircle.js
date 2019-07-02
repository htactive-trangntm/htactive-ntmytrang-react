import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class LifeCircle extends Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {  //chạy sau render
      console.log('componentDidMount');
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      console.log('componentWillUnmount')
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
    }
  
    render() { //
      console.log('render')
      return (
        
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <LifeCircle />,
    document.getElementById('root')
  );

  export default LifeCircle



