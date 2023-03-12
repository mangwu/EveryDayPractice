/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-03-11 19:03:18                                                  *
 * @LastModifiedDate: 2023-03-11 20:10:11                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个放有字母和数字的数组，找到最长的子数组，且包含的字母和数字的个数相同。

// 返回该子数组，若存在多个最长子数组，返回左端点下标值最小的子数组。若不存在这样的数组，返回一个空数组。

/**
 * @param {string[]} array
 * @return {string[]}
 */
var findLongestSubarray = function (array) {
  const hash = new Map([[0, -1]]);
  let idx = -1;
  let max = 0;
  const n = array.length;
  let num = 0;
  for (let i = 0; i < n; i++) {
    if (
      array[i].charCodeAt() >= "0".charCodeAt() &&
      array[i].charCodeAt() <= "9".charCodeAt()
    ) {
      // 判断是否是数字
      num++;
    }
    let diff = num - (i + 1 - num); // 数字减字母差值
    if (hash.has(diff)) {
      let curIdx = hash.get(diff);
      let curMax = i - curIdx;
      if (curMax > max) {
        max = curMax;
        idx = curIdx + 1;
      } else if (curMax == max && curIdx < idx) {
        idx = curIdx + 1;
      }
    } else {
      hash.set(diff, i);
    }
  }
  return idx !== -1 ? array.slice(idx, idx + max) : [];
};
