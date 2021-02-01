import { PODCAST_LIST_FAIL, PODCAST_LIST_REQUEST, PODCAST_LIST_SUCCESS } from '../constants/podcastsConstants';

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
