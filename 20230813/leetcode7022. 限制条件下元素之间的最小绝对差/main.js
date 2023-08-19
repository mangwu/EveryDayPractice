/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-08-13 11:03:51                                                  *
 * @LastModifiedDate: 2023-08-13 12:00:28                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的整数数组 nums 和一个整数 x 。

// 请你找到数组中下标距离至少为 x 的两个元素的 差值绝对值 的 最小值 。

// 换言之，请你找到两个下标 i 和 j ，满足 abs(i - j) >= x 且 abs(nums[i] - nums[j]) 的值最小。

// 请你返回一个整数，表示下标距离至少为 x 的两个元素之间的差值绝对值的 最小值 。
class PriorityQueue2 {
  // 默认小根堆
  constructor(compare = (a, b) => a - b < 0) {
    this.data = [];
    this.size = 0;
    this.compare = compare;
  }
  // 返回队尾元素
  tail() {
    return this.size > 0 ? this.data[this.size - 1] : null;
  }
  // 返回队首元素
  head() {
    return this.size > 0 ? this.data[0] : null;
  }
  // 队首出队
  shift() {
    if (this.size > 0) {
      this.size--;
      return this.data.shift();
    }
  }
  // 队尾出队
  pop() {
    if (this.size > 0) {
      this.size--;
      return this.data.pop();
    }
  }
  // 入队
  push(val) {
    // 二分插入
    this.binaryInsert(this.size++, val);
  }
  binaryInsert(idx, val) {
    // 查找范围 [0, size)
    let left = 0;
    let right = idx;
    // 循环查找
    while (left < right) {
      // 中间索引
      let mid = Math.floor((left + right) / 2);

      if (this.compare(this.data[mid], val)) {
        // mid 比 val小 取右边 [mid + 1, right)
        left = mid + 1;
      } else {
        // mid 比 val 大 取左边 [left, mid)
        right = mid;
      }
      // 直到left === right ;
    }
    // 插入到left前
    this.data.splice(left, 0, val);
  }
  binaryRemove(val) {
    let left = 0;
    let right = this.size;
    while (left <= right) {
      // 中间索引
      let mid = Math.floor((left + right) / 2);
      if (this.data[mid] === val) {
        this.data.splice(mid, 1);
        this.size--;
        return;
      }
      if (this.compare(this.data[mid], val)) {
        // mid 比 val小 取右边 [mid + 1, right)
        left = mid + 1;
      } else {
        // mid 比 val 大 取左边 [left, mid-1]
        right = mid - 1;
      }
      // 直到left === right ;
    }
  }
  binarySearch(val) {
    // 找到比val大的第一个数
    let left = 0;
    let right = this.size;
    while (left < right) {
      // 中间索引
      let mid = Math.floor((left + right) / 2);
      if (this.data[mid] === val) {
        return val;
      }
      if (this.compare(this.data[mid], val)) {
        // mid 比 val小 取右边 [mid + 1, right)
        left = mid + 1;
      } else {
        // mid 比 val 大 取左边 [left, mid)
        right = mid;
      }
    }
    if (right === this.size) {
      return this.tail();
    }
    if (right === 0) {
      return this.head();
    }
    let val1 = this.data[right];
    let val2 = this.data[right - 1];
    if (Math.abs(val1 - val) < Math.abs(val2 - val)) return val1;
    else return val2;
  }
}
/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minAbsoluteDifference = function (nums, x) {
  const n = nums.length;
  if (n === x + 1) return Math.abs(nums[n - 1] - nums[0]);
  if (x === 0) return 0;
  const pq = new PriorityQueue2();
  const data = nums.slice(x).sort((a, b) => a - b);
  pq.data = data;
  pq.size = data.length;
  let res = Math.abs(nums[0] - pq.binarySearch(nums[0]));
  for (let i = 1; i < n; i++) {
    let remove = nums[i + x - 1];
    if (remove !== undefined) {
      pq.binaryRemove(remove);
    }
    let add = nums[i - x];
    if (add !== undefined) {
      pq.push(add);
    }
    if (pq.size) {
      res = Math.min(res, Math.abs(nums[i] - pq.binarySearch(nums[i])));
    }
  }
  return res;
};
