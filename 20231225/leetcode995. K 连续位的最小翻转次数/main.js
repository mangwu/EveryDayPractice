// 给定一个二进制数组 nums 和一个整数 k 。

// k位翻转 就是从 nums 中选择一个长度为 k 的 子数组 ，同时把子数组中的每一个 0 都改成 1 ，把子数组中的每一个 1 都改成 0 。

// 返回数组中不存在 0 所需的最小 k位翻转 次数。如果不可能，则返回 -1 。

// 子数组 是数组的 连续 部分。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minKBitFlips = function (nums, k) {
  if (k === 1) {
    // 直接返回0的数量
    return nums.reduce((pre, cur) => (cur === 0 ? ++pre : pre), 0);
  }

};

// 01100011
// 11000011
