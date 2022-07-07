
const {DataTypes}=require("sequelize");
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("categoria", {
    nombre: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
  },{
    timestamps: false
});
};