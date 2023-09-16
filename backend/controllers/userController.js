const User = require('../models/User');

class UserController {
  async registerUser(username, password, userType) {
    try {
      const user = new User({ username, password, userType });
      await user.save();
      return user;
    } catch (err) {
      throw err;
    }
  }

  async loginUser(username, password) {
    try {
      const user = await User.findOne({ username, password });
      return user;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = UserController;
