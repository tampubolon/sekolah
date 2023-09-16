const Student = require('../models/Student');

class StudentController {
  async createStudent(name) {
    try {
      const student = new Student({ name });
      await student.save();
      return student;
    } catch (err) {
      throw err;
    }
  }

  async getStudentGrades(studentId) {
    try {
      const student = await Student.findById(studentId);
      return student;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = StudentController;
