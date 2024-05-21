import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";

const TeacherModel = sequelize.define(
    'Teachers',
    {
      // Model attributes are defined here
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
    },
    {
      // Other model options go here
    },
  );


  export default TeacherModel;