/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-13 17:55:20                                                  *
 * @LastModifiedDate: 2022-08-13 18:41:02                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function (arr) {
  const hash = new Map();
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    hash.set(arr[i], i);
  }
  let ans = 0;
  let pre = n;
  for (let i = n - 1; i >= 0; i--) {
    const idx = hash.get(i);
    const copy = arr.slice(idx, pre).sort((a, b) => a - b);
    if (isContinuousCh(copy, idx)) {
      ans++;
      pre = idx;
      i = copy[0];
    }
  }
  return ans;
};

var isContinuousCh = (arr, idx) => {
  if (arr.length == 1 && idx == arr[0]) {
    return true;
  }
  if (idx !== arr[0]) {
    return false;
  }
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    if (arr[i + 1] - 1 !== arr[i]) {
      return false;
    }
  }
  return true;
};
