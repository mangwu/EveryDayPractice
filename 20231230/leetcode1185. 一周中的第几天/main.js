/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-12-30 22:28:15                                                  *
 * @LastModifiedDate: 2023-12-30 22:37:56                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const WEEKS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function (day, month, year) {
  let cur = 5;
  const referDate = new Date(2023, 11, 30);
  const targetDate = new Date(year, month - 1, day);
  const diff = (targetDate - referDate) / 86400000;
  cur = (cur + diff + 7 ** 6) % 7;
  return WEEKS[cur];
};
