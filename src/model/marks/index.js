import { DataTypes } from 'sequelize';
import sequelize from '../../db/config.js';

const MarksModel = sequelize.define(
  'Marks',
  {
    // Model attributes are defined here
    Maths: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    Urdu: {
      type: DataTypes.DOUBLE,
      // allowNull defaults to true
    },
    MERN: {
        type: DataTypes.DOUBLE,
        // allowNull defaults to true
      },
    DS:{
      type: DataTypes.DOUBLE
    }
  },
  {
    // Other model options go here
  },
);


export default MarksModel;