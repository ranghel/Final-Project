'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {

        return queryInterface.bulkInsert('Requests', [{
            firstUserID: 1,
            firstUserPostID: 1,
            secondUserID: 2,
            secondUserPostID: 1
        }, {
            firstUserID: 1,
            firstUserPostID: 2,
            secondUserID: 3,
            secondUserPostID: 1
        }], {});
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.bulkDelete('Requests', null, {truncate: true});
    }
};
