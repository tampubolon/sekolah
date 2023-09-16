const StudentController = require('../controllers/studentController');

class StudentRoutes {
  constructor(app) {
    this.app = app;
    this.studentController = new StudentController();

    this.app.post('/api/students', this.createStudent.bind(this));
    this.app.get('/api/students/:studentId', this.getStudentGrades.bind(this));
  }

  async createStudent(req, res) {
    const { name } = req.body;
    try {
      const student = await this.studentController.createStudent(name);
      res.status(201).json(student);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async getStudentGrades(req, res) {
    const { studentId } = req.params;
    try {
      const student = await this.studentController.getStudentGrades(studentId);
      res.json(student);
    } catch (err) {
      res.status(404).json({ error: 'Student not found' });
    }
  }
}

module.exports = StudentRoutes;
