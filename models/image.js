"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Image.belongsToMany(models.Hero, {
        through: "heroes_to_images",
        foreignKey: "imageId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  Image.init(
    {
      imageName: {
        type: DataTypes.TEXT,
        field: "image_name",
        allowNull: false,
      },
      imagePath: {
        type: DataTypes.TEXT,
        allowNull: false,
        field: 'image_path'
      },
    },

    {
      sequelize,
      modelName: "Image",
      underscored: true,
      tableName: "images"
    }
  );
  return Image;
};
