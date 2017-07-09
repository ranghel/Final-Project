'use strict';
module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface.createTable('Requests', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            firstUserID: {
                type: Sequelize.INTEGER
            },
            firstUserPostID: {
                type: Sequelize.INTEGER
            },
            secondUserID: {
                type: Sequelize.INTEGER
            },
            secondUserPostID: {
                type: Sequelize.INTEGER
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: new Date()
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: new Date()
            }
        });
    },
    down: function(queryInterface, Sequelize) {
        return queryInterface.dropTable('Requests');
    }
};