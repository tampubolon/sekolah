const Teacher = require('../models/Teacher');

class TeacherController {
  async createTeacher(name, subject) {
    try {
      const teacher = new Teacher({ name, subject });
      await teacher.save();
      return teacher;
    } catch (err) {
      throw err;
    }
  }

  async getTeacherGrades(teacherId) {
    try {
      const teacher = await Teacher.findById(teacherId).populate('students');
      return teacher;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = TeacherController;
