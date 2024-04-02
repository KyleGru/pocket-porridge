const { Schema, model } = require('mongoose');

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
            default: Date.now
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