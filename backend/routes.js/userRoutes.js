const UserController = require('../controllers/userController');

class UserRoutes {
  constructor(app) {
    this.app = app;
    this.userController = new UserController();

    this.app.post('/api/users/register', this.registerUser.bind(this));
    this.app.post('/api/users/login', this.loginUser.bind(this));
  }

  async registerUser(req, res) {
    const { username, password, userType } = req.body;
    try {
      const user = await this.userController.registerUser(username, password, userType);
      res.status(201).json(user);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async loginUser(req, res) {
    const { username, password } = req.body;
    try {
      const user = await this.userController.loginUser(username, password);
      if (user) {
        res.json(user);
      } else {
        res.status(401).json({ error: 'Invalid credentials' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = UserRoutes;
