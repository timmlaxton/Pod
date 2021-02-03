import React, { useEffect } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listPodcasts, deletePodcast, podcastCreate } from '../actions/podcastsActions';
import { PODCAST_CREATE_RESET } from '../constants/podcastsConstants';

const PodcastListScreen = ({ history }) => {
	const dispatch = useDispatch();

	const podcastList = useSelector((state) => state.podcastList);
	const { loading, error, podcasts } = podcastList;

	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	const podcastDelete = useSelector((state) => state.podcastDelete);
	const { loading: loadingDelete, error: errorDelete, success: successDelete } = podcastDelete;

	const podcastCreate = useSelector((state) => state.podcastCreate);
	const { loading: loadingCreate, error: errorCreate, success: successCreate, podcast: createdPodcast } = podcastCreate;

	useEffect(() => {
		dispatch({ type: PODCAST_CREATE_RESET });

		if (!userInfo && userInfo.isAdmin) {
			history.push('/login');
		}
		if (successCreate) {
			history.push(`/admin/podcast/${createdPodcast._id}/edit`);
		} else {
			dispatch(listPodcasts());
		}
	}, [dispatch, history, userInfo, successDelete, successCreate, createdPodcast]);

	const deleteHandler = (id) => {
		if (window.confirm('Are you sure')) {
			dispatch(deletePodcast(id));
		}
	};

	const createPodcastHandler = () => {
		history.push(`/admin/podcast/create`);
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
			{/* {loadingDelete && <Loader />} */}
			{errorDelete && <Message variant="danger">{errorDelete}</Message>}
			{loadingCreate && <Loader />}
			{errorCreate && <Message variant="danger">{errorCreate}</Message>}
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
