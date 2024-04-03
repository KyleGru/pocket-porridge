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
            // @TODO: Required in your graphQL schema/typedefs, so should be required here/ Try and ensure those match
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
            ref: 'Like'
            // @TODO: Might need to make this an array of likes and I changed ref from Likes to Like in support of the singluar model name
        },
        comments: {
            type: Schema.Types.ObjectId,
            ref: 'Comments'
        }
    }
);

const memeCreation = model('MemeCreation', memeCreationSchema);

module.exports = memeCreation;