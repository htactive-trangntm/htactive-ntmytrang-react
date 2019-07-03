import React, { Component } from 'react';

class FormContainer extends Component {

    constructor() {
        super();
        this.state = {
            formControls: {
                email: {
                    value: ''
                },
                name: {
                    value: ''
                },
                password: {
                    value: ''
                }
            }
        }
    }

    changeHandler = event => {

        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            formControls: {
                ...this.state.formControls,
                [name]: {
                    ...this.state.formControls[name],
                    value
                }
            }
        });
    }


    render() {
        const {email, name, password} = this.state.formControls;
        return (
            <form>

                <label>Email</label>
                <input type="email"
                    name="email"
                    value={email.value}
                    onChange={this.changeHandler}
                />

                <label>Name</label>
                <input type="text"
                    name="name"
                    value={name.value}
                    onChange={this.changeHandler}
                />

                <label>Password</label>
                <input type="password"
                    name="password"
                    value={password.value}
                    onChange={this.changeHandler}
                />

            </form>
        );
    }

}


export default FormContainer;