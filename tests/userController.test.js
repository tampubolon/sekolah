const UserController = require('../backend/controllers/userController');

// Initialize the UserController
const userController = new UserController();

// Sample test cases
describe('User Controller', () => {
  // Test user registration
  it('should register a new user', async () => {
    const user = await userController.registerUser('testuser', 'password', 'student');
    expect(user).toBeDefined();
    expect(user.username).toBe('testuser');
    expect(user.userType).toBe('student');
  });

  // Test user login
  it('should log in an existing user', async () => {
    const user = await userController.loginUser('testuser', 'password');
    expect(user).toBeDefined();
    expect(user.username).toBe('testuser');
    expect(user.userType).toBe('student');
  });

  // Test invalid login
  it('should reject invalid login credentials', async () => {
    const user = await userController.loginUser('testuser', 'wrongpassword');
    expect(user).toBeNull();
  });
});
