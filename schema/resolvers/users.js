const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { SECRET_KEY } = require("../../config");
const User = require("../../models/User");

module.exports = {
  Mutation: {
    async register(
      _,
      { registerInput: { username, email, password, confirmPassword } },
      context,
      info
    ) {
      // TODO Validate user data
      // TODO not duplicate user
      // TODO hash password and create token
      password = await bcrypt.hash(password, 10);

      const newUser = new User({
        email,
        username,
        password,
        createdAt: new Date().toISOString,
      });
      const res = await newUser.save();

      const token = jwt.sign({
        _id: res.id,
        email: res.email,
        username: res.username,
      });
    },
  },
};
