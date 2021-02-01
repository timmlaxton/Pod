import {
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
