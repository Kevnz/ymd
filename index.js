const daylight = require('@kev_nz/daylight')

/**
  @typedef YearMonthDay
  @type {object}
  @property {number} year - The year.
  @property {number} month - The month.
  @property {number} day - The day.

 */

/**
 * Year-Month-Day
 * Take a date object and returns the {YearMonthDay}
 * @param {Date} d - Date to return the year, month, and day
 * @returns @type {YearMonthDay}
 */
const yearMonthDay = d => {
  const date = daylight('n j Y', d).split(' ')
  return {
    year: Number(date[2]),
    month: Number(date[0]),
    day: Number(date[1]),
  }
}

module.exports = yearMonthDay
