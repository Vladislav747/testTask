'use strict';
let Sequelize = require('sequelize');
let database = require('../database');
let moment = require('moment');

var Task = database.define('task', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    dateNew: {
        type: Sequelize.DATE,
        //get correct format in backend
        get: function () {
            return moment.utc(this.getDataValue('dateNew')).format('LLL');
        },

        set: function(){
            var randomSeed = Math.floor(Math.random() * Math.floor(10000000));
            return this.setDataValue('dateNew', new Date(randomSeed*100000000));
        },
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        //Validation by sequlize
        validate: {
            notEmpty: true
        }
    },
    distance: {
        type: Sequelize.INTEGER,
        allowNull: false,
        //Validation by sequlize
        validate: {
            notEmpty: true
        }
    },
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        //Validation by sequlize
        validate: {
            notEmpty: true
        }
    },
});

module.exports = Task;