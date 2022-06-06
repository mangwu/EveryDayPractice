/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-06-06 16:52:52                                                  *
 * @LastModifiedDate: 2022-06-06 16:58:14                                      *
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
  const n = arr.length;
  const ans = new Array(n).fill(0);
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
  // 遍历hash表
  for (const [key, val] of hash) {
    if (val.length > 1) {
      // 单一元素的间隔和一定为0
      let pre = 0;
      for (let i = 0; i < val.length; i++) {
        pre += val[i] - val[0];
      }
      ans[val[0]] = pre;
      for (let i = 1; i < val.length; i++) {
        let cur =
          pre +
          i * (val[i] - val[i - 1]) +
          (val.length - i) * (val[i - 1] - val[i]);
        ans[val[i]] = cur;
        pre = cur;
      }
    }
  }
  return ans;
};
