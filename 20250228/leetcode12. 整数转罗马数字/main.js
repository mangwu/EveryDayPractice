/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-28 16:48:40                                                  *
 * @LastModifiedDate: 2025-02-28 16:59:00                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const romaNums = [
    { val: 1000, str: "M" },
    { val: 900, str: "CM" },
    { val: 500, str: "D" },
    { val: 400, str: "CD" },
    { val: 100, str: "C" },
    { val: 90, str: "XC" },
    { val: 50, str: "L" },
    { val: 40, str: "XL" },
    { val: 10, str: "X" },
    { val: 9, str: "IX" },
    { val: 5, str: "V" },
    { val: 4, str: "IV" },
    { val: 1, str: "I" },
  ];
  let res = [];
  for (const { val, str } of romaNums) {
    while (num >= val) {
      num -= val;
      res.push(str);
    }
    if (num === 0) break;
  }
  return res.join("");
};
