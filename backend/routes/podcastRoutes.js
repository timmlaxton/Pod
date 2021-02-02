import express from 'express';
const router = express.Router();
import {
	getPodcasts,
	getPodcastById,
	deletePodcast,
	createPodcast,
	updatePodcast
} from '../controllers/podcastController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

router.route('/').get(getPodcasts).post(protect, admin, createPodcast);
router.route('/:id').get(getPodcastById).delete(protect, admin, deletePodcast).put(protect, admin, updatePodcast);

export default router;
