/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-06-21 09:14:14                                                  *
 * @LastModifiedDate: 2022-06-21 09:44:19                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 把符合下列属性的数组 arr 称为 山脉数组 ：

// arr.length >= 3
// 存在下标 i（0 < i < arr.length - 1），满足
// arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
// arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
// 给出一个整数数组 arr，返回最长山脉子数组的长度。如果不存在山脉子数组，返回 0 。

/**
 * @param {number[]} arr
 * @return {number}
 */
var longestMountain = function (arr) {
  const n = arr.length;
  if (n <= 2) {
    return 0;
  }
  // 山脉至少由三个元素组成
  let max = 0;
  // 前半段
  let firstHalf = 0;
  let lastHalf = 0;
  for (let i = 1; i < n; i++) {
    if (firstHalf > 0 && lastHalf > 0) {
      max = Math.max(max, firstHalf + lastHalf + 1);
    }
    firstHalf = 0;
    lastHalf = 0;
    if (firstHalf == 0) {
      while (arr[i] > arr[i - 1] && i < n) {
        firstHalf++;
        i++;
      }
      console.log(i, firstHalf, lastHalf, "-");
    }
    if (firstHalf > 0 && lastHalf == 0) {
      while (arr[i] < arr[i - 1] && i < n) {
        lastHalf++;
        i++;
      }
      if (lastHalf > 0) {
        i--;
      }
      console.log(i, firstHalf, lastHalf);
      continue;
    }
  }
  if (firstHalf > 0 && lastHalf > 0) {
    max = Math.max(max, firstHalf + lastHalf + 1);
  }
  console.log(max);
  return max;
};

longestMountain([
  2, 1, 4, 7, 8, 7, 3, 2, 3, 5, 8, 9, 8, 6, 5, 4, 2, 1, 5, 8, 9, 6, 3, 2,
]);
