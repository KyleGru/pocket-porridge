
const { User, memeTemplate, Comment, memeCreation, Likes } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        user: async () => {

            return User.find().populate('comments'); 
        },
        // userInfo: async (parent, { username }) => {
        //     return User.findOne({ username }).populate('comments'); 
        // },
        memes: async () => {
            return memeTemplate.find().populate('comments').populate('likes'); 
        },
        meme: async (parent, { id }) => {
            return memeCreation.findById(id).populate('comments').populate('likes'); 
        },
        comments: async () => {
            return Comment.find().populate('user').populate('meme'); 
        },
        likes: async () => {
            return Likes.find().populate('user').populate('meme'); 
        },
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id }).populate('comments'); 
            }
            throw new AuthenticationError('You need to be logged in!');
        },
    },

    Mutation: {
        createUser: async (parent, { firstName, lastName, email, password }) => { 
            const user = await User.create({ firstName, lastName, email, password });
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('No user found with this email address');
            }

            const correctPassword = await user.isCorrectPassword(password);

            if (!correctPassword) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);

            return { token, user };
        },

        createComment: async (parent, { memeId, text }, context) => { 
            if (context.user) {
                const comment = await Comment.create({
                    text,
                    user: context.user._id, // Check if ID is stored in context.user._id
                    meme: memeId, // Check if meme ID is passed as an argument
                });

                return comment;
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        createLike: async (parent, { memeId }, context) => { 
            if (context.user) {
                const like = await Likes.create({
                    user: context.user._id, 
                    meme: memeId, 
                });

                return like;
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        deleteComment: async (parent, { commentId }, context) => {
            if (context.user) {
                const comment = await Comment.findOneAndDelete({
                    _id: commentId,
                    user: context.user._id, 
                });

                return comment;
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        deleteLike: async (parent, { likeId }, context) => {
            if (context.user) {
                const like = await Likes.findOneAndDelete({
                    _id: likeId,
                    user: context.user._id, 
                });

                return like;
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        deleteMeme: async (parent, { memeId }, context) => {
            if (context.user) {
                const meme = await memeCreation.findOneAndDelete({
                    _id: memeId,
                    user: context.user._id, 
                });

                return meme;
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        updateMeme: async (parent, { memeId, title, description, imageUrl }, context) => {
            if (context.user) {
                const updatedMeme = await memeCreation.findOneAndUpdate(
                    { _id: memeId, user: context.user._id }, 
                    { title, description, imageUrl },
                    { new: true }
                );

                return updatedMeme;
            }
            throw new AuthenticationError('You need to be logged in!');
        },
    }
}
module.exports = resolvers;
