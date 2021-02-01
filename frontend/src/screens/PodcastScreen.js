import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Podcast from '../components/Podcast';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listPodcasts } from '../actions/podcastsActions';

const PodcastScreen = () => {
	const dispatch = useDispatch();

	const podcastList = useSelector((state) => state.podcastList);
	const { loading, error, podcasts } = podcastList;

	useEffect(() => {
		dispatch(listPodcasts());
	}, [dispatch]);

	return (
		<>
			<h1 className="title">Episodes</h1>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant="danger">{error}</Message>
			) : (
				<Row>
					{podcasts.map((podcast) => (
						<Col sm={12} md={6} lg={4} xl={3}>
							<Podcast podcast={podcast} />
						</Col>
					))}
				</Row>
			)}
		</>
	);
};

export default PodcastScreen;
