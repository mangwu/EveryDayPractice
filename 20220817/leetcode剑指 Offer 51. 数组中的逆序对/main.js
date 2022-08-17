/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-17 09:20:42                                                  *
 * @LastModifiedDate: 2022-08-17 09:35:53                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 在数组中的两个数字，如果前面一个数字大于后面的数字，
// 则这两个数字组成一个逆序对。输入一个数组，求出这个数组中的逆序对的总数。

/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function (nums) {
  // 计算出每个元素后面小于当前元素的个数，然后相加
  // 使用优先队列计算
  const pq = new PQ();
  const n = nums.length;
  let ans = 0;
  for (let i = n - 1; i >= 0; i--) {
    ans += pq.addVal(nums[i]);
  }
  return ans;
};

// [7,5,6,4]
// 75 76 74 54 64

class PQ {
  constructor(compare = (a, b) => a - b) {
    this.data = [];
    this.compare = compare;
  }
  binarySearch(target) {
    // 二分查找，找到第一个大于等于target的索引（没有就是n）
    let left = 0;
    let right = this.data.length;
    while (left < right) {
      let mid = (left + right) >> 1;
      if (this.compare(this.data[mid], target) >= 0) {
        // mid 大于等于 target 在左边
        right = mid;
      } else {
        // mid 小于 target 在右边
        left = mid + 1;
      }
    }
    return right;
  }
  addVal(val) {
    let idx = this.binarySearch(val);
    this.data.splice(idx, 0, val);
    return idx;
  }
}
