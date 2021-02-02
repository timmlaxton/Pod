import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
	podcastListReducer,
	podcastDetailsReducer,
	podcastDeleteReducer,
	podcastCreateReducer
} from './reducers/podcastReducers';
import { userLoginReducer } from './reducers/userReducers';

const reducer = combineReducers({
	podcastList: podcastListReducer,
	podcastDetails: podcastDetailsReducer,
	podcastDelete: podcastDeleteReducer,
	podcastCreate: podcastCreateReducer,
	userLogin: userLoginReducer
});

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;

const initialState = {
	userLogin: { userInfo: userInfoFromStorage }
};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
