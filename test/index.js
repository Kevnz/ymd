'use strict';

var tap = require('tap');

var ymd = require('../index');


var dateToTest = new Date('01/01/2015');
var secondDateToTest =  new Date('02/01/2015');
console.log(dateToTest);
var result = ymd(dateToTest);

console.log(result);
tap.equal(result.year, 2015, 'check if year is 2015');
tap.equal(result.month, 1, 'check if month is 1st');
tap.equal(result.day, 1, 'check if day is 1st');
var secondResult = ymd(secondDateToTest);
console.log(secondResult);

tap.equal(secondResult.year, 2015, 'check if year is 2015');
tap.equal(secondResult.month, 2, 'check if month is 1st');
tap.equal(secondResult.day, 1, 'check if day is 1st');