const { Schema, model } = require('mongoose');

// @TODO: Change this to just 'Meme'. A data model/schema is inherently a 'template' for an object
// @TODO: If you were truly making 'templates' e.g. a user could make a pre-made meme format, then 'MemeTemplate' would be more appropriate
// @TODO: but it seems here we are just modeling the fields in a 'Meme'
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
