import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { notificationReducer } from './notificationReducer';
import { noteReducer } from './noteReducer';

const rootReducer = combineReducers({
    routing: routerReducer,
    notificationSystem: notificationReducer,
    notes: noteReducer
});

export default rootReducer;