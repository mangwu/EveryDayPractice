/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-09-15 08:45:34                                                  *
 * @LastModifiedDate: 2022-09-15 09:01:34                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

/**
 * @param {number} n
 * @param {number} presses
 * @return {number}
 */
var flipLights = function (n, presses) {
  if (presses == 0) {
    return 1;
  }
  if (presses == 1) {
    return n < 3 ? n + 1 : 4;
  }
  if (presses == 2) {
    return n < 3 ? Math.pow(2, n) : 7;
  }
  return n < 3 ? Math.pow(2, n) : 8;
};
