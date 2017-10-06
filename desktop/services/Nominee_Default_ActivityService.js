var dao = require("../daos/Nominee_Default_ActivityDao")
module.exports.create_Nominee = function(Nominee,callback) {
  dao.create_Nominee(Nominee,function (nominee){
    callback(nominee);
  });
}
module.exports.update_Nominee = function(Nominee,callback) {
  dao.update_Nominee(Nominee,function (){
     /*var json_nomination = JSON.parse(JSON.stringify(nominee));*/
     console.log("in service - >      ",Nominee)
    callback(Nominee);
  });
}
module.exports.search_Nominee_for_update = function(Nominee_id,callback) {
  dao.search_Nominee_for_update(Nominee_id,function (nominee){
    var json_nomination = JSON.parse(JSON.stringify(nominee));
    var cont = 0;
      callback(json_nomination);
 /*   Nominee_service.get_Nominee_by_parent_id(json_nomination.id,function (nominee){
    	cont++;
    	json_nomination.nominee = nominee;
    	if(cont == 1*1)
    		callback(json_nomination);
    });*/

  });
}
module.exports.delete_Nominee = function(Nominee_id,callback) {
  dao.delete_Nominee(Nominee_id,function (){
    var cont = 0;
  /*  Nominee_service.delete_Nominee_by_parent_id(Nominee_id,function (){
    	cont++;
    	if(cont == 1*1)
    		callback();
    });*/
  //   dao.delete_Nominee_by_parent_id(Nominee_id,function (){
    callback();
  });

  
}
module.exports.get_all_Nominee = function(callback) {
  dao.get_all_Nominee(function (nominee){
    var json_nomination = JSON.parse(JSON.stringify(nominee));
    var cont = 0;
    console.log("--- > ",json_nomination);
    callback(json_nomination);

  /*  json_nomination.forEach(function(entry) {
    	Nominee_service.get_Nominee_by_parent_id(entry.id,function (nominee){
    		cont++;
    		entry.nominee = nominee;
    		if(cont == json_nomination.length*1)
    			callback(json_nomination);
    	});
    });*/
  });
}
module.exports.get_Nominee_by_parent_id = function(Nomination_id,callback) {
  dao.get_Nominee_by_parent_id_(Nomination_id,function (nominee){
    callback(nominee);
  });
}
module.exports.delete_Nominee_by_parent_id = function(Nominee_id,callback) {
  dao.delete_Nominee_by_parent_id(Nominee_id,function (){
    callback();
  });
}