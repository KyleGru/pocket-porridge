const { Schema, model } = require('mongoose');

const Likes = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        meme: {
            type: Schema.Types.ObjectId,
            ref: 'MemeCreation'
        }
    }
);

const LikesModel = model('Likes', Likes);

module.exports = LikesModel;