"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Superpower extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Superpower.belongsTo(models.Hero, {
        foreignKey: "heroId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  Superpower.init(
    {
      abilityName: {
        type: DataTypes.STRING,
        field: "ability_name",
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: "Superpower",
      underscored: true,
      tableName: "superpowers",
    }
  );
  return Superpower;
};
