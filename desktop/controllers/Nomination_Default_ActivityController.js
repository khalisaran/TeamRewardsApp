var service = require("../services/Nomination_Default_ActivityService")
module.exports.create_Nomination = function(req, res) {
  var Nomination = req.body;
  service.create_Nomination(Nomination,function (nomination){
    res.status(201);
    res.json(nomination);
  });
}
module.exports.update_Nomination = function(req, res) {
  var Nomination = req.body;
  service.update_Nomination(Nomination,function (){
    res.end();
  });
}
module.exports.search_Nomination_for_update = function(req, res) {
  var Nomination_id = parseInt(req.params[0], 10);
  service.search_Nomination_for_update(Nomination_id,function (nomination){
    res.json(nomination);
  });
}
module.exports.delete_Nomination = function(req, res) {
  var Nomination_id = parseInt(req.params[0], 10);
  service.delete_Nomination(Nomination_id,function (){
    res.status(204);
    res.end();
  });
}
module.exports.get_all_Nomination = function(req, res) {
  service.get_all_Nomination(function (nomination){
    res.json(nomination);
  });
}