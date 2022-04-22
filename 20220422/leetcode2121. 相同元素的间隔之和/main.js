/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-22 14:53:37                                                  *
 * @LastModifiedDate: 2022-04-22 17:41:12                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始、由 n 个整数组成的数组 arr 。

// arr 中两个元素的 间隔 定义为它们下标之间的 绝对差 。更正式地，arr[i] 和 arr[j] 之间的间隔是 |i - j| 。

// 返回一个长度为 n 的数组 intervals ，其中 intervals[i] 是 arr[i] 和 arr 中每个相同元素（与 arr[i] 的值相同）的 间隔之和 。

// 注意：|x| 是 x 的绝对值。

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var getDistances = function (arr) {
  // hash表解法
  const n = arr.length;
  const hash = new Map();
  for (let i = 0; i < n; i++) {
    if (hash.has(arr[i])) {
      const a = hash.get(arr[i]);
      a.push(i);
      hash.set(arr[i], a);
    } else {
      hash.set(arr[i], [i]);
    }
  }
  const ans = new Array(n).fill(0);
  for (const [_key, value] of hash) {
    const m = value.length;
    if (m !== 1) {
      // f(x) - f(x-1) = (2x - m)(values[x] - value[x-1]);
      // f(0) = sumValue - m * value[0]
      let sumValue = 0;
      let f = 0;
      for (let i = 0; i < m; i++) {
        sumValue += value[i];
      }
      f = sumValue - m * value[0];
      ans[value[0]] = f;
      for (let i = 1; i < m; i++) {
        f = f + (2 * i - m) * (value[i] - value[i - 1]);
        ans[value[1]] = f;
      }
    }
  }
  return ans;
};

// 间隔计算
// m = value.length;
// f(0) = value[1] - value[0] + value[2] - value[0] + .... + value[m-1] - value[0]
// f(0) = sumValue - value[0] - (m - 1) * value[0]
// f(1) = value[1] - value[0] + value[2] - value[1] +... + value[m-1] - value[1]
// f(1) = sumValue - value[0] - (m - 2) * value[1]
// f(2) = value[2] - value[0] + value[2] - value[1] + value[3] - value[2] + ... + value[m-1] - value[2]
// f(2) =
// f(x) = 后面m-x-1个之和 - 前面x个之和 + 前面加上的x个values[x] - 后面减去的(m-x-1)个values[x]
// f(x) = 后面m-x-1个之和 - 前面x个之和  + x * values[x] +  - (m-x-1) * values[x]
//      = 后面m-x-1个之和 - 前面x个之和 - (m - 2x - 1) * values[x]
// f(x) = sumOfLast(m-x-1) - sumOfFront(x) - (m - 2x -1) * values[x]
// f(x-1) = sumOfLast(m-x) - sumOfFront(x-1) - (m - 2x + 1) * values[x-1]
// f(x) - f(x-1) = -values[x] -values[x-1] -(m-2x)(values[x] - value[x-1]) + values[x] + values[x-1]
// f(x) - f(x-1) = (2x - m)(values[x] - value[x-1]);
// x = 2
//  0 1 2 3
// [1,3,5,6]

// [1, 3, 4]
// f(0) = 2 + 3 = 5
// f(1) = f(0) + (-1)(2) = 3
// f(2) = f(1) + 1(1) = 4
