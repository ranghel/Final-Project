'use strict';

var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
    var Users = sequelize.define('Users', {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [2, 50]
                }
            }
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [2, 50]
                }
            }
        },
        email: {
            type: DataTypes.STRING,
            isEmail: true,
            unique: true,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [2, 50]
                }
            }
        },
        userImage: {
            type: DataTypes.STRING,
            allowNull: true
        }

    }, {
        classMethods: {
            associate: function(models) {
                Users.hasMany(models.Posts);
                Users.hasMany(models.Requests);
            }
        }
    });
    return Users;
};