import mongoose from 'mongoose';

const podcastSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true
		},
		image: {
			type: String,
			required: true
		},
		description: {
			type: String,
			required: true
		}
	},
	{
		timestamps: true
	}
);

const Podcast = mongoose.model('Podcast', podcastSchema);

export default Podcast;
