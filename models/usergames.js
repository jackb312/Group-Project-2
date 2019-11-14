var Sequelize = require("sequelize")
module.exports = function(sequelize, DataTypes) {
  var userGames = sequelize.define("usergames", {
    id: {
        type: DataTypes.INTEGER(100),
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    game_title: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    rating: {
        type: DataTypes.INTEGER(4),
        allowNull: false
    },
    platform: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    game_release: {
        type: DataTypes.DATE,
        allowNull: false
    },
    game_image: {
        type: DataTypes.TEXT,
        allowNull: false
    }
  });
  return userGames;
};
