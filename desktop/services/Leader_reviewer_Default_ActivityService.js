var dao = require("../daos/Leader_reviewer_Default_ActivityDao")
module.exports.create_Leader_reviewer = function(Leader_reviewer,callback) {
  dao.create_Leader_reviewer(Leader_reviewer,function (leader_reviewer){
    callback(leader_reviewer);
  });
}
module.exports.update_Leader_reviewer = function(Leader_reviewer,callback) {
  dao.update_Leader_reviewer(Leader_reviewer,function (){
    callback();
  });
}
module.exports.search_Leader_reviewer_for_update = function(Leader_reviewer_id,callback) {
  dao.search_Leader_reviewer_for_update(Leader_reviewer_id,function (leader_reviewer){
    var json_nomination = JSON.parse(JSON.stringify(nomination));
    var cont = 0;
    Nominee_service.get_Nominee_by_parent_id(json_nomination.id,function (nominee){
    	cont++;
    	json_nomination.nominee = nominee;
    	if(cont == 1*1)
    		callback(json_nomination);
    });

  });
}
module.exports.delete_Leader_reviewer = function(Leader_reviewer_id,callback) {
  dao.delete_Leader_reviewer(Leader_reviewer_id,function (){
    var cont = 0;
    Nominee_service.delete_Nominee_by_parent_id(Nomination_id,function (){
    	cont++;
    	if(cont == 1*1)
    		callback();
    });

  });
}
module.exports.get_all_Leader_reviewer = function(callback) {
  dao.get_all_Leader_reviewer(function (leader_reviewer){
    var json_nomination = JSON.parse(JSON.stringify(nomination));
    var cont = 0;
    json_nomination.forEach(function(entry) {
    	Nominee_service.get_Nominee_by_parent_id(entry.id,function (nominee){
    		cont++;
    		entry.nominee = nominee;
    		if(cont == json_nomination.length*1)
    			callback(json_nomination);
    	});
    });
  });
}