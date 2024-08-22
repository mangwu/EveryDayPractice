/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-07-13 22:50:43                                                  *
 * @LastModifiedDate: 2024-07-13 23:08:03                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canSortArray = function (nums) {
  const n = nums.length;
  const arr = [];
  for (let i = 0; i < n; i++) {
    const bitNum = getBitNum(nums[i]);
    const curArr = [nums[i]];
    while (i + 1 < n && bitNum === getBitNum(nums[i + 1])) {
      curArr.push(nums[++i]);
    }
    curArr.sort((a, b) => a - b);
    arr.push(...curArr);
  }
  for (let i = 1; i < n; i++) {
    if (arr[i] < arr[i - 1]) return false;
  }
  return true;
};

/**
 * @description 获取数字数位1的个数
 * @param {number} num
 * @returns {number}
 */
function getBitNum(num) {
  let ans = 0;
  while (num) {
    if ((num & 1) === 1) ans++;
    num >>= 1;
  }
  return ans;
}
