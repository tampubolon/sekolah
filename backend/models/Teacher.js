const mongoose = require('mongoose');

class Teacher {
  constructor(name, subject) {
    this.name = name;
    this.subject = subject;
    this.students = [];
  }

  addStudent(student) {
    this.students.push(student);
  }
}

const teacherSchema = new mongoose.Schema({
  name: String,
  subject: String,
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }],
});

module.exports = mongoose.model('Teacher', teacherSchema);
