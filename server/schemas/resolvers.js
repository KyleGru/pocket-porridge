
const { User, Meme, Comment, Likes } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate('comments'); 
        },
        user: async (parent, { username }) => {
            return User.findOne({ username }).populate('comments'); 
        },
        memes: async () => {
            return Meme.find()
        },
        meme: async (parent, { id }) => {
            return Meme.findById(id).populate('comments').populate('likes'); 
        },
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id }).populate('comments'); 
            }
            throw new AuthenticationError('You need to be logged in!');
        },
    },

    Mutation: {
        createUser: async (parent, args) => { 
            console.log(args)
            const{ firstName, lastName, email, password } = args
            const user = await User.create(args);
            const token = signToken(user);
            
            const data = {token, user}
            console.log(data)
            return data
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                // throw AuthenticationError('No user found with this email address');
                console.log('No user found with this email address')
            }

            const correctPassword = await user.isCorrectPassword(password);

            if (!correctPassword) {
                // throw AuthenticationError('Incorrect credentials');
                console.log('Incorrect credentials')
            }

            const token = signToken(user);
            const data = {token, user}
            console.log(data)
            return data;
        },
        addMeme: async (parent, { url }, context) => {
            const newMeme = await Meme.create({ url });
            return newMeme;
        },
    }
}
module.exports = resolvers;
