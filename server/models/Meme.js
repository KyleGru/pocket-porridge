const { Schema, model } = require('mongoose');

const memeSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId, 
            ref: 'User',
            required: true,
        },
        template: {
            type: Schema.Types.ObjectId,
            ref: 'MemeTemplate',
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        description: String,
        createdAt: {
            type: Date,
            default: Date.now,
        },
        likes: {
            type: Schema.Types.ObjectId,
            ref: 'Like',
            required: true,
        },
        comments: {
            type: Schema.Types.ObjectId,
            ref: 'Comments'
        }
    }
);

const Meme = model('Meme', memeSchema);

module.exports = Meme;
