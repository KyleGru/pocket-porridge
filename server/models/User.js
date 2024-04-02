const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: { 
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
        // @TODO: add validation to ensure bad email addressed don't end up in the database if your front-end validation fails https://gist.github.com/rupeshtiwari/acf770bfc85f3fe1f62a80b461abfc13
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    },
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ]
},
    {
        toJSON: {
            virtuals: true,
        }
    }
);


// Pre-save middleware to hash password
UserSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

// compare incoming password with hashed password
UserSchema.methods.isCorrectPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', UserSchema);
module.exports = User;