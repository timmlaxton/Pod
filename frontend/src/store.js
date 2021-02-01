import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { podcastListReducer, podcastDetailsReducer } from './reducers/podcastReducers';

const reducer = combineReducers({
	podcastList: podcastListReducer,
	podcastDetails: podcastDetailsReducer
});

const initialState = {};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
