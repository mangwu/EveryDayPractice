/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-12-25 10:31:26                                                  *
 * @LastModifiedDate: 2022-12-25 10:35:33                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

/**
 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 */
var closetTarget = function (words, target, startIndex) {
  const n = words.length;
  let res = n;
  for (let i = 0; i < n; i++) {
    if (words[(i + startIndex) % n] == target) {
      res = Math.min(res, i, n - i);
    }
  }
  return res !== n ? res : -1;
};
