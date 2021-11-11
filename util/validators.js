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
  if (email.trim() === "") {
    errrors.email = "Email cannot be empty";
  } else {
    const regEx =
      /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
    if (!email.match(regEx)) {
      errors.email = "Email is not valid format";
    }
    if (password === "") {
      errors.password = "Password cannot be empty";
    } else if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
  }
  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};
