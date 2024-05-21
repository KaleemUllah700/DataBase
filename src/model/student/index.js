import { DataTypes } from 'sequelize';
import sequelize from '../../db/config.js';

const StudentModel = sequelize.define(
  'Students',
  {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    Email: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    Address: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
  },
);


export default StudentModel;