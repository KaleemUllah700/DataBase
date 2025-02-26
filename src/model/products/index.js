import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";
const ProductsModel = sequelize.define(
  "Products",
  {
    productName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    productStock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.DOUBLE,
      // allowNull: false,
    },
  },
  {
    timestamps:false
  }
);



export default ProductsModel;
