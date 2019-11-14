//var Sequelize = require("sequelize")
module.exports = function(sequelize, DataTypes) {
  var usergames = sequelize.define("usergames", {
    guid: {
        type: DataTypes.INTEGER,
        //autoIncrement: true,
        //primaryKey: true,
        allowNull: false
    }
    /*game_title: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    game_rating: {
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
    }*/
  });
  return usergames;
};
