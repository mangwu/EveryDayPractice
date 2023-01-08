/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-01-08 10:33:50                                                  *
 * @LastModifiedDate: 2023-01-08 10:57:16                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的整数数组 nums 和一个整数 k 。你的 起始分数 为 0 。

// 在一步 操作 中：

// 选出一个满足 0 <= i < nums.length 的下标 i ，
// 将你的 分数 增加 nums[i] ，并且
// 将 nums[i] 替换为 ceil(nums[i] / 3) 。
// 返回在 恰好 执行 k 次操作后，你可能获得的最大分数。

// 向上取整函数 ceil(val) 的结果是大于或等于 val 的最小整数。

class Q {
  constructor(compare = (a, b) => a - b) {
    this.compare = compare;
    this.data = [];
  }
  addVal(val) {
    let idx = this.binarySearch(val);
    this.data.splice(idx, 0, val);
  }
  binarySearch(val) {
    let left = 0;
    let right = this.data.length;
    while (left < right) {
      let mid = (left + right) >> 1;
      // 找到第一个比val大的mid
      if (this.compare(this.data[mid], val) >= 0) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    return right;
  }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxKelements = function (nums, k) {
  const q = new Q((a, b) => a - b);
  nums.sort((a, b) => a - b);
  q.data = nums;
  let res = 0;
  for (let i = 0; i < k; i++) {
    let max = q.data.pop();
    res += max;
    q.addVal(Math.ceil(max / 3));
  }
  return res;
};
