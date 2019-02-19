# Year-Month-Day

[![npm version](https://badge.fury.io/js/year-month-day.svg)](https://badge.fury.io/js/year-month-day)  [![Build Status](https://travis-ci.org/Kevnz/ymd.svg?branch=master)](https://travis-ci.org/Kevnz/ymd)
Simple function that returns an object with props of year, month and day

## Usage

```js
const ymd = require('year-month-day')
const day = new Date('01/01/2015')
const result = ymd(day)
console.log(result)
// {
//  year: 2015,
//  month:  1,
//  day: 1
// }
```