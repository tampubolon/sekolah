const mongoose = require('mongoose');

class User {
  constructor(username, password, userType) {
    this.username = username;
    this.password = password;
    this.userType = userType; // 'teacher' or 'student'
  }
}

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  userType: String,
});

module.exports = mongoose.model('User', userSchema);
