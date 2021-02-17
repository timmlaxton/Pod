import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Form, Button, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import { listPodcastDetails, updatePodcast, createPodcast } from '../actions/podcastsActions';
import { PODCAST_UPDATE_RESET, PODCAST_CREATE_RESET } from '../constants/podcastsConstants';

const PodcastEditScreen = ({ match, history }) => {
	const podcastId = match.params.id;

	const [name, setName] = useState('name');
	const [description, setDescription] = useState('description');
	const [image, setImage] = useState('');
	const [imageUrl, setImageUrl] = useState('');
	const [imagePreview, setImagePreview] = useState(null);
	const [uploading, setUploading] = useState(false);

	const dispatch = useDispatch();

	const podcastDetails = useSelector((state) => state.podcastDetails);
	const { loading, error, podcast } = podcastDetails;

	const isCreatePodcastMode = match.path.includes('/admin/podcast/create');

	const podcastUpdate = useSelector((state) => (isCreatePodcastMode ? state.podcastCreate : state.podcastUpdate));
	const { loading: loadingUpdate, error: errorUpdate, success: successUpdate } = podcastUpdate;

	useEffect(() => {
		if (successUpdate) {
			dispatch({ type: isCreatePodcastMode ? PODCAST_CREATE_RESET : PODCAST_UPDATE_RESET });
			history.push('/admin/podcastlist');
			return;
		}
		if (isCreatePodcastMode) return;
		if (!podcast.name || podcast._id !== podcastId) {
			dispatch(listPodcastDetails(podcastId));
		} else {
			setName(podcast.name);
			setDescription(podcast.description);
			setImagePreview(podcast.image);
		}
	}, [dispatch, podcastId, podcast, history, successUpdate, isCreatePodcastMode]);

	const onUploadImage = (e) => {
		const file = e.target.files[0];
		setImage(file);
		if (file) {
			const reader = new FileReader();

			reader.onload = (e) => {
				setImagePreview(e.target.result);
			};

			reader.readAsDataURL(file);
		} else {
			setImagePreview(null);
		}
	};

	const uploadFileHandler = async () => {
		if (!image) return '';
		const file = image;
		const formData = new FormData();
		formData.append('image', file);
		setUploading(true);

		try {
			const config = {
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			};

			const { data } = await axios.post('/api/upload', formData, config);
			return data;
		} catch (error) {
			console.error(error);
			setUploading(false);
			throw new Error('There was a problem');
		}
	};

	const submitHandler = async (e) => {
		e.preventDefault();
		let finalImage = imageUrl;
		if (!finalImage && image) {
			finalImage = await uploadFileHandler();
		}

		const payload = {
			_id: podcastId,
			name,
			description,
			...(finalImage && { image: finalImage })
		};

		dispatch(isCreatePodcastMode ? createPodcast(payload) : updatePodcast(payload));
	};

	return (
		<>
			<Link to="/admin/podcastlist" className="btn btn-light my-3">
				Go Back
			</Link>

			<FormContainer>
				<h1>{isCreatePodcastMode ? 'Create Podcast' : 'Edit Podcast'}</h1>
				{loadingUpdate && <Loader />}
				{errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
				{loading ? (
					<Loader />
				) : error ? (
					<Message variant="danger">{error}</Message>
				) : (
					<Form onSubmit={submitHandler}>
						<Form.Group controlId="name">
							<Form.Label>Name</Form.Label>
							<Form.Control
								type="name"
								placeholder="Enter name"
								value={name}
								onChange={(e) => setName(e.target.value)}
							></Form.Control>
						</Form.Group>

						<Form.Group controlId="image">
							<Form.Label>Image</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter image url"
								value={imageUrl}
								onChange={(e) => setImageUrl(e.target.value)}
							></Form.Control>

							<Form.File id="image-file" label="Choose File" custom onChange={onUploadImage}></Form.File>
							{uploading && <Loader />}
						</Form.Group>

						{imagePreview ? <Image src={imagePreview} fluid /> : null}

						<Form.Group controlId="description">
							<Form.Label>Description</Form.Label>
							<Form.Control
								as="textarea"
								placeholder="Enter description"
								value={description}
								onChange={(e) => setDescription(e.target.value)}
								rows={3}
							></Form.Control>
						</Form.Group>

						<Button type="submit" variant="primary">
							{isCreatePodcastMode ? 'Create' : 'Update'}
						</Button>
					</Form>
				)}
			</FormContainer>
		</>
	);
};

export default PodcastEditScreen;
