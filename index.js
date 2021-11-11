const { ApolloServer } = require("apollo-server");
const gql = require("graphql-tag");
const mongoose = require("mongoose");

const typeDefs = require("./schema/typeDefs");
const resolvers = require("./schema/resolvers");
const { MONGODB } = require("./config");

const resolvers = {};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect(MONGODB)
  .then(() => {
    console.log("MONGODB Connected");
    return server.listen({ port: 3000 });
  })
  .then((res) => {
    console.log(`Server running on port ${res.url}`);
  });
