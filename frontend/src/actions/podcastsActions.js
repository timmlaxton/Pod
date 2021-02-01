import { PODCAST_LIST_REQUEST, PODCAST_LIST_SUCCESS, PRODUCT_LIST_FAIL } from '../constants/podcastsConstants';

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
