var models = require("../models");
var sequelize = models.sequelize;
var PropertiesReader = require('properties-reader');
var sqlQuery = PropertiesReader(__dirname+'/../sql_queries/Leader_reviewer_Default_Activity_SQL.properties');
module.exports.create_Leader_reviewer = function(Leader_reviewer,callback) {
  var create_query = sqlQuery._properties.create_Leader_reviewer;
  sequelize.query(create_query, {
    replacements: {
    	leader_name : Leader_reviewer.leader_name,
    	guid : Leader_reviewer.guid,
    	status : Leader_reviewer.status,
    	is_edit_request : Leader_reviewer.is_edit_request,
    	is_wording_accurate : Leader_reviewer.is_wording_accurate,
    	suggest_rank : Leader_reviewer.suggest_rank,
    	comments : Leader_reviewer.comments,
    	created_by : "0",
    	updated_by : "0"
    },
    type : sequelize.QueryTypes.INSERT,
    model: models.Leader_reviewer
  }).then(function(leader_reviewer) {
		callback(leader_reviewer);
	});
}
module.exports.update_Leader_reviewer = function(Leader_reviewer,callback) {
  var update_query = sqlQuery._properties.update_Leader_reviewer;
  sequelize.query(update_query, {
    replacements: {
    	id : Leader_reviewer.id,
    	leader_name : Leader_reviewer.leader_name,
    	guid : Leader_reviewer.guid,
    	status : Leader_reviewer.status,
    	is_edit_request : Leader_reviewer.is_edit_request,
    	is_wording_accurate : Leader_reviewer.is_wording_accurate,
    	suggest_rank : Leader_reviewer.suggest_rank,
    	comments : Leader_reviewer.comments,
    	updated_by : 0
    },
    type : sequelize.QueryTypes.UPDATE,
    model: models.Leader_reviewer
  }).then(function() {
		callback();
	});
}
module.exports.search_Leader_reviewer_for_update = function(Leader_reviewer_id,callback) {
  var search_for_update_query = sqlQuery._properties.search_for_update_Leader_reviewer;
  sequelize.query(search_for_update_query, {
    replacements: {
    	id: Leader_reviewer_id
    },
    type : sequelize.QueryTypes.SELECT,
    model: models.Leader_reviewer
  }).then(function(leader_reviewer) {
		callback(leader_reviewer[0]);
	});
}
module.exports.delete_Leader_reviewer = function(Leader_reviewer_id,callback) {
  var delete_query = sqlQuery._properties.delete_Leader_reviewer;
  sequelize.query(delete_query, {
    replacements: {
    	id: Leader_reviewer_id
    },
    type : sequelize.QueryTypes.DELETE,
    model: models.Leader_reviewer
  }).then(function() {
		callback();
	});
}
module.exports.get_all_Leader_reviewer = function(callback) {
  var get_all_query = sqlQuery._properties.get_all_Leader_reviewer;
  sequelize.query(get_all_query, {
    type : sequelize.QueryTypes.SELECT,
    model: models.Leader_reviewer
  }).then(function(leader_reviewer) {
		callback(leader_reviewer);
	});
}