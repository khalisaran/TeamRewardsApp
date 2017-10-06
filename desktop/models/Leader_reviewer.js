'use strict';

module.exports = function(sequelize, DataTypes) {
  var Leader_reviewer = sequelize.define("Leader_reviewer", {
    id: {
    	type : DataTypes.INTEGER,
    	primaryKey : true,
    	autoIncrement : true
    },
    leader_name: DataTypes.STRING,
    guid: DataTypes.STRING,
    status: DataTypes.STRING,
    is_edit_request: DataTypes.STRING,
    is_wording_accurate: DataTypes.STRING,
    suggest_rank: DataTypes.STRING,
    comments: DataTypes.STRING,
    createdAt:{
      type: DataTypes.DATE,
      defaultValue: Date.now,
      allowNull: false
    },
    updatedAt:{
      type: DataTypes.DATE,
      defaultValue: Date.now,
      allowNull: false
    },
  });
  return Leader_reviewer;
};