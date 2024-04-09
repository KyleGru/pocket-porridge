const { Schema, model } = require('mongoose');

const memeSchema = new Schema(
    {
        url: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    }
);

const Meme = model('Meme', memeSchema);

module.exports = Meme;
