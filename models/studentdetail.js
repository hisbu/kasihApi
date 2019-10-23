'use strict';
module.exports = (sequelize, DataTypes) => {
  const StudentDetail = sequelize.define('StudentDetail', {
    pictureReport: DataTypes.STRING,
    deskripsi: DataTypes.STRING,
    studentId: DataTypes.INTEGER
  }, {});
  StudentDetail.associate = function(models) {
    // associations can be defined here
    StudentDetail.belongsTo(models.Student, {foreignKey : 'studentId'})
  };
  return StudentDetail;
};