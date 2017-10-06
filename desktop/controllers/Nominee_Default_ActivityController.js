var service = require("../services/Nominee_Default_ActivityService")
module.exports.create_Nominee = function(req, res) {
  var Nominee = req.body;
  service.create_Nominee(Nominee,function (nominee){
    res.status(201);
    res.json(nominee);
  });
}
module.exports.update_Nominee = function(req, res) {
  var Nominee = req.body;
  service.update_Nominee(Nominee,function (nominee){
    console.log("llL - > ",nominee)
    res.json(nominee);
  //  res.end();
  });
}
module.exports.search_Nominee_for_update = function(req, res) {
  var Nominee_id = parseInt(req.params[0], 10);
  service.search_Nominee_for_update(Nominee_id,function (nominee){
    res.json(nominee);
  });
}
module.exports.delete_Nominee = function(req, res) {
  var Nominee_id = parseInt(req.params[0], 10);
  service.delete_Nominee(Nominee_id,function (){
    res.status(204);
    res.end();
  });
}
module.exports.get_all_Nominee = function(req, res) {
  service.get_all_Nominee(function (nominee){
    res.json(nominee);
  });
}
module.exports.get_Nominee_by_parent_id = function(req, res) {
  var Nomination_id = req.query.Nomination_id || "%%";

  service.get_Nominee_by_parent_id(Nomination_id,function (nominee){
    res.json(nominee);
  });
}
module.exports.delete_Nominee_by_parent_id = function(req, res) {
  var Nomination_id = req.query.Nomination_id || "%%";

  service.delete_Nominee_by_parent_id(Nomination_id,function (){
    res.status(204);
    res.end();
  });
}