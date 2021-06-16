const { isEmail } = require('validator');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    lowercase: true,
    unique: true,
    validate: [isEmail, 'Should be a vaild email'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [2, 'Should be atleast 2 characters'],
  },
});

userSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email: email });
  if (user) {
    let correctPassword = await bcrypt.compare(password, user.password);
    if (correctPassword) {
      return user;
    }
    throw Error('incorrect password');
  }
  throw Error('incorrect email');
};

const User = mongoose.model('User', userSchema);

module.exports = User;
