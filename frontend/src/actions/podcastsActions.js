import axios from 'axios';
import {
	PODCAST_LIST_REQUEST,
	PODCAST_LIST_SUCCESS,
	PODCAST_LIST_FAIL,
	PODCAST_DETAILS_REQUEST,
	PODCAST_DETAILS_SUCCESS,
	PODCAST_DETAILS_FAIL,
	PODCAST_DELETE_SUCCESS,
	PODCAST_DELETE_FAIL,
	PODCAST_DELETE_REQUEST
} from '../constants/podcastsConstants';

export const listPodcasts = () => async (dispatch) => {
	try {
		dispatch({ type: PODCAST_DELETE_REQUEST });

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

export const deletePodcast = (id) => async (dispatch, getState) => {
	try {
		dispatch({
			type: PODCAST_DELETE_REQUEST
		});

		const {
			userLogin: { userInfo }
		} = getState();

		const config = {
			headers: {
				Authorization: `Bearer ${userInfo.token}`
			}
		};

		await axios.delete(`/api/podcasts/${id}`, config);

		dispatch({
			type: PODCAST_DELETE_SUCCESS
		});
	} catch (error) {
		dispatch({
			type: PODCAST_DELETE_FAIL,
			payload: error.response && error.response.data.message ? error.response.data.message : error.message
		});
	}
};
