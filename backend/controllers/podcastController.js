import asyncHandler from 'express-async-handler';
import Podcast from '../models/podcastModel.js';

// Fetch all podcasts
// GET /api/podcasts
// Public

const getPodcasts = asyncHandler(async (req, res) => {
	const podcasts = await Podcast.find({});
	res.json(podcasts);
});

// Fetch a podcast by ID
// GET /api/podcast/:id
// Public

const getPodcastById = asyncHandler(async (req, res) => {
	const podcast = await Podcast.findById(req.params.id);

	if (podcast) {
		res.json(podcast);
	} else {
		res.status(404);
		throw new Error('Podcast not found');
	}
});

// Delete a podcast
// DELETE /api/podcast/:id
// Admin

const deletePodcast = asyncHandler(async (req, res) => {
	const podcast = await Podcast.findById(req.params.id);

	if (podcast) {
		await podcast.remove();
		res.json({ message: 'Podcast has been deleted' });
	} else {
		res.status(404);
		throw new Error('Podcast not found');
	}
});

// Create Podcast
// CREATE /api/podcasts
// Admin

const createPodcast = asyncHandler(async (req, res) => {
	const { name, image, description } = req.body;
	const podcast = new Podcast({
		name,
		image,
		description
	});

	const createdPodcast = await podcast.save();
	res.status(201).json(createdPodcast);
});

// Update Podcast
// PUT /api/podcasts/:id
// Admin

const updatePodcast = asyncHandler(async (req, res) => {
	const { name, image, description } = req.body;

	const podcast = await Podcast.findById(req.params.id);

	if (podcast) {
		podcast.name = name;
		podcast.escription = description;
		if (image) {
			podcast.image = image;
		}

		const updatedPodcast = await podcast.save();
		res.json(updatedPodcast);
	} else {
		res.status(404);
		throw new error('Podcast Not Found');
	}
});

export { getPodcasts, getPodcastById, deletePodcast, createPodcast, updatePodcast };
