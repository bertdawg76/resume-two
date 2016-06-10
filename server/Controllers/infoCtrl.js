var mongoose = require('mongoose');
var Info = mongoose.model('Info');



module.exports.getInfo = function(req, res){

  Info.find(req.query).exec(function (err, info) {
    if (err) {
      return res.status(500).json({ success: false, message: 'Could not get the info.' });
    }

    res.status(200).json(info);
  });

};

module.exports.createInfo = function(req, res){

  var newInfo = new Info(req.body);

  newInfo.save(function (err, info) {

    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(info);
    }

  });
};

module.exports.editInfo = function(req, res){
  Info.findById(req.params.id).exec(function (err, info) {
    if (err) {
      return res.status(500).json({ success: false, message: 'Could not get the info.' });
    }

    if (!!info) {
      res.status(200).json({ success: true, data: info });
    } else {
      return res.status(404).json({ success: false, message: 'The info was not found.' });
    }
  });
};

module.exports.updateInfo = function(req, res){

  Info.findByIdAndUpdate(req.params.id, req.body, function (err, info) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(info);
    }
  });
};

module.exports.deleteInfo = function(req, res){
  Info.findByIdAndRemove(req.params.id, function (err, info) {
    if (err) return res.status(500).json({ success: false, message: 'Could not delete the info.' });

    console.log('LOG: Deleted ' + info.project);
    res.status(200).json(info);
  });
};
