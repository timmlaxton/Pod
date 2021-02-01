import axios from 'axios';
import {
	PODCAST_LIST_REQUEST,
	PODCAST_LIST_SUCCESS,
	PODCAST_LIST_FAIL,
	PODCAST_DETAILS_REQUEST,
	PODCAST_DETAILS_SUCCESS,
	PODCAST_DETAILS_FAIL
} from '../constants/podcastsConstants';

export const listPodcasts = () => async (dispatch) => {
	try {
		dispatch({ type: PODCAST_LIST_REQUEST });

		const { data } = await axios.get('/api/podcasts');

		dispatch({
			type: PODCAST_LIST_SUCCESS,
			payload: data
		});
	} catch (error) {
		dispatch({
			type: PODCAST_LIST_FAIL,
			payload: error.response && error.repsonse.data.message ? error.response.data.message : error.message
		});
	}
};

export const listPodcastDetails = (id) => async (dispatch) => {
	try {
		dispatch({ type: PODCAST_DETAILS_REQUEST });

		const { data } = await axios.get(`/api/podcasts/${id}`);

		dispatch({
			type: PODCAST_DETAILS_SUCCESS,
			payload: data
		});
	} catch (error) {
		dispatch({
			type: PODCAST_DETAILS_FAIL,
			payload: error.response && error.repsonse.data.message ? error.response.data.message : error.message
		});
	}
};
