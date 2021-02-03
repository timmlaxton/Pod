import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Message from '../components/Message';
import Loader from '../components/Loader';
import Podcast from '../components/Podcast';
import { listPodcasts } from '../actions/podcastsActions';

const HomeScreen = () => {
	const dispatch = useDispatch();

	const podcastList = useSelector((state) => state.podcastList);
	const { loading, error, podcasts } = podcastList;

	useEffect(() => {
		dispatch(listPodcasts());
	}, [dispatch]);

	return (
		<>
			<Jumbotron className="jumbotron">
				<img className="image" alt="" src="images/homepage.jpg" />
			</Jumbotron>

			<div className="title">
				<h3>Working Comics</h3>
				<p className="paragraph">A series of podcasts aiming to provide insight into the world of making comics </p>
				<p>and how it all happens behind the scenes. </p>

				<h4 className="episode-title">Recent Episodes</h4>
				{loading ? (
					<Loader />
				) : error ? (
					<Message variant="danger">{error}</Message>
				) : (
					<Row className="podcasts">
						{podcasts.map((podcast) => (
							<Col key={podcast.id} sm={2} md={2} lg={2} xl={2}>
								<Podcast podcast={podcast} />
							</Col>
						))}
					</Row>
				)}
			</div>
		</>
	);
};

export default HomeScreen;
