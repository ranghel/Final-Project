'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {

        return queryInterface.bulkInsert('Posts', [{
            medication_name: 'Follistim',
            description: 'Follistim 300 UI',
            quantity: '2 vials',
            expiration_date: '2017-12-15',
            imageURL: '../css/imgs/placeholders/Follistim.jpg',
            UsersId: 1,
            requestStatus: 0
        }, {
            medication_name: 'Ovidrel',
            description: 'Ovidrel 250 mcg',
            imageURL: '../css/imgs/placeholders/Ovidrel.jpg',
            quantity: '1 Box',
            expiration_date: '2018-03-01',
            UsersId: 1,
            requestStatus: 1
        }, {
            medication_name: 'Ganirelix',
            description: 'Ganirelix prefilled syringe',
            imageURL: '../css/imgs/placeholders/ganirelix.png',
            quantity: '1',
            expiration_date: '2018-12-31',
            UsersId: 2,
            requestStatus: 0
        }, {
            medication_name: 'Follistim Pen',
            description: "Follistim Pen with cartiges",
            imageURL: '../css/imgs/placeholders/follistim_pen.jpg',
            quantity: '1',
            expiration_date: '2010-02-15',
            UsersId: 3,
            requestStatus: 0
        }, {
            medication_name: 'Menopur',
            description: "Menopur",
            imageURL: '../css/imgs/placeholders/menopur.jpg',
            quantity: '1 vial',
            expiration_date: '2020-01-15',
            UsersId: 3,
            requestStatus: 1
        }], {});
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.bulkDelete('Posts', null, {truncate: true});
    }
};
