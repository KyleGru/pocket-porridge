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
            type: String
            // @TODO: this is required in your GraphQL schema, so it should be required here. Try and ensure those match
        }
    }
);

const MemeTemplate = model('MemeTemplate', memeTemplateSchema);

module.exports = MemeTemplate;