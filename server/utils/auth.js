require ('dotenv').config()
const { GraphQLError } = require('graphql');
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;
const expiration = process.env.JWT_EXPIRATION;


module.exports = {
    AuthenticationError: new GraphQLError('You must be logged in to do that.', {
        extensions: {
            code: 'UNAUTHENTICATED',
        },
    }),
    authMiddleware: function ({ req }) {
        let token = req.body.token || req.query.token || req.headers.authorization;

        if (req.headers.authorization) {
            token = token.split(' ').pop().trim();
        }

        if (!token) {
            return req;
        }

        try {
            const { data } = jwt.verify(token, secret, { maxAge: expiration });
            req.user = data;
        } catch {
            console.log('Invalid token');
        }

        return req;
    },
    signToken: function ({ email, _id }) {
        const payload = { email, _id };

        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    },
};