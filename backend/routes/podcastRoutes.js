import express from 'express';
const router = express.Router();
import { getPodcasts, getPodcastById, deletePodcast } from '../controllers/podcastController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

router.route('/').get(getPodcasts);
router.route('/:id').get(getPodcastById).delete(protect, admin, deletePodcast);

export default router;
