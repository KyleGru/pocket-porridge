const { Schema, model } = require('mongoose');

const Like = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
            // @TODO: Required in your graphQL schema/typedefs, so should be required here/ Try and ensure those match
        },
        meme: {
            type: Schema.Types.ObjectId,
            ref: 'MemeCreation'
            // @TODO: Required in your graphQL schema/typedefs, so should be required here/ Try and ensure those match
        }
    }
);

const LikeModel = model('Like', Like);

module.exports = LikeModel;