'use strict';
var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
    var Requests = sequelize.define('Requests', {
        firstUserID: DataTypes.INTEGER,
        firstUserPostID: DataTypes.INTEGER,
        secondUserID: DataTypes.INTEGER,
        secondUserPostID: DataTypes.INTEGER

    }, {
        classMethods: {
            associate: function(models) {
                Requests.belongsTo(models.Posts, {
                    foreignKey: {
                        allowNull: false
                    }
                });
                Requests.belongsTo(models.Users, {
                    foreignKey: {
                        allowNull: false
                    }

                });

            }
        }
    });
    return Requests;
};