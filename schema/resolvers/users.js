const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { userInputError } = require("apollo-server");

const validateRegisterInput = require("../../util/validators");
const { SECRET_KEY } = require("../../config");
const User = require("../../models/User");

module.exports = {
  Mutation: {
    async register(
      _,
      { registerInput: { username, email, password, confirmPassword } }
    ) {
      // TODO Validate user data
      //  not duplicate user
      const user = await User.findOne({ username });
      if (user) {
        throw new userInputError("Username is taken", {
          errors: {
            username: "This username is taken",
          },
        });
      }
      //  hash password and create token
      password = await bcrypt.hash(password, 10);

      const newUser = new User({
        email,
        username,
        password,
        createdAt: new Date().toISOString,
      });
      const res = await newUser.save();

      const token = jwt.sign(
        {
          _id: res.id,
          email: res.email,
          username: res.username,
        },
        SECRET_KEY,
        { expiresIn: "1h" }
      );
      return {
        ...res._doc,
        _id: res._id,
        token,
      };
    },
  },
};
