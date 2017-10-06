'use strict';

module.exports = function(sequelize, DataTypes) {
  var Nominee = sequelize.define("Nominee", {
    id: {
    	type : DataTypes.INTEGER,
    	primaryKey : true,
    	autoIncrement : true
    },
    name: DataTypes.STRING,
    person_no: DataTypes.STRING,
    manager: DataTypes.STRING,
    email: DataTypes.STRING,
    line: DataTypes.STRING,
    award_type: DataTypes.STRING,
    award_amount: DataTypes.STRING,
    notes: DataTypes.STRING,
    status: DataTypes.STRING,
    dept_id: DataTypes.STRING,
    region: DataTypes.STRING,
    market: DataTypes.STRING,
    initial_contribution_level: DataTypes.STRING,
    final_contribution_level: DataTypes.STRING,
    Nomination_id: DataTypes.INTEGER,
    created_by:DataTypes.STRING,
    updated_by:DataTypes.STRING,
    /*created_date:DataTypes.DATE,
    
    updated_date:DataTypes.DATE
*/
  });
  return Nominee;
};