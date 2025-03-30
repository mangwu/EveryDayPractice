/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-03-30 21:26:32                                                  *
 * @LastModifiedDate: 2025-03-30 21:37:48                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function (s, spaces) {
  const n = s.length;
  const ans = [];
  const set = new Set(spaces);
  for (let i = 0; i < n; i++) {
    if (set.has(i)) ans.push(" ");
    ans.push(s[i]);
  }
  return ans.join("");
};
