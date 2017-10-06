var dao = require("../daos/Nomination_Default_ActivityDao")
var Nominee_service = require("../services/Nominee_Default_ActivityService")

module.exports.create_Nomination = function(Nomination,callback) {
  dao.create_Nomination(Nomination,function (nomination){
    callback(nomination);
  });
}
module.exports.update_Nomination = function(Nomination,callback) {
  dao.update_Nomination(Nomination,function (){
    callback();
  });
}
module.exports.search_Nomination_for_update = function(Nomination_id,callback) {
  dao.search_Nomination_for_update(Nomination_id,function (nomination){
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
module.exports.delete_Nomination = function(Nomination_id,callback) {
  dao.delete_Nomination(Nomination_id,function (){
    var cont = 0;
    Nominee_service.delete_Nominee_by_parent_id(Nomination_id,function (){
    	cont++;
    	if(cont == 1*1)
    		callback();
    });

  });
}
module.exports.get_all_Nomination = function(callback) {
  dao.get_all_Nomination(function (nomination){
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