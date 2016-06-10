var mongoose = require('mongoose');

var SkillSchema = new mongoose.Schema({
  description: String,
  title: { type: String, required: true, trim: true },
  createdAt: {type: Date, default: Date.now}
});

SkillSchema.pre('save', function(next){
  now = new Date();
  if (!this.createdAt) {
    this.createdAt = now;
  }
  next()
});



module.exports = mongoose.model('Skill', SkillSchema);