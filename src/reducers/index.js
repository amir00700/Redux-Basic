import counterReducer from './counter';
import loggedreducer from './islogged';
import {combineReducers} from 'redux';

const allReducers =combineReducers({
    counter: counterReducer,
    isLogged: loggedreducer
})

export default allReducers;
