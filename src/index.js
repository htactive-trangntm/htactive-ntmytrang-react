import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import LifeCircle from './practice/LifeCircle';
import PropsDemo from './practice/PropsDemo';
import Forms from './practice/Forms';
import NameForm from './practice/NameForm';
import FormContainer from './practice/FormContainer';
import LiftStateUp from './practice/LiftStateUp';






ReactDOM.render(<LiftStateUp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
