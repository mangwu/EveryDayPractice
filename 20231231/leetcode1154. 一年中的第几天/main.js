/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-12-31 18:30:07                                                  *
 * @LastModifiedDate: 2023-12-31 18:47:01                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function (date) {
  const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const [year, month, day] = date.split("-").map((v) => parseInt(v));
  if (year % 4 === 0) {
    if (year % 100 !== 0 || year % 400 === 0) {
      days[1]++;
    }
  }
  let ans = 0;
  for (let i = 1; i < month; i++) {
    ans += days[i - 1];
  }
  return ans + day;
};
