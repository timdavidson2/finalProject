const { gql } = require("apollo-server");

module.exports = gql`
  type Post {
    _id: ID!
    body: String!
    createdAt: String!
    username: String!
  }
  type Query {
    getPosts: [Post]
  }
`;
