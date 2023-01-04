/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-01-04 08:47:55                                                  *
 * @LastModifiedDate: 2023-01-04 09:50:36                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你三个正整数 n、index 和 maxSum 。你需要构造一个同时满足下述所有条件的数组 nums（下标 从 0 开始 计数）：

// nums.length == n
// nums[i] 是 正整数 ，其中 0 <= i < n
// abs(nums[i] - nums[i+1]) <= 1 ，其中 0 <= i < n-1
// nums 中所有元素之和不超过 maxSum
// nums[index] 的值被 最大化
// 返回你所构造的数组中的 nums[index] 。

// 注意：abs(x) 等于 x 的前提是 x >= 0 ；否则，abs(x) 等于 -x 。

/**
 * @param {number} n
 * @param {number} index
 * @param {number} maxSum
 * @return {number}
 */
var maxValue = function (n, index, maxSum) {
  let average = Math.floor(maxSum / n);
  let surplus = maxSum % n;
  // 多余的数可以用于提高nums[index]处的值
  // 6  17  => 2 2 2 2 2 2   5 => 0/n-1  1 3 6 所以只能增长2  => 1  1 4 8 所以也只能增长2 后续类似
  let left = index;
  let right = index;
  let growth = 0;
  let k = 0;
  while (growth < surplus) {
    growth += right - left + 1;
    if (growth > surplus) {
      break;
    }
    k++;
    if (left > 0) left--;
    if (right < n - 1) right++;
  }
  return Math.min(n - 1, average + growth);
};

// 1 1 1 1 1 1
// 4

// 上述解答错误，不能按照平均值预先分配

/**
 * @param {number} n
 * @param {number} index
 * @param {number} maxSum
 * @return {number}
 */
var maxValue = function (n, index, maxSum) {
  // 多余的数可以用于提高nums[index]处的值
  // 6  17  => 2 2 2 2 2 2   5 => 0/n-1  1 3 6 所以只能增长2  => 1  1 4 8 所以也只能增长2 后续类似
  let left = index;
  let right = index;
  let growth = 0;
  let k = 0;
  while (growth <= maxSum) {
    growth += right - left + 1;
    if (growth > maxSum) {
      break;
    }
    k++;
    console.log(growth, k, left, right);
    if (left === 0 && right === n - 1) {
      // 增加到达瓶颈，可以提前结束
      let diff = maxSum - growth;
      return k + Math.floor(diff / n);
    }
    if (left > 0) left--;
    if (right < n - 1) right++;
  }
  return k;
};

maxValue(4, 0, 4);

// 不要忽略nums[i] 是 正整数这个条件

/**
 * @param {number} n
 * @param {number} index
 * @param {number} maxSum
 * @return {number}
 */
var maxValue = function (n, index, maxSum) {
  // 多余的数可以用于提高nums[index]处的值
  // 6  17  => 2 2 2 2 2 2   5 => 0/n-1  1 3 6 所以只能增长2  => 1  1 4 8 所以也只能增长2 后续类似
  let left = index;
  let right = index;
  let growth = 0;
  maxSum -= n;
  let k = 1;
  while (growth <= maxSum) {
    growth += right - left + 1;
    if (growth > maxSum) {
      break;
    }
    k++;
    if (left === 0 && right === n - 1) {
      // 增加到达瓶颈，可以提前结束
      let diff = maxSum - growth;
      return k + Math.floor(diff / n);
    }
    if (left > 0) left--;
    if (right < n - 1) right++;
  }
  return k;
};
