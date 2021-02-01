import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup } from 'react-bootstrap';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listPodcastDetails } from '../actions/podcastsActions';

const EpisodeScreen = ({ match }) => {
	const dispatch = useDispatch();

	const podcastDetails = useSelector((state) => state.podcastDetails);
	const { loading, error, podcast } = podcastDetails;

	useEffect(() => {
		dispatch(listPodcastDetails(match.params.id));
	}, [dispatch, match]);

	return (
		<>
			<Link className="btn btn-light my-3" to="/podcasts">
				Go Back
			</Link>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant="danger">{error}</Message>
			) : (
				<Row>
					<Col md={3}>
						<br />
						<Image src={podcast.image} alt={podcast.name} fluid />
					</Col>
					<Col md={5}>
						<ListGroup variant="flush">
							<ListGroup.Item>
								<h3>{podcast.name}</h3>
							</ListGroup.Item>
							<ListGroup.Item>{podcast.description}</ListGroup.Item>
						</ListGroup>
					</Col>
				</Row>
			)}
		</>
	);
};

export default EpisodeScreen;
