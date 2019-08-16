import { createStore, combineReducers, applyMiddleware } from 'redux';
import { todo_reducer } from './todo-reducer';
import thunk from 'redux-thunk';

const reducers = combineReducers({
    todo: todo_reducer
});

const store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;