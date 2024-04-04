const { Schema, model } = require('mongoose');

const Like = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        meme: {
            type: Schema.Types.ObjectId,
            ref: 'MemeCreation',
            required: true,
        }
    }
);

const LikeModel = model('Like', Like);

module.exports = LikeModel;
