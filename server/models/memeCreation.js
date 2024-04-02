const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const memeCreationSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId, 
            ref: 'User',
            required: true,
        },
        template: {
            type: Schema.Types.ObjectId,
            ref: 'MemeTemplate'
        },
        title: {
            type: String,
            required: true,
        },
        description: String,
        createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => dateFormat(timestamp),
        },
        likes: {
            type: Schema.Types.ObjectId,
            ref: 'Likes'
        },
        comments: {
            type: Schema.Types.ObjectId,
            ref: 'Comments'
        }
    }
);

const MemeCreation = model('MemeCreation', memeCreationSchema);

module.exports = MemeCreation;