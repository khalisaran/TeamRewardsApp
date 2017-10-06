var models = require("../models");
var sequelize = models.sequelize;
var PropertiesReader = require('properties-reader');
var sqlQuery = PropertiesReader(__dirname+'/../sql_queries/Nomination_Default_Activity_SQL.properties');
module.exports.create_Nomination = function(Nomination,callback) {
	console.log("nomination data ----->"+JSON.stringify(Nomination))
  var create_query = sqlQuery._properties.create_Nomination;
  sequelize.query(create_query, {
    replacements: {
    	nominator : Nomination.nominator,
    	nominator_los : Nomination.nominator_los,
    	team_name : Nomination.team_name,
    	project_name : Nomination.project_name,
    	is_team : Nomination.is_team,
    	is_individual : Nomination.is_individual,
    	team_desc : Nomination.team_desc,
    	team_notes : Nomination.team_notes,
    	prime_adjst : Nomination.prime_adjst,
    	sec_adjst : Nomination.sec_adjst,
    	award_total : Nomination.award_total,
    	award_category : Nomination.award_category,
    	behaviors : Nomination.behaviors,
    	is_current_audit_client : Nomination.is_current_audit_client,
    	one_firm_metric : Nomination.one_firm_metric,
    	status : Nomination.status,
    	nominees : Nomination.nominees,
    	leader_reviewers : Nomination.leader_reviewers,
    	created_by : Nomination.created_by||"0",
    	updated_by : Nomination.updated_by||"0"
    },
    type : sequelize.QueryTypes.INSERT,
    model: models.Nomination
  }).then(function(nomination) {
		callback(nomination);
	});
}
module.exports.update_Nomination = function(Nomination,callback) {
  var update_query = sqlQuery._properties.update_Nomination;
  sequelize.query(update_query, {
    replacements: {
    	nominator : Nomination.nominator,
    	nominator_los : Nomination.nominator_los,
    	team_name : Nomination.team_name,
    	project_name : Nomination.project_name,
    	is_team : Nomination.is_team,
    	is_individual : Nomination.is_individual,
    	team_desc : Nomination.team_desc,
    	team_notes : Nomination.team_notes,
    	prime_adjst : Nomination.prime_adjst,
    	sec_adjst : Nomination.sec_adjst,
    	award_total : Nomination.award_total,
    	award_category : Nomination.award_category,
    	behaviors : Nomination.behaviors,
    	is_current_audit_client : Nomination.is_current_audit_client,
    	one_firm_metric : Nomination.one_firm_metric,
    	status : Nomination.status,
    	nominees : Nomination.nominees,
    	leader_reviewers : Nomination.leader_reviewers,
    	created_by : Nomination.created_by,
    	updated_by : Nomination.updated_by
    },
    type : sequelize.QueryTypes.UPDATE,
    model: models.Nomination
  }).then(function() {
		callback();
	});
}
module.exports.search_Nomination_for_update = function(Nomination_id,callback) {
  var search_for_update_query = sqlQuery._properties.search_for_update_Nomination;
  sequelize.query(search_for_update_query, {
    replacements: {
    	id: Nomination_id
    },
    type : sequelize.QueryTypes.SELECT,
    model: models.Nomination
  }).then(function(nomination) {
		callback(nomination[0]);
	});
}
module.exports.delete_Nomination = function(Nomination_id,callback) {
  var delete_query = sqlQuery._properties.delete_Nomination;
  sequelize.query(delete_query, {
    replacements: {
    	id: Nomination_id
    },
    type : sequelize.QueryTypes.DELETE,
    model: models.Nomination
  }).then(function() {
		callback();
	});
}
module.exports.get_all_Nomination = function(callback) {
  var get_all_query = sqlQuery._properties.get_all_Nomination;
  sequelize.query(get_all_query, {
    type : sequelize.QueryTypes.SELECT,
    model: models.Nomination
  }).then(function(nomination) {
		callback(nomination);
	});
}