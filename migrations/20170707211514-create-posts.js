'use strict';
module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface.createTable('Posts', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
                onUpdate: 'cascade',
                onDelete: 'cascade'
            },
            medication_name: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                  len: {
                    args: [2, 50]
                  }
                }
            },
            description: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                  len: {
                    args: [2, 200]
                  }
                }
            },
            quantity: {
              type: Sequelize.STRING,
              allowNull: false
            },
            expiration_date: {
              type: Sequelize.DATE,
              allowNull: false
            },
            imageURL: {
                type: Sequelize.STRING,
                allowNull: true
            },
            requestStatus: {
                type: Sequelize.BOOLEAN,
                defaultValue: false
            },
            UsersId: {
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
        return queryInterface.dropTable('Posts');
    }
};