var service = require("../services/Leader_reviewer_Default_ActivityService")
module.exports.create_Leader_reviewer = function(req, res) {
  var Leader_reviewer = req.body;
  service.create_Leader_reviewer(Leader_reviewer,function (leader_reviewer){
    res.status(201);
    res.json(leader_reviewer);
  });
}
module.exports.update_Leader_reviewer = function(req, res) {
  var Leader_reviewer = req.body;
  service.update_Leader_reviewer(Leader_reviewer,function (){
    res.end();
  });
}
module.exports.search_Leader_reviewer_for_update = function(req, res) {
  var Leader_reviewer_id = parseInt(req.params[0], 10);
  service.search_Leader_reviewer_for_update(Leader_reviewer_id,function (leader_reviewer){
    res.json(leader_reviewer);
  });
}
module.exports.delete_Leader_reviewer = function(req, res) {
  var Leader_reviewer_id = parseInt(req.params[0], 10);
  service.delete_Leader_reviewer(Leader_reviewer_id,function (){
    res.status(204);
    res.end();
  });
}
module.exports.get_all_Leader_reviewer = function(req, res) {
  service.get_all_Leader_reviewer(function (leader_reviewer){
    res.json(leader_reviewer);
  });
}