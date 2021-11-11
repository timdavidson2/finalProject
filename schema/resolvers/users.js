const User = require("../../models/User");

module.exports = {
  Mutation: {
    register(_, args, context, info) {
      // TODO Validate user data
      // TODO not duplicate user
      // TODO hash password and create token
    },
  },
};
