import {
	PODCAST_CREATE_FAIL,
	PODCAST_CREATE_REQUEST,
	PODCAST_CREATE_SUCCESS,
	PODCAST_DELETE_FAIL,
	PODCAST_DELETE_REQUEST,
	PODCAST_DELETE_SUCCESS,
	PODCAST_DETAILS_FAIL,
	PODCAST_DETAILS_REQUEST,
	PODCAST_DETAILS_SUCCESS,
	PODCAST_LIST_FAIL,
	PODCAST_LIST_REQUEST,
	PODCAST_LIST_SUCCESS
} from '../constants/podcastsConstants';

export const podcastListReducer = (state = { podcasts: [] }, action) => {
	switch (action.type) {
		case PODCAST_LIST_REQUEST:
			return { loading: true, podcasts: [] };
		case PODCAST_LIST_SUCCESS:
			return { loading: false, podcasts: action.payload };
		case PODCAST_LIST_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const podcastDetailsReducer = (state = { podcast: {} }, action) => {
	switch (action.type) {
		case PODCAST_DETAILS_REQUEST:
			return { loading: true, ...state };
		case PODCAST_DETAILS_SUCCESS:
			return { loading: false, podcast: action.payload };
		case PODCAST_DETAILS_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const podcastDeleteReducer = (state = {}, action) => {
	switch (action.type) {
		case PODCAST_DELETE_REQUEST:
			return { loading: true };
		case PODCAST_DELETE_SUCCESS:
			return { loading: false, success: true };
		case PODCAST_DELETE_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const podcastCreateReducer = (state = {}, action) => {
	switch (action.type) {
		case PODCAST_CREATE_REQUEST:
			return { loading: true };
		case PODCAST_CREATE_SUCCESS:
			return { loading: false, success: true, podcast: action.payload };
		case PODCAST_CREATE_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};
