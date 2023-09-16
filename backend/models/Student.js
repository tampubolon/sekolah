const mongoose = require('mongoose');

class Student {
  constructor(name) {
    this.name = name;
    this.grades = [];
  }

  addGrade(subject, grade) {
    this.grades.push({ subject, grade });
  }
}

const studentSchema = new mongoose.Schema({
  name: String,
  grades: [
    {
      subject: String,
      grade: Number,
    },
  ],
});

module.exports = mongoose.model('Student', studentSchema);
