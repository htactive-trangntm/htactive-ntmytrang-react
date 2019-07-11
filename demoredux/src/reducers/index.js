import foodReducer from '../reducers/food';
import UserReducer from '../reducers/user';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    foods: foodReducer,
    users: UserReducer
});

export default allReducers;

