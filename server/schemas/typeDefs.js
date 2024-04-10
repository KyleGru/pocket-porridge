// Deleted password in user typeDef - front end should not have access
const typeDefs = `
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    comments: [Comment]
  }

  type MemeTemplate {
    title: String!
    description: String!
    imageUrl: String!
  }

  type Meme { 
    _id: ID!
    url: String!
  }

  type Comment {
    user: User!
    meme: Meme!
    text: String!
    createdAt: String!
  }

  type Like {
    user: User!
    meme: Meme!
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
    comments: [Comment]
    likes: [Like] 
  }

  type Mutation {
    createUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addMeme(url: String!): Meme
    login(email: String!, password: String!): User
    createMeme(title: String!, description: String!, imageUrl: String!): Meme
    createComment(memeId: ID!, text: String!): Comment
    createLike(memeId: ID!): Like
    deleteComment(commentId: ID!): Comment
    deleteLike(likeId: ID!): Like
    deleteMeme(memeId: ID!): Meme
    updateMeme(memeId: ID!, title: String, description: String, imageUrl: String): Meme
  }
`;

module.exports = typeDefs;
