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
            ref: 'MemeCreation',
            // @TODO: Required in your graphQL schema/typedefs, so should be required here/ Try and ensure those match
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