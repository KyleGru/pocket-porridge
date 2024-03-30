const typeDefs = `
  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }

  type MemeTemplate {
    title: String!
    description: String!
    imageUrl: String!
  }

  type MemeCreation {
    _id: ID!
    user: User!
    template: MemeTemplate!
    title: String!
    description: String!
    createdAt: Date!
  }

  type Comment {
    user: User!
    meme: MemeCreation!
    text: String!
    createdAt: Date!
  }

  type Likes {
    user: User!
    meme: MemeCreation!
  }

  type Query {
    me: User
    user(id: ID!): User
    memes: [MemeCreation]
    meme(id: ID!): MemeCreation
    comments: [Comment]
    likes: [Likes]
  }

  type Mutation {
    createUser(firstName: String!, lastName: String!, email: String!, password: String!): User
    login(email: String!, password: String!): User
    createMeme(title: String!, description: String!, imageUrl: String!): MemeCreation
    createComment(memeId: ID!, text: String!): Comment
    createLike(memeId: ID!): Likes
    deleteComment(commentId: ID!): Comment
    deleteLike(likeId: ID!): Likes
    deleteMeme(memeId: ID!): MemeCreation
    updateMeme(memeId: ID!, title: String, description: String, imageUrl: String): MemeCreation
  }
`;

module.exports = typeDefs;