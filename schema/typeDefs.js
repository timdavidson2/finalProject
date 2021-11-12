const { gql } = require("apollo-server");

module.exports = gql`
  type Post {
    _id: ID!
    body: String!
    createdAt: String!
    username: String!
    comments: [Comment]!
    likes: [Like]!
    likeCount: Int!
    commentCount: Int!
  }

  type Comment {
    _id: ID!
    createdAt: String!
    username: String!
    body: String!
  }

  type Like {
    _id: ID!
    createdAt: String!
    username: String!
  }

  type User {
    _id: ID!
    email: String!
    token: String!
    username: String!
    createdAt: String!
  }

  input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
  }

  type Query {
    getPosts: [Post]
    getPost(postId: ID!): Post
  }
  type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
    createPost(body: String!): Post!
    deletePost(postId: ID!): String!
    createComment(postId: String!, body: String!): Post!
    deleteComment(postId: String!, commentId: ID!): Post!
    likePost(postId: ID!): Post!
  }
`;
