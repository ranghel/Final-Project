'use strict';
var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
    var Posts = sequelize.define('Posts', {
        medication_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [2, 50]
                }
            }
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [2, 200]
                }
            }
        },
        quantity: {
            type: DataTypes.STRING,
            allowNull: false
        },
        expiration_date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        imageURL: {
            type: DataTypes.STRING
        },
        requestStatus: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
            defaultValue: Date.now()
        },
        updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
            defaultValue: Date.now()
        },
        UsersId: DataTypes.INTEGER
    },{
        classMethods: {
            associate: function(models) {
                var Posts = this.sequelize.define('Posts', {}),
                    Users = this.sequelize.define('Users', {});

                Posts.belongsTo(Users);
            }
        }
    });
    return Posts;
};