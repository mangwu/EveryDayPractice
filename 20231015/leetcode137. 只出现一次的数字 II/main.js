/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-10-15 21:33:53                                                  *
 * @LastModifiedDate: 2023-10-15 22:00:35                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 nums ，除某个元素仅出现 一次 外，其余每个元素都恰出现 三次 。请你找出并返回那个只出现了一次的元素。

// 你必须设计并实现线性时间复杂度的算法且使用常数级空间来解决此问题。

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const arr = new Array(32).fill(0);
  for (const num of nums) {
    for (let i = 0; i < 32; i++) {
      if (((num >> i) & 1) === 1) {
        arr[i]++;
      }
    }
  }
  arr.forEach((v, i) => (arr[i] = v % 3));
  arr.reverse();
  if (arr[0] === 1) {
    // 负数 取反加一
    arr.forEach((v, i) => (arr[i] = v ^ 1));
    return -(parseInt(arr.join(""), 2) + 1);
  } else {
    return parseInt(arr.join(""), 2);
  }
};
