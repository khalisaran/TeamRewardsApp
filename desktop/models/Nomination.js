'use strict';

module.exports = function(sequelize, DataTypes) {
  var Nomination = sequelize.define("Nomination", {
    id: {
    	type : DataTypes.INTEGER,
    	primaryKey : true,
    	autoIncrement : true
    },
    nominator: DataTypes.STRING,
    nominator_los: DataTypes.STRING,
    team_name: DataTypes.STRING,
    project_name: DataTypes.STRING,
    is_team: DataTypes.STRING(1),
    is_individual: DataTypes.STRING,
    team_desc: DataTypes.STRING,
    team_notes: DataTypes.STRING,
    prime_adjst: DataTypes.STRING,
    sec_adjst: DataTypes.STRING,
    award_total: DataTypes.STRING,
    award_category: DataTypes.STRING,
    behaviors: DataTypes.STRING,
    is_current_audit_client: DataTypes.STRING,
    one_firm_metric: DataTypes.STRING,
    status: DataTypes.STRING,
    created_by: DataTypes.STRING,
    updated_by: DataTypes.STRING,
    // created_by:{
    //   type: 'TIMESTAMP',
    //   defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    //   allowNull: true
    // },
    // updated_by:{
    //   type: 'TIMESTAMP',
    //   defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    //   allowNull: true
    // },
    nominees:{
      type: DataTypes.INTEGER,
      allowNull: false,
      get: function(){
        return this.getDataValue('nominees').split(',')
      },
      set: function(){
        return this.setDataValue('nominees').split(',')
      }
    },
    leader_reviewers:{
      type: DataTypes.INTEGER,
      allowNull: false,
      get: function(){
        return this.getDataValue('leader_reviewers').split(';')
      },
      set: function(){
        return this.setDataValue('leader_reviewers').split(';')
      }
    }
  });

  Nomination.associate = function(models){

  }
  return Nomination;
};