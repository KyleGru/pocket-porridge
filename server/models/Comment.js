const { Schema, model } = require('mongoose');

const commentSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        meme: {
            type: Schema.Types.ObjectId,
            ref: 'Meme',
            required: true
        },
        text: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        }
    }
);

const Comment = model('Comment', commentSchema);

module.exports = Comment;
