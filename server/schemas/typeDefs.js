
const typeDefs = `
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
  }

  type Meme { 
    _id: ID!
    url: String!
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    me: User
    users: [User]!
    user(id: ID!): User
    memes: [Meme]
    meme(id: ID!): Meme
  }

  type Mutation {
    createUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addMeme(url: String!): Meme
    login(email: String!, password: String!): User
  }
`;

module.exports = typeDefs;
