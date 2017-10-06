var models = require("../models");
var sequelize = models.sequelize;
var PropertiesReader = require('properties-reader');
var sqlQuery = PropertiesReader(__dirname+'/../sql_queries/Nominee_Default_Activity_SQL.properties');
module.exports.create_Nominee = function(Nominee,callback) {
  var create_query = sqlQuery._properties.create_Nominee;
  sequelize.query(create_query, {
    replacements: {
    	name : Nominee.name,
    	person_no : Nominee.person_no,
    	manager : Nominee.manager,
    	email : Nominee.email,
    	line : Nominee.line,
    	award_type : Nominee.award_type,
    	award_amount : Nominee.award_amount,
    	notes : Nominee.notes,
    	status : Nominee.status,
    	dept_id : Nominee.dept_id,
    	region : Nominee.region,
    	market : Nominee.market,
    	initial_contribution_level : Nominee.initial_contribution_level,
    	final_contribution_level : Nominee.final_contribution_level,
    	created_by : "0",
    	updated_by : "0",
     	Nomination_id : Nominee.Nomination_id ||null
    },
    type : sequelize.QueryTypes.INSERT,
    model: models.Nominee
  }).then(function(nominee) {
		callback(nominee);
	});
}
module.exports.update_Nominee = function(Nominee,callback) {
  var update_query = sqlQuery._properties.update_Nominee;
  sequelize.query(update_query, {
    replacements: {
    	id : Nominee.id,
    	name : Nominee.name,
    	person_no : Nominee.person_no,
    	manager : Nominee.manager,
    	email : Nominee.email,
    	line : Nominee.line,
    	award_type : Nominee.award_type,
    	award_amount : Nominee.award_amount,
    	notes : Nominee.notes,
    	status : Nominee.status,
    	dept_id : Nominee.dept_id,
    	region : Nominee.region,
    	market : Nominee.market,
    	initial_contribution_level : Nominee.initial_contribution_level,
    	final_contribution_level : Nominee.final_contribution_level,
    	updated_by : 0,
    	Nomination_id : Nominee.Nomination_id ||null
    },
    type : sequelize.QueryTypes.UPDATE,
    model: models.Nominee
  }).then(function() {
		callback();
	});
}
module.exports.search_Nominee_for_update = function(Nominee_id,callback) {
  var search_for_update_query = sqlQuery._properties.search_for_update_Nominee;
  sequelize.query(search_for_update_query, {
    replacements: {
    	id: Nominee_id
    },
    type : sequelize.QueryTypes.SELECT,
    model: models.Nominee
  }).then(function(nominee) {
		callback(nominee[0]);
	});
}
module.exports.delete_Nominee = function(Nominee_id,callback) {
  var delete_query = sqlQuery._properties.delete_Nominee;
  sequelize.query(delete_query, {
    replacements: {
    	id: Nominee_id
    },
    type : sequelize.QueryTypes.DELETE,
    model: models.Nominee
  }).then(function() {
		callback();
	});
}
module.exports.get_all_Nominee = function(callback) {
  var get_all_query = sqlQuery._properties.get_all_Nominee;
  sequelize.query(get_all_query, {
    type : sequelize.QueryTypes.SELECT,
    model: models.Nominee
  }).then(function(nominee) {
		callback(nominee);
	});
}
module.exports.get_Nominee_by_parent_id_ = function(Nomination_id,callback) {
  var get_by_parent_id_query = sqlQuery._properties.get_by_parent_id_Nominee;
  sequelize.query(get_by_parent_id_query, {
    replacements: {
    	Nomination_id: Nomination_id
    },
    type : sequelize.QueryTypes.SELECT,
    model: models.Nominee
  }).then(function(nominee) {
		callback(nominee);
	});
}
module.exports.delete_Nominee_by_parent_id = function(Nomination_id,callback) {
  var delete_by_parent_id_query = sqlQuery._properties.delete_by_parent_id_Nominee;
  sequelize.query(delete_by_parent_id_query, {
    replacements: {
    	Nomination_id: Nomination_id
    },
    type : sequelize.QueryTypes.DELETE,
    model: models.Nominee
  }).then(function() {
		callback();
	});
}