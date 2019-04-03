import reducer from './reducer';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';

const rootReducer = combineReducers({
    main: reducer,
})

const store = createStore(rootReducer, {}, applyMiddleware(thunk));

export default store;
