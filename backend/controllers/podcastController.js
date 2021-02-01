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
		throw new Error('Product not found');
	}
});

export { getPodcasts, getPodcastById };
