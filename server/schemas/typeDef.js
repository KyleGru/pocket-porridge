//NOTE: server will throw graphql error while the TODOs are listed in the below code.

const typeDefs = `
  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    comments: [Comment]
  }

  type MemeTemplate {
    title: String!
    description: String!
    imageUrl: String!
  }

  // @TODO: I think you should probably consider changing this just 'Meme'
  type MemeCreation { 
    _id: ID!
    user: User!
    template: MemeTemplate!
    title: String!
    description: String!
    createdAt: String!
    likes: [Likes]
    comments: [Comment]
  }

  type Comment {
    user: User!
    meme: MemeCreation!
    text: String!
    createdAt: String!
  }

  // @TODO: Make this 'Like'. And then multiple 'Like' gets you 'Likes'
  // @TODO: but it is clear here this is mean to model a single like connection between a user and a Meme
  type Likes {
    user: User!
    meme: MemeCreation!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]!
    user(id: ID!): User
    memes: [MemeCreation]
    meme(id: ID!): MemeCreation
    comments: [Comment]
    likes: [Likes] // @TODO: Then this changes to likes: [Like]
  }

  type Mutation {
    createUser(firstName: String!, lastName: String!, email: String!, password: String!): User
    login(email: String!, password: String!): User
    createMeme(title: String!, description: String!, imageUrl: String!): MemeCreation // @TODO: Change to 'Meme'
    createComment(memeId: ID!, text: String!): Comment
    createLike(memeId: ID!): Likes // @TODO: 'Like'
    deleteComment(commentId: ID!): Comment
    deleteLike(likeId: ID!): Likes // @TODO: 'Like'
    deleteMeme(memeId: ID!): MemeCreation // @TODO: Change to 'Meme'
    updateMeme(memeId: ID!, title: String, description: String, imageUrl: String): MemeCreation // @TODO: Then you could just say 'Meme' here, even though it's not technically for 'Creation' (it's for updating)
  }
`;

module.exports = typeDefs;