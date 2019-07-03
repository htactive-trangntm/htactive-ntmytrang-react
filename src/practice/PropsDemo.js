import React, { Component } from 'react';


class PropsDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: []
    };
  }

  

  componentDidMount() {
    fetch('http://5d19c5cab3b6a100148d22e2.mockapi.io/student').then(response => {
      this.setState({
        students: response.students
      });
    });
    console.log(this.state.students)
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.students.map( item => {
            return (
              <li>
                {item.name}
              </li>
            
            );
              
          })}
      </ul>
      </div>
      
    )
  }
}


export default PropsDemo