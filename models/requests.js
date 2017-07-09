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
                var Posts = this.sequelize.define('Posts', {}),
                    Users = this.sequelize.define('Users', {}),
                    Requests = this.sequelize.define('Requests', {});

                Requests.belongsToMany(Users, {through: 'HelpUser'});
                Users.belongsToMany(Requests, {through: 'HelpUser'});

                Requests.belongsToMany(Posts, {through: 'HelpPost'});
                Posts.belongsToMany(Requests, {through: 'HelpPost'});

            }
        }
    });
    return Requests;
};