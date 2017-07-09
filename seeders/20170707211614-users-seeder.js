'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {

        return queryInterface.bulkInsert('Users', [{
            firstName: 'Test',
            lastName: 'User1',
            email: 'testuser1@gmail.com',
            password: 'test123',
            userImage:'../css/imgs/placeholders/profile.png'
        }, {
            firstName: 'Test',
            lastName: 'User2',
            email: 'testuser2@gmail.com',
            password: 'test123',
            userImage: '../css/imgs/placeholders/profile.png'
        }, {
            firstName: 'Test',
            lastName: 'User3',
            email: 'testuser3@gmail.com',
            password: 'test123',
            userImage: '../css/imgs/placeholders/profile3.jpg'
        }, {
            firstName: 'Test',
            lastName: 'User4',
            email: 'testuser4@gmail.com',
            password: 'test123',
            userImage: '../css/imgs/placeholders/profile.png'
        }], {});
    },

    down: function (queryInterface, Sequelize) {

        return queryInterface.bulkDelete('Users', null);
    }
};
