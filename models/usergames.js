//var Sequelize = require("sequelize")
module.exports = function(sequelize, DataTypes) {
  var usergames = sequelize.define("usergames", {
    gameTitle: {
        type: DataTypes.STRING,
        allowNull: true
    },
    rating: {
        type: DataTypes.STRING,
        allowNull: true,
        
    },
    releaseDate: {
        type: DataTypes.STRING,
        allowNull: true
    },
    platforms: {
        type: DataTypes.STRING,
        allowNull: true
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true
    }
    
  });

  return usergames;
};
