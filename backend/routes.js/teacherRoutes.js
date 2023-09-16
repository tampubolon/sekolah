const TeacherController = require('../controllers/teacherController');

class TeacherRoutes {
  constructor(app) {
    this.app = app;
    this.teacherController = new TeacherController();

    this.app.post('/api/teachers', this.createTeacher.bind(this));
    this.app.get('/api/teachers/:teacherId', this.getTeacherGrades.bind(this));
  }

  async createTeacher(req, res) {
    const { name, subject } = req.body;
    try {
      const teacher = await this.teacherController.createTeacher(name, subject);
      res.status(201).json(teacher);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async getTeacherGrades(req, res) {
    const { teacherId } = req.params;
    try {
      const teacher = await this.teacherController.getTeacherGrades(teacherId);
      res.json(teacher);
    } catch (err) {
      res.status(404).json({ error: 'Teacher not found' });
    }
  }
}

module.exports = TeacherRoutes;
