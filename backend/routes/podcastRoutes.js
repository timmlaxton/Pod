import express from 'express';
import asyncHandler from 'express-async-handler';
const router = express.Router();
import Podcast from '../models/podcastModel.js';

// Fetch all podcasts
// GET /api/podcasts
// Publi

router.get(
	'/',
	asyncHandler(async (req, res) => {
		const podcasts = await Podcast.find({});
		res.json(podcasts);
	})
);

// Fetch a podcast by ID
// GET /api/podcast/:id
// Public

router.get(
	'/:id',
	asyncHandler(async (req, res) => {
		const podcast = await Podcast.findById(req.params.id);

		if (podcast) {
			res.json(podcast);
		} else {
			res.status(404);
			throw new Error('Product not found');
		}
	})
);

export default router;
