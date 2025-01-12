/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-01-12 23:28:42                                                  *
 * @LastModifiedDate: 2025-01-13 00:26:06                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 对数组 nums 执行 按位与 相当于对数组 nums 中的所有整数执行 按位与 。

// 例如，对 nums = [1, 5, 3] 来说，按位与等于 1 & 5 & 3 = 1 。
// 同样，对 nums = [7] 而言，按位与等于 7 。
// 给你一个正整数数组 candidates 。计算 candidates 中的数字每种组合下 按位与 的结果。

// 返回按位与结果大于 0 的 最长 组合的长度。

/**
 * @param {number[]} candidates
 * @return {number}
 */
var largestCombination = function (candidates) {
  // 滑动窗口
  // 记录每位0 1的个数
  const bits = new Array(24).fill(0).map(() => new Array(2).fill(0));
  const n = candidates.length;
  updateBits(bits, candidates[0]);
  let right = 1;
  let res = 1;
  for (let i = 0; i < n; i++) {
    while (right < n && !isZero(bits)) {
      console.log([i, right - 1], isZero(bits));
      res = Math.max(res, right - i);
      updateBits(bits, candidates[right++]);
    }
    updateBits(bits, candidates[i], "delete");
    if (!isZero(bits)) res = Math.max(res, right - i);
  }
  return res;
};

function isZero(bits) {
  for (const [zero, one] of bits) {
    if (zero === 0 && one) return false;
  }
  return true;
}

function updateBits(bits, num, type = "add") {
  let i = 0;
  while (num) {
    type === "add" ? bits[i++][num % 2]++ : bits[i++][num % 2]--;
    num = num >> 1;
  }
}
/**
 * @param {number[]} candidates
 * @return {number}
 */
var largestCombination = function (candidates) {
  // 不是滑动窗口，元素可以任意选择
  // 计算二进制位中1最多的个数
  const bits = new Array(24).fill(0);
  for (let num of candidates) {
    let i = 0;
    while (num) {
      if (num % 2 === 1) bits[i]++;
      num = num >> 1;
      i++;
    }
  }
  return Math.max.apply(null, bits);
};
