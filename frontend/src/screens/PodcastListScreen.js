import React, { useEffect } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listPodcasts } from '../actions/podcastsActions';

const PodcastListScreen = ({ history, match }) => {
	const dispatch = useDispatch();

	const podcastList = useSelector((state) => state.podcastList);
	const { loading, error, podcasts } = podcastList;

	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	useEffect(() => {
		if (userInfo && userInfo.isAdmin) {
			dispatch(listPodcasts());
		} else {
			history.push('/login');
		}
	}, [dispatch, history, userInfo]);

	const deleteHandler = (id) => {
		if (window.confirm('Are you sure')) {
		}
	};

	const createPodcastHandler = () => {
		// dispatch(createProduct())
		//history.push(`/admin/product/create`)
	};

	return (
		<>
			<Row className="align-items-center">
				<Col>
					<h1>Podcasts</h1>
				</Col>
				<Col className="text-right">
					<Button className="my-3" onClick={createPodcastHandler}>
						Add a podcast
					</Button>
				</Col>
			</Row>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant="danger">{error}</Message>
			) : (
				<Table bordered hover responsive className="table-sm">
					<tbody>
						{podcasts.map((podcast) => (
							<tr key={podcast._id}>
								<td>
									<strong>{podcast.name}</strong>
								</td>

								<td>
									<LinkContainer to={`/admin/podcast/${podcast._id}/edit`}>
										<Button variant="light" className="btn-sm">
											<i className="fas fa-edit"></i>
										</Button>
									</LinkContainer>

									<Button variant="primary" className="btn-sm" onClick={() => deleteHandler(podcast._id)}>
										<i className="fas fa-trash"></i>
									</Button>
								</td>
							</tr>
						))}
					</tbody>
				</Table>
			)}
		</>
	);
};

export default PodcastListScreen;
