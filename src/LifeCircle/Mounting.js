import React, { Component } from 'react';

//constructor
class Mounting extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "Trang"
        }
        //this.handlePoints = this.handlePoints.bind(this);
    }

    //static getDerivedStateFromProps(): Nó nhận 2 tham số truyền vào là props và state
    //Và trả về 1 object chính là state mới của component muốn update
    static getDerivedStateFromProps(props, state) {
		return {
			name: "Nguyễn Thị Mỹ Trang"
		}
	}

    render = () => {
        return <p>My name is {this.state.name}</p>
    }
    //sau khi hàm static getDerivedStateFromProps() thì hàm render sẽ được gọi
}

export default Mounting

