var mongoose = require('mongoose');


var InfoSchema = new mongoose.Schema({
  describe: { type: String, required: true},
  project: { type: String, required: true},
  url: { type: String, required: true},
  webUrl: { type: String },
  createdAt: {type: Date, default: Date.now}
});

InfoSchema.pre('save', function(next){
  now = new Date();
  if (!this.createdAt) {
    this.createdAt = now;
  }
  next()
});



module.exports = mongoose.model('Info', InfoSchema);