// models/resources.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Resource = sequelize.define("Resource", {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tipo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Resource;
