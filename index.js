'use strict';
var daylight = require('daylight');

module.exports = function ymd (d) {
    var date = daylight('n j Y', d).split(' ');
    return {
        year: Number(date[2]),
        month: Number(date[0]),
        day: Number(date[1])
    };
};