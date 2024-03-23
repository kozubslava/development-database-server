"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Hero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Hero.hasMany(models.Superpower, {
        foreignKey: "heroId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
      Hero.belongsToMany(models.Image, {
        through: "heroes_to_images",
        foreignKey: "heroId",
        onDelete: 'CASCADE',
        onUpdate:'CASCADE',
      });
    }
  }
  Hero.init(
    {
      nickname: {
        type: DataTypes.STRING(200),
        allowNull: false,
        validate: {
          notEmpty: true,
          notNull: true,
        },
      },
      realName: {
        type: DataTypes.STRING,
        field: "real_name",
        allowNull: false,
        validate: {
          notEmpty: true,
          notNull: true,
        },
      },
      originDescription: { 
        type: DataTypes.TEXT, 
        field: "origin_description" 
      },
      catchPhrase: { 
        type: DataTypes.TEXT, 
        field: "catch_phrase" },
    },
    {
      sequelize,
      modelName: "Hero",
      underscored: true,
      tableName: "heroes",
    }
  );
  return Hero;
};
