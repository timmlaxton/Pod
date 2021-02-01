import express from 'express';
const router = express.Router();
import { getPodcasts, getPodcastById } from '../controllers/podcastController.js';

router.route('/').get(getPodcasts);
router.route('/:id').get(getPodcastById);

export default router;
