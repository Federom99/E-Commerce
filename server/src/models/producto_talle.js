const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define('producto_talle', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
  stock: {
    type: DataTypes.INTEGER,
  }
}, { timestamps: false });
}