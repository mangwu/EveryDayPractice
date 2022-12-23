/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-12-22 13:14:41                                                  *
 * @LastModifiedDate: 2022-12-22 15:25:59                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
// 给你 nums ，它是一个大小为 2 * n 的正整数数组。你必须对这个数组执行 n 次操作。

// 在第 i 次操作时（操作编号从 1 开始），你需要：

// 选择两个元素 x 和 y 。
// 获得分数 i * gcd(x, y) 。
// 将 x 和 y 从 nums 中删除。
// 请你返回 n 次操作后你能获得的分数和最大为多少。

// 函数 gcd(x, y) 是 x 和 y 的最大公约数。

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxScore = function (nums) {
  const n = nums.length;
  const pq = new PQ((a, b) => a[2] - b[2]);
  nums.sort((a, b) => b - a);
  const hash = new Map();
  hash.set(nums[n - 1], 1);
  for (let i = 0; i < n - 1; i++) {
    hash.has(nums[i])
      ? hash.set(nums[i], hash.get(nums[i]) + 1)
      : hash.set(nums[i], 1);
    if (nums[i] === nums[i - 1]) {
      continue;
    }
    for (let j = i + 1; j < n; j++) {
      if (nums[j] === nums[j - 1] && j !== i + 1) {
        continue;
      }
      const res = gcd(nums[i], nums[j]);
      pq.addVal([nums[i], nums[j], res]);
    }
  }
  let ans = 0;
  let k = n / 2;
  while (k) {
    let cur = pq.data.pop();
    if (hash.has(cur[0]) && hash.has(cur[1])) {
      if (cur[0] === cur[1] && hash.get(cur[0]) === 1) {
        continue;
      }
      ans += k * cur[2];
      const f = hash.get(cur[0]);
      const s = hash.get(cur[1]);
      f === 1 ? hash.delete(cur[0]) : hash.set(cur[0], f - 1);
      s === 1 ? hash.delete(cur[1]) : hash.set(cur[1], s - 1);
      k--;
    }
  }
  return ans;
};

class PQ {
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
      if (this.compare(val, this.data[mid]) > 0) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    return right;
  }
}

var gcd = function (a, b) {
  if (b == 0) {
    return a;
  }
  return gcd(b, a % b);
};
