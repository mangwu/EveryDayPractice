/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-21 22:16:03                                                  *
 * @LastModifiedDate: 2022-08-21 22:37:54                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 nums 和一个 正 整数 k 。你可以选择数组的任一 子序列 并且对其全部元素求和。

// 数组的 第 k 大和 定义为：可以获得的第 k 个 最大 子序列和（子序列和允许出现重复）

// 返回数组的 第 k 大和 。

// 子序列是一个可以由其他数组删除某些或不删除元素排生而来的数组，且派生过程不改变剩余元素的顺序。

// 注意：空子序列的和视作 0 。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var kSum = function (nums, k) {
  // 最大子序列是非负数的和
  // 求第k个最大子序列可以将最大子序列中的元素减去或者加上未选择的负数
  // 我们在遍历求得最大子序列时，将负数求绝对值，那么相当于在nums中找第k-1个最小子序列
  // 查找最小子序列的和可以使用优先队列实现
  // 因为k小于2000,可以排序nums后，选或不选k
  let maxSum = 0;
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    if (nums[i] < 0) {
      nums[i] = -nums[i];
    } else {
      maxSum += nums[i];
    }
  }
  // 找到第k-1小的子序列
  nums.sort((a, b) => a - b);
  const pq = new PQ((a, b) => a[0] - b[0]);
  pq.addVal([0, 0]); // 第一个是和，第二个是索引
  while (k > 1) {
    k -= 1;
    // 取出最小的序列
    const [sum, idx] = pq.offer();
    if (idx < n) {
      // 选择idx
      pq.addVal([sum + nums[idx], idx + 1]);
      if (idx) {
        // 不选idx (idx为0时必须选择，所以做了判断）
        pq.addVal([sum + nums[idx] - nums[idx - 1], idx + 1]);
      }
    }
  }
  return maxSum - pq.offer()[0];
};

class PQ {
  constructor(compare = (a, b) => a - b) {
    this.data = [];
    this.compare = compare;
  }
  binarySearch(target) {
    let left = 0;
    let right = this.data.length;
    // 找到第一个比它大的数或相等的数
    while (left < right) {
      let mid = (left + right) >> 1;
      if (target == this.data[mid]) {
        return mid;
      } else if (this.compare(target, this.data[mid]) > 0) {
        // target比mid大，在左边
        right = mid;
      } else {
        // target比mid小，在右边
        left = mid + 1;
      }
    }
    return right;
  }
  addVal(val) {
    let idx = this.binarySearch(val);
    this.data.splice(idx, 0, val);
  }
  offer() {
    return this.data.pop();
  }
}
