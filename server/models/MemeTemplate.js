const { Schema, model } = require('mongoose');

const memeTemplateSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        imageUrl: {
            type: String,
            required: true,
        }
    }
);

const MemeTemplate = model('MemeTemplate', memeTemplateSchema);

module.exports = MemeTemplate;
