/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-01 20:33:05                                                  *
 * @LastModifiedDate: 2022-10-01 20:40:35                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

/**
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function (number) {
  const strs = number.split(/[-\s]*/g).filter((v) => v !== "");
  let str = "";
  let n = strs.length;
  let i = 0;
  while (n > 4) {
    str += strs[i] + strs[i + 1] + strs[i + 2] + "-";
    i += 3;
    n -= 3;
  }
  if (n == 2 || n == 3) {
    str += strs.slice(i).join("");
  } else {
    str += strs[i] + strs[i + 1] + "-" + strs[i + 2] + strs[i + 3];
  }
  return str;
};
