var mongoose = require('mongoose');
var Skill = mongoose.model('Skill');



module.exports.getSkill = function(req, res){

  Skill.find(req.query).exec(function (err, skill) {
    if (err) {
      return res.status(500).json({ success: false, message: 'Could not get the dkill.' });
    }

    res.status(200).json(skill);
  });

};

module.exports.createSkill = function(req, res){

  var newSkill = new Skill(req.body);

  newSkill.save(function (err, skill) {

    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(skill);
    }

  });
};

module.exports.editSkill = function(req, res){
  Skill.findById(req.params.id).exec(function (err, skill) {
    if (err) {
      return res.status(500).json({ success: false, message: 'Could not get the skill.' });
    }

    if (!!skill) {
      res.status(200).json({ success: true, data: skill });
    } else {
      return res.status(404).json({ success: false, message: 'The skill was not found.' });
    }
  });
};

module.exports.updateSkill = function(req, res){

  Skill.findByIdAndUpdate(req.params.id, req.body, function (err, skill) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(skill);
    }
  });
};

module.exports.deleteSkill = function(req, res){
  Skill.findByIdAndRemove(req.params.id, function (err, skill) {
    if (err) return res.status(500).json({ success: false, message: 'Could not delete the skill.' });

    console.log('LOG: Deleted ' + skill.title);
    res.status(200).json(skill);
  });
};
