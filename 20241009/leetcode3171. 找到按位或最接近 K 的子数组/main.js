/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-10-09 09:14:21                                                  *
 * @LastModifiedDate: 2024-10-09 10:29:41                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个数组 nums 和一个整数 k 。你需要找到 nums 的一个
// 子数组
//  ，满足子数组中所有元素按位或运算 OR 的值与 k 的 绝对差 尽可能 小 。换言之，你需要选择一个子数组 nums[l..r] 满足 |k - (nums[l] OR nums[l + 1] ... OR nums[r])| 最小。

// 请你返回 最小 的绝对差值。

// 子数组 是数组中连续的 非空 元素序列。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums, k) {
  const bitArr = new Array(32).fill(0);
  const n = nums.length;
  let curNum = 0;
  let res = Infinity;
  let left = 0;
  let right = 0;
  while (right < n) {
    curNum = curNum | nums[right];
    res = Math.min(res, Math.abs(k - curNum));
    console.log(res, curNum, k);
    const numStr = nums[right++].toString(2).split("").reverse();
    const m = numStr.length;
    for (let i = 0; i < m; i++) if (numStr[i] === "1") bitArr[i]++;
    while (curNum > k) {
      const numStr = nums[left++].toString(2).split("").reverse();
      const m = numStr.length;
      for (let i = 0; i < m; i++) if (numStr[i] === "1") bitArr[i]--;
      curNum = getCurNumByBitArr(bitArr);
      if (left < right) res = Math.min(res, Math.abs(k - curNum));
    }
  }
  return res;
};

/**
 * @description
 * @param {number[]} bitArr
 * @returns {number}
 */
function getCurNumByBitArr(bitArr) {
  const n = bitArr.length;
  let res = 0;
  for (let i = 0; i < n; i++) {
    if (bitArr[i]) res += Math.pow(2, i);
  }
  return res;
}
