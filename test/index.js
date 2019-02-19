const tap = require('tap')

const ymd = require('../index')

const dateToTest = new Date('01/01/2015')
const secondDateToTest = new Date('02/01/2015')

const result = ymd(dateToTest)


tap.equal(result.year, 2015, 'check if year is 2015')
tap.equal(result.month, 1, 'check if month is 1st')
tap.equal(result.day, 1, 'check if day is 1st')
const secondResult = ymd(secondDateToTest)

tap.equal(secondResult.year, 2015, 'check if year is 2015')
tap.equal(secondResult.month, 2, 'check if month is 1st')
tap.equal(secondResult.day, 1, 'check if day is 1st')
