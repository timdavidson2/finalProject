module.exports.validateRegisterInput = (
  username,
  email,
  password,
  confirmPassword
) => {
  const errrors = {};
  if (username.trim() === "") {
    errrors.username = "Username cannot be empty";
  }
};
