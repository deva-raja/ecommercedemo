const User = require('../models/User');
const jwt = require('jsonwebtoken');

const handleError = (error) => {
  console.log(error.message, error.code);
  const errors = { email: '', password: '' };

  if (error.message === 'incorrect email') {
    errors.email = 'email is not registered';
  }

  if (error.message === 'incorrect password') {
    errors.password = 'password is incorrect';
  }

  if (error.code === 11000) {
    errors.email = 'email already taken';
    return errors;
  }

  if (error.message.includes('User validation failed')) {
    Object.values(error.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, 'rustham', {
    expiresIn: maxAge,
  });
};

const login_post = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const token = await createToken(user._id);
    res.status(201).json({ user: user._id, token });
  } catch (error) {
    const errors = handleError(error);
    res.status(200).json({ errors });
  }
};

const create_post = async (req, res) => {
  try {
    const user = await User.create(req.body);
    const token = await createToken(user._id);
    res.status(201).json({ user: user._id, token });
  } catch (error) {
    const errors = handleError(error);
    res.status(200).json({ errors });
  }
};

module.exports = {
  login_post,
  create_post,
};
