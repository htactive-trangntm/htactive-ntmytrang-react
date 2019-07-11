import React from 'react';
import {connect} from 'react-redux';

class UserList extends React.Component{
    listUser(){
        let userItem = this.props.users.map(item=>{
            return <li key={item.id}>{item.name}</li>
        });
        return userItem;

    }
    render(){
        return (
            <ul>{this.listUser()}</ul>
        )
    }

    
}
function mapStateToProps(state) {
    return {users: state.users}
}

let UserContainer = connect(mapStateToProps)(UserList);
export default UserContainer;